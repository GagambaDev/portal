"use client";

import { useState, RefObject } from "react";
import { Button } from "@/components/ui/button";
import { exportPdf } from "@/lib/export-pdf";
import { FileDown } from "lucide-react"

interface PDFExportButtonProps { 
    reportRef: RefObject<HTMLElement | null>;
    buildingName: string;
}
export function PdfExportButton({ reportRef, buildingName} : PDFExportButtonProps) {
    const [isLoading, setIsLoading] = useState(false);
    
    async function onClick() {
        {/* ref is null before the component mounts*/}
        if (!reportRef.current) return;
        setIsLoading(true);
        await exportPdf(reportRef.current, buildingName);
        setIsLoading(false);
    }
    return ( 
        <Button
            className="text-[#D5D2F7] bg-[#583FD4] hover:bg-[#583FD4] 
            hover:ring-1 hover:ring-[#00AAFF]"
            onClick={onClick} 
            disabled={isLoading}
        >
        <FileDown/>
            Download PDF
        </Button>
    );
}