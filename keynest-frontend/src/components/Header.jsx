import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import keyLogo from "../assets/key-logo.svg"; 

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={keyLogo} alt="KeyNest Logo" className="logo-image" />
        <span className="logo-text">KEYNEST</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              ABOUT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;