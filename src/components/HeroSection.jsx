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
      <div className="floating-bubbles">
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
      </div>

      <div className="hero-content section-inner">
        <h1>
          <span className="signs-to-sounds">Signs to Sounds</span>
          <br />
          <span className="productathon">Productathon</span>
        </h1>
        <p className="tagline">When Hands Speak, Tech Listens</p>
        <p className="intro">
          An international competition inspiring innovation in assistive
          technology for real-time sign language to speech conversion.
        </p>
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
