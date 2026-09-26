"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { CalendlyCta } from "@/components/calendly/CalendlyCta";
import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { company, primaryHeaderCta, type NavLink } from "@/lib/content";

type MobileNavProps = {
  links: NavLink[];
  phoneDisplay: string;
  phoneHref: string;
};

/**
 * Mobile navigation drawer.
 *
 * The site previously had no navigation at all below 1280px — the desktop nav
 * is `hidden xl:flex` and there was no alternative — which left roughly half of
 * all visitors with no menu.
 *
 * The panel is positioned against the `sticky` header, so it drops directly
 * beneath it. Escape closes it, background scroll is locked while it is open,
 * and focus moves into the panel on open and back to the toggle on close.
 */
export function MobileNav({ links, phoneDisplay, phoneHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the panel so keyboard users are not left behind.
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  /**
   * `restoreFocus` is false for link clicks — the visitor is navigating within
   * the page, so pulling focus back to the toggle would be disorienting.
   */
  function close(restoreFocus = true) {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => (open ? close() : setOpen(true))}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft xl:hidden"
      >
        <MaterialSymbol name={open ? "close" : "menu"} className="text-[22px]" />
      </button>

      {open ? (
        <>
          <div
            aria-hidden="true"
            onClick={() => close()}
            className="fixed inset-0 top-20 bg-midnight/60 xl:hidden"
          />

          <div
            id="mobile-nav-panel"
            ref={panelRef}
            className="absolute left-0 right-0 top-full border-t border-white/10 bg-midnight xl:hidden"
          >
            <nav aria-label="Main" className="px-4 sm:px-6 py-2">
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => close(false)}
                      className="block border-b border-white/10 py-3.5 text-[15px] font-semibold text-slate-200 transition-colors hover:text-white focus:outline-none focus-visible:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <CalendlyCta
                source="mobile_nav"
                fallbackHref={primaryHeaderCta.href}
                onActivate={() => close(false)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-midnight transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
              >
                {primaryHeaderCta.label}
              </CalendlyCta>

              <div className="py-4 space-y-1.5 text-[13px] text-slate-400">
                <p>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Sales &amp; enquiries
                  </span>
                  <a
                    href={phoneHref}
                    className="font-semibold text-white transition-colors hover:text-accent-soft"
                  >
                    {phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Support
                  </span>
                  <a
                    href={company.helpdeskHref}
                    className="font-semibold text-white transition-colors hover:text-accent-soft"
                  >
                    {company.helpdeskDisplay}
                  </a>
                </p>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </>
  );
}
