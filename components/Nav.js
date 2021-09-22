import Link from 'next/link'

const navStyles = {
  navBar: {
    height: '50px',
    alignItems: 'center'
  }
}

const Nav = () => (
  <nav className="bg-transparent fixed top-0 left-0 right-0">
    <div className="bg-transparent flex justify-around w-8/12 m-auto" style={navStyles.navBar}>
      <img src="assets/img/Github-icon.svg"/>
      <div className="flex justify-evenly w-4/12">
        <Link href="#about"><a className="navText">ABOUT</a></Link>
        <Link href="#projects"><a className="navText">PROJECTS</a></Link>
        <Link href="#connect"><a className="navText">CONNECT</a></Link>
      </div>
      <img src="assets/img/Linkedin-icon.svg"/>
    </div>
  </nav>
);

export default Nav;