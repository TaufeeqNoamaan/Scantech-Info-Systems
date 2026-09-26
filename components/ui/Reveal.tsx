"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. Keep increments between 40 and 90. */
  delay?: number;
  className?: string;
  /** Element to render. Use `li` inside a list so the markup stays valid. */
  as?: "div" | "li" | "article" | "section" | "header";
};

/**
 * Reveals its children once, the first time they scroll into view.
 *
 * `is-visible` is never removed, so content settles permanently instead of
 * replaying every time it re-enters the viewport — re-animating on scroll-back
 * is the single most common way motion becomes annoying.
 *
 * With JavaScript disabled the element would stay at `opacity: 0`, so
 * `app/layout.tsx` ships a `<noscript>` override that resets `.reveal`.
 * Visitors who ask for reduced motion get the final state immediately, handled
 * entirely in CSS — no JavaScript gate in front of content.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      {
        // Fire slightly before the element reaches the fold so the animation
        // has finished by the time it is being read.
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: cn("reveal", visible && "is-visible", className),
      style: delay ? { animationDelay: `${delay}ms` } : undefined,
    },
    children,
  );
}
