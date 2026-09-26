import Image from "next/image";
import Link from "next/link";

import { CalendlyCta } from "@/components/calendly/CalendlyCta";
import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { MobileNav } from "@/components/layout/MobileNav";
import { company, navLinks, primaryHeaderCta } from "@/lib/content";

/**
 * Sticky top navigation. Server-rendered — the only interactivity is CSS
 * hover/focus, so no client bundle is required.
 *
 * The bar is solid navy because the supplied wordmark is white-on-transparent:
 * on the previous white header most of it ("SCAN", "INFO SYSTEMS", "HARDWARE |
 * SERVICE | SOFTWARE") disappeared entirely. It also replaces the previous
 * translucent `bg-white/95 backdrop-blur-md` shell, which is the glassmorphic
 * treatment DESIGN.md explicitly rejects.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-midnight border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand wordmark */}
        <Link
          className="flex items-center shrink-0 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
          href="/"
          aria-label={company.name}
        >
          <Image
            src={company.logo}
            alt={company.logoAlt}
            width={company.logoWidth}
            height={company.logoHeight}
            priority
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-semibold text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="whitespace-nowrap transition-colors hover:text-white focus:outline-none focus-visible:text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Primary action + mobile menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <CalendlyCta
            source="header"
            fallbackHref={primaryHeaderCta.href}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-white text-midnight text-sm font-semibold tracking-wide whitespace-nowrap transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft group"
          >
            <span>{primaryHeaderCta.label}</span>
            <MaterialSymbol
              name="arrow_forward"
              className="text-[17px] text-accent transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </CalendlyCta>

          {/* Below `sm` the CTA lives in the drawer instead, which is what keeps
              the narrowest viewports from overflowing. */}
          <MobileNav
            links={navLinks}
            phoneDisplay={company.phoneDisplay}
            phoneHref={company.phoneHref}
          />
        </div>
      </div>
    </header>
  );
}
