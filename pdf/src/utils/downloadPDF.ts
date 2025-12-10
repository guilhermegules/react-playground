import type { ReactElement } from "react";
import { pdfService } from "../service/pdfService";
import type { DocumentProps } from "@react-pdf/renderer";

export async function downloadPDF(component: ReactElement<DocumentProps>) {
  const url = await pdfService.generate(component);
  const a = document.createElement("a");
  a.href = url;
  a.download = "file.pdf";
  a.click();
}
