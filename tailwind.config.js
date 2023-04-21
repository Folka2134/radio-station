/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        "3xl": { raw: "(min-width: 1600px)" },
        "4xl": { raw: "(min-width: 1800px)" },
        "5xl": { raw: "(min-width: 2000px)" },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
