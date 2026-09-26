import Image from "next/image";
import type { CSSProperties } from "react";

import { partnerLogosWithAssets } from "@/lib/data/company";
import { cn } from "@/lib/cn";

type LogoWallProps = {
  /**
   * `marquee` scrolls continuously in two rows — the standard treatment for a
   * partner strip, and it lets twenty marks occupy the height of two.
   * `grid` is static, for when the reader is meant to scan the whole set.
   */
  variant?: "marquee" | "grid";
  className?: string;
};

/**
 * Renders a single logo tile.
 *
 * The marks are JPGs with white backgrounds rather than transparent PNGs, so
 * each one sits on a white tile with a hairline border. That turns an artefact
 * of the source files into a deliberate-looking spec sheet, and it means the
 * logos can be laid on the pale grey sections without showing white boxes.
 *
 * Resting state is desaturated via `grayscale` + reduced opacity; hovering
 * restores the brand colour. The tiles hold their size in both states, so
 * nothing shifts on hover.
 */
function LogoTile({ name, file, width, height }: (typeof partnerLogosWithAssets)[number]) {
  return (
    <span className="group flex h-16 w-[7.5rem] shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-white px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm sm:w-32">
      <Image
        src={file}
        alt={name}
        width={width}
        height={height}
        className="h-auto w-auto max-h-8 max-w-[85%] object-contain opacity-55 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </span>
  );
}

export function LogoWall({ variant = "marquee", className }: LogoWallProps) {
  if (variant === "grid") {
    return (
      <ul
        className={cn(
          "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
          className,
        )}
      >
        {partnerLogosWithAssets.map((logo) => (
          <li key={logo.name} className="flex justify-center">
            <LogoTile {...logo} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={cn("marquee-mask", className)}>
      <div
        className="marquee-track"
        style={{ "--marquee-duration": "80s" } as CSSProperties}
      >
        {/* The list is rendered twice so the -50% translation loops seamlessly.
            The second copy is decorative and hidden from assistive tech. */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex shrink-0 items-center gap-3 pr-3"
          >
            {partnerLogosWithAssets.map((logo) => (
              <li key={`${copy}-${logo.name}`}>
                <LogoTile {...logo} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
