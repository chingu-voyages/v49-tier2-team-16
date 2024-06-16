import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import ColorPicker from "../components/ColorPicker";
import InputForm from "../components/InputForm";
import TextArea from "../components/TextArea";

//Screen size determination
function useResize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

function InputSection({
  setters,
  handleChange,
  formData,
  hexColor,
  handleClick,
  usageEmpty,
}) {
  //Defining options for ColorPicker
  let options = {
    width: 380,
    /* height: 380,*/
    borderWidth: 4,
    borderColor: "#ffffff",
  };

  //Get the screen size
  const width = useResize();

  //Conditions for determining the ColorPicker size
  if (width < 460) {
    options.width = 222;
  } else if (width < 768) {
    options.width = 322;
  }

  return (
    <main>
      <section className='bg-input-page bg-cover bg-center w-full lg:h-[calc(100vh-60px)] border-y pt-10 lg:pt-0  border-secondary-color animate-slideIn flex items-center'>
        <div className='bg-[url("/src/img/white-line.png")] bg-no-repeat lg:bg-cover h-[80%] w-full text-sm md:text-base text-center text-primary-dark'>
          <Wrapper>
            <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-y-28'>
              <div className='w-full lg:w-1/2 flex flex-col items-center'>
                <ColorPicker options={options} setters={setters} />
                <InputForm hexColor={hexColor} />
              </div>

              <div className='lg:w-1/2'>
                <TextArea
                  handleChange={handleChange}
                  handleClick={handleClick}
                  formData={formData}
                  usageEmpty={usageEmpty}
                />
              </div>
            </div>
          </Wrapper>
        </div>
      </section>
    </main>
  );
}

export default InputSection;
