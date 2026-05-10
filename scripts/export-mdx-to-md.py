#!/usr/bin/env python3
"""将 src/content/blog 下的 .mdx 文件导出为 .md 到 dist-md/。

行为：
- 原 .mdx 文件保持不动
- 输出到 dist-md/<category>/<slug>.md，保留栏目目录结构
- 仅剥离 YAML frontmatter，其他内容（含代码块）原样保留

用法：
  python3 scripts/export-mdx-to-md.py                     # 全量导出
  python3 scripts/export-mdx-to-md.py --category vue      # 仅导出某个栏目
  python3 scripts/export-mdx-to-md.py --out custom-dir/   # 自定义输出目录
  python3 scripts/export-mdx-to-md.py --clean             # 导出前清空输出目录
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
BLOG_ROOT = REPO_ROOT / "src" / "content" / "blog"
PLANS_ROOT = REPO_ROOT / "src" / "content" / "_plans"
DEFAULT_OUT = REPO_ROOT / "dist-md"


def parse_frontmatter(text: str) -> dict[str, any]:
    """解析 YAML frontmatter，返回字典。无 frontmatter 则返回空字典。"""
    if not text.startswith("---\n") and not text.startswith("---\r\n"):
        return {}
    end = text.find("\n---", 4)
    if end == -1:
        return {}
    fm_text = text[4:end].strip()
    data: dict[str, any] = {}
    current_key: str | None = None
    in_list = False
    for line in fm_text.splitlines():
        stripped = line.rstrip()
        if not stripped:
            continue
        # 列表项（处理 YAML 缩进）
        if stripped.lstrip().startswith("- "):
            item = stripped.lstrip()[2:].strip()
            if current_key is not None and in_list:
                if isinstance(data.get(current_key), list):
                    data[current_key].append(item)
            continue
        # key: value
        m = re.match(r"^(\w+):\s*(.*)$", stripped)
        if m:
            key, value = m.group(1), m.group(2).strip()
            current_key = key
            if value.startswith("[") and value.endswith("]"):
                # 内联列表，简单按逗号分割
                inner = value[1:-1].strip()
                data[key] = [v.strip().strip('"').strip("'") for v in inner.split(",") if v.strip()] if inner else []
                in_list = False
            elif value == "":
                data[key] = []
                in_list = True
            else:
                data[key] = value.strip('"').strip("'")
                in_list = False
    return data


def strip_frontmatter(text: str) -> str:
    """删除文件开头的 YAML frontmatter 块。无 frontmatter 则原样返回。"""
    if not text.startswith("---\n") and not text.startswith("---\r\n"):
        return text
    # 跳过开头的 ---\n
    end = text.find("\n---", 4)
    if end == -1:
        return text
    after = end + 4
    # 跳过 --- 后面的换行
    while after < len(text) and text[after] in ("\n", "\r"):
        after += 1
    return text[after:]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("--category", help="仅导出指定栏目（如 vue、react）")
    parser.add_argument(
        "--out",
        default=str(DEFAULT_OUT),
        help=f"输出目录（默认 {DEFAULT_OUT.relative_to(REPO_ROOT)}/）",
    )
    parser.add_argument("--clean", action="store_true", help="导出前清空输出目录")
    return parser.parse_args()


def read_plan_order(category: str) -> dict[str, int] | None:
    """读取 _plans/{category}.md 的 frontmatter，返回 planId -> order 的映射。"""
    plan_path = PLANS_ROOT / f"{category}.md"
    if not plan_path.is_file():
        return None
    text = plan_path.read_text(encoding="utf-8")
    fm = parse_frontmatter(text)
    order_list = fm.get("planOrder", [])
    if not order_list:
        return None
    return {plan_id.strip(): idx + 1 for idx, plan_id in enumerate(order_list)}


def iter_sources(category: str | None) -> list[tuple[Path, int]]:
    """返回 (文件路径, 排序序号) 列表。没有 planOrder 的文件序号设为 999。"""
    if category:
        cat_dir = BLOG_ROOT / category
        if not cat_dir.is_dir():
            sys.exit(f"❌ 栏目不存在：{cat_dir}")
        files = list(cat_dir.glob("*.mdx"))
    else:
        files = list(BLOG_ROOT.glob("*/*.mdx"))

    # 收集所有分类的 planOrder
    plan_orders: dict[str, dict[str, int]] = {}
    if category:
        po = read_plan_order(category)
        if po:
            plan_orders[category] = po
    else:
        for src in files:
            cat = src.parent.name
            if cat not in plan_orders:
                po = read_plan_order(cat)
                if po:
                    plan_orders[cat] = po

    result: list[tuple[Path, int]] = []
    for src in files:
        cat = src.parent.name
        order_map = plan_orders.get(cat)
        if order_map:
            text = src.read_text(encoding="utf-8")
            fm = parse_frontmatter(text)
            plan_id = fm.get("planId", "")
            order = order_map.get(plan_id, 999)
        else:
            order = 999
        result.append((src, order))

    # 按 (分类, 序号, 文件名) 排序
    result.sort(key=lambda x: (x[0].parent.name, x[1], x[0].stem))
    return result


def main() -> None:
    args = parse_args()
    out_root = Path(args.out)
    if not out_root.is_absolute():
        out_root = REPO_ROOT / out_root

    sources = iter_sources(args.category)
    if not sources:
        print("未找到 .mdx 文件")
        return

    if args.clean and out_root.exists():
        print(f"清空输出目录：{out_root.relative_to(REPO_ROOT)}/")
        shutil.rmtree(out_root)

    out_root.mkdir(parents=True, exist_ok=True)

    # 先统计每个分类的总篇数，计算序号补零宽度
    cat_total: dict[str, int] = {}
    for src, _ in sources:
        cat = src.parent.name
        cat_total[cat] = cat_total.get(cat, 0) + 1
    cat_width: dict[str, int] = {cat: len(str(total)) for cat, total in cat_total.items()}

    counts: dict[str, int] = {}
    for src, order in sources:
        category = src.parent.name
        target_dir = out_root / category
        target_dir.mkdir(parents=True, exist_ok=True)

        # 有序号的文件前缀加上序号（补零对齐），如 01.vue-instance-template.md
        if order != 999:
            width = cat_width.get(category, 1)
            target_name = f"{order:0{width}d}.{src.stem}.md"
        else:
            target_name = f"{src.stem}.md"
        target = target_dir / target_name

        text = src.read_text(encoding="utf-8")
        body = strip_frontmatter(text)
        target.write_text(body, encoding="utf-8")
        counts[category] = counts.get(category, 0) + 1

    total = sum(counts.values())
    print(f"已导出 {total} 篇到 {out_root.relative_to(REPO_ROOT)}/")
    for cat in sorted(counts):
        print(f"  {cat:<15} {counts[cat]:>3} 篇")


if __name__ == "__main__":
    main()
