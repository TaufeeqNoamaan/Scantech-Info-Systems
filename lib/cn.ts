/**
 * Tiny conditional class-name joiner.
 *
 * Deliberately dependency-free — `clsx` / `twMerge` would be overkill here and
 * this keeps the utility surface small and predictable.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
