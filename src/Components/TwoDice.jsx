import { getRandomPermutation } from "./utils";

export const TwoDice = ({ setTable }) => {
  const reset = () => {
    setTable(() => getRandomPermutation());
  };
  return (
    <div>
      <button className="btn-reset" onClick={reset}>
        Нова поредица
      </button>
    </div>
  );
};
