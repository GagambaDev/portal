import { Skeleton } from "@/components/ui/skeleton";

export default function FacadeMapCardSkeleton() {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04]">
            <div className="flex items-start justify-between gap-4 px-5 pt-5">
                <div>
                    <Skeleton className="h-6 w-[200px] bg-white/10" />
                    <Skeleton className="mt-2 h-[13px] w-[280px] bg-white/5" />
                </div>
                <Skeleton className="h-[38px] w-[170px] rounded-xl bg-white/5" />
            </div>

            <div className="flex flex-wrap items-center gap-2 px-5 pt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-[26px] w-[90px] rounded-full bg-white/5" />
                ))}
            </div>

            <div className="px-5 py-5">
                <div className="rounded-xl border border-white/10 bg-[rgba(9,6,26,0.45)] p-3">
                    <div className="space-y-1.5">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="grid grid-cols-[26px_1fr] items-center gap-2">
                                <Skeleton className="h-[10px] w-4 justify-self-end bg-white/5" />
                                <Skeleton className="h-[18px] w-full rounded-[4px] bg-white/5" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
