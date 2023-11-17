use std::{
    collections::{HashMap, HashSet},
    sync::{Arc, Mutex},
};

use itertools::Itertools;
use jsonc_parser::CollectOptions;
use serde_json::Value;
use tokio::sync::Mutex as AsyncMutex;
use tower_lsp::{jsonrpc::Result, lsp_types::*, Client, LanguageServer};
use turbopath::AbsoluteSystemPathBuf;
use turborepo_lib::{DaemonClient, DaemonConnector, DaemonPackageDiscovery, DaemonRootHasher};
use turborepo_repository::{
    discovery::{PackageDiscovery, WorkspaceData},
    package_json::PackageJson,
};

#[derive(Debug)]
pub struct Backend {
    pub client: Client,
    repo_root: Arc<Mutex<Option<AbsoluteSystemPathBuf>>>,
    files: Mutex<HashMap<Url, crop::Rope>>,
    initializer: tokio::sync::watch::Sender<Option<Arc<AsyncMutex<DaemonClient<DaemonConnector>>>>>,
    discovery: tokio::sync::watch::Receiver<Option<Arc<AsyncMutex<DaemonClient<DaemonConnector>>>>>,
}

#[tower_lsp::async_trait]
impl LanguageServer for Backend {
    async fn initialize(&self, params: InitializeParams) -> Result<InitializeResult> {
        if let Some(uri) = params.root_uri {
            // convert uri file:///absolute-path to AbsoluteSystemPathBuf
            let repo_root = AbsoluteSystemPathBuf::new(
                uri.to_file_path().unwrap().as_os_str().to_str().unwrap(),
            )
            .unwrap();

            self.repo_root.lock().unwrap().replace(repo_root.clone());

            let hasher = DaemonRootHasher::new(&repo_root);

            let connector = DaemonConnector {
                can_start_server: true,
                can_kill_server: false,
                pid_file: hasher.lock_path(),
                sock_file: hasher.sock_path(),
            };

            self.client
                .log_message(
                    MessageType::INFO,
                    format!("root uri: {}", hasher.sock_path()),
                )
                .await;

            let daemon = connector.connect().await.unwrap();
            self.initializer
                .send(Some(Arc::new(AsyncMutex::new(daemon))))
                .expect("there is a receiver");
        }

        Ok(InitializeResult {
            server_info: None,
            capabilities: ServerCapabilities {
                text_document_sync: Some(TextDocumentSyncCapability::Kind(
                    TextDocumentSyncKind::INCREMENTAL,
                )),
                completion_provider: Some(CompletionOptions {
                    resolve_provider: Some(false),
                    trigger_characters: Some(vec![".".to_string()]),
                    work_done_progress_options: Default::default(),
                    all_commit_characters: None,
                    ..Default::default()
                }),
                execute_command_provider: Some(ExecuteCommandOptions {
                    commands: vec![
                        // "turbo.run".to_string(),
                        // todo: port these from JS land
                        // "turbo.daemon.start".to_string(),
                        // "turbo.daemon.status".to_string(),
                        // "turbo.daemon.stop".to_string(),
                    ],
                    work_done_progress_options: Default::default(),
                }),
                workspace: Some(WorkspaceServerCapabilities {
                    workspace_folders: Some(WorkspaceFoldersServerCapabilities {
                        supported: Some(true),
                        change_notifications: Some(OneOf::Left(true)),
                    }),
                    file_operations: None,
                }),
                code_lens_provider: Some(CodeLensOptions {
                    resolve_provider: None,
                }),
                code_action_provider: Some(CodeActionProviderCapability::Options(
                    CodeActionOptions {
                        code_action_kinds: Some(vec![CodeActionKind::QUICKFIX]),
                        resolve_provider: None,
                        work_done_progress_options: WorkDoneProgressOptions {
                            work_done_progress: None,
                        },
                    },
                )),
                references_provider: Some(OneOf::Right(ReferencesOptions {
                    work_done_progress_options: WorkDoneProgressOptions {
                        work_done_progress: None,
                    },
                })),
                ..ServerCapabilities::default()
            },
        })
    }

