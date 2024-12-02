import { useState } from "react";
import { getRandomInt, getRandomPermutation } from "./utils";
import Die from "./die";

const DEFAULT_STATE = {
  die1: { roll: 1, isLocked: false },
  die2: { roll: 1, isLocked: false },
  die3: { roll: 1, isLocked: false },
  die4: { roll: 1, isLocked: false },
  die5: { roll: 1, isLocked: false },
  times: 0,
};

export const FiveDice = () => {
  const [roll, setRoll] = useState(DEFAULT_STATE);

  const reset = () => {
    setRoll(DEFAULT_STATE);
  };

  const getRoll = () => {
    const generateRoll = {
      die1: {
        roll: roll.die1.isLocked ? roll.die1.roll : getRandomInt(1, 6),
        isLocked: roll.die1.isLocked,
      },
      die2: {
        roll: roll.die2.isLocked ? roll.die2.roll : getRandomInt(1, 6),
        isLocked: roll.die2.isLocked,
      },
      die3: {
        roll: roll.die3.isLocked ? roll.die3.roll : getRandomInt(1, 6),
        isLocked: roll.die3.isLocked,
      },
      die4: {
        roll: roll.die4.isLocked ? roll.die4.roll : getRandomInt(1, 6),
        isLocked: roll.die4.isLocked,
      },
      die5: {
        roll: roll.die5.isLocked ? roll.die5.roll : getRandomInt(1, 6),
        isLocked: roll.die5.isLocked,
      },
      times: roll.times + 1,
    };
    setRoll(() => generateRoll);
  };

  const rollDices = () => {
    return (
      <div className="flex-items display-flex-center">
        <div
          className={`padding ${roll.die1.isLocked ? "die-locked" : ""}`}
          onClick={() =>
            setRoll(() => ({
              ...roll,
              ...{
                die1: { roll: roll.die1.roll, isLocked: !roll.die1.isLocked },
              },
            }))
          }
        >
          <Die value={roll.die1.roll} />
        </div>
        <div
          className={`padding ${roll.die2.isLocked ? "die-locked" : ""}`}
          onClick={() =>
            setRoll(() => ({
              ...roll,
              ...{
                die2: { roll: roll.die2.roll, isLocked: !roll.die2.isLocked },
              },
            }))
          }
        >
          <Die value={roll.die2.roll} />
        </div>
        <div
          className={`padding ${roll.die3.isLocked ? "die-locked" : ""}`}
          onClick={() =>
            setRoll(() => ({
              ...roll,
              ...{
                die3: { roll: roll.die3.roll, isLocked: !roll.die3.isLocked },
              },
            }))
          }
        >
          <Die value={roll.die3.roll} />
        </div>
        <div
          className={`padding ${roll.die4.isLocked ? "die-locked" : ""}`}
          onClick={() =>
            setRoll(() => ({
              ...roll,
              ...{
                die4: { roll: roll.die4.roll, isLocked: !roll.die4.isLocked },
              },
            }))
          }
        >
          <Die value={roll.die4.roll} />
        </div>
        <div
          className={`padding ${roll.die5.isLocked ? "die-locked" : ""}`}
          onClick={() =>
            setRoll(() => ({
              ...roll,
              ...{
                die5: { roll: roll.die5.roll, isLocked: !roll.die5.isLocked },
              },
            }))
          }
        >
          <Die value={roll.die5.roll} />
        </div>
      </div>
    );
  };

  return (
    <div className="two-dice-view">
      <button className="btn-reset margin-bottom" onClick={getRoll}>
        Хвърли Зарове
      </button>
      {roll.times ? rollDices() : ""}
      <h2 className="flex-items">Пъти хвърлени: {roll.times}</h2>
      {roll.times !== 0 && (
        <button className="btn-reset" onClick={reset}>
          Рестартирай
        </button>
      )}
    </div>
  );
};
