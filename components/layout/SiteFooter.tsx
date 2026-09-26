import Image from "next/image";
import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import {
  company,
  emergencyLink,
  footerColumns,
  legalLinks,
} from "@/lib/content";

/**
 * Corporate footer: identity and contact block, three link columns, and the
 * legal bar.
 *
 * Two things changed from the previous version. Every link now points at a real
 * route — the old footer carried four dead `#` anchors including a "Privacy
 * Governance" link on a site that collects business data. And the address, the
 * helpdesk line and the sales line are separated, because a buyer in difficulty
 * should not have to guess which number to call.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Corporate identity */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft rounded"
              href="/"
            >
              {/* The white wordmark sits directly on the navy surface — no
                  light plate needed now that the dark asset is in use. */}
              <Image
                src={company.logo}
                alt={company.logoAlt}
                width={company.logoWidth}
                height={company.logoHeight}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-slate-400 leading-relaxed max-w-sm mt-1">
              {company.description}
            </p>

            <div className="text-xs text-slate-400 space-y-2.5 pt-2">
              <p className="flex gap-2">
                <MaterialSymbol
                  name="location_on"
                  className="text-[16px] text-accent-soft shrink-0 mt-0.5"
                />
                <span>{company.addressLine}</span>
              </p>
              <p className="flex gap-2">
                <MaterialSymbol
                  name="support_agent"
                  className="text-[16px] text-accent-soft shrink-0 mt-0.5"
                />
                <span>
                  <strong className="text-white">Support:</strong>{" "}
                  <a
                    href={company.helpdeskHref}
                    className="text-accent-soft font-semibold transition-colors hover:text-white"
                  >
                    {company.helpdeskDisplay}
                  </a>
                  <span className="block text-slate-500">
                    24 hours, all 365 days, for contract customers
                  </span>
                </span>
              </p>
              <p className="flex gap-2">
                <MaterialSymbol
                  name="call"
                  className="text-[16px] text-accent-soft shrink-0 mt-0.5"
                />
                <span>
                  <strong className="text-white">Sales:</strong>{" "}
                  <a
                    href={company.phoneHref}
                    className="font-semibold transition-colors hover:text-white"
                  >
                    {company.phoneDisplay}
                  </a>
                </span>
              </p>
              <p className="flex gap-2">
                <MaterialSymbol
                  name="mail"
                  className="text-[16px] text-accent-soft shrink-0 mt-0.5"
                />
                <a
                  href={company.emailHref}
                  className="transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </p>
              <p className="flex gap-2">
                <MaterialSymbol
                  name="schedule"
                  className="text-[16px] text-accent-soft shrink-0 mt-0.5"
                />
                <span>{company.supportHoursFooter}</span>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <nav className="flex flex-col gap-3" key={column.title}>
              <p className="font-bold uppercase tracking-wide text-[12px] text-white">
                {column.title}
              </p>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="transition-colors hover:text-white"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                className="transition-colors hover:text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="font-semibold text-accent-soft transition-colors hover:text-white"
              href={emergencyLink.href}
            >
              {emergencyLink.label}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
