import { Route, Routes } from "react-router-dom";

import TodoList from "@components/Todo/TodoList";
import CurriculumForm from "@components/Curriculum/CurriculumForm";
import CurriculumDetails from "@components/Curriculum/CurriculumDetails";
import CurriculumList from "@components/Curriculum/CurriculumList";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />

      <Route path="curriculum" element={<CurriculumForm />} />
      <Route path="curriculum/:id" element={<CurriculumDetails />} />
      <Route path="curriculum/list" element={<CurriculumList />} />
    </Routes>
  );
};

export default CustomRoutes;