    async fn references(&self, params: ReferenceParams) -> Result<Option<Vec<Location>>> {
        self.client
            .log_message(MessageType::INFO, "references!")
            .await;

        let tasks = {
            let rope = {
                let map = self.files.lock().unwrap();
                match map.get(&params.text_document_position.text_document.uri) {
                    Some(files) => files,
                    None => return Ok(None),
                }
                .to_owned() // cloning is cheap
            };

            let text = rope.chunks().join("");
            let parse = jsonc_parser::parse_to_ast(
                &text,
                &CollectOptions {
                    comments: true,
                    tokens: true,
                },
                &Default::default(),
            );

            // iterate pipeline items, and see if any of their ranges intersect
            // with the reference request's position
            let parse = match parse {
                Ok(parse) => parse,
                Err(_err) => {
                    // todo: do we error here?
                    return Ok(None);
                }
            };

            let pipeline = parse
                .value
                .as_ref()
                .and_then(|v| v.as_object())
                .and_then(|o| o.get_object("pipeline"))
                .map(|p| p.properties.iter())
                .into_iter()
                .flatten();

            let mut tasks = vec![];
            for task in pipeline {
                let mut range = task.range;
                range.start += 1; // account for quote
                let key_range = range.start + task.name.as_str().len();
                range.end = key_range;

                // convert ast range to lsp range
                let lsp_range = convert_ranges(&rope, range);

                if lsp_range.start < params.text_document_position.position
                    && lsp_range.end > params.text_document_position.position
                {
                    tasks.push(task.name.as_str().to_string());
                }
            }
            tasks
        };

        self.client
            .log_message(MessageType::INFO, format!("{:?}", tasks))
            .await;

        let packages = self.package_discovery().await;
        let repo_root = self.repo_root.lock().unwrap().clone().unwrap();

        let mut locations = vec![];
        for wd in packages {
            let data = std::fs::read_to_string(&wd.package_json).unwrap();
            let package_json = PackageJson::from_str(&data).unwrap();
            let scripts = package_json.scripts.into_keys().collect::<HashSet<_>>();

            // if in the root, the name should be '//'
            let package_json_name = if repo_root.contains(&wd.package_json) {
                Some("//")
            } else {
                package_json.name.as_ref().map(|s| s.as_str())
            };

            // todo: use jsonc_ast instead of text search
            let rope = crop::Rope::from(data.clone());

            for task in tasks.iter() {
                let (package, task) = task
                    .rsplit_once('#')
                    .map(|(p, t)| (Some(p), t))
                    .unwrap_or((None, task));

                if let (Some(package), Some(package_name)) = (package, package_json_name) {
                    if package_name != package {
                        continue;
                    }
                };

                let Some(start) = data.find(&format!("\"{}\"", task)) else {
                    continue;
                };
                let end = start + task.len() + 2;

                let start_line = rope.line_of_byte(start);
                let end_line = rope.line_of_byte(end);

                let range = Range {
                    start: Position {
                        line: start_line as u32,
                        character: (start - rope.byte_of_line(start_line)) as u32,
                    },
                    end: Position {
                        line: end_line as u32,
                        character: (end - rope.byte_of_line(end_line)) as u32,
                    },
                };

                if scripts.contains(task) {
                    let mut location =
                        Location::new(Url::from_file_path(&wd.package_json).unwrap(), range);
                    locations.push(location);
                }
            }
        }

        Ok(Some(locations))
    }

    async fn code_lens(&self, params: CodeLensParams) -> Result<Option<Vec<CodeLens>>> {
        self.client
            .log_message(MessageType::INFO, "code lens!")
            .await;

        let rope = {
            let map = self.files.lock().unwrap();
            match map.get(&params.text_document.uri) {
                Some(files) => files,
                None => return Ok(None),
            }
            .to_owned() // cloning is cheap
        };

        let text = rope.chunks().join("");
        let parse = jsonc_parser::parse_to_ast(
            &text,
            &CollectOptions {
                comments: true,
                tokens: true,
            },
            &Default::default(),
        );

        let parse = match parse {
            Ok(parse) => parse,
            Err(_err) => {
                // todo: do we error here?
                // self.client
                //     .log_message(MessageType::ERROR, format!("{:?}", err))
                //     .await;
                return Ok(None);
            }
        };

        let pipeline = parse
            .value
            .as_ref()
            .and_then(|v| v.as_object())
            .and_then(|o| o.get_object("pipeline"))
            .map(|p| p.properties.iter())
            .into_iter()
            .flatten();

        let mut tasks = vec![];
        for task in pipeline {
            let mut range = task.range;
            range.start += 1; // account for quote
            let key_range = range.start + task.name.as_str().len();
            range.end = key_range;

            tasks.push(CodeLens {
                command: Some(Command {
                    title: format!("Run {}", task.name.as_str()),
                    command: "turbo.run".to_string(),
                    arguments: Some(vec![Value::String(task.name.as_str().to_string())]),
                }),
                range: convert_ranges(&rope, range),
                data: None,
            });
        }

        Ok(Some(tasks))
    }

