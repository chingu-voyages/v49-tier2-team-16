const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function returnNewImage(prompt,colors) {
  let promptObj
  (process.env.MODE === 'production') ? promptObj = {
    model: "dall-e-3",
    prompt: `Generate an image of a ${prompt} using the following colors: ${colors}`,
    n: 1,
    size: "1024x1024",
  } : promptObj = {
    model: "dall-e-2", // use a smaller model while developing
    prompt: `Generate an image of a ${prompt} using the following colors: ${colors}`,
    n: 1,
    size: "320x240", // restrict image size to 320x240 while developing
  }
  if (promptObj.size = "320x240" ) return `https://via.placeholder.com/1024&text=ERROR%20Invalid%20image%20dimensions`;
  const response = await openai.images.generate(promptObj);
  return response.data[0].url;
}

app.use(cors());

app.get('/v49/:key/:prompt/:colors', async (req, res) => {
  if (!req.params.prompt || !req.params.colors) {
    return res.status(400).send('Prompt and colors are required');
  }
  const {prompt, colors} = req.params;
  if (req.params.key !== process.env.BACKEND_API_KEY) {
    const placeholderImg = `https://via.placeholder.com/1024&text=Unauthorized%20Request`
    console.error('Missing or incorrectly set BACKEND_API_KEY environment variable')
    return res.status(401).json(placeholderImg);
  }
 const imgUrl = await returnNewImage(prompt,colors);
  res.status(200).json( imgUrl );   
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

