import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Two-digit section index rendered beside the eyebrow, e.g. `"04"`. */
  index?: string;
};

/**
 * The centred eyebrow + headline + lede cluster that opens every content
 * section (`Our Core Capabilities`, `Institutional Reliability`, …).
 *
 * Wrapped in `Reveal` so the heading arrives with the content beneath it
 * rather than sitting still while the cards animate in.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
}: SectionHeadingProps) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-14">
      <SectionEyebrow index={index} centered>
        {eyebrow}
      </SectionEyebrow>
      <h2 className="text-3xl sm:text-[36px] font-bold text-midnight tracking-tight leading-[1.2]">
        {title}
      </h2>
      {description ? (
        <p className="text-slate-600 text-[15px] sm:text-[16px] leading-[1.6] mt-3">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
