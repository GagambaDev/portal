import { Skeleton } from "@/components/ui/skeleton";

export default function FloorNavigatorCardSkeleton() {
    return (
        <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-4 pb-2.5 pt-4">
            <Skeleton className="mb-3 h-[11px] w-14 bg-white/10" />
            <div className="grid flex-1 grid-cols-2 gap-x-3.5 gap-y-2">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-[34px_1fr_16px] items-center gap-2.5 px-1.5 py-1.5">
                        <Skeleton className="h-3 w-6 bg-white/10" />
                        <Skeleton className="h-[7px] rounded-full bg-white/5" />
                        <Skeleton className="h-3 w-3 justify-self-end bg-white/5" />
                    </div>
                ))}
            </div>
        </div>
    );
}
