import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

/**
 * This configuration mirrors the design tokens that were previously declared
 * inline against the Tailwind Play CDN build, so the rendered output is
 * byte-for-byte equivalent to the original single-file prototype.
 *
 * `darkMode: "class"` and the `@tailwindcss/forms` plugin are retained for the
 * same reason — the original document loaded
 * `cdn.tailwindcss.com?plugins=forms,container-queries`.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // DESIGN.md tokens. The previous palette used a #141428 near-black and
        // a #f03c50 crimson accent, neither of which exists in the documented
        // design system — a saturated red accent is the single strongest
        // "consumer startup" signal on the page.
        midnight: "#0F2942", // Primary Navy — structural authority
        "midnight-deep": "#091A2B", // documented primary hover
        accent: "#1D4ED8", // Tertiary Executive Blue — actionable/interactive
        "accent-strong": "#1E40AF",
        "accent-soft": "#B0C9E8", // inverse-primary, for accents on navy
        rating: "#B45309", // testimonial stars only
        surface: "#ffffff",
        "surface-low": "#f8fafc",
        "surface-mid": "#f1f5f9",
        "border-subtle": "#e2e8f0",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        brand: ["var(--font-plus-jakarta-sans)", "var(--font-inter)", "sans-serif"],
      },
      // Tailwind v3's default box-shadow scale has no `2xs`/`xs` steps, so the
      // `shadow-2xs` and `shadow-xs` classes inherited from the prototype were
      // compiling to nothing. They are defined here to DESIGN.md's documented
      // elevation tiers instead of being silently dropped.
      boxShadow: {
        "2xs": "0 1px 2px 0 rgba(15, 41, 66, 0.03)",
        xs: "0 1px 3px 0 rgba(15, 41, 66, 0.04), 0 1px 2px -1px rgba(15, 41, 66, 0.02)",
      },
    },
  },
  plugins: [forms],
};

export default config;
