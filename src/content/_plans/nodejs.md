---
title: Node.js 完整学习路线
description: 从 Node.js 运行时核心到高级性能优化的系统化学习路径，涵盖模块系统、事件循环、流、集群与原生扩展
skill: nodejs
version: "24.x"
status: in-progress
total: 15
createdAt: 2026-04-15
updatedAt: 2026-04-16
planOrder:
  - nodejs-runtime-architecture
  - module-system-cjs-esm
  - core-modules-overview
  - npm-basics
  - http-server-quickstart
  - event-loop-async-io
  - buffer-binary-data
  - streams-backpressure
  - child-process-ipc
  - async-patterns-evolution
  - filesystem-practice
  - test-runner-debugging
  - cluster-load-balancing
  - performance-profiling
  - native-addon-napi
---

## 更新记录

- 2026-04-15：创建路线图
- 2026-04-16：审核通过 5 篇文章，标记基础部分 5 个知识点为已完成

## 基础知识

- [✅] Node.js 运行时与架构概览
      desc: V8 引擎、libuv、事件驱动模型、单线程非阻塞 I/O 的本质、Node.js 24 新特性一览（Permission Model、Stable Test Runner、WebSocket 客户端）
      difficulty: easy
      estimatedWords: 1200

- [✅] CommonJS 与 ES Modules
      desc: require 与 module.exports 机制、ESM 的 import/export、__dirname 与 import.meta.url 差异、cjs/mjs 互操作、package.json 中的 type 与 exports 字段
      difficulty: easy
      estimatedWords: 1500

- [✅] 核心模块速览（path、os、util、events）
      desc: path 跨平台处理、os 系统信息读取、util.promisify 与 util.parseArgs、EventEmitter 的订阅发布模式与内存泄漏防范
      difficulty: easy
      estimatedWords: 1200

- [✅] npm 生态与包管理基础
      desc: package.json 核心字段、语义化版本、npm scripts、npx、node_modules 解析规则、pnpm/yarn 对比
      difficulty: easy
      estimatedWords: 1200

- [✅] HTTP 服务器快速上手
      desc: 使用 http 模块创建基础服务器、请求/响应对象、路由分发、静态文件服务入门
      difficulty: easy
      estimatedWords: 1500

## 进阶技能

- [ ] 事件循环与异步 I/O 原理
      desc: libuv 的六个阶段（timers/poll/check/close 等）、microtask 与 macrotask 执行顺序、setImmediate 与 setTimeout 的竞态、nextTick 与 Promise.then 的优先级
      difficulty: medium
      estimatedWords: 2000

- [ ] Buffer 与二进制数据处理
      desc: Buffer 的内存分配与编码转换、Buffer.alloc 与 Buffer.from、TypedArray 互操作、二进制协议解析示例
      difficulty: medium
      estimatedWords: 1500

- [ ] Stream 流与背压控制
      desc: Readable/Writable/Transform/Duplex 四类流、pipe 与 pipeline、背压（backpressure）机制、objectMode 的应用场景
      difficulty: medium
      estimatedWords: 1800

- [ ] 子进程与进程间通信
      desc: spawn、exec、execFile、fork 的区别与使用场景、stdio 重定向、IPC 消息通道、cluster 模块的预演
      difficulty: medium
      estimatedWords: 1800

## 生态与实践

- [ ] 异步编程模式演进
      desc: 回调函数与错误优先约定、Promise 化实践、async/await 的底层实现、AsyncLocalStorage 上下文传递、AbortController 取消异步操作
      difficulty: medium
      estimatedWords: 1800

- [ ] 文件系统实战与路径处理
      desc: fs 的同步/异步/Promise API、文件描述符与流式读写、watch 文件监控机制、临时文件与目录管理
      difficulty: medium
      estimatedWords: 1500

- [ ] 内置 Test Runner 与调试
      desc: node:test 与 node:assert 的使用、测试套件与钩子、Mock 与快照测试、--inspect 与 VS Code 调试配置、Node.js 24 中 Test Runner 的覆盖率报告
      difficulty: medium
      estimatedWords: 1800

## 高级主题

- [ ] 集群与负载均衡
      desc: cluster 模块的 Master-Worker 架构、共享端口监听、Round-Robin 调度策略、PM2 进程管理对比、零停机重启思路
      difficulty: hard
      estimatedWords: 2200

- [ ] 性能剖析与内存优化
      desc: V8 堆内存结构、垃圾回收机制、内存泄漏常见原因、--prof 与 Chrome DevTools 火焰图、eventLoopUtilization 监控
      difficulty: hard
      estimatedWords: 2200

- [ ] 原生扩展与 N-API
      desc: 使用 node-gyp 编译 C/C++ 扩展、N-API 的 ABI 稳定性、Node-API 与 NAN 的对比、使用 node-api-rs 编写 Rust 扩展的入门路径
      difficulty: hard
      estimatedWords: 2000

---

## 元信息

| 字段 | 说明 |
|------|------|
| `status` | planning / in-progress / completed |
| `difficulty` | easy / medium / hard |
| `estimatedWords` | 预估字数 |

## 文章路径

所有文章将输出到：`src/content/blog/nodejs/`
