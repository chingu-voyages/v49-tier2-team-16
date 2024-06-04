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

      fontFamily: {
        display: "OpenSans-Regular, Arial, Helvetica, sans-serif",
        caption: "IslandMoments",
      },

      dropShadow: {
        link: "0 0 10px rgba(230, 111, 116, 0.5)",
      },

      keyframes: {
        arrowRotate: {
          "0%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(-60deg)" },
          "60%": { transform: "rotate(40deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },

      animation: {
        arrowRotate: "arrowRotate 1.5s ease-in-out 1" /*infinite*/,
      },
    },
  },
  plugins: [],
};
