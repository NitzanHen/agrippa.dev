import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from "@astrojs/solid-js";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    react(),
    solid(),
    mdx()
  ],
  site: process.env.SITE_URL ?? 'http://localhost:3000', 
  legacy: {
    /** @todo remove this */
    astroFlavoredMarkdown: true,
  },
});