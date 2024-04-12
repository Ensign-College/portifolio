import React from "react";
import PropTypes from "prop-types";
import Navebar from "@/components/menu/HomeB.jsx";
import Footer from "@/components/menu/footer.jsx";
import "./projects.css";
import logo from "./projectPic.png";
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];
function ProjectCard({ logos, name, content, link }) {
  return (
    <div className="relative">
      <div className="flex">
        <div>
          <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div>

          <div style={{ marginBottom: "0.5cm" }}> </div>

          <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div>
        </div>

        <br></br>
        <div style={{ marginLeft: "0.5cm" }}>
          <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div>

          <div style={{ marginBottom: "0.5cm" }}> </div>

          <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div>
        </div>

        <br></br>
        {/*third column */}
        <div style={{ marginLeft: "0.5cm", marginBottom: "2cm" }}>
          <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div>

          <div style={{ marginBottom: "0.5cm" }}> </div>

          <div data-testid="projectCard" className="project-card">
            <img data-testid="projectCardLogo" src={logos} alt={`${name} Logo`} className="project-card-logo" />
            <h2 data-testid="projectCardName">{name}</h2>

            <p data-testid="projectCardContent">{content}</p>
            <a data-testid="projectCardLink" href={link} target="_blank" rel="noreferrer">
              <img src="./link.svg" alt="" /> View Project
            </a>
          </div>
        </div>

        <br></br>

        <br></br>
      </div>
    </div>
  );
}

export default function Projects() {
  //Return HTML elements for Project page
  return (
    <div className="body">
      <div className="navebar">
        <Navebar className="Navebar" />
      </div>

      <div className="projectBody">
        <h1 className="h1">Things I’ve made trying to put my dent in the universe.</h1>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur
          adipiscing elit Ut et massa mi..
        </p>
        <br></br>
      </div>

      <ProjectCard
        name="The Firm"
        logos={"./projectPic.png"}
        content={"Creating technology to empower civilians to explore space on their own terms."}
        link={"https://stage.company-corp.com/platform"}
      />

      <div className="footerBox">
        <Footer className="Footer" links={links} />
      </div>
    </div>
  );
}
