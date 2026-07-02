const STATUS_COLOR: Record<string, {fill: string, edge: string}> = {
  clean:    { fill: '#3FA66A', edge: '#74D89A' },
  dirty:    { fill: '#D49A33', edge: '#F2C463' },
  critical: { fill: '#D8534C', edge: '#FF867C' },
  crack:    { fill: '#6E4FD0', edge: '#A98BF0' },
  paint:    { fill: '#2F8FD6', edge: '#5FC2FF' },
};

const CELL_STATUS = 'paint';

export default function FacadeCell(){
  const {fill, edge} = STATUS_COLOR[CELL_STATUS];

  return(
    <div
      className="rounded-[4px]"
      style={{
        height: '18px',
        width: '40px',
        background: fill,
        border: `1px solid ${edge}`
      }}
    />
  )
}
