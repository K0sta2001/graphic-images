import { vectorsBlack, vectorsOrange, vectorsGray } from "./vectortypes.jsx";

// graphic schema:
const vectorsObj = {
  label: "Relocation",
  vectors: [],
  children: [
    {
      label: "Personal",
      vectors: [],
      children: [
        { label: "Family Relocation", vectors: [] },
        { label: "Home Finding", vectors: [] },
      ],
    },
    {
      label: "Corporate",
      vectors: [],
      children: [
        { label: "Registering your company", vectors: [] },
        { label: "Registering your company", vectors: [] },
      ],
    },
  ],
};
//

const pickRandom = (array, n) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const populateVectors = (array, vectorsArray, count) => {
  const randomVectors = pickRandom(vectorsArray, count);
  array.vectors = randomVectors;
};

const populateChildrenVectors = (children, vectorsArray, count) => {
  children.forEach((child) => {
    populateVectors(child, vectorsArray, count);
    if (child.children) {
      populateChildrenVectors(child.children, vectorsArray, count);
    }
  });
};

populateVectors(vectorsObj, vectorsBlack, 5);
populateVectors(vectorsObj.children[0], vectorsOrange, 5);
populateChildrenVectors(vectorsObj.children, vectorsGray, 5);

export default vectorsObj;
