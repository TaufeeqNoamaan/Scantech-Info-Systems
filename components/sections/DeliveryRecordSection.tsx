import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/data/case-studies";

/**
 * Delivery record — the named engagements.
 *
 * This replaces the two anonymous testimonial quotes the site previously
 * carried under a "Client Case Studies" heading. A named client, a year and a
 * documented scope is worth more than an unattributed quote, and it is the one
 * form of proof on a read-only site that a buyer cannot discount.
 */
export function DeliveryRecordSection() {
  const featured = caseStudies.slice(0, 3);

  return (
    <Section tone="low" id="case-studies">
      <SectionHeading
        index="06"
        eyebrow="Delivery Record"
        title="Named projects, with the year they were delivered"
        description="Campus cabling, hospital networks and bespoke systems — the same engineering bench that built these still answers the phone."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {featured.map((study, index) => (
          <Reveal key={study.slug} delay={index * 80} className="h-full">
            <Link
              href={`/case-studies/${study.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />

              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                  <span>{study.sector}</span>
                  {study.year ? (
                    <>
                      <span className="text-slate-300">·</span>
                      <span className="text-accent">{study.year}</span>
                    </>
                  ) : null}
                </span>
                <span className="numeral text-[12px] font-bold tracking-normal text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-[18px] font-bold leading-[1.3] tracking-tight text-midnight transition-colors duration-300 group-hover:text-accent">
                {study.title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-slate-600">
                {study.summary}
              </p>

              <p className="mt-5 border-t border-slate-100 pt-5 text-[13px] font-semibold text-midnight">
                {study.client}
              </p>

              <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                Read the engagement
                <MaterialSymbol
                  name="arrow_forward"
                  className="text-[15px] transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ArrowLink href="/case-studies">
          See the full delivery record
        </ArrowLink>
      </div>
    </Section>
  );
}
