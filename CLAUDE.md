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

## AI 内容生产工作流

本项目有三个 AI 角色协作生产技术文章。使用 `/plan-skill`、`/write-article`、`/review-article` 调用。

### 角色 1：目录策划（/plan-skill）

用户说「帮我策划 Vue」→ 生成路线图 `src/content/_plans/{skill}.md`

### 角色 2：文章编写（/write-article）

用户说「开始写 Vue」→ 读取路线图，生成 `src/content/blog/{skill}/` 下的所有文章

### 角色 3：文章审核（/review-article）

用户说「审核 Vue」→ 检查文章质量，通过后更新路线图的知识点状态 `[✅]`

### 目录结构

```
src/content/
├── _plans/                    # 路线图规划
│   ├── _index.md             # 技能清单索引
│   └── {skill}.md            # 每个技能的路线图
└── blog/                     # 正式文章
    └── {skill}/              # 按技能名分目录
        └── {topic}.mdx
```

### 路线图状态

- `planning`：待写
- `in-progress`：写作中
- `completed`：全部完成
