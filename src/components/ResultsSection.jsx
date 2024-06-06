import React from "react";
import ImageGenerator from "./ImageGenerator";
import TextSection from "./ResultsSection";

function ResultsSection({ colors, prompt }) {
  return (
    <section className="bg-[url('/src/img/results-section-bg.png')] bg-cover bg-center w-full h-screen border-y border-secondary-color">
      <h2 className="font-caption items-center text-center text-2xl md:text-3xl lg:text-[70px] text-brand-red m-5 p-5">
        Color Compass
      </h2>
      <div className="flex flex-col md:flex-row w-full bg-white">
        <div className="w-full md:w-1/2 mt-20">
          <h3 className="flex flex-col items-center text-center w-full md:w-[460px] ml-20 pb-4">
            Thank you for choosing Color Compass.
          </h3>
          <p className="flex flex-col items-center text-center w-full md:w-[460px] ml-20 pb-4">
            <strong>{prompt}</strong>
          </p>
          {colors.map((color) => (
            <TextSection key={color.hex} color={color} />
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
