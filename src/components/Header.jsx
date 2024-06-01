import React from "react";

function Header() {
  return (
    <header className="flex justify-between mx-10 px-10 items-center ">
      <img src="./assets/color-compass.svg" alt="Color Compass" className="h-100" />
      <div className="flex space-x-10">
        <a href="#" className="text-md font-bold">Home</a>
        <a href="#" className="text-md font-bold">Get color</a>
      </div>
    </header>
  );
}

export default Header;