# ============================================================================
# Scantech Info Systems — production image
# ============================================================================
#
# Three stages. `deps` and `builder` carry the toolchain; `runner` carries
# nothing but the compiled output, so the shipped image has no TypeScript, no
# ESLint and no Tailwind in it.
#
# ---------------------------------------------------------------------------
# Base image: Debian slim, not Alpine.
#
# The image optimiser needs `sharp`, whose native libvips binaries ship as
# prebuilt platform packages. Both glibc and musl builds exist, but the glibc
# ones are the better-trodden path and this is not a place to discover a musl
# edge case in production. The size difference is roughly 25 MB and worth it.
# ---------------------------------------------------------------------------
FROM node:22-bookworm-slim AS deps

WORKDIR /app

# Copied separately from the source so this layer is only invalidated when the
# dependency set actually changes — not on every source edit.
COPY package.json package-lock.json ./

# `--include=optional` matters here. `sharp` is an optional dependency of Next,
# and the lockfile was generated on Windows: it carries the native package for
# every platform, and npm installs the one matching this container. Verify it
# loads, and fall back to resolving it explicitly if the lockfile ever drifts.
RUN npm ci --include=optional \
 && (node -e "require('sharp')" \
     || npm install --no-save --include=optional sharp) \
 && node -e "require('sharp'); console.log('sharp', require('sharp/package.json').version, 'ready for', process.platform, process.arch)"

# ---------------------------------------------------------------------------
FROM node:22-bookworm-slim AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ── Build-time environment ────────────────────────────────────────────────
#
# `NEXT_PUBLIC_*` values are INLINED INTO THE BUNDLE at build time — they are
# not read at runtime. This is the single most common way a Next.js container
# ships broken: setting these on the Cloud Run service does nothing, because
# the strings were already baked in when this stage ran.
#
# So they have to arrive as build arguments, which means the Cloud Build
# trigger must pass them. See the note in README or the build command.
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_CALENDLY_URL
ARG NEXT_PUBLIC_CALENDLY_URL_SITE_SURVEY
ARG NEXT_PUBLIC_CALENDLY_URL_AMC
ARG NEXT_PUBLIC_CALENDLY_URL_SECURITY
ARG NEXT_PUBLIC_CALENDLY_URL_CABLING

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_CALENDLY_URL=$NEXT_PUBLIC_CALENDLY_URL
ENV NEXT_PUBLIC_CALENDLY_URL_SITE_SURVEY=$NEXT_PUBLIC_CALENDLY_URL_SITE_SURVEY
ENV NEXT_PUBLIC_CALENDLY_URL_AMC=$NEXT_PUBLIC_CALENDLY_URL_AMC
ENV NEXT_PUBLIC_CALENDLY_URL_SECURITY=$NEXT_PUBLIC_CALENDLY_URL_SECURITY
ENV NEXT_PUBLIC_CALENDLY_URL_CABLING=$NEXT_PUBLIC_CALENDLY_URL_CABLING

# Shipping without an origin is the failure that hurts most and shows least:
# the site renders perfectly, but every canonical tag, the sitemap and
# robots.txt point at http://localhost:3000. Loud enough to catch in the build
# log, not fatal enough to block a first deploy.
RUN if [ -z "$NEXT_PUBLIC_SITE_URL" ]; then \
      echo ""; \
      echo "  ============================================================"; \
      echo "   WARNING: NEXT_PUBLIC_SITE_URL is not set."; \
      echo "   Canonical URLs, sitemap.xml and robots.txt in this image"; \
      echo "   will point at http://localhost:3000."; \
      echo "   Pass it as a build arg on the Cloud Build trigger."; \
      echo "  ============================================================"; \
      echo ""; \
    fi \
 && npm run build

# ---------------------------------------------------------------------------
FROM node:22-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=8080 \
    HOSTNAME=0.0.0.0

# Unprivileged account. Nothing in the image needs to write to disk.
RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

# Static assets and the standalone server.
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# `sharp` is loaded dynamically rather than imported, which is exactly the kind
# of dependency file tracing can miss. Next 15.5 does trace it — verified: the
# standalone tree already contains both `sharp` and `@img` — so these two lines
# are insurance against that changing under a Next upgrade, not a necessity.
# The source paths are guaranteed to exist because the deps stage proved they
# load before the build was allowed to continue.
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/sharp ./node_modules/sharp
COPY --from=builder --chown=nextjs:nodejs /app/node_modules/@img ./node_modules/@img

USER nextjs

EXPOSE 8080

# The standalone server reads PORT and HOSTNAME from the environment, so the
# same image runs on Cloud Run (which injects PORT) and in plain Docker.
CMD ["node", "server.js"]
