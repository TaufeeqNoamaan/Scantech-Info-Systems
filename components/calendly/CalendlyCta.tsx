"use client";

import { useState, type ReactNode } from "react";

import { ANALYTICS_EVENTS, track } from "@/lib/analytics";
import {
  buildCalendlyUrl,
  isCalendlyEnabled,
  loadCalendlyScript,
  primaryCalendlyEvent,
} from "@/lib/calendly";

type CalendlyCtaProps = {
  children: ReactNode;
  /** Where to send the visitor when Calendly is unavailable. */
  fallbackHref: string;
  className?: string;
  /** Identifies which CTA converted, for attribution. */
  source: string;
  url?: string;
  /** Runs before the booking opens — used to dismiss the mobile drawer. */
  onActivate?: () => void;
};

/**
 * A call-to-action that opens the Calendly popup.
 *
 * Renders as a plain anchor whenever Calendly is not configured, and falls back
 * to the same anchor if the third-party script is blocked or fails to load. A
 * blocked widget must never remove the visitor's only route to getting in touch.
 *
 * It is a real `<button>`, not a clickable div, so it is keyboard operable and
 * announced correctly.
 */
export function CalendlyCta({
  children,
  fallbackHref,
  className,
  source,
  url = primaryCalendlyEvent?.url ?? "",
  onActivate,
}: CalendlyCtaProps) {
  const [failed, setFailed] = useState(false);
  const enabled = isCalendlyEnabled && Boolean(url);

  async function openBooking() {
    onActivate?.();
    track(ANALYTICS_EVENTS.bookingOpened, { source });

    try {
      await loadCalendlyScript();
      if (!window.Calendly) throw new Error("Calendly widget unavailable");
      window.Calendly.initPopupWidget({ url: buildCalendlyUrl(url, source) });
    } catch {
      track(ANALYTICS_EVENTS.bookingFailed, { source });
      setFailed(true);
      window.location.href = fallbackHref;
    }
  }

  if (!enabled || failed) {
    return (
      <a className={className} href={fallbackHref} onClick={onActivate}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={openBooking}>
      {children}
    </button>
  );
}
