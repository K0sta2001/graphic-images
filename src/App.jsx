import React from "react";
import "./App.css";
import GraphicAnimation from "./component/Vector";
import { vectorsSVG } from "./assets/vectors.jsx";

function App() {
  const displayAllVectors = () => {
    return vectorsSVG.map((vector, index) => {
      return (
        <GraphicAnimation
          key={index}
          vectors={vector.vectors}
          label={vector.label}
          id={"vector" + index}
        />
      );
    });
  };

  return <div className="App">{displayAllVectors()}</div>;
}

export default App;
