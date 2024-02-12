import { useEffect, useState } from "react";

export default function DisplayGraphic({ vectorArr, recurseGraphicComponent }) {
  useEffect(() => {
    const vectorSVGs = document.querySelectorAll(".vector-svg");
    vectorSVGs.forEach((svg) => {
      const randomDuration = Math.random() * 10 + 1;
      const randomDelay = Math.random() * 0.5;

      svg.style.animation = `vectorAnimation ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
    });
  }, []);

  const vectors = Array.isArray(vectorArr) ? vectorArr : [vectorArr];

  const [vectorObjState, setVectorObjState] = useState(null);
  useEffect(() => {
    setVectorObjState(vectorArr);
  }, [vectorArr]);

  //
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    recurseGraphicComponent(vectorObjState);
    setOpacity(opacity === 1 ? 0.6 : 1);
  };

  return (
    <>
      {vectors?.map((vectorObj) => (
        <div
          key={vectorObj?.label}
          className="vector-div"
          onClick={() => {
            recurseGraphicComponent(vectorObjState);
            handleClick();
          }}
          style={{ opacity: opacity }}
        >
          {vectorObj?.vectors?.map((svg, svgIndex) => (
            <div
              key={svgIndex}
              style={{ marginBottom: "10px", position: "absolute" }}
              className="vector-svg"
            >
              {svg}
            </div>
          ))}
          <p>{vectorObj?.label}</p>
        </div>
      ))}
    </>
  );
}
