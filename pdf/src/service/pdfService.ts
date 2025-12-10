import { pdf, type DocumentProps } from "@react-pdf/renderer";
import type { ReactElement } from "react";

export const pdfService = {
  generate: async (component: ReactElement<DocumentProps>) => {
    const blob = await pdf(component).toBlob();
    return URL.createObjectURL(blob);
  },
};
