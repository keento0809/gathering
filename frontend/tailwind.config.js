/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        common: "url('/bgImage.jpg')",
      },
      minHeight: {
        500: "500px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
