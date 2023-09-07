import React from "react";
import logo from "../images/Yellow Brick.png";
import Btn from "./Btn";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="navbar-list">
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#expertise">Our Expertise </a>
        </div>
        <div>
          <a href="#gallery">Gallery </a>
        </div>
        <div>
          <a href="#">About us </a>
        </div>

        <Btn name="Get Started" />
      </div>
      <GiHamburgerMenu className="hamburger" />
      <div></div>
    </nav>
  );
};

export default Navbar;
