import { getRandomInt, getRandomPermutation } from "./utils";

import Die from "./die";
import { useState } from "react";

export const TwoDice = ({ setTable, goLeft }) => {
  const [roll, setRoll] = useState({
    die1: { roll: 1 },
    die2: { roll: 1 },
    sum: 2,
  });
  const reset = () => {
    setTable(() => getRandomPermutation());
    goLeft();
  };

  const rollTwoDice = () => {
    return (
      <div
        className="flex-items display-flex-center"
        onClick={() => {
          const roll = {
            die1: { roll: getRandomInt(1, 6) },
            die2: { roll: getRandomInt(1, 6) },
          };
          roll.sum = roll.die1.roll + roll.die2.roll;
          setRoll(() => roll);
        }}
      >
        <Die value={roll.die1.roll} />
        <Die value={roll.die2.roll} />
      </div>
    );
  };

  return (
    <div className="two-dice-view">
      {rollTwoDice()}
      <h2 className="flex-items">Сума: {roll.sum}</h2>
      <button className="btn-reset" onClick={reset}>
        Нова поредица
      </button>
    </div>
  );
};
