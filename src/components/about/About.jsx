import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about section__padding" id="about">
      <div className="about__image"></div>
      <div className="about__content">
        <div className="about__heading">
          <h1>About Us</h1>
        </div>
        <div className="about__heading-small">
          <h3>Developer & Designer</h3>
        </div>
        <div className="about__para">
          <p>
            I am a fornt-end web developer. I can provide clean code and pexel
            perfect design. I also make the website more and more interactive
            with web aniamations. I can also provide clean code and pixel
            perflect design
          </p>
        </div>
        <div className="about__footer">
          <button type="submit">Lets Talk</button>
        </div>
      </div>
    </div>
  );
};

export default About;
