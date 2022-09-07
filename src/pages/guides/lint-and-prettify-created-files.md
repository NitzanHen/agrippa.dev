---
title: Lint & Prettify created files
description: A guide to reformatting created files with Agrippa
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

If you or your team enforce certain styling rules (single or double parenthesis, semicolon use, line endings, etc.), you may find that Agrippa's generated code does not follow them by default.  

Fixing them by hand on every component is obviously not an ideal solution. Instead, we can incorporate a code style linter/fixer such as [ESLint](https://eslint.org/) or [Prettier](https://prettier.io/) into Agrippa's workflow as a plugin, which will reformat the new code based on your configuration immediately after generating it. 

We'll do just that in this guide, making use of post commands - an Agrippa feature that allows you to run any shell command after generating a component, and pass it values from the main Agrippa process, particularly the paths of the generated files.

Our starting point for this guide is a project that already has Agrippa set up - if you have yet to set it up, follow the steps in [Set up Agrippa in a project](/guides/setup-agrippa-in-a-project), and come back here once you're done! Also, we're assuming your project already has your desired code-style tool installed. 
We'll be setting up linting & fixing with ESLint, but the process is similar for other tools (provided they have a CLI). 

The post command itself is configured using the `PostCommandPlugin`, one of Agrippa's built-in plugins.

Open up `agrippa.config.mjs`, located at your project's root. It might look similar to this:

```js
// @ts-check
import { defineConfig } from 'agrippa';

export default defineConfig({
  options: {
    // your project's options... 
  }
});
```

To add a plugin, we define the top-level `plugins` field in the config, as a sibling of `options`, to be an array. Then we create an instance of `PostCommandPlugin` inside it. Now your config should look similar to the following:

```js
// @ts-check
import { defineConfig } from 'agrippa';

export default defineConfig({
  options: {
    // your project's options... 
  },
  // new lines below
  plugins: [
    new PostCommandPlugin('eslint <componentPath>')
  ]
});
```

You should now be all set up!
Let's try it out with an example component:
```bash
# npm
npx agrippa gen formatting-test

# yarn
yarn agrippa gen formatting-test

# pnpm
pnpm exec agrippa gen formatting-test
```

Agrippa's output should include info about an additional "Post command" stage being successful, and the generated file should already be linted! 

