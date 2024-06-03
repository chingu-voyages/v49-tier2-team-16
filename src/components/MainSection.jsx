import React from "react";
import Wrapper from "./Wrapper";
import Arrow from "/src/img/arrow.png";
import CircleButton from "/src/img/circle-button.svg";

function MainSection() {
  return (
    <section className="bg-[url('/src/img/main-section-bg.jpg')] bg-cover bg-center w-full h-screen border-y border-secondary-color">
      <Wrapper>
        <div className="relative h-screen flex flex-col md:flex-row justify-center items-center">
          <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark">
            <p>Lorem ipsum</p>
            <h1 className="font-caption text-6xl md:text-8xl lg:text-[110px] text-brand-light-green">
              Color Compass
            </h1>
            <p className="w-2/3 md:w-[460px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              mattis tortor ut tortor cursus, ac maximus tortor.
            </p>
          </div>
          <a
            href="#"
            className="md:grow-0 hover:animate-arrowRotate origin-left animate-pulse"
          >
            <img className="h-20" src={Arrow} alt="Arrow" />
          </a>
          <div className="absolute bottom-10 flex space-x-3 md:space-x-5">
            <a href="#">
              <img className="w-4 h-4" src={CircleButton} alt="Previous" />
            </a>
            <a href="#">
              <img className="w-4 h-4" src={CircleButton} alt="Next" />
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default MainSection;
