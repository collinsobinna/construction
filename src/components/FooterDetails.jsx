import React from "react";

const FooterDetails = (props) => {
  return (
    <div className="footer-details">
      <h2>{props.title}</h2>
      <ul>
        <li>{props.link1}</li>
        <li>{props.link2}</li>
        <li>{props.link3}</li>
        <li>{props.link4}</li>
        <li>{props.link5}</li>
      </ul>
    </div>
  );
};

export default FooterDetails;
