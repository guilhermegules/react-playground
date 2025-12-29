import MovieStars from "components/MovieStars";
import { FC } from "react";

interface IMovieScoreProps {
  score: number;
  count: number;
}

const MovieScore: FC<IMovieScoreProps> = ({ score, count }) => {
  return (
    <div className="movie-score">
      <p className="movie-score__value">{score > 0 ? score.toFixed(1) : "-"}</p>
      <MovieStars score={score} />
      <p className="movie-score__count">{count} avaliações</p>
    </div>
  );
};

export default MovieScore;
