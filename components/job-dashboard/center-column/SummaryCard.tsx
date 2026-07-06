type SummaryType = "critical" | "needsClean";

type Props = {
    type: SummaryType;
    value: number;
};

const summaryConfig = {
    critical: {
        label: "Critical — immediate action",
        description:
            "Severe contamination or structural concern. Recommend inspection within 48 hours.",
        borderClass: "border-[#D8534C]",
        labelClass: "text-[#FF9A90]",
        valueClass: "text-[#FF9A90]",
    },
    needsClean: {
        label: "Needs cleaning",
        description:
            "Mineral deposits, dust buildup, or visible streaking detected via thermal differential.",
        borderClass: "border-[#D49A33]",
        labelClass: "text-[#F4CE7A]",
        valueClass: "text-[#F4CE7A]",
    },
} as const;

export default function SummaryCard({ type, value }: Props) {
    const config = summaryConfig[type];

    return (
        <div className={`rounded-xl border border-l-4 bg-white/[0.04] px-4 py-3.5 ${config.borderClass}`}>
            <div className={`font-[var(--font-techy)] text-[11px] font-semibold uppercase tracking-[0.7px] ${config.labelClass}`}>
                {config.label}
            </div>

            <div className={`mt-1 font-[var(--font-techy)] text-[30px] font-bold leading-none ${config.valueClass}`}>
                {value}
            </div>

            <p className="mt-2 font-[var(--font-body)] text-[12.5px] leading-[1.5] text-[#9B95C4]">
                {config.description}
            </p>
        </div>
    );
}
