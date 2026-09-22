import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mahtabkhangura.github.io',
  base: '/',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
