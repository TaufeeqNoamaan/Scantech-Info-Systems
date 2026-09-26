import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilityLine } from "@/components/sections/CredibilityLine";
import { OemAllianceStrip } from "@/components/sections/OemAllianceStrip";
import { ServicesTaxonomySection } from "@/components/sections/ServicesTaxonomySection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { AmcPlansSection } from "@/components/sections/AmcPlansSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyScantechSection } from "@/components/sections/WhyScantechSection";
import { DeliveryRecordSection } from "@/components/sections/DeliveryRecordSection";
import { ClientWallSection } from "@/components/sections/ClientWallSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Homepage.
 *
 * Section order is deliberate: what we sell, who we sell it to, what the
 * contract covers, how we work, then the proof, then the answers to the
 * questions that block a phone call. The proof sits after the offer on purpose
 * — a buyer who has already found their requirement reads the evidence
 * differently from one who has not.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilityLine />
      <OemAllianceStrip />
      <ServicesTaxonomySection />
      <IndustriesSection />
      <AmcPlansSection />
      <ProcessSection />
      <WhyScantechSection />
      <DeliveryRecordSection />
      <ClientWallSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
