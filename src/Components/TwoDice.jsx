import { getRandomPermutation } from "./utils";

import Die from "./die";

export const TwoDice = ({ setTable, goLeft }) => {
  const reset = () => {
    setTable(() => getRandomPermutation());
    goLeft();
  };

  const rollTwoDice = () => {
    return <div className="flex-items">
          <Die value={2} />
          <Die value={2} /></div>
  }

  return (
    <div className="two-dice-view">
      {rollTwoDice()}
      <button className="btn-reset" onClick={reset}>
        Нова поредица
      </button>
    </div>
  );
};
