import useLocalStorage from "./useLocalStorage";

export default function LocalStorage() {
  const [state, setState] = useLocalStorage("product", "");

  function handleClick(event) {
    setState(event.target.innerText);
  }

  return (
    <div>
      <p>Product: {state}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>
  );
}
