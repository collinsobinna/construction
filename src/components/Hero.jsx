import React from "react";
import Btn from "./Btn";

const Hero = () => {
  return (
    <div className="hero">
      <h1>Building safe homes the right way.</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non ac
        proin vitae massa. Mi mollis sed nunc hac sed sodales tristique erat sed
        non adipiscing ullamcorper.
      </p>

      <div>
        <button className="hero-btn">View projects </button>
        <Btn name="Contact us" />
      </div>

      <div className="hidden">
        <button>mee</button>
      </div>
    </div>
  );
};

export default Hero;
