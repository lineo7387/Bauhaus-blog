/**
 * Returns the base path for the site.
 * Used to prefix all internal links when deploying to a subdirectory (e.g., GitHub Pages).
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