    async fn code_action(&self, params: CodeActionParams) -> Result<Option<CodeActionResponse>> {
        self.client
            .log_message(MessageType::INFO, format!("{:#?}", params))
            .await;

        let mut code_actions = vec![];

        for diag in params.context.diagnostics {
            match &diag.code {
                Some(NumberOrString::String(s)) if s == "deprecated:env-var" => {
                    code_actions.push(CodeActionOrCommand::CodeAction(CodeAction {
                        title: "Apply codemod".to_string(),
                        command: Some(Command {
                            title: "Apply codemod".to_string(),
                            command: "turbo.codemod".to_string(),
                            arguments: Some(vec![Value::String(
                                "migrate-env-var-dependencies".to_string(),
                            )]),
                        }),
                        diagnostics: Some(vec![diag]),
                        kind: Some(CodeActionKind::QUICKFIX),
                        is_preferred: Some(true),
                        ..Default::default()
                    }))
                }
                _ => {}
            }
        }

        Ok(Some(code_actions))
    }

    async fn initialized(&self, _: InitializedParams) {
        self.client
            .log_message(MessageType::INFO, "initialized!")
            .await;
    }

    async fn shutdown(&self) -> Result<()> {
        Ok(())
    }

    async fn did_change_workspace_folders(&self, _: DidChangeWorkspaceFoldersParams) {
        self.client
            .log_message(MessageType::INFO, "workspace folders changed!")
            .await;
    }

    async fn did_change_configuration(&self, _: DidChangeConfigurationParams) {
        self.client
            .log_message(MessageType::INFO, "configuration changed!")
            .await;
    }

    async fn did_change_watched_files(&self, _: DidChangeWatchedFilesParams) {
        self.client
            .log_message(MessageType::INFO, "watched files have changed!")
            .await;
    }

    async fn execute_command(&self, _: ExecuteCommandParams) -> Result<Option<Value>> {
        self.client
            .log_message(MessageType::INFO, "command executed!")
            .await;

        match self.client.apply_edit(WorkspaceEdit::default()).await {
            Ok(res) if res.applied => self.client.log_message(MessageType::INFO, "applied").await,
            Ok(_) => self.client.log_message(MessageType::INFO, "rejected").await,
            Err(err) => self.client.log_message(MessageType::ERROR, err).await,
        }

        Ok(None)
    }

    async fn did_open(&self, document: DidOpenTextDocumentParams) {
        self.client
            .log_message(MessageType::INFO, "file opened!")
            .await;

        let rope = crop::Rope::from(document.text_document.text);

        {
            let mut map = self.files.lock().unwrap();
            map.insert(document.text_document.uri.clone(), rope.clone());
        }

        self.handle_file_update(document.text_document.uri, Some(rope), None)
            .await;
    }

    async fn did_change(&self, document: DidChangeTextDocumentParams) {
        self.client
            .log_message(MessageType::INFO, "file changed!")
            .await;

        let updated_rope = {
            let mut map = self.files.lock().unwrap();
            let rope = map.entry(document.text_document.uri.clone()).or_default();

            for change in document.content_changes {
                match change.range {
                    Some(range) => {
                        let start_offset = rope.byte_of_line(range.start.line as usize)
                            + range.start.character as usize;
                        let end_offset = rope.byte_of_line(range.end.line as usize)
                            + range.end.character as usize;

                        rope.replace(start_offset..end_offset, change.text);
                    }
                    None => *rope = crop::Rope::from(change.text),
                }
            }

            rope.clone()
        };

        self.handle_file_update(
            document.text_document.uri,
            Some(updated_rope),
            Some(document.text_document.version),
        )
        .await;
    }

    async fn did_save(&self, _: DidSaveTextDocumentParams) {
        self.client
            .log_message(MessageType::INFO, "file saved!")
            .await;
    }

    async fn did_close(&self, _: DidCloseTextDocumentParams) {
        self.client
            .log_message(MessageType::INFO, "file closed!")
            .await;
    }

