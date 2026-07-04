import type { Floor } from "@/lib/data/buildings/types";

type Props = {
    floors: Floor[];
};

export default function FloorNavigatorCard({ floors }: Props) {
    return (
        <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.04] px-4 pb-2.5 pt-4">
            <span className="mb-3 font-[var(--font-techy)] text-[11px] font-semibold uppercase tracking-[1.4px] text-[#9B95C4]">
                Floors
            </span>

            <div className="grid flex-1 grid-cols-2 gap-x-3.5 gap-y-2">
                {floors.map((floor) => (
                    <div
                        key={floor.code}
                        className="grid grid-cols-[34px_1fr_16px] items-center gap-2.5 rounded-lg px-1.5 py-1.5"
                    >
                        <span className="font-[var(--font-techy)] text-xs font-semibold text-[#D5D2F7]">
                            {floor.code}
                        </span>

                        <div className="h-[7px] rounded-full bg-white/10"></div>

                        <span className="text-right font-[var(--font-techy)] text-xs text-[#9B95C4]">
                            {floor.issues}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}