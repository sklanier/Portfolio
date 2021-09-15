module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-image' : "url('/assets/img/Steves-Desk.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
