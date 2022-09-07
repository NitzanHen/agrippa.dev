---
title: SCSS
description: Docs for configuring SCSS generation with Agrippa
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

<Callout type="success">
  <p slot="header">Agrippa has first-class support for SCSS Styling</p>
</Callout>

## Enable SCSS stylesheet generation

Configuring SCSS stylesheet generation with Agrippa is done by setting the `options.styling` field in `agrippa.config.mjs`
to `Styling.SCSS`, like so:

```js
// @ts-check
// note the new import
import { defineConfig, Styling } from "agrippa";

export default defineConfig({
  options: {
    styling: Styling.SCSS

    // ...
  },
  // ...
});
```

`Styling.SCSS` is equivalent to `"scss"`, but using the built-in `Styling` enum is clearer and less prone to errors.

## Toggle SCSS Modules on or off

By default, Agrippa generates SCSS stylesheets as SCSS Modules, as indicated by the `.module.scss` suffix of the generated filename.

<Callout type="tip">
  <p slot="header">Tip - using modules</p>
If you're using SCSS for styling, we recommend using SCSS modules, as they're convenient, easy to use and reason about, and solve many scalability and maintainablity issues in the long run. They're also supported out-of-the-box by most modern dev environments.
</Callout>



If you want or need to turn modules off, set `options.styleFileOptions.module` to `false` in `agrippa.config.mjs`, like so:

```js
// @ts-check
import { defineConfig, Styling } from "agrippa";

export default defineConfig({
  options: {
    styling: Styling.SCSS

    styleFileOptions: {
      module: false
    }

    // ...
  },
  // ...
});
```