    async fn completion(&self, _: CompletionParams) -> Result<Option<CompletionResponse>> {
        let packages = self.package_discovery().await;

        let tasks = packages
            .iter()
            .map(|wd| {
                let package_json = PackageJson::load(&wd.package_json).unwrap();
                package_json.scripts.into_keys()
            })
            .flatten()
            .unique()
            .map(|s| CompletionItem {
                label: s,
                kind: Some(CompletionItemKind::FIELD),
                ..Default::default()
            });

        let keys = packages
            .iter()
            .map(|wd| {
                let package_json = PackageJson::load(&wd.package_json).unwrap();
                package_json
                    .scripts
                    .into_keys()
                    .map(move |k| (package_json.name.clone(), k))
            })
            .flatten()
            .map(|(package, s)| CompletionItem {
                label: format!("{}#{}", package.unwrap_or_default(), s),
                kind: Some(CompletionItemKind::FIELD),
                ..Default::default()
            });

        Ok(Some(CompletionResponse::Array(keys.chain(tasks).collect())))
    }
}

impl Backend {
    pub fn new(client: Client) -> Self {
        let (rx, tx) = tokio::sync::watch::channel(None);

        Self {
            client,
            repo_root: Arc::new(Mutex::new(None)),
            files: Mutex::new(HashMap::new()),
            initializer: rx,
            discovery: tx,
        }
    }

    pub async fn package_discovery(&self) -> Vec<WorkspaceData> {
        let arc = {
            let mut discovery = self.discovery.clone();
            let daemon = discovery.wait_for(|d| d.is_some()).await;
            let daemon = daemon.as_ref().unwrap();
            daemon.as_ref().unwrap().clone()
        };

        let mut daemon = arc.lock().await;

        DaemonPackageDiscovery::new(&mut daemon)
            .discover_packages()
            .await
            .unwrap()
    }

