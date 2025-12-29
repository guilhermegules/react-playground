import { FC } from "react";
import { MoviePage } from "types/movie.model";

import { ReactComponent as Arrow } from "../../assets/img/Arrow.svg";
import "./style.css";

interface IPaginationProps {
  page: MoviePage;
  onChange: (newPage: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ page, onChange }) => {
  return (
    <div className="pagination">
      <div className="pagination__box">
        <button
          className="pagination__button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="pagination__button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <Arrow className="pagination__icon--flip-horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
