'use client';

// PLACEHOLDER — replace this component with the real PdfExportButton
// once the pdf-export-button implementation is complete.
// Props interface and behaviour here mirror what the real button should receive.

import { useState } from 'react';
import { exportPdf } from '@/lib/export-pdf';

interface PdfExportButtonProps {
  reportRef: React.RefObject<HTMLDivElement | null>;
  buildingName: string;
}

export function PdfExportButton({ reportRef, buildingName }: PdfExportButtonProps) {
  const [generating, setGenerating] = useState(false);

  async function handleDownload() {
    if (!reportRef.current) return;
    setGenerating(true);
    await exportPdf(reportRef.current, buildingName);
    setGenerating(false);
  }

  return (
    <button
      onClick={handleDownload}
      disabled={generating}
      style={{ pointerEvents: generating ? 'none' : 'auto' }}
      className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
    >
      {generating ? 'Generating...' : 'Download PDF'}
    </button>
  );
}
