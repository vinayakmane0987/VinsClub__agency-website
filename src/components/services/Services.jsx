import React from "react";
import "./services.css";
import Img1 from "../../assests/service2__img.jpeg";
import Img2 from "../../assests/service3__img.jpeg";
const Services = () => {
  return (
    <div className="service section__padding" id="service">
      <div className="service__content-one">
        <div className="service__content-one-img">
          <img src={Img1} alt="" />
        </div>
        <div className="service__content-one-content">
          <h1>We Make Your idea Real</h1>
          <p>
            Apparently wee had reached a great height in the atmosphere, for the
            sky was dead black.
          </p>
          <p>
            By the same illusion wich lifts the horizon of the sea to the level
            of the spector an a hilliside, the sable cloud beneath was dished
            out, and the car seemed to float
          </p>
          <h5>About Us</h5>
        </div>
      </div>
      <div className="service__content-two">
        <div className="service__content-two-content">
          <h1>We Make Your idea Real</h1>
          <p>
            Apparently wee had reached a great height in the atmosphere, for the
            sky was dead black.
          </p>
          <p>
            By the same illusion wich lifts the horizon of the sea to the level
            of the spector an a hilliside, the sable cloud beneath was dished
            out, and the car seemed to float
          </p>
          <h5>About Us</h5>
        </div>
        <div className="service__content-two-img">
        <img src={Img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
