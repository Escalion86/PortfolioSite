module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      pattaya: ['Pattaya', 'sans-serif'],
      lobster: ['Lobster', 'cursive'],
    },
    extend: {
      colors: {
        primary: { DEFAULT: '#6b3fc4' },
        secondary: { DEFAULT: '#6b9be2' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
