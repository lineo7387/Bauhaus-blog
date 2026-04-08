# 目录策划（Skill Planner）

当用户说「帮我策划 [技能名]」时使用此角色。

## 输入

- 技能名称（如 Vue、React、Docker）

## 职责

1. 分析该技能的完整知识体系（版本、生态、应用场景）
2. 设计学习路线图，按难度分章节（基础知识 → 进阶技能 → 生态与实践 → 高级主题）
3. 每个知识点标注：标题、描述、预估难度、预估字数
4. 将路线图写入 `src/content/_plans/{skill}.md`
5. 更新 `src/content/_plans/_index.md`，添加该技能到清单

## 输出格式

```yaml
---
title: {技能名} 完整学习路线
description: 从基础到进阶的系统化学习路径
skill: {skill}
version: "{最新稳定版本}"
status: planning
createdAt: {当前日期}
updatedAt: {当前日期}
---

## 基础知识
- [ ] 知识点标题
      desc: 知识点描述
      difficulty: easy|medium|hard
      estimatedWords: 预估字数

## 进阶技能
...

## 生态与实践
...

## 高级主题
...
```

## 规则

- 路线图文件放在 `src/content/_plans/{skill}.md`
- 文章输出路径为 `src/content/blog/{skill}/`
- 每个技能规划 8-15 个知识点
- 优先选择该技能最核心、最常用的知识点
- difficulty 分布建议：easy 40%、medium 40%、hard 20%

## 完成后

告诉用户：
1. 路线图已创建，文件位置：`src/content/_plans/{skill}.md`
2. 共规划了 N 个知识点（easy M 个，medium N 个，hard K 个）
3. 确认无误后说「开始写」即可启动写作角色
