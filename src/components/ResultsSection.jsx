import React from "react";
import ImageGenerator from "./ImageGenerator";
import DisplayColours from "./DisplayColours";

function ResultsSection({ colors, prompt }) {
  return (
    <section className='animate-sladeIn bg-result-page bg-cover bg-center w-full lg:h-[calc(100vh-60px)] border-y border-secondary-color animate-slideIn'>
      <div className='flex flex-col md:flex-row w-full my-20 '>
        <div className='w-full md:w-1/2 bg-white my-20 py-20'>
          <h2 className='font-caption items-center text-center text-2xl md:text-3xl lg:text-[70px] text-brand-red results-title'>
            Color Compass
          </h2>
          <div className='flex flex-col items-center'>
            <h3 className='text-center w-full pb-4'>
              Thank you for choosing Color Compass.
            </h3>
            <p className='text-center w-full pb-4'>
              <strong>{prompt}</strong>
            </p>
          </div>
          {colors.map((color) => (
            <DisplayColours key={color.hex} color={color} />
          ))}
        </div>
        <div className='w-full md:w-1/2'>
          <ImageGenerator prompt={prompt} colors={colors} />
        </div>
      </div>
    </section>
  );
}

export default ResultsSection;
