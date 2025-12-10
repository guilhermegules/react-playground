import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function exportHTMLToPDF() {
  const content = document.getElementById("pdf-content");

  if (!content) return;

  const canvas = await html2canvas(content);
  const img = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  pdf.addImage(img, "PNG", 0, 0, 210, 0);
  pdf.save("export.pdf");
}
