import { ArrowLink } from "@/components/ui/ArrowLink";
import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allFaqItems, homepageFaqIds } from "@/lib/data/faq";

/**
 * FAQ.
 *
 * On a site with no booking and no working form, the FAQ *is* the sales
 * conversation. The homepage carries the six questions that decide whether
 * someone picks up the phone; the complete set lives on `/faq`.
 */
export function FaqSection() {
  const items = homepageFaqIds
    .map((question) => allFaqItems.find((item) => item.q === question))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <Section tone="low" id="faq">
      <SectionHeading
        index="07"
        eyebrow="Common Questions"
        title="The answers buyers ask for before they call"
        description="Contract inclusions, response times, coverage and taking over an estate from another vendor."
      />

      <div className="mx-auto max-w-3xl space-y-3">
        {items.map((item, index) => (
          <Reveal key={item.q} delay={index * 50}>
            <details className="group rounded-xl border border-border-subtle bg-white px-5 py-4 transition-all duration-300 open:shadow-sm hover:border-slate-300">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-midnight marker:hidden">
                <span className="flex items-start gap-3">
                  <span className="numeral mt-0.5 text-[12px] font-bold tracking-normal text-slate-300 transition-colors duration-300 group-open:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.q}</span>
                </span>
                <MaterialSymbol
                  name="expand_more"
                  className="shrink-0 text-[20px] text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-accent"
                />
              </summary>
              <p className="mt-3 pl-8 text-[14px] leading-[1.7] text-slate-600">
                {item.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ArrowLink href="/faq">Read all questions and answers</ArrowLink>
      </div>
    </Section>
  );
}
