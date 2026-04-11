---
title: React 完整学习路线
description: 从基础到进阶的系统化学习路径，涵盖 React 核心概念、Hooks、生态工具及性能优化
skill: react
version: "18.x"
status: completed
createdAt: 2026-04-08
updatedAt: 2026-04-11
---

## 基础知识

- [✅] React 元素与 JSX 语法
      desc: 理解 JSX 本质、虚拟 DOM 概念、JSX 编译原理与常见错误
      difficulty: easy
      estimatedWords: 1500

- [✅] 组件与 Props
      desc: 函数组件与类组件、Props 传递、children 属性、组件设计原则
      difficulty: easy
      estimatedWords: 1200

- [✅] State 与 setState 机制
      desc: useState 钩子、状态更新异步性、批量更新、状态提升模式
      difficulty: easy
      estimatedWords: 1500

- [✅] 事件处理与绑定
      desc: 合成事件系统、事件委托、事件处理函数绑定与传参
      difficulty: easy
      estimatedWords: 1000

- [✅] 条件渲染与列表渲染
      desc: 条件渲染模式、Key 原理与列表渲染中的 Key 最佳实践
      difficulty: easy
      estimatedWords: 1000

## 进阶技能

- [✅] useEffect 深度解析
      desc: 副作用执行时机、依赖数组、清理函数、常见误用场景与替代方案
      difficulty: medium
      estimatedWords: 2500

- [✅] useRef 与 DOM 操作
      desc: Ref 对象操作、可变引用、useRef 与 useState 的区别、forwardRef
      difficulty: medium
      estimatedWords: 1500

- [✅] useCallback 与 useMemo
      desc: 记忆化原理、适用场景、过度优化的危害与性能测量方法
      difficulty: medium
      estimatedWords: 2000

- [✅] Context 与全局状态
      desc: Context 原理、createContext 使用、useContext 消费、状态管理模式选择
      difficulty: medium
      estimatedWords: 2000

- [✅] 表单处理
      desc: 受控与非受控组件、React Hook Form 使用、表单验证与错误处理
      difficulty: medium
      estimatedWords: 2000

## 生态与实践

- [✅] React Router 路由管理
      desc: 路由配置、嵌套路由、动态路由、导航守卫与路由状态管理
      difficulty: medium
      estimatedWords: 2500

- [✅] Vitest + Testing Library 测试
      desc: 组件测试、用户交互模拟、Mock 技巧、测试覆盖率实践
      difficulty: medium
      estimatedWords: 2000

## 高级主题

- [✅] 性能优化核心策略
      desc: React Profiler 使用、渲染分析与优化、代码分割、懒加载与预加载
      difficulty: hard
      estimatedWords: 3000

- [✅] React Server Components 与 SSR
      desc: RSC 原理、服务端与客户端组件边界、流式渲染、Next.js App Router
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

所有文章将输出到：`src/content/blog/react/`

## 更新记录

- 2026-04-08：创建路线图
- 2026-04-10：完成进阶技能章节（useEffect、useRef、useCallback/useMemo、Context、表单处理）
- 2026-04-10：审核通过，基础知识全部标记为 [✅]
- 2026-04-11：完成生态与实践、高级主题章节，React 路线图全部完成
