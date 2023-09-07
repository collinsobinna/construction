import React from "react";

const Team = (props) => {
  return (
    <div className="team-card">
      <img src={props.src} alt="" />

      <div className="team-absolute">
        <h2>{props.name}</h2>
        <h3>CEO & Architecture designer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa
          ut tempor, felis in. Ullamcorper sed sodales
        </p>
      </div>
    </div>
  );
};

export default Team;
