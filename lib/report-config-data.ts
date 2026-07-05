export type ReportSection = {
  id: string;
  title: string;
  subtitle: string;
};

export const reportSections: ReportSection[] = [
  {
    id: "executive-summary",
    title: "Executive summary",
    subtitle: "Health score, condition, headline counts",
  },
  {
    id: "critical-cleaning",
    title: "Critical and cleaning items",
    subtitle: "Per-panel table of flagged surfaces",
  },
  {
    id: "floor-breakdown",
    title: "Floor-by-floor breakdown",
    subtitle: "Issue distribution across every floor",
  },
  {
    id: "sustainability",
    title: "Sustainability metrics",
    subtitle: "Water and efficiency vs. traditional crews",
  },
];

export const recipients = [
  "Building Manager",
  "Facilities Operations",
  "Property Owner",
  "Compliance Officer",
];
