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
If you're using Agrippa in a SolidJS project, we'd love to hear your thoughts and suggestions (how?)
</Callout>

## Auto-detection and explicitly setting the environment

Agrippa's auto-detection determines which framework is used in your environment through your `package.json`'s dependencies. Particularly, SolidJS is detected through the `solid-js` package. <br/>
However, some setups have more than one framework as a dependency or none at all, which can lead Agrippa to a different result than the desired one. 

If this is the case for your setup, you can explicitly set Agrippa's `options.environment` to `solid-js` in `agrippa.config.mjs`:

```js
// @ts-check
// note the new import
import { defineConfig, Environment } from "agrippa";

export default defineConfig({
  options: {
    environment: Environment.SOLIDJS

    // ...
  },
  // ...
});
```

`Environment.SOLIDJS` is equivalent to `"solidjs"`, but using the built-in `Environment` enum is clearer and less prone to errors.

