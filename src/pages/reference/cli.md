---
title: CLI
description: Reference for Agrippa's CLI
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

Agrippa's main front-facing interface is its CLI.
This page describe's the CLI's different commands:

## Init

```bash
agrippa init [...options]
```

The `init` command creates a fresh new config in the working directory.

This command has a single option: `--bare`, which is used for global installations of Agrippa.


## Generate

```
agrippa gen <name> [...options]
```

The `gen` (or `generate`) command is used to generate a component.

It expects a single positional argument - the name of the component to be generated.
This name can be passed in kebab case ("component-name") or pascal case ("ComponentName").

`gen`'s options are largely the same as the [Config Options](/reference/config-options). A primary difference
is that options passed to the CLI should be written in kebab case (though camelCase will work too).

In terms of the options themselves, the differences are:

### CLI exclusive flags

| Flag | description | 
|--------|-------|
| `dest` (`destination`) | See [Base Directories](/reference/base-directories) |

### Aliases

| Option | Alias | 
|--------|-------|
| `framework` | `fw` |
| `typescript` | `ts` |

### Flags for nested options

| Option | Corresponding CLI flag | 
|--------|-------|
| `styleFileOptions.module` | `styling-module` |
| `typescriptOptions.propDeclaration` | `ts-props-declaration` |
| `reactOptions.importReact` | `import-react` |
| `componentOptions.exportType` | `export-type` |
| `componentOptions.declaration` | `declaration` |

In addition, the `post-command` flag can be set to add a post command.
