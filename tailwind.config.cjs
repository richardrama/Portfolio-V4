/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        greenPrimary: "#2ee316",
        greenSecondary: "#21a210",
        cyanPrimay: "#1cdddd",
        black: "#1D1F1F",
        white: "#FAFAFA",
        gray: "#989898",
        darkGray: "#252929",
        lightGray: "#36393A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};