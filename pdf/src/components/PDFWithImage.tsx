import { Document, Page, Text, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 24 },
  img: { width: 150, height: 150, marginBottom: 20 },
});

export default function PDFWithImage() {
  return (
    <Document>
      <Page style={styles.page}>
        <Image
          style={styles.img}
          src="https://dog.ceo/api/breeds/image/random"
        />
        <Text>This PDF contains an image!</Text>
      </Page>
    </Document>
  );
}
