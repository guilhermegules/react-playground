import { FC } from "react";

import { ReactComponent as StarFull } from "../../assets/img/star-full.svg";
import { ReactComponent as StarEmpty } from "../../assets/img/star-empty.svg";
import { ReactComponent as StarHalf } from "../../assets/img/star-half.svg";

interface IStarProps {
  fill: number;
}

const Star: FC<IStarProps> = ({ fill }) => {
  if (fill === 0) {
    return <StarEmpty />;
  }

  if (fill === 0.5) {
    return <StarHalf />;
  }

  return <StarFull />;
};

export default Star;
