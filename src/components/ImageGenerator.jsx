const ImageGenerator = () => {
    return (
      <div id="image-container">
        <input type="text" id="prompt" placeholder="Prompt" />
        <input type="text" id="colors" placeholder="Colors" />
        <button
          onClick={async () => {
            const prompt = document.getElementById("prompt").value;
            const colors = document.getElementById("colors").value;
            const url = await fetch(
              `https://openai-api-u24k.onrender.com/v49/img/${prompt}/${colors}`
            ).then((res) => res.json());
            document.getElementById("image-container").innerHTML = `
              <img src="${url}" alt="Image generated from ${prompt} and ${colors}" />
            `;
          }}
        >
          Generate Image
        </button>
      </div>
    );
  };
  
export default ImageGenerator;