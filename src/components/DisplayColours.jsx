import React from "react";
import ImageGenerator from "./ImageGenerator";
import Wrapper from "./Wrapper";
import TextSection from "./TextSection";

function DisplayColours({ colors, prompt }) {
  return (
    <>
      <section className="bg-[url('/src/img/results-section-bg.png')] bg-cover bg-center w-full h-screen border-y border-secondary-color">
        <h2 className="font-caption items-center text-center text-2xl md:text-3xl lg:text-[70px] text-brand-red m-5 p-5">
          Color Compass
        </h2>

        <div className="relative flex md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark p-0 mt-8 mb-8">
            <h3 className="flex flex-col items-start text-left w-2/3 md:w-[460px]">
              Thank you for choosing Color Compass.
            </h3>
            <p className="flex flex-col items-start text-left w-2/3 md:w-[460px]">
              <strong>{prompt}</strong>
            </p>
            {colors.map((color) => (
              <TextSection key={color.hex} color={color} />
            ))}
          </div>
          <ImageGenerator prompt={prompt} colors={colors} />
        </div>
      </section>
    </>
  );
}

export default DisplayColours;
