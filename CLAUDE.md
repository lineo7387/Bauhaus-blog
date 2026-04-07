# Bauhaus Blog — Project Context

## Overview

A blog website built with Astro 6.x and the Bauhaus design system. Deploy URL: `https://159.75.132.188/`

## Key Technical Decisions

### Tailwind CSS v4

Using `@tailwindcss/vite` plugin, NOT `@astrojs/tailwind`. The `@astrojs/tailwind` package has peer dependency conflicts with Astro 6.

```js
// astro.config.mjs
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
});
```

### Astro 6 Content Collections

- Config file path: `src/content.config.ts` (NOT `src/content/config.ts`)
- Entries use `id` instead of `slug` (Astro 6 breaking change)
- Uses `glob` loader from `astro/loaders`

```ts
import { glob } from 'astro/loaders';
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({ ... }),
});
```

### Routing

- `post.id` used for links and dynamic routes (e.g., `/blog/{post.id}`)
- Never use `post.slug` — it does not exist in Astro 6

### Design System (Bauhaus)

- Primary colors: red `#D02020`, blue `#1040C0`, yellow `#F0C020`
- Font: Outfit (Google Fonts)
- Hard offset shadows: `4px 4px 0px 0px #121212`
- Geometric shapes via utility classes: `shape-circle`, `shape-square`, `shape-triangle`

### Commands

```bash
pnpm dev    # Start dev server
pnpm build  # Production build
```
