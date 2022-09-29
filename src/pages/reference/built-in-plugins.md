---
title: Built-in Plugins
description: Documentation for Agrippa's built-in plugins
setup: |
  import Callout from '../../components/Callout.astro'
layout: ../../layouts/MainLayout.astro
---

This page describes the plugins bundled in the main Agrippa package.
These can often be useful on their own, and can be used as a reference to plugin authors.

## CreateDirPlugin

Directory creation primitive. This plugin expects an [`AgrippaDir`](https://github.com/NitzanHen/agrippa/blob/main/src/stage/AgrippaDir.ts), and adds a stage to Agrippa's execution pipeline that creates this directory.

## CreateFilePlugin

File creation primitive. This plugin expects an [`AgrippaFile`](https://github.com/NitzanHen/agrippa/blob/main/src/stage/AgrippaFile.ts), and adds a stage to Agrippa's execution pipeline that creates this file.

## IndexAppendPlugin

Registers an export for the generated component in a parent index file.

## PostCommandPlugin

Runs a post command - a command that runs after Agrippa's main process. It has access to some of the values Agrippa determines, and particularly the paths of the created files.
This allows us to run side effects on created files.

For usage examples, see [Automatically open your IDE to a generated component](/guides/automatically-open-your-ide-to-a-generated-component) or [Lint & Prettify created files](/guides/lint-and-prettify-created-files.md).

## ReplacePlugin

Finds and replaces text in a generated file, using regex or plain strings.
Can be used to make small changes to the default template.

This plugin expects three values: 
- `fileKey`, which is a unique identifier for a file generated using Agrippa - that's the file the find & replace operation needs to run on.
- `searchValue` and `replaceValue`, which are the query to search for and what to replace it with. These are passed to [`String.prototype.replaceAll()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll), so they have the same types and usage documented there.

`fileKey`s for the default files are:
- Declaration file: `component`,
- Styles file: `styles`,
- Index file: `index`.

<Callout type="example">
  You have a project set up using CSS modules for styling. By default, Agrippa calls the default import from the CSS module file `classes`,
  but you or your team prefer the name `styles`. This can easily be achieved with `ReplacePlugin`:

  ```js
  // @ts-check
import { defineConfig, Styling, ReplacePlugin } from 'agrippa';

export default defineConfig({
  options: {
    // ...

    styling: Styling.CSS
  },
  plugins: [
    // ...
    new ReplacePlugin('component', 'classes', 'styles')
  ]
});
  ```
</Callout>

## StackTagPlugin

Registers a stack tag. 

## TelemetryPlugin

Sends anonymous telemetry to Agrippa's statistics service.

More info regarding this can be found under the [`reportTelemetry` option reference](/reference/config-options#reportTelemetry)

## UpdatesPlugin

Pings the NPM registry and compares Agrippa's latest version to the local version.