import { useSyncExternalStore } from "react";
import { todoStore } from "./todoStore";

export const Todo = () => {
  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot
  );

  return (
    <div>
      <button onClick={() => todoStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};
