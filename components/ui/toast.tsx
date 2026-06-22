/* small notification messages that pop up at the bottom of
the screen and auto dismiss after a few secs */

"use client";

import React, { createContext, useCallback, useContext, useRef, useState } from "react";

interface ToastItem {
  id: number;
  message: string;
  color: string;
}

const ToastContext = createContext<((message: string, color?: string) => void) | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const counter = useRef(0);

  const toast = useCallback((message: string, color = "var(--violet-lt)") => {
    const id = ++counter.current;
    setToasts((prev) => [...prev, { id, message, color }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2600);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2.5 pointer-events-none"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="bg-[#1B1147] border border-[var(--violet-line)] text-[var(--text)] px-[18px] py-[11px] rounded-[11px] text-[13.5px] shadow-[var(--shadow-lg)] flex items-center gap-2.5 whitespace-nowrap animate-[rise_0.3s_ease]"
          >
            <span className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: t.color }} aria-hidden="true" />
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const toast = useContext(ToastContext);
  if (!toast) throw new Error("useToast must be used inside <ToastProvider>");
  return toast;
}