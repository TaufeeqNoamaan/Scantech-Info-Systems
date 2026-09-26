import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data/industries";

/**
 * Who we serve.
 *
 * Enterprise buyers screen vendors on "have you done this for an organisation
 * like ours?" — and the site previously had nothing answering it. Each card
 * names the sector-specific problem and the organisations from Scantech's own
 * client record that evidence it.
 */
export function IndustriesSection() {
  return (
    <Section tone="white" id="industries">
      <SectionHeading
        index="02"
        eyebrow="Who We Serve"
        title="Sectors we have actually delivered in"
        description="Over 100 institutional clients across Telangana and Andhra Pradesh. These are the sectors we know — and the organisations from our own record that stand behind each one."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.slice(0, 6).map((industry, index) => (
          <Reveal key={industry.id} delay={index * 70} className="h-full">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-lg border border-border-subtle bg-surface-low transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-white">
                  <MaterialSymbol
                    name={industry.icon}
                    className="text-[22px] text-midnight transition-colors duration-300 group-hover:text-accent"
                  />
                </div>
                <span className="numeral text-[12px] font-bold tracking-normal text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-5 text-[17px] font-bold tracking-tight text-midnight">
                {industry.name}
              </h3>
              <p className="relative mt-2 flex-1 text-[14px] leading-[1.65] text-slate-600">
                {industry.problem}
              </p>

              <ul className="relative mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                {industry.clients.slice(0, 2).map((client) => (
                  <li
                    key={client}
                    className="rounded border border-border-subtle bg-surface-low px-2 py-0.5 text-[11px] font-medium text-slate-500"
                  >
                    {client}
                  </li>
                ))}
                {industry.clients.length > 2 ? (
                  <li className="px-1 py-0.5 text-[11px] font-semibold text-slate-400">
                    +{industry.clients.length - 2} more
                  </li>
                ) : null}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <ArrowLink href="/industries">
          See all ten sectors with their client record
        </ArrowLink>
      </div>
    </Section>
  );
}
