# Bauhaus Blog

一个基于 **Astro 6** + **Bauhaus 设计系统**的技术博客网站，部署于 `https://159.75.132.188/`。

## 技术栈

| 技术 | 说明 |
|------|------|
| [Astro 6](https://astro.build) | 内容驱动的静态站点框架 |
| [Tailwind CSS v4](https://tailwindcss.com) | 样式框架（`@tailwindcss/vite` 插件） |
| Outfit (Google Fonts) | 几何无衬线字体 |
| Bauhaus Design System | 自研设计系统（见 [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)） |

## 设计特点

- **Bauhaus 美学**：原色（红 `#D02020`、蓝 `#1040C0`、黄 `#F0C020`）+ 几何图形
- **硬偏移阴影**：`4px 4px 0px 0px #121212`
- **几何装饰**：圆形、方形、三角形组合
- **双色极端边框圆角**：`rounded-none` 或 `rounded-full`

## 目录结构

```
/
├── src/
│   ├── components/          # Astro 组件
│   │   ├── blog/            # 博客相关组件
│   │   ├── layout/          # 布局组件（Header, Footer）
│   │   └── ui/              # UI 组件（Button, Card）
│   ├── content/
│   │   ├── _plans/          # AI 技能路线图
│   │   └── blog/            # 博客文章（按技能分目录）
│   ├── layouts/             # 页面布局
│   ├── pages/               # 页面路由
│   ├── styles/              # 全局样式
│   ├── data/                # 静态数据
│   └── utils/               # 工具函数
├── public/                  # 静态资源
└── astro.config.mjs
```

## 命令

```bash
pnpm dev      # 启动开发服务器 (localhost:4321)
pnpm build    # 生产构建
pnpm preview  # 预览构建结果
```

## AI 内容生产工作流

本项目有三个 AI 角色协作生产技术文章，通过 `/plan-skill`、`/write-article`、`/review-article` 调用。

### 角色 1：目录策划（/plan-skill）

用户说「帮我策划 Vue」→ 生成路线图 `src/content/_plans/{skill}.md`

### 角色 2：文章编写（/write-article）

用户说「开始写 Vue」→ 读取路线图，生成 `src/content/blog/{skill}/` 下的所有文章

### 角色 3：文章审核（/review-article）

用户说「审核 Vue」→ 检查文章质量，通过后更新路线图的知识点状态

### 路线图状态

| 状态 | 含义 |
|------|------|
| `planning` | 待写 |
| `in-progress` | 写作中 |
| `completed` | 全部完成 |

详见 [CLAUDE.md](CLAUDE.md) 中的「AI 内容生产工作流」部分。

## 文章路由规范

- Astro 6 Content Collections 使用 `id` 而非 `slug`
- 链接格式：`/blog/{post.id}`
- Content Config：`src/content.config.ts`（注意不是 `src/content/config.ts`）
