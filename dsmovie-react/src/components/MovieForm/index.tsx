import { FC } from "react";
import { useParams } from "react-router-dom";

import FormCard from "components/FormCard";

const MovieForm: FC = () => {
  const params = useParams();

  return <FormCard movieId={params.movieId!} />;
};

export default MovieForm;
