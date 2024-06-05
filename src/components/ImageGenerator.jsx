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
    <div className="w-full md:w-1/2 md:h-auto h-full">
      {isLoading && <p>Loading...</p>}
      {!isLoading && imgUrl && (
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-f"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="w-full h-full">
            {colors.map((color) => (
              <div
                className={`rounded-full p-6 inline-block`}
                style={{ backgroundColor: color.hex }}
              >{color.hex}</div> 
            ))}
          </div>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default ImageGenerator;
