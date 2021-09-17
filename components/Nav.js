import Link from 'next/link'

const Nav = () => (
  <nav>
    <div className="github"></div>

    <div className="bg-transparent flex justify-around w-6/12 m-auto">
      <Link href="#about"><a>About</a></Link>
      <Link href="#projects"><a>Projects</a></Link>
      <Link href="#connect"><a>Connect</a></Link>
    </div>

  </nav>
);

export default Nav;