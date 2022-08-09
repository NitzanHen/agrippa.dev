---
title: Base Directories
setup: |
  import Callout from '../../components/Callout.astro'
layout: '../../layouts/MainLayout.astro'
---

Most frontend projects built using a framework will have at least one directory dedicated to the app's components, such as `src/components`.

Agrippa can be configured to consider such a directory as a *base directory* - meaning it will generate all components under that directory, by default.

To set the base directory, use the `baseDir` option in `agrippa.config.mjs`:

```js
// @ts-check
import { defineConfig, Styling } from "agrippa";

export default defineConfig({
  options: {
    baseDir: './path/to/basedir'

    // ...
  },
});
```

<br/>

<Callout type="example">
  We have a project set up, with `baseDir` set to `src/components` in the config.
  We generate a component `TopBar` using the usual command:
  <br>
  ```bash
  npx agrippa gen top-bar
  ```
  <br>
  This tells Agrippa to create the component's directory under `src/components`, that is, 
  the component files will be generated under `src/components/TopBar`.
</Callout>

## `--dest`

Most often, a component's place is not directly under what we call the `baseDir`, but rather as a nested descendant of it.

Agrippa supports generating a component this way through the `dest` option, typically passed as a CLI flag (`--dest`, or the more verbose `--destination`).

This flag expects a string representing a relative path, resolved relative to the `baseDir`. 
If the resolved path does not exist, it is created.

<Callout type="example">
  We have a project set up, with `baseDir` set to `src/components` in the config.
  We generate a component `ButtonBase` using the usual command, with `--dest` set to `./common`:
  <br>
  ```bash
  npx agrippa gen top-bar --dest ./common
  ```
  <br>
  This tells Agrippa to create the component's directory *"at `./common` relative to the baseDir `src/components`"*, that is, 
  under `src/components/common`. The component files will therefore be generated under `src/components/common/TopBar`.
</Callout>

## `allowOutsideBase`

By default, Agrippa does not allow a component's directory to fall outside the `baseDir`, if one is specified;
if the final resolved path for the component (determined by `baseDir` and `dest` as described above) is not unedr `baseDir`,
Agrippa logs an error message and exits.

To override this behvaiour, i.e. to allow component to be generated outside the base directory, set the `allowOutsideBase` option to `true` in the config,
or pass the `--allow-outside-base` flag in the CLI command.


