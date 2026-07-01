import HeatMapHeader from "@/components/facade/HeatMapHeader";

export default function HeatMapGrid() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="bg-zinc-100 border border-zinc-200 rounded-[18px] p-4 h-150 w-[650px] mb-135">
        <HeatMapHeader/>
      </div>
    </div>
  )
}