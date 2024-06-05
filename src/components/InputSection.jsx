import React from "react";
import Wrapper from "./Wrapper";

import ColorPicker from "../components/ColorPicker";
import InputForm from "../components/InputForm";

const options = {
  width: 422,
  height: 484,
  borderWidth: 4,
  borderColor: "#ffffff",
}; //options for color picker

function InputSection({ setters, handleChange, formData, hexColor }) {
  return (
    <main>
      <section className="bg-[url('/src/img/input-section-bg.png')] bg-cover bg-center w-full h-screen border-y border-secondary-color">
        <Wrapper>
          <div className="relative h-screen flex flex-col md:flex-row justify-center items-center">
            <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark">
              <ColorPicker options={options} setters={setters} />
              <InputForm
                handleChange={handleChange}
                formData={formData}
                hexColor={hexColor}
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

export default InputSection;
