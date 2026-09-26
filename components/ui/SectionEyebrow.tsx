import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  children: ReactNode;
  /** Adds the bottom margin used when the kicker sits directly above a headline. */
  spaced?: boolean;
  /** `onDark` switches to the soft blue that reads on the navy surfaces. */
  tone?: "onLight" | "onDark";
  /**
   * Two-digit section index, e.g. `"03"`. Renders as `03 —— LABEL`, which is the
   * structural device that ties the site together: every section is numbered, so
   * a reader can see how far in they are and how much is left.
   */
  index?: string;
  /** Centre the marker and its rule. */
  centered?: boolean;
  className?: string;
};

/**
 * Quiet, letter-spaced kicker above a headline. Every section on the site
 * carries one, so this component owns the single definition of how they look.
 *
 * Deliberately not a pill: a rounded badge with a pulsing status dot is a
 * product-status affordance that carries no meaning on a marketing page, and it
 * reads as consumer-SaaS rather than institutional.
 */
export function SectionEyebrow({
  children,
  spaced = true,
  tone = "onLight",
  index,
  centered = false,
  className,
}: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em]",
        tone === "onDark" ? "text-accent-soft" : "text-slate-500",
        centered && "justify-center",
        spaced && "mb-3",
        className,
      )}
    >
      {index ? (
        <>
          <span
            className={cn(
              "numeral text-[12px] tracking-normal",
              tone === "onDark" ? "text-accent-soft/70" : "text-slate-400",
            )}
          >
            {index}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-6",
              tone === "onDark" ? "bg-accent-soft/40" : "bg-slate-300",
            )}
          />
        </>
      ) : null}
      <span>{children}</span>
    </p>
  );
}
