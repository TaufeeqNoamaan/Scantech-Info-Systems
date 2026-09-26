/**
 * Provider-agnostic analytics shim.
 *
 * No analytics provider is wired up yet (see ROADMAP D2 — it needs an account
 * ID). Rather than leave conversion points untracked, every meaningful action
 * already calls `track()`. Whatever provider is chosen later reads from
 * `gtag` / `dataLayer`, so completing the setup becomes a tag change rather
 * than a code change, and no call site needs revisiting.
 */

type EventProps = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: string, props: EventProps = {}): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, props);

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event, ...props });
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[track]", event, props);
  }
}

/** Conversion events, named once so they cannot drift between call sites. */
export const ANALYTICS_EVENTS = {
  bookingOpened: "booking_opened",
  bookingCompleted: "booking_completed",
  bookingFailed: "booking_failed",
  enquirySubmitted: "enquiry_submitted",
} as const;
