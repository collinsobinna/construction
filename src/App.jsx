import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import Expertise from "./components/Expertise";
import Team from "./components/Team";
import team1 from "./images/team1.png";
import team2 from "./images/team2.png";
import team3 from "./images/team3.png";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import FooterLogo from "./components/FooterLogo";
import FooterDetails from "./components/FooterDetails";

const App = () => {
  return (
    <>
      <section className="header">
        <Navbar />
        <Hero />
      </section>

      <section className="about-container">
        <About
          number="15+"
          title="Years of Experience"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non ac proin vitae massa. Mi mollis sed nunc hac. "
        />

        <About
          number="500+"
          title="Houses Built"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non ac proin vitae massa. Mi mollis sed nunc hac. "
        />

        <About
          number="20+"
          title="Current Projects"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non ac proin vitae massa. Mi mollis sed nunc hac. "
        />
      </section>

      <section className="projects" id="projects">
        <div className="project-heading">
          <h1>Projects</h1>
          <p>See all</p>
        </div>

        <div className="project">
          <Project src={project1} />
          <Project src={project2} />
          <Project src={project3} />
          <Project src={project4} />
        </div>
      </section>

      <section className="expertise-container" id="expertise">
        <h2>Our Expertise</h2>

        <Expertise />
      </section>

      <section className="team-container" id="gallery">
        <div className="team-heading">
          <h1>Meet the team</h1>
          <p>See all</p>
        </div>

        <div className="team">
          <Team src={team1} name="Eleanor Pena" />
          <Team src={team2} name="Arlene McCoy" />
          <Team src={team3} name="Wade Warren" />
        </div>
      </section>

      <section className="newsletter-container">
        <hr />
        <div className="newsletter">
          <Newsletter />
          <Contact />
        </div>
      </section>

      <section className="footer-container">
        <div className="footer">
          <FooterLogo />
          <FooterDetails title="Company" link1="Career" />
          <FooterDetails
            title="About us"
            link1="Project"
            link2="Track Record"
            link3="Pricing"
            link4="Services"
            link5="Professional worker"
          />
          <FooterDetails
            title="Pricing"
            link1="About Product"
            link2="Management"
          />
          <FooterDetails
            title="Media"
            link1="Privacy Policy"
            link2="Development"
            link3="Terms & Services"
          />
        </div>

        <h2>
          YELLOW BRICK HOUSING AND CONSTRUCTION COMPANY LIMITED. - All Rights
          Reserved
        </h2>
      </section>
    </>
  );
};

export default App;
