import { Document, Page, Text } from "@react-pdf/renderer";
import type { PostData } from "../types";

export default function PDFApi({ data }: { data: PostData }) {
  return (
    <Document>
      <Page>
        <Text>Post Report</Text>
        <Text>Title: {data.title}</Text>
        <Text>Body: {data.body}</Text>
      </Page>
    </Document>
  );
}
