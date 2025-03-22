import React, { useRef } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Social from "./Social";
import { motion } from "framer-motion";

import ThreeDImage from "./ThreeDImage";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);
  function scrollToSection(item) {
    if (item == "Home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (item == "About") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (item == "Services") {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (item == "Contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="App">
      <div className="navBar">
        <NavBar scrollToSection={scrollToSection} />
      </div>
      <div className="home-app">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={serviceRef}>
          <Services />
        </div>
        <div ref={contactRef} className="social-contact">
          <Contact />
          <Social />
        </div>
      </div>
    </div>
  );
}

export default App;
