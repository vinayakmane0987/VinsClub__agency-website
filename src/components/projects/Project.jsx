import React from "react";
import "./project.css";
const Project = () => {
  return (
    <div className="projects section__padding" id="project">
      <div className="projects__content-one">
        <div className="project__year">
          <h3>2022</h3>
        </div>
        <div className="project__heading">
          <h1>VinsClub.com</h1>
          <p>Personal portfolio</p>
        </div>
        <div className="project__image1"></div>
      </div>
      <div className="projects__content-two">
        <div className="project__year"><h3>2022</h3></div>
        <div className="project__heading">
        <h1>VinsClub.com</h1>
        <p>E-commerce</p>
        </div>
        <div className="project__image2"></div>
      </div>
      <div className="projects__content-three">
        <div className="project__year"><h3>2022</h3></div>
        <div className="project__heading">
        <h1>Squidward Tenpoles</h1>
        <p>Brand Identity</p>
        </div>
        <div className="project__image3"></div>
      </div>
      <div className="projects__content-four">
        <div className="project__year"><h3>2022</h3></div>
        <div className="project__heading">
        <h1>Jekahuna Laguna</h1>
        <p>Brand Identity</p>
        </div>
        <div className="project__image4"></div>
      </div>
    </div>
  );
};

export default Project;
