## 1. 项目准备

- [x] 1.1 安装依赖 `cytoscape@^3.x` 和 `motion@^12.x`(`pnpm add cytoscape motion`)
- [x] 1.2 安装类型 `@types/cytoscape@^3.x`(`pnpm add -D @types/cytoscape`) → 已移除（cytoscape 自带类型）
- [x] 1.3 创建组件目录 `src/components/skill-graph/` 和 `src/components/animation/`
- [x] 1.4 创建工具目录 `src/utils/motion.ts`(空壳,后续填充)

## 2. Skill Graph 数据层

- [x] 2.1 创建 `src/components/skill-graph/topology.ts` 导出类型 `SkillNode`、`SkillEdge`、`SkillGroup`
- [x] 2.2 定义 4 个分组(`apps` / `backend` / `languages` / `data`)与每组对应的 y 坐标范围
- [x] 2.3 列出 15 个节点(每个含 `id`、`displayName`、`group`、`shape`、`x`、`y`、`skillId`)
- [x] 2.4 列出 11 条边: 10 条实线(`Built on`)+ 1 条虚线(`TypeScript → JavaScript` 视为 superset,标记 `style: 'dashed'`)
- [x] 2.5 边详情: Vue→JS, React→JS, Astro→JS, htmx→JS, Electron→Node, Node→JS, RN→React, Express→Node, FastAPI→Python, SpringBoot→Java, TS→JS(dashed)
- [x] 2.6 单元测试: topology 合法性(每个 source/target 在 nodes 中、无悬空节点)

## 3. Skill Graph 桌面端组件

- [ ] 3.1 创建 `src/components/skill-graph/SkillGraph.astro` 作为 Astro island 容器,接受 `posts` 与 `plans` props,渲染容器 div
- [ ] 3.2 容器 SSR 渲染 skeleton(占位高度,避免 layout shift),hydrate 后被 cytoscape 替换
- [ ] 3.3 创建 `src/components/skill-graph/SkillGraph.client.ts`,在 `client:visible` 触发后初始化 cytoscape 实例
- [ ] 3.4 定义 cytoscape style array: 节点填充色绑定 `data(color)`、4px 描边、硬阴影(用 `box-shadow` 不可,需要 SVG `filter` 或 `border-style` + 偏移技巧)、按 `data(shape)` 切形状
- [ ] 3.5 定义边样式: 实线/虚线分别走 `line-style: solid` / `line-style: dashed`,3px 黑色,三角箭头
- [ ] 3.6 加载 preset 布局,节点位置来自 topology.ts 的 `(x, y)`
- [ ] 3.7 为节点 `data` 注入 `progress`、`articleCount`、`skillId`,文字显示 `displayName + ${count} 篇`
- [ ] 3.8 实现 hover 高亮: `mouseover` 计算 `node.predecessors().union(node.successors()).union(node)`,其余节点 `style('opacity', 0.2)`,`mouseout` 恢复
- [ ] 3.9 实现 `tap` 事件 → `window.location.href = ${BASE}/skills/${data.skillId}`
- [ ] 3.10 实现入场动画: 节点初始位置覆盖到容器中心,`cy.batch()` 中对每个节点调用 `.animate({ position: presetPos }, { duration: 800, easing: 'spring(500, 40)', queue: false })`,通过 `setTimeout(_, i * 60)` 实现 stagger
- [ ] 3.11 边 opacity 初始 0,所有节点入场完成后(`Promise.all` 配合 `.animation()` 的 promise)淡入 200ms
- [ ] 3.12 实现进度 tooltip: 自定义 DOM 浮层(非 cytoscape 内置),hover 时定位到节点屏幕坐标下方,显示 `${progress}%`,样式沿用现有 `bg-foreground` + 硬阴影
- [ ] 3.13 实现 `prefers-reduced-motion` 检测: 若启用,跳过入场动画,节点直接显示在 preset 位置
- [ ] 3.14 实现 4 个分组横幅(DOM 叠加层): 在容器内绝对定位 4 个 `<div>`,每个跨容器宽度,左侧显示 Outfit Black uppercase 标题,顶部对齐对应分组 y 坐标
- [ ] 3.15 实现窗口 resize 处理: 重新布局节点(节点 x/y 按比例缩放) + 重定位横幅
- [ ] 3.16 销毁清理: 组件卸载时调用 `cy.destroy()` 释放资源

