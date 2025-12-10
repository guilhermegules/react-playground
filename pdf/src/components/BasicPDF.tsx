import { Document, Page, Text } from "@react-pdf/renderer";

export default function BasicPDF() {
  return (
    <Document>
      <Page>
        <Text>Hello PDF!</Text>
      </Page>
    </Document>
  );
}
