---
title: MySQL 完整学习路线
description: 从基础到进阶的系统化学习路径，涵盖 MySQL 核心概念、SQL 语法、性能优化及生产实践
skill: mysql
version: "8.x"
status: completed
total: 12
createdAt: 2026-04-20
updatedAt: 2026-05-03
planOrder:
  - mysql-installation
  - sql-basics
  - data-types-schema
  - crud-operations
  - filtering-aggregation
  - joins-subqueries
  - indexing-performance
  - transactions-acid
  - query-optimization
  - stored-procedures-functions
  - backup-recovery
  - replication-ha
---

## 更新记录

- 2026-04-20：创建路线图
- 2026-04-20：基础知识 4 篇文章全部完成（安装与配置、SQL 基础语法、数据类型与表设计、条件过滤与聚合查询）
- 2026-05-03：进阶技能 4 篇文章全部完成（多表查询与子查询、索引原理与使用、事务与 ACID 特性、视图与存储过程）
- 2026-05-03：生态与实践 2 篇文章全部完成（查询优化与执行计划、数据库备份与恢复）
- 2026-05-03：高级主题 2 篇文章全部完成（主从复制与高可用、分库分表与数据分区）

---

## 基础知识

- [✅] MySQL 安装与配置
      desc: 在不同操作系统上安装 MySQL、配置服务、连接工具（MySQL Workbench、CLI、DBeaver）
      difficulty: easy
      estimatedWords: 1200

- [✅] SQL 基础语法
      desc: SELECT、INSERT、UPDATE、DELETE 基本语句，注释、别名、 DISTINCT
      difficulty: easy
      estimatedWords: 1500

- [✅] 数据类型与表设计
      desc: 常用数据类型（数值、字符、日期）、表创建、约束（主键、外键、NOT NULL、UNIQUE、DEFAULT）
      difficulty: easy
      estimatedWords: 1500

- [✅] 条件过滤与聚合查询
      desc: WHERE、LIKE、IN、BETWEEN、ORDER BY、LIMIT、GROUP BY、HAVING
      difficulty: easy
      estimatedWords: 1200

## 进阶技能

- [✅] 多表查询与子查询
      desc: INNER/LEFT/RIGHT/FULL JOIN、自关联子查询、EXISTS、UNION / UNION ALL
      difficulty: medium
      estimatedWords: 2000

- [✅] 索引原理与使用
      desc: B+Tree 索引结构、主键索引 vs 普通索引、复合索引、最左前缀原则、索引失效场景
      difficulty: medium
      estimatedWords: 2000

- [✅] 事务与 ACID 特性
      desc: 事务控制语句、BEGIN/COMMIT/ROLLBACK、隔离级别（READ UNCOMMITTED 到 SERIALIZABLE）、MVCC 机制
      difficulty: medium
      estimatedWords: 2500

- [✅] 视图与存储过程
      desc: 创建视图、更新视图、存储过程语法、参数传递、流程控制语句、函数创建与调用
      difficulty: medium
      estimatedWords: 2000

## 生态与实践

- [✅] 查询优化与执行计划
      desc: EXPLAIN 分析、索引覆盖、回表、文件排序、SQL 优化技巧、分页深度分页问题
      difficulty: hard
      estimatedWords: 2500

- [✅] 数据库备份与恢复
      desc: mysqldump、mysqlpump、xtrabackup、物理备份 vs 逻辑备份、全量 / 增量备份、基于时间点恢复（PITR）
      difficulty: hard
      estimatedWords: 2000

## 高级主题

- [✅] 主从复制与高可用
      desc: 主从复制原理（binlog）、异步复制、半同步复制、GTID 复制、ProxySQL / HAProxy 读写分离
      difficulty: hard
      estimatedWords: 2500

- [✅] 分库分表与数据分区
      desc: 水平 / 垂直分片策略、ShardingSphere、MySQL Partition、分布式 ID、分片键选择
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

所有文章将输出到：`src/content/blog/mysql/`
