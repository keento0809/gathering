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
      minHeight: {
        500: "500px",
        590: "590px",
        600: "600px",
      },
      maxHeight: {
        550: "550px",
        580: "580px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
