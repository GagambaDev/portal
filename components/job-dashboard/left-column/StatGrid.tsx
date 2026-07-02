type Props = {
    panelsClean: number;
    needsClean: number;
    critical: number;
    paintIssues: number;
};

const stats = [
    { key: "panelsClean", label: "Panels Clean", colorClass: "text-[#8FE8B0]" },
    { key: "needsClean", label: "Need Clean", colorClass: "text-[#F4CE7A]" },
    { key: "critical", label: "Critical", colorClass: "text-[#FF9A90]" },
    { key: "paintIssues", label: "Paint Issues", colorClass: "text-[#7CCAFF]" },
] as const;

export default function StatGrid({
    panelsClean,
    needsClean,
    critical,
    paintIssues,
}: Props) {
    const values = {
        panelsClean,
        needsClean,
        critical,
        paintIssues,
    };

    return (
        <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
                <div
                    key={stat.key}
                    className="rounded-xl border border-white/10 bg-gradient-to-b from-[rgba(42,27,96,0.5)] to-[rgba(21,12,52,0.55)] px-3.5 py-3"
                >
                    <div
                        className={`font-[var(--font-techy)] text-2xl font-bold leading-none ${stat.colorClass}`}
                    >
                        {values[stat.key]}
                    </div>

                    <div className="mt-1.5 font-[var(--font-techy)] text-[10.5px] font-semibold uppercase tracking-[0.7px] text-[#9B95C4]">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
