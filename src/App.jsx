import { useState, useMemo, useEffect } from 'react';
import './App.css';

import iro from '@jaames/iro';
// import PickColor from "./PickColor";
import InputForm from './InputForm';
import { ColorPicker } from 'react-iro';
import { HexColorPicker } from 'react-colorful';
// import { SketchPicker } from "react-color";
('use strict');
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

// const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
// const openai = new OpenAI({
//   apiKey: API_KEY,
//   dangerouslyAllowBrowser: true,
// });

const options = { width: 300 };

function App() {
  const [hexColor, setHexColor] = useState('#f00');
  const [formData, setFormData] = useState({
    usage: 'Coordinate colors for my outfit!',
    colorScheme: 'complimentary',
  });

  const handleClick = async () => {
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `Given the hex code color ${hexColor}, ${formData.usage} giving me four colors in a ${formData.colorScheme} color scheme.  Your response should be in JSON format.`,
          },
        ],
        model: 'llama3-8b-8192',
      });
      console.log(chatCompletion.choices[0]?.message?.content || '');
      // const completion = await openai.chat.completions.create({
      //   messages: [
      //     {
      //       role: "system",
      //       content: `Take the color in hex code ${hexColor} and return a ${formData.colorScheme} color scheme in JSON format that represents the input well. Provide some information about why each color was picked as well`,
      //     },
      //   ],
      //   model: "gpt-4o",
      // });
      // console.log(completion.choices[0].message.content);
    } catch (error) {
      console.log(error.message);
    }
  };
  const setters = useMemo(
    () => ({
      onChangeColor(color) {
        console.log('color: ', color.hexString);
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
      <div style={{ alignItems: 'center' }}>
        {/* <PickColor options={options} setters={setters} /> */}
        {/* <h2>React-Iro (I see double!)</h2>
        <ColorPicker options={options} setters={setters}></ColorPicker>
        <br /> */}
        <h2>React-Colorful</h2>
        <HexColorPicker color={hexColor} onChange={setHexColor} />;
        <br />
        {/* <h2>Sketch-Picker</h2> */}
        {/* <SketchPicker /> */}
        <InputForm handleChange={handleChange} formData={formData} />
        <div className=".card" style={{ background: hexColor }}>
          You chose hex color {hexColor}
        </div>
        <button onClick={handleClick}>send recommendation</button>
      </div>
    </>
  );
}

export default App;
