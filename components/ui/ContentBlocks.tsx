import Link from "next/link";

import { MaterialSymbol } from "@/components/icons/MaterialSymbol";
import { ComparisonMatrix } from "@/components/ui/ComparisonMatrix";
import { Section } from "@/components/ui/Section";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CtaBand } from "@/components/ui/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import type { MatrixValue } from "@/lib/matrix";

/**
 * Data-driven page bodies.
 *
 * The interior pages are almost entirely reference material: scopes,
 * inclusions, policies. Rendering them from typed blocks instead of bespoke
 * markup per page keeps typography, spacing, heading levels and motion
 * identical across every one of them — and makes a content edit a data edit.
 */

type BlockBase = {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  /** Two-digit section index, rendered beside the eyebrow. */
  index?: string;
  tone?: "white" | "low";
};

export type Block =
  | (BlockBase & { kind: "prose"; paragraphs: string[] })
  | (BlockBase & { kind: "bullets"; items: string[]; columns?: 1 | 2 | 3 })
  | (BlockBase & {
      kind: "cards";
      items: { icon?: string; title: string; body: string; href?: string }[];
      columns?: 2 | 3 | 4;
    })
  | (BlockBase & { kind: "steps"; items: { title: string; body: string }[] })
  | (BlockBase & {
      kind: "matrix";
      columns: string[];
      rows: { label: string; note?: string; values: (string | MatrixValue)[] }[];
      highlightColumn?: number;
      highlightBadge?: string;
      cornerLabel?: string;
      footnote?: string;
    })
  | (BlockBase & {
      kind: "faq";
      groups: { title: string; items: { q: string; a: string }[] }[];
    })
  | (BlockBase & { kind: "stats"; items: { value: string; label: string }[] })
  | {
      kind: "cta";
      eyebrow?: string;
      heading: string;
      body?: string;
      primary: { label: string; href: string };
      secondary?: { label: string; href: string };
      note?: string;
    };

const columnClasses: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

function normalise(value: string | MatrixValue): MatrixValue {
  return typeof value === "string" ? { text: value } : value;
}

function BlockHeading({
  index,
  eyebrow,
  heading,
  intro,
  centered = false,
}: {
  index?: string;
  eyebrow?: string;
  heading?: string;
  intro?: string;
  centered?: boolean;
}) {
  if (!eyebrow && !heading && !intro) return null;
  return (
    <Reveal
      className={centered ? "mx-auto mb-12 max-w-2xl text-center" : "mb-10 max-w-3xl"}
    >
      {eyebrow ? (
        <SectionEyebrow index={index} centered={centered}>
          {eyebrow}
        </SectionEyebrow>
      ) : null}
      {heading ? (
        <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-midnight sm:text-[32px]">
          {heading}
        </h2>
      ) : null}
      {intro ? (
        <p className="mt-4 text-[15px] leading-[1.7] text-slate-600">{intro}</p>
      ) : null}
    </Reveal>
  );
}

/** Card shell with the lift-and-underline hover used across the site. */
function hoverShell(interactive: boolean) {
  return interactive
    ? "group flex flex-col rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    : "flex flex-col rounded-xl border border-border-subtle bg-white p-6";
}