    /// Handle a file update to a rope, emitting diagnostics if necessary.
    async fn handle_file_update(&self, uri: Url, rope: Option<crop::Rope>, version: Option<i32>) {
        let rope = match rope {
            Some(rope) => rope,
            None => match self.files.lock().unwrap().get(&uri) {
                Some(files) => files,
                None => return,
            }
            .clone(),
        };

        let contents = rope.chunks().join("");
        let mut diagnostics = vec![];

        let packages = self.package_discovery().await;

        self.client
            .log_message(MessageType::INFO, format!("{:#?}", packages))
            .await;

        let repo_root = self.repo_root.lock().unwrap().clone().unwrap();

        let tasks = packages
            .into_iter()
            .map(|wd| {
                let package_json = PackageJson::load(&wd.package_json).unwrap();
                let package_json_name = if repo_root.contains(&wd.package_json) {
                    Some("//".to_string())
                } else {
                    package_json.name
                };
                package_json
                    .scripts
                    .into_keys()
                    .map(move |k| (k, package_json_name.clone()))
            })
            .flatten()
            .into_group_map();

        let package_names = tasks
            .values()
            .flatten()
            .flatten()
            .map(|s| s.as_str())
            .unique()
            .collect::<HashSet<_>>();

        {
            let parse =
                jsonc_parser::parse_to_ast(&contents, &Default::default(), &Default::default());

            let parse = match parse {
                Ok(parse) => parse,
                Err(_err) => {
                    // TODO: do we error here?

                    // self.client
                    //     .log_message(MessageType::ERROR, format!("{:?}", err))
                    //     .await;
                    return;
                }
            };

            let object = parse.value.as_ref().and_then(|v| v.as_object());

            let mut globs = vec![];

            globs.extend(
                object
                    .and_then(|o| o.get_array("globalDependencies"))
                    .map(|d| &d.elements)
                    .into_iter()
                    .flatten(),
            );

            let pipeline = object
                .and_then(|o| o.get_object("pipeline"))
                .map(|p| p.properties.iter());

            for property in pipeline.into_iter().flatten() {
                let (package, task) = property
                    .name
                    .as_str()
                    .rsplit_once('#')
                    .map(|(p, t)| (Some(p), t))
                    .unwrap_or((None, property.name.as_str()));

                let mut object_range = property.range;
                object_range.start += 1; // account for quote
                let object_key_range = object_range.start + property.name.as_str().len();
                object_range.end = object_key_range;

                match (tasks.get(task), package) {
                    // we specified a package, but that package doesn't exist
                    (_, Some(package)) if !package_names.contains(&package) => {
                        diagnostics.push(Diagnostic {
                            message: format!("The package `{}` does not exist.", package),
                            range: convert_ranges(&rope, object_range),
                            severity: Some(DiagnosticSeverity::ERROR),
                            code: Some(NumberOrString::String("turbo:no-such-package".to_string())),
                            ..Default::default()
                        });
                    }
                    // that task exists, and we have a package defined, but the task doesn't exist
                    // in that package
                    (Some(list), Some(package))
                        if !list
                            .iter()
                            .filter_map(|s| s.as_ref().map(|s| s.as_str()))
                            .contains(&package) =>
                    {
                        diagnostics.push(Diagnostic {
                            message: format!(
                                "The task `{}` does not exist in the package `{}`.",
                                task, package
                            ),
                            range: convert_ranges(&rope, object_range),
                            severity: Some(DiagnosticSeverity::ERROR),
                            code: Some(NumberOrString::String(
                                "turbo:no-such-task-in-package".to_string(),
                            )),
                            ..Default::default()
                        });
                    }
                    // the task doesn't exist anywhere, so we have a problem
                    (None, None) => {
                        diagnostics.push(Diagnostic {
                            message: format!("The task `{}` does not exist.", task),
                            range: convert_ranges(&rope, object_range),
                            severity: Some(DiagnosticSeverity::WARNING),
                            code: Some(NumberOrString::String("turbo:no-such-task".to_string())),
                            ..Default::default()
                        });
                    }
                    // we have specified a package, but the task doesn't exist at all
                    (None, Some(package)) => {
                        diagnostics.push(Diagnostic {
                            message: format!(
                                "The task `{}` does not exist in the package `{}`.",
                                task, package
                            ),
                            range: convert_ranges(&rope, object_range),
                            severity: Some(DiagnosticSeverity::ERROR),
                            code: Some(NumberOrString::String("turbo:no-such-task".to_string())),
                            ..Default::default()
                        });
                    }
                    // task exists in a given package, so we're good
                    (Some(_), Some(_)) => {}
                    // the task exists and we haven't specified a package, so we're good
                    (Some(_), None) => {}
                }

                globs.extend(
                    ["inputs", "outputs"]
                        .iter()
                        .filter_map(|s| {
                            property
                                .value
                                .as_object()
                                .and_then(|o| o.get_array(s))
                                .map(|a| &a.elements)
                        })
                        .flatten(),
                );

                // inputs, outputs

                // dependsOn
                if let Some(array) = property
                    .value
                    .as_object()
                    .and_then(|o| o.get_array("dependsOn"))
                {
                    for depends_on in &array.elements {
                        if let Some(string) = depends_on.as_string_lit() {
                            if string.value.starts_with('^') {
                                diagnostics.push(Diagnostic {
                                    message: format!(
                                        "The '^' means \"run the `{}` task in the package's \
                                         depencies before this one\"",
                                        &string.value[1..],
                                    ),
                                    range: convert_ranges(
                                        &rope,
                                        collapse_string_range(string.range),
                                    ),
                                    severity: Some(DiagnosticSeverity::INFORMATION),
                                    ..Default::default()
                                });
                            }
                            if string.value.starts_with('$') {
                                diagnostics.push(Diagnostic {
                                    message: "The $ syntax is deprecated. Please apply the \
                                              codemod."
                                        .to_string(),
                                    range: convert_ranges(
                                        &rope,
                                        collapse_string_range(string.range),
                                    ),
                                    severity: Some(DiagnosticSeverity::ERROR),
                                    code: Some(NumberOrString::String(
                                        "deprecated:env-var".to_string(),
                                    )),
                                    ..Default::default()
                                });
                            }
                        }
                    }
                }
            }

            for glob in globs {
                // read string and parse glob
                if let Some(string) = glob.as_string_lit() {
                    let expression = string.value.strip_prefix('!').unwrap_or(&string.value); // strip the negation
                    if let Err(glob) = wax::Glob::new(expression) {
                        diagnostics.push(Diagnostic {
                            message: format!("Invalid glob: {}", glob),
                            range: convert_ranges(&rope, collapse_string_range(string.range)),
                            severity: Some(DiagnosticSeverity::ERROR),
                            ..Default::default()
                        });
                    }
                }
            }
        }

        self.client
            .publish_diagnostics(uri, diagnostics, version)
            .await;
    }
}

fn convert_ranges(rope: &crop::Rope, range: jsonc_parser::common::Range) -> Range {
    let start_line = rope.line_of_byte(range.start);
    let end_line = rope.line_of_byte(range.end);

    Range {
        start: Position {
            line: start_line as u32,
            character: (range.start - rope.byte_of_line(start_line)) as u32,
        },
        end: Position {
            line: end_line as u32,
            character: (range.end - rope.byte_of_line(end_line)) as u32,
        },
    }
}

/// remove quotes from a string range
fn collapse_string_range(range: jsonc_parser::common::Range) -> jsonc_parser::common::Range {
    jsonc_parser::common::Range {
        start: range.start + 1,
        end: range.end - 1,
    }
}
