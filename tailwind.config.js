module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      },
      container: {
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          lg: '2.25rem'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
