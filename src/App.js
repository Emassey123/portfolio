import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutMe from "./Pages/AboutMe";
// import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
// import Footer from "./Components/Footer";
// import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header> */}
        <NavBar />
        <Home />
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/aboutme" element={<AboutMe />}></Route>
          {/* <Route path="/skills" element={<Skills />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route> */}
          <Route path="/contactme" element={<Contact />}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
