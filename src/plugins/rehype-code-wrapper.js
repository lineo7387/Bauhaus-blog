import { visit } from 'unist-util-visit';

/**
 * Wraps `<pre data-language="...">` elements with a `<div class="code-block-wrapper">`
 * containing a `<div class="code-block-header">` and the `<pre>` element.
 * This allows the header to span the full scrollable width on mobile.
 */
export function rehypeCodeWrapper() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre') return;
      if (!node.properties?.dataLanguage) return;
      if (index == null || !parent) return;

      const language = node.properties.dataLanguage;

      const header = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block-header'] },
        children: [
          { type: 'text', value: language },
        ],
      };

      const wrapper = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['code-block-wrapper'] },
        children: [header, node],
      };

      parent.children.splice(index, 1, wrapper);
    });
  };
}
