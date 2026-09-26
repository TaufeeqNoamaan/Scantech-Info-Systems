import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";

type CtaBandProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  /** Reassurance line under the buttons. */
  note?: string;
};

/**
 * Closing call to action. Every interior page ends with one so a reader who has
 * finished the content is never left without a next step — which matters on a
 * read-only site where nothing can be submitted.
 */
export function CtaBand({
  eyebrow = "Next step",
  heading,
  body,
  primary,
  secondary,
  note,
}: CtaBandProps) {
  return (
    <section className="bg-midnight text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-soft mb-3">
              {eyebrow}
            </p>
            <h2 className="text-2xl sm:text-[32px] font-bold tracking-tight text-white leading-[1.2]">
              {heading}
            </h2>
            {body ? (
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-300 max-w-2xl">
                {body}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
            <Link
              href={primary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3.5 text-sm font-semibold text-midnight transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
            >
              <span>{primary.label}</span>
              <MaterialSymbol
                name="arrow_forward"
                className="text-[17px] text-accent transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>

        {note ? (
          <p className="mt-10 pt-6 border-t border-white/10 text-[12px] text-slate-400">
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
