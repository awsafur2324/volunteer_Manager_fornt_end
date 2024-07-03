const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        banner: '"Poetsen One", sans-serif',
        banner1: '"Rancho", cursive',
        banner2: '"Playfair Display", serif',
        display: '"Lato", sans-serif',
        display1: '"Poppins", sans-serif',
        display2: '"Roboto", sans-serif',
        header: ' "Oswald", sans-serif',
      },
      colors: {
        primary: "#2C3E50",
        success: "#2ECC71",
        info: "#BDC3C7",
        error: "#F39C12",
      },
      screens: {
        'xs': '380px',
      }
    },
  },
  plugins: [flowbite.plugin()],
};
