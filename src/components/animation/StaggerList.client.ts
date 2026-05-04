import { animate, stagger } from 'motion';
import { prefersReducedMotion, inViewport } from '../../utils/motion';

export function initStaggerList(container: HTMLElement): () => void {
  const delay = parseFloat(container.dataset.delay || '60');
  const children = Array.from(container.children) as HTMLElement[];

  if (prefersReducedMotion()) {
    children.forEach((child) => {
      child.style.opacity = '1';
      child.style.transform = 'none';
    });
    return () => {};
  }

  // 初始隐藏状态（inline style，避免 SSR 闪烁）
  children.forEach((child) => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(20px)';
  });

  const cleanup = inViewport(container, () => {
    animate(
      children,
      { opacity: 1, y: 0 },
      {
        delay: stagger(delay / 1000),
        type: 'spring',
        stiffness: 500,
        damping: 40,
      }
    );
  });

  return cleanup;
}

/** 自动初始化页面上所有 [data-stagger-list] 元素。 */
export function initAllStaggerLists(): void {
  document.querySelectorAll<HTMLElement>('[data-stagger-list]').forEach((el) => {
    initStaggerList(el);
  });
}
