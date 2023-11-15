use std::{
    collections::{HashMap, HashSet},
    fs::File,
    io::Read,
    path::PathBuf,
    sync::Arc,
    thread::{self, JoinHandle},
    time::Duration,
};

use turbopack_trace_utils::tracing::TraceRow;

use crate::{
    span::SpanId,
    store_container::{StoreContainer, StoreWriteGuard},
};

const MAX_ROWS_PER_LOCK: usize = 100 * 1024;

pub struct TraceReader {
    store: Arc<StoreContainer>,
    path: PathBuf,
}

impl TraceReader {
    pub fn spawn(store: Arc<StoreContainer>, path: PathBuf) -> JoinHandle<()> {
        let mut reader = Self { store, path };
        std::thread::spawn(move || reader.run())
    }

    pub fn run(&mut self) {
        loop {
            if self.try_read() {
                self.store.write().reset();
            }
            thread::sleep(Duration::from_millis(500));
        }
    }

    fn try_read(&mut self) -> bool {
        let Ok(mut file) = File::open(&self.path) else {
            return false;
        };

        let mut reader_state = ReaderState::default();
        let mut total_rows = 0;

        let mut buffer = Vec::new();
        let mut index = 0;

        loop {
            let mut chunk = [0; 1024 * 1024];
            match file.read(&mut chunk) {
                Ok(bytes_read) => {
                    if bytes_read == 0 {
                        // No more data to read, sleep for a while to wait for more data
                        thread::sleep(Duration::from_millis(100));
                    } else {
                        // If we have partially consumed some data, and we are at buffer capacity,
                        // remove the consumed data to make more space.
                        if index > 0 && buffer.len() + bytes_read > buffer.capacity() {
                            buffer.splice(..index, std::iter::empty());
                            index = 0;
                        }
                        buffer.extend_from_slice(&chunk[..bytes_read]);
                        let mut rows = Vec::new();
                        loop {
                            match postcard::take_from_bytes(&buffer[index..]) {
                                Ok((row, remaining)) => {
                                    index = buffer.len() - remaining.len();
                                    rows.push(row);
                                }
                                Err(err) => {
                                    if matches!(err, postcard::Error::DeserializeUnexpectedEnd) {
                                        break;
                                    }
                                    println!("error: {:?}", err);
                                }
                            }
                        }
                        if !rows.is_empty() {
                            let mut store = self.store.write();
                            total_rows += rows.len();
                            for row in rows {
                                process(&mut store, &mut reader_state, row);
                            }
                            store.invalidate_outdated_spans(&reader_state.outdated_spans);
                            reader_state.outdated_spans.clear();
                        }
                    }
                }
                Err(_) => {
                    // Error reading file, maybe it was removed
                    let mut store = self.store.write();
                    store.reset();
                    return true;
                }
            }
        }
    }
}

fn process(store: &mut StoreWriteGuard, state: &mut ReaderState, row: TraceRow<'_>) {
    match row {
        TraceRow::Start {
            ts,
            id,
            parent,
            name,
            target,
            values,
        } => {
            let parent = if let Some(parent) = parent {
                if let Some(parent) = state.active_ids.get(&parent) {
                    Some(*parent)
                } else {
                    state
                        .queued_rows
                        .entry(parent)
                        .or_default()
                        .push(TraceRow::Start {
                            ts,
                            id,
                            parent: Some(parent),
                            name: name.into_owned().into(),
                            target: target.into_owned().into(),
                            values: values
                                .into_iter()
                                .map(|(k, v)| (k.into_owned().into(), v.into_static()))
                                .collect(),
                        });
                    return;
                }
            } else {
                None
            };
            let span_id = store.add_span(
                parent,
                ts,
                target.into_owned(),
                name.into_owned(),
                values
                    .iter()
                    .map(|(k, v)| (k.to_string(), v.to_string()))
                    .collect(),
                &mut state.outdated_spans,
            );
            state.active_ids.insert(id, span_id);
        }
        TraceRow::End { ts: _, id } => {
            // id might be reused
            state.active_ids.remove(&id);
        }
        TraceRow::Enter { ts, id, thread_id } => {
            let Some(&id) = state.active_ids.get(&id) else {
                state
                    .queued_rows
                    .entry(id)
                    .or_default()
                    .push(TraceRow::Enter { ts, id, thread_id });
                return;
            };
            let stack = state.thread_stacks.entry(thread_id).or_default();
            if let Some(&parent) = stack.last() {
                if let Some(parent_start) = state.self_time_started.remove(&(parent, thread_id)) {
                    store.add_self_time(parent, parent_start, ts, &mut state.outdated_spans);
                }
            }
            stack.push(id);
            state.self_time_started.insert((id, thread_id), ts);
        }
        TraceRow::Exit { ts, id, thread_id } => {
            let Some(&id) = state.active_ids.get(&id) else {
                state
                    .queued_rows
                    .entry(id)
                    .or_default()
                    .push(TraceRow::Exit { ts, id, thread_id });
                return;
            };
            let stack = state.thread_stacks.entry(thread_id).or_default();
            if let Some(pos) = stack.iter().rev().position(|&x| x == id) {
                let stack_index = stack.len() - pos - 1;
                stack.remove(stack_index);
                if stack_index > 0 {
                    let parent = stack[stack_index - 1];
                    state.self_time_started.insert((parent, thread_id), ts);
                }
            }
            if let Some(start) = state.self_time_started.remove(&(id, thread_id)) {
                store.add_self_time(id, start, ts, &mut state.outdated_spans);
            }
        }
        TraceRow::Event { ts, parent, values } => {
            let _parent = if let Some(parent) = parent {
                if let Some(parent) = state.active_ids.get(&parent) {
                    Some(*parent)
                } else {
                    state
                        .queued_rows
                        .entry(parent)
                        .or_default()
                        .push(TraceRow::Event {
                            ts,
                            parent: Some(parent),
                            values: values
                                .into_iter()
                                .map(|(k, v)| (k.into_owned().into(), v.into_static()))
                                .collect(),
                        });
                    return;
                }
            } else {
                None
            };
        }
    }
}

#[derive(Default)]
struct ReaderState {
    active_ids: HashMap<u64, SpanId>,
    queued_rows: HashMap<u64, Vec<TraceRow<'static>>>,
    outdated_spans: HashSet<SpanId>,
    thread_stacks: HashMap<u64, Vec<SpanId>>,
    self_time_started: HashMap<(SpanId, u64), u64>,
}
