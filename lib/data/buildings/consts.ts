import type { Building } from "./types";

export const BUILDINGS: Record<string, Building> = {
    "mgm": {
        id: "mgm",
        name: "MGM Grand Las Vegas",
        location: "North Tower",
        healthScore: 73,
        panelsClean: 177,
        needsClean: 36,
        critical: 16,
        paintIssues: 5,
        recommendations: [
            {
                type: "priority",
                label: "Priority Action",
                body: "Floor 18, Panels 4–6 flagged as critical. Possible sealant failure with moisture ingress detected via thermal delta of +7.2°C. Recommend structural inspection within 48 hours.",
            },
        ],
        waterEfficiency: {
            usedL: 11.2,
            capacityL: 12,
            vsPressureMultiplier: 30,
        },
        flightEvents: [
            {
                status: "complete",
                title: "Pre-flight scan complete",
                subtitle: "Wind: Beaufort 3 · Temp: 68°F",
                time: "06:18 AM",
            },
            {
                status: "active",
                title: "Cleaning pass initiated",
                subtitle: "North Facade · Floor 20 → Floor 1",
                time: "06:22 AM",
            },
            {
                status: "warning",
                title: "Anomaly detected",
                subtitle: "Floor 18 · Panel 4 · Thermal spike",
                time: "06:31 AM",
            },
            {
                status: "critical",
                title: "Critical flag raised",
                subtitle: "Possible sealant failure · Logged",
                time: "06:31 AM",
            },
        ],
    },
};
