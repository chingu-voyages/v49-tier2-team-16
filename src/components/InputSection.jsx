import React, { useEffect, useMemo, useRef, useState } from "react";
import askGroq from "../utils/groq";
import Wrapper from "./Wrapper";
import ColorPicker from "../components/ColorPicker";
import InputForm from "../components/InputForm";
import TextArea from "../components/TextArea";

const options = {
  width: 422,
  height: 484,
  borderWidth: 4,
  borderColor: "#ffffff",
}; //options for color picker

function InputSection({setColors, setPrompt}) {

  const [hexColor, setHexColor] = useState("#f00");
  const [trigger, setTrigger] = useState(false);
  const formDataRef = useRef({
    usage: "Coordinate colors for my outfit",
    colorScheme: "complimentary",
  });
  const [promptState, setPromptState] = useState(formDataRef.current.usage);
  const colorArrRef = useRef([]);
  const promptRef = useRef(formDataRef.current.usage);

  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [trigger]);
  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [formDataRef.current.usage]);
  const colors = useMemo(() => colorArrRef.current, [colorArrRef.current]);
  const prompt = useMemo(() => promptRef.current, [promptRef.current]);

  const handleClick = async () => {
    try {
      const schemeObj = await askGroq(hexColor, formDataRef);
      colorArrRef.current = schemeObj;
      setColors(schemeObj);
      setPrompt(promptState);
    } catch (error) {
      console.error(error.message);
    }
  };

  const setters = useMemo(
    () => ({
      onChangeColor(color) {
        setHexColor(color.hexString);
      },
    }),
    []
  );
  const handleChange = (e) => {
    e.preventDefault?.();
    const changedField = e.target.name;
    const newValue = e.target.value;
    const breakingChars = /[^a-zA-Z0-9 ]/g;
    if (!breakingChars.test(newValue)) {
      formDataRef.current = {
        ...formDataRef.current,
        [changedField]: newValue,
      };
      setTrigger((prev) => prev + 1);
      setPromptState(newValue); // update the prompt state
    }
  };
  return (
    <section className="bg-[url('/src/img/input-section-bg.png')] bg-cover bg-center w-full lg:h-[calc(100vh-60px)] border-y border-secondary-color animate-slideIn">
      <Wrapper>
        <div className="md:grow text-sm md:text-base block lg:flex w-full items-center space-y-1 text-center text-primary-dark">
          <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark lg:w-1/2">
            <ColorPicker options={options} setters={setters} />
            <InputForm hexColor={hexColor} />
          </div>

          <div className="md:grow text-sm md:text-base flex flex-col items-center space-y-1 text-center text-primary-dark lg:w-1/2 block w-full h-full">
            <TextArea
              handleChange={handleChange}
              handleClick={handleClick}
              promptState={promptState}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default InputSection;
