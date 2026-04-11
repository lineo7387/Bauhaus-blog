---
title: React Native 完整学习路线
description: 从基础到进阶的系统化学习路径，涵盖 React Native 核心概念、原生模块、导航、性能优化与跨平台发布
skill: react-native
version: "0.76.x"
status: planning
createdAt: 2026-04-11
updatedAt: 2026-04-11
planOrder:
  - react-native-intro-environment
  - react-native-core-components
  - react-native-flexbox-layout
  - react-native-props-state
---

## 基础知识

- [✅] React Native 简介与环境搭建
      desc: React Native 发展历史、核心原理、与 Flutter/Web 的对比，开发环境配置（macOS/Windows）、JDK、Xcode/Android Studio 安装
      difficulty: easy
      estimatedWords: 1500

- [✅] 核心组件一览
      desc: View、Text、Image、TextInput、ScrollView、FlatList、StyleSheet 等基础组件的使用场景与注意事项
      difficulty: easy
      estimatedWords: 2000

- [✅] Flexbox 布局详解
      desc: React Native 中的 Flexbox 布局模型，与 CSS Flexbox 的差异，常见布局场景实战
      difficulty: easy
      estimatedWords: 2000

- [✅] Props 与 State 基础
      desc: 组件间数据传递、状态管理基础、setState 与状态更新机制
      difficulty: easy
      estimatedWords: 1500

## 进阶技能

- [ ] Hooks 完全指南
      desc: useState、useEffect、useCallback、useMemo、useRef、useContext 等核心 Hooks 的使用与原理
      difficulty: medium
      estimatedWords: 3000

- [ ] React Navigation 导航体系
      desc: 堆栈导航、底部标签导航、Drawer 抽屉导航、导航参数传递、深度链接配置
      difficulty: medium
      estimatedWords: 2500

- [ ] 状态管理方案对比
      desc: Redux Toolkit、Zustand、Jotai、MobX 等主流状态管理库的适用场景与选型建议
      difficulty: medium
      estimatedWords: 2500

- [ ] 网络请求与数据持久化
      desc: fetch / Axios 网络请求、AsyncStorage / MMKV 本地存储、SQLite 数据库使用
      difficulty: medium
      estimatedWords: 2500

## 生态与实践

- [ ] 原生模块开发（iOS）
      desc: TurboModule、Native Module（CocoaPod 方式）、原生 UI 组件桥接、Bridge 通信机制
      difficulty: hard
      estimatedWords: 3000

- [ ] 原生模块开发（Android）
      desc: Java/Kotlin 原生模块集成、Native UI 组件、自定义 Activity，Android Studio 配置
      difficulty: hard
      estimatedWords: 3000

- [ ] 第三方组件库选型
      desc: react-native-paper、react-native-vector-icons、react-native-reanimated、react-native-gesture-handler 等热门库的使用
      difficulty: medium
      estimatedWords: 2000

## 高级主题

- [ ] 性能优化实战
      desc: 列表优化（getItemLayout、windowSize）、内存泄漏排查、CPU/GPU 卡顿分析、 Hermes 引擎调优
      difficulty: hard
      estimatedWords: 2500

- [ ] 热更新与 CI/CD
      desc: CodePush / Expo Updates 热更新配置，GitHub Actions 自动化构建与分发，TestFlight / Google Play 内测
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

所有文章将输出到：`src/content/blog/react-native/`

## 更新记录

- 2026-04-11：创建路线图
- 2026-04-11：基础知识 4 篇文章全部完成
- 2026-04-11：审核通过，基础知识 4 篇全部 ✅
