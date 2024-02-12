import React from "react";
import "./App.css";
import vectorsObj from "./assets/vectors.js";
import DisplayGraphic from "./component/Vector.jsx";
import { useState } from "react";

function App() {
  const [vectorObj, setVectorObj] = useState(null);

  console.log(vectorObj);
  const graphicChildrenRender = (e) => {
    if (e.currentTarget.style.opacity < 1) {
      e.currentTarget.style.opacity = 1;
    } else {
      e.currentTarget.style.opacity = 0;
    }
  };

  return (
    <div className="App">
      <div className="animation-container">
        <DisplayGraphic
          vectorArr={vectorsObj}
          recurseGraphicComponent={(e, v) => {
            setVectorObj(v);
            setTimeout(() => {
              graphicChildrenRender(e);
            }, 400);
          }}
        />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
