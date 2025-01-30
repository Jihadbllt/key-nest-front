import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/key-logo-footer.svg";
import "./FooterComp.css";

const FooterComp = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Link to="/" className="footer-logo">
        <img src={footerLogo} alt="KeyNest logo" />
      </Link>
      <p>&copy; {year} KeyNest</p>
    </footer>
  );
};

export default FooterComp;