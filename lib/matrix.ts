/**
 * Shared types for the comparison matrices.
 *
 * These live in `lib/` rather than beside the component so the content modules
 * can type their data against them without importing from `components/`.
 */

export type MatrixValueState = "yes" | "no" | "partial" | "neutral";

export type MatrixValue = {
  /** The value as it should read on screen. */
  text: string;
  /**
   * Optional semantic state. When present the cell renders an icon alongside
   * the text — which is what stops an eight-row matrix reading as a wall of
   * repeated words.
   */
  state?: MatrixValueState;
};

export type MatrixRow = {
  label: string;
  /** Optional clarifier rendered beneath the row label. */
  note?: string;
  values: MatrixValue[];
};

export type Matrix = {
  /** Column headings, excluding the leading row-label column. */
  columns: string[];
  rows: MatrixRow[];
  /** Zero-based index into `columns` for the recommended option. */
  highlightColumn?: number;
  /** Badge shown on the highlighted column header. */
  highlightBadge?: string;
  /** Heading for the row-label column. */
  cornerLabel?: string;
  /** Fine print under the matrix. */
  footnote?: string;
};
