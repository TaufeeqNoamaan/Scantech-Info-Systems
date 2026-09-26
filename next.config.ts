import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Emits `.next/standalone` — a self-contained server with only the traced
   * dependencies. This is what the Docker runner stage copies; without it the
   * container would need the whole `node_modules` tree.
   */
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // All imagery is self-hosted under /public/images.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Fonts are content-addressed by filename and never mutated in place.
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
