import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const navStyles = {
  navBar: {
    height: '50px',
    alignItems: 'center'
  }
}

const Nav = () => {

  const router = useRouter();

  return (
    <nav id="nav" className="transition duration-500 z-10 bg-transparent fixed top-0 left-0 right-0">
      <div className="bg-transparent flex justify-around w-8/12 m-auto" style={navStyles.navBar}>
        <a href="https://www.github.com/sklanier" target="_blank"><img src="../assets/img/Github-icon.svg"/></a>
        
        {router.asPath === '/' ?
          <div className="flex justify-evenly w-3/12">
            <AnchorLink className="transition duration-500 navText" href="#about">ABOUT</AnchorLink>
            <Link href="/projects">
              <a className="transition duration-500 navText">PROJECTS</a>
            </Link>
            <AnchorLink className="transition duration-500 navText" href="#contact">CONTACT</AnchorLink>
          </div>
          :
          <div className="flex justify-evenly w-3/12">
            <Link href="/#about">
              <a className="transition duration-500 navText">ABOUT</a>
            </Link>
            <Link href="/projects">
              <a className="transition duration-500 navText">PROJECTS</a>
            </Link>
            <Link href="/#contact">
              <a className="transition duration-500 navText">CONTACT</a>
            </Link>
          </div>
        }
        <a href="https://www.linkedin.com/in/steve-lanier-a12a1850/" target="_blank"><img src="../assets/img/LinkedIn-Icon.svg"/></a>
      </div>
    </nav>
  )
};

export default Nav;