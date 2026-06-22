import type { Recommendation } from "@/lib/data/buildings/types";

type Props = {
    recommendations: Recommendation[];
};

export default function RecommendationsCard({ recommendations }: Props) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h2 className="mb-4 font-[var(--font-body)] text-base font-semibold text-[#F0EEFC]">
                Recommendations
            </h2>
            <div className="flex flex-col gap-3">
                {recommendations.map((rec, i) => (
                    <RecommendationItem key={i} rec={rec} />
                ))}
            </div>
        </div>
    );
}

function RecommendationItem({ rec }: { rec: Recommendation }) {
    const isPriority = rec.type === "priority";
    return (
        <div
            className={
                isPriority
                    ? "rounded-xl border border-red-400/25 bg-red-500/[0.08] p-4"
                    : "rounded-xl border border-white/10 bg-white/[0.03] p-4"
            }
        >
            <span
                className={`mb-2 inline-block font-[var(--font-techy)] text-[10px] font-semibold uppercase tracking-[0.8px] ${isPriority ? "text-red-400" : "text-[#7E63E8]"}`}
            >
                {rec.label}
            </span>
            <p className="font-[var(--font-body)] text-[12.5px] leading-[1.65] text-[#D5D2F7]">
                {rec.body}
            </p>
        </div>
    );
}
