## Context

**项目**: Astro 6.x SSG Bauhaus 风格博客（lunar-luminosity），部署到 GitHub Pages。

**当前状态**:
- About 页 Skill Map 段是 15 个浮动气泡（`flex-wrap` + `anim-float` 装饰动画）。
- 站点动画系统由 CSS keyframes（`anim-slide-up`、`anim-line-pop` 等）+ IntersectionObserver 驱动的 `scroll-anim` 类组成,覆盖单元素入场。
- 无客户端框架（无 React/Vue/Svelte 集成），所有交互通过 Astro island + 原生 TS 实现。
- 设计语言: Bauhaus 三原色（red `#D02020`、blue `#1040C0`、yellow `#F0C020`）、4px 黑色描边、`4px 4px 0 0 #121212` 硬阴影、Outfit 字体。

**约束**:
- 必须保持 SSG 首屏 HTML 完整（SEO + GitHub Pages）。
- 不引入客户端框架（React/Vue/Svelte）以避免 bundle 膨胀和复杂度。
- 必须尊重 `prefers-reduced-motion`。
- BASE 路径相对（GitHub Pages 子目录部署）。
- 技能列表为 15 项,长期会增长但增速有限（~5/年）。

**Explore 阶段已确定**: 18 项决策已在 explore 模式中敲定（详见 Decisions 节）。

## Goals / Non-Goals

**Goals**:
- 把 Skill Map 从"装饰性气泡"升级为"信息密集的关系图",传达技能间的层级与依赖。
- 引入轻量动画库，为站点提供多元素编排能力（stagger / count-up / FLIP）。
- 移动端优雅降级,保持信息一致性。
- 与现有 CSS keyframes 系统职责互补、共存,不重写。

**Non-Goals**:
- 不引入 3D 库（Three.js / @motion-canvas）。
- 不引入 GSAP（70KB+，license 复杂，对本项目过度）。
- 不替换现有 CSS keyframes 系统。
- 不引入客户端框架（React/Vue/Svelte）。
- 不实现 Skill Map 节点的拖拽编辑或自定义视图保存。
- 不做 cytoscape 内部的力导向自动布局。

## Decisions

### D1: 渲染库选 cytoscape.js（~120KB gzipped）

**选择**: cytoscape.js 提供节点/边数据模型、图遍历 API（`predecessors()` / `successors()`）、动画 API、preset 布局。

**替代方案**:
- 手写 SVG: 不需要图遍历、布局、命中检测都得手写,工作量数倍。
- D3: 类似体积，但 API 更底层（force/zoom/select），离"图"语义更远。
- vis.js: 维护活跃度低。

**代价接受**: 120KB gzipped 通过 Astro `client:visible` 在节点滚入视口时才加载，首屏不受影响。

### D2: 布局选 preset（手动定位）而非 dagre/cose

**选择**: 节点位置在 `topology.ts` 中预定义为 5 行 × 不定列,横向分组带（apps / backend / languages / data）。

**理由**: Bauhaus 风格需要精确视觉控制（对称、几何、可预测）。自动布局每次结果不同，破坏品牌一致性。

**替代方案**:
- dagre: 层次布局，但生成的位置过于"工程化"，缺少 Bauhaus 几何感。
- cose: 力导向，结果不稳定。

### D3: 动画库选 Motion（~12KB gzipped）而非 GSAP

**选择**: Motion 是 framer-motion 团队抽离的纯 JS 库，基于 Web Animation API。

**替代方案**:
- GSAP: ~70KB+，时间线编排能力强但本项目用不到，部分插件（ScrollTrigger 高级用法、Flip）需要 Club 商业 license。
- 继续手写: count-up（手动 RAF + easing）和 FLIP（手动算 first/last + invert/play）成本高。

**代价**: 12KB 接受，分散在三个 island 但 Vite 会去重。

### D4: Motion 不驱动 cytoscape 节点

**重要约束**: cytoscape 节点是 canvas 像素，**不是 DOM**。Motion / GSAP / anime.js 只能驱动 DOM 元素，物理上无法操作 cytoscape 节点。

**结论**: cytoscape 内部所有动画走 cytoscape 自带的 `cy.animate()` / `ele.animate()` / `cy.layout({animate:true})`。Motion 仅用于 cytoscape 之外（Stats Bar、Skills 列表、Blog 列表）。

### D5: 边语义 = "Built on"，TS→JS 用 dashed 表示 superset

**选择**: 实线箭头读作"X is built on Y"。
- Vue → JavaScript（前端框架基于 JS）
- React → JavaScript
- Astro → JavaScript
- htmx → JavaScript
- Electron → Node.js → JavaScript
- React Native → React
- Express → Node.js
- FastAPI → Python
- Spring Boot → Java
- TypeScript → JavaScript（dashed，表示 superset 而非 runtime 依赖）

**替代方案**:
- "Used together": 语义模糊，无法表达层级。
- "Depends on": 太工程化，且不所有边都是运行时依赖。

### D6: Hover 行为 = 传递闭包高亮 + 未选中 opacity 0.2

**选择**: hover 节点 N 时高亮 `N + N.predecessors() + N.successors()`，未选中节点 opacity 降到 0.2。

