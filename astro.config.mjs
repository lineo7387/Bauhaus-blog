// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkDirective from 'remark-directive';
import { rehypeCallouts } from './src/plugins/rehype-callouts.js';
import remarkDirectiveRehype from 'remark-directive-rehype';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://lineo7387.github.io',
  base: '/',
  integrations: [
    mdx({
      remarkPlugins: [remarkDirective, remarkDirectiveRehype],
      rehypePlugins: [
        [rehypePrettyCode, { theme: 'github-dark', keepBackground: false }],
        rehypeCallouts,
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

// 服务器配置
// site: 'http://159.75.132.188/',
// base: '',
