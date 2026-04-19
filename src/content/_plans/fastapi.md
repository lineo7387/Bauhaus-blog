---
title: FastAPI 完整学习路线
description: 从基础到进阶的系统化学习路径，涵盖 FastAPI 核心功能、Pydantic 验证、异步处理、数据库集成及生产部署
skill: fastapi
version: "0.115.x"
status: in-progress
total: 13
createdAt: 2026-04-19
updatedAt: 2026-04-19
planOrder:
  - fastapi-installation
  - path-query-headers
  - request-body-pydantic
  - response-model
  - fastapi-dependencies
  - crud-database
  - authentication-jwt
  - async-fundamentals
  - middleware-cors
  - background-tasks
  - websockets
  - testing-pytest
  - deployment-docker
---

## 更新记录

- 2026-04-19：基础知识 4 篇文章全部完成（安装与 Hello World、路径参数与查询、请求体与 Pydantic、响应模型）
- 2026-04-19：进阶技能 4 篇文章全部完成（依赖注入、CRUD 数据库、JWT 认证、异步并发）

---

## 基础知识

- [✅] FastAPI 安装与 Hello World
      desc: 环境搭建、第一个 FastAPI 应用、Uvicorn 运行原理
      difficulty: easy
      estimatedWords: 1200

- [✅] 路径参数、查询参数与请求头
      desc: 路径路由、查询字符串、请求头读取与类型注解
      difficulty: easy
      estimatedWords: 1500

- [✅] 请求体与 Pydantic 模型
      desc: Pydantic BaseModel、数据验证、序列化、嵌套模型与默认值
      difficulty: medium
      estimatedWords: 2000

- [✅] 响应模型与数据转换
      desc: response_model、响应状态码、exclude_unset、模型嵌套与别名
      difficulty: medium
      estimatedWords: 1500

## 进阶技能

- [✅] FastAPI 依赖注入系统
      desc: Depends 机制、依赖链、类依赖、异步依赖与多级注入
      difficulty: medium
      estimatedWords: 2000

- [✅] CRUD 与数据库集成
      desc: SQLAlchemy 异步 ORM、Tortoise ORM、TinySQL 集成与数据库连接池
      difficulty: medium
      estimatedWords: 3000

- [✅] 认证与授权：JWT 与 OAuth2
      desc: OAuth2 密码流、JWT Token 生成与验证、依赖注入鉴权、Token 刷新
      difficulty: hard
      estimatedWords: 2500

- [✅] 异步基础与并发模型
      desc: async/await、后台任务、StreamingResponse 与 Server-Sent Events
      difficulty: hard
      estimatedWords: 2000

## 生态与实践

- [ ] 中间件与 CORS 配置
      desc: 自定义中间件、CORS 跨域配置、请求日志与性能监控
      difficulty: easy
      estimatedWords: 1200

- [ ] 后台任务与定时任务
      desc: BackgroundTasks、APScheduler 定时任务、邮件发送与文件处理
      difficulty: medium
      estimatedWords: 1500

- [ ] WebSocket 实时通信
      desc: WebSocket 端点、连接管理、广播机制与跨标签页通信
      difficulty: medium
      estimatedWords: 1800

- [ ] 使用 pytest 进行测试
      desc: TestClient、依赖覆盖、数据库测试 fixture、覆盖率与集成测试
      difficulty: medium
      estimatedWords: 2000

## 高级主题

- [ ] Docker 部署与生产环境优化
      desc: 多阶段构建、Nginx 反向代理、Gunicorn + Uvicorn worker、HTTPS 与环境变量
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

所有文章将输出到：`src/content/blog/fastapi/`
