const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        full: "100%",
        "28.125%": "28.125%",
        "716px": "716px",
      },
      margin: {
        "10px": "10px",
        "84px": "84px",
        "87px": "87px",
        "636px": "636px",
      },
      borderRadius: {
        "50%": "50%",
      },
      width: {
        "26px": "26px",
      },
      maxWidth: {
        "1920px": "1920px",
      },
      height: {
        "26px": "26px",
        "636px": "636px",
      },
      minHeight: {
        full: "100%",
      },
      backgroundSize: {
        "24px": "24px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
