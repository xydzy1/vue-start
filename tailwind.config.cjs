module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        c1: '#ABC5F3',
        c2: '#C2DEF4',
        c3: '#D5F2F4',
        cborder: '#313131',
      },
      container: {
        center: true,
        padding: '10px',
      },
      spacing:{
        '500': '500px',
        '760': '760px',
      },
      flexBasis: {
        '1/7': '14.2857143%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
