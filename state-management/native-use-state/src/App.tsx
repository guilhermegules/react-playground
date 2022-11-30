import { useState } from "react";
import "./App.css";

const NameList = () => {
  const [names, setNames] = useState(["John", "Maria"]);
  const [name, setName] = useState("");

  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setNames([...names, name]);
          setName("");
        }}
      >
        Add name
      </button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((counter) => counter + 1)}>
      Counter: {count}
    </button>
  );
};

function App() {
  return (
    <div className="App">
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
