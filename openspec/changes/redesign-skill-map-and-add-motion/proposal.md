## Why

当前 about 页的 Skill Map 是 15 个浮动气泡（flex-wrap + `anim-float` 装饰动画）。它有三个体验问题:

1. **无结构** — 仅按字母排序,看不出技能间的层级（前端框架 vs 后端 vs 语言 vs 数据）。
2. **无关系** — 看不出 React Native 是基于 React 的、Express 是基于 Node 的、TS 是 JS 的超集。
3. **无信息量** — 浮动是装饰性的,不传递任何数据语义。

同时全站缺少多元素编排能力(stagger、数字 count-up、列表 FLIP 重排),手写实现成本高且不丝滑(目前 Stats Bar 数字静止、Skills 列表 15 张卡片同时入场、Blog 标签筛选硬切)。

借这次重构,把 Skill Map 替换为信息密度更高的关系图,并引入轻量动画库统一处理多元素编排,提升整站的视觉品质。

## What Changes

- **BREAKING**: 用 cytoscape.js 关系图组件替换现有 about 页 Skill Map 段。原 15 浮动气泡实现完全移除。
- **NEW**: 关系图按 Bauhaus 风格自定义样式 — 5 层横向分组带（apps/backend/languages/data）+ 节点按组分形状（round-rectangle / rectangle / hexagon）+ "Built on" 边语义（TS→JS 用 dashed 表示 superset）。
- **NEW**: Hover 行为升级为传递闭包高亮（predecessors + successors）,未选中节点 opacity 降到 0.2。
- **NEW**: 移动端(<768px)渲染分组卡片栈 fallback,不加载 cytoscape。
- **NEW**: 引入 Motion 库(~12KB gzipped)处理 3 处场景:
  - About 页 Stats Bar 4 个数字 count-up 动画
  - Skills 列表页 15 个卡片 stagger 入场
  - Blog 列表页标签筛选 FLIP 重排
- 现有 CSS keyframes 系统(`anim-slide-up`、`anim-line-pop` 等)**保留不动**,继续负责单元素入场。Motion 与现有系统职责互补,不替代。

## Capabilities

### New Capabilities

- `skill-graph`: about 页的技能关系图组件,展示 15 个技能的层级与依赖关系,含桌面端 cytoscape 渲染与移动端分组卡片栈 fallback。
- `page-animations`: 站点级动画扩展,基于 Motion 库提供 stagger 入场、数字 count-up、列表 FLIP 重排三种能力。

### Modified Capabilities

无（项目尚无现有 capability spec）。

## Impact

**新增依赖**:
- `cytoscape@^3.x` (~120KB gzipped, 仅 about 页 client:visible 加载)
- `motion@^12.x` (~12KB gzipped, 涉及页面 client:visible 加载)

**修改文件**:
- `src/pages/about.astro` — 移除现有 Skill Map 段,替换为 `<SkillGraph />` island,Stats Bar 数字接入 count-up
- `src/pages/skills/index.astro` — 卡片网格接入 stagger 入场
- `src/pages/blog/index.astro` — 标签筛选时卡片重排接入 FLIP

**新增文件**:
- `src/components/skill-graph/SkillGraph.astro` — Astro island 包装
- `src/components/skill-graph/SkillGraph.client.ts` — cytoscape 初始化与样式
- `src/components/skill-graph/SkillGraphFallback.astro` — 移动端分组卡片栈
- `src/components/skill-graph/topology.ts` — 节点与边数据
- `src/components/animation/CountUp.astro` + `.client.ts` — 数字 count-up
- `src/components/animation/StaggerList.astro` + `.client.ts` — 列表 stagger 入场
- `src/components/animation/FlipList.client.ts` — FLIP 重排逻辑

**Bundle 影响**:
- about 页 +120KB (cytoscape, lazy via client:visible)
- about/skills/blog 三页各 +12KB (motion, 共享)
- SSG 首屏 HTML 不受影响(island 模式)

**不影响**:
- 现有 CSS keyframes 系统
- 现有 IntersectionObserver `scroll-anim` 系统
- 路由结构、内容集合 schema、SEO
