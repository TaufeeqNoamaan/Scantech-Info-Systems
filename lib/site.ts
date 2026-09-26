/**
 * Public origin for the site.
 *
 * Single source of truth for canonical URLs, the sitemap, robots.txt and OG
 * image URLs. Set `NEXT_PUBLIC_SITE_URL` in the environment; the localhost
 * fallback keeps development and preview builds working without it.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
