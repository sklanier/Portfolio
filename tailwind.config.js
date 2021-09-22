module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-image' : "url('/assets/img/Steves-Desk.jpg')",
        'footer-image' : "url('/assets/img/Header-bg-pattern.jpg')",
      },
      height: {
        'sectionHeight' : "527px",
        'footerHeight' : "421px",
        'postFooter' : "47px",
        'inherit' : 'inherit',
      },
      colors: {
        'primaryBlue' : "#174AE6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
