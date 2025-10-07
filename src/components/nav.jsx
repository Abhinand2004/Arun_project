import React, { useState } from "react";
import { Link } from "react-scroll";
import "./nav.css";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">MyBrand</h1>
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link href="#hero">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#more">More</Link></li>
      </ul>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

export default Nav;
