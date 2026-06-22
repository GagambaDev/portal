import React from "react";

interface CardProps {
  pad?: boolean;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card({ pad, className = "", children, style }: CardProps) {
  return (
    <div
      style={style}
      className={`bg-gradient-to-b from-[rgba(42,27,96,0.55)] to-[rgba(21,12,52,0.62)] border border-[var(--line)] rounded-[var(--r)] shadow-[inset_0_1px_0_rgba(213,210,247,0.05),var(--shadow)] backdrop-blur-md ${pad ? "p-[18px]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}