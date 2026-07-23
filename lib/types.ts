export interface SummaryStats {
  condition: string,
  scanned: number,
  criticals: number,
  needCleaning: number
}

export interface PanelStats {
  clean: number,
  dirty: number,
  critical: number,
  crack: number
}

export interface ExecutiveSummaryProps {
  score: number,
  summary: SummaryStats,
  panels: PanelStats
}

export interface CriticalItem {
  floor: number,
  panel: number,
  status: 'critical' | 'crack'
}

export interface CriticalTableProps {
  items: CriticalItem[]
}

export interface FloorItem {
  floor: number,
  panels: number
}

export interface FloorBreakdownProps {
  items: FloorItem[]
}

export const REPORT_STATUS_COLORS: Record <string, string> = {
  clean: '#2E7D32',
  dirty: '#9A5E16',
  critical: '#B23B36',
  crack:  '#5B3FD4',
  paint:  '#246FA8',
}