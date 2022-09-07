---
title: CSS
description: Docs for configuring CSS generation with Agrippa
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

<Callout type="success">
  <p slot="header">Agrippa has first-class support for CSS Styling</p>
</Callout>

## Enable CSS stylesheet generation

Configuring CSS stylesheet generation with Agrippa is done by setting the `options.styling` field in `agrippa.config.mjs`
to `Styling.CSS`, like so:

```js
// @ts-check
// note the new import
import { defineConfig, Styling } from "agrippa";

export default defineConfig({
  options: {
    styling: Styling.CSS

    // ...
  },
  // ...
});
```

`Styling.CSS` is equivalent to `"css"`, but using the built-in `Styling` enum is clearer and less prone to errors.

## Toggle CSS Modules on or off

By default, Agrippa generates CSS stylesheets as CSS Modules, as indicated by the `.module.css` suffix of the generated filename.

<Callout type="tip">
  <p slot="header">Tip - using modules</p>
If you're using plain CSS for styling, we recommend using CSS modules, as they're convenient, easy to use and reason about, and solve many scalability and maintainablity issues in the long run. They're also supported out-of-the-box by most modern dev environments.
</Callout>



If you want or need to turn modules off, set `options.styleFileOptions.module` to `false` in `agrippa.config.mjs`, like so:

```js
// @ts-check
import { defineConfig, Styling } from "agrippa";

export default defineConfig({
  options: {
    styling: Styling.CSS

    styleFileOptions: {
      module: false
    }

    // ...
  },
  // ...
});
```