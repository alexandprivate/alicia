/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#576863", // change this for changing all green colors on the page: section's bg etc
        secondary: "#98664c", // change here to change all the orange colors: btn bg, logo etc
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // changing the font here will change the general text
        serif: ["Pacifico", "serif"], // changing the font here will change the titles
      },
    },
  },
  plugins: [],
};
