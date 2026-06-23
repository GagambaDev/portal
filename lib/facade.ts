import {
  PANEL_STATUS_CRITICAL,
  PANEL_STATUS_GOOD,
  PANEL_STATUS_DIRTY,
  type FacadeGrid,
  type FacadePanelCoordinate,
  type FacadePanelStatus,
  type PortfolioPanelStats,
} from "@/lib/types";

// For the mini facade in the card
const FACADE_PREVIEW_ROW_COUNT = 5;
const FACADE_PREVIEW_COLUMN_COUNT = 10;

// Interface info to create the mini facade
interface CreateFacadeGridOptions {
  rows: number;
  columns: number;
  dirtyPanels?: FacadeGrid["dirtyPanels"];
  criticalPanels?: FacadeGrid["criticalPanels"];
}

export function createFacadeGrid({
  rows,
  columns,
  dirtyPanels = [],
  criticalPanels = [],
}: CreateFacadeGridOptions): FacadeGrid {
  // Only consider coordinates that could fit within the bounds
  const isInBounds = ([row, column]: FacadePanelCoordinate) => {
    return row >= 0 && row < rows && column >= 0 && column < columns;
  };

  return {
    rows,
    columns,
    dirtyPanels: dirtyPanels.filter(isInBounds),
    criticalPanels: criticalPanels.filter(isInBounds),
  };
}

export function getFacadePanelStats(facadeGrid: FacadeGrid): PortfolioPanelStats {
  // Panels are "good" by default. The entire panel count is simple length x width
  // The number of dirty/critical panels is easily retrieved by checking how many
  // there are in the array.
  return {
    panelCount: facadeGrid.rows * facadeGrid.columns,
    dirtyPanelCount: facadeGrid.dirtyPanels.length,
    criticalPanelCount: facadeGrid.criticalPanels.length,
  };
}

export function getFacadePanelStatus(
  facadeGrid: FacadeGrid,
  row: number,
  column: number
): FacadePanelStatus {
  // Anything outside the facade or not dirty/critical is good
  const rowIsInBounds = row >= 0 && row < facadeGrid.rows;
  const columnIsInBounds = column >= 0 && column < facadeGrid.columns;

  if (!rowIsInBounds || !columnIsInBounds) {
    return PANEL_STATUS_GOOD;
  }

  const panelIsCritical = facadeGrid.criticalPanels.some(
    ([panelRow, panelColumn]) => panelRow === row && panelColumn === column
  );

  if (panelIsCritical) {
    return PANEL_STATUS_CRITICAL;
  }

  const panelIsDirty = facadeGrid.dirtyPanels.some(
    ([panelRow, panelColumn]) => panelRow === row && panelColumn === column
  );

  if (panelIsDirty) {
    return PANEL_STATUS_DIRTY;
  }

  return PANEL_STATUS_GOOD;
}

// Get a sample of the total window panels. Uses that smaller sample to 
// create a general representation
function getSampledIndexes(count: number, sampleCount: number): number[] {
  // No count no sample
  if (count <= 0) {
    return [];
  }

  // If the facade is smaller than the preview limit than use every panel
  // This would likely never happen
  if (count <= sampleCount) {
    const indexes: number[] = [];

    for (let index = 0; index < count; index++) {
      indexes.push(index);
    }

    return indexes;
  }

  const lastIndex = count - 1;
  const lastSampleIndex = sampleCount - 1;
  const sampledIndexes: number[] = [];

  for (let sampleIndex = 0; sampleIndex < sampleCount; sampleIndex++) {
    // Convert the preview slot into a matching position across the entire facade/panels
    const positionRatio = sampleIndex / lastSampleIndex;
    sampledIndexes.push(Math.round(positionRatio * lastIndex));
  }

  return sampledIndexes;
}

export function getFacadePreviewRows(facadeGrid: FacadeGrid): number[] {
  return getSampledIndexes(facadeGrid.rows, FACADE_PREVIEW_ROW_COUNT);
}

export function getFacadePreviewColumns(facadeGrid: FacadeGrid): number[] {
  return getSampledIndexes(facadeGrid.columns, FACADE_PREVIEW_COLUMN_COUNT);
}
