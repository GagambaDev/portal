import { Skeleton } from "@/components/ui/skeleton";

export default function SummaryCardSkeleton() {
    return (
        <div className="rounded-xl border border-l-4 border-white/10 bg-white/[0.04] px-4 py-3.5">
            <Skeleton className="h-[11px] w-[140px] bg-white/10" />
            <Skeleton className="mt-2 h-[30px] w-12 bg-white/10" />
            <Skeleton className="mt-2 h-[12.5px] w-full bg-white/5" />
            <Skeleton className="mt-1 h-[12.5px] w-3/4 bg-white/5" />
        </div>
    );
}
