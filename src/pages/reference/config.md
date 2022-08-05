---
title: Config Reference
description: Documentation for Agrippa's config
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

Agrippa can be configured using a config file, `agrippa.config.mjs`, typically located at the project root (alongside `package.json` and other configuration files).

<Callout type="tip">
  <p slot="header">Using a config is recommended for any project, with rare exceptions.</p>
</Callout>

## Creating a config

Creating a config is straightforward with the `init` command. In your project's root directory, run:

```bash
npx agrippa init
```
(TODO yarn/pnpm alternatives)

The command should create a new file, `agrippa.config.mjs`, whose contents look like this:

```js
// @ts-check
import { defineConfig } from "agrippa";

export default defineConfig({
  options: {},
});
```

Note that is file is an [ES module](https://www.valentinog.com/blog/es-modules/).

## defineConfig

Agrippa expects the config file to contain a default export, having a specific strucutre.

`defineConfig`, exported by Agrippa, doesn't really do much at runtime, but it enforces the exported
configuration's structure, i.e. its type, matches what Agrippa expects to receive.

This, in combination with the [`// @ts-check` comment](https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check) above, gives us the safety and intellisense of a Typescript environment, even though we're using plain JS.

## Config structure

The config's fields are:

1. **Options**: these configure the main Agrippa process. All option's types, descriptions and defaults can be found on our [Config Options](/reference/config-options) page.

2. **Plugins**: plugins can enhance and extend Agrippa's core capabilities; the config's `plugins` field is where they're declared, as an array.

3. **Files**: this field allows you to augment or override the files that Agrippa searches for and reads when it runs.
Currently, its only practical usage is to give Agrippa the path to a custom `tsconfig` (for more information, see our [Typescript](/environments/typescript#customize-the-tsconfig-file-path) page).


## Specifying path to config

<Callout type="work-in-progress">
  <p slot="header">Coming in the near future</p>
</Callout>

## `agrippa.config.ts`

<Callout type="work-in-progress">
  <p slot="header">Coming in the near future</p>
</Callout>