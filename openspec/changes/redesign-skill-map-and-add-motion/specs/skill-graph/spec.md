## ADDED Requirements

### Requirement: 桌面端关系图渲染

系统 SHALL 在 about 页提供一个基于 cytoscape.js 的技能关系图组件,展示所有未隐藏技能的层级与依赖关系。

组件 MUST:
- 使用 Astro `client:visible` 指令,在区段滚入视口时才加载 cytoscape 库。
- 渲染所有 `src/content/_plans/_index.md` 中列出的技能（当前 15 个）作为节点。
- 渲染节点之间的"Built on"边（当前 14 条）。
- 在视口宽度 ≥ 768px 时启用。

#### Scenario: 用户在桌面端访问 about 页

- **WHEN** 用户在视口宽度 ≥ 768px 的设备上访问 about 页面
- **AND** Skill Graph 区段滚入视口
- **THEN** 系统 SHALL 加载 cytoscape 并渲染 15 个技能节点和 14 条关系边

#### Scenario: 视口未滚到 Skill Graph 区段

- **WHEN** 用户加载 about 页但未滚动到 Skill Graph 区段
- **THEN** 系统 SHALL NOT 加载 cytoscape 库
- **AND** 区段位置 SHALL 显示 SSR 占位内容（与最终图同尺寸,避免 layout shift）

### Requirement: 节点视觉编码

每个节点 MUST 通过以下视觉属性传达信息:

- **文字**: 显示技能 displayName（来自 `getSkillDisplayName`）+ 文章数（如 "12 篇"）
- **填充色**: 来自 `CATEGORY_COLORS[skillId]` 的 `bg` token
- **文字色**: 来自 `CATEGORY_COLORS[skillId]` 的 `text` token
- **描边**: 4px 黑色 `#121212`
- **阴影**: Bauhaus 硬阴影 `4px 4px 0 0 #121212`
- **尺寸**: 统一 140×80
- **形状**: 按分组:
  - `apps` 组（Vue/React/Astro/htmx/Electron/React Native）: round-rectangle
  - `backend` 组（Express/FastAPI/Spring Boot）: rectangle
  - `languages` 组（TypeScript/JavaScript/Python/Java）: rectangle
  - `data` 组（MySQL）: hexagon

#### Scenario: 渲染 React 节点

- **WHEN** 关系图渲染完成
- **THEN** React 节点 SHALL 显示文字 "React" + 文章数
- **AND** 填充色 SHALL 为 React 在 `CATEGORY_COLORS` 中的配色
- **AND** 形状 SHALL 为 round-rectangle
- **AND** 描边 SHALL 为 4px 黑色

#### Scenario: 渲染 MySQL 节点

- **WHEN** 关系图渲染完成
- **THEN** MySQL 节点形状 SHALL 为 hexagon
- **AND** 尺寸 SHALL 为 140×80,与其他节点一致

### Requirement: 边视觉语义

边 SHALL 表达"Built on"语义,带方向箭头从子节点指向父节点。

边类型:
- **实线**: 表示运行时依赖（如 React Native → React, Express → Node.js）
- **虚线**: 表示 superset 关系（仅 TypeScript → JavaScript）

边 MUST 使用:
- 颜色: 黑色 `#121212`
- 粗细: 3px
- 箭头: 三角形,与边同色

#### Scenario: React Native 到 React 的边

- **WHEN** 关系图渲染完成
- **THEN** 系统 SHALL 渲染一条从 React Native 指向 React 的实线箭头

#### Scenario: TypeScript 到 JavaScript 的边

- **WHEN** 关系图渲染完成
- **THEN** 系统 SHALL 渲染一条从 TypeScript 指向 JavaScript 的虚线箭头

### Requirement: 分组带

关系图 MUST 在背景显示 5 层横向分组带,每层有标题:

- 第 1 层: `Apps & Frameworks`
- 第 2 层: `Backend Services`
- 第 3 层: `Languages`
- 第 4 层: `Data`

标题样式:
- 字体: Outfit Black
- 字号: 与现有 h2 一致或略小
- 颜色: 黑色 `#121212`
- 字重: 900
- 大小写: uppercase
- 字距: tight

每层节点的 y 坐标 SHALL 在该层范围内。

#### Scenario: 分组带可见

- **WHEN** 关系图渲染完成
- **THEN** 4 个分组标题 SHALL 在对应水平条带的左侧显示
- **AND** 每个分组的节点 SHALL 位于该条带内

### Requirement: Hover 高亮（传递闭包）

当鼠标 hover 某节点 N 时,系统 SHALL:

