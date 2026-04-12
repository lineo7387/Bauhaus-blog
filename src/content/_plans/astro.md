---
title: Astro 5.x 完整学习路线
description: 从零掌握 Astro 5 的现代化内容站点框架，涵盖组件开发、内容集合、岛屿架构、View Transitions、渲染模式与生产部署
skill: astro
version: "5.x"
status: in-progress
total: 12
createdAt: 2026-04-12
updatedAt: 2026-04-12
planOrder:
  - astro5-init
  - astro5-component
  - astro5-content-collections
  - astro5-routing
  - astro5-mdx
  - astro5-rendering-modes
  - astro5-islands
  - astro5-view-transitions
  - astro5-image-optimization
  - astro5-i18n
  - astro5-api-endpoints
  - astro5-deployment
---

## 更新记录

- 2026-04-12：创建路线图
- 2026-04-12：完成全部 12 篇文章

---

## 基础知识

- [✅] Astro 5 项目初始化与基础配置
      desc: pnpm/npm 创建项目、项目目录结构解析、astro.config.mjs 配置、astro 内置命令（dev/build/preview）、与 Astro 4 的核心差异概述（内容集合 API 升级、Server 模式增强）
      difficulty: easy
      estimatedWords: 1200

- [✅] Astro 组件基础与 .astro 语法
      desc: .astro 文件三要素（模板/脚本/样式）、Frontmatter 脚本区域、JSX 类模板语法、组件 Props 定义与传递、插槽（slot）机制、导入子组件与静态资源
      difficulty: easy
      estimatedWords: 1500

- [✅] 内容集合（Content Collections）深度解析
      desc: Astro 5 全新 Content Layer API（loader 机制）、src/content.config.ts 配置、defineCollection / zod schema 定义、glob / glob loader 使用、内容查询（getCollection / getEntry）、entry.render() 渲染流程
      difficulty: medium
      estimatedWords: 2500

- [✅] 路由系统与动态路由
      desc: 文件路由约定（pages/ 目录）、动态路由参数（[slug].astro）、路由优先级与排序（getStaticPaths）、rest 参数（[...slug]）、自定义 404 页面、路由守卫概念（与 Next.js 对比）
      difficulty: easy
      estimatedWords: 1500

## 进阶技能

- [✅] MDX 集成与使用
      desc: @astrojs/mdx 集成配置、MDX 文件中使用 Astro 组件、导入导出（export/import）、MDX 中使用 JSX 表达式、自定义 MDX 组件（<style> / <component>）、MDX 与 Content Collections 结合
      difficulty: medium
      estimatedWords: 1800

- [✅] 渲染模式：SSG / SSR / 混合渲染
      desc: output: 'static' / 'server' / 'hybrid' 三种模式、on-demand 服务器端渲染（request handlers）、 prerender 配置（export const prerender = true）、适配器概念（@astrojs/node / vercel / netlify）、混合模式下的缓存策略
      difficulty: medium
      estimatedWords: 2000

- [✅] 岛屿架构与部分水合
      desc: Astro 默认零 JS 原则、client:* 指令全家桶（load / idle / visible / media / only）、框架组件集成（React / Vue / Svelte / Solid）、多框架共存策略、岛屿间通信模式
      difficulty: medium
      estimatedWords: 2500

- [✅] View Transitions 页面过渡
      desc: <ViewTransitions /> 组件、过渡动画指令（transition:name / transition:animate）、共享元素过渡、生命周期回调（astro:before-preparation / astro:after-swap）、fallback 降级策略、与 React Spring / Framer Motion 对比
      difficulty: medium
      estimatedWords: 2000

- [✅] 图像优化
      desc: Astro 内置 <Image> 组件、自动 WebP/AVIF 转换、width/height 防止布局偏移、loading="lazy" / loading="eager"、getImage() 程序化 API、外部图片（inferSize）、Picture 组件与 art-direction
      difficulty: medium
      estimatedWords: 1800

- [✅] 国际化（i18n）配置
      desc: astro.config.mjs i18n 配置、locales / defaultLocale 设置、路由翻译（[lang]/blog/[slug]）、 translate() 函数与 t() 助手、i18n keys 管理、浏览器语言检测与重定向、平板 / 移动端差异化内容
      difficulty: medium
      estimatedWords: 2000

## 高级主题

- [✅] API 端点与后端集成
      desc: src/pages/api/*.ts 端点文件、GET/POST/PUT/DELETE 方法处理、API 路由的 SSR vs prerender、接受 FormData 与 JSON、响应类型（Response）与错误处理、CORS 配置、与 Next.js API Routes 对比
      difficulty: hard
      estimatedWords: 2200

- [✅] 部署与适配器
      desc: 适配器体系概述（Vercel / Netlify / Cloudflare / Node.js）、astro.config.mjs adapter 配置、环境变量管理（import.meta.env）、生产环境构建优化（astro build）、预览与调试、CDN 边缘部署（Cloudflare Pages / Deno Deploy）
      difficulty: hard
      estimatedWords: 2500

---

## 元信息

| 字段 | 说明 |
|------|------|
| `status` | planning / in-progress / completed |
| `difficulty` | easy / medium / hard |
| `estimatedWords` | 预估字数 |

## 文章路径

所有文章将输出到：`src/content/blog/astro/`
