import Nav from "./Nav";
import Hero from "./Hero";
import About from "./AboutSection/About";
import Projects from "./ProjectSection/Projects";
import Contact from "./FooterSection/Contact";
import PostFooter from "./FooterSection/PostFooter";
import Scripts from './Scripts'


const Layout = () => (
  <div className="Layout">
    <Nav/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <PostFooter/>
    <Scripts/>
  </div>
);

export default Layout;