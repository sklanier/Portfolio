import Header from "./Header";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";

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
    
  </div>
);

export default Layout;