import React from "react";

function NavItem({ text = "" }) {
  return (
    <div className="flex space-x-14 cursor-pointer">
      <a
        href="#"
        className=" text-md md:text-lg text-brand-green hover:text-brand-red
        hover:drop-shadow-link transition-all
        duration-500"
      >
        {text}
      </a>
    </div>
  );
}

export default NavItem;
