import React, { useRef, useEffect, useState } from "react";
import iro from "@jaames/iro";
import InputForm from "../components/InputForm";

function UserData({ setFormData, usage, colorScheme }) {
  const colorPickerRef = useRef(null);
  const iroRef = useRef(null);
  const [hexColor, setHexColor] = useState("#b19cd9");
  const [rgbColor, setRgbColor] = useState({ r: 177, g: 156, b: 217 });
  const [hslColor, setHslColor] = useState({ h: 261, s: 45, l: 73 });
  const [userInput, setUserInput] = useState(""); // Add this line

  useEffect(() => {
    if (!iroRef.current) {
      iroRef.current = new iro.ColorPicker(colorPickerRef.current, {
        width: 320,
        color: hexColor,
      });

      iroRef.current.on("color:change", function (color) {
        setHexColor(color.hexString);
        setRgbColor(color.rgb);
        setHslColor(color.hsl);
      });
    }
  }, []);
  const handleChange = (e) => {
    e.preventDefault?.();
    const changedField = e.target.name;
    const newValue = e.target.value;
    setFormData((currForm) => {
      return { ...currForm, [changedField]: newValue };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                role: "user",
                content: `Given the hex code color ${hexColor}, ${usage} giving me four colors in a ${colorScheme} color scheme.  Your response should be in JSON format.`,
              },
            ],
            model: "llama3-8b-8192",
          }),
        }
      );
      if (!res.ok) {
        throw new Error("GROQ API response was not ok");
      }

      const data = await res.json();
      console.log(data.choices[0].message.content);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <div ref={colorPickerRef}></div>
      <p>HEX: {hexColor}</p>
      <p>RGB: {`rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`}</p>
      <p>HSL: {`hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`}</p>
      <InputForm
        handleChange={handleChange}
        usage={usage}
        colorScheme={colorScheme}
      />
      {/* <input
        className="shadow-md"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />{" "} */}
      {/* Add this line */}
      <button onClick={handleSubmit}>Submit Color</button>
    </div>
  );
}

export default UserData;
