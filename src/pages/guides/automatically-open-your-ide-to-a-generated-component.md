---
title: Automatically open your IDE to a generated component
description: A guide to auto-opening your IDE to generated components
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

One of Agrippa's neat power features is post commands, which allow you to run any shell command after generating a component, and pass it values from the main Agrippa process, particularly the paths of the generated files.

In this guide, we'll define a post command that'll automatically open our IDE at the generated component file, saving you the trouble of navigating to them yourself. In large-scale projects, this can be a real time saver!

Our starting point for this guide is a project that already has Agrippa set up - if you have yet to set it up, follow the steps in [Set up Agrippa in a project](/guides/setup-agrippa-in-a-project), and come back here once you're done!

Now, our first step is determining *which* command we should be running to open our IDE at a given path. Refer to this handy chart:

IDE | command
--- | ---
Visual Studio Code | `code -r <componentPath>`
Vim | `vim <componentPath>`
Sublime text | `subl <componentPath>`
IntelliJ IDEa | See [their docs](https://www.jetbrains.com/help/idea/opening-files-from-command-line.html)
WebStorm | See [their docs](https://www.jetbrains.com/help/webstorm/opening-files-from-command-line.html)

`<componentPath>` is to be substituted for the generated component (main) file path - as we'll see soon, Agrippa automatically performs this substitution for us. 

We'll be using VSCode's command in the remainder of this guide, but the same process should work for your favorite IDE with its corresponding command.

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
    new PostCommandPlugin('code -r <componentPath>')
  ]
});
```

You should now be all set up!
Let's try it out with an example component:
```bash
# npm
npx agrippa gen post-command-test

# yarn
yarn agrippa gen post-command-test

# pnpm
pnpm exec agrippa gen post-command-test
```

Agrippa's output should include info about an additional "Post command" stage being successful, and your IDE should already be open on the newly generated file! 