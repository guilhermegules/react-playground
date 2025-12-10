import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 24 },
  row: { flexDirection: "row", borderBottom: "1px solid #ccc" },
  cell: { width: "33%", padding: 8 },
});

const rows = [
  { name: "Guilherme", role: "Dev", age: 28 },
  { name: "John", role: "Architect", age: 35 },
  { name: "Maria", role: "Manager", age: 41 },
];

export default function PDFTable() {
  return (
    <Document>
      <Page style={styles.page}>
        {rows.map((r, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.cell}>{r.name}</Text>
            <Text style={styles.cell}>{r.role}</Text>
            <Text style={styles.cell}>{r.age}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
