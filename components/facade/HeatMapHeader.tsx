import FacadeLegend from "@/components/facade/FacadeLegend";
import { Download } from "lucide-react";

const DownloadIcon = <Download size={16}/>;

const building = {
  facade: "West Facade",
  floors: 18,
  panels: 10,
};

export default function HeatMapHeader() {
  return(
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2>Facade Health Map</h2>
          <p className="text-sm text-zinc-500">
            {building.facade} · {building.floors} floors · {building.panels} panels per floor · click any panel
          </p>
        </div>
        <button className="flex items-center gap-2 text-xs font-bold border border-white/20 rounded-[8px] px-3 py-1.5 bg-black/20">
          {DownloadIcon} Export PDF Report
        </button>
      </div>
      <FacadeLegend/>
    </div>
  );
}