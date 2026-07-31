'use client';
import { useState } from "react";
import MapHeader from "@/components/healthmap/MapHeader";
import Map from "@/components/healthmap/Map";

const building = {
  facade: "West Facade",
  floors: 18,
  panels: 10,
};

export default function HealthMapCard() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  return (
    <div className="grid place-items-center min-h-screen">
      <div 
        className="rounded-[18px] p-4 h-150 w-[600px] mb-135"
        style={{
          background: 'linear-gradient(180deg, rgba(42,27,96,.75), rgba(21,12,52,.82))',
          border: '1px solid rgba(213, 210, 247, .10)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'inset 0 1px 0 rgba(213,210,247,.05), 0 18px 40px rgba(5,3,15,.45)',
        }}
      >
        <MapHeader facade={building.facade} floors={building.floors} panels={building.panels} activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
        <Map floors={building.floors} panels={building.panels} activeFilters={activeFilters}/>
      </div>
    </div>
  );
}