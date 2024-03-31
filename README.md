# [UNMAINTAINED] Java prettier formatter

Warning: this extension is effectively unmaintained as the original author hasn't used Java for several years now. PRs and issues may linger for a while! For an alternative option, you may try the advice contained [here](https://github.com/jhipster/prettier-java/blob/main/docs/advanced_usage.md). If you'd like to maintain this extension please contact `mwpb` or write in the issue tracker. Thanks again to all past contributors!

Update: on 2024-03-26 Microsoft VS Marketplace support emailed me about fixing a 'copyright infringement' claim from Oracle because the name of this extension began with the word `Java`. Regardless of the validity of this claim I have pulled the extension from the marketplace as I don't have time to keep up its maintenance. I leave the code here in case someone would like to fork and keep going.

A formatter for Java files that uses the Prettier formatter.

## Installation

Install via the VS Code marketplace.

## Usage

For one time use:-

- Open the Command Palette (ctrl+shift+p).
- Select 'Format Document With...' or 'Format Document' if this formatter is the only Java formatter installed.
- Select 'Java prettier formatter'.

To set as default formatter for Java files:-

- Open the Command Palette (ctrl+shift+p).
- Select 'Preferences: Configure Language Specific Settings'.
- Select 'Java'.
- Add

```
"editor.defaultFormatter": "mwpb.java-prettier-formatter"
```

into the `[java]` section.
Then the formatter should be available with `Alt+Shift+f` on windows and `Ctrl+Shift+i1 on Linux.

## Configuration

Place a `.prettierrc` in your workspace.
(Or alternatively an appropriate `.editorconfig`.)
Changes require restart to take effect.

## Summary of deploy process

- `npm i -g vsce`
- `vsce package`
- `vsce login <TEAM_NAME>`, which will ask for PAT.
- `vsce publish`

## Acknowledgments

This package completes the 'last yard' to use Prettier with Java files in VS Code in a standalone way.
The hard work and credit is due to:-

- [Prettier](https://prettier.io/) - Formatter.
- [Prettier plugin Java](https://github.com/jhipster/prettier-java/tree/master/packages/prettier-plugin-java) - Java specific formatting.
