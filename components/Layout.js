import Nav from "./Nav";
import Hero from "./Hero";
import About from "./AboutSection/About";
import Contact from "./FooterSection/Contact";
import PostFooter from "./FooterSection/PostFooter";
import Scripts from './Scripts'
import ProjectSection from "./ProjectSection/ProjectSection";


const Layout = () => (
  <div className="Layout">
    <Nav/>
    <Hero/>
    <About/>
    <ProjectSection/>
    <Contact/>
    <PostFooter/>
    <Scripts/>
  </div>
);

export default Layout;