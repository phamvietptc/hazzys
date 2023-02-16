const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        'full': '100%',
        '28.125%': '28.125%',
      },
      margin: {
        '10px': '10px',
        '84px': '84px',
        '87px': '87px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
