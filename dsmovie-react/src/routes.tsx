import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import MovieForm from "components/MovieForm";
import MovieList from "components/MovieList";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/form">
        <Route path=":movieId" element={<MovieForm />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
