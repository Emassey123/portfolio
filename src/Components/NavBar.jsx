import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./NavBar.css";
import { useState } from "react";
const NavBar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <header>
      <div className="menu-icon">
        <GiHamburgerMenu className="menu" onClick={showMenu} />
      </div>
      <nav className={active ? "slider-active slider" : "slider"}>
        <ul>
          <div className="closed">
            <AiOutlineClose className="close" onClick={showMenu} />
          </div>
          <li>
            <a href="#home" onClick={showMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" onClick={showMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={showMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={showMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={showMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
