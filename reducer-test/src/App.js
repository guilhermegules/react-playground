import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }]
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((item, index) =>
          index === action.index
            ? { ...item, completed: !item.completed }
            : item
        )
      };
    default:
      return state;
  }
};

const App = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();

  return (
    <div className="App">
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
      {todos.map((item, index) => (
        <div
          key={item.text}
          style={{
            textDecoration: item.completed ? "line-through" : "underline",
            color: item.completed ? "green" : "black"
          }}
          onClick={() => dispatch({ type: "TOGGLE_TODO", index })}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};
export default App;
