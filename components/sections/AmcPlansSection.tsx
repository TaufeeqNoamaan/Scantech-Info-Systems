import { ArrowLink } from "@/components/ui/ArrowLink";
import { ComparisonMatrix } from "@/components/ui/ComparisonMatrix";
import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { amcMatrix, amcPlans, goldContract } from "@/lib/data/amc";
import { cn } from "@/lib/cn";

/**
 * Maintenance contract tiers and the inclusion matrix.
 *
 * This is the largest commercial gap the old site had: the thing Scantech sells
 * year after year was not described anywhere, so a buyer had no way to compare
 * tiers before a call.
 */
export function AmcPlansSection() {
  return (
    <Section tone="low" id="amc">
      <SectionHeading
        index="03"
        eyebrow="Maintenance Contracts"
        title="What the contract actually covers"
        description="Three tiers, one inclusion matrix. Comprehensive covers parts and labour; non-comprehensive covers labour with parts at actuals; on-call has no annual commitment at all."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {amcPlans.map((plan, index) => (
          <Reveal key={plan.id} delay={index * 80} className="h-full">
            <div
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                plan.featured
                  ? "border-accent/40 shadow-md ring-1 ring-accent/10"
                  : "border-border-subtle hover:border-slate-300",
              )}
            >
              {/* Accent rule that draws across the top on hover. */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />

              {plan.featured ? (
                <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
                  <MaterialSymbol name="star" className="text-[13px]" />
                  Most common
                </span>
              ) : null}

              <h3 className="text-[20px] font-bold tracking-tight text-midnight">
                {plan.name}
              </h3>
              <p className="mt-1 text-[13px] font-semibold text-accent">
                {plan.tagline}
              </p>
              <p className="mt-4 text-[14px] leading-[1.65] text-slate-600">
                {plan.summary}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <MaterialSymbol
                      name="check"
                      className="mt-0.5 shrink-0 text-[17px] text-accent"
                    />
                    <span className="text-[14px] leading-[1.6] text-slate-600">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-slate-100 pt-5 text-[13px] leading-[1.6] text-slate-500">
                <span className="font-semibold text-slate-700">Best for: </span>
                {plan.best}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Inclusion matrix */}
      <div className="mt-16">
        <Reveal className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-[20px] font-bold tracking-tight text-midnight">
              Inclusion matrix
            </h3>
            <p className="mt-1.5 max-w-xl text-[14px] leading-[1.6] text-slate-600">
              The same eight questions answered for every tier, including the
              follow-up question each one raises.
            </p>
          </div>
          <ArrowLink href="/amc" className="shrink-0">
            Full contract scopes
          </ArrowLink>
        </Reveal>

        <Reveal delay={60}>
          <ComparisonMatrix {...amcMatrix} />
        </Reveal>
      </div>

      {/* Gold contract */}
      <Reveal delay={60} className="mt-16">
        <div className="group relative overflow-hidden rounded-xl border border-border-subtle bg-midnight p-7 text-white sm:p-9">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
          />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-soft">
                <span aria-hidden="true" className="h-px w-6 bg-accent-soft/40" />
                24×7 cover
              </p>
              <h3 className="text-[22px] font-bold tracking-tight">
                {goldContract.name}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-slate-300">
                {goldContract.description}
              </p>
            </div>
            <ul className="space-y-3 lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-8">
              {goldContract.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <MaterialSymbol
                    name="check_circle"
                    className="mt-0.5 shrink-0 text-[18px] text-accent-soft"
                  />
                  <span className="text-[14px] leading-[1.6] text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
