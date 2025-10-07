import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/Hero";
import About from "./components/about";
import Services from "./components/Services";
import More from "./components/more";
import Footer from "./components/footer";

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
