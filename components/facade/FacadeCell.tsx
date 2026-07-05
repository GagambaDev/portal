const STATUS_COLOR: Record<string, {fill: string, edge: string}> = {
  clean:    { fill: '#3FA66A', edge: '#74D89A' },
  dirty:    { fill: '#D49A33', edge: '#F2C463' },
  critical: { fill: '#D8534C', edge: '#FF867C' },
  crack:    { fill: '#6E4FD0', edge: '#A98BF0' },
  paint:    { fill: '#2F8FD6', edge: '#5FC2FF' },
};

interface FacadeCellProps {
  STATUS: string,
};

export default function FacadeCell({STATUS}: FacadeCellProps){
  const {fill, edge} = STATUS_COLOR[STATUS];

  return(
    <div
      className="rounded-[4px] cursor-pointer transition-all duration-150 hover:brightness-125 hover:scale-110"
      style={{
        height: '18px',
        width: '40px',
        background: fill,
        border: `1px solid ${edge}`
      }}
    />
  )
}
