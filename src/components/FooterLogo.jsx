import React from "react";
import logo from "../images/Yellow Brick.png";

const FooterLogo = () => {
  return (
    <div className="footer-logo">
      <img src={logo} alt="" />
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <hr />
      <p>3891 Ranchview Dr. Richardson, California 62639</p>
      <p>(217) 555-0113</p>
      <p>tranthuy.nute@gmail.com</p>
    </div>
  );
};

export default FooterLogo;
