import React from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useTodo } from "@hooks/useTodo";

const TodoList: React.FC = () => {
  const { todos } = useTodo();

  return (
    <>
      <TodoForm />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