**理由**: 用户能一眼看到 React Native → React → JavaScript 完整链路。

**替代方案**:
- 只高亮直接邻居: 看不到完整链。
- 隐藏未选中: 失去空间感。

### D7: 节点尺寸统一 140×80

**选择**: 所有节点等大。

**替代方案**:
- 按文章数缩放: 会让 React Native（4 篇，进行中）显得"次要"，但它是独立技能。
- 按层级缩放: 与扁平的 skill 概念矛盾。

### D8: 节点形状按分组分形状

**选择**:
- `apps`（Vue/React/Astro/htmx/Electron/React Native）: round-rectangle
- `backend`（Express/FastAPI/Spring Boot）: rectangle
- `languages`（TypeScript/JavaScript/Python/Java）: rectangle
- `data`（MySQL）: hexagon

**理由**: 增加视觉信息维度（用户一眼区分类别），不增加阅读成本。

### D9: 移动端 < 768px 渲染分组卡片栈 fallback

**选择**: `<768px` 完全跳过 cytoscape，渲染纵向分组卡片栈（apps 区 / backend 区 / languages 区 / data 区）。

**理由**:
- cytoscape 在小屏节点挤、touch 无 hover、缩放手势冲突。
- 节省 120KB JS。
- 信息一致: 共享 `topology.ts` 数据，仅渲染层不同。

**替代方案**:
- 同组件适配: 小屏体验依旧差，且仍要付 120KB。
- 隐藏 Skill Map: 信息丢失。

### D10: Astro 客户端指令选 `client:visible`

**选择**: SkillGraph 和三个 Motion island 全部使用 `client:visible`。

**理由**:
- `client:visible` 进入视口才加载，首屏快。
- `client:only` 整个组件 SSR 跳过，SEO 和 noJS 体验差。
- `client:load` 立即加载，首屏 JS 增加。

### D11: 现有 CSS keyframes 系统保留不动

**选择**: `anim-slide-up`、`anim-line-pop`、`anim-float` 等所有现有 keyframes **不动**。Motion 仅承接 keyframes 做不到的：
- 多元素 stagger 编排
- 数字 count-up
- 列表 FLIP 重排

**理由**:
- 已建立的视觉语言是项目品牌一部分。
- 互补不替换，降低 PR 风险与回归面积。

### D12: 节点入场动画走 cytoscape preset + 居中扩散 spring

**选择**: 节点初始位置在中心，cytoscape `.animate()` 用 `spring(500, 40)` 在 800ms 内动到 preset 位置，stagger 60ms。

**替代方案**:
- 静态加载（无入场）: 失去 Bauhaus 风格的"视觉惊喜"。
- 整体淡入: 单调。

### D13: 节点链接走 BASE 路径

**实现**: cytoscape 节点 `data.skillId`，监听 `tap` 事件，跳转 `${BASE}/skills/${skillId}`。

**理由**: GitHub Pages 子目录部署，必须用 `BASE`。

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| cytoscape 120KB lazy 加载首次渲染 200-400ms | `client:visible` + skeleton placeholder（与现有 anim-float bubbles 视觉接近，平滑过渡） |
| 移动端 fallback 与桌面端样式分歧维护两份 | `topology.ts` 共享数据源，仅渲染层差异 |
| 三个 Motion island 各自 import | Vite tree-shaking + 共享 `src/utils/motion.ts` 包装层 |
| 拒绝 GSAP 后未来若需复杂时间线 | YAGNI；Motion 也支持基础 timeline，覆盖 90% 场景 |
| Bauhaus 主题样式需手写大量 cytoscape style props | 集中到 `SkillGraph.client.ts` 一处，与 `CATEGORY_COLORS` 共享 token |
| 用户设置 prefers-reduced-motion | 检测 media query，跳过入场动画与 count-up，直接显示终值 |
| Cytoscape SSR 失败（依赖 window/canvas） | Astro island 模型自动处理；fallback 段同时渲染，hydrate 后 cytoscape 替换 |

## Migration Plan

非数据库变更，部署轻量。

**实施顺序**:
1. 安装依赖（`cytoscape`, `motion`）
2. 创建 `src/components/skill-graph/` 模块（topology + island + fallback）
3. 创建 `src/components/animation/` 模块（CountUp / StaggerList / FlipList）
4. 替换 `about.astro` Skill Map 段
5. About Stats Bar 接入 CountUp
6. `skills/index.astro` 接入 StaggerList
7. `blog/index.astro` 接入 FlipList
8. 部署预览 → 移动端验证 → 生产部署

**回退策略**: 直接 git revert，无 schema migration、无数据 backfill。

## Open Questions

1. **Cytoscape 主题完整样式表是否在 design 阶段定？** → 否，task 阶段细化。本文件只定原则（Bauhaus 三原色 + 4px 描边 + 硬阴影）。
2. **Skeleton placeholder 的精确实现？** → task 阶段评估。可选：保留现有 anim-float bubbles 作为 SSR 内容，hydrate 后被 cytoscape 替换；或纯 CSS 占位框。
3. **Motion 是否需要全局 `<MotionConfig>` 包装？** → 否，每个 island 独立。Motion 不强制全局 context。
