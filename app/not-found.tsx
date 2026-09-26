import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";

const suggestions = [
  { label: "Service catalogue", href: "/services" },
  { label: "AMC & contracts", href: "/amc" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Customer support", href: "/support" },
  { label: "Contact us", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32 bg-surface-low border-b border-border-subtle">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
          Error 404
        </p>
        <h1 className="text-3xl sm:text-[36px] font-bold text-midnight tracking-tight leading-[1.2]">
          This page could not be found
        </h1>
        <p className="text-slate-600 text-[15px] sm:text-[16px] leading-[1.65] mt-3">
          The address you requested does not match any page on this site. If you
          followed a link from somewhere else and expected to land here, tell us
          where it came from and we will fix it.
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-midnight text-white font-semibold text-sm transition-colors hover:bg-midnight-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span>Return to homepage</span>
          <MaterialSymbol
            name="arrow_forward"
            className="text-[18px] text-accent-soft transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>

        <nav aria-label="Suggested pages" className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px]">
            {suggestions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-semibold text-slate-500 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
