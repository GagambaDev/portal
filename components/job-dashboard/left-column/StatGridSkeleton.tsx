import { Skeleton } from "@/components/ui/skeleton";

export default function StatGridSkeleton() {
    return (
        <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
                <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-gradient-to-b from-[rgba(42,27,96,0.5)] to-[rgba(21,12,52,0.55)] px-3.5 py-3"
                >
                    <Skeleton className="h-6 w-10 bg-white/10" />
                    <Skeleton className="mt-1.5 h-[10.5px] w-16 bg-white/5" />
                </div>
            ))}
        </div>
    );
}
