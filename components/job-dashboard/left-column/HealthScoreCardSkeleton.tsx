import { Skeleton } from "@/components/ui/skeleton";

export default function HealthScoreCardSkeleton() {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-[18px] pb-[22px] pt-5 text-center">
            <Skeleton className="mx-auto h-[11px] w-[160px] bg-white/10" />
            <Skeleton className="mx-auto mb-1 mt-2 h-[148px] w-[148px] rounded-full bg-white/5" />
            <Skeleton className="mx-auto mt-2 h-[12px] w-[110px] bg-white/5" />
            <Skeleton className="mx-auto mt-1.5 h-[18px] w-[130px] bg-white/10" />
        </div>
    );
}
