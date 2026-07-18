'use client';
import { useState } from "react";
import Header from "@/components/healthmap/Header";
import Map from "@/components/healthmap/Map";

export default function HealthMapCard() {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="bg-zinc-100 border border-zinc-200 rounded-[18px] p-4 h-150 w-[600px] mb-135">
        <Header activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>
        <Map activeFilters={activeFilters}/>
      </div>
    </div>
  );
}