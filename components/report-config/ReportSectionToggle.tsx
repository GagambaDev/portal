"use client";

import type { ReportSection } from "@/lib/report-config-data";

type ReportSectionToggleProps = {
  checked: boolean;
  section: ReportSection;
  onChange: (id: string, checked: boolean) => void;
};

export function ReportSectionToggle({
  checked,
  section,
  onChange,
}: ReportSectionToggleProps) {
  return (
    <label
      className={`mt-2 flex gap-3 rounded-lg border p-3 ${
        checked ? "border-[#724ce8] bg-[#22194a]" : "border-[#3d3163]"
      }`}
    >
      <span
        className={`grid size-[18px] place-items-center rounded border text-xs font-bold ${
          checked
            ? "border-[#724ce8] bg-[#724ce8] text-white"
            : "border-[#6b5ba2] bg-transparent"
        }`}
      >
        {checked ? "✓" : ""}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(event) => onChange(section.id, event.target.checked)}
      />
      <span>
        <strong className="block">{section.title}</strong>
        <small className="block text-[#aaa0c8]">{section.subtitle}</small>
      </span>
    </label>
  );
}
