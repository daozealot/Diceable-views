import { useState } from "react";
import "./App.css";
import { Table } from "./Components/Table.tsx";
import { NavButton } from "./Components/NavButton.tsx";
import { TwoDice } from "./Components/TwoDice.tsx";
import { FiveDice } from "./Components/FiveDice.tsx";

const views = ["table", "twoDice", "fiveDice"];

function App() {
  const [view, setView] = useState(views[0]);
  const [table, setTable] = useState(null);

  const getView = () => {
    switch (view) {
      case "table":
        return <Table table={table} setTable={setTable} />;
      case "twoDice":
        return <TwoDice setTable={setTable} />;
      case "fiveDice":
        return <FiveDice />;
    }
  };

  const onNavRight = () => {
    setView(views[views.findIndex((el) => el === view) + 1]);
  };

  const onNavLeft = () => {
    setView(views[views.findIndex((el) => el === view) - 1]);
  };

  return (
    <div className="main">
      {view !== views[2] && (
        <button className="navButton" onClick={onNavRight}>
          <NavButton reverse={false} />
        </button>
      )}
      {view !== views[0] && (
        <button className="navButtonLeft" onClick={onNavLeft}>
          <NavButton reverse={true} />
        </button>
      )}
      {getView()}
    </div>
  );
}

export default App;
