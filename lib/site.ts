/**
 * Public origin for the site.
 *
 * Single source of truth for canonical URLs, the sitemap, robots.txt and OG
 * image URLs. Set `NEXT_PUBLIC_SITE_URL` in the environment; the localhost
 * fallback keeps development and preview builds working without it.
 *
 * Treating a *blank* value as "not set" is load-bearing, not defensive noise.
 * The production image declares the variable as a build argument and exports it
 * unconditionally:
 *
 *     ARG NEXT_PUBLIC_SITE_URL
 *     ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
 *
 * so a build that does not supply the argument sees `""`, not `undefined`.
 * `??` only substitutes for null/undefined and let the empty string straight
 * through, which made `new URL(siteUrl)` in the root layout throw
 * `ERR_INVALID_URL` and fail the whole build during page-data collection.
 * The same code passed locally, where the variable is simply absent — which is
 * why this only ever broke in Cloud Build.
 */

const FALLBACK_SITE_URL = "http://localhost:3000";

/**
 * Returns an absolute http(s) origin, or the localhost fallback when the
 * configured value is missing or unusable.
 *
 * A scheme-less value such as `www.example.com` is the easy mistake to make
 * here, and it would fail in exactly the same place an empty string did — so it
 * is caught and reported rather than left to surface as `ERR_INVALID_URL` from
 * inside a build chunk. The warning is deliberately loud: falling back silently
 * would ship canonical URLs pointing at localhost.
 */
function resolveSiteUrl(configured: string | undefined): string {
  const candidate = configured?.trim().replace(/\/+$/, "") ?? "";

  if (candidate.length === 0) {
    return FALLBACK_SITE_URL;
  }

  try {
    const { protocol } = new URL(candidate);
    if (protocol === "http:" || protocol === "https:") {
      return candidate;
    }
  } catch {
    // Reported below, with the offending value.
  }

  console.warn(
    `[site] NEXT_PUBLIC_SITE_URL is not an absolute http(s) origin ` +
      `(${JSON.stringify(configured)}). Falling back to ${FALLBACK_SITE_URL} — ` +
      `canonical URLs, sitemap.xml and robots.txt will be wrong in this build.`,
  );

  return FALLBACK_SITE_URL;
}

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
