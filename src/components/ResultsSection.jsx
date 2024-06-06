import React from "react";
import ImageGenerator from "./ImageGenerator";
import DisplayColours from "./DisplayColours";

function ResultsSection({ colors, prompt }) {
  return (
    <section className="bg-[url('/src/img/results-section-bg.png')] bg-cover bg-center w-full h-screen border-y border-secondary-color">
      <h2 className="font-caption items-center text-center text-2xl md:text-3xl lg:text-[70px] text-brand-red m-5 p-5">
        Color Compass
      </h2>
      <div className="flex flex-col md:flex-row w-full my-20 ">
        <div className="w-full md:w-1/2 bg-white my-20 py-20">
          <div className="flex flex-col items-center">
            <h3 className="text-center w-full pb-4">
              Thank you for choosing Color Compass.
            </h3>
            <p className="text-center w-full pb-4">
              <strong>{prompt}</strong>
            </p>
          </div>
          {colors.map((color) => (
            <DisplayColours key={color.hex} color={color} />
          ))}
        </div>
        <div className="w-full md:w-1/2">
          <ImageGenerator prompt={prompt} colors={colors} />
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
