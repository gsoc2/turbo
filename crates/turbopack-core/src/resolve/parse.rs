use std::future::IntoFuture;

use anyhow::Result;
use lazy_static::lazy_static;
use regex::Regex;
use turbo_tasks::{
    primitives::StringVc, util::try_join_all, Value, ValueToString, ValueToStringVc, Vc,
};

use super::pattern::Pattern;

#[turbo_tasks::value(ValueToString)]
#[derive(Hash, Clone, Debug)]
pub enum Request {
    Raw {
        path: Pattern,
        force_in_context: bool,
    },
    Relative {
        path: Pattern,
        force_in_context: bool,
    },
    Module {
        module: String,
        path: Pattern,
    },
    ServerRelative {
        path: Pattern,
    },
    Windows {
        path: Pattern,
    },
    Empty,
    PackageInternal {
        path: Pattern,
    },
    Uri {
        protocol: String,
        remainer: String,
    },
    Unknown {
        path: Pattern,
    },
    Dynamic,
    Alternatives {
        requests: Vec<RequestVc>,
    },
}

impl Request {
    pub fn request(&self) -> Option<String> {
        Some(match self {
            Request::Raw {
                path: Pattern::Constant(path),
                ..
            } => format!("{path}"),
            Request::Relative {
                path: Pattern::Constant(path),
                ..
            } => {
                format!("{path}")
            }
            Request::Module {
                module,
                path: Pattern::Constant(path),
            } => format!("{module}{path}"),
            Request::ServerRelative {
                path: Pattern::Constant(path),
            } => format!("{path}"),
            Request::Windows {
                path: Pattern::Constant(path),
            } => format!("{path}"),
            Request::Empty => format!(""),
            Request::PackageInternal {
                path: Pattern::Constant(path),
            } => format!("{path}"),
            Request::Uri { protocol, remainer } => format!("{protocol}{remainer}"),
            Request::Unknown {
                path: Pattern::Constant(path),
            } => format!("{path}"),
            _ => return None,
        })
    }

    pub fn parse(mut request: Pattern) -> Self {
        request.normalize();
        match request {
            Pattern::Dynamic => Request::Dynamic,
            Pattern::Constant(ref r) => {
                if r.is_empty() {
                    Request::Empty
                } else if r.starts_with("/") {
                    Request::ServerRelative { path: request }
                } else if r.starts_with("#") {
                    Request::PackageInternal { path: request }
                } else if r.starts_with("./") || r.starts_with("../") || r == "." || r == ".." {
                    Request::Relative {
                        path: request,
                        force_in_context: false,
                    }
                } else {
                    lazy_static! {
                        static ref WINDOWS_PATH: Regex =
                            Regex::new(r"^([A-Za-z]:\\|\\\\)").unwrap();
                        static ref URI_PATH: Regex = Regex::new(r"^([^/\\]+:)(/.+)").unwrap();
                        static ref MODULE_PATH: Regex =
                            Regex::new(r"^((?:@[^/]+/)?[^/]+)(.*)").unwrap();
                    }
                    if WINDOWS_PATH.is_match(&r) {
                        return Request::Windows { path: request };
                    }
                    if let Some(caps) = URI_PATH.captures(&r) {
                        if let (Some(protocol), Some(remainer)) = (caps.get(1), caps.get(2)) {
                            // TODO data uri
                            return Request::Uri {
                                protocol: protocol.as_str().to_string(),
                                remainer: remainer.as_str().to_string(),
                            };
                        }
                    }
                    if let Some(caps) = MODULE_PATH.captures(&r) {
                        if let (Some(module), Some(path)) = (caps.get(1), caps.get(2)) {
                            return Request::Module {
                                module: module.as_str().to_string(),
                                path: path.as_str().to_string().into(),
                            };
                        }
                    }
                    Request::Unknown { path: request }
                }
            }
            Pattern::Concatenation(list) => {
                let mut iter = list.into_iter();
                if let Some(first) = iter.next() {
                    let mut result = Self::parse(first);
                    match &mut result {
                        Request::Raw { path, .. } => {
                            path.extend(iter);
                        }
                        Request::Relative { path, .. } => {
                            path.extend(iter);
                        }
                        Request::Module { module: _, path } => {
                            path.extend(iter);
                        }
                        Request::ServerRelative { path } => {
                            path.extend(iter);
                        }
                        Request::Windows { path } => {
                            path.extend(iter);
                        }
                        Request::Empty => {
                            result = Request::parse(Pattern::Concatenation(iter.collect()))
                        }
                        Request::PackageInternal { path } => {
                            path.extend(iter);
                        }
                        Request::Uri { .. } => {
                            result = Request::Dynamic;
                        }
                        Request::Unknown { path } => {
                            path.extend(iter);
                        }
                        Request::Dynamic => {}
                        Request::Alternatives { .. } => unreachable!(),
                    };
                    result
                } else {
                    Request::Empty
                }
            }
            Pattern::Alternatives(list) => Request::Alternatives {
                requests: list
                    .into_iter()
                    .map(|p| RequestVc::parse(Value::new(p)))
                    .collect(),
            },
        }
    }
}

#[turbo_tasks::value_impl]
impl RequestVc {
    #[turbo_tasks::function]
    pub fn parse(request: Value<Pattern>) -> Self {
        Self::slot(Request::parse(request.into_value()))
    }

    #[turbo_tasks::function]
    pub fn parse_string(request: String) -> Self {
        Self::slot(Request::parse(request.into()))
    }

    #[turbo_tasks::function]
    pub fn raw(request: Value<Pattern>, force_in_context: bool) -> Self {
        Self::slot(Request::Raw {
            path: request.into_value(),
            force_in_context,
        })
    }

    #[turbo_tasks::function]
    pub fn relative(request: Value<Pattern>, force_in_context: bool) -> Self {
        Self::slot(Request::Relative {
            path: request.into_value(),
            force_in_context,
        })
    }

    #[turbo_tasks::function]
    pub fn module(module: String, path: Value<Pattern>) -> Self {
        Self::slot(Request::Module {
            module,
            path: path.into_value(),
        })
    }
}

#[turbo_tasks::value_impl]
impl ValueToString for Request {
    #[turbo_tasks::function]
    async fn to_string(&self) -> Result<StringVc> {
        Ok(StringVc::slot(match self {
            Request::Raw {
                path,
                force_in_context,
            } => {
                if *force_in_context {
                    format!("in-context {path}")
                } else {
                    format!("{path}")
                }
            }
            Request::Relative {
                path,
                force_in_context,
            } => {
                if *force_in_context {
                    format!("relative-in-context {path}")
                } else {
                    format!("relative {path}")
                }
            }
            Request::Module { module, path } => {
                if path.could_match_others("") {
                    format!("module \"{module}\" with subpath {path}")
                } else {
                    format!("module \"{module}\"")
                }
            }
            Request::ServerRelative { path } => format!("server relative {path}"),
            Request::Windows { path } => format!("windows {path}"),
            Request::Empty => format!("empty"),
            Request::PackageInternal { path } => format!("package internal {path}"),
            Request::Uri { protocol, remainer } => format!("uri \"{protocol}\" \"{remainer}\""),
            Request::Unknown { path } => format!("unknown {path}"),
            Request::Dynamic => format!("dynamic"),
            Request::Alternatives { requests } => format!(
                "{}",
                try_join_all(requests.iter().map(|i| i.to_string().into_future()))
                    .await?
                    .into_iter()
                    .map(|r| r.clone())
                    .collect::<Vec<_>>()
                    .join(" or ")
            ),
        }))
    }
}
