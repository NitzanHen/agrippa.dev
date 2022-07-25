---
title: Typescript
description: Docs for configuring Agrippa in Typescript environments
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

<Callout type="success">
  <p slot="header">Agrippa has first-class support for Typescript projects</p>
Core functionality should work straight out of the box - Agrippa automatically detects Typescript projects in typical setups, and generates components accordingly.
</Callout>

## Explicitly enable/disable Typescript

Agrippa's detection works for typical setups, but if you need to override it - whether to generate a JS component in a TS project or vice versa - you can do so by setting the `typescript` field in `agrippa.config.mjs` (it expects a boolean value):

```js
// @ts-check
import { defineConfig } from "agrippa";

export default defineConfig({
  options: {
    // ...

    typescript: true,
  },
  // ...
});
```

For one-time overrides, you can also pass the option through the CLI, using the `--ts` (or the more verbose `--typescript`) flag.

## Generate props as a type declaration (vs an interface)

By default, Agrippa generates component props as an interface (whose name is the component's name with `Props`, e.g. `ButtonProps` for a component `Button`).

If you prefer props to be declared using a _type declaration_ (e.g. `type ButtonProps = { ... }`), you can tell Agrippa to do so in the config, by setting `typescriptOptions.propDeclaration` (under `options`) to `"type"`, like so:

```js
// @ts-check
import { defineConfig } from "agrippa";

export default defineConfig({
  options: {
    // ...

    typescriptOptions: {
      propDeclaration: "type",
    },
  },
  // ...
});
```

By the way, you can also turn off generation of prop declaration altogether by setting the same option above to `null`.

## Customize the tsconfig file path

As mentioned above, by default Agrippa searches for a file called `tsconfig.json` up from the directory in which it's called (i.e. it searches the current directory, then its parent, then the parent's parent, and so on). The existence and contents of the tsconfig file is what Agrippa uses by default to determine whether to generate TS components, as well as a few other options, so if you're using Typescript it's important that Agrippa can find your tsconfig.

If your tsconfig has a different name, or cannot reliably be found by the method described above, you can override the `files.tsconfig` field in `agrippa.config.mjs`, supplying it with the correct path:

```js
// @ts-check
import { defineConfig } from "agrippa";

export default defineConfig({
  //...

  files: {
    tsconfig: "path/to/tsconfig.json", //TODO test
  },
});
```
