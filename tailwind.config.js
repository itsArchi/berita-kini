/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        cPrimary: "#3758F9",
        primary: {
          50: "#E3E2FF",
          100: "#BBDFFF",
          200: "#93CBFC",
          300: "#5FB7FF",
          400: "#4AA7F9",
          500: "#0099FF",
          600: "#2D8BE9",
          700: "#2879D6",
          800: "#2469C4",
          900: "#1C4AA5",
        },
        secondary: "#13C296",
        "primary-text": "#637381",
        "secondary-text": "#8899A8",
        stroke: "DFE4EA",
        dark: {
          50: "#E5E7E8",
          100: "#BEC5CC",
          200: "#959EA9",
          300: "#6D7988",
          400: "#526071",
          500: "#37485B",
          600: "#2C3C4D",
          700: "#1F2B39",
          800: "#111B26",
          900: "#000211",
        },
      },
    },
  },
  plugins: [],
};
