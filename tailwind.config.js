/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F1EBE5",
        "primary-white": "#FFFFFF",
        "primary-dark": "#334566",
        "secondary-color": "#445C88",
        "secondary-dark": "#817986",
        "brand-red": "#E66F74",
        "brand-light-green": "#01A391",
        "brand-green": "#018475",
      },
      backgroundImage: {
        "main-page": 'url("/src/img/main-section-bg.jpg")',
        "input-page": 'url("/src/img/input-section-bg.png")',
        "result-page": 'url("/src/img/results-section-bg.png")',
      },

      fontFamily: {
        display: "OpenSans-Regular, Arial, Helvetica, sans-serif",
        caption: "IslandMoments",
      },

      dropShadow: {
        link: "0 0 10px rgba(230, 111, 116, 0.5)",
      },

      boxShadow: {
        shape: "0 0 6px #EBC0C1",
      },

      keyframes: {
        arrowRotate: {
          "0%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(-15deg)" },
          "60%": { transform: "rotate(50deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        slideIn: {
          "0%": { transform: "translateX(50%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },

      animation: {
        arrowRotate: "arrowRotate 1.5s ease-in-out 1" /*infinite*/,
        slideIn: "slideIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
