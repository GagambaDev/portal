import Link from "next/link";
import { Button } from "@/components/ui/button";

type DashboardTopbarProps = {
    buildingName: string;
    buildingLocation: string;
};

export default function DashboardTopbar({
    buildingName,
    buildingLocation,
}: DashboardTopbarProps) {
    return (
        <header className="sticky top-0 z-40 flex items-center gap-[18px] border-b border-white/10 bg-[#0b071c]/70 px-6 py-[13px] backdrop-blur-md max-[820px]:flex-wrap max-[820px]:gap-2.5">
            {/* Brand */}
            <div className="flex cursor-pointer items-center gap-[9px]">
                <span className="inline-block scale-x-105 font-[var(--font-header)] text-[25px] font-extrabold tracking-[1.6px] text-[#F0EEFC]">
                    GAGAMBA
                </span>
                <span className="font-light text-[#736C9E]">/</span>
                <span className="font-[var(--font-body)] text-sm font-semibold text-[#D5D2F7]">
                    Client Portal
                </span>
            </div>

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[13px] text-[#9B95C4] max-[820px]:order-1 max-[820px]:w-full">
                <Link href="/portfolio" className="hover:text-[#F0EEFC]">
                    Portfolio
                </Link>
                <span>/</span>
                <span className="font-[var(--font-body)] font-semibold text-[#F0EEFC]">{buildingName}</span>
                <span className="font-[var(--font-body)] text-[#736C9E]">· {buildingLocation}</span>
            </nav>

            <div className="flex-1" />

            {/* Pills */}
            <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/15 px-3 py-1 font-[var(--font-techy)] text-[11px] font-semibold tracking-[0.6px] text-green-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    MISSION COMPLETE
                </span>

                <span className="inline-flex items-center rounded-full border border-[#5B3FD4]/40 bg-[#5B3FD4]/15 px-3 py-1 font-[var(--font-techy)] text-[11px] font-semibold tracking-[0.6px] text-[#7E63E8]">
                    POST-FLIGHT REPORT
                </span>

                <Button className="h-auto rounded-[10px] bg-[#5B3FD4] px-[15px] py-[9px] font-[var(--font-techy)] text-[13.5px] font-semibold text-white hover:bg-[#6A4DE0]">
                    ↓ Build Report
                </Button>
            </div>
        </header>
    );
}