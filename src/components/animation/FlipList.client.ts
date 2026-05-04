import { animate } from 'motion';
import { prefersReducedMotion } from '../../utils/motion';

interface FlipState {
  rect: DOMRect;
  opacity: string;
  transform: string;
}

/**
 * FLIP 动画基础设施。
 *
 * 用法：
 *   const flip = setupFlip(container, '.card');
 *   flip.record();          // 1. First
 *   // ... 修改 DOM（筛选、排序等）...
 *   flip.animate();         // 3. Invert + Play
 */
export function setupFlip(container: HTMLElement, itemSelector: string) {
  const positions = new Map<string, FlipState>();

  function getId(el: HTMLElement): string | null {
    return el.dataset.flipId || el.id || null;
  }

  /** 记录当前所有元素的位置与样式（First）。 */
  function record(): void {
    positions.clear();
    container.querySelectorAll<HTMLElement>(itemSelector).forEach((el) => {
      const id = getId(el);
      if (id) {
        positions.set(id, {
          rect: el.getBoundingClientRect(),
          opacity: el.style.opacity,
          transform: el.style.transform,
        });
      }
    });
  }

  /** 在 DOM 变化后计算 Invert 并播放动画（Play）。 */
  function animateChanges(): void {
    if (prefersReducedMotion()) {
      // 直接显示终态，不做动画
      container.querySelectorAll<HTMLElement>(itemSelector).forEach((el) => {
        el.style.opacity = '';
        el.style.transform = '';
      });
      return;
    }

    const currentItems = new Map<string, HTMLElement>();
    container.querySelectorAll<HTMLElement>(itemSelector).forEach((el) => {
      const id = getId(el);
      if (id) currentItems.set(id, el);
    });

    // ── 保留的元素：位置差动画 ──
    currentItems.forEach((el, id) => {
      const first = positions.get(id);
      if (first) {
        const last = el.getBoundingClientRect();
        const dx = first.rect.left - last.left;
        const dy = first.rect.top - last.top;

        if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
          // Invert：瞬间移回旧位置
          el.style.transition = 'none';
          el.style.transform = `translate(${dx}px, ${dy}px)`;

          // 强制 reflow
          void el.offsetHeight;

          // Play：弹性移动到 0
          animate(
            el,
            { x: 0, y: 0 },
            {
              duration: 0.3,
              type: 'spring',
              stiffness: 500,
              damping: 40,
            }
          );
        }
      } else {
        // ── 新增元素：fade in + translateY 入场 ──
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        void el.offsetHeight;

        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.3 }
        );
      }
    });

    // ── 消失的元素：创建 ghost 做 fade out ──
    positions.forEach((first, id) => {
      if (!currentItems.has(id)) {
        const ghost = document.createElement('div');
        ghost.style.position = 'fixed';
        ghost.style.left = `${first.rect.left}px`;
        ghost.style.top = `${first.rect.top}px`;
        ghost.style.width = `${first.rect.width}px`;
        ghost.style.height = `${first.rect.height}px`;
        ghost.style.pointerEvents = 'none';
        ghost.style.zIndex = '9999';
        ghost.style.opacity = '1';

        document.body.appendChild(ghost);

        animate(
          ghost,
          { opacity: 0 },
          {
            duration: 0.2,
            onComplete: () => ghost.remove(),
          }
        );
      }
    });
  }

  return { record, animate: animateChanges };
}
