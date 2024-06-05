import React, { useEffect, useState } from "react";
import generateImgURL from "../utils/generateImgURL";

const ImageGenerator = ({ prompt, colors }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      try {
        setIsLoading(true);
        const url = await generateImgURL(prompt, colors);
        setImgUrl(url);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImage();
  }, [prompt, colors]);
  return (
    <div className="w-full h-full">
      {isLoading && <p>Loading...</p>}
      {!isLoading && imgUrl && (
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-f"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="w-full h-full flex flex-col">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`rounded-full p-6 m-6 circle-color-box`}
                style={{ backgroundColor: color.hex }}
              >
                <div className="center">
                  <p>{color.hex}</p>
                  <p>{color.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default ImageGenerator;
