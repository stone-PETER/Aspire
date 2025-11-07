import React from "react";
import "../App.css";
import "./HeroSection.css";

const HeroSection = ({ onRegisterClick }) => {
  const handleRegisterClick = (e) => {
    e.preventDefault();
    onRegisterClick();
  };

  return (
    <section className="hero">
      {/* Floating Bubbles */}
      {/* <div className="floating-bubbles">
        <div className="bubble bubble1">
          <img src="/ast1.png" alt="hand icon" />
        </div>
        <div className="bubble bubble2">
          <img src="/ast2.png" alt="sign icon" />
        </div>
        <div className="bubble bubble3">
          <img src="/ast3.png" alt="sound wave" />
        </div>
        <div className="bubble bubble4">
          <img src="/asts.png" alt="AI icon" />
        </div>
      </div> */}

      <div className="hero-content section-inner">
        <h1>
          <span className="signs-to-sounds">ASPIRE</span>
          <br />
          <span className="productathon">Signal Processing Initiative</span>
        </h1>
        <p className="tagline">
          Annual Signal Processing Initiative for Regional Empowerment
        </p>
        {/* <p className="intro">
          A flagship one-day event by IEEE SPS Kerala Chapter uniting Student
          Branch Chapters across the Travancore Hub. Experience technical
          excellence through multiple parallel tracks, each uniquely designed by
          individual chapters to foster innovation, collaboration, and
          leadership in Signal Processing.
        </p> */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Regional Hubs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Multiple</span>
            <span className="stat-label">Parallel Tracks</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Day Event</span>
          </div>
        </div>
        <div className="hero-actions">
          <a
            href="#register"
            className="button primary"
            onClick={handleRegisterClick}
          >
            Register Now
          </a>
          <a href="#about" className="button secondary alt">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
