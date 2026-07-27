"use client";

import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { recipients, reportSections } from "@/lib/report-config-data";

import { ReportSectionToggle } from "./ReportSectionToggle";

type ReportConfigModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function createDefaultSections() {
  return Object.fromEntries(reportSections.map((section) => [section.id, true]));
}

export function ReportConfigModal({ open, onOpenChange }: ReportConfigModalProps) {
  const [selectedSections, setSelectedSections] = useState(createDefaultSections);

  function toggleSection(id: string, checked: boolean) {
    setSelectedSections((current) => ({ ...current, [id]: checked }));
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[760px] bg-[#140b33] p-0 text-white sm:max-w-[760px]">
        <div className="p-6">
          <DialogHeader>
            <p className="text-xs font-bold uppercase tracking-widest text-[#aaa0c8]">
              MGM Grand Las Vegas / Apr 12, 2026
            </p>
            <DialogTitle className="text-xl">Build post-flight report</DialogTitle>
          </DialogHeader>
          <div className="-mx-6 mt-5 border-t border-[#2b214d]" />

          <div className="mt-6 grid gap-4">
            <section>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#aaa0c8]">
                Sections to include
              </p>
              {reportSections.map((section) => (
                <ReportSectionToggle
                  key={section.id}
                  section={section}
                  checked={Boolean(selectedSections[section.id])}
                  onChange={toggleSection}
                />
              ))}
            </section>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#aaa0c8]">
                Send to
              </span>
              <select className="rounded-lg border border-[#3d3163] bg-[#0d0624] p-2 hover:cursor-pointer">
                {recipients.map((recipient) => (
                  <option key={recipient}>{recipient}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#aaa0c8]">
                Note for recipient (optional)
              </span>
              <textarea
                className="min-h-20 rounded-lg border border-[#3d3163] bg-[#0d0624] p-2"
                placeholder="Add context, scheduling preferences, or follow-up instructions..."
              />
            </label>
          </div>
        </div>

        <footer className="flex justify-end gap-2 border-t border-[#2b214d] p-4">
          <DialogClose asChild>
            <button className="rounded-lg border border-[#4a3d72] px-4 py-2 font-bold hover:cursor-pointer hover:bg-[#241947]">
              Cancel
            </button>
          </DialogClose>
          <button className="rounded-lg bg-[#724ce8] px-4 py-2 font-bold hover:cursor-pointer">Generate report</button>
        </footer>
      </DialogContent>
    </Dialog>
  );
}
