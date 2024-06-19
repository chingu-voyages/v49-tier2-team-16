import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ScrollButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = ["/", "/input", "/result"];
  const currentPageIndex = routes.indexOf(location.pathname);

  const goBack = () => {
    if (currentPageIndex > 0) {
      navigate(-1);
    }
  };

  const goForward = () => {
    if (currentPageIndex === 1) {
      return;
    } else if (currentPageIndex < routes.length - 1) {
      navigate(routes[currentPageIndex + 1]);
    }
  };

  return (
    <div className='flex justify-center space-x-16 cursor-pointer'>
      <button
        onClick={goBack}
        className={`absolute bottom-[20%] w-4 h-4 bg-primary-white border border-brand-green border-opacity-40 rounded-full shadow-shape transition-all duration-300 hover:bg-primary-color hover:border-brand-red hover:border-opacity-40'
          ${currentPageIndex <= 0 ? "opacity-50 cursor-not-allowed" : ""}`}
      ></button>
      <button
        onClick={goForward}
        className={`absolute bottom-[20%] w-4 h-4 bg-primary-white border border-brand-green border-opacity-40 rounded-full shadow-shape transition-all duration-300 hover:bg-primary-color hover:border-brand-red hover:border-opacity-40 
          ${
            currentPageIndex >= routes.length - 2
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
      ></button>
    </div>
  );
}

export default ScrollButton;
