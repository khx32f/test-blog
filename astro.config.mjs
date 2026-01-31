import { defineConfig } from 'astro/config';

// GitHub Pages: https://khx32f.github.io/test-blog/
export default defineConfig({
  site: 'https://khx32f.github.io',
  base: process.env.GITHUB_ACTIONS ? '/test-blog' : '/',
  trailingSlash: 'always',
  output: 'static',
});
