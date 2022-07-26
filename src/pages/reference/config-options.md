---
title: Config Options
description: Options for Agrippa's config
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

This page lists and describes all of the config's options. *No option is required.*

## framework

Which front-end framework to generate the components for.

## typescript

Whether to generate Typescript files and code.

**Type**: boolean. <br/>
**Default**: `true` if the CLI manages to find a `tsconfig.json` file, `false` otherwise.

## typescriptOptions

Typescript-related options. Relevant only when Typescript is used.

### typescriptOptions.propDeclaration

Whether to declare a component's props as an `interface`, as a `type` or not at all (`null`).

**Type**: `"interface"`, `"type"` or `null`. <br/>
**Default**: `interface` if the Typescript is used (by automatic detection or explicitly), `false` otherwise.

## styling

Which styling solution to generate.

**Type**: Any value of the `Styling` enum, any string, or `undefined`. <br/>
**Default**: `undefined`.

## styleFileOptions

Options related to the generated style file. Relevant only when such a file is to be generated (in terms of built-in styling solutions,
this means one of `Styling.CSS`, `Styling.SCSS`, `Styling.STYLED_COMPONENTS`).

### styleFileOptions.extension

Which extension to give the generated style file, if one is generated.

In most cases, this field is determined automatically by Agrippa, and there's no need to set it.

**Type**: `string`. <br/>
**Default**: depends on `styling`'s value.

### styleFileOptions.module

Whether to generate CSS/SCSS files as modules or not.
Relevant only for projects using CSS and SCSS.

**Type**: `boolean`. <br/>
**Default**: `true`.

## componentOptions

Component declaration file options.

### componentOptions.exportType

Whether to export the component as a named export or a default export.
For more information about exports, consult [the MDN docs](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#syntax).

**Type**: `named` or `default`. <br/>
**Default**: `named`.

### componentOptions.declaration

Whether to declare the component as a `const` with an arrow function, or as a `function` declaration.

```js
// with declaration="const"
const Component = (props) => { 
  // ...
} 

//  with declaration="function"
function Component(props) {
  // ...
}
```

**Type**: `const` or `function`. <br/>
**Default**: `const`.

## reactOptions

React-related options. Only relevant when using React or React Native.

### reactOptions.importReact

Whether to import React at the top of the component.
This should be set to `true` for older React versions, which don't use [the new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html).

**Type**: `boolean`. <br/>
**Default**: `false`.


## baseDir

Path to a base directory under which all components should be generated (not necessarily as direct children).
Roughly equivalent to Typescript's `rootDir` in that sense.

**Type**: `string` (a path). <br/>
**Default**: the current working directory.

## allowOutsideBase

By default, Agrippa does not allow components to be generated outside `baseDir` (if it's set, of course). `allowOutsideBase` overrides this behvaior. 

**Type**: `boolean`. <br/>
**Default**: `false`.

## overwrite

By default, Agrippa prevents the generation of a component over an existing components, to prevent a loss of code. `--overwrite` tells Agrippa to replace existing files, if any are found.

**Type**: `boolean`. <br/>
**Default**: `false`.

## pure


## lookForUpdates

When Agrippa is run, it pings the NPM registry and checks whether a newer version exists.
If it finds one, a message is printed to the user. Setting this option to `false` disables this behaviour.

We recommend having this turned on.

**Type**: `boolean`. <br/>
**Default**: `true`.

## reportTelemetry

When Agrippa is run, it sends *anonymous* telemetry to Agrippa's statistics service.
Setting this option to `false` disables this behaviour.

Privacy is an important matter to me personally, and so I'm urged to emphasize that Agrippa
only sends basic information about how you use it, completely anonymously.
The purpose of this is to allow us to gain basic insights of how people use Agrippa.

You can find the relevant source code in [`TelemetryPlugin.ts`](https://github.com/NitzanHen/agrippa/blob/main/src/plugin/TelemetryPlugin.ts).

**Type**: `boolean`. <br/>
**Default**: `true`.

## debug

The debug flag makes Agrippa print out additional debug information. It's very useful when debugging.

It can, and most often will, be passed as a [CLI flag](./cli.md) instead of being set in the config.

**Type**: `boolean`.
**Default**: `false`.