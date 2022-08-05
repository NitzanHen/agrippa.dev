---
title: Set up Agrippa in a project
description: A guide to setting Agrippa up in a project
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---


<Callout type="tip">
  <p slot="header">If this is your first time trying Agrippa, you may want to follow [the tutorial](/getting-started) instead!</p>
</Callout>

Let's go over the steps to configure Agrippa in an existing project.

This guide assumes you already have a project that you want to set Agrippa up in.
Also, we assume your project is built using one of the frameworks Agrippa natively supports - **React, SolidJS, Preact or React Native.**

First, install it as a dev dependency using your favorite package manager:

```bash
# npm
npm i -D agrippa@beta
# or
yarn add --dev agrippa@beta
# or
pnpm add -D agrippa@beta
```

Then, create a config by running:

```bash
npx agrippa init
```

You should now see a new file in your root directory (where `agrippa init` was called), `agrippa.config.mjs`. Its contents should look like this:

```js
// @ts-check
import { defineConfig } from "agrippa";

export default defineConfig({
  options: {},
});
```

The next and final step is to fill in options based on your project configuration. These change from one project to another but the most common ones are these (see also the examples below):

- **Styling**: Agrippa support a few styling solutions, including CSS, SCSS and styled-components.
- **Base directory**: a base directory is the directory under which your project's components are located (e.g. `src/components`). For more information, see [[Base directories]].
- **Post-commands**: a post command is a command that runs after the main Agrippa process completes, and can access some of its data. See its common example usages in [Automatically open an IDE to a generated component](/guides/automatically-open-your-ide-to-a-generated-component) and [Lint & Prettify created files](/guides/lint-and-prettify-created-files), or read more about it in [[Post commands]].

- _(Coming soon)_ Testing frameworks
- _(Coming soon)_ Storybook

<Callout type="tip">
  Agrippa detects a lot about your environment automatically. Particularly, you **don't** need to set the following options for a typical project, as they are already picked up by Agrippa:
  <br/>

  - **Framework**: as long as you have one of the supported frameworks installed (React, SolidJS, Preact or React Native), Agrippa should create components for it automatically. If you have more than one framework set up, you should explicitly specify which framework to use in the config (also see the [Config Reference](/reference/config-options#framework)).

  - **Typescript**: Agrippa searches a `tsconfig.json` file in your project. If it finds one - it generates Typescript files by default (with all the bells and whistles), otherwise it generates vanilla JavaScript. For more information on configuring this behavior, visit our [Typescript](/environments/typescript) page.
</Callout>

And that's it! Agrippa should be be set up properly in your project.

Let's take it for a test run:

Run the following command in your terminal:

```bash
# npm
npx agrippa gen example-component

# yarn
yarn agrippa gen example-component

# pnpx
pnpx agrippa gen example-component
```

If all is configured correctly, you should see Agrippa's standard output: general information, followed by the list of stages and their results, occasionally followed by some more logs.

## Config examples

<Callout type="example">
If we have a project with:
<br/>
- React
- Typescript
- CSS (modules)
- A base directory at `src/components`
- A post-command that opens the created component file in VS Code
<br/>
Its Agrippa configuration might look like this:

```js
// @ts-check
import { defineConfig, PostCommandPlugin, Styling } from "agrippa";
import { join } from "path";

export default defineConfig({
  options: {
    // React & Typescript auto-detected

    styling: Styling.SCSS, // equivalent to "scss" (modules on by default)

    baseDir: join("src", "components"),
  },
  plugins: [new PostCommandPlugin("code -r <componentPath>")],
});
```
</Callout>

<br/>
<br/>

<Callout type="example">
If we have a project with:
<br/>
- Vanilla JS
- Solid.js
- Styled-components
- No base directory
- A post command that lints the created component file
<br/>
Its Agrippa configuration might look like this:

```js
// @ts-check
import { defineConfig, PostCommandPlugin, Styling } from "agrippa";

export default defineConfig({
  options: {
    // Solid.js, vanilla JS auto-detected

    styling: Styling.STYLED_COMPONENTS, // equivalent to "styled-components"
  },
  plugins: [new PostCommandPlugin("eslint <componentPath>")],
});
```
</Callout>