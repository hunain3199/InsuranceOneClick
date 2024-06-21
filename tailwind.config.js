const { red, yellow } = require("@mui/material/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundGradient: {
        "blue-gradient": "linear-gradient(to right, #add8e6, #00008b)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: "#0096FF",
        yellow: "#ef9807",
        customBlue: "#f2f7fa",
        customRed: "#e3342f",
        borderGray: "rgba(0, 0, 0, 0.87)",
        lightGray: "#2a2a2a",
        gray: "#e0e0e0",
        lightBlue: "#e5f2fc",
      },
    },
  },
  plugins: [],
};
