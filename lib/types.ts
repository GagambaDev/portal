import { Dispatch, SetStateAction } from "react"

export interface CellData {
  floor: number,
  panel: number,
  status: string,
  thermalDelta: string,
  scanConfidence: number,
  lastCleaned: number,
  glazing: string,
  aiAssessment: string
}

export interface CellModalProps{
  data: CellData
  onClose: () => void 
}

export interface LegendProps {
  activeFilters: Set<string>,
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>
}

export interface ResetButtonProps{
  filtersOn: boolean,
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>
}

export interface HeaderProps {
  activeFilters: Set<string>,
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>
}

export interface CellProps {
  data: CellData,
  activeFilters: Set<string>,
  onClick: () => void
};

export interface StatusBlockProps{
  color: string,
  label: string
}

export interface CellHeaderProps {
  floor: number,
  panel: number
}

export interface AIAssessmentProps{
  assessment: string
}

export interface CellFooterButtonsProps{
  onClose: () => void,
  status: string
}
