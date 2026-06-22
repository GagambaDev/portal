"use client";

// PLACEHOLDER — the visual facade grid below (panel cells, floor rows, legend) is a
// scaffold standing in for the real FacadeMap being built by another dev. Replace the
// grid markup with that component when it lands; the Dialog + PanelDetailModal wiring
// below it should be kept as-is.

import { useState } from "react";
import type { Facade, Panel, PanelStatus } from "@/lib/data/buildings/types";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PanelDetailModal from "./PanelDetailModal";

type Props = {
    facades: Facade[];
};

const CELL_STATUS: Record<
    PanelStatus,
    { soft: string; border: string }
> = {
    clean: { soft: "bg-green-500/15", border: "border-green-500/30" },
    "needs-clean": { soft: "bg-amber-500/15", border: "border-amber-500/30" },
    critical: { soft: "bg-red-500/15", border: "border-red-500/30" },
    "paint-issues": { soft: "bg-blue-500/15", border: "border-blue-500/30" },
};

export default function FacadeMap({ facades }: Props) {
    const [selectedPanel, setSelectedPanel] = useState<Panel | null>(null);
    const [selectedFacadeLabel, setSelectedFacadeLabel] = useState<string>("");

    const [flaggedIds, setFlaggedIds] = useState<Set<string>>(
        () =>
            new Set(
                facades.flatMap((f) =>
                    f.panels.filter((p) => p.flagged).map((p) => p.id)
                )
            )
    );

    const [resolvedIds, setResolvedIds] = useState<Set<string>>(() => new Set());

    function handlePanelClick(panel: Panel, facadeLabel: string) {
        setSelectedPanel(panel);
        setSelectedFacadeLabel(facadeLabel);
    }

    function handleClose() {
        setSelectedPanel(null);
    }

    function handleFlagToggle() {
        if (!selectedPanel) return;
        setFlaggedIds((prev) => {
            const next = new Set(prev);
            if (next.has(selectedPanel.id)) {
                next.delete(selectedPanel.id);
            } else {
                next.add(selectedPanel.id);
            }
            return next;
        });
    }

    function handleMarkResolved() {
        if (!selectedPanel) return;
        setResolvedIds((prev) => new Set(prev).add(selectedPanel.id));
        setSelectedPanel(null);
    }

    const effectivePanel = selectedPanel
        ? {
              ...selectedPanel,
              status: resolvedIds.has(selectedPanel.id)
                  ? ("clean" as PanelStatus)
                  : selectedPanel.status,
          }
        : null;

    return (
        <div className="flex flex-1 flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            {facades.map((facade) => (
                <div key={facade.label}>
                    <h2 className="mb-3 font-[var(--font-body)] text-base font-semibold text-[#F0EEFC]">
                        {facade.label}
                    </h2>

                    <div
                        className="grid gap-1.5"
                        style={{
                            gridTemplateColumns: `repeat(${facade.panelsPerFloor}, minmax(0, 1fr))`,
                        }}
                    >
                        {Array.from(
                            { length: facade.floors },
                            (_, floorIdx) => {
                                // floors are stored bottom-to-top in panels array
                                // render top floor first visually
                                const floorOffset =
                                    (facade.floors - 1 - floorIdx) *
                                    facade.panelsPerFloor;
                                return facade.panels
                                    .slice(
                                        floorOffset,
                                        floorOffset + facade.panelsPerFloor
                                    )
                                    .map((panel) => {
                                        const cell =
                                            CELL_STATUS[
                                                resolvedIds.has(panel.id)
                                                    ? "clean"
                                                    : panel.status
                                            ];
                                        const isFlagged = flaggedIds.has(
                                            panel.id
                                        );
                                        return (
                                            <button
                                                key={panel.id}
                                                title={`Floor ${panel.floor} / Panel ${panel.panelNumber}`}
                                                onClick={() =>
                                                    handlePanelClick(
                                                        panel,
                                                        facade.label
                                                    )
                                                }
                                                className={`relative h-8 w-full rounded-sm border transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white/50 ${cell.soft} ${cell.border}`}
                                            >
                                                {isFlagged && (
                                                    <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-amber-400" />
                                                )}
                                                <span className="sr-only">
                                                    Floor {panel.floor}, Panel{" "}
                                                    {panel.panelNumber},{" "}
                                                    {panel.status}
                                                </span>
                                            </button>
                                        );
                                    });
                            }
                        )}
                    </div>

                    {/* Legend */}
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                        {(
                            [
                                ["clean", "Clean"],
                                ["needs-clean", "Needs cleaning"],
                                ["critical", "Critical"],
                                ["paint-issues", "Paint issues"],
                            ] as [PanelStatus, string][]
                        ).map(([status, label]) => {
                            const cell = CELL_STATUS[status];
                            return (
                                <span
                                    key={status}
                                    className="flex items-center gap-1.5 font-[var(--font-body)] text-[11px] text-[#736C9E]"
                                >
                                    <span
                                        className={`inline-block h-2.5 w-2.5 rounded-sm border ${cell.soft} ${cell.border}`}
                                    />
                                    {label}
                                </span>
                            );
                        })}
                    </div>
                </div>
            ))}

            <Dialog
                open={selectedPanel !== null}
                onOpenChange={(open) => !open && handleClose()}
            >
                <DialogContent className="max-w-md gap-0 p-0 overflow-hidden bg-[#160C3E] text-[#D5D2F7] ring-white/10" showCloseButton={false}>
                    {effectivePanel && (
                        <PanelDetailModal
                            panel={effectivePanel}
                            facadeLabel={selectedFacadeLabel}
                            isFlagged={flaggedIds.has(effectivePanel.id)}
                            onFlagToggle={handleFlagToggle}
                            onMarkResolved={handleMarkResolved}
                            onClose={handleClose}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
