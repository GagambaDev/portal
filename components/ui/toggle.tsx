/* checkbox row with a bold title and a subtitle
   used by the report builder modal (D1) for choosing report sections
*/

"use client";

import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  title: string;
  subtitle?: string;
  className?: string;
}

export function Toggle({
  checked,
  onChange,
  title,
  subtitle,
  className = "",
}: ToggleProps) {
  //the whole row is the clickable surface, its easier to tap than just a small box
  const rowStyles = checked
    ? "border-[var(--violet)] bg-[var(--violet-soft)]"
    : "border-[var(--line-2)] hover:border-[var(--violet-lt)]";

  const boxStyles = checked
    ? "bg-[var(--violet)] border-[var(--violet)] text-white"
    : "border-[var(--line-2)] text-transparent";

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-[11px] border text-left transition-colors ${rowStyles} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`w-5 h-5 grid place-items-center rounded-md border-[1.5px] text-xs shrink-0 transition-colors ${boxStyles}`}
      >
        ✓
      </span>

      <span className="flex-1">
        <span className="block text-[13.5px] font-semibold text-[var(--ink)]">
          {title}
        </span>
        {subtitle && (
          <span className="block text-xs text-[var(--muted)] mt-0.5">
            {subtitle}
          </span>
        )}
      </span>
    </button>
  );
}