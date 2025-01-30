import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import footerLogo from "../assets/key-logo-footer.svg";
import "./FooterComp.css";

const FooterComp = () => {
  const { currentLang, switchLanguage } = useLanguage();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Link to="/" className="footer-logo">
        <img src={footerLogo} alt="KeyNest logo" />
      </Link>
      
      <div className="language-switcher">
        <button 
          onClick={() => switchLanguage('en')}
          className={currentLang === 'en' ? 'active' : ''}
        >
          English
        </button>
        <button
          onClick={() => switchLanguage('fr')}
          className={currentLang === 'fr' ? 'active' : ''}
        >
          Français
        </button>
        <button
          onClick={() => switchLanguage('sp')}
          className={currentLang === 'sp' ? 'active' : ''}
        >
          Español
        </button>
      </div>

      <p>&copy; {year} KeyNest</p>
    </footer>
  );
};

export default FooterComp;