// src/Matrix.js
import React, { useState } from "react";
import "./matrix.css";

const Matrix = () => {
  const [boxColors, setBoxColors] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleBoxClick = (index) => {
    if (clickOrder.length < 9 && boxColors[index] !== "green") {
      const newColors = [...boxColors];
      newColors[index] = "green";
      setBoxColors(newColors);
      setClickOrder([...clickOrder, index]);
    }

    if (clickOrder.length === 8) {
      setTimeout(() => {
        clickOrder.forEach((boxIndex, i) => {
          setTimeout(() => {
            const newColors = [...boxColors];
            newColors[boxIndex] = "orange";
            setBoxColors(newColors);
          }, i * 500);
        });
      }, 500);
    }
  };

  return (
    <div className="matrix-container">
      <div className="matrix">
        {boxColors.map((color, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleBoxClick(index)}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Matrix;
