import { useCallback, useMemo, useState } from "react";
import "./App.css";

function SortedList({
  list,
  sortFn,
}: {
  list: string[];
  sortFn: (a: string, b: string) => number;
}) {
  console.log("render");
  const sortedList = useMemo(() => {
    console.log("Running");
    return [...list].sort(sortFn);
  }, [list, sortFn]);

  return <div>{sortedList.join(", ")}</div>;
}

function App() {
  const [number, setNumber] = useState(0);

  const [numbers] = useState(Array.from({ length: 10000 }, (_, i) => i * 100));

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const sortFn = useCallback((a: string, b: string) => a.localeCompare(b), []);
  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  return (
    <div className="App">
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFn={sortFn} />
      <button onClick={() => setNumber(number + 1)}>{number}</button>
    </div>
  );
}

export default App;
