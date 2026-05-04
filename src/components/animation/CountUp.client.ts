import { animate } from 'motion';
import { prefersReducedMotion, inViewport } from '../../utils/motion';

export function initCountUp(el: HTMLElement): () => void {
  const target = parseInt(el.dataset.target || '0', 10);
  const suffix = el.dataset.suffix || '';
  const duration = parseFloat(el.dataset.duration || '2');

  if (prefersReducedMotion()) {
    return () => {};
  }

  const cleanup = inViewport(el, () => {
    // 进入视口后先重置为 0，再动画到目标值
    el.textContent = '0' + suffix;
    animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest: number) => {
        el.textContent = Math.round(latest) + suffix;
      },
    });
  });

  return cleanup;
}

/** 自动初始化页面上所有 [data-count-up] 元素。 */
export function initAllCountUps(): void {
  document.querySelectorAll<HTMLElement>('[data-count-up]').forEach((el) => {
    initCountUp(el);
  });
}
