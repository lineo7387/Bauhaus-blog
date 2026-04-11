---
title: Vue 3 完整学习路线
description: 从基础到进阶的系统化学习路径，涵盖 Vue 3 核心概念、Composition API、生态工具及实战技巧
skill: vue
version: "3.x"
status: completed
createdAt: 2026-04-08
updatedAt: 2026-04-11
planOrder:
  - vue-instance-template
  - reactivity-deep-dive
  - conditional-list-rendering
  - event-handling
  - composition-api
  - vue-lifecycle-hooks
  - pinia-state-management
  - vue-router
  - vue-devtools
  - vitest-unit-testing
  - vite-build-optimization
  - vue-nuxt3-ssr
---

## 更新记录

- 2026-04-08：创建路线图
- 2026-04-11：基础知识 4 篇文章全部完成（实例与模板、响应式原理、条件渲染、事件处理）
- 2026-04-11：进阶技能、生态与实践、高级主题 8 篇文章全部完成（Composition API、生命周期钩子、Pinia、Vue Router、Vue DevTools、Vitest、Vite 优化、Nuxt 3）

---

## 基础知识

- [✅] Vue 实例与模板语法
      desc: 理解 Vue 应用的创建、模板语法、双向绑定原理
      difficulty: easy
      estimatedWords: 1500

- [✅] 响应式原理深度解析
      desc: 深入理解 Vue 3 的 Proxy 响应式系统与依赖追踪机制
      difficulty: hard
      estimatedWords: 2500

- [✅] 条件渲染与列表渲染
      desc: v-if、v-show、v-for 的使用场景与性能差异
      difficulty: easy
      estimatedWords: 1000

- [✅] 事件处理与绑定
      desc: 事件修饰符、按键修饰符、组合式事件处理
      difficulty: easy
      estimatedWords: 1000

## 进阶技能

- [✅] Composition API 完全指南
      desc: setup 语法糖、ref 与 reactive、computed 与 watch
      difficulty: medium
      estimatedWords: 3000

- [✅] 生命周期钩子详解
      desc: 选项式与组合式 API 生命周期的对应关系与使用场景
      difficulty: medium
      estimatedWords: 2000

- [✅] Pinia 状态管理
      desc: Pinia 核心概念、store 设计模式、插件机制
      difficulty: medium
      estimatedWords: 2500

- [✅] Vue Router 路由管理
      desc: 动态路由、嵌套路由、导航守卫、路由元信息
      difficulty: medium
      estimatedWords: 2500

## 生态与实践

- [✅] Vue DevTools 调试技巧
      desc: 组件检查、状态时间旅行、性能分析
      difficulty: easy
      estimatedWords: 1200

- [✅] Vitest 单元测试
      desc: 使用 Vitest + Vue Test Utils 进行组件测试
      difficulty: medium
      estimatedWords: 2000

- [✅] Vite 构建优化
      desc: 构建配置优化、代码分割、懒加载、CDN 加速
      difficulty: medium
      estimatedWords: 2000

## 高级主题

- [✅] Vue 3 SSR 与 Nuxt 3
      desc: 服务端渲染原理、Nuxt 3 使用、自动导入机制
      difficulty: hard
      estimatedWords: 3500

---

## 元信息

| 字段 | 说明 |
|------|------|
| `status` | planning / in-progress / completed |
| `difficulty` | easy / medium / hard |
| `estimatedWords` | 预估字数 |

## 文章路径

所有文章将输出到：`src/content/blog/vue/`
