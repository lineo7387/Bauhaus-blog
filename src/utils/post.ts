import { getCollection } from 'astro:content';

/**
 * Get the display name for a skill/category.
 */
export const SKILL_DISPLAY_NAMES: Record<string, string> = {
  vue: 'Vue',
  react: 'React',
  python: 'Python',
  java: 'Java',
  springboot: 'Spring Boot',
  electron: 'Electron',
  astro: 'Astro',
  'react-native': 'React Native',
};

export function getSkillDisplayName(category: string): string {
  return SKILL_DISPLAY_NAMES[category.toLowerCase()] || category;
}

/**
 * Get the 1-based index of a post within its category.
 * Uses planOrder from the skill plan file if available, otherwise falls back to allPosts order.
 */
export async function getCategoryIndex(
  postId: string,
  planId: string | undefined,
  category: string,
  allPosts?: any[],
): Promise<number> {
  const planEntries = await getCollection('plans');
  const plan = planEntries.find((p) => p.data.skill === category);
  if (plan?.data.planOrder && planId) {
    const idx = plan.data.planOrder.indexOf(planId);
    if (idx !== -1) return idx + 1;
  }
  if (allPosts) {
    return (
      allPosts.filter((p) => p.data.category === category).findIndex((p) => p.id === postId) + 1
    );
  }
  return 1;
}
