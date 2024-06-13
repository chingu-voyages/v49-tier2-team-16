import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import CompassArrow from "/src/img/compass-arrow.svg";
import CompassCircle from "/src/img/compass-circle.svg";

function MainSection() {
  return (
    <main>
      <section className="bg-[url('/src/img/main-section-bg.jpg')] bg-cover bg-center w-full h-[calc(100vh-60px)] border-y border-secondary-color animate-slideIn">
        <Wrapper>
          <div className='relative h-[calc(100vh-60px)] flex justify-center items-center'>
            <div className='text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark'>
              <p>Lorem ipsum</p>
              <h1 className='font-caption text-6xl md:text-8xl lg:text-[110px] text-brand-light-green'>
                Color Compass
              </h1>
              <p className='w-2/3 md:w-[460px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus mattis tortor ut tortor cursus, ac maximus tortor.
              </p>
              <Link
                to='/input'
                className='animate-pulse hover:[animation-play-state:paused]'
              >
                <div className='relative w-16 h-16 md:w-20 md:h-20 space-y-3 md:space-y-4'>
                  <img
                    className='absolute top-0 right-0 bottom-0 left-0 rotate-[13deg] hover:animate-arrowRotate origin-center'
                    src={CompassArrow}
                    alt='CompassArrow'
                  />
                  <img src={CompassCircle} alt='CompassCircle' />
                </div>
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

export default MainSection;
