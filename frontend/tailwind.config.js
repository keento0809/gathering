/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
