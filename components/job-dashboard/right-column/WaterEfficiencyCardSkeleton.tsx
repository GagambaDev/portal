import { Skeleton } from "@/components/ui/skeleton";

export default function WaterEfficiencyCardSkeleton() {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <Skeleton className="mb-4 h-4 w-[150px] bg-white/10" />
            <div className="mb-4 grid grid-cols-3 gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-[74px] rounded-xl bg-white/5" />
                ))}
            </div>
            <Skeleton className="h-[12px] w-full bg-white/5" />
        </div>
    );
}
