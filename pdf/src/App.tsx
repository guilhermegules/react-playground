import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFApi from "./components/PDFApi";
import { useEffect, useState } from "react";
import type { PostData } from "./types";
import { exportHTMLToPDF } from "./utils/exportHTMLToPDF";
import BasicPDF from "./components/BasicPDF";
import PDFMultiPage from "./components/PDFMultiPage";
import PDFTable from "./components/PDFTable";
import PDFWithImage from "./components/PDFWithImage";
import { downloadPDF } from "./utils/downloadPDF";

function HtmlToPdfExample() {
  return (
    <div>
      <div id="pdf-content">
        <h1>Hello HTML {"=>"} PDF</h1>
        <p>This is exported from real HTML.</p>
      </div>

      <button onClick={exportHTMLToPDF}>Download PDF</button>
    </div>
  );
}

function App() {
  const [data, setData] = useState<PostData | null>();

  useEffect(() => {
    fetch("/api/user/1")
      .then((r) => r.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <>
      <h1>PDF with React</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data && (
          <PDFDownloadLink document={<PDFApi data={data} />} fileName="api.pdf">
            Download PDF API
          </PDFDownloadLink>
        )}
        <PDFDownloadLink document={<BasicPDF />} fileName="basic.pdf">
          Download basic PDF
        </PDFDownloadLink>
        <PDFDownloadLink document={<PDFMultiPage />}>
          Download PDF multi page
        </PDFDownloadLink>
        <PDFDownloadLink document={<PDFTable />}>
          Download PDF Table
        </PDFDownloadLink>
        <PDFDownloadLink document={<PDFWithImage />}>
          Download PDF With Image
        </PDFDownloadLink>
        <HtmlToPdfExample />
        <div>
          <button
            onClick={async () => {
              await downloadPDF(<PDFWithImage />);
            }}
          >
            Custom element download
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
