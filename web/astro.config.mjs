// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://kgchurch.github.io",
  base: "/",
  i18n: {
    locales: ["en", "ko", "ja"],
    defaultLocale: "ko",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
