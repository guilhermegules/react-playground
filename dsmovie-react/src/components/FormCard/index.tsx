import axios, { AxiosRequestConfig } from "axios";
import { FC, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Movie } from "types/movie.model";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import "./style.css";

interface IFormCardProps {
  movieId: string;
}

const FormCard: FC<IFormCardProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<Movie>();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then((movie) => {
      setMovie(movie.data);
    });
  }, [movieId]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      email: (event.target as any).email.value,
      score: (event.target as any).score.value,
    };

    if (!validateEmail(payload.email)) return;

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/scores",
      data: {
        ...payload,
        movieId,
      },
    };

    axios(config).then(() => {
      navigate("/");
    });
  };

  return (
    <section className="movie-form-container">
      <img
        className="movie-form-container__movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="movie-form-container__card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="movie-form-container__form" onSubmit={handleSubmit}>
          <div className="movie-form-container__form-group form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="movie-form-container__form-group form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="movie-form-container__btn-container">
            <button type="submit" className="btn btn-primary btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary btn mt-3">Cancelar</button>
        </Link>
      </div>
    </section>
  );
};

export default FormCard;
