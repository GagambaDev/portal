// GAGAMBA DESIGN TOKENS
// single source for all colours, shadows, and radius values

export const STATUS = {
  clean: {
    label: "Clean",
    fill: "#3FA66A",
    edge: "#74D89A",
    tint: "#8FE8B0",
    soft: "rgba(63,166,106,.16)",
    pf: "#DCEFD7",   // print fill (light paper report)
    pt: "#2E7D32",   // print text
  },
  dirty: {
    label: "Dirty",
    fill: "#D49A33",
    edge: "#F2C463",
    tint: "#F4CE7A",
    soft: "rgba(212,154,51,.16)",
    pf: "#FBE7C6",
    pt: "#9A5E16",
  },
  critical: {
    label: "Critical",
    fill: "#D8534C",
    edge: "#FF867C",
    tint: "#FF9A90",
    soft: "rgba(216,83,76,.16)",
    pf: "#F7D2D0",
    pt: "#B23B36",
  },
  crack: {
    label: "Crack",
    fill: "#6E4FD0",
    edge: "#A98BF0",
    tint: "#BCA4F6",
    soft: "rgba(110,79,208,.18)",
    pf: "#E4DCF4",
    pt: "#5B3FD4",
  },
  paint: {
    label: "Paint",
    fill: "#2F8FD6",
    edge: "#5FC2FF",
    tint: "#7CCAFF",
    soft: "rgba(47,143,214,.16)",
    pf: "#CFE4F6",
    pt: "#246FA8",
  },
} as const;

export type StatusKey = keyof typeof STATUS;

export const STATUS_ORDER: StatusKey[] = [
  "clean",
  "dirty",
  "critical",
  "crack",
  "paint",
];

//maps condClass string to its display colour (dark-theme text)
export const condColor = (
  cc: "good" | "attn" | "action" | "crit" | string
): string =>
  ({
    good: "#8FE8B0",
    attn: "#F4CE7A",
    action: "#FF9A90",
    crit: "#FF867C",
  }[cc] ?? "var(--text)");

//reccomended description for each window type
export const RECS: Record<StatusKey, string> = {
  clean:
    "Surface within nominal range. No action required: continue standard cleaning rotation.",
  dirty:
    "Mineral deposits and dust buildup detected via thermal differential: schedule a standard cleaning pass.",
  critical:
    "Severe contamination or structural concern, possible sealant failure with moisture ingress: recommend on-site inspection within 48 hours.",
  crack:
    "Hairline crack signature detected in glazing or sealant: monitor and schedule sealant review at next service window.",
  paint:
    "Coating wear / discoloration detected: flag for re-coat assessment.",
};