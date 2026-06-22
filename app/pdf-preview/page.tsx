'use client';

import { useRef } from 'react';
import { MockReport, BUILDING_NAME } from '@/components/report/mock-report';
import { PdfExportButton } from '@/components/ui/pdf-export-button';
import { Toaster } from '@/components/ui/sonner';

export default function PdfPreviewPage() {
  const reportRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-zinc-100 py-10">
        <div className="mx-auto mb-6 flex w-[794px] items-center justify-between">
          <p className="text-sm text-zinc-500">PDF Preview — dev only</p>
          <PdfExportButton reportRef={reportRef} buildingName={BUILDING_NAME} />
        </div>
        <div className="mx-auto w-[794px] shadow-lg">
          <MockReport ref={reportRef} />
        </div>
      </div>
    </>
  );
}
