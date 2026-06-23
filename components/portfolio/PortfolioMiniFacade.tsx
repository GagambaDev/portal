/**
 * This handles the mini facade component of the property card. It displays
 * the entire facade preview. 
 */

import {
  getFacadePanelStatus,
  getFacadePreviewColumns,
  getFacadePreviewRows,
} from "@/lib/facade";
import {
  PANEL_COLOR_CRITICAL,
  PANEL_COLOR_DIRTY,
  PANEL_COLOR_GOOD,
  PANEL_STATUS_CRITICAL,
  PANEL_STATUS_DIRTY,
  type FacadeGrid,
  type FacadePanelStatus,
} from "@/lib/types";

interface PortfolioMiniFacadeProps {
  facadeGrid: FacadeGrid;
}

function getPanelClass(status: FacadePanelStatus) {
  if (status === PANEL_STATUS_CRITICAL) {
    return PANEL_COLOR_CRITICAL;
  }

  if (status === PANEL_STATUS_DIRTY) {
    return PANEL_COLOR_DIRTY;
  }

  return PANEL_COLOR_GOOD;
}

export default function PortfolioMiniFacade({facadeGrid}: PortfolioMiniFacadeProps) {
  const rows = getFacadePreviewRows(facadeGrid);
  const columns = getFacadePreviewColumns(facadeGrid);

  return (
    <div className="pointer-events-none h-32 border-b px-5 py-4">
      <div className="grid h-full content-center gap-2">
        {rows.map((row) => (
          <div
            key={row}
            className="grid gap-1.5"
            style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
          >
            {columns.map((column) => {
              const status = getFacadePanelStatus(facadeGrid, row, column);

              return (
                <span
                  key={`${row} ${column}`}
                  className={`h-3 rounded-[2px] opacity-[0.92] ${getPanelClass(status)}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
