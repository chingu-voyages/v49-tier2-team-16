import React, { useState } from "react";
import "./App.css";

import Header from "./Header";
import UserData from "./components/UserData";

function App() {
  const [formData, setFormData] = useState({
    usage: "Coordinate colors for my outfit!",
    colorScheme: "complimentary",
  });

  return (
    <>
      <Header />
      <UserData
        usage={formData.usage}
        colorScheme={formData.colorScheme}
        setFormData={setFormData}
      />
    </>
  );
}

export default App;
