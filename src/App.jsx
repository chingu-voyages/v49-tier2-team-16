import { useState, useMemo, useEffect } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import InputForm from "./components/InputForm";
import Header from "./Header";
import Footer from "./Footer";
import DisplayColours from "./components/DisplayColours";
("use strict");
import Groq from "groq-sdk";

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
      console.log(chatCompletion.choices[0]?.message?.content || "");
    } catch (error) {
      console.log(error.message);
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
  const colors = [
    {
      name: "Complementary Blue",
      hex: "#00f",
      description:
        "A bright, electric blue that provides a striking contrast to the fiery red.",
    },
    {
      name: "Analogous Green",
      hex: "#34c759",
      description:
        "A muted, earthy green that creates a harmonious balance with the bold red.",
    },
    {
      name: "Triadic Yellow",
      hex: "#ffff00",
      description:
        "A vibrant, sunny yellow that provides a playful contrast to the intense red.",
    },
    {
      name: "Split-Complementary Purple",
      hex: "#800080",
      description:
        "A rich, jewel-toned purple that adds depth and sophistication to the color scheme.",
    },
  ];
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
      <DisplayColours colors={colors} />
    </>
  );
}

export default App;
