import React, { useEffect, useState } from "react";

const ImageGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (imgUrl) {
      const img = document.createElement("img");
      img.src = imgUrl;
      img.id = "generated-image";
      const container = document.getElementById("image-container");
      container.appendChild(img);
    }
  }, [imgUrl]);

  return (
    <form id="image-container">
      <input required type="text" id="prompt" placeholder="Prompt" />
      <input required type="text" id="colors" placeholder="Colors" />
      <button
        onClick={async () => {
          setIsLoading(true);
          const prompt = document.getElementById("prompt").value;
          const colors = document.getElementById("colors").value;
          const url = await fetch(
            `https://openai-api-u24k.onrender.com/v49/img/${prompt}/${colors}`
          ).then((res) => res.json());
          setImgUrl(url);
          setIsLoading(false);
        }}
        disabled={isLoading}
      >
        Generate Image
      </button>
      {isLoading && <p>Loading...</p>}
    </form>
  );
};

export default ImageGenerator;
