import { useEffect } from "react";

export default function GraphicAnimation({ vectors, label, id }) {
  useEffect(() => {
    const vectorDivs = document.querySelectorAll(".vector-div");
    vectorDivs.forEach((div) => {
      const randomDuration = Math.random() * 4.3 + 1;
      const randomDelay = Math.random() * 1.7;
      div.style.animation = `vectorAnimation ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
    });
  }, []);

  const showGraphs = (e) => {
    switch (e.currentTarget.id) {
      case "vector0":
        document.getElementById("vector0").style.left = "10%";
        document.getElementById("vector1").style.right = "40%"; // Adjust the value as needed
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={showGraphs}
        id={id}
      >
        {vectors.map((vector, index) => (
          <div
            key={index}
            className="vector-div"
            style={{ position: "absolute" }}
          >
            {vector}
          </div>
        ))}
        <p className="coloring-text">{label}</p>
        <div
          className="coloring-gradient"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        ></div>
      </div>
    </>
  );
}
