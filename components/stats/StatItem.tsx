interface StatItemProps {
  label: string;
  value: number;
  valueColor?: string;
};

export default function ({label, value, valueColor} : StatItemProps){
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-semibold tracking-widest uppercase text-[#9B95C4]">
        {label}
      </span>
      <span
        className="text-[26px] font-bold leading-none"
        style={{ color: valueColor ?? '#F0EEFC'}}  
      >
        {value}
      </span>
    </div>
  )
}