# Java prettier formatter

A formatter for Java files that uses the Prettier formatter.

## Installation

Install via the VS Code marketplace.

## Usage

For one time use:-

* Open the Command Palette (ctrl+shift+p).
* Select 'Format Document With...' or 'Format Document' if this formatter is the only Java formatter installed.
* Select 'Java prettier formatter'.

To set as default formatter for Java files:-

* Open the Command Palette (ctrl+shift+p).
* Select 'Preferences: Configure Language Specific Settings'.
* Select 'Java'.
* Add 

```
"editor.defaultFormatter": "mwpb.java-prettier-formatter"
```

into the `[java]` section.

## Acknowledgments

This package completes the 'last yard' to use Prettier with Java files in VS Code in a standalone way.
The hard work and credit is due to:-

* [Prettier](https://prettier.io/) - Formatter.
* [Prettier plugin Java](https://github.com/jhipster/prettier-java/tree/master/packages/prettier-plugin-java) - Java specific formatting.