import { XIcon } from "lucide-react";
import type { Panel, PanelStatus } from "@/lib/data/buildings/types";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
    panel: Panel;
    facadeLabel: string;
    isFlagged: boolean;
    onFlagToggle: () => void;
    onMarkResolved: () => void;
    onClose: () => void;
};

const STATUS_CONFIG: Record<
    PanelStatus,
    { soft: string; border: string; text: string; swatch: string; label: string }
> = {
    clean: {
        soft: "bg-green-500/15",
        border: "border-green-500/20",
        text: "text-green-400",
        swatch: "bg-green-500",
        label: "Clean",
    },
    "needs-clean": {
        soft: "bg-amber-500/15",
        border: "border-amber-500/20",
        text: "text-amber-400",
        swatch: "bg-amber-500",
        label: "Needs Cleaning",
    },
    critical: {
        soft: "bg-red-500/15",
        border: "border-red-500/20",
        text: "text-red-400",
        swatch: "bg-red-500",
        label: "Critical",
    },
    "paint-issues": {
        soft: "bg-blue-500/15",
        border: "border-blue-500/20",
        text: "text-blue-400",
        swatch: "bg-blue-500",
        label: "Paint Issues",
    },
};

export default function PanelDetailModal({
    panel,
    facadeLabel,
    isFlagged,
    onFlagToggle,
    onMarkResolved,
    onClose,
}: Props) {
    const cfg = STATUS_CONFIG[panel.status];
    const isCritical = panel.status === "critical";

    return (
        <>
            {/* m-head */}
            <div className="flex items-start justify-between gap-4 px-5 pb-4 pt-5">
                <div>
                    <p className="font-techy text-[10px] font-semibold uppercase tracking-[0.12em] text-[#736C9E]">
                        {facadeLabel} · Panel inspector
                    </p>
                    <DialogTitle className="mt-1 font-body text-[18px] font-semibold leading-tight text-[#F0EEFC]">
                        Floor {panel.floor} · Panel {panel.panelNumber}
                    </DialogTitle>
                </div>
                <DialogClose asChild>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="shrink-0 mt-0.5"
                        onClick={onClose}
                    >
                        <XIcon />
                        <span className="sr-only">Close</span>
                    </Button>
                </DialogClose>
            </div>

            {/* m-body */}
            <div className="flex flex-col gap-4 px-5 pb-4">
                {/* status-banner */}
                <div
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 ${cfg.soft} ${cfg.border}`}
                >
                    <span className={`h-3 w-3 shrink-0 rounded-sm ${cfg.swatch}`} />
                    <span className={`font-body text-sm font-semibold ${cfg.text}`}>
                        {cfg.label}
                    </span>
                    {isFlagged && (
                        <span className="ml-auto font-body text-[11px] text-amber-400">
                            Flagged for inspection
                        </span>
                    )}
                </div>

                {/* kv grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    <KV label="Thermal delta">
                        <span className={isCritical ? "text-red-400" : "text-[#D5D2F7]"}>
                            +{panel.thermalDelta.toFixed(1)}°C
                        </span>
                    </KV>
                    <KV label="Scan confidence">{panel.scanConfidence}%</KV>
                    <KV label="Last cleaned">{panel.lastCleanedDays} days ago</KV>
                    <KV label="Glazing">{panel.glazing}</KV>
                </div>

                {/* ai-note */}
                <div className="rounded-lg border border-[#5B3FD4]/30 bg-[#5B3FD4]/15 p-4">
                    <div className="mb-2 flex items-center gap-2">
                        <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400"
                            style={{ animation: "pulse-dot 1.6s ease-in-out infinite" }}
                        />
                        <span className="font-techy text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9B95C4]">
                            Gagamba AI Assessment
                        </span>
                    </div>
                    <p className="font-body text-[13px] leading-relaxed text-[#D5D2F7]">
                        {panel.aiAssessment}
                    </p>
                </div>
            </div>

            {/* m-foot */}
            <div className="flex items-center justify-end gap-2 border-t border-white/10 px-5 py-3">
                <DialogClose asChild>
                    <Button variant="ghost" onClick={onClose}>
                        Close
                    </Button>
                </DialogClose>
                <Button variant="ghost" onClick={onFlagToggle}>
                    {isFlagged ? "Unflag" : "Flag panel"}
                </Button>
                {panel.status !== "clean" && (
                    <Button onClick={onMarkResolved}>Mark resolved</Button>
                )}
            </div>
        </>
    );
}

function KV({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-0.5">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-[#736C9E]">
                {label}
            </span>
            <span className="font-body text-[15px] font-semibold text-[#D5D2F7]">
                {children}
            </span>
        </div>
    );
}
