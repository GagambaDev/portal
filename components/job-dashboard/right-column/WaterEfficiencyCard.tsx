import type { WaterEfficiency } from "@/lib/data/buildings/types";

type Props = {
    waterEfficiency: WaterEfficiency;
};

export default function WaterEfficiencyCard({ waterEfficiency }: Props) {
    const { usedL, capacityL, vsPressureMultiplier } = waterEfficiency;

    return (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h2 className="mb-4 font-[var(--font-body)] text-base font-semibold text-[#F0EEFC]">
                Water efficiency
            </h2>
            <div className="mb-4 grid grid-cols-3 gap-2">
                <StatBox value={`${usedL}L`} label="USED" />
                <StatBox value={`${capacityL}L`} label="CAPACITY" />
                <StatBox value={`${vsPressureMultiplier}×`} label="VS PRESSURE" />
            </div>
            <p className="font-[var(--font-body)] text-[12px] leading-[1.7] text-[#736C9E]">
                Reclaimed-water system uses up to {vsPressureMultiplier}× less than
                pressure-washing crews for the same coverage.
            </p>
        </div>
    );
}

function StatBox({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center gap-1.5 rounded-xl border border-sky-400/20 bg-sky-400/[0.07] px-2 py-3">
            <span className="font-[var(--font-techy)] text-xl font-bold leading-none text-sky-300">
                {value}
            </span>
            <span className="text-center font-[var(--font-techy)] text-[8.5px] font-semibold uppercase tracking-[0.6px] text-[#736C9E]">
                {label}
            </span>
        </div>
    );
}
