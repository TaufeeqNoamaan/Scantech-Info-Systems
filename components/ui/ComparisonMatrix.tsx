import type { ReactNode } from "react";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { Matrix, MatrixValueState } from "@/lib/matrix";

export type { Matrix, MatrixRow, MatrixValue, MatrixValueState } from "@/lib/matrix";

const stateStyles: Record<MatrixValueState, string> = {
  yes: "text-accent",
  no: "text-slate-300",
  partial: "text-slate-400",
  neutral: "text-slate-400",
};

const stateIcons: Record<MatrixValueState, string> = {
  yes: "check_circle",
  no: "remove_circle",
  partial: "contrast",
  neutral: "info",
};

/**
 * The comparison matrix used for AMC tiers, priority levels and coverage.
 *
 * ── Why this is a CSS Grid and not a table ────────────────────────────────
 *
 * The first version of this component was a real `<table>` with
 * `position: sticky` on the leading cell of the header row and of every body
 * row. Chrome mishandles that combination: the header's sticky cell is taken
 * out of the row's flow while the body row's sticky cell stays in it, so the
 * two resolve against different column sets. The header ends up occupying
 * columns 1–4 while the body occupies 2–5, which leaves the first column blank
 * on every body row and shifts all the row labels one column to the right.
 *
 * That behaviour survives every obvious remedy — verified in the browser:
 * `border-collapse: collapse`, `border-collapse: separate`,
 * `table-layout: fixed` with an explicit `<colgroup>`, and even stripping
 * `position: sticky` at runtime. Once the column grid has been computed with
 * the sticky cells in play, it does not recompute.
 *
 * A grid removes the entire class of problem: every row is laid out against one
 * explicit `grid-template-columns`, so alignment is structural rather than
 * something the browser negotiates per row-range. ARIA table roles preserve the
 * semantics the `<table>` would have provided.
 *
 * ── Design notes ──────────────────────────────────────────────────────────
 *
 *  · **The row-label column is sticky**, which matters on a phone where the
 *    matrix scrolls sideways — without it the reader loses track of which row
 *    they are on, which is the whole reason these tables are unreadable there.
 *  · **Booleans become icons.** Eight rows of "Included" / "Not included"
 *    repeated is the definition of a bland table; a check and a dash are read
 *    at a glance.
 *  · **`MatrixRow.note`** is the clarifier under each label, and it is what
 *    stops the icon columns reading as a bare grid.
 *  · **The recommended column is tinted and badged**, so the eye lands on the
 *    answer instead of comparing eight rows to find it.
 */
export function ComparisonMatrix({
  columns,
  rows,
  highlightColumn = -1,
  highlightBadge,
  cornerLabel = "Feature",
  footnote,
}: Matrix) {
  // One template, shared by every row — this is what guarantees alignment.
  const template = `minmax(200px, 1.35fr) repeat(${columns.length}, minmax(150px, 1fr))`;

  return (
    <div>
      <div className="relative overflow-x-auto rounded-xl border border-border-subtle bg-white">
        <div role="table" className="min-w-[760px]">
          {/* Header ---------------------------------------------------- */}
          <div role="rowgroup">
            <div role="row" className="grid" style={{ gridTemplateColumns: template }}>
              <div
                role="columnheader"
                className="sticky left-0 z-20 border-b border-border-subtle bg-midnight px-5 py-4 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400"
              >
                {cornerLabel}
              </div>

              {columns.map((column, index) => {
                const isHighlighted = index === highlightColumn;
                return (
                  <div
                    key={column}
                    role="columnheader"
                    className={cn(
                      "border-b border-border-subtle px-5 py-4",
                      isHighlighted ? "bg-midnight" : "bg-midnight-deep",
                    )}
                  >
                    <span className="flex flex-col gap-2">
                      {isHighlighted && highlightBadge ? (
                        <span className="inline-flex w-fit items-center gap-1.5 rounded bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                          <MaterialSymbol name="star" className="text-[12px]" />
                          {highlightBadge}
                        </span>
                      ) : null}
                      <span
                        className={cn(
                          "text-[13px] font-bold uppercase tracking-[0.1em]",
                          isHighlighted ? "text-white" : "text-slate-300",
                        )}
                      >
                        {column}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rows ------------------------------------------------------ */}
          <div role="rowgroup">
            {rows.map((row) => (
              <div
                key={row.label}
                role="row"
                className="matrix-row grid border-b border-border-subtle last:border-b-0"
                style={{ gridTemplateColumns: template }}
              >
                <div
                  role="rowheader"
                  className="sticky left-0 z-10 bg-white px-5 py-4 align-top"
                >
                  <span className="block text-[14px] font-semibold leading-[1.4] text-midnight">
                    {row.label}
                  </span>
                  {row.note ? (
                    <span className="mt-1 block text-[12px] font-normal leading-[1.5] text-slate-500">
                      {row.note}
                    </span>
                  ) : null}
                </div>

                {row.values.map((value, index) => {
                  const isHighlighted = index === highlightColumn;
                  return (
                    <div
                      key={`${row.label}-${index}`}
                      role="cell"
                      className={cn(
                        "px-5 py-4 align-top",
                        isHighlighted && "bg-accent/[0.04]",
                      )}
                    >
                      <span className="flex items-start gap-2">
                        {value.state ? (
                          <MaterialSymbol
                            name={stateIcons[value.state]}
                            className={cn(
                              "mt-0.5 shrink-0 text-[17px]",
                              stateStyles[value.state],
                            )}
                          />
                        ) : null}
                        <span
                          className={cn(
                            "text-[14px] leading-[1.5]",
                            isHighlighted
                              ? "font-semibold text-midnight"
                              : value.state === "no"
                                ? "text-slate-400"
                                : "text-slate-600",
                          )}
                        >
                          {value.text}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-[12px] text-slate-500 sm:hidden">
          <MaterialSymbol name="swipe" className="text-[16px] text-slate-400" />
          Scroll sideways to compare tiers
        </p>
        {footnote ? (
          <p className="text-[12px] leading-[1.6] text-slate-500">{footnote}</p>
        ) : null}
      </div>
    </div>
  );
}

/** Heading block that pairs an index number with a title and optional lede. */
export function MatrixHeading({
  index,
  eyebrow,
  title,
  lede,
  centered = false,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  centered?: boolean;
}) {
  return (
    <Reveal className={cn(centered ? "text-center" : "max-w-3xl")}>
      <SectionEyebrow index={index} centered={centered}>
        {eyebrow}
      </SectionEyebrow>
      <h2
        className={cn(
          "text-[26px] font-bold tracking-tight text-midnight sm:text-[32px]",
          "leading-[1.2]",
          centered && "mx-auto max-w-2xl",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-[1.7] text-slate-600",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
