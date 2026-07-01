const LEGEND_ITEMS = [
  { label: 'Clean', color: '#74D89A' },
  { label: 'Dirty', color: '#F2C463' },
  { label: 'Critical', color: '#FF867C' },
  { label: 'Crack', color: '#A98BF0' }, 
  { label: 'Paint', color:'#5FC2FF' },
];

export default function FacadeLegend() {
  return (
    <div className="flex gap-2 flex-wrap">
      {LEGEND_ITEMS.map((item) => (
        <div 
          key={item.label}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white-10 bg-white-5" 
        >
          <span
            className="w-2.5 h-2.5 rounded-[3.5px] flex-shrink-0"
            style={{ background: item.color}}
          />
          <span className="text-xs font-bold text-white-80">{item.label}</span>
        </div>
      ))}
    </div>
  );
}