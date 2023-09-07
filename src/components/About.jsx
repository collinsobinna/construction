import React from "react";

const About = (props) => {
  return (
    <div className="about">
      <h2>{props.number}</h2>

      <h3>{props.title}</h3>

      <p>{props.paragraph}</p>
    </div>
  );
};

export default About;
