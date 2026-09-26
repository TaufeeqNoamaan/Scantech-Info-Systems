import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { services, servicesByCategory } from "@/lib/data/services";

/**
 * The full service catalogue, grouped by discipline and numbered.
 *
 * The site previously listed three services — cabling, hardware AMC and CCTV —
 * so a buyer shopping for networking, wireless, servers, backup, UPS, access
 * control or managed services left assuming Scantech did not do them.
 *
 * The numbering is the structural device: each discipline carries a two-digit
 * index and its own count, so the depth of the catalogue is legible before the
 * reader has scrolled into it.
 */
export function ServicesTaxonomySection() {
  return (
    <Section tone="white" id="services">
      <Reveal className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <SectionEyebrow index="01">Service Catalogue</SectionEyebrow>
          <h2 className="text-3xl font-bold leading-[1.2] tracking-tight text-midnight sm:text-[36px]">
            Everything we supply, install and maintain
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-slate-600">
            {services.length} service lines across five disciplines. One contract,
            one engineering bench of 119 directly employed engineers, one point of
            accountability.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-6">
          <div className="hidden sm:block">
            <p className="numeral text-[34px] font-bold leading-none tracking-tight text-midnight">
              {String(services.length).padStart(2, "0")}
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
              Service lines
            </p>
          </div>
          <span aria-hidden="true" className="hidden h-12 w-px bg-border-subtle sm:block" />
          <ArrowLink href="/services">Open the full catalogue</ArrowLink>
        </div>
      </Reveal>

      <div className="space-y-14">
        {servicesByCategory.map(({ category, items }, groupIndex) => (
          <div key={category.id} id={category.id} className="scroll-mt-24">
            {/* Discipline header */}
            <Reveal className="relative mb-7 flex items-start gap-5 border-b border-border-subtle pb-6">
              <span
                aria-hidden="true"
                className="numeral select-none text-[42px] font-bold leading-none tracking-tight text-slate-200 sm:text-[54px]"
              >
                {String(groupIndex + 1).padStart(2, "0")}
              </span>

              <div className="flex-1 pt-1">
                <h3 className="flex flex-wrap items-center gap-3 text-[19px] font-bold tracking-tight text-midnight">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-midnight">
                    <MaterialSymbol
                      name={category.icon}
                      className="text-[19px] text-white"
                    />
                  </span>
                  {category.name}
                  <span className="numeral rounded bg-surface-mid px-2 py-0.5 text-[11px] font-bold tracking-normal text-slate-500">
                    {items.length} services
                  </span>
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-slate-600">
                  {category.summary}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((service, i) => (
                <Reveal key={service.slug} delay={i * 50} className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {/* Accent wash that fades in behind the card. */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    <span className="relative flex items-center gap-3">
                      <MaterialSymbol
                        name={service.icon}
                        className="text-[22px] text-accent transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-[15px] font-bold tracking-tight text-midnight">
                        {service.name}
                      </span>
                    </span>

                    <span className="relative mt-3 flex-1 text-[13px] leading-[1.65] text-slate-600">
                      {service.summary}
                    </span>

                    <span className="relative mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-[13px] font-semibold text-midnight transition-colors group-hover:text-accent">
                        View scope
                      </span>
                      <span className="grid h-7 w-7 place-items-center overflow-hidden rounded-full border border-border-subtle transition-colors duration-300 group-hover:border-accent">
                        <MaterialSymbol
                          name="arrow_forward"
                          className="relative text-[15px] text-accent transition-transform duration-300 group-hover:translate-x-4 group-hover:text-white"
                        />
                        <MaterialSymbol
                          name="arrow_forward"
                          className="absolute text-[15px] -translate-x-4 text-white transition-transform duration-300 group-hover:translate-x-0"
                        />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
