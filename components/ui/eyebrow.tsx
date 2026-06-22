import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`block font-grotesk text-[11px] font-semibold tracking-[1.4px] uppercase text-[var(--muted)] ${className}`}
    >
      {children}
    </span>
  );
}