---
title: Electron 完整学习路线
description: 从桌面开发基础到生产级应用的系统化学习路径，涵盖 Electron 核心概念、IPC 通信、Node.js 集成、打包发布及主流框架集成
skill: electron
version: "35.x"
status: completed
total: 11
createdAt: 2026-04-12
updatedAt: 2026-04-12
planOrder:
  - electron-intro
  - electron-env-forge
  - electron-ipc
  - electron-preload
  - electron-window-menu
  - electron-dialog-notification
  - electron-native-api
  - electron-react-integration
  - electron-packaging
  - electron-security
  - electron-performance
---

## 基础知识

- [✅] Electron 入门与核心架构
      desc: Electron 简介（Chromium + Node.js 双引擎）、主进程与渲染进程分工、进程间通信基础、快速搭建 Hello World 应用、理解 BrowserWindow 基本配置
      difficulty: easy
      estimatedWords: 1500

- [✅] 开发环境配置与 Electron Forge
      desc: Node.js / npm / pnpm 环境要求、Electron Forge 脚手架（webpack/vite/esbuild 模板）、开发调试（devtools、hot reload）、项目目录结构解析、package.json 关键字段（main / scripts / electron）
      difficulty: easy
      estimatedWords: 1500

- [✅] IPC 通信机制详解
      desc: ipcMain / ipcRenderer 基本用法、invoke / handle 双向异步模式、ipcRenderer.on 监听、channel 命名规范、contextBridge 暴露 API、进程间数据传输（可序列化对象、Buffer、File）
      difficulty: medium
      estimatedWords: 2000

- [✅] Preload 脚本与上下文隔离
      desc: Preload 脚本执行时机、contextBridge.exposeInMainWorld 安全暴露、nodeIntegration / contextIsolation 配置组合、安全白名单设计、preload 与渲染进程的内存隔离边界
      difficulty: medium
      estimatedWords: 2000

## 进阶技能

- [✅] 窗口管理与系统交互
      desc: BrowserWindow 高级配置（frame / transparent / alwaysOnTop / kiosk）、多窗口管理（parent/child、windowGroup）、系统托盘（Tray）图标与右键菜单、 globalShortcut 全局快捷键、桌面通知（Notification API）
      difficulty: medium
      estimatedWords: 2200

- [✅] 原生对话框与文件操作
      desc: dialog.showOpenDialog / showSaveDialog / showMessageBox 原生对话框、Shell 模块（openPath / openExternal / showItemInFolder）、Path 模块跨平台路径处理、app.getPath 用户数据目录、fs 模块文件读写（渲染进程受限）
      difficulty: medium
      estimatedWords: 1800

- [✅] Node.js 原生模块调用
      desc: 在主进程使用 npm 原生模块（sqlite3、sharp、node-fetch）、Native Module 编译（node-gyp / node-pre-gyp）、electron-rebuild 重建二进制、纯 JS 替代方案（better-sqlite3、@img/sharp-js）、混合多线程（Worker Threads）
      difficulty: hard
      estimatedWords: 2500

## 生态与实践

- [✅] React / Vue 与 Electron 集成
      desc: React-Forge / Vue-Forge 集成方案、Vite + Electron 构建（electron-vite 工具链）、React Router / Vue Router 在 Electron 中的使用、主进程与渲染进程状态共享方案（Zustand / Pinia IPC 桥接）
      difficulty: medium
      estimatedWords: 2500

- [✅] 应用打包与分发
      desc: electron-builder / electron-forge 打包配置（Windows NSIS / macOS DMG / Linux AppImage）、自动更新（electron-updater / @electron/auto-update）、代码签名（Windows Authenticode / macOS Apple Developer）、多平台 CI 流水线（GitHub Actions）
      difficulty: medium
      estimatedWords: 2500

## 高级主题

- [✅] 安全最佳实践
      desc: CSP 内容安全策略配置、openExternal 白名单校验、webSecurity 与远程内容加载限制、禁用 nodeIntegration、敏感数据加密存储（safeStorage API）、防止 XSS 与注入攻击、安全审计工具（Electron Fuses、Blessed）
      difficulty: hard
      estimatedWords: 2500

- [✅] 性能优化与生产调优
      desc: 启动时间优化（lazy load、预加载策略）、内存泄漏排查（Chrome DevTools / electron-log）、GPU / 合成器加速控制、减少打包体积（asar 拆分、CDN externals）、多进程架构（BrowserView、子进程池）、功耗优化（powerSaveBlocker）
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

所有文章将输出到：`src/content/blog/electron/`

## 更新记录

- 2026-04-12：创建路线图，共规划 11 个知识点（easy 2 个，medium 6 个，hard 3 个）
