import Header from "./Header";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import PostFooter from "./PostFooter";

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

const Layout = props => (
  <div className="Layout">
    <Nav/>
    <Hero/>
    <About/>
    <Projects/>
    <Footer/>
    <PostFooter/>
  </div>
);

export default Layout;