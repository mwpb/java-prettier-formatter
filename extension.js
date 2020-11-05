
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const prettier = require("prettier");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.languages.registerDocumentFormattingEditProvider(
    "java",
    {
      async provideDocumentFormattingEdits(document) {
        const text = document.getText();
        const options = await prettier.resolveConfig(document.fileName, {
          editorconfig: true,
        });
        const formattedText = prettier.format(text, {
          ...options,
          parser: "java"
        });

        let textEditor = vscode.window.activeTextEditor;
        if (textEditor) {
          let firstLine = textEditor.document.lineAt(0);
          let lastLine = textEditor.document.lineAt(
            textEditor.document.lineCount - 1
          );
          let textRange = new vscode.Range(
            firstLine.range.start,
            lastLine.range.end
          );

          return [vscode.TextEdit.replace(textRange, formattedText)];
        }
        return [];
      },
    }
  );

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
