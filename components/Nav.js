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

function NavLink({to, children}) {
  return <a href={to} className={`mx-4`}>
      {children}
  </a>
}

const MobileNav = ({ open, setOpen }) => {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
        <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <a className="text-xl font-semibold" href="/">LOGO</a>
        </div>
        <div className="flex flex-col ml-4">
            <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                About
            </a>
            <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                Contact
            </a>
        </div>  
    </div>
)
}

// const Nav = () => {
//   const [open, setOpen] = useState(false)
//   const router = useRouter();

//   return (
//     <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
//             <MobileNav open={open} setOpen={setOpen}/>
//             <div className="w-3/12 flex items-center">
//                 <a className="text-2xl font-semibold" href="/">LOGO</a>
//             </div>
//             <div className="w-9/12 flex justify-end items-center">

//                 <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
//                     setOpen(!open)
//                 }}>
//                     {/* hamburger button */}
//                     <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
//                     <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
//                     <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
//                 </div>

//                 <div className="hidden md:flex">
//                     <NavLink to="/contact">
//                         CONTACT
//                     </NavLink>
//                     <NavLink to="/about">
//                         ABOUT
//                     </NavLink>
//                 </div>
//             </div>
//         </nav>
//   )
// };

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