module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'primaryBlue' : "#174AE6",
    },
    extend: {
      backgroundImage: {
        'hero-image' : "url('/assets/img/Steves-Desk.jpg')",
      },
      height: {
        'aboutHeight' : "527px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
