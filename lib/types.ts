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
