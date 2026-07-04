export type Recommendation = {
    type: "priority" | "info";
    label: string;
    body: string;
};

export type WaterEfficiency = {
    usedL: number;
    capacityL: number;
    vsPressureMultiplier: number;
};

export type FlightEventStatus = "complete" | "active" | "warning" | "critical";

export type FlightEvent = {
    status: FlightEventStatus;
    title: string;
    subtitle: string;
    time: string;
};

export type Floor = {
    code: string;
    issues: number;
    percent: number;
};

export type Building = {
    id: string;
    name: string;
    location: string;
    healthScore: number;
    panelsClean: number;
    needsClean: number;
    critical: number;
    paintIssues: number;
    facadeLabel: string;
    panelsPerFloor: number;
    floors: Floor[];
    recommendations: Recommendation[];
    waterEfficiency: WaterEfficiency;
    flightEvents: FlightEvent[];
};
