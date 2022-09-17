---
title: React Native
description: Docs for configuring Agrippa in React Native environments
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

<Callout type="success">
  <p slot="header">Agrippa has first-class support for React Native projects</p>
Core functionality should work out of the box - Agrippa automatically detects React Native projects in typical setups, and generates components accordingly.
</Callout>

<Callout type="warning">
  <p slot="header">This feature is looking for active feedback</p>
If you're using Agrippa in a React Native project, we'd love to hear your thoughts and suggestions. Find us on <a href="https://github.com/NitzanHen/agrippa/issues">GitHub</a> or <a href="https://twitter.com/nitzanhen">Twitter</a><span>.</span>
</Callout>

## Auto-detection and explicitly setting the framework

Agrippa's auto-detection determines which framework is used in your environment through your `package.json`'s dependencies. Particularly, React Native is detected through the `react-native` package. <br/>
However, some setups have more than one framework as a dependency or none at all, which can lead Agrippa to a different result than the desired one. 

If this is the case for your setup, you can explicitly set Agrippa's `options.framework` to `react-native` in `agrippa.config.mjs`:

```js
// @ts-check
// note the new import
import { defineConfig, Framework } from "agrippa";

export default defineConfig({
  options: {
    framework: Framework.REACT_NATIVE

    // ...
  },
  // ...
});
```

`Framework.REACT_NATIVE` is equivalent to `"react-native"`, but using the built-in `Framework` enum is clearer and less prone to errors.

<Callout type="tip">
  <p slot="header">Also see our [React](/environments/react) page for react-related docs</p>
</Callout>

## React Native Styling

Agrippa can be configured to generate a `StyleSheet.create({})` declaration for your react-native components. This can be done by setting `options.styling` to `Styling.REACT_NATIVE` in the config:

```js
// @ts-check
// note the new import
import { defineConfig, Styling } from "agrippa";

export default defineConfig({
  options: {
    styling: Styling.REACT_NATIVE
    
    // ...
  },
  // ...
});
```

`Styling.REACT_NATIVE` is equivalent to `"react-native"`, but using the built-in `Styling` enum is clearer and less prone to errors.