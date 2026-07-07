import { Skeleton } from "@/components/ui/skeleton";

type Props = {
    rows: number;
};

export default function ListCardSkeleton({ rows }: Props) {
    return (
        <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <Skeleton className="mb-4 h-4 w-[140px] bg-white/10" />
            <div className="flex flex-col gap-3">
                {Array.from({ length: rows }).map((_, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                        <Skeleton className="mb-2 h-[10px] w-20 bg-white/10" />
                        <Skeleton className="h-[12.5px] w-full bg-white/5" />
                    </div>
                ))}
            </div>
        </div>
    );
}
