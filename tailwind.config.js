module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      pattaya: ['Pattaya', 'sans-serif'],
    },
    boxShadow: {
      'custom-light': '0 0 10px #313131',
      'custom-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c',
    },
    extend: {
      colors: {
        primary: { DEFAULT: '#6b3fc4' },
        secondary: { DEFAULT: '#6b9be2' },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      padding: {
        20: '5rem',
      },
    },
  },
  plugins: [],
}
