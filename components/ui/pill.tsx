import React from "react";

type Variant = "ok" | "tag";

const STYLES: Record<Variant, string> = {
  ok:  "bg-[rgba(63,166,106,0.16)] text-[#8FE8B0] border-[rgba(63,166,106,0.32)]",
  tag: "bg-[var(--violet-soft)] text-[var(--violet-lt)] border-[var(--violet-line)]",
};

interface PillProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

export function Pill({ variant, children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-grotesk text-[11px] font-semibold tracking-[0.6px] px-[11px] py-[5px] rounded-full whitespace-nowrap border ${STYLES[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" aria-hidden="true" />
      {children}
    </span>
  );
}