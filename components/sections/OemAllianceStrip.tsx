import { ArrowLink } from "@/components/ui/ArrowLink";
import { LogoWall } from "@/components/ui/LogoWall";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { authorisedBrands, partnerLogosWithAssets } from "@/lib/data/company";

/**
 * Authorised dealer / reseller strip.
 *
 * This band previously showed six company names with generic Material Symbols
 * standing in for their logos, and it named brands Scantech was not recorded as
 * carrying. It now shows the actual marks Scantech used — recovered from its own
 * asset folder — and is honest about how many of its stated brands have no asset
 * yet, rather than implying the set is complete.
 */
export function OemAllianceStrip() {
  const withoutAssets = authorisedBrands.length - partnerLogosWithAssets.length;

  return (
    <section className="border-b border-border-subtle bg-surface-low py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionEyebrow spaced={false}>
              Authorised Dealer / Reseller
            </SectionEyebrow>
            <p className="mt-2 max-w-xl text-[14px] leading-[1.6] text-slate-600">
              {partnerLogosWithAssets.length} brands, supplied through official
              distribution — so warranty and service entitlement stay intact.
            </p>
          </div>
          <ArrowLink href="/about" className="shrink-0">
            See all {authorisedBrands.length} brands
          </ArrowLink>
        </Reveal>

        <Reveal delay={90}>
          <LogoWall variant="marquee" />
        </Reveal>

        <p className="mt-6 text-center text-[12px] text-slate-500">
          Also authorised for {withoutAssets} further brands, listed in full on
          the company page.
          <span className="block text-slate-400 sm:inline sm:ml-1">
            Marks shown are Scantech&apos;s own partner assets.
          </span>
        </p>
      </div>
    </section>
  );
}
