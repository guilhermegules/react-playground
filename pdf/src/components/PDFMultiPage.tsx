import { Document, Page, Text } from "@react-pdf/renderer";

const longList = Array.from({ length: 200 }, (_, i) => `Item ${i}`);

export default function PDFMultiPage() {
  return (
    <Document>
      <Page>
        {longList.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Page>
    </Document>
  );
}
