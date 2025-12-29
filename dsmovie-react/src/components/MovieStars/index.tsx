import { FC } from "react";
import Star from "./Star";

import "./style.css";

interface IMovieStarsProps {
  score: number;
}

const MovieStars: FC<IMovieStarsProps> = ({ score }) => {
  const getFills = (score: number) => {
    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }

    return fills;
  };

  const fills = getFills(score);

  return (
    <div className="stars-container">
      {fills.map((fill) => (
        <Star fill={fill} key={Math.random() * 100000} />
      ))}
    </div>
  );
};

export default MovieStars;
