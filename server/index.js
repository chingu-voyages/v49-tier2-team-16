const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function returnNewImage(prompt, colors) {
  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt: `Generate an image of a ${prompt} using the following colors: ${colors}`,
    n: 1,
    size: "256x256", // restrict image size to 256x256 while developing
  });
  return response.data[0].url;
}

app.use(cors());

app.get("/v49/img/:prompt/:colors", async (req, res) => {
  const { prompt, colors } = req.params;
  const imgUrl = await returnNewImage(prompt, colors);
  res.status(200).json(imgUrl);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
