---
title: htmx 完整学习路线
description: 从基础到进阶的系统化学习路径，掌握 htmx 核心概念、AJAX 交互、事件系统与后端集成
skill: htmx
version: "2.x"
status: in-progress
total: 13
createdAt: 2026-04-25
updatedAt: 2026-04-25
planOrder:
  - htmx-introduction
  - hx-get-post-basics
  - targets-and-swap
  - triggers-and-modifiers
  - forms-and-validation
  - hx-swap-oob
  - events-and-extensions
  - history-management
  - backend-integration
  - css-transitions
  - security-and-csrf
  - custom-extensions
  - htmx-with-frameworks
---

## 更新记录

- 2026-04-25：创建路线图

---

## 基础知识

- [✅] htmx 简介与核心概念
      desc: 理解 htmx 的设计哲学：回归超文本本质，用 HTML 属性替代 JavaScript 实现 AJAX、CSS 过渡、WebSocket 和 Server-Sent Events
      difficulty: easy
      estimatedWords: 1500

- [✅] hx-get 与 hx-post 基础请求
      desc: 掌握基本 HTTP 请求属性，理解 htmx 如何通过声明式属性发起异步请求并替换页面内容
      difficulty: easy
      estimatedWords: 1200

- [✅] 目标元素与内容交换策略
      desc: hx-target 指定更新目标，hx-swap 控制交换方式（innerHTML、outerHTML、beforebegin 等）
      difficulty: easy
      estimatedWords: 1500

- [✅] 触发器与修饰符
      desc: hx-trigger 的完整语法：事件类型、过滤器、延迟、轮询、可见性触发及 once/changed 等修饰符
      difficulty: medium
      estimatedWords: 1800

## 进阶技能

- [✅] 表单处理与验证
      desc: 使用 htmx 处理表单提交、文件上传、客户端与服务器端验证的错误回显模式
      difficulty: medium
      estimatedWords: 2000

- [✅] hx-swap-oob 与多元素更新
      desc: 理解 Out-of-Band 交换机制，实现一次请求更新页面多个独立区域
      difficulty: medium
      estimatedWords: 1800

- [✅] 事件系统与扩展
      desc: htmx 自定义事件体系（htmx:beforeRequest、htmx:afterSwap 等）、事件冒泡与拦截
      difficulty: medium
      estimatedWords: 2200

- [✅] 历史管理与浏览器导航
      desc: hx-push-url、hx-replace-url 与浏览器历史集成，实现无刷新页面的前进后退支持
      difficulty: medium
      estimatedWords: 1500

## 生态与实践

- [✅] 与后端框架集成
      desc: htmx 与 Django、Flask、FastAPI、Laravel、Rails 等主流后端框架的配合模式
      difficulty: easy
      estimatedWords: 2000

- [✅] CSS 过渡与动画
      desc: 利用 htmx 的 class 工具（hx-add-class、hx-remove-class）与 CSS 过渡实现平滑的界面变化
      difficulty: easy
      estimatedWords: 1200

- [✅] 安全与 CSRF 防护
      desc: hx-headers 配置、CSRF Token 传递、CORS 处理及 htmx 安全最佳实践
      difficulty: medium
      estimatedWords: 1500

## 高级主题

- [ ] 自定义扩展开发
      desc: htmx.defineExtension API，创建自定义行为扩展，理解扩展的生命周期与钩子
      difficulty: hard
      estimatedWords: 2500

- [ ] htmx 与现代前端框架混用
      desc: htmx 与 Alpine.js、React、Vue 的共存策略，渐进增强与局部交互的架构设计
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

所有文章将输出到：`src/content/blog/htmx/`
