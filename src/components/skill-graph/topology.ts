/**
 * Skill Graph topology — 节点、边、分组定义。
 * 桌面端 cytoscape 与移动端 fallback 共用此数据源。
 */

export type Shape = 'round-rectangle' | 'rectangle' | 'hexagon';

export interface SkillNode {
  id: string;
  displayName: string;
  group: SkillGroupId;
  shape: Shape;
  x: number;
  y: number;
  skillId: string;
}

export interface SkillEdge {
  source: string;
  target: string;
  label?: string;
  style?: 'solid' | 'dashed';
}

export type SkillGroupId = 'apps' | 'backend' | 'languages' | 'data';

export interface SkillGroup {
  id: SkillGroupId;
  title: string;
  yRange: [number, number];
}

export const GROUPS: SkillGroup[] = [
  { id: 'apps',     title: 'Apps & Frameworks', yRange: [0, 170]   },
  { id: 'backend',  title: 'Backend Services',  yRange: [220, 340] },
  { id: 'languages', title: 'Languages',        yRange: [400, 520] },
  { id: 'data',     title: 'Data',              yRange: [580, 660] },
];

export const NODES: SkillNode[] = [
  // ── Apps (round-rectangle) ──
  { id: 'vue',          displayName: 'Vue',          group: 'apps', shape: 'round-rectangle', x: 100, y: 55,  skillId: 'vue' },
  { id: 'react',        displayName: 'React',        group: 'apps', shape: 'round-rectangle', x: 300, y: 55,  skillId: 'react' },
  { id: 'astro',        displayName: 'Astro',        group: 'apps', shape: 'round-rectangle', x: 500, y: 55,  skillId: 'astro' },
  { id: 'htmx',         displayName: 'htmx',         group: 'apps', shape: 'round-rectangle', x: 700, y: 55,  skillId: 'htmx' },
  { id: 'electron',     displayName: 'Electron',     group: 'apps', shape: 'round-rectangle', x: 200, y: 155, skillId: 'electron' },
  { id: 'react-native', displayName: 'React Native', group: 'apps', shape: 'round-rectangle', x: 600, y: 155, skillId: 'react-native' },

  // ── Backend (rectangle) ──
  { id: 'express',   displayName: 'Express',    group: 'backend', shape: 'rectangle', x: 250, y: 280, skillId: 'express' },
  { id: 'fastapi',   displayName: 'FastAPI',    group: 'backend', shape: 'rectangle', x: 450, y: 280, skillId: 'fastapi' },
  { id: 'springboot', displayName: 'Spring Boot', group: 'backend', shape: 'rectangle', x: 650, y: 280, skillId: 'springboot' },

  // ── Languages (rectangle) ──
  { id: 'typescript', displayName: 'TypeScript', group: 'languages', shape: 'rectangle', x: 100, y: 460, skillId: 'typescript' },
  { id: 'javascript', displayName: 'JavaScript', group: 'languages', shape: 'rectangle', x: 300, y: 460, skillId: 'javascript' },
  { id: 'nodejs',     displayName: 'Node.js',    group: 'languages', shape: 'rectangle', x: 500, y: 460, skillId: 'nodejs' },
  { id: 'python',     displayName: 'Python',     group: 'languages', shape: 'rectangle', x: 700, y: 460, skillId: 'python' },
  { id: 'java',       displayName: 'Java',       group: 'languages', shape: 'rectangle', x: 900, y: 460, skillId: 'java' },

  // ── Data (hexagon) ──
  { id: 'mysql', displayName: 'MySQL', group: 'data', shape: 'hexagon', x: 450, y: 620, skillId: 'mysql' },
];

export const EDGES: SkillEdge[] = [
  // Built on — solid
  { source: 'vue',          target: 'javascript', style: 'solid' },
  { source: 'react',        target: 'javascript', style: 'solid' },
  { source: 'astro',        target: 'javascript', style: 'solid' },
  { source: 'htmx',         target: 'javascript', style: 'solid' },
  { source: 'electron',     target: 'nodejs',     style: 'solid' },
  { source: 'nodejs',       target: 'javascript', style: 'solid' },
  { source: 'react-native', target: 'react',      style: 'solid' },
  { source: 'express',      target: 'nodejs',     style: 'solid' },
  { source: 'fastapi',      target: 'python',     style: 'solid' },
  { source: 'springboot',   target: 'java',       style: 'solid' },

  // Superset — dashed
  { source: 'typescript', target: 'javascript', style: 'dashed' },
];

/** 验证拓扑合法性：每个 source / target 都在 NODES 中，无悬空节点。 */
export function validateTopology(): void {
  const nodeIds = new Set(NODES.map((n) => n.id));

  for (const edge of EDGES) {
    if (!nodeIds.has(edge.source)) {
      throw new Error(`Edge source "${edge.source}" is not a known node`);
    }
    if (!nodeIds.has(edge.target)) {
      throw new Error(`Edge target "${edge.target}" is not a known node`);
    }
  }

  // 反向检查：每个节点至少出现在一条边中（或允许孤立节点如 MySQL）
  // 这里我们只检查有边的节点都是合法的，孤立节点（如 data 层 MySQL）是允许的。
}
