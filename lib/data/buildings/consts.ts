import type { Building, Panel } from "./types";

function makePanel(
    floor: number,
    panelNumber: number,
    overrides: Partial<Panel> = {}
): Panel {
    const id = `f${floor}-p${panelNumber}`;
    return {
        id,
        floor,
        panelNumber,
        status: "clean",
        flagged: false,
        thermalDelta: 0.4,
        scanConfidence: 97,
        lastCleanedDays: 5,
        glazing: "Insulated · double",
        aiAssessment:
            "Panel is within normal operating parameters. No action required at this time.",
        ...overrides,
    };
}

const MGM_NORTH_PANELS: Panel[] = [
    // Floor 20 — mostly clean
    makePanel(20, 1),
    makePanel(20, 2),
    makePanel(20, 3),
    makePanel(20, 4, { status: "needs-clean", lastCleanedDays: 22, scanConfidence: 91, thermalDelta: 1.1, aiAssessment: "Surface soiling detected. Schedule cleaning within the next 7 days to prevent staining." }),
    makePanel(20, 5, { status: "needs-clean", lastCleanedDays: 22, scanConfidence: 89, thermalDelta: 1.3, aiAssessment: "Surface soiling detected. Schedule cleaning within the next 7 days to prevent staining." }),
    makePanel(20, 6),
    makePanel(20, 7),
    makePanel(20, 8),
    // Floor 19 — paint issues
    makePanel(19, 1),
    makePanel(19, 2, { status: "paint-issues", lastCleanedDays: 31, scanConfidence: 88, thermalDelta: 0.8, aiAssessment: "Minor coating degradation detected. Flag for repainting during next scheduled maintenance window." }),
    makePanel(19, 3, { status: "paint-issues", lastCleanedDays: 31, scanConfidence: 85, thermalDelta: 0.9, aiAssessment: "Minor coating degradation detected. Flag for repainting during next scheduled maintenance window." }),
    makePanel(19, 4),
    makePanel(19, 5),
    makePanel(19, 6, { status: "needs-clean", lastCleanedDays: 18, scanConfidence: 93, thermalDelta: 1.0, aiAssessment: "Moderate soiling. Recommend cleaning on next pass." }),
    makePanel(19, 7),
    makePanel(19, 8),
    // Floor 18 — panels 4–6 critical & flagged (matches recommendation card)
    makePanel(18, 1),
    makePanel(18, 2),
    makePanel(18, 3, { status: "needs-clean", lastCleanedDays: 18, scanConfidence: 90, thermalDelta: 1.5, aiAssessment: "Elevated thermal reading. Monitor closely; clean before next scan cycle." }),
    makePanel(18, 4, { status: "critical", flagged: true, thermalDelta: 7.2, scanConfidence: 94, lastCleanedDays: 18, aiAssessment: "Possible sealant failure with moisture ingress detected via thermal delta of +7.2°C. Recommend structural inspection within 48 hours." }),
    makePanel(18, 5, { status: "critical", flagged: true, thermalDelta: 6.9, scanConfidence: 92, lastCleanedDays: 18, aiAssessment: "Possible sealant failure with moisture ingress detected via thermal delta of +6.9°C. Recommend structural inspection within 48 hours." }),
    makePanel(18, 6, { status: "critical", flagged: true, thermalDelta: 5.4, scanConfidence: 91, lastCleanedDays: 18, aiAssessment: "Elevated thermal anomaly detected. Sealant integrity in question. Inspect alongside adjacent panels 4 and 5." }),
    makePanel(18, 7),
    makePanel(18, 8),
];

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
        facades: [
            {
                label: "North Facade",
                floors: 3,
                panelsPerFloor: 8,
                panels: MGM_NORTH_PANELS,
            },
        ],
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
