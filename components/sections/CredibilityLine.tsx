import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { credibility } from "@/lib/content";

/**
 * The credibility line under the hero.
 *
 * The previous stats band (three large counters) was removed on request. This
 * carries the same proof at a fraction of the visual weight — a single quiet
 * line, no figure competing with the headline.
 */
export function CredibilityLine() {
  return (
    <div className="bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[12px] sm:text-[13px] text-slate-500">
          <span className="flex items-center gap-2">
            <MaterialSymbol
              name={credibility.icon}
              className="text-[17px] text-accent shrink-0"
            />
            <span className="font-semibold uppercase tracking-[0.1em] text-slate-500">
              Established
            </span>
          </span>
          <span className="text-slate-600">{credibility.text}</span>
        </p>
      </div>
    </div>
  );
}
