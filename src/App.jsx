import React from "react";
import "./App.css";
import vectorsObj from "./assets/vectors.js";
import DisplayGraphic from "./component/Vector.jsx";

function App() {
  const GraphicChildrenRender = ({ v }) => {
    console.log("GraphicChildrenRender", v);
    return (
      <DisplayGraphic
        vectorArr={v.children}
        recurseGraphicComponent={(childV) => {
          console.log("Recursive Call", childV);
          return <GraphicChildrenRender v={childV} />;
        }}
      />
    );
  };

  return (
    <div className="App">
      <div className="animation-container">
        <DisplayGraphic
          vectorArr={vectorsObj}
          recurseGraphicComponent={(v) => {
            console.log("Initial Call", v);
            return <GraphicChildrenRender v={v} />;
          }}
        />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
