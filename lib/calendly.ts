/**
 * Calendly configuration.
 *
 * Every URL is optional. When `NEXT_PUBLIC_CALENDLY_URL` is unset the whole
 * integration degrades to the existing behaviour — anchors that scroll to the
 * contact form — so the site is shippable before the Calendly event types are
 * finalised.
 *
 * Per-event overrides are read as separate `NEXT_PUBLIC_*` variables because
 * Next.js only inlines env access written as a full static expression; they
 * cannot be looked up dynamically.
 */

const fallbackUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

export const isCalendlyEnabled = fallbackUrl.length > 0;

export type CalendlyEvent = {
  key: string;
  label: string;
  duration: string;
  url: string;
};

/**
 * Routing visitors to the right meeting up front is what makes a booking
 * qualified rather than merely booked. The events below mirror the three
 * service pillars plus the general site survey.
 */
export const calendlyEvents: CalendlyEvent[] = [
  {
    key: "site-survey",
    label: "On-Site IT & Security Survey",
    duration: "60 min",
    url: process.env.NEXT_PUBLIC_CALENDLY_URL_SITE_SURVEY || fallbackUrl,
  },
  {
    key: "amc-scoping",
    label: "AMC Scoping Call",
    duration: "30 min",
    url: process.env.NEXT_PUBLIC_CALENDLY_URL_AMC || fallbackUrl,
  },
  {
    key: "security-blueprint",
    label: "CCTV & Security Blueprint Review",
    duration: "45 min",
    url: process.env.NEXT_PUBLIC_CALENDLY_URL_SECURITY || fallbackUrl,
  },
  {
    key: "cabling-audit",
    label: "Structured Cabling Audit",
    duration: "30 min",
    url: process.env.NEXT_PUBLIC_CALENDLY_URL_CABLING || fallbackUrl,
  },
];

export const primaryCalendlyEvent =
  calendlyEvents.find((event) => event.key === "site-survey") ?? calendlyEvents[0];

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
      }) => void;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

/**
 * Loads the Calendly widget script once, on demand.
 *
 * Deliberately not loaded with the page: it pulls a third-party iframe and
 * would otherwise be paid for by every visitor, including the ones who never
 * book. Callers trigger this on first interaction, or when the inline embed
 * approaches the viewport.
 */
export function loadCalendlyScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      "script[data-calendly-widget]",
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Calendly widget failed to load")),
      );
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendlyWidget = "true";
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () =>
      reject(new Error("Calendly widget failed to load")),
    );
    document.head.appendChild(script);
  });

  return scriptPromise;
}

/**
 * Carries campaign attribution into the booking so the engineer knows which
 * channel — and which service — the meeting came from.
 */
export function buildCalendlyUrl(baseUrl: string, source: string): string {
  if (typeof window === "undefined") return baseUrl;

  try {
    const url = new URL(baseUrl);
    const incoming = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
      (key) => {
        const value = incoming.get(key);
        if (value) url.searchParams.set(key, value);
      },
    );
    // `utm_content` doubles as the CTA identifier when the campaign didn't set one.
    if (!url.searchParams.has("utm_content")) {
      url.searchParams.set("utm_content", source);
    }
    return url.toString();
  } catch {
    return baseUrl;
  }
}
