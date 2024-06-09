const KEY = import.meta.env.VITE_BACKEND_API_KEY;

const generateImgURL = async (prompt, colors) => {
  let url;
  // format prompt and colors for URL query
  prompt = prompt.replace(/\s/g, "+"); //
  colors = colors.toString().replace(/\s/g, "+");
  try {
    if (!prompt || !colors) {
      throw new Error("Prompt and colors are required");
    }
    if (!KEY) {
      throw new Error(
        "API Key is required. Please set the BACKEND_API_KEY environment variable."
      );
    }
    import.meta.env.MODE === "production"
      ? (url = await fetch(
          `https://openai-api-u24k.onrender.com/v49/${KEY}/${prompt}/${colors}`
        ).then((res) => res.json()))
      : (url = await fetch(
          `http://localhost:3000/v49/${KEY}/${prompt}/${colors}`
        ).then((res) => res.json()));
    return url;
  } catch (error) {
    console.error("Error fetching image URL: ", error);
  }
};

export default generateImgURL;