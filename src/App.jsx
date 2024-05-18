import { useState } from "react";
import reactLogo from "./assets/react.svg";
import chinguLogo from "./assets/chingo-house-logo.png";
import tailWindLogo from "./assets/tailwindcss.png";
import underConstruction from "./assets/colorconstruction.gif";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailWindLogo} className="logo" alt="Tailwindcss logo" />
        </a>
        <a href="https://chingu.io" target="_blank">
          <img src={chinguLogo} className="logo" alt="Chingu logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold">Welcome to Color Compass!</h1>
      <p>
        This is our initial deployment. We are currently under development.{" "}
      </p>
      <p>Please come back often for updates.</p>
      <div className="flex justify-center items-center pt-12">
        <img src={underConstruction} alt="Under Construction" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
        <a
          className="text-3xl font-bold underline"
          href="https://github.com/chingu-voyages/v49-tier2-team-16"
          target="_blank"
        >
          Chingu Voyage 49 Team 16
        </a>
      </p>
    </>
  );
}

export default App;
