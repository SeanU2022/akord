import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    // this is the astro3 default port anyway
    port: 4444
  },
  integrations: [tailwind()]
});