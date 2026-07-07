import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardTopbarSkeleton() {
    return (
        <header className="sticky top-0 z-40 flex items-center gap-[18px] border-b border-white/10 bg-[#0b071c]/70 px-6 py-[13px] backdrop-blur-md">
            <Skeleton className="h-[25px] w-[170px] bg-white/10" />
            <Skeleton className="h-[13px] w-[220px] bg-white/5" />
            <div className="flex-1" />
            <Skeleton className="h-[26px] w-[150px] rounded-full bg-white/5" />
            <Skeleton className="h-[26px] w-[170px] rounded-full bg-white/5" />
            <Skeleton className="h-[38px] w-[120px] rounded-[10px] bg-white/10" />
        </header>
    );
}
