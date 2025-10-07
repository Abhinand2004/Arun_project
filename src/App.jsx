import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import More from "./components/More";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Services />
      <More />
      <Footer />
    </div>
  );
}

export default App;
