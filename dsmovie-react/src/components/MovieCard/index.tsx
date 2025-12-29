import MovieScore from "components/MovieScore";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie.model";

import "./style.css";

interface IMovieCardProps {
  movie: Movie;
}

const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="movie-card__image" src={movie.image} alt={movie.title} />
      <div className="movie-card__bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore score={movie.score} count={movie.count} />
        <Link to={`/form/${movie.id}`}>
          <button className="btn btn-primary">Avaliar</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
