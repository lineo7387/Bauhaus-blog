---
title: TypeScript 完整学习路线
description: 从类型基础到高级类型系统的系统化学习路径，覆盖类型推断、泛型、条件类型、装饰器及工程实践
skill: typescript
version: "5.x"
status: completed
total: 14
createdAt: 2026-04-13
updatedAt: 2026-04-13
planOrder:
  - typescript-basics
  - interfaces-type-aliases
  - functions-generics
  - union-intersection-types
  - enums-const-assertions
  - advanced-generics
  - conditional-types
  - mapped-types-builtin-utilities
  - type-guards-narrowing
  - decorators
  - tsconfig-compiler-options
  - ts-react-integration
  - ts-nodejs-backend
  - ts-vue3-integration
---

## 更新记录

- 2026-04-13：创建路线图

---

## 基础知识

- [✅] TypeScript 基础类型与类型推断
      desc: 原始类型、数组、元组、unknown、never、类型推断机制与类型注解
      difficulty: easy
      estimatedWords: 1200

- [✅] 接口与类型别名
      desc: 接口的声明合并、可选属性、只读属性、函数签名的类型别名 vs 接口
      difficulty: easy
      estimatedWords: 1200

- [✅] 函数类型与泛型基础
      desc: 函数类型签名、rest 参数、泛型函数、泛型约束、泛型默认值
      difficulty: medium
      estimatedWords: 1800

- [✅] 联合类型与交叉类型
      desc: 联合类型的分发行为、交叉类型的合并规则、与类型 guards 的配合
      difficulty: medium
      estimatedWords: 1200

- [✅] 枚举与 const 断言
      desc: 数字枚举、字符串枚举、枚举反向映射、const 断言在对象和数组中的应用
      difficulty: easy
      estimatedWords: 1000

## 进阶技能

- [✅] 泛型进阶：多泛型参数与 infer
      desc: 多泛型约束、模板字面量类型、infer 关键字在条件类型中提取类型
      difficulty: hard
      estimatedWords: 2000

- [✅] 条件类型与分发机制
      desc: 条件类型基础、分发条件类型、never 在条件类型中的行为、递归条件类型
      difficulty: hard
      estimatedWords: 2000

- [✅] 映射类型与内置工具类型
      desc: Partial、Required、Readonly、Pick、Omit、Record、Exclude、Extract 的实现原理
      difficulty: medium
      estimatedWords: 1800

- [✅] 类型守卫与类型收窄
      desc: typeof、instanceof、in 操作符、自定义类型谓词、断言函数、标签化类型
      difficulty: medium
      estimatedWords: 1600

## 生态与实践

- [✅] 装饰器与 TypeScript 配置
      desc: 装饰器提案历史、类装饰器、方法装饰器、参数装饰器、tsconfig.json 核心选项解析
      difficulty: medium
      estimatedWords: 2000

- [✅] tsconfig.json 编译器选项详解
      desc: strict 模式详解、路径别名、declaration、sourceMap、project references
      difficulty: easy
      estimatedWords: 1500

- [✅] TypeScript + React 集成
      desc: React.FC vs 函数组件类型、children 类型、事件处理泛型、泛型组件、forwardRef
      difficulty: medium
      estimatedWords: 2000

- [✅] TypeScript + Vue 3 集成
      desc: Vue 3 组件类型化、defineProps 与 withDefaults、defineEmits 泛型、Pinia store 类型、模板 ref 类型推断
      difficulty: medium
      estimatedWords: 2000

## 高级主题

- [✅] TypeScript + Node.js 后端实践
      desc: Node.js 类型定义、Express/Koa 类型扩展、环境变量类型化、drizzle-orm 类型安全
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

所有文章将输出到：`src/content/blog/typescript/`
