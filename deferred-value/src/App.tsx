import { Suspense, useDeferredValue, useState } from "react";
import "./App.css";

function List({ query }: { query: string }) {
  const items = Array(1000)
    .fill(0)
    .map((_, i) => `Item ${i}`)
    .filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  const renderedItems = items.map((item) => {
    const start = performance.now();
    while (performance.now() - start < 1) {} // delay 1ms
    return <div key={item}>{item}</div>;
  });

  return <div>{renderedItems}</div>;
}

function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
      />
      <Suspense fallback={<p>Loading...</p>}>
        <List query={deferredQuery} />
      </Suspense>
    </>
  );
}

export default App;
