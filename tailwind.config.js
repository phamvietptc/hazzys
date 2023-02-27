const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      "2.85": ['2.8571428571rem', {
        lineHeight: '1.5',
        letterSpacing: '-0.3px',
        fontWeight: '400',
      }],
      "3.5": ['3.5714285714rem', {
        lineHeight: '1.5',
        letterSpacing: '-0.3px',
        fontWeight: '400',
      }],
    },

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
        "2.6041666667%": "2.6041666667%",
        "7.9166666667%": "7.9166666667%",
        "13.5%": "13.5%",
        "70px": "70px",
        "150px": "150px",
        "138.889%": "138.889%",
        "129%": "129%",
        "2px": "2px",
        "14px": "14px",
        "5px": "5px",
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
        "150px": "150px",
        "100px": "100px",
        "68px": "68px",
        "calc-147px": "-147px -5px 0 calc(5.56% + 15px)",
        "630px": "630px",
        "9px": "9px",
        "5px": "5px",
        "3px": "3px",
      },
      borderRadius: {
        "50%": "50%",
      },
      width: {
        "26px": "26px",
        "1px": "1px",
        "76px": "76px",
        "58px": "58px",
        none: "none",
        "70px": "70px",
        "calc-10px": "calc(100% - (5.56% + 10px))",
        "calc-505px": "calc(100% - 505px)",
        "63.125%": "63.125%",
        "99px": "99px",
        "11px": "11px",
        "155px": "155px",
        "260px": "260px",
        "52.63%": "52.63%",
        "47.37%": "47.37%",
        "6px": "6px",
        "98px": "98px",
        "72px": "72px",
      },
      minWidth: {
        "580px": "580px",
        "80px": "80px",
        "98px": "98px",
      },
      maxWidth: {
        "1920px": "1920px",
        "70px": "70px",
        "591px": "591px",
        "500px": "500px",
        "330px": "330px",
        "876px": "876px",
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
        "980px": "980px",
        "2px": "2px",
        "11px": "11px",
        "121px": "121px",
        "6px": "6px",
      },
      minHeight: {
        full: "100%",
        "60px": "60px",
      },
      maxHeight: {
        "21px": "21px",
      },
      backgroundSize: {
        "24px": "24px",
      },
      spacing: {
        "60px": "60px",
        "479.219px": "479.219px",
        "746px": "746px",
        "52px": "52px",
        "85px": "85px",
        "280px": "280px",
        "340px": "340px",
        "270px": "270px",
        "57.0833333333%": "57.0833333333%",
        "8.4854014599%": "8.4854014599%",
        "50px": "50px",
        "59px": "59px",
        "120px": "120px",
        "125%": "125%",
        "10px": "10px",
        "54px": "54px",
      },
      boxShadow: {
        "0px24px20px": "0px 24px 20px rgb(0 0 0 / 10%)",
      },
      fontSize: {
        7.7: "7.7857142857rem",
      },
      lineHeight: {
        835: ".835",
        "60px": "60px",
      },
      colors: {
        rgba: "rgba(0,0,0,.1)",
        rgba33: "rgba(33,33,33,.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
