import { ExtensionContext, window, languages } from "vscode";
import * as net from "net";

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used

  const serverOptions: () => Promise<ServerOptions> = async () => {
    let conn = net.connect({ path: "/tmp/turborepo-lsp.sock" });

    return {
      writer: conn,
      reader: conn,
    };
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for plain text documents
    documentSelector: [
      { scheme: "file", pattern: "turbo.json", language: "JSON" },
    ],
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    "turboLSP",
    "Turborepo Language Server",
    serverOptions,
    clientOptions
  );

  // Start the client. This will also launch the server
  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
