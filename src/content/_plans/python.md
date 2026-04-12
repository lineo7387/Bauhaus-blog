---
title: Python 3.x 完整学习路线
description: 从基础到进阶的系统化学习路径，涵盖 Python 3 核心语法、面向对象、异步编程及生态实践
skill: python
version: "3.13"
status: completed
total: 16
updatedAt: 2026-04-10
planOrder:
  - python-environment-setup
  - python-data-types
  - python-control-flow
  - python-collections
  - python-functions
  - python-string
  - python-oop
  - python-modules
  - python-exception
  - python-iterator-generator
  - python-decorator
  - python-pip-venv
  - python-file-io
  - python-stdlib
  - python-async
  - python-concurrency
---

## 基础知识

- [✅] Python 环境搭建与基础语法
      desc: Python 3 安装、解释器运行方式、代码缩进规范、变量命名规则、注释与文档
      difficulty: easy
      estimatedWords: 1200

- [✅] 数据类型与运算符
      desc: 整数、浮点数、布尔值、复数等内置类型，以及算术、比较、逻辑、位运算运算符
      difficulty: easy
      estimatedWords: 1200

- [✅] 流程控制语句
      desc: if-elif-else 条件分支、for/while 循环、break/continue/pass 的使用场景与技巧
      difficulty: easy
      estimatedWords: 1000

- [✅] 列表、元组、字典与集合
      desc: 四种核心容器类型的创建、增删改查、切片、解包以及推导式语法
      difficulty: easy
      estimatedWords: 1500

- [✅] 函数定义与参数传递
      desc: 函数定义、默认参数、可变参数、关键字参数、lambda 表达式与作用域规则
      difficulty: easy
      estimatedWords: 1500

- [✅] 字符串处理与格式化
      desc: 字符串常用方法、f-string 格式化、format 方法、正则表达式基础
      difficulty: medium
      estimatedWords: 1500

## 进阶技能

- [✅] 面向对象编程
      desc: 类与实例、继承与多态、MRO、特殊方法（魔术方法）、属性装饰器与描述符协议
      difficulty: medium
      estimatedWords: 2500

- [✅] 模块与包管理
      desc: import 机制、自定义模块、__name__ == "__main__"、包结构、相对导入与绝对导入
      difficulty: medium
      estimatedWords: 1500

- [✅] 异常处理与调试
      desc: try-except-else-finally 结构、自定义异常、traceback 分析、logging 模块与断点调试
      difficulty: medium
      estimatedWords: 1500

- [✅] 迭代器、生成器与上下文管理器
      desc: 迭代器协议、yield 关键字、生成器表达式、with 语句与 __enter__/__exit__ 协议
      difficulty: medium
      estimatedWords: 2000

- [✅] 装饰器与元编程
      desc: 函数装饰器、类装饰器、带参数的装饰器、functools.wraps、类元编程与 __new__ 的使用
      difficulty: hard
      estimatedWords: 2000

## 生态与实践

- [✅] pip、虚拟环境与项目结构
      desc: pip 常用命令、venv 虚拟环境管理、requirements.txt、pyproject.toml 与项目布局规范
      difficulty: easy
      estimatedWords: 1200

- [✅] 文件操作与数据序列化
      desc: 文件读写、路径处理 pathlib、JSON/YAML/CSV 序列化与反序列化
      difficulty: medium
      estimatedWords: 1500

- [✅] 常用标准库详解
      desc: datetime 日期时间、collections 容器、functools 高阶函数、itertools 与 contextlib 工具
      difficulty: medium
      estimatedWords: 1500

## 高级主题

- [✅] 异步编程 async/await
      desc: 协程概念、async/await 语法、asyncio 事件循环、aiohttp 并发爬虫与异步上下文管理
      difficulty: hard
      estimatedWords: 2500

- [✅] 并发与并行编程
      desc: threading 多线程、multiprocessing 多进程、GIL 原理、concurrent.futures 与进程池/线程池
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

所有文章将输出到：`src/content/blog/python/`

## 更新记录

- 2026-04-10：创建路线图
- 2026-04-10：16 篇文章全部生成完成