## 4. Skill Graph 移动端 fallback

- [ ] 4.1 创建 `src/components/skill-graph/SkillGraphFallback.astro`,纯 SSR 静态组件,无 client JS
- [ ] 4.2 接受 `posts` + `plans` props,从 `topology.ts` 读取分组结构
- [ ] 4.3 渲染 4 个分组段,每段含分组标题(Outfit Black uppercase)+ 该组技能的纵向卡片堆叠
- [ ] 4.4 卡片样式与 `/skills` 列表卡片视觉一致(Bauhaus 描边 + 硬阴影 + 进度条 + 文章数)
- [ ] 4.5 卡片包裹 `<a href="${BASE}/skills/${id}">` 跳转
- [ ] 4.6 加 `<14px` 文字标记每个 layer 间的连接关系(可选: 简单文字"基于 React"等),保持信息密度

## 5. Skill Graph 集成到 about 页

- [ ] 5.1 阅读现有 [about.astro:207-292](src/pages/about.astro#L207-L292) Skill Map 段以理解现有边界
- [ ] 5.2 移除 `<!-- ═══ Skill Map ═══ -->` 整段(`<section>` 包括内部 categoryStats 计算)
- [ ] 5.3 移除依赖的局部变量(`categoryStats` 在文件顶部 frontmatter 中)
- [ ] 5.4 在原位置嵌入 `<SkillGraph posts={allPosts} plans={plans} client:visible />`
- [ ] 5.5 SSR 容器同时渲染 `<SkillGraphFallback posts={allPosts} plans={plans} />`,通过 CSS `@media (max-width: 767px)` 控制只显示 fallback;桌面端隐藏 fallback,显示 cytoscape 容器
- [ ] 5.6 验证 about 页其他段(Stats Bar、Bio、Latest Posts)未被破坏

## 6. Motion 工具层

- [ ] 6.1 在 `src/utils/motion.ts` 导出 `prefersReducedMotion(): boolean` 助手
- [ ] 6.2 导出 `inViewport(el, callback)` 包装 IntersectionObserver(若 Motion 自带 `inView` API 已足够则直接 re-export)
- [ ] 6.3 导出 Bauhaus 弹性曲线常量 `BAUHAUS_SPRING = { type: 'spring', stiffness: 500, damping: 40 }` 或 cubic-bezier 等价值

## 7. CountUp 组件(Step 1)

- [ ] 7.1 创建 `src/components/animation/CountUp.astro`,接受 `target: number`、`suffix?: string`、`duration?: number` props
- [ ] 7.2 SSR 渲染最终值 `{target}{suffix}` 包在 `<span data-count-up data-target={target} data-suffix={suffix}>`
- [ ] 7.3 创建 `src/components/animation/CountUp.client.ts`,通过 `client:visible` 加载
- [ ] 7.4 hydrate 时,用 IntersectionObserver 监测元素进入视口
- [ ] 7.5 进入视口后将文字重置为 `0`,然后用 Motion `animate(0, target, { duration, ease: 'easeOut', onUpdate: v => el.textContent = Math.round(v) + suffix })`
- [ ] 7.6 检测 `prefers-reduced-motion`,若启用直接显示终值不动画
- [ ] 7.7 接入 [about.astro Stats Bar](src/pages/about.astro#L159-L205) 4 个数字: `{totalPosts}`、`{categoryCount}`、`{writingMonths}`、`{avgProgress}%`

## 8. StaggerList 组件(Step 2)

- [ ] 8.1 创建 `src/components/animation/StaggerList.astro`,接受 `delay?` (默认 60ms)、`duration?` (默认 600ms)、`<slot>`
- [ ] 8.2 SSR 渲染 `<div data-stagger-list data-delay={delay}><slot /></div>`,子元素以最终样式直接显示
- [ ] 8.3 创建 `src/components/animation/StaggerList.client.ts`,`client:visible` 加载
- [ ] 8.4 hydrate 时,通过 IntersectionObserver 监测进入视口
- [ ] 8.5 进入视口前将子元素 `opacity: 0; transform: translateY(20px)`(用 inline style 或类切换)
- [ ] 8.6 进入视口后,用 Motion `animate` + `stagger(delay)` 让所有子元素从 `(opacity:0, y:20)` 弹到 `(opacity:1, y:0)`,缓动 `spring(500, 40)`
- [ ] 8.7 检测 `prefers-reduced-motion`,若启用直接显示终态
- [ ] 8.8 接入 [skills/index.astro:76-143](src/pages/skills/index.astro#L76-L143) 卡片网格(`<div class="grid ...">` 改为 `<StaggerList client:visible>`)
- [ ] 8.9 移除原 `scroll-anim anim-bounce-in` 类(避免双重动画)

## 9. FlipList 重排(Step 3)

- [ ] 9.1 阅读 `src/pages/blog/index.astro`(此前未读)以理解现有列表与筛选结构
- [ ] 9.2 确认是否已有标签筛选交互;若无,task 9 范围只做 FLIP 基础设施,标签筛选交互留给后续
- [ ] 9.3 创建 `src/components/animation/FlipList.client.ts`,导出 `setupFlip(container, itemSelector)` 函数
- [ ] 9.4 实现 FLIP 算法: 监听 DOM 变化(用 MutationObserver 或显式 `recordPositions/animate` API),记录 first 位置 → 应用 last → invert + play
- [ ] 9.5 隐藏元素 fade out 200ms,新增元素 fade in + translateY 入场 300ms,保留元素 translate 到新位置 300ms 弹性缓动
- [ ] 9.6 检测 `prefers-reduced-motion`,若启用直接 reflow 不动画
- [ ] 9.7 接入 blog 列表标签筛选交互
- [ ] 9.8 边界情况测试: 清除筛选时,之前隐藏的卡片正确 fade in;筛选后无结果时优雅显示

## 10. 验证

- [ ] 10.1 `pnpm build` 成功,无 SSR / TS 报错
- [ ] 10.2 `pnpm dev` 启动,about 页桌面端 Skill Graph 正确渲染(15 节点 + 14 边 + 4 横幅)
- [ ] 10.3 hover 节点验证传递闭包高亮: hover React Native 应高亮 RN + React + JS,其他变 0.2
- [ ] 10.4 hover 节点验证进度 tooltip 显示
- [ ] 10.5 节点点击跳转到 `${BASE}/skills/{id}` 正确
- [ ] 10.6 关闭 dev server,`pnpm preview` 模拟生产: 验证 cytoscape lazy 加载(初始 HTML 不含 cytoscape 代码,滚动到视口才加载 chunk)
- [ ] 10.7 Chrome DevTools 模拟移动端 (<768px): 验证渲染 fallback 卡片栈,网络面板确认 cytoscape chunk 未加载
- [ ] 10.8 Chrome DevTools 启用 "Emulate CSS prefers-reduced-motion: reduce",验证 Skill Graph 入场跳过、Stats 数字直接显示终值、Skills 卡片直接显示
- [ ] 10.9 Skills 列表页验证 stagger: 滚到卡片网格,15 个卡片应依次弹入
- [ ] 10.10 Blog 列表页验证 FLIP: 切换标签筛选,卡片重排丝滑
- [ ] 10.11 Lighthouse 跑分 about 页(桌面 + 移动): Performance / Accessibility / SEO 不低于改造前
- [ ] 10.12 真机移动端验证(iOS Safari + Android Chrome)
- [ ] 10.13 跨浏览器验证(Chrome / Safari / Firefox 桌面)

## 11. 收尾

- [ ] 11.1 移除遗留代码: 旧 Skill Map 相关 unused imports / variables / CSS keyframes(若仅用于 Skill Map)
- [ ] 11.2 检查并删除 `categoryStats` 等仅用于旧 Skill Map 的局部变量
- [ ] 11.3 提交前 `pnpm build` 一次性验证无错误
- [ ] 11.4 准备 PR description: 引用 proposal.md 的 Why,附上桌面/移动 screenshot
