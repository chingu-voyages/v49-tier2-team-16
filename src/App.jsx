import { useState, useMemo, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import extractJSON from "./utils/extractJson";
import ColorPicker from "./components/ColorPicker";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import InputSection from "./components/InputSection";
import ResultsSection from "./components/ResultsSection";
import Footer from "./Footer";
import ScrollButton from "./components/ScrollButton";


function App() {
  const [hexColor, setHexColor] = useState("#f00");
  const [trigger, setTrigger] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const formDataRef = useRef({
    usage: "Coordinate colors for my outfit",
    colorScheme: "complimentary",
  });
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
      setButtonClicked(true);
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
    }
  };
  return (
    <>
      <div className='main-container translate-x-0'>
        <Header />
        <Routes>
          <Route path='/' element={<MainSection />} />
          <Route
            path='/input'
            element={
              /*  !buttonClicked && (*/
              <InputSection
                setters={setters}
                handleChange={handleChange}
                handleClick={handleClick}
                formData={formDataRef.current}
                hexColor={hexColor}
              />
              /*} )*/
            }
          />
          <Route
            path='/result'
            element={
              buttonClicked && (
                <ResultsSection colors={colors} prompt={prompt} />
              )
            }
          />
        </Routes>
        <ScrollButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
