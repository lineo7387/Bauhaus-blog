---
title: Flutter 3.27+ 完整学习路线
description: 从 Dart 基础到 Flutter 3.27 新特性，覆盖跨平台 UI 开发核心技能与实战技巧
skill: flutter
version: "3.27+"
status: in-progress
total: 12
createdAt: 2026-05-08
updatedAt: 2026-05-10
planOrder:
  - flutter-setup-dart-basics
  - flutter-widget-basics
  - flutter-layout-system
  - flutter-events-forms
  - flutter-state-management
  - flutter-327-features
  - flutter-async-networking
  - flutter-custom-paint-animation
  - flutter-responsive-adaptation
  - flutter-gorouter-navigation
  - flutter-performance-native
  - flutter-web-desktop-deploy
---

## 基础知识

- [✅] Flutter 环境搭建与 Dart 基础语法
      desc: Flutter SDK 安装配置、Dart 语言核心语法、空安全、类型系统与常用数据结构
      difficulty: easy
      estimatedWords: 1500

- [✅] Widget 体系入门：StatelessWidget 与 StatefulWidget
      desc: Widget 树概念、无状态与有状态 Widget 的区别、BuildContext 理解、Element 与 RenderObject 基础
      difficulty: easy
      estimatedWords: 1500

- [✅] 基础布局系统与常用 Widget
      desc: Row、Column、Stack、Flex 布局原理、Container、SizedBox、Padding 等常用 Widget 使用
      difficulty: easy
      estimatedWords: 1500

- [✅] 事件处理与表单交互
      desc: GestureDetector、InkWell、TextField、Form 与验证、常用输入组件
      difficulty: easy
      estimatedWords: 1200

## 进阶技能

- [✅] 状态管理：Provider、Riverpod 与 Bloc
      desc: 状态管理演进路线、Provider 依赖注入、Riverpod 响应式编程、Bloc 架构模式与事件驱动
      difficulty: medium
      estimatedWords: 2500

- [✅] Flutter 3.27 新特性解析：Impeller、Color API、Material 3
      desc: Impeller 渲染引擎原理与优势、3.27 Color API 变化（withValues 替代 withOpacity）、Material Design 3 Token 更新
      difficulty: medium
      estimatedWords: 2500

- [✅] 异步编程与网络请求
      desc: Future 与 async/await、Stream 与 StreamBuilder、Dio 网络库封装、JSON 序列化与数据模型
      difficulty: medium
      estimatedWords: 2000

## 生态与实践

- [✅] 自定义绘制与动画系统
      desc: CustomPainter 绘制原理、Canvas 与 Paint、Tween 与 AnimationController、Hero 动画与页面转场
      difficulty: medium
      estimatedWords: 2500

- [✅] 响应式布局与多平台适配
      desc: MediaQuery 与 LayoutBuilder、自适应与响应式布局策略、不同屏幕尺寸的适配方案
      difficulty: easy
      estimatedWords: 1500

- [✅] 导航与路由：GoRouter 实战
      desc: 声明式路由、GoRouter 配置、深层链接、路由守卫与重定向、ShellRoute 嵌套导航
      difficulty: medium
      estimatedWords: 2000

## 高级主题

- [✅] Flutter 性能优化与平台通道
      desc: 性能分析工具（DevTools）、Widget 重建优化、Isolate 与并发、Platform Channel 与原生代码通信
      difficulty: hard
      estimatedWords: 2500

- [✅] Flutter Web、桌面端与发布部署
      desc: Flutter Web 渲染模式（CanvasKit vs HTML）、桌面端适配、应用签名、各大应用商店发布流程
      difficulty: hard
      estimatedWords: 3000

---

## 元信息

| 字段 | 说明 |
|------|------|
| `status` | planning / in-progress / completed |
| `difficulty` | easy / medium / hard |
| `estimatedWords` | 预估字数 |

## 文章路径

所有文章将输出到：`src/content/blog/flutter/`
