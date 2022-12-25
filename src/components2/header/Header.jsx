import React from "react";
import "./header.css";
import ai from '../../assests/header__img.jpg'
const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header__content">
        <div className="header__content-heading">
          <h1>Digital</h1>
          <h1>Magical</h1>
        </div>
        <div className="header__content-para">
          <p>
            We are a digital agency focused on creating the best innovations and
            world class quality solution
          </p>
        </div>
        <div className="header__content-footer">
          <h3>Let's Talk</h3>
        </div>
      </div>
      <div className="header__content-img">
      <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
