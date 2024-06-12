"use strict";
import Groq from "groq-sdk";
import extractJSON from "./extractJson";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true, // this should be temporary - will move to backend after refactoring
});
const askGroq = async (hexColor, formDataRef) => {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Provide a JSON Object that contains a color scheme of four colors generated from the hex code color ${hexColor}. The color scheme should help with ${formDataRef.current.colorScheme}. Provide details about why each color was picked. Ensure each color has a name and hex code and description with at least 30 characters. The color scheme must be used in refrence of ${formDataRef.current.usage}. The JSON object is an array of objects that contain the following properties: name, hex, description.`,
      },
    ],
    model: "llama3-8b-8192",
  });
  const chatResponse = chatCompletion.choices[0]?.message?.content || ""; // This is the response from the chat model
  return extractJSON(chatResponse); // This extracts the JSON object from the
};

export default askGroq;
