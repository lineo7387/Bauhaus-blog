import { visit } from 'unist-util-visit';

/**
 * Rehype plugin that transforms raw directive elements (<tip>, <warning>, etc.)
 * created by remark-directive-rehype into styled callout components.
 */
export function rehypeCallouts() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      const tag = node.tagName;
      if (!['tip', 'warning', 'note', 'danger'].includes(tag)) return;

      const configs = {
        tip:    { label: 'TIP',    borderColor: '#3DAA41', headerBg: 'rgba(61,170,65,0.1)',  iconColor: '#3DAA41' },
        warning:{ label: 'WARNING',borderColor: '#E65C00',  headerBg: 'rgba(230,92,0,0.1)',   iconColor: '#E65C00'  },
        note:   { label: 'NOTE',   borderColor: '#1040C0',  headerBg: 'rgba(16,64,192,0.1)',  iconColor: '#1040C0'  },
        danger: { label: 'DANGER', borderColor: '#D02020',  headerBg: 'rgba(208,32,32,0.1)', iconColor: '#D02020'  },
      };

      const cfg = configs[tag] || configs.tip;

      // --- Build icon SVG based on type ---
      const svgChildren = (() => {
        switch (tag) {
          case 'tip':
            return [
              { type: 'element', tagName: 'circle', properties: { cx: '12', cy: '12', r: '10' }, children: [] },
              { type: 'element', tagName: 'line',   properties: { x1: '12', y1: '16', x2: '12', y2: '12' }, children: [] },
              { type: 'element', tagName: 'line',   properties: { x1: '12', y1: '8', x2: '12.01', y2: '8' }, children: [] },
            ];
          case 'warning':
            return [
              { type: 'element', tagName: 'path',   properties: { d: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z' }, children: [] },
              { type: 'element', tagName: 'line',   properties: { x1: '12', y1: '9', x2: '12', y2: '13' }, children: [] },
              { type: 'element', tagName: 'line',   properties: { x1: '12', y1: '17', x2: '12.01', y2: '17' }, children: [] },
            ];
          case 'note':
            return [
              { type: 'element', tagName: 'path',      properties: { d: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z' }, children: [] },
              { type: 'element', tagName: 'polyline',   properties: { points: '14 2 14 8 20 8' }, children: [] },
            ];
          case 'danger':
            return [
              { type: 'element', tagName: 'polygon', properties: { points: '7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2' }, children: [] },
              { type: 'element', tagName: 'line',   properties: { x1: '12', y1: '8', x2: '12', y2: '12' }, children: [] },
              { type: 'element', tagName: 'line',   properties: { x1: '12', y1: '16', x2: '12.01', y2: '16' }, children: [] },
            ];
          default:
            return [];
        }
      })();

      // Build the icon SVG element
      const iconSvg = {
        type: 'element',
        tagName: 'svg',
        properties: {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '16', height: '16',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: cfg.iconColor,
          'stroke-width': '2.5',
          'stroke-linecap': 'square',
          'aria-hidden': 'true',
        },
        children: svgChildren,
      };

      // Header: [icon] [label]
      const headerDiv = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['callout-header'], style: `background-color:${cfg.headerBg}` },
        children: [
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['callout-icon'], style: `color:${cfg.iconColor}`, display: 'flex', 'align-items': 'center' },
            children: [iconSvg],
          },
          {
            type: 'element',
            tagName: 'span',
            properties: { className: ['callout-label'], style: `color:${cfg.iconColor}` },
            children: [{ type: 'text', value: cfg.label }],
          },
        ],
      };

      // Content: wrap original children
      const contentDiv = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['callout-content'] },
        children: node.children || [],
      };

      // Final aside element
      const asideNode = {
        type: 'element',
        tagName: 'aside',
        properties: {
          className: ['callout', `callout-${tag}`],
          style: [
            `border-left: 6px solid ${cfg.borderColor}`,
            'background-color: white',
            'border: 2px solid #121212',
            'box-shadow: 4px 4px 0px 0px #121212',
            'margin: 1.5rem 0',
            'overflow: hidden',
          ].join('; '),
        },
        children: [headerDiv, contentDiv],
      };

      if (parent && typeof index === 'number') {
        parent.children.splice(index, 1, asideNode);
      }
    });
  };
}
