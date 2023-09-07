import React from "react";

const Btn = (props) => {
  return (
    <div>
      <button className="btn" style={props.style}>
        {props.name}
      </button>
    </div>
  );
};

export default Btn;
