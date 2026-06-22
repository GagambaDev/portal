import React from "react";

export type CondClass = "good" | "attn" | "action" | "crit";

const LABELS: Record<CondClass, string> = {
  good:   "Good",
  attn:   "Needs Attention",
  action: "Action Required",
  crit:   "Critical",
};

const STYLES: Record<CondClass, string> = {
  good:   "bg-[rgba(63,166,106,0.16)] text-[#8FE8B0]",
  attn:   "bg-[rgba(212,154,51,0.16)] text-[#F4CE7A]",
  action: "bg-[rgba(216,83,76,0.16)] text-[#FF9A90]",
  crit:   "bg-[rgba(216,83,76,0.22)] text-[#FF867C]",
};

interface CondBadgeProps {
  condition: CondClass;
  className?: string;
}

export function CondBadge({ condition, className = "" }: CondBadgeProps) {
  return (
    <span
      className={`inline-block font-grotesk font-semibold text-xs px-2.5 py-1 rounded-full whitespace-nowrap ${STYLES[condition]} ${className}`}
    >
      {LABELS[condition]}
    </span>
  );
}