---
title: Welcome!
layout: ../layouts/MainLayout.astro
setup: |
  import Callout from '../components/Callout.astro'
---

Agrippa is a CLI that helps frontend developers generate new components without the boilerplate: in a single command, it can create all the folders and files you need in a full component, with starting code tailored to your stack.

It's extremely easy to pick up and use in both new and existing projects, but also has a plugin system that provides customizability when it's necessary.

<Callout type="rocket">
  <p slot="header">To get started, visit [the tutorial](/getting-started)!</p>
</Callout>

```bash
# 1. Install as dev dep
npm add -D agrippa@beta
 
# 2. Create a config
npx agrippa init

# 3. Generate a component 🚀
npx agrippa gen my-first-component
```

<video controls loop autoplay muted>
  <source src="showcase.mp4" type="video/mp4">
</video>

## Supported environments 

Agrippa supports many frameworks, styling solutions, and other technologies, with more coming in the future:

- Frameworks: **React**, **Preact**, **Solid.js**, **React Native**
<br/>On the roadmap: *Vue*, *Svelte*, *Astro*, *Next.js*

- Styling solutions: **CSS**, **SCSS**, **JSS**, **Styled-components**
<br/>On the roadmap: suggest your own!

- Testing solutions: WIP.
<br/>On the roadmap: *Jest*, *Vitest*, *react-testing-library*. Suggest your own!

- Others: **Typescript**
<br/>On the roadmap: *Storybook*

## Community

If you like Agrippa, [join us on GitHub](https://github.com/NitzanHen/agrippa)!
If you encounter any bugs or errors, or have any feature suggestions, please [open an issue](https://github.com/NitzanHen/agrippa/issues) there!

Also, I'm not actively posting too much on Twitter (definitely not enough to maintain an Agrippa twitter page 😅), but **I'd be more than happy to hear your toughts on Agrippa and discuss it with you!** Find me [@nitzanhen](https://twitter.com/nitzanhen).

In any case, your feedback and suggestions are always welcome!
