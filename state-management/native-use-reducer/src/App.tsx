import { Reducer, useReducer } from "react";
import "./App.css";

interface State {
  names: string[];
  name: string;
}

interface Action {
  type: string;
  payload: string;
}

interface FormState {
  firstName?: string;
  lastName?: string;
}

const FormField = () => {
  const [state, dispatch] = useReducer<Reducer<FormState, FormState>>(
    (state, action) => ({ ...state, ...action }),
    { firstName: "", lastName: "" }
  );

  return (
    <div>
      <input
        type="text"
        value={state.firstName}
        onChange={(e) => dispatch({ firstName: e.target.value })}
      />
      <input
        type="text"
        value={state.lastName}
        onChange={(e) => dispatch({ lastName: e.target.value })}
      />

      <p>First name: {state.firstName}</p>
      <p>Last name: {state.lastName}</p>
    </div>
  );
};

const ListNames = () => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return { ...state, names: [...state.names, state.name], name: "" };
        default:
          return state;
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD_NAME", payload: "" })}>
        Add name
      </button>
      <ul>
        {state.names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <ListNames />
      <FormField />
    </div>
  );
}

export default App;
