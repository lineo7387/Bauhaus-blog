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
src/
├── components/
│   ├── blog/
│   │   ├── BlogCard.astro         # 单篇文章卡片（图片、标题、摘要、分类色）
│   │   ├── BlogList.astro          # 响应式文章网格容器
│   │   ├── CategoryFilter.astro    # 分类筛选按钮行
│   │   ├── FeaturedPost.astro      # 精选文章大卡片（双栏布局）
│   │   ├── RelatedPosts.astro      # 当前文章关联推荐（最多 3 篇）
│   │   ├── PostNavigation.astro    # 上一篇 / 下一篇章节导航
│   │   ├── Pagination.astro         # 分页导航（页码、上一页/下一页）
│   │   ├── SearchBar.astro         # 搜索输入框（提交 ?q= 到 /blog）
│   │   └── TableOfContents.astro   # 文章侧边目录（h2/h3 自动提取）
│   ├── layout/
│   │   ├── Header.astro           # 顶部导航（Logo、链接、暗黑模式、移动端菜单）
│   │   ├── HeaderSearch.astro      # 搜索弹窗（Pagefind 全站搜索）
│   │   └── Footer.astro           # 页脚（三栏：简介、导航、社交链接）
│   └── ui/
│       ├── Button.astro            # 多态按钮（<a> 或 <button>，支持 4 种样式）
│       ├── Card.astro              # 薄封装，转发到 BlogCard
│       └── GeometricDecoration.astro # 几何装饰图形（圆形/方形/三角形）
├── content/
│   ├── _plans/                     # AI 技能路线图（Markdown）
│   │   ├── _index.md              # 路线图总索引
│   │   └── {skill}.md            # 各技能路线图（python、vue、react...）
│   └── blog/                       # 博客文章（按技能分目录）
├── layouts/
│   ├── BaseLayout.astro            # 全站基础布局（<head>、Header、Footer）
│   └── BlogPostLayout.astro        # 博客文章布局（目录侧栏、文章结构）
├── pages/
│   ├── index.astro                # 首页
│   ├── about.astro                # 关于页
│   ├── contact.astro              # 联系页
│   ├── blog/
│   │   ├── index.astro             # 博客列表首页
│   │   └── [...slug].astro        # 动态路由：文章页 / 分类页 / 分页
│   ├── skills/
│   │   ├── index.astro             # 技能总览页
│   │   └── [skill].astro          # 单个技能文章列表页
│   └── authors/[author].astro      # 作者文章列表页
├── config/
│   └── category-colors.ts         # 分类颜色配置（hex、bg、text、hover）
├── utils/
│   ├── base.ts                     # BASE 常量（站点根路径）
│   └── post.ts                     # 技能名称映射 & 文章排序工具
└── styles/                         # 全局样式
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
