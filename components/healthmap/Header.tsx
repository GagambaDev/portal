import Legend from "@/components/healthmap/Legend";
import { Dispatch, SetStateAction } from "react";
import ExportButton from "@/components/healthmap/ExportButton";

const building = {
  facade: "West Facade",
  floors: 18,
  panels: 10,
};

interface HeaderProps {
  activeFilters: Set<string>,
  setActiveFilters: Dispatch<SetStateAction<Set<string>>>
}

export default function Header({activeFilters, setActiveFilters}: HeaderProps) {
  return(
    <div>
      <div className="flex items-start justify-between">
        <div>
          <h2>Facade Health Map</h2>
          <p className="text-sm text-zinc-500">
            {building.facade} · {building.floors} floors · {building.panels} panels per floor · click any panel
          </p>
        </div>
        <ExportButton/>
      </div>
      <Legend activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
    </div>
  );
}