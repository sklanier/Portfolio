import Link from 'next/link'

const navStyles = {
  navBar: {
    height: '50px',
    alignItems: 'center'
  }
}

const Nav = () => (
  <nav>
    <div className="github"></div>

    <div className="bg-transparent flex justify-around w-8/12 m-auto" style={navStyles.navBar}>
      <img src="assets/img/Github-icon.svg"/>
      <Link href="#about"><a>About</a></Link>
      <Link href="#projects"><a>Projects</a></Link>
      <Link href="#connect"><a>Connect</a></Link>
      <img src="assets/img/Linkedin-icon.svg"/>
    </div>

  </nav>
);

export default Nav;