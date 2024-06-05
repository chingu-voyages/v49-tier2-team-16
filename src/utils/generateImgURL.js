const generateImgURL = async (prompt, colors) => {
  prompt = prompt.replace(/\s/g, "+");
  colors = colors.toString().replace(/\s/g, "+");
  const url = await fetch(
    `https://openai-api-u24k.onrender.com/v49/img/${prompt}/${colors}`
  ).then((res) => res.json());
  return url;
};

export default generateImgURL;
