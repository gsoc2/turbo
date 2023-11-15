#![feature(iter_intersperse)]

use std::{collections::HashSet, sync::Arc};

use self::{reader::TraceReader, server::serve, store_container::StoreContainer};

mod reader;
mod server;
mod span;
mod store;
mod store_container;
mod viewer;

fn main() {
    let args: HashSet<String> = std::env::args().skip(1).collect();

    let arg = args
        .iter()
        .next()
        .expect("missing argument: trace file path");

    let store = Arc::new(StoreContainer::new());
    let reader = TraceReader::spawn(store.clone(), arg.into());

    serve(store).unwrap();

    reader.join().unwrap();
}
