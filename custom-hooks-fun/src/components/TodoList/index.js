import useArray from "../../hooks/UseArray";

import "./style.css";

const TodoList = () => {
  const todos = useArray(["React", "Is", "Awesome"]);

  return (
    <div>
      <h3>Todo List</h3>

      <button onClick={() => todos.add(Math.random())}>Add</button>

      <ul>
        {todos.value.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => todos.removeIndex(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={todos.clear}>Clear todos</button>
    </div>
  );
};

export default TodoList;
