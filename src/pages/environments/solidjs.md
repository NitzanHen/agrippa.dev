---
title: SolidJS
description: Docs for configuring Agrippa in SolidJS environments
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

<Callout type="success">
  <p slot="header">Agrippa has first-class support for SolidJS projects</p>
Core functionality should work out of the box - Agrippa automatically detects SolidJS projects in typical setups, and generates components accordingly.
</Callout>

<Callout type="warning">
  <p slot="header">This feature is looking for active feedback</p>
If you're using Agrippa in a SolidJS project, we'd love to hear your thoughts and suggestions. Find us on <a href="https://github.com/NitzanHen/agrippa/issues">GitHub</a> or (my personal) <a href="https://twitter.com/nitzanhen">Twitter</a><span>.</span>
</Callout>

## Auto-detection and explicitly setting the framework

Agrippa's auto-detection determines which framework is used in your environment through your `package.json`'s dependencies. Particularly, SolidJS is detected through the `solid-js` package. <br/>
However, some setups have more than one framework as a dependency or none at all, which can lead Agrippa to a different result than the desired one. 

If this is the case for your setup, you can explicitly set Agrippa's `options.framework` to `solid-js` in `agrippa.config.mjs`:

```js
// @ts-check
// note the new import
import { defineConfig, Framework } from "agrippa";

export default defineConfig({
  options: {
    framework: Framework.SOLIDJS

    // ...
  },
  // ...
});
```

`Framework.SOLIDJS` is equivalent to `"solidjs"`, but using the built-in `Framework` enum is clearer and less prone to errors.

