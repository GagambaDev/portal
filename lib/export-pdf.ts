import { toast } from 'sonner';

const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;

function sanitiseBuildingName(name: string): string {
  return name.replace(/[^a-zA-Z0-9]/g, '_');
}

export async function exportPdf(element: HTMLElement, buildingName: string): Promise<void> {
  const toastId = toast.loading('Generating PDF...');

  try {
    const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
      import('html2canvas'),
      import('jspdf'),
    ]);

    await document.fonts.ready;

    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
      logging: false,
      onclone: (clonedDoc) => {
        // Tailwind v4 emits oklch()/lab() color functions that html2canvas cannot
        // parse. The report element uses only inline hex styles so removing all
        // stylesheets from the clone is safe and eliminates the parse error.
        clonedDoc
          .querySelectorAll('style, link[rel="stylesheet"]')
          .forEach((el) => el.remove());

        // Also strip the Sonner toast portal so it never bleeds into the output.
        clonedDoc
          .querySelectorAll('[data-sonner-toaster]')
          .forEach((el) => el.remove());
      },
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    const imgWidthMm = A4_WIDTH_MM;
    const imgHeightMm = (canvas.height / canvas.width) * A4_WIDTH_MM;

    let yOffset = 0;
    let pageCount = 0;

    while (yOffset < imgHeightMm) {
      if (pageCount > 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, -yOffset, imgWidthMm, imgHeightMm);
      yOffset += A4_HEIGHT_MM;
      pageCount++;
    }

    const filename = `Gagamba_${sanitiseBuildingName(buildingName)}_Report.pdf`;
    pdf.save(filename);

    toast.success('PDF saved to your downloads', { id: toastId });
  } catch (err) {
    console.error('[exportPdf]', err);
    toast.error('PDF generation failed. Please try again.', { id: toastId });
  }
}
