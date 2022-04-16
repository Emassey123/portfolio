import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./NavBar.scss";
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
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contactme">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