export function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, blockIndex) => {
        switch (block.kind) {
          case "prose":
            return (
              <Section
                key={blockIndex}
                tone={block.tone ?? (blockIndex % 2 === 0 ? "white" : "low")}
              >
                <BlockHeading
                  index={block.index}
                  eyebrow={block.eyebrow}
                  heading={block.heading}
                />
                <div className="max-w-3xl space-y-5">
                  {block.paragraphs.map((paragraph, i) => (
                    <Reveal
                      key={paragraph.slice(0, 40)}
                      delay={i * 40}
                      className="text-[15px] leading-[1.75] text-slate-600"
                    >
                      {paragraph}
                    </Reveal>
                  ))}
                </div>
              </Section>
            );

          case "bullets":
            return (
              <Section
                key={blockIndex}
                tone={block.tone ?? (blockIndex % 2 === 0 ? "white" : "low")}
              >
                <BlockHeading
                  index={block.index}
                  eyebrow={block.eyebrow}
                  heading={block.heading}
                  intro={block.intro}
                />
                <ul
                  className={`grid gap-x-8 gap-y-4 ${columnClasses[block.columns ?? 2]}`}
                >
                  {block.items.map((item, i) => (
                    <Reveal
                      as="li"
                      key={item}
                      delay={i * 50}
                      className="group flex items-start gap-3"
                    >
                      <MaterialSymbol
                        name="check_circle"
                        className="mt-1 shrink-0 text-[18px] text-accent transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-[15px] leading-[1.65] text-slate-600">
                        {item}
                      </span>
                    </Reveal>
                  ))}
                </ul>
              </Section>
            );

          case "cards":
            return (
              <Section
                key={blockIndex}
                tone={block.tone ?? (blockIndex % 2 === 0 ? "white" : "low")}
              >
                <BlockHeading
                  index={block.index}
                  eyebrow={block.eyebrow}
                  heading={block.heading}
                  intro={block.intro}
                  centered
                />
                <div className={`grid gap-6 ${columnClasses[block.columns ?? 3]}`}>
                  {block.items.map((item, i) => {
                    const inner = (
                      <>
                        {item.icon ? (
                          <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg border border-border-subtle bg-surface-low transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-white">
                            <MaterialSymbol
                              name={item.icon}
                              className="text-[22px] text-midnight transition-colors duration-300 group-hover:text-accent"
                            />
                          </div>
                        ) : null}
                        <h3 className="mb-2 text-[17px] font-bold tracking-tight text-midnight">
                          {item.title}
                        </h3>
                        <p className="text-[14px] leading-[1.65] text-slate-600">
                          {item.body}
                        </p>
                        {item.href ? (
                          <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent">
                            Read more
                            <MaterialSymbol
                              name="arrow_forward"
                              className="text-[15px] transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </span>
                        ) : null}
                      </>
                    );

                    return (
                      <Reveal key={item.title} delay={i * 70} className="h-full">
                        {item.href ? (
                          <Link href={item.href} className={`h-full ${hoverShell(true)}`}>
                            {inner}
                          </Link>
                        ) : (
                          <div className={`h-full ${hoverShell(false)}`}>{inner}</div>
                        )}
                      </Reveal>
                    );
                  })}
                </div>
              </Section>
            );

          case "steps":
            return (
              <Section
                key={blockIndex}
                tone={block.tone ?? (blockIndex % 2 === 0 ? "white" : "low")}
              >
                <BlockHeading
                  index={block.index}
                  eyebrow={block.eyebrow}
                  heading={block.heading}
                  intro={block.intro}
                />
                <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {block.items.map((item, i) => (
                    <Reveal as="li" key={item.title} delay={i * 60}>
                      <div className="group h-full rounded-xl border border-border-subtle bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
                        <span className="numeral inline-flex h-9 w-9 items-center justify-center rounded-md bg-midnight text-[13px] font-bold text-white transition-colors duration-300 group-hover:bg-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-4 text-[16px] font-bold tracking-tight text-midnight">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-[1.65] text-slate-600">
                          {item.body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </Section>
            );

          case "matrix":
            return (
              <Section
                key={blockIndex}
                tone={block.tone ?? (blockIndex % 2 === 0 ? "white" : "low")}
              >
                <BlockHeading
                  index={block.index}
                  eyebrow={block.eyebrow}
                  heading={block.heading}
                  intro={block.intro}
                />
                <Reveal>
                  <ComparisonMatrix
                    columns={block.columns}
                    rows={block.rows.map((row) => ({
                      label: row.label,
                      note: row.note,
                      values: row.values.map(normalise),
                    }))}
                    highlightColumn={block.highlightColumn}
                    highlightBadge={block.highlightBadge}
                    cornerLabel={block.cornerLabel}
                    footnote={block.footnote}
                  />
                </Reveal>
              </Section>
            );

          case "faq":
            return (
              <Section
                key={blockIndex}
                tone={block.tone ?? (blockIndex % 2 === 0 ? "white" : "low")}
              >
                <BlockHeading
                  index={block.index}
                  eyebrow={block.eyebrow}
                  heading={block.heading}
                  intro={block.intro}
                  centered
                />
                <div className="mx-auto max-w-3xl space-y-10">
                  {block.groups.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-4 text-[12px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        {group.title}
                      </h3>
                      <div className="space-y-3">
                        {group.items.map((item, i) => (
                          <Reveal key={item.q} delay={i * 40}>
                            <details className="group rounded-xl border border-border-subtle bg-white px-5 py-4 transition-all duration-300 open:shadow-sm hover:border-slate-300">
                              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-midnight marker:hidden">
                                <span>{item.q}</span>
                                <MaterialSymbol
                                  name="expand_more"
                                  className="shrink-0 text-[20px] text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-accent"
                                />
                              </summary>
                              <p className="mt-3 text-[14px] leading-[1.7] text-slate-600">
                                {item.a}
                              </p>
                            </details>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            );

          case "stats":
            return (
              <Section
                key={blockIndex}
                tone={block.tone ?? (blockIndex % 2 === 0 ? "white" : "low")}
                size="sm"
              >
                <BlockHeading
                  index={block.index}
                  eyebrow={block.eyebrow}
                  heading={block.heading}
                  intro={block.intro}
                  centered
                />
                <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                  {block.items.map((item, i) => (
                    <Reveal key={item.label} delay={i * 70}>
                      <div className="group h-full rounded-xl border border-border-subtle bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
                        <dd className="numeral text-[24px] font-bold tracking-tight text-midnight sm:text-[28px]">
                          {item.value}
                        </dd>
                        <dt className="mt-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                          {item.label}
                        </dt>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </Section>
            );

          case "cta":
            return (
              <CtaBand
                key={blockIndex}
                eyebrow={block.eyebrow}
                heading={block.heading}
                body={block.body}
                primary={block.primary}
                secondary={block.secondary}
                note={block.note}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
