import React from "react";
import ImageGenerator from "./ImageGenerator";

function DisplayColours({ prompt, colors }) {
  const justColors = colors.map((color) => color.name);
  return (
    <>
      <h3>Thank you for choosing Color Compass</h3>
      {colors.map((color) => (
        <div key={color.hex}>
          <div
            className={`rounded-full p-6 inline-block`}
            style={{ backgroundColor: color.hex }}
          ></div>
          <p>Hex: {color.hex}</p>
          <p>Name: {color.name}</p>
          <div>
            <p>Description: {color.description}</p>
          </div>
        </div>
      ))}
      <ImageGenerator prompt={prompt} colors={justColors} />
    </>
  );
}

export default DisplayColours;
