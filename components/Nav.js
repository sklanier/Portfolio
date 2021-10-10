import AnchorLink from 'react-anchor-link-smooth-scroll'

const navStyles = {
  navBar: {
    height: '50px',
    alignItems: 'center'
  }
}

const Nav = () => (
  <nav id="nav" className="transition duration-500 z-10 bg-transparent fixed top-0 left-0 right-0">
    <div className="bg-transparent flex justify-around w-8/12 m-auto" style={navStyles.navBar}>
      <a href="https://www.github.com/sklanier" target="_blank"><img src="assets/img/Github-icon.svg"/></a>
      <div className="flex justify-evenly w-3/12">
        <AnchorLink className="transition duration-500 navText" href="#header">ABOUT</AnchorLink>
        <AnchorLink className="transition duration-500 navText" href="#projects">PROJECTS</AnchorLink>
        <AnchorLink className="transition duration-500 navText" href="#contact">CONTACT</AnchorLink>
      </div>
      <a href="https://www.linkedin.com/in/steve-lanier-a12a1850/" target="_blank"><img src="assets/img/LinkedIn-Icon.svg"/></a>
    </div>
  </nav>
);

export default Nav;