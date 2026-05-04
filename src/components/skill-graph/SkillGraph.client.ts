import type { SkillNode, SkillEdge } from './topology';

interface EnrichedNode extends SkillNode {
  articleCount: number;
  progress: number;
  hexColor: string;
  textColor: string;
  label: string;
}

export async function initSkillGraph(container: HTMLElement) {
  // Lazy-load cytoscape only when graph becomes visible
  const [{ default: cytoscape }] = await Promise.all([
    import('cytoscape'),
    document.fonts.ready,
  ]);

  const nodes: EnrichedNode[] = JSON.parse(container.dataset.nodes || '[]');
  const edges: SkillEdge[] = JSON.parse(container.dataset.edges || '[]');
  const base = container.dataset.base || '';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const wrapper = container.closest('.skill-graph-container') as HTMLElement;
  const tooltip = wrapper.querySelector('#skill-graph-tooltip') as HTMLElement;
  const tooltipText = wrapper.querySelector('#skill-graph-tooltip-text') as HTMLElement;

  const rect = container.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const cy = cytoscape({
    container,
    elements: [
      ...nodes.map((n) => ({
        data: {
          id: n.id,
          ...n,
        },
        position: prefersReduced
          ? { x: n.x, y: n.y }
          : { x: centerX, y: centerY },
      })),
      ...edges.map((e, i) => ({
        data: {
          source: e.source,
          target: e.target,
          id: `${e.source}-${e.target}-${i}`,
          dashed: e.style === 'dashed',
        },
      })),
    ],
    style: [
      {
        selector: 'node',
        style: {
          'background-color': 'data(hexColor)',
          'border-width': 4,
          'border-color': '#121212',
          'shape': 'data(shape)',
          'width': 140,
          'height': 80,
          'label': 'data(label)',
          'color': 'data(textColor)',
          'font-family': 'Outfit, system-ui, sans-serif',
          'font-weight': 900,
          'font-size': '12px',
          'text-valign': 'center',
          'text-halign': 'center',
          'text-wrap': 'wrap',
          'text-max-width': '120px',
          'shadow-blur': 0,
          'shadow-color': '#121212',
          'shadow-opacity': 1,
          'shadow-offset-x': 4,
          'shadow-offset-y': 4,
        },
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#121212',
          'target-arrow-shape': 'triangle',
          'target-arrow-color': '#121212',
          'curve-style': 'bezier',
          'arrow-scale': 1.2,
        },
      },
      {
        selector: 'edge[dashed]',
        style: {
          'line-style': 'dashed',
          'line-dash-pattern': [6, 3],
        },
      },
    ],
    layout: { name: 'preset' },
    minZoom: 0.3,
    maxZoom: 2,
    wheelSensitivity: 0.3,
    userZoomingEnabled: false,
    userPanningEnabled: false,
  });

  // ── Hover: highlight transitive closure ──
  cy.on('mouseover', 'node', (evt) => {
    const node = evt.target;
    const connected = node
      .predecessors()
      .union(node.successors())
      .union(node);
    cy.elements().not(connected).style('opacity', 0.2);

    // Tooltip
    const pos = node.renderedPosition();
    const progress = node.data('progress');
    tooltipText.textContent = `${progress}%`;
    tooltip.style.left = `${pos.x}px`;
    tooltip.style.top = `${pos.y + 50}px`;
    tooltip.classList.remove('hidden');
  });

  cy.on('mouseout', 'node', () => {
    cy.elements().style('opacity', 1);
    tooltip.classList.add('hidden');
  });

  // ── Tap: navigate to skill page ──
  cy.on('tap', 'node', (evt) => {
    const skillId = evt.target.data('skillId');
    if (skillId) {
      window.location.href = `${base}/skills/${skillId}`;
    }
  });

  // ── Entrance animation ──
  if (!prefersReduced) {
    cy.edges().style('opacity', 0);

    const nodeCount = cy.nodes().length;
    let completedCount = 0;

    cy.nodes().forEach((node, i) => {
      const targetX = node.data('x');
      const targetY = node.data('y');

      setTimeout(() => {
        node.animate(
          {
            position: { x: targetX, y: targetY },
          },
          {
            duration: 800,
            easing: 'spring(500, 40)',
            queue: false,
            complete: () => {
              completedCount++;
              if (completedCount === nodeCount) {
                cy.edges().animate(
                  { style: { opacity: 1 } },
                  { duration: 200 }
                );
              }
            },
          }
        );
      }, i * 60);
    });
  } else {
    cy.edges().style('opacity', 1);
  }

  // ── Resize ──
  const handleResize = () => {
    cy.resize();
  };
  window.addEventListener('resize', handleResize);

  // ── Cleanup ──
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', handleResize);
    cy.destroy();
  });
}
