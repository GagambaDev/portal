/* dimmed overlay opopup window, everything behind it darkens and
a focused window appears in the middle. appears when a panel is clicked
on the facade heat map & when build report is clicked */

"use client";

import React, { useEffect, useRef } from "react";


interface ScrimProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Scrim({ show, onClose, children }: ScrimProps) {
  useEffect(() => {
    if (!show) return;
    // esc closes it, and lock page scroll while it's open
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      // clicking the dark area (not the modal) closes it
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[80] bg-[rgba(5,3,15,0.66)] backdrop-blur-[4px] grid place-items-center p-6 animate-[fadeIn_0.2s_ease]"
    >
      {children}
    </div>
  );
}


interface ModalProps {
  wide?: boolean;
  onClose: () => void;
  "aria-label"?: string;
  children: React.ReactNode;
}

export function Modal({ wide, onClose, "aria-label": ariaLabel, children }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // remember what was focused before, drop focus into the modal, restore it on close
  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    const focusables = ref.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusables?.[0]?.focus();
    return () => previousFocus.current?.focus();
  }, []);

  // keep tab from escaping the modal, loop back around at the ends
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusables = ref.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables?.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onKeyDown={onKeyDown}
      className={`w-full ${wide ? "max-w-[760px]" : "max-w-[460px]"} max-h-[90vh] flex flex-col bg-gradient-to-b from-[#1B1147] to-[#140C36] border border-[var(--line-2)] rounded-[18px] shadow-[var(--shadow-lg)] overflow-hidden animate-[slideIn_0.22s_cubic-bezier(0.2,0.8,0.2,1)]`}
    >
      {children}
    </div>
  );
}

/* sub components */
Modal.Head = function ModalHead({
  title, eyebrow, onClose,
}: { title: string; eyebrow?: string; onClose: () => void }) {
  return (
    <div className="px-[22px] py-[18px] border-b border-[var(--line)] flex justify-between items-start gap-3.5 shrink-0">
      <div>
        {eyebrow && (
          <span className="block font-grotesk text-[10.5px] font-semibold tracking-[0.7px] uppercase text-[var(--muted)] mb-1">
            {eyebrow}
          </span>
        )}
        <h3 className="m-0 font-syne font-bold text-[18px] text-[var(--ink)] -tracking-[0.2px]">
          {title}
        </h3>
      </div>
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="w-[30px] h-[30px] rounded-[8px] grid place-items-center text-[var(--muted)] border border-[var(--line-2)] text-[13px] shrink-0 hover:bg-white/[0.06] hover:text-[var(--ink)] transition"
      >
        ✕
      </button>
    </div>
  );
};

Modal.Body = function ModalBody({ children }: { children: React.ReactNode }) {
  return <div className="px-[22px] py-5 overflow-auto flex-1">{children}</div>;
};

Modal.Foot = function ModalFoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[22px] py-[15px] border-t border-[var(--line)] flex gap-2.5 justify-end flex-wrap bg-[rgba(9,6,26,0.4)] shrink-0">
      {children}
    </div>
  );
};