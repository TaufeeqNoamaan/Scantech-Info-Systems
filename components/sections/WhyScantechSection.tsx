import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/lib/content";

/**
 * Four-up credibility grid ("Why Enterprises Partner with Scantech").
 *
 * Each card carries the em-dash rule and a numbered corner so the four read as
 * a set of claims rather than four unrelated boxes. The icon plate fills and the
 * card lifts on hover — the same motion language as the service cards, so the
 * page has one interaction vocabulary instead of several.
 */
export function WhyScantechSection() {
  return (
    <Section
      tone="low"
      id="why-scantech"
      className="border-y border-border-subtle"
    >
      <SectionHeading
        index="05"
        eyebrow="Institutional Reliability"
        title="Why enterprises partner with Scantech"
        description="Disciplined execution, direct engineering access, and contract clarity without vendor ambiguity — each of these is a number you can check, not a slogan."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {differentiators.map((item, index) => (
          <Reveal key={item.title} delay={index * 70} className="h-full">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />

              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-md border border-border-subtle bg-surface-mid transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-white">
                  <MaterialSymbol
                    name={item.icon}
                    className="text-[24px] text-midnight transition-colors duration-300 group-hover:text-accent"
                  />
                </div>
                <span className="numeral text-[12px] font-bold tracking-normal text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* h3, not h4 — these sit directly under the section h2. */}
              <h3 className="mt-5 text-base font-bold tracking-tight text-midnight">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] font-normal leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
