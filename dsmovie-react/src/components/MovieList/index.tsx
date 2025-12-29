import { FC, useEffect, useState } from "react";
import axios from "axios";

import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie.model";

interface IMovieListProps {}

const MovieList: FC<IMovieListProps> = (props) => {
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
      .then((movies) => {
        const data = movies.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPage: number) => {
    setPageNumber(newPage);
  };

  return (
    <>
      <Pagination page={page} onChange={handlePageChange} />
      <div className="container">
        <div className="row">
          {page?.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
