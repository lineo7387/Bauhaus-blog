import ForceGraph2D from 'react-force-graph-2d';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface NodeData {
  id: string;
  name: string;
  val: number;
  color: string;
  textColor: string;
  skillId: string;
  articleCount: number;
  progress: number;
  group: string;
  shape: string;
  fx?: number;
  fy?: number;
}

interface LinkData {
  source: string;
  target: string;
  dashed?: boolean;
}

interface Props {
  graphData: { nodes: NodeData[]; links: LinkData[] };
  base: string;
}

const BASE_W = 110;
const BASE_H = 64;
const RADIUS = 10;
const BORDER_W = 2;

function getNodeSize(val: number) {
  return 0.5 + val / 20;
}

function getNodeWH(val: number) {
  const s = getNodeSize(val);
  return { w: BASE_W * s, h: BASE_H * s };
}

export default function SkillForceGraph({ graphData, base }: Props) {
  const fgRef = useRef<any>(null);
  const [hoverNode, setHoverNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 800, height: 700 });

  // Zoom to fit once on mount
  useEffect(() => {
    const t = setTimeout(() => {
      fgRef.current?.zoomToFit(400, 60);
    }, 100);
    return () => clearTimeout(t);
  }, []);

  // Measure container
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      setDims({ width: rect.width, height: rect.height });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const relatedIds = useMemo(() => {
    if (!hoverNode) return new Set<string>();
    const s = new Set<string>([hoverNode]);
    graphData.links.forEach((l) => {
      const src = typeof l.source === 'string' ? l.source : (l.source as any).id;
      const tgt = typeof l.target === 'string' ? l.target : (l.target as any).id;
      if (src === hoverNode) s.add(tgt);
      if (tgt === hoverNode) s.add(src);
    });
    return s;
  }, [hoverNode, graphData.links]);

  const drawNode = useCallback(
    (node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
      const { w, h } = getNodeWH(node.val);
      const isDimmed = hoverNode !== null && !relatedIds.has(node.id);
      const isHover = node.id === hoverNode;

      ctx.save();

      if (isDimmed) {
        ctx.globalAlpha = 0.25;
      } else if (isHover) {
        ctx.shadowColor = node.color + '99';
        ctx.shadowBlur = 24;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
      } else {
        ctx.shadowColor = 'rgba(0,0,0,0.08)';
        ctx.shadowBlur = 12;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 3;
      }

      // Main body with rounded corners
      ctx.fillStyle = node.color;
      roundRect(ctx, node.x - w / 2, node.y - h / 2, w, h, RADIUS);
      ctx.fill();

      // Reset shadow for border and text
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Subtle border
      ctx.strokeStyle = isHover ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.12)';
      ctx.lineWidth = BORDER_W;
      roundRect(ctx, node.x - w / 2, node.y - h / 2, w, h, RADIUS);
      ctx.stroke();

      // Label
      const fontSize = Math.max(9, 11 / globalScale);
      ctx.fillStyle = node.textColor;
      ctx.font = `bold ${fontSize}px Outfit, system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.name, node.x, node.y - fontSize * 0.35);

      ctx.font = `${fontSize * 0.82}px Outfit, system-ui, sans-serif`;
      ctx.globalAlpha = isDimmed ? 0.25 : 0.85;
      ctx.fillText(`${node.articleCount} 篇`, node.x, node.y + fontSize * 0.75);

      ctx.restore();
    },
    [hoverNode, relatedIds]
  );

  const drawLink = useCallback(
    (link: any, ctx: CanvasRenderingContext2D) => {
      const src = link.source as any;
      const tgt = link.target as any;
      const isRelated =
        hoverNode && (src.id === hoverNode || tgt.id === hoverNode);

      ctx.save();

      if (hoverNode && !isRelated) {
        ctx.globalAlpha = 0.1;
      }

      // Line
      ctx.beginPath();
      ctx.moveTo(src.x, src.y);
      ctx.lineTo(tgt.x, tgt.y);
      ctx.strokeStyle = isRelated ? '#555' : 'rgba(0,0,0,0.18)';
      ctx.lineWidth = isRelated ? 2 : 1.2;
      if (link.dashed) {
        ctx.setLineDash([5, 4]);
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Arrow at target edge
      if (!link.dashed) {
        const angle = Math.atan2(tgt.y - src.y, tgt.x - src.x);
        const { w, h } = getNodeWH(tgt.val);
        const margin = Math.min(w, h) * 0.52;
        const ax = tgt.x - margin * Math.cos(angle);
        const ay = tgt.y - margin * Math.sin(angle);

        const al = 7;
        const aa = Math.PI / 7;

        ctx.beginPath();
        ctx.strokeStyle = isRelated ? '#555' : 'rgba(0,0,0,0.2)';
        ctx.lineWidth = isRelated ? 2 : 1.2;
        ctx.moveTo(ax, ay);
        ctx.lineTo(
          ax - al * Math.cos(angle - aa),
          ay - al * Math.sin(angle - aa)
        );
        ctx.moveTo(ax, ay);
        ctx.lineTo(
          ax - al * Math.cos(angle + aa),
          ay - al * Math.sin(angle + aa)
        );
        ctx.stroke();
      }

      ctx.restore();
    },
    [hoverNode]
  );

  const nodeAreaPaint = useCallback(
    (node: any, color: string, ctx: CanvasRenderingContext2D) => {
      const { w, h } = getNodeWH(node.val);
      ctx.fillStyle = color;
      ctx.fillRect(node.x - w / 2, node.y - h / 2, w, h);
    },
    []
  );

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        width={dims.width}
        height={dims.height}
        backgroundColor="transparent"
        nodeCanvasObject={drawNode}
        linkCanvasObject={drawLink}
        nodePointerAreaPaint={nodeAreaPaint}
        onNodeHover={(node: any) => setHoverNode(node?.id ?? null)}
        onNodeClick={(node: any) => {
          if (node?.skillId) {
            window.location.href = `${base}/skills/${node.skillId}`;
          }
        }}
        // Physics disabled — nodes are fixed at topology positions
        warmupTicks={0}
        cooldownTicks={0}
        enableZoomInteraction={false}
        enablePanInteraction={false}
        // Disable default link arrows (we draw our own)
        linkDirectionalArrowLength={0}
      />
    </div>
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}
