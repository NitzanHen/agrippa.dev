---
title: styled-components
description: Docs for configuring styled-components generation with Agrippa
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

<Callout type="success">
  <p slot="header">Agrippa has first-class support for styled-components styling</p>
</Callout>

<Callout type="warning">
  <p slot="header">This feature is looking for active feedback</p>
If you're using Agrippa with styled-components, we'd love to hear your thoughts and suggestions. Find us on <a href="https://github.com/NitzanHen/agrippa/issues">GitHub</a> or (my personal) <a href="https://twitter.com/nitzanhen">Twitter</a><span>.</span>
</Callout>

## Enable styled-components styling generation

Agrippa can be set to generate styled-components styling by setting the `options.styling` field in `agrippa.config.mjs`
to `Styling.STYLED_COMPONENTS`, like so:

```js
// @ts-check
// note the new import
import { defineConfig, Styling } from "agrippa";

export default defineConfig({
  options: {
    styling: Styling.STYLED_COMPONENTS

    // ...
  },
  // ...
});
```

`Styling.STYLED_COMPONENTS` is equivalent to `"styled-components"`, but using the built-in `Styling` enum is clearer and less prone to errors.

With this set, Agrippa will create a `.styles.js` or `.styles.ts` file in the component directory, with a basic template. 