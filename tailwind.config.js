/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-rgba": "rgba(255, 255, 255, 0.57)",
        "black-rgba": "rgba(0,0,0,0.5)",
      },
      translate: {
        "translateX-100": "translateX(-100%)",
      },
      minHeight: {
        "800-px": "50rem",
      },
      minWidth: {
        "11rem": "12rem",
      },
      container: {
        "padding-width": "4rem , 6rem",
      },
    },
  },
  plugins: [],
};
