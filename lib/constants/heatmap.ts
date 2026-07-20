export const STATUS_COLOR: Record<string, {fill: string, edge: string}> = {
  clean:    { fill: '#3FA66A', edge: '#74D89A' },
  dirty:    { fill: '#D49A33', edge: '#F2C463' },
  critical: { fill: '#D8534C', edge: '#FF867C' },
  crack:    { fill: '#6E4FD0', edge: '#A98BF0' },
  paint:    { fill: '#2F8FD6', edge: '#5FC2FF' },
};

export const LEGEND_ITEMS = [
  { label: 'Clean', color: '#3FA66A', status: 'clean' },
  { label: 'Dirty', color: '#D49A33', status: 'dirty' },
  { label: 'Critical', color: '#D8534C', status: 'critical' },
  { label: 'Crack', color: '#6E4FD0', status: 'crack' }, 
  { label: 'Paint', color:'#2F8FD6', status: 'paint' },
];

export const STATUS_MODAL_COLORS: Record<string, {color: string, label: string}> = {
  clean:    { color: '#3FA66A', label: 'Clean' },
  dirty:    { color: '#D49A33', label: 'Dirty' },
  critical: { color: '#D8534C', label: 'Critical' },
  crack:    { color: '#6E4FD0', label: 'Crack' },
  paint:    { color: '#2F8FD6', label: 'Paint' },
}