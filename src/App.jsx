('use strict');
import Groq, { NotFoundError } from 'groq-sdk';
import { useState, useMemo, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import extractJSON from './utils/extractJson';
import ColorPicker from './components/ColorPicker';
import InputForm from './components/InputForm';
import Header from './components/Header';
import MainSection from './components/MainSection';
import InputSection from './components/InputSection';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, //I'm not sure if this is bad practice
});

function App() {
  const [hexColor, setHexColor] = useState('#f00');
  const [usageEmpty, setUsageEmpty] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const formDataRef = useRef({
    usage: 'Coordinate colors for my outfit',
    colorScheme: 'complimentary',
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
    if (formDataRef.current.usage === '') {
      setUsageEmpty(true);
      return;
    }
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `Provide a JSON Object that contains a color scheme of four colors generated from the hex code color ${hexColor}. The color scheme should help with ${formDataRef.current.colorScheme}. Provide details about why each color was picked. Ensure each color has a name and hex code and description with at least 30 characters. The color scheme must be used in reference of ${formDataRef.current.usage}. The JSON object is an array of objects that contain the following properties: name, hex, description.`,
          },
        ],
        model: 'llama3-8b-8192',
      });
      const chatResponse = chatCompletion.choices[0]?.message?.content || ''; // This is the response from the chat model
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
    const breakingChars = /[^a-zA-Z0-9 ]/g;
    if (!breakingChars.test(newValue)) {
      formDataRef.current = {
        ...formDataRef.current,
        [changedField]: newValue,
      };
      setTrigger((prev) => !prev); // Changed to toggle boolean for simplicity
      setUsageEmpty(false);
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
              <InputSection
                setters={setters}
                handleChange={handleChange}
                handleClick={handleClick}
                formData={formDataRef.current}
                hexColor={hexColor}
                usageEmpty={usageEmpty}
              />
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
