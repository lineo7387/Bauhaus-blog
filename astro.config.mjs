// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://lineo7387.github.io',
  base: '/Bauhaus-blog',
  integrations: [
    mdx({
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'github-dark',
            keepBackground: false,
          },
        ],
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
