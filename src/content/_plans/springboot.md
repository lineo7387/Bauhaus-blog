---
title: Spring Boot 3.x 完整学习路线
description: 从零到生产级的 Spring Boot 3 系统化学习路径，涵盖自动配置、依赖注入、RESTful API、数据访问、安全认证、测试及容器化部署
skill: springboot
version: "3.x"
status: completed
total: 11
createdAt: 2026-04-11
updatedAt: 2026-04-11
planOrder:
  - springboot3-init
  - springboot3-auto-config
  - springboot3-di-bean
  - springboot3-rest-api
  - springboot3-data-access
  - springboot3-configuration
  - springboot3-security
  - springboot3-testing
  - springboot3-docker
  - springboot3-new-features
  - springboot3-observability
---

## 基础知识

- [✅] Spring Boot 3 环境准备与项目初始化
      desc: 搭建 Spring Boot 3.x 开发环境、使用 Spring Initializr（start.spring.io）快速创建项目、理解 Maven/Gradle 构建配置、Spring Boot 项目目录结构、第一个可运行应用
      difficulty: easy
      estimatedWords: 1200

- [✅] Spring Boot 自动配置原理
      desc: 深入理解 @SpringBootApplication 注解组合（@SpringBootConfiguration / @EnableAutoConfiguration / @ComponentScan）、自动配置生效机制（spring.factories / META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports）、自定义 Starter 的编写方法
      difficulty: medium
      estimatedWords: 2000

- [✅] 依赖注入与 Bean 管理
      desc: IoC 容器核心概念、@Bean / @Component / @Configuration 注解使用、构造器注入 vs Setter 注入、@Autowired 与 @Qualifier 精确注入、Bean 作用域（singleton/prototype/request/session）、@Primary 与 @Order 优先级
      difficulty: easy
      estimatedWords: 1800

## 进阶技能

- [✅] RESTful API 与 Web 开发
      desc: @RestController / @Controller + @ResponseBody、@RequestMapping 系列注解（GET/POST/PUT/DELETE）、@PathVariable / @RequestParam / @RequestBody 参数绑定、REST 风格 URL 设计规范、响应封装（统一返回结构）、@Validated 参数校验与国际化错误消息
      difficulty: medium
      estimatedWords: 2200

- [✅] 数据访问：JPA 与 MyBatis
      desc: Spring Data JPA 快速上手（实体映射、Repository 接口、@Query 自定义查询）、MyBatis-Plus 增强用法（分页插件、CRUD 接口、自动填充）、JdbcTemplate 原始查询、事务管理（@Transactional 传播行为与隔离级别）
      difficulty: medium
      estimatedWords: 3000

- [✅] 多环境配置与外部化配置
      desc: application-{profile}.yml/properties 多环境切换、@ConfigurationProperties 强类型配置绑定、@Value 占位符与默认值、配置加密（jasypt）、自定义配置加载顺序、Spring Boot 3 配置属性验证增强
      difficulty: medium
      estimatedWords: 1800

## 生态与实践

- [✅] Spring Security 安全认证
      desc: Spring Security 6.x 核心架构、认证（Authentication）与授权（Authorization）概念、基于 JWT 的无状态登录实现（Token 颁发与验证）、OAuth 2.0 资源服务器入门、@PreAuthorize 方法级安全注解
      difficulty: medium
      estimatedWords: 3000

- [✅] 单元测试与集成测试
      desc: @SpringBootTest 集成测试、@MockBean 模拟依赖、@WebMvcTest 切片测试 REST 接口、AssertJ 断言库、测试数据库配置（Testcontainers、H2 内存数据库）、Spring Boot Test 新增特性（SpringBootTestServer）
      difficulty: medium
      estimatedWords: 2000

- [✅] Docker 容器化与生产部署
      desc: Spring Boot 3 fat jar 原理、分层 Docker 镜像构建（layered jar）、docker-compose 多容器编排（MySQL + Redis + App）、GitHub Actions CI/CD 流水线、Docker Compose 生产环境配置示例
      difficulty: medium
      estimatedWords: 2500

## 高级主题

- [✅] Spring Boot 3 新特性与 GraalVM AOT 编译
      desc: Spring Boot 3 核心升级（Spring Framework 6 / Jakarta EE 9+）、GraalVM Native Image 原生编译加速启动（spring-boot-maven-plugin native）、Spring AOT 编译流程（预编译 AOT 代码生成）、AOT 编译优势与限制场景分析、实测启动时间对比
      difficulty: hard
      estimatedWords: 3000

- [✅] Spring Boot 3 监控、可观测性与性能调优
      desc: Spring Boot Actuator 端点（/actuator/health、/actuator/metrics）、Micrometer + Prometheus + Grafana 可观测性栈集成、自定义指标（@Timed / MeterRegistry）、启动诊断（spring-startup 分析）、JVM 参数调优、连接池（HikariCP）参数配置
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

所有文章将输出到：`src/content/blog/springboot/`

## 更新记录

- 2026-04-11：创建路线图
