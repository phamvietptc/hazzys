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
        "50px": "50px",
        "30px": "30px",
        "45px": "45px",
        "52px": "52px",
        "0.520833px": "0.520833px",
        "203px": "203px",
        "120px": "120px",
        "433px": "433px",
        "10px": "10px",
      },
      margin: {
        "10px": "10px",
        "84px": "84px",
        "87px": "87px",
        "668px": "668px",
        "30px": "30px",
        "353px": "353px",
        "50px": "50px",
        "0.46875px": "0.46875px",
        "14px": "14px",
      },
      borderRadius: {
        "50%": "50%",
      },
      width: {
        "26px": "26px",
        "1px": "1px",
        "76px": "76px",
        "58px": "58px",
        "none": "none",
        "70px": "70px",
      },
      maxWidth: {
        "1920px": "1920px",
        "70px": "70px",
      },
      height: {
        "26px": "26px",
        "668px": "668px",
        "353px": "353px",
        "70px": "70px",
        "59px": "59px",
        "60px": "60px",
        "52px": "52px",
        "calc-52px": "calc(100% - 52px)",
        "18px": "18px",
      },
      minHeight: {
        full: "100%",
        "60px": "60px",
      },
      backgroundSize: {
        "24px": "24px",
      },
      spacing: {
        "60px": "60px",
        "479.219px": "479.219px",
        "746px": "746px",
        "52px": "52px",
      },
      boxShadow: {
        "0px24px20px": "0px 24px 20px rgb(0 0 0 / 10%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
