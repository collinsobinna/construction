import React from "react";
import expertise from "../images/expertise.png";
import { AiOutlineTable } from "react-icons/ai";
import Btn from "./Btn";

const Expertise = () => {
  return (
    <div className="expertise">
      <div className="expertise-details">
        <img src={expertise} alt="" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non ac
          proin vitae massa. Mi mollis sed nunc hac sed sodales tristique erat
          sed non adipiscing ullamcorper. Ultricies orci hendrerit dui lacus vel
          quam massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Enim non ac proin vitae massa. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Explicabo aliquid sunt expedita, atque cumque
          quibusdam nisi?
        </p>

        <div className="absolute">
          <AiOutlineTable className="table" />
          <h5>Workplace</h5>
        </div>
      </div>

      <div className="expertise-btn">
        <button className="hero-btn prev">Previous</button>
        <Btn name="Next" />
      </div>
    </div>
  );
};

export default Expertise;
