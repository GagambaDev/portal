"use client";

import "./dashboard.css";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="dashboard-background flex min-h-screen flex-col items-center justify-center gap-4 text-center text-[#D5D2F7]">
            <div className="dashboard-grid-overlay pointer-events-none fixed inset-0 z-0" />

            <div className="relative z-10 flex flex-col items-center gap-4">
                <h1 className="font-[var(--font-heading)] text-xl font-bold text-[#F0EEFC]">
                    Couldn&apos;t load this building&apos;s dashboard
                </h1>
                <p className="max-w-md font-[var(--font-body)] text-sm text-[#9B95C4]">
                    Something went wrong while fetching this building&apos;s data. Try again, or head back to the
                    portfolio.
                </p>

                <div className="mt-2 flex items-center gap-3">
                    <Button
                        onClick={reset}
                        className="h-auto rounded-[10px] bg-[#5B3FD4] px-[15px] py-[9px] font-[var(--font-techy)] text-[13.5px] font-semibold text-white hover:bg-[#6A4DE0]"
                    >
                        Try again
                    </Button>

                    <Link
                        href="/portfolio"
                        className="rounded-[10px] border border-white/10 bg-white/[0.03] px-[15px] py-[9px] font-[var(--font-techy)] text-[13.5px] font-semibold text-[#D5D2F7] transition-colors hover:bg-white/[0.06]"
                    >
                        Back to portfolio
                    </Link>
                </div>
            </div>
        </main>
    );
}
