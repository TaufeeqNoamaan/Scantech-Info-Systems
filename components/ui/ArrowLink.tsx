import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  /** Surface the link sits on. */
  tone?: "onLight" | "onDark";
  /** Accent rule that draws in from the left on hover, above the link. */
  showRule?: boolean;
  className?: string;
};

/**
 * The site's standard "go somewhere" affordance.
 *
 * Two arrows are stacked in the same circle: one slides out to the right while
 * its twin slides in from the left, so the arrow appears to travel through the
 * button rather than simply moving. The disc fills with accent underneath. It is
 * pure CSS — no client component, no JavaScript.
 */
export function ArrowLink({
  href,
  children,
  tone = "onLight",
  showRule = false,
  className,
}: ArrowLinkProps) {
  const isDark = tone === "onDark";

  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-3 text-sm font-semibold focus:outline-none",
        isDark
          ? "text-white focus-visible:ring-2 focus-visible:ring-accent-soft rounded"
          : "text-midnight focus-visible:ring-2 focus-visible:ring-accent rounded",
        className,
      )}
    >
      {showRule ? (
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-3 left-0 h-px w-8 transition-all duration-300 group-hover:w-14",
            isDark ? "bg-accent-soft" : "bg-accent",
          )}
        />
      ) : null}

      <span className="link-sweep">{children}</span>

      <span
        aria-hidden="true"
        className={cn(
          "relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full border transition-colors duration-300",
          isDark
            ? "border-white/25 group-hover:border-accent"
            : "border-border-subtle group-hover:border-accent",
        )}
      >
        {/* Fill that scales up behind the arrow. */}
        <span className="absolute inset-0 scale-0 rounded-full bg-accent transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100" />

        <MaterialSymbol
          name="arrow_forward"
          className={cn(
            "relative text-[16px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover:translate-x-5",
            isDark ? "text-accent-soft group-hover:text-white" : "text-accent group-hover:text-white",
          )}
        />
        <MaterialSymbol
          name="arrow_forward"
          className="absolute text-[16px] -translate-x-5 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
        />
      </span>
    </Link>
  );
}
