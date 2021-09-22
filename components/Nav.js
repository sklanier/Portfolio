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
      <Link href="#about"><a className="text-white">About</a></Link>
      <Link href="#projects"><a className="text-white">Projects</a></Link>
      <Link href="#connect"><a className="text-white">Connect</a></Link>
      <img src="assets/img/Linkedin-icon.svg"/>
    </div>
  </nav>
);

export default Nav;