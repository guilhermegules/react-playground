import React, { useEffect, useMemo } from "react";
import { useTodo } from "../hooks/useTodo";

import { Todo } from "../interfaces/todo.interface";

interface ITodoProps {
  todo: Todo;
}

const TodoItem: React.FunctionComponent<ITodoProps> = (props) => {
  const { setTodos, todos } = useTodo();

  const isDone = useMemo(
    () => todos.find((todo) => todo.id === props.todo.id)?.done,
    [todos]
  );

  return (
    <div>
      <h2
        onClick={() => {
          setTodos((todos) =>
            todos.map((stateTodo) => {
              if (stateTodo.id === props.todo.id) {
                const done = !stateTodo.done;
                return { ...stateTodo, done };
              }

              return stateTodo;
            })
          );
        }}
        style={{
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "green" : "black",
        }}
      >
        {props.todo.text}
      </h2>
    </div>
  );
};

export default TodoItem;
