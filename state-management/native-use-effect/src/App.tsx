import { useEffect, useState } from "react";
import "./App.css";

interface NameDetails {
  id: number;
  name: string;
}

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time}</div>;
};

function App() {
  const [names, setNames] = useState<string[]>([]);
  const [selectNameDetails, setSelectNameDetails] =
    useState<NameDetails | null>(null);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const onSelectedNameChange = (name: string) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectNameDetails(data));
  };

  return (
    <div className="App">
      {names.map((name) => (
        <button
          style={{ marginRight: "8px" }}
          key={name}
          onClick={() => onSelectedNameChange(name)}
        >
          {name}
        </button>
      ))}

      <hr />

      <div>{JSON.stringify(selectNameDetails)}</div>

      <hr />

      <StopWatch />
    </div>
  );
}

export default App;
