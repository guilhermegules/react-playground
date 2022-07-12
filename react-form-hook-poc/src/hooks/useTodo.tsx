import React, { useContext } from "react";

import { Todo } from "../interfaces/todo.interface";

type ContextState = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const initialState = {
  todos: [],
  setTodos: () => {},
};

export const TodoContext = React.createContext<ContextState>(initialState);

TodoContext.displayName = "TodoContext";

type ProviderProps = {
  children: React.ReactNode;
};

export const TodoProvider: React.FC<ProviderProps> = ({ children }) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const { setTodos, todos } = useContext(TodoContext);

  return {
    setTodos,
    todos,
  };
};
