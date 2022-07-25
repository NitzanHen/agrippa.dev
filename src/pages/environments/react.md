---
title: React
description: Docs for configuring Agrippa in React environments
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

<Callout type="success">
  <p slot="header">Agrippa has first-class support for React projects</p>
The basic functionality should work straight out of the box - Agrippa automatically detects React projects, and its generated code is fully suited for a Typescript project.
So, for typical projects, you don't need to do anything special!
</Callout>

## Auto-detection and explicitly setting the environment

Agrippa's auto-detection determines which framework is used in your environment through your `package.json`'s dependencies. Particularly, React is detected through the `react` package. <br/>
However, some setups have more than one framework as a dependency or none at all, which can lead Agrippa to a different result than the desired one. 

If this is the case for your setup, you can explicitly set Agrippa's `options.environment` to `react` in `agrippa.config.mjs`:

```js
// @ts-check
// note the new import
import { defineConfig, Environment } from "agrippa";

export default defineConfig({
  options: {
    environment: Environment.REACT

    // ...
  },
  // ...
});
```

`Environment.REACT` is equivalent to `"react"`, but using the built-in Styling enum is clearer and less prone to errors.

## importing React

React's [new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) allows writing JSX without importing React at the top of each file (among other features). For most new projects, this should already be in place, but older environments or custom setups might still require it. 

In accordance with, **Agrippa does not import React by default**, but this can easily be configured through `options.reactOptions.importReact` field in `agrippa.config.mjs`, like so:

```js
// @ts-check
import { defineConfig } from "agrippa";

export default defineConfig({
  options: {
    // ...

    reactOptions: {
      importReact: true
    },
  },
  // ...
});
```

## Prop Types

Agrippa supports appending a PropTypes block to the generated component declaration. This can easily be configured using `PropTypesPlugin`:

```js
// @ts-check
import { defineConfig, Styling, PostCommandPlugin } from "agrippa";

export default defineConfig({
  // ...

  plugins: [
    // ...

    new PropTypesPlugin()
  ],
});
```
