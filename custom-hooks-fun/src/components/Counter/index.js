import useDocumentTitle from "../../hooks/UseDocumentTitle";
import useLocalStorageState from "../../hooks/UseLocalStorageState";

const Counter = () => {
  const [counter, setCounter] = useLocalStorageState("counter", 0);
  const increment = () => setCounter(counter + 1);
  const title = `You clicked ${counter} times 🥳`;

  useDocumentTitle(title);

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
