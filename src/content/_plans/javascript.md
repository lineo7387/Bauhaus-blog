---
title: JavaScript 完整学习路线
description: 从 ES5 基础到 ES2025 新特性，系统化学习 JavaScript 语言核心、数据结构与高级主题
skill: javascript
version: "ES2025"
status: in-progress
total: 18
createdAt: 2026-04-25
updatedAt: 2026-04-25
planOrder:
  - variables-and-data-types
  - operators-and-control-flow
  - functions-and-scope
  - object-and-prototype
  - es6-destructuring-spread
  - class-and-inheritance
  - promise-and-async-await
  - module-and-import-export
  - es2021-to-es2025
  - proxy-and-symbol
  - array-built-in-methods
  - stack-and-queue
  - linked-list
  - binary-search-tree
  - hash-table
  - graph-data-structure
  - sorting-and-searching
  - iterator-and-generator
  - testing-and-debugging
---

## 更新记录

- 2026-04-25：创建路线图，从 ES5 到 ES2025，覆盖核心语法、现代特性和手写数据结构

---

## 基础知识

- [✅] 变量与数据类型
      desc: var/let/const 作用域规则、原始类型与引用类型、类型判断与转换
      difficulty: easy
      estimatedWords: 1500

- [✅] 运算符与控制流
      desc: 算术/比较/逻辑/位运算符、if/else/switch、三元表达式、循环语句
      difficulty: easy
      estimatedWords: 1200

- [✅] 函数与作用域
      desc: 函数声明与表达式、IIFE、闭包、词法作用域、call/apply/bind
      difficulty: medium
      estimatedWords: 2000

- [✅] 对象与原型
      desc: 对象创建、属性描述符、原型链查找、继承模式（原型链/构造函数/组合继承）
      difficulty: medium
      estimatedWords: 2000

## 进阶技能

- [ ] ES6 解构赋值与扩展运算符
      desc: 对象/数组解构、默认参数、rest 参数、展开运算符在函数调用与字面量中的应用
      difficulty: easy
      estimatedWords: 1500

- [ ] 类与继承机制
      desc: class 语法糖、constructor、static 方法、getter/setter、私有字段（#field）、extends 与 super
      difficulty: medium
      estimatedWords: 2000

- [ ] Promise 与 async/await
      desc: Promise 状态机、Promise.all/race/allSettled、async 函数、错误处理、事件循环协作
      difficulty: medium
      estimatedWords: 2500

- [ ] 模块与导入导出
      desc: ESM（import/export）与 CommonJS（require/module.exports）对比、动态导入、循环依赖处理
      difficulty: easy
      estimatedWords: 1500

- [ ] ES2021～ES2025 新特性
      desc: 逻辑赋值运算符、数值分隔符、Promise.any、Array.at()、顶层 await、Error.cause、装饰器、Array grouping、Record&Tuple、using 声明、import 属性
      difficulty: medium
      estimatedWords: 3000

- [ ] Proxy、Reflect 与 Symbol
      desc: Proxy 拦截器（get/set/has/apply 等）、Reflect API、Well-Known Symbols（Symbol.iterator/Symbol.toPrimitive）、可劫持的语言行为
      difficulty: hard
      estimatedWords: 2500

## 生态与实践

- [ ] 数组内置方法综合运用
      desc: forEach/map/filter/find/findIndex/every/some/reduce/sort 的组合使用、惰性求值与性能陷阱
      difficulty: medium
      estimatedWords: 2000

## 综合案例：手写数据结构

- [ ] 栈与队列
      desc: 手写 Stack（push/pop/peek）、Queue（enqueue/dequeue）、Deque、双端队列、优先级队列；应用场景：函数调用栈、任务调度、括号匹配
      difficulty: easy
      estimatedWords: 2000

- [ ] 链表
      desc: 单向链表、双向链表；手写 append/removeAt/insert/reverse；与数组对比（插入/删除/查询复杂度）；约瑟夫斯问题
      difficulty: medium
      estimatedWords: 2500

- [ ] 二叉搜索树
      desc: BST 的插入、查找、删除、遍历（前/中/后序）、平衡与旋转（AVL 树/红黑树概念）；手写 BST 类与递归算法
      difficulty: hard
      estimatedWords: 3000

- [ ] 哈希表
      desc: 哈希函数设计、冲突解决（链地址法/开放地址法）、负载因子与扩容、手写 HashMap 与 HashSet；LRU Cache 综合案例
      difficulty: hard
      estimatedWords: 3000

- [ ] 图结构
      desc: 图的表示（邻接表/邻接矩阵）、BFS 与 DFS 遍历、最短路径（Dijkstra）、拓扑排序、手写图类
      difficulty: hard
      estimatedWords: 2500

## 高级主题

- [ ] 排序与搜索算法
      desc: 归并排序、快速排序、堆排序的原理与实现；二分搜索、分治策略、算法复杂度分析（时间/空间）
      difficulty: medium
      estimatedWords: 2500

- [ ] 迭代器与生成器
      desc: 可迭代协议与迭代器协议、自定义可迭代对象、生成器函数（function*）、yield/return/throw、异步生成器
      difficulty: hard
      estimatedWords: 2000

- [ ] 测试与调试
      desc: JavaScript 调试技巧（Chrome DevTools）、断言与异常处理、单元测试框架（Vitest/Jest）、测试覆盖率、TDD 实践
      difficulty: easy
      estimatedWords: 1500

---

## 元信息

| 字段 | 说明 |
|------|------|
| `status` | planning / in-progress / completed |
| `difficulty` | easy / medium / hard |
| `estimatedWords` | 预估字数 |

## 文章路径

所有文章将输出到：`src/content/blog/javascript/`
