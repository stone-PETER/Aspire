import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = ({ onRegisterClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    onRegisterClick();
  };

  return (
    <header
      className={`site-header ${scrolled ? "scrolled" : ""}`}
      role="banner"
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="section-inner header-bar">
        <div className="brand">
          <div className="partner-logos">
            <img
              src="/ieee png.png"
              alt="IEEE Logo"
              className="partner-logo ieee-logo"
            />
            <img
              src="/sps kc png.png"
              alt="SPS Kerala Chapter Logo"
              className="partner-logo sps-logo"
            />
            <img
              src="/Vector.png"
              alt="SPS Kerala Chapter Logo"
              className="partner-logo sps-logo"
            />
          </div>
          {/* <span className="logo-circle" aria-hidden="true">
            S2S
          </span>
          <span className="brand-name">Signs to Sounds</span> */}
        </div>
        <nav aria-label="Primary" className="nav-main">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#phases">Phases</a>
            </li>
            <li>
              <a href="#prizes">Prizes</a>
            </li>
            <li>
              <a href="#opportunities">Opportunities</a>
            </li>
            {/* <li>
              <a href="#team">Team</a>
            </li> */}
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#posters">Posters</a>
            </li>
          </ul>
        </nav>
        <div className="header-cta">
          <a
            href="#register"
            className="button primary small"
            onClick={handleRegisterClick}
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
