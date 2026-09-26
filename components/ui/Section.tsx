import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Surface the section sits on. */
  tone?: "white" | "low" | "navy";
  /** Vertical rhythm. `sm` is for tight supporting sections. */
  size?: "sm" | "md" | "lg";
  className?: string;
};

const tones = {
  white: "bg-white",
  low: "bg-surface-low",
  navy: "bg-midnight text-slate-300",
} as const;

const sizes = {
  sm: "py-14 lg:py-16",
  md: "py-16 lg:py-20",
  lg: "py-20 lg:py-24",
} as const;

/**
 * Standard page section: consistent max width, horizontal gutters and vertical
 * rhythm. Every section on every page goes through this so spacing cannot drift
 * between the homepage and the interior pages.
 */
export function Section({
  children,
  id,
  tone = "white",
  size = "md",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(tones[tone], sizes[size], id && "scroll-mt-24", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
