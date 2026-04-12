---
title: Java 17+ 完整学习路线
description: 从零基础到进阶的系统化学习路径，涵盖 Java 核心语法、面向对象、Java 17+ 新特性、集合框架、JDBC 数据库交互、后端工具链及 JVM 原理，聚焦 Java 后端开发
skill: java
version: "17+"
status: completed
total: 12
createdAt: 2026-04-10
updatedAt: 2026-04-11
planOrder:
  - java-environment-setup
  - java-basic-syntax
  - java-oop-basics
  - java-inheritance-polymorphism
  - java-exception-handling
  - java-17-new-features
  - java-collections-stream
  - java-jdbc
  - java-utility-classes
  - java-dev-toolchain
  - java-concurrency
  - java-jvm-tuning
---

## 基础知识

- [✅] Java 环境搭建与第一个程序
      desc: 安装 JDK 17+、配置环境变量、使用 IDE（IntelliJ IDEA）、编写并运行 Hello World，理解 Java 程序的基本结构
      difficulty: easy
      estimatedWords: 1000

- [✅] Java 基础语法
      desc: 数据类型（基本类型 + 引用类型）、运算符、控制流程（if/else、for、while、switch）、方法定义与调用、数组基础
      difficulty: easy
      estimatedWords: 1500

- [✅] 面向对象基础：类、对象与封装
      desc: 类的定义与对象的创建、成员变量与方法、构造器、封装与访问修饰符（public/private/protected）、getter/setter
      difficulty: easy
      estimatedWords: 1500

- [✅] 继承、多态与接口
      desc: extends 关键字、子类与父类关系、方法重写（@Override）、多态表现、接口（interface）与抽象类（abstract class）、接口的默认方法与静态方法
      difficulty: easy
      estimatedWords: 1500

## 进阶技能

- [✅] 异常处理机制
      desc: 异常体系结构（Error 与 Exception）、try-catch-finally、throws 与 throw、自定义异常、Java 17+ 新特性（switch 表达式中的异常处理简化）
      difficulty: medium
      estimatedWords: 1200

- [✅] Java 17+ 新特性精讲
      desc: Records（不可变数据类）、Sealed Classes（密封类限制继承）、Pattern Matching for instanceof（类型检查简化）、Text Blocks（多行字符串）、Switch Expressions（增强 switch 返回值），全面覆盖 Java 17 LTS 版本重要新特性
      difficulty: medium
      estimatedWords: 2500

- [✅] 集合框架与 Stream API
      desc: List/Set/Map 三大集合体系、ArrayList/HashMap/HashSet 源码思想、Stream API（筛选、映射、归约）、方法引用、Lambda 表达式、Optional 避免空指针
      difficulty: medium
      estimatedWords: 2500

- [✅] JDBC 与数据库交互
      desc: JDBC 编程步骤（加载驱动、建立连接、执行 SQL、处理结果集）、PreparedStatement 防 SQL 注入、事务控制（commit/rollback）、连接池原理（Druid/HikariCP 入门）
      difficulty: medium
      estimatedWords: 2000

- [✅] 常用工具类与编码实践
      desc: String/StringBuilder/StringBuffer 对比、日期时间 API（LocalDateTime）、Java 17+ 日期时间增强、常用工具类（Objects、Collections）、编码规范与常见错误避坑
      difficulty: medium
      estimatedWords: 1500

## 生态与实践

- [✅] 后端开发工具链：构建、测试与日志
      desc: Maven（pom.xml、依赖管理、生命周期）或 Gradle（Groovy DSL）快速上手、JUnit 5 单元测试基础、SLF4J + Logback 日志框架、Git 版本控制基础。这些工具是后端开发标配，后续框架文章会深入展开。
      difficulty: medium
      estimatedWords: 2000

> **后端框架生态铺垫**：本章节作为总览，点到为止。以下主题可独立成栏后续策划：Spring Boot 3.x 入门（Web 开发）、MyBatis / JPA（持久层框架）、Spring MVC 与 RESTful API 设计、Spring Cloud 微服务入门。

## 高级主题

- [✅] 并发编程与 Virtual Threads
      desc: 线程与进程、线程创建方式（Thread/Runnable/Callable）、线程同步（synchronized/Lock）、线程池（ExecutorService）、Java 17+ Virtual Threads（虚拟线程入门，JEP 425），理解现代 Java 并发模型
      difficulty: hard
      estimatedWords: 3000

- [✅] JVM 原理与调优基础
      desc: JVM 内存结构（堆/栈/方法区）、类加载机制、垃圾回收算法（GC）、Java 17+ 新一代 GC（G1GC、ZGC、Shenandoah）、常用调优参数（-Xmx/-Xms 等）、通过 Arthas / jstat 诊断性能问题
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

所有文章将输出到：`src/content/blog/java/`

## 更新记录

- 2026-04-10：创建路线图
- 2026-04-10：基础知识篇章（4篇）审核通过
- 2026-04-11：进阶技能+生态实践+高级主题篇章（8篇）全部完成
