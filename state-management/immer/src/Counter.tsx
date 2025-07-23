import { produce } from "immer";
import { useReducer } from "react";

type State = { count: number };

type Action = { type: "increment" | "decrement" };

const reducer = produce((state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      state.count++;
      break;
    case "decrement":
      state.count--;
      break;
  }
});

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
