import React from "react";

type Variant = "primary" | "ghost" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
}

const STYLES: Record<Variant, string> = {
  primary:
    "px-4 py-2 bg-[var(--violet)] text-white hover:bg-[#6A4DE0] hover:-translate-y-px hover:shadow-[0_0_0_1px_var(--sky),0_8px_26px_rgba(0,170,255,0.3)]",
  ghost:
    "px-4 py-2 text-[var(--text)] border border-[var(--line-2)] bg-white/[0.03] hover:border-[var(--sky)] hover:text-[var(--sky)] hover:shadow-[0_0_18px_rgba(0,170,255,0.16)]",
  icon:
    "w-9 h-9 grid place-items-center text-[var(--text)] border border-[var(--line-2)] bg-white/[0.03] hover:border-[var(--sky)] hover:text-[var(--sky)]",
};

export function Button({
  variant = "primary",
  loading,
  disabled,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      aria-busy={loading}
      className={`inline-flex items-center gap-2 font-semibold text-[13.5px] rounded-[10px] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${STYLES[variant]} ${className}`}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <path d="M7 1.5A5.5 5.5 0 0 1 12.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}