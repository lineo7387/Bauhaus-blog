---
title: Express 完整学习路线
description: 从基础到进阶的系统化学习路径，涵盖 Express 5 核心概念、中间件、路由设计及实战技巧
skill: express
version: "5.x"
status: in-progress
total: 13
createdAt: 2026-04-16
updatedAt: 2026-04-16
planOrder:
  - express-overview-setup
  - routing-basics
  - middleware-intro
  - request-response
  - static-assets
  - middleware-advanced
  - router-modular
  - error-handling
  - template-engines
  - restful-api-design
  - database-integration
  - auth-security
  - testing-deployment
---

## 更新记录

- 2026-04-16：创建路线图
- 2026-04-16：基础知识 5 篇文章全部完成（概述与环境搭建、路由基础、中间件入门、请求与响应对象、静态资源服务）

---

## 基础知识

- [✅] Express 概述与环境搭建
      desc: Express 简介、5.x 新特性、安装、项目初始化与开发服务器启动
      difficulty: easy
      estimatedWords: 1000

- [✅] 路由基础
      desc: GET/POST/PUT/DELETE 方法、动态路由参数（req.params）、查询参数（req.query）
      difficulty: easy
      estimatedWords: 1200

- [✅] 中间件入门
      desc: 中间件概念、执行流程、next() 机制、全局中间件与路由级中间件
      difficulty: easy
      estimatedWords: 1500

- [✅] 请求与响应对象
      desc: req/res 常用 API、状态码设置、JSON 与文件响应、响应头配置
      difficulty: easy
      estimatedWords: 1000

- [✅] 静态资源服务
      desc: express.static 托管静态文件、虚拟路径前缀、多静态目录配置
      difficulty: easy
      estimatedWords: 800

## 进阶技能

- [ ] 中间件进阶与常用内置中间件
      desc: body-parser、CORS 跨域、morgan 日志、helmet 安全头、compression 压缩
      difficulty: medium
      estimatedWords: 2000

- [ ] 路由模块化与 Router
      desc: express.Router() 路由拆分、前缀分组、自动路由加载与组织
      difficulty: medium
      estimatedWords: 1500

- [ ] 错误处理
      desc: 全局错误处理中间件、404 处理、自定义 Error 类、同步与异步错误
      difficulty: medium
      estimatedWords: 1500

- [ ] 模板引擎集成
      desc: EJS/Pug 使用、动态模板渲染、局部模板复用、视图路径配置
      difficulty: medium
      estimatedWords: 1800

- [ ] RESTful API 设计实践
      desc: REST 原则、CRUD 路由设计、API 版本管理（v1/v2）、响应格式规范
      difficulty: medium
      estimatedWords: 2000

## 生态与实践

- [ ] 数据库集成
      desc: MongoDB (Mongoose)、MySQL (mysql2)、连接池管理、ORM 实践与选型
      difficulty: medium
      estimatedWords: 2000

- [ ] 认证与安全
      desc: JWT 鉴权、Session 与 Cookie、bcrypt 密码加密、CSRF 防护与安全最佳实践
      difficulty: hard
      estimatedWords: 2500

- [ ] 测试与部署
      desc: Jest + Supertest 单元测试、生产环境配置、Nginx 反向代理、Docker 容器化部署
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

所有文章将输出到：`src/content/blog/express/`
