import React, { useState } from "react";
// import "./Nav.css"; // Assuming you have a CSS file for styling

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="container">
        <div className="display-flex align-items-center justify-content-space-between navbar margin-top">
          <div>
            <h2 className="margin-x">Logo</h2>
          </div>
          <div>
            <ul className={`display-flex align-items-center nav-menu ${isActive ? "active" : ""}`}>
              <li className="margin-x">
                <a className="nav-links" href="#">
                  Home
                </a>
              </li>
              <li className="margin-x">
                <a className="nav-links" href="#">
                  About us
                </a>
              </li>
              <li className="margin-x">
                <a className="nav-links" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button className={`hamburger margin-x ${isActive ? "active" : ""}`} onClick={handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
      <p className="owner">Designed By The Code Bug</p>
      <p className="about">
        Responsive Navbar with Animated Hamburger/Nav-menu-icon making <br /> a cross
      </p>
    </nav>
  );
};

export default Navbar;
