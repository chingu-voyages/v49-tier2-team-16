import React from "react";

function Wrapper({ children }) {
  return (
    <div className="container mx-auto px-6 md:px-9 font-display">
      {children}
    </div>
  );
}

export default Wrapper;
