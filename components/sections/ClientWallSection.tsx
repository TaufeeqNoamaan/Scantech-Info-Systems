import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { featuredClients } from "@/lib/data/clients";

/**
 * Client wall.
 *
 * The cheapest credibility asset in B2B, and it was absent. These are names
 * Scantech published about itself — rendered as a typographic wall rather than
 * fake logo images, because a wall of wordmarks in each client's own font is
 * more honest than greyed-out placeholder graphics.
 *
 * ⚠️ Confirm written permission for each name before launch; several are
 * government and defence establishments.
 */
export function ClientWallSection() {
  return (
    <Section tone="white" size="sm">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <SectionEyebrow>Trusted By</SectionEyebrow>
        <h2 className="text-[22px] sm:text-[26px] font-bold text-midnight tracking-tight">
          Over 100 organisations across Telangana and Andhra Pradesh
        </h2>
        <p className="mt-3 text-[14px] leading-[1.65] text-slate-600">
          Defence and research establishments, universities, government
          departments, hospitals, media houses and industry.
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border-subtle bg-border-subtle sm:grid-cols-3 lg:grid-cols-4">
        {featuredClients.map((client, index) => (
          <Reveal
            as="li"
            key={client}
            delay={Math.min(index, 12) * 35}
            className="group flex min-h-[86px] items-center justify-center gap-2 bg-white px-4 py-6 text-center transition-colors duration-300 hover:bg-surface-low"
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-accent"
            />
            <span className="text-[13px] font-semibold leading-[1.4] text-slate-600 transition-colors duration-300 group-hover:text-midnight">
              {client}
            </span>
          </Reveal>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <ArrowLink href="/clients">
          See the complete client record
        </ArrowLink>
      </div>
    </Section>
  );
}
