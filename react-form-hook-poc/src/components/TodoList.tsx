import React from "react";
import { useTodo } from "../hooks/useTodo";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

interface ITodoListProps {}

const TodoList: React.FC<ITodoListProps> = (props) => {
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
