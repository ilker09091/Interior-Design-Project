import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdViewCozy } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

import "./Navbar.css";

function Navbar() {
  const handleMenu = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
  };

  return (
    <header>
      <div className="logo">
        <MdViewCozy size={35} />
        <span>Zygronix</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/layout">Layout</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/how-to-get">How to get</Link>
        <button className="btn">
          Contact Us <FaArrowRightLong />
        </button>
      </nav>
      <HiMenuAlt3 size={30} onClick={handleMenu} className="menu-icon" />
    </header>
  );
}

export default Navbar;
