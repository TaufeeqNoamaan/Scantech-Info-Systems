import Link from "next/link";
import { MaterialSymbol } from "@/components/icons/MaterialSymbol";

export type Crumb = { label: string; href?: string };

/**
 * Trail for interior pages. The current page is the last crumb and is rendered
 * as plain text with `aria-current="page"`.
 */
export function Breadcrumbs({ items, tone = "onDark" }: { items: Crumb[]; tone?: "onDark" | "onLight" }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={
          tone === "onDark"
            ? "flex flex-wrap items-center gap-2 text-[12px] text-slate-400"
            : "flex flex-wrap items-center gap-2 text-[12px] text-slate-500"
        }
      >
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? (
              <MaterialSymbol
                name="chevron_right"
                className="text-[15px] opacity-50"
              />
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-white focus:outline-none focus-visible:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={tone === "onDark" ? "text-slate-300" : "text-slate-700"}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
