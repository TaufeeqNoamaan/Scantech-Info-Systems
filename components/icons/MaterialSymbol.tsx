import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type MaterialSymbolProps = {
  /** Material Symbols ligature name, e.g. `arrow_forward`. */
  name: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

/**
 * Renders a Google Material Symbols glyph.
 *
 * The icon font itself is loaded once in the document head via
 * `app/layout.tsx`. Sizing/colour is intentionally left to the caller so the
 * component stays a thin, tree-shakeable wrapper with no visual opinions.
 *
 * Icons are decorative in every current usage (the adjacent copy already
 * carries the meaning) so `aria-hidden` is applied by default.
 */
export function MaterialSymbol({
  name,
  className,
  ...rest
}: MaterialSymbolProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("material-symbols-outlined", className)}
      {...rest}
    >
      {name}
    </span>
  );
}
