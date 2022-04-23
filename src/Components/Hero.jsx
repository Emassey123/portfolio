import React from "react";
import "./Hero.css";
import pdf from "../resume.pdf";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <section className="hero-wrapper">
        <section className="hero-left-side">
          <h1 className="hero-left-side-title hero-title">Emmanuel</h1>
          <h3 className="hero-left-side-subtitle hero-subtitle">Software</h3>
          <a href="#portfolio">
            <button className="hero-left-side-button hero-button">
              Portfolio
            </button>
          </a>
        </section>

        <section className="hero-right-side">
          <h1 className="hero-right-side-title hero-title">Massey</h1>
          <h3 className="hero-right-side-subtitle hero-subtitle">Engineer</h3>
          <a href={pdf} target="_blank">
            <button className="hero-right-side-button hero-button">
              Resume
            </button>
          </a>
        </section>
      </section>
    </section>
  );
};

export default Hero;
