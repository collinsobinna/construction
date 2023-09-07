import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <form>
        <label htmlFor="">Name :</label>
        <div>
          <input type="text" placeholder="Enter Full name" />
        </div>

        <label htmlFor="">Email :</label>
        <div>
          <input type="text" placeholder="Enter E-mail address" />
        </div>

        <label htmlFor="">Message :</label>
        <div>
          <input type="text" placeholder="Enter message here..." />
        </div>
      </form>

      <div className="button">
        <button className="hero-btn contact-btn">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
