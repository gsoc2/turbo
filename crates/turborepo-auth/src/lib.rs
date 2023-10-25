#![feature(cow_is_borrowed)]
#![deny(clippy::all)]

mod auth;
mod error;
mod server;
mod ui;

pub use auth::*;
pub use error::Error;
pub use server::*;

pub const AUTH_FILE_NAME: &str = "auth.json";
