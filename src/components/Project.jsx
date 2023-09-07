import React from "react";

const Project = (props) => {
  return (
    <div className="project-list">
      <div>
        <img src={props.src} alt="" />
      </div>

      <div className="project-list-name">
        <h2>Arlene McCoy</h2>
        <p>January, 2023</p>
      </div>

      <p>
        Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
        cillum dolor. Voluptate exercitation incididunt aliquip deserunt.......
      </p>
    </div>
  );
};

export default Project;
