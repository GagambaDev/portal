import FacadeLegend from "@/components/facade/FacadeLegend";

const building = {
  facade: "West Facade",
  floors: 18,
  panels: 10,
};

export default function HeatMapHeader() {
  return(
    <div>
      <h2>Facade Health Map</h2>
      <p className="text-sm text-zinc-500">
        {building.facade} · {building.floors} floors · {building.panels} panels per floor · click any panel
      </p>
      <FacadeLegend/>
    </div>
  );
}