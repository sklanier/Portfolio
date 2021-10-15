import Header from "./Header";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./AboutSection/About";
import Projects from "./ProjectSection/Projects";
import Contact from "./FooterSection/Contact";
import PostFooter from "./FooterSection/PostFooter";
import Scripts from './Scripts'
import TopButton from './TopButton';

// const layoutStyle = {
//   display: "flex",
//   flexDirection: "column",
//   height: "100%",
//   width: "100%"
// };

// const contentStyle = {
//   flex: 1,
//   display: "flex",
//   flexDirection: "column"
// };

const Layout = () => (
  <div className="Layout">
    <Header/>
    <Nav/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <PostFooter/>
    <Scripts/>
    <TopButton/>
  </div>
);

export default Layout;