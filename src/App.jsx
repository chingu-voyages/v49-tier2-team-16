("use strict");
import Groq from "groq-sdk";
import { useState, useMemo, useEffect } from "react";
import "./App.css";
import extractJSON from "./utils/extractJson";
import ColorPicker from "./components/ColorPicker";
import InputForm from "./components/InputForm";
import Header from "./Header";
import Footer from "./Footer";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, //I'm not sure if this is bad practice
});

const options = { width: 300 };

function App() {
  const [hexColor, setHexColor] = useState("#f00");
  const [formData, setFormData] = useState({
    usage: "Coordinate colors for my outfit",
    colorScheme: "complimentary",
  });

  const handleClick = async () => {
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `Given the hex code color ${hexColor}, ${formData.usage} giving me four colors in a ${formData.colorScheme} color scheme.  Your response should be in JSON format.`,
          },
        ],
        model: "llama3-8b-8192",
      });
      const chatResponse = chatCompletion.choices[0]?.message?.content || ""; // This is the response from the chat model
      const schemeObj = extractJSON(chatResponse); // This extracts the JSON object from the response
      console.log(schemeObj); 
      // From here I imagine we can pass the schemeObj to a component that will display the colors
      // This click aslo has access to the formData and hexColor so it doesn't make sense to pass into the extractJSON function
      // Just pass it in here. Remember, we may want to generate an image at this point too. We could write a function for this as well.
      // That function will need the data that is avaible within this click event.
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
    setFormData((currForm) => {
      return { ...currForm, [changedField]: newValue };
    });
  };
  return (
    <>
      <div style={{ alignItems: "center" }}>
        <Header />
        <ColorPicker options={options} setters={setters} />
        <InputForm
          handleChange={handleChange}
          formData={formData}
          hexColor={hexColor}
        />
        <br />
        <button className="shadow-lg" onClick={handleClick}>
          Get recommendation
        </button>
        <Footer />
      </div>
    </>
  );
}

export default App;
