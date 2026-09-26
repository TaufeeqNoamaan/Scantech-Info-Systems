import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engagementSteps } from "@/lib/data/company";

/**
 * How we work.
 *
 * Seven steps in the sequence Scantech itself states: study the requirement,
 * recommend the infrastructure, supply and implement it, then train the people
 * who will run it. The section exists to de-risk choosing a firm the buyer has
 * not used — it answers "what actually happens if I call you?".
 *
 * Laid out as a connected stepper rather than a card grid: the horizontal rule
 * running through the nodes is what makes it read as a process with an order
 * rather than seven unrelated tiles. Each node's number is a filled marker that
 * sits on the line; the final step gets a flag instead of a number because the
 * sequence terminates there.
 */
export function ProcessSection() {
  return (
    <Section tone="white" id="how-we-work">
      <SectionHeading
        index="04"
        eyebrow="How We Work"
        title="From first call to handover"
        description="Nothing gets installed before you have approved a written specification. Here is the sequence, and what you get out of each stage."
      />

      <div className="relative">
        {/* Spine. Hidden on the narrowest screens, where the steps stack. */}
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[18px] hidden h-px bg-gradient-to-r from-border-subtle via-border-subtle to-transparent lg:block"
        />

        <ol className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {engagementSteps.map((step, index) => {
            const isLast = index === engagementSteps.length - 1;
            return (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 70}
                className="group relative"
              >
                {/* Node */}
                <span className="relative z-10 mb-5 grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-midnight text-[12px] font-bold text-white shadow-sm ring-1 ring-border-subtle transition-colors duration-300 group-hover:bg-accent">
                  {isLast ? (
                    <MaterialSymbol name="flag" className="text-[16px]" />
                  ) : (
                    <span className="numeral">{String(index + 1).padStart(2, "0")}</span>
                  )}
                </span>

                <h3 className="text-[16px] font-bold tracking-tight text-midnight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-slate-600">
                  {step.body}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>

      <Reveal delay={120} className="mt-12 flex flex-wrap items-center gap-6 border-t border-border-subtle pt-8">
        <ArrowLink href="/contact">Start with a site survey</ArrowLink>
        <ArrowLink href="/case-studies" tone="onLight" showRule>
          See what it produced
        </ArrowLink>
      </Reveal>
    </Section>
  );
}
