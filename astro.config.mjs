// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://lineo7387.github.io',
  base: '/Bauhaus-blog',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
