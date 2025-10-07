import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Build Your Dream Website</h1>
        <p>We craft stunning websites that drive results and impress your audience.</p>
        <Link to="#services" className="btn">Get Started</Link>
      </div>
    </section>
  );
}

export default Hero;
