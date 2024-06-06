("use strict");
import Groq from "groq-sdk";
import { useState, useMemo, useEffect, useRef } from "react";
import extractJSON from "./utils/extractJson";
import ColorPicker from "./components/ColorPicker";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ResultsSection from "./components/ResultsSection";
import Footer from "./Footer";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, //I'm not sure if this is bad practice
});

const options = { width: 300 };

function App() {
  const [hexColor, setHexColor] = useState("#f00");
  const [buttonClicked, setButtonClicked] = useState(false);
  const formDataRef = useRef({
    usage: "Coordinate colors for my outfit",
    colorScheme: "complimentary",
  });
  const colorArrRef = useRef([]);
  const promptRef = useRef(formDataRef.current.usage);

  useEffect(() => {
    promptRef.current = formDataRef.current.usage;
  }, [formDataRef.current.usage]);
  const colors = useMemo(() => colorArrRef.current, [colorArrRef.current]);
  const prompt = useMemo(() => promptRef.current, [promptRef.current]);

  const handleClick = async () => {
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Provide a JSON Object that contains a color scheme of four colors generated from the hex code color ${hexColor}. The color scheme should help with ${formDataRef.current.colorScheme}. Provide details about why each color was picked. Ensure each color has a name and hex code and description with at least 10 characters. The color scheme must be used to ${formDataRef.current.usage}. The JSON object is an array of objects that contain the following properties: name, hex, description.`,
          },
        ],
        model: "llama3-8b-8192",
      });
      const chatResponse = chatCompletion.choices[0]?.message?.content || ""; // This is the response from the chat model
      const schemeObj = extractJSON(chatResponse); // This extracts the JSON object from the response
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
    formDataRef.current = { ...formDataRef.current, [changedField]: newValue };
  };
  return (
    <>
      <div style={{ alignItems: "center" }}>
        <Header />
        <MainSection />
        {!buttonClicked && (
          <>
            <ColorPicker options={options} setters={setters} />
            <InputForm
              handleChange={handleChange}
              formData={formDataRef.current}
              hexColor={hexColor}
            />
            <br />
            <button className="shadow-lg" onClick={handleClick}>
              Get recommendation
            </button>
          </>
        )}
        {buttonClicked && <ResultsSection colors={colors} prompt={prompt} />}
        <Footer />
      </div>
    </>
  );
}

export default App;
