import type { Floor } from "@/lib/data/buildings/types";

const legendItems = [
    { label: "Clean", colorClass: "bg-[#8FE8B0]" },
    { label: "Dirty", colorClass: "bg-[#F4CE7A]" },
    { label: "Critical", colorClass: "bg-[#FF9A90]" },
    { label: "Crack", colorClass: "bg-[#BCA4F6]" },
    { label: "Paint", colorClass: "bg-[#7CCAFF]" },
] as const;

type Props = {
    facadeLabel: string;
    floors: Floor[];
    panelsPerFloor: number;
};

export default function FacadeMapCard({
    facadeLabel,
    floors,
    panelsPerFloor,
}: Props) {
    const panels = Array.from({ length: panelsPerFloor });  // for nested map

    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04]">
            <div className="flex items-start justify-between gap-4 px-5 pt-5">
                <div>
                    <h2 className="font-[var(--font-heading)] text-xl font-bold text-[#F0EEFC]">
                        Facade Health Map
                    </h2>

                    <p className="mt-1 font-[var(--font-body)] text-[13px] text-[#9B95C4]">
                        {facadeLabel} · {floors.length} floors · {panelsPerFloor} panels per floor · click any panel
                    </p>
                </div>

                <button
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2
                   font-[var(--font-body)] text-[13px] font-medium
                   text-[#D5D2F7] transition-colors hover:bg-white/[0.06]"
                >
                    ↓ Export PDF report
                </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 px-5 pt-4">
                {legendItems.map((item) => (
                    <button
                        key={item.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.03] px-2.5 py-1 font-[var(--font-techy)] text-[11px] font-semibold uppercase tracking-[0.4px] text-[#D5D2F7]"
                    >
                        <span className={`h-[9px] w-[9px] rounded-[3px] ${item.colorClass}`} />
                        {item.label}
                    </button>
                ))}

                <div className="flex-1" />

                <button className="rounded-full border border-white/20 bg-white/[0.03] px-2.5 py-1 font-[var(--font-techy)] text-[11px] font-semibold uppercase tracking-[0.4px] text-[#736C9E]">
                    Reset
                </button>
            </div>

            <div className="overflow-x-auto px-5 py-5">
                <div className="min-w-[560px] rounded-xl border border-white/10 bg-[rgba(9,6,26,0.45)] p-3">
                    <div className="space-y-1.5">
                        {floors.map((floor) => (
                            <div
                                key={floor.code}
                                className="grid grid-cols-[26px_1fr] items-center gap-2"
                            >
                                <span className="text-right font-[var(--font-techy)] text-[10px] text-[#736C9E]">
                                    {floor.code.replace("F", "")}
                                </span>

                                <div
                                    className="grid gap-[5px]"
                                    style={{
                                        gridTemplateColumns: `repeat(${panelsPerFloor}, minmax(0, 1fr))`,
                                    }}
                                >
                                    {panels.map((_, index) => (
                                        <div
                                            key={index}
                                            className="h-[18px] rounded-[4px] border border-white/10 bg-white/10"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
