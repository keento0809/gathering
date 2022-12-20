/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-red": "rgb(254 202 202)",
        primary: "#EB455F",
        secondary: "#FCFFE7",
        textPrimary: "#2B3467",
        textSecondary: "#BAD7E9",
      },
      width: {
        180: "180px",
      },
      height: {
        180: "180px",
        500: "500px",
      },
      backgroundImage: {
        common: "url('/bgImage.jpg')",
      },
      maxWidth: {
        100: "100px",
        350: "350px",
        372: "372px",
        400: "400px",
        500: "500px",
        580: "580px",
        800: "800px",
        1000: "1000px",
      },
      minWidth: {
        100: "100px",
        140: "140px",
        200: "200px",
        300: "300px",
        374: "374px",
      },
      minHeight: {
        72: "72px",
        200: "200px",
        236: "236px",
        500: "500px",
        490: "490px",
        590: "590px",
        600: "600px",
        700: "700px",
        800: "800px",
      },
      maxHeight: {
        550: "550px",
        580: "580px",
        640: "640px",
        700: "700px",
      },
      flexBasis: {
        350: "350px",
        372: "372px",
      },
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
