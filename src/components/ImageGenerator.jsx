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
    <section>
      {isLoading && <p>Loading...</p>}
      {!isLoading && imgUrl && (
        <img
          src={imgUrl}
          alt={`Image generated from ${colors} and ${prompt}`}
        />
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </section>
  );
};
export default ImageGenerator;
