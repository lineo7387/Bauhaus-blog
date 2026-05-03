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
import shutil
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
BLOG_ROOT = REPO_ROOT / "src" / "content" / "blog"
DEFAULT_OUT = REPO_ROOT / "dist-md"


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


def iter_sources(category: str | None) -> list[Path]:
    if category:
        cat_dir = BLOG_ROOT / category
        if not cat_dir.is_dir():
            sys.exit(f"❌ 栏目不存在：{cat_dir}")
        return sorted(cat_dir.glob("*.mdx"))
    return sorted(BLOG_ROOT.glob("*/*.mdx"))


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

    counts: dict[str, int] = {}
    for src in sources:
        category = src.parent.name
        target_dir = out_root / category
        target_dir.mkdir(parents=True, exist_ok=True)
        target = target_dir / (src.stem + ".md")

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
