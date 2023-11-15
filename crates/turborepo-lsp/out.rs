#![feature(prelude_import)]
#[prelude_import]
use std::prelude::rust_2021::*;
#[macro_use]
extern crate std;
use tower_lsp::{jsonrpc::Result, lsp_types::*, Client, LanguageServer, LspService};
pub struct Backend {
    client: Client,
}
#[automatically_derived]
impl ::core::fmt::Debug for Backend {
    fn fmt(&self, f: &mut ::core::fmt::Formatter) -> ::core::fmt::Result {
        ::core::fmt::Formatter::debug_struct_field1_finish(f, "Backend", "client", &&self.client)
    }
}
impl Backend {
    pub fn new(client: Client) -> Self {
        Self { client }
    }
}
impl LanguageServer for Backend {
    #[allow(
        clippy::async_yields_async,
        clippy::diverging_sub_expression,
        clippy::let_unit_value,
        clippy::no_effect_underscore_binding,
        clippy::shadow_same,
        clippy::type_complexity,
        clippy::type_repetition_in_bounds,
        clippy::used_underscore_binding
    )]
    fn initialize<'life0, 'async_trait>(
        &'life0 self,
        __arg1: InitializeParams,
    ) -> ::core::pin::Pin<
        Box<
            dyn ::core::future::Future<Output = Result<InitializeResult>>
                + ::core::marker::Send
                + 'async_trait,
        >,
    >
    where
        'life0: 'async_trait,
        Self: 'async_trait,
    {
        Box::pin(async move {
            if let ::core::option::Option::Some(__ret) =
                ::core::option::Option::None::<Result<InitializeResult>>
            {
                return __ret;
            }
            let __self = self;
            let __arg1 = __arg1;
            let __ret: Result<InitializeResult> = { Ok(InitializeResult::default()) };
            #[allow(unreachable_code)]
            __ret
        })
    }
    #[allow(
        clippy::async_yields_async,
        clippy::diverging_sub_expression,
        clippy::let_unit_value,
        clippy::no_effect_underscore_binding,
        clippy::shadow_same,
        clippy::type_complexity,
        clippy::type_repetition_in_bounds,
        clippy::used_underscore_binding
    )]
    fn initialized<'life0, 'async_trait>(
        &'life0 self,
        __arg1: InitializedParams,
    ) -> ::core::pin::Pin<
        Box<dyn ::core::future::Future<Output = ()> + ::core::marker::Send + 'async_trait>,
    >
    where
        'life0: 'async_trait,
        Self: 'async_trait,
    {
        Box::pin(async move {
            let __self = self;
            let __arg1 = __arg1;
            let () = {
                __self
                    .client
                    .log_message(MessageType::INFO, "server initialized!")
                    .await;
            };
        })
    }
    #[allow(
        clippy::async_yields_async,
        clippy::diverging_sub_expression,
        clippy::let_unit_value,
        clippy::no_effect_underscore_binding,
        clippy::shadow_same,
        clippy::type_complexity,
        clippy::type_repetition_in_bounds,
        clippy::used_underscore_binding
    )]
    fn shutdown<'life0, 'async_trait>(
        &'life0 self,
    ) -> ::core::pin::Pin<
        Box<dyn ::core::future::Future<Output = Result<()>> + ::core::marker::Send + 'async_trait>,
    >
    where
        'life0: 'async_trait,
        Self: 'async_trait,
    {
        Box::pin(async move {
            if let ::core::option::Option::Some(__ret) = ::core::option::Option::None::<Result<()>>
            {
                return __ret;
            }
            let __self = self;
            let __ret: Result<()> = { Ok(()) };
            #[allow(unreachable_code)]
            __ret
        })
    }
}
