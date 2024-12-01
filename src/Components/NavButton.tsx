import "./NavButton.css";

export const NavButton = ({ reverse = false }) => {
  return (
    <div className="arrow">
      <div className={`${reverse ? "arrow-left-top" : "arrow-top"}`}></div>
      <div
        className={`${reverse ? "arrow-left-bottom" : "arrow-bottom"}`}
      ></div>
    </div>
  );
};