- 高亮 N 本身（保持 opacity 1）
- 高亮 N 的所有 successors（向上层）
- 高亮 N 的所有 predecessors（向下层）
- 高亮连接以上节点的所有边
- 将其他所有未高亮的节点和边的 opacity 降到 0.2

当鼠标离开节点时,所有节点和边 SHALL 恢复 opacity 1。

#### Scenario: Hover React Native 节点

- **WHEN** 用户鼠标 hover React Native 节点
- **THEN** React Native + React + JavaScript 节点 SHALL 保持 opacity 1
- **AND** 连接它们的边 SHALL 保持 opacity 1
- **AND** 其他所有节点和边的 opacity SHALL 降到 0.2

#### Scenario: 鼠标离开节点

- **WHEN** 鼠标离开 hover 的节点
- **THEN** 所有节点和边的 opacity SHALL 恢复到 1

### Requirement: 节点点击跳转

每个节点 MUST 在被点击时跳转到对应技能的列表页。

URL 格式: `${BASE}/skills/{skillId}`,其中 `BASE` 来自 `src/utils/base.ts`,`skillId` 来自节点的 `data.skillId`。

#### Scenario: 用户点击 Vue 节点

- **WHEN** 用户在桌面端点击 Vue 节点
- **THEN** 浏览器 SHALL 跳转到 `${BASE}/skills/vue`

### Requirement: 入场动画

关系图首次进入视口时,节点 SHALL 以 spring 扩散动画从中心位置移动到 preset 位置。

动画参数:
- 起始位置: 视口中心 `(width/2, height/2)`
- 终点位置: `topology.ts` 中 preset 定义的坐标
- 缓动: cytoscape `spring(500, 40)`
- 单节点持续时间: 800ms
- 节点间 stagger: 60ms

边在所有节点入场完成后淡入 200ms。

#### Scenario: 关系图首次进入视口

- **WHEN** 关系图区段首次滚入视口
- **AND** cytoscape 完成初始化
- **THEN** 节点 SHALL 从中心位置开始,以 spring 缓动扩散到 preset 位置
- **AND** 节点入场顺序 SHALL 按 stagger 60ms 依次启动

#### Scenario: 用户启用 prefers-reduced-motion

- **WHEN** 用户系统设置启用 `prefers-reduced-motion: reduce`
- **AND** 关系图首次进入视口
- **THEN** 节点 SHALL 直接显示在 preset 位置,无入场动画

### Requirement: 移动端 fallback

视口宽度 < 768px 时,系统 SHALL 渲染分组卡片栈代替 cytoscape 关系图。

卡片栈 MUST:
- 不加载 cytoscape 库（节省 ~120KB）
- 显示 4 个分组(Apps & Frameworks / Backend Services / Languages / Data),每组有标题
- 每组内技能以纵向卡片堆叠展示
- 卡片样式与 `/skills` 列表页保持视觉一致（Bauhaus 描边 + 硬阴影）
- 卡片可点击,跳转到 `${BASE}/skills/{skillId}`
- 数据源与桌面端共享 `topology.ts`

#### Scenario: 用户在手机端访问 about 页

- **WHEN** 用户在视口宽度 < 768px 的设备访问 about 页
- **AND** Skill Graph 区段滚入视口
- **THEN** 系统 SHALL NOT 加载 cytoscape 库
- **AND** SHALL 渲染 4 个分组的纵向卡片栈

#### Scenario: 用户在手机端点击技能卡片

- **WHEN** 用户在 fallback 卡片栈上点击 React 卡片
- **THEN** 浏览器 SHALL 跳转到 `${BASE}/skills/react`

### Requirement: 进度 tooltip

桌面端 hover 节点时,系统 SHALL 在节点下方显示进度百分比 tooltip,沿用现有视觉(`bg-foreground` + `text-on-foreground` + 硬阴影)。

进度计算: `Math.round(completedInPlan / totalInPlan * 100)`。

#### Scenario: Hover Astro 节点

- **WHEN** 用户在桌面端 hover Astro 节点
- **AND** Astro 路线图已 100% 完成
- **THEN** 节点下方 SHALL 显示 tooltip,文字 "100%"

### Requirement: SSR 安全

组件 MUST 在 Astro SSG 构建期不引用 `window` / `document` / `canvas`。

cytoscape 的初始化 SHALL 仅在客户端 hydrate 后执行。

#### Scenario: Astro build 期渲染

- **WHEN** 执行 `astro build`
- **THEN** 构建 SHALL NOT 因 cytoscape SSR 失败
- **AND** 输出的静态 HTML SHALL 包含 fallback / placeholder 内容
