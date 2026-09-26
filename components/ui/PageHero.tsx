import Link from "next/link";
import type { ReactNode } from "react";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";

export type PageHeroAction = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  crumbs: Crumb[];
  primary?: PageHeroAction;
  secondary?: PageHeroAction;
  /** Small factual line under the actions — used for coverage or a key figure. */
  note?: string;
};

/**
 * Interior page header. Navy, matching the masthead, so every interior page
 * opens with the same institutional register the homepage starts in.
 *
 * The `<h1>` sits here and nowhere else on the page, which is why interior
 * sections render `<h2>`.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  primary,
  secondary,
  note,
}: PageHeroProps) {
  return (
    <header className="bg-gradient-to-b from-midnight to-midnight-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pb-14">
        <Breadcrumbs items={crumbs} />

        <div className="mt-8 max-w-3xl">
          <SectionEyebrow tone="onDark">{eyebrow}</SectionEyebrow>
          <h1 className="text-[30px] leading-[1.15] sm:text-[40px] sm:leading-[1.12] lg:text-[46px] font-bold tracking-tight text-white">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 text-[15px] sm:text-[17px] leading-[1.65] text-slate-300">
              {lede}
            </p>
          ) : null}

          {primary || secondary ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primary ? (
                <Link
                  href={primary.href}
                  className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-midnight transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                >
                  <span>{primary.label}</span>
                  <MaterialSymbol
                    name="arrow_forward"
                    className="text-[17px] text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
              ) : null}

              {secondary ? (
                <Link
                  href={secondary.href}
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          ) : null}

          {note ? (
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-soft">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}
