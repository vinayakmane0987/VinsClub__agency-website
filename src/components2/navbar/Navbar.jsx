import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__element">
        <div className="navbar__element-logo">
          <h5>Vins Club</h5>
        </div>
        <div className="navbar__element-keys">
          <p>
            <a href="#home">home</a>
          </p>
          <p>
            <a href="#service">service</a>
          </p>
          <p>
            <a href="#about">about</a>
          </p>
          <p>
            <a href="#insights">insights</a>
          </p>
          <p>
            <a href="#project">project</a>
          </p>
          <p>
            <a href="#contact">contact</a>
          </p>
        </div>
      </div>
      <div className="navbar__element-signin">
        <button type="submit">Sign in</button>
      </div>
      <div className="navbar__menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="navbar__menu_container scale-up-center">
            <div className="navbar__menu_container-element">
              <p>
                <a href="#home">home</a>
              </p>
              <p>
                <a href="#service">service</a>
              </p>
              <p>
                <a href="#about">about</a>
              </p>
              <p>
                <a href="#insights">insights</a>
              </p>
              <p>
                <a href="#project">project</a>
              </p>
              <p>
                <a href="#contact">contact</a>
              </p>
            </div>
            <div className="navbar__menu_container-sign">
              <button type="button">Sign in</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
