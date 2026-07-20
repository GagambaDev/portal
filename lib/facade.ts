import {
  PANEL_STATUS_CRITICAL,
  PANEL_STATUS_GOOD,
  PANEL_STATUS_DIRTY,
  type FacadeGrid,
  type FacadePanelCoordinate,
  type FacadePanelStatus,
  type PortfolioPanelStats,
} from "@/lib/types";

const FACADE_PREVIEW_ROW_COUNT = 5;
const FACADE_PREVIEW_COLUMN_COUNT = 10;

interface CreateFacadeGridOptions {
  rows: number;
  columns: number;
  dirtyPanels?: FacadeGrid["dirtyPanels"];
  criticalPanels?: FacadeGrid["criticalPanels"];
}

function getCoordinateKey([row, column]: FacadePanelCoordinate) {
  return `${row}:${column}`;
}

function getUniqueCoordinates(coordinates: FacadePanelCoordinate[]) {
  const seenCoordinates = new Set<string>();

  return coordinates.filter((coordinate) => {
    const key = getCoordinateKey(coordinate);

    if (seenCoordinates.has(key)) {
      return false;
    }

    seenCoordinates.add(key);
    return true;
  });
}

export function createFacadeGrid({
  rows,
  columns,
  dirtyPanels = [],
  criticalPanels = [],
}: CreateFacadeGridOptions): FacadeGrid {
  const isInBounds = ([row, column]: FacadePanelCoordinate) => {
    return row >= 0 && row < rows && column >= 0 && column < columns;
  };

  const normalizedCriticalPanels = getUniqueCoordinates(
    criticalPanels.filter(isInBounds)
  );
  const criticalCoordinates = new Set(
    normalizedCriticalPanels.map(getCoordinateKey)
  );
  const normalizedDirtyPanels = getUniqueCoordinates(
    dirtyPanels.filter(isInBounds)
  ).filter((coordinate) => !criticalCoordinates.has(getCoordinateKey(coordinate)));

  return {
    rows,
    columns,
    dirtyPanels: normalizedDirtyPanels,
    criticalPanels: normalizedCriticalPanels,
  };
}

export function getFacadePanelStats(facadeGrid: FacadeGrid): PortfolioPanelStats {
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


function getSampledIndexes(count: number, sampleCount: number): number[] {
  if (count <= 0) {
    return [];
  }

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
