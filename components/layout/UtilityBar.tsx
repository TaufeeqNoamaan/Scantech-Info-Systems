import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { company, utilityBar } from "@/lib/content";

/**
 * Thin utility strip above the masthead.
 *
 * Its job is to split the two visitors a support-led business receives: someone
 * with a fault and someone with a requirement. Both used to arrive at the same
 * place, which is why support calls and sales calls were indistinguishable.
 *
 * Collapses to a single line below `sm` — the coverage line is the one piece of
 * information a buyer screens on first.
 */
export function UtilityBar() {
  return (
    <div className="bg-midnight-deep border-b border-white/10 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between gap-4 text-[12px]">
          <div className="flex items-center gap-4 min-w-0">
            <span className="hidden sm:flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <MaterialSymbol name="location_on" className="text-[15px] text-accent-soft" />
              {utilityBar.coverage}
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-400 whitespace-nowrap">
              {utilityBar.hours}
            </span>
            <span className="sm:hidden flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
              <MaterialSymbol name="location_on" className="text-[15px] text-accent-soft" />
              Hyderabad
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={company.helpdeskHref}
              className="hidden md:inline-flex items-center gap-1.5 font-semibold text-white whitespace-nowrap transition-colors hover:text-accent-soft"
            >
              <MaterialSymbol name="call" className="text-[15px]" />
              {company.helpdeskDisplay}
            </a>
            <Link
              href={utilityBar.supportHref}
              className="inline-flex items-center gap-1 font-semibold text-accent-soft whitespace-nowrap transition-colors hover:text-white"
            >
              <span className="hidden sm:inline">{utilityBar.supportLabel}</span>
              <span className="sm:hidden">Service request</span>
              <MaterialSymbol name="arrow_forward" className="text-[14px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
