"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { ReportConfigModal } from "./ReportConfigModal";

export function HomeReportWorkspace() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Build Report</Button>
      <ReportConfigModal open={open} onOpenChange={setOpen} />
    </div>
  );
}
