const STATUS_COLOR: Record<string, {fill: string, edge: string}> = {
  clean:    { fill: '#3FA66A', edge: '#74D89A' },
  dirty:    { fill: '#D49A33', edge: '#F2C463' },
  critical: { fill: '#D8534C', edge: '#FF867C' },
  crack:    { fill: '#6E4FD0', edge: '#A98BF0' },
  paint:    { fill: '#2F8FD6', edge: '#5FC2FF' },
};

interface FacadeCellProps {
  STATUS: string,
  floor?: number;
  panel?: number;
  dimmed?: boolean;
};

export default function FacadeCell({STATUS, floor, panel, dimmed = false}: FacadeCellProps){
  const {fill, edge} = STATUS_COLOR[STATUS];

  return(
    <button
      aria-label={`Floor ${floor} panel ${panel} ${STATUS}`}
      className="rounded-[4px] cursor-pointer transition-all duration-150 hover:scale-[1.14] hover:shadow-[0_0_14px_rgba(0,170,255,.5)]"
      style={{
        height: '18px',
        width: '40px',
        background: fill,
        border: `1px solid ${edge}`,
        opacity: dimmed ? 0.16 : 1,
        filter: dimmed ? 'saturate(.4)' : 'none',
      }}
    />
  )
}
