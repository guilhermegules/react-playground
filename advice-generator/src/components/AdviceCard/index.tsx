import { FC } from "react";

import useAdvice from "../../hooks/useAdvice";
import diceIcon from "../../assets/icon-dice.svg";
import patterDividerDesktop from "../../assets/pattern-divider-desktop.svg";
import Loader from "../Loader";
import "./AdviceCard.css";
import { randomNumberInRange } from "../../utils/number.functions";

const AdviceCard: FC = () => {
  const { advice, adviceHandler, isLoading } = useAdvice();

  return (
    <div className="advice-card">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <p className="advice-card__advice-number">
            Advice #{advice?.slip.id}
          </p>
          <h2 className="advice-card__quote">"{advice?.slip.advice}"</h2>
          <img
            className="advice-card__divider"
            src={patterDividerDesktop}
            alt=""
          />
        </>
      )}
      <button
        className="advice-card__button"
        onClick={() => adviceHandler(randomNumberInRange())}
      >
        <img src={diceIcon} alt="" />
      </button>
    </div>
  );
};

export default AdviceCard;
