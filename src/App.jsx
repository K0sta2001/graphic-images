import React from "react";
import "./App.css";
import vectorsObj from "./assets/vectors.js";
import DisplayGraphic from "./component/Vector.jsx";
import { useState } from "react";

function App() {
  const graphicChildrenRender = (v) => {
    return (
      <DisplayGraphic
        vectorArr={v?.children}
        recurseGraphicComponent={(v) => {
          setTimeout(() => {
            graphicChildrenRender(v);
          }, 400);
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
            setTimeout(() => {
              graphicChildrenRender(v);
            }, 400);
          }}
        />
        {graphicChildrenRender()}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
