import { useEffect, useState } from "react";
import generateImgURL from "../utils/generateImgURL";
import { setContrastText } from "../utils/setContrastText";
import loadingGif from "../img/loading.gif";

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
      {isLoading && (
        <div className="w-full h-full">
          <img
            className="mx-auto rounded"
            src={loadingGif}
            alt="loading image..."
          />
          <p className="text-center">
            Generating an image to visualize this color scheme... Please wait.
          </p>
        </div>
      )}
      {!isLoading && imgUrl && (
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-f ai-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="w-full h-full flex flex-col">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`rounded-full p-6 m-6 circle-color-box font-bold`}
                style={{
                  backgroundColor: color.hex,
                  color: setContrastText(color.hex),
                }}
              >
                <div className="text-center">
                  <p>{color.hex}</p>
                  <p>{color.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && (
        <div className="w-full h-full text-center">
          <p style={{ color: "red" }}>{error}</p>
        </div>
      )}
    </div>
  );
};
export default ImageGenerator;
