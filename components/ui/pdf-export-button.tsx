<<<<<<< HEAD
"use client"

import { useState, useRef, RefObject } from "react"
import { Button } from "@/components/ui/button"
import { exportPDF } from "@/lib/export-pdf"
import { toast } from "sonner"

interface PDFExportButtonProps {
    
    targetRef: RefObject<HTMLElement>
    buildingName: string
}
export default function PDFExportButton({
    target 

}:

)