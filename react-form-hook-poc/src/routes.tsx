import { Route, Routes } from "react-router-dom";

import TodoList from "@components/Todo/TodoList";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
    </Routes>
  );
};

export default CustomRoutes;
