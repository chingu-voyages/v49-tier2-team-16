import { useState } from "react";
import underConstruction from "./assets/colorconstruction.gif"
import reactLogo from './assets/react.svg';
import './App.css'
import Header from './Header'
import Footer from './Footer'
import ImageGenerator from './components/ImageGenerator';

function App() {
  // This generates a random HSL color
  const randomColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(
      Math.random() * 45 + 55
    )}%, ${Math.floor(Math.random() * 60 + 40)}%)`;
    // Extracts the HSL values from a color string
    const extractHSL = (color) => {
    const match = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    return match ? { h: match[1], s: match[2], l: match[3] } : null;
    }
    // Determines if a color is light or dark
  const isLight = (color) => {
    const { h, s, l } = extractHSL(color);
    return l > 50;
  };
  const [color, setColor] = useState(randomColor());

  return (
    <>
        <Header />
         <div className="flex justify-center items-center pt-12">
        <img src={underConstruction} alt="Under Construction" />
        {/* This is just some code to trigger a color change instead of count as comes with the default template */}
        <div className="card">
        <button
          id="color-button"
          onClick={() => {
            const nextColor = randomColor()
              setColor(nextColor);
              const btnStyle = document.getElementById("color-button").style;
              btnStyle.transition = "all 0.25s";
              // Set the text color to black or white depending on the lightness of the background color
              btnStyle.color = isLight(nextColor) ? "black" : "white";
              btnStyle.backgroundColor = nextColor;
            }}
          
        >
          color is {color}
          </button>
        </div>
        <ImageGenerator />
        <p>
          Edit <code>src/App.jsx</code> and save to test updates live.
        </p>
      </div>
      <p className="read-the-docs">
        Check out our{" "}
        <a
          href="https://chingu-voyages.github.io/v49-tier2-team-16/reqs-and-specs"
          target="_blank"
        >
          project requirements and specifications here
        </a>
      </p>
      <p>&lt; / &gt; with &lt;3 by</p>
      <p>
 <Footer />
      </p>
    </>
  );
}

export default App;
