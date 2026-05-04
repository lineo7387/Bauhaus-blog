/**
 * Motion 共享工具层 — 给 CountUp / StaggerList / FlipList 三个 island 复用。
 */

/** 检测用户是否偏好减少动画。 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** IntersectionObserver 包装 — 元素进入视口时触发一次回调。 */
export function inViewport(
  el: Element,
  callback: () => void,
  options?: IntersectionObserverInit
): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          callback();
        }
      });
    },
    { threshold: 0.1, ...options }
  );
  observer.observe(el);
  return () => observer.disconnect();
}

/** Bauhaus 弹性曲线常量（对应 cytoscape spring(500, 40)）。 */
export const BAUHAUS_SPRING = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 40,
};
