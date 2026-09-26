"use client";

import { useEffect, useRef, useState } from "react";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { loadCalendlyScript } from "@/lib/calendly";
import { company } from "@/lib/content";

type Status = "waiting" | "loading" | "ready" | "error";

/**
 * Inline Calendly embed.
 *
 * The widget script is only fetched once the embed is close to the viewport —
 * it pulls a third-party iframe, and loading it with the page would make every
 * visitor pay for it, including the ones who never book.
 *
 * If it fails, the visitor is handed the phone number and email instead of an
 * empty box.
 */
export function CalendlyInline({ url, title }: { url: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("waiting");

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let cancelled = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        setStatus("loading");
        loadCalendlyScript()
          .then(() => {
            if (!cancelled) setStatus("ready");
          })
          .catch(() => {
            if (!cancelled) setStatus("error");
          });
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  if (status === "error") {
    return (
      <div className="rounded-lg border border-border-subtle bg-surface-low p-6 text-center">
        <MaterialSymbol name="event_busy" className="text-[24px] text-slate-400" />
        <p className="mt-3 text-sm font-semibold text-midnight">
          Online booking is temporarily unavailable
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
          Please call{" "}
          <a
            className="font-semibold text-accent hover:text-accent-strong"
            href={company.phoneHref}
          >
            {company.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a
            className="font-semibold text-accent hover:text-accent-strong"
            href={company.emailHref}
          >
            {company.email}
          </a>
          , or use the form below.
        </p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      {status !== "ready" ? (
        <p
          role="status"
          className="absolute inset-0 z-10 flex items-center justify-center text-sm font-medium text-slate-500"
        >
          Loading available times…
        </p>
      ) : null}
      <div
        className="calendly-inline-widget"
        data-url={url}
        title={title}
        style={{ minWidth: "320px", height: "660px" }}
      />
    </div>
  );
}
