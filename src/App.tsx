import { useState } from "react";
import "./App.css";
import { Table } from "./Components/Table.tsx";

const views = ["table", "twoDice", "fiveDice"];

function App() {
  const [view, setView] = useState(views[0]);

  const getView = () => {
    switch (view) {
      case "table":
        return <Table />;
      default:
        return <Table />;
    }
  };

  return (
    <div className="main">
      <button className="navButton">Nav Button</button>
      {getView()}
    </div>
  );
}

export default App;
