## ADDED Requirements

### Requirement: 数字 Count-Up 动画

系统 SHALL 提供一个 `<CountUp>` 组件,用于将整数或百分比从 0 动画到目标值。

组件接受:
- `target: number` — 目标数值
- `suffix?: string` — 后缀（如 `%`）
- `duration?: number` — 动画时长（默认 1500ms）

行为 MUST:
- 使用 Astro `client:visible` 加载,进入视口时才触发动画。
- 动画期间数字显示为整数（不显示小数）。
- 动画结束后显示 `target + suffix`。
- 缓动使用 Motion 的 spring 或 ease-out。
- 在 SSR 时直接渲染 `target + suffix`,避免 layout shift。

#### Scenario: Stats Bar 数字进入视口

- **WHEN** about 页 Stats Bar 区段首次滚入视口
- **THEN** 4 个数字（Articles / Skills / Months Writing / Roadmap Progress）SHALL 从 0 开始动画到目标值
- **AND** 动画 SHALL 在 1.5s 内完成

#### Scenario: SSR 状态

- **WHEN** Astro 构建生成 HTML
- **THEN** 数字 SHALL 直接显示目标值
- **AND** hydrate 后数字 SHALL 重置为 0 并启动动画

#### Scenario: 用户启用 prefers-reduced-motion

- **WHEN** 用户启用 `prefers-reduced-motion: reduce`
- **AND** Stats Bar 进入视口
- **THEN** 数字 SHALL 直接显示终值,无入场动画

### Requirement: 列表 Stagger 入场动画

系统 SHALL 提供一个 `<StaggerList>` 包装组件,用于让列表元素从下方依次弹入。

组件接受:
- `delay?: number` — 元素间 stagger 延迟（默认 60ms）
- `duration?: number` — 单元素入场时长（默认 600ms）

行为 MUST:
- 使用 Astro `client:visible`。
- 进入视口时,子元素按 DOM 顺序依次执行 `translateY(20px) → translateY(0)` + `opacity 0 → 1` 动画。
- 缓动使用 Bauhaus 弹性曲线 `cubic-bezier(0.34, 1.56, 0.64, 1)`(与现有 `anim-bounce-in` 一致)或 Motion spring。
- SSR 时子元素直接以最终样式渲染。

#### Scenario: Skills 列表页进入视口

- **WHEN** 用户访问 `/skills` 页面
- **AND** 卡片网格首次进入视口
- **THEN** 15 个卡片 SHALL 从下方依次弹入
- **AND** 相邻卡片入场间隔 SHALL 为 60ms

#### Scenario: 用户启用 prefers-reduced-motion

- **WHEN** 用户启用 `prefers-reduced-motion: reduce`
- **AND** 列表进入视口
- **THEN** 所有卡片 SHALL 直接显示在最终位置,无 stagger 动画

### Requirement: FLIP 列表重排动画

系统 SHALL 提供 FLIP 重排能力,用于 Blog 列表标签筛选时卡片位置变化的丝滑过渡。

行为 MUST:
- 用户筛选标签时,被过滤掉的卡片 fade out（200ms）。
- 保留的卡片 translate 到新位置（300ms,弹性曲线）。
- 新进入的卡片 fade in + translateY 入场（300ms）。
- 实现使用 Motion 的 FLIP 工具或基于 Web Animation API 的手动 FLIP。

#### Scenario: 用户在 Blog 列表点击标签

- **WHEN** 用户在 `/blog` 页面点击标签 "JavaScript"
- **AND** 列表中存在不带 "JavaScript" 标签的卡片
- **THEN** 不匹配的卡片 SHALL fade out 在 200ms 内
- **AND** 匹配的卡片 SHALL translate 到新的网格位置
- **AND** 总动画时长 SHALL ≤ 500ms

#### Scenario: 用户清除标签筛选

- **WHEN** 用户清除当前标签筛选
- **THEN** 之前隐藏的卡片 SHALL fade in + translate 到原位置
- **AND** 保留的卡片 SHALL translate 到新位置

#### Scenario: 用户启用 prefers-reduced-motion

- **WHEN** 用户启用 `prefers-reduced-motion: reduce`
- **AND** 触发标签筛选
- **THEN** 卡片 SHALL 立即在新位置显示,无 FLIP 过渡

### Requirement: Motion 库引入与共享

系统 SHALL 引入 `motion` 库（^12.x，~12KB gzipped）作为唯一的多元素动画库依赖。

约束:
- Motion 仅用于 DOM 元素动画。
- Motion MUST NOT 用于驱动 cytoscape 节点（cytoscape 节点是 canvas 像素）。
- 公共 Motion 工具函数 SHALL 集中在 `src/utils/motion.ts`,供 CountUp / StaggerList / FlipList 共享。
- 所有 Motion 使用 `client:visible` 加载,首屏 JS bundle 不变。

#### Scenario: Vite 构建打包

- **WHEN** 执行 `astro build`
- **THEN** Motion 库 SHALL 仅在使用 Motion 的页面 chunk 中出现
- **AND** SHALL NOT 出现在主 entry chunk

### Requirement: 与现有 CSS 动画系统共存

新引入的 Motion 系统 MUST NOT 影响现有的 CSS keyframes 动画体系。

约束:
- 现有 `anim-slide-up` / `anim-line-pop` / `anim-circle-pop` / `anim-square-spin` / `anim-bounce-in` / `anim-float` / `anim-drop-in` / `anim-scale-in` 等 keyframes SHALL NOT 被修改或移除。
- 现有 `scroll-anim` IntersectionObserver 系统 SHALL 继续负责单元素入场。
- Motion 仅承接 CSS keyframes 做不到的场景: 多元素 stagger / count-up / FLIP。

#### Scenario: About 页同时使用现有 keyframes 和 Motion

- **WHEN** 用户访问 about 页
- **THEN** Hero 大标题 SHALL 继续使用 `anim-line-pop` 入场（CSS）
- **AND** Stats Bar 数字 SHALL 使用 Motion `<CountUp>`
- **AND** 两者运行 SHALL 互不干扰
