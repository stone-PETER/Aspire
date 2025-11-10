
import React from "react";
import "./HeroSection.css";

const HeroSection = ({ onRegisterClick }) => {
  const handleRegisterClick = (e) => {
    e.preventDefault();
    onRegisterClick?.();
  };

  return (
    <section className="hero-section">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        {/* Main heading */}
        <div className="title-wrapper">
          <div className="title-accent"></div>
          <h1 className="hero-title">
            <span className="aspire-text">ASPIRE</span>
            <span className="subtitle-text">Signal Processing Initiative</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="hero-tagline">
          Annual Signal Processing Initiative for Regional Empowerment
        </p>

        {/* Stats grid */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">📍</div>
            <div className="stat-number">3</div>
            <div className="stat-label">Regional Hubs</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-number">Multiple</div>
            <div className="stat-label">Parallel Tracks</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-number">1</div>
            <div className="stat-label">Day Event</div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="cta-container">
          <button className="btn btn-primary" onClick={handleRegisterClick}>
            <span>Register Now</span>
            <svg className="btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 3l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <a href="#about" className="btn btn-secondary">
            <span>Learn More</span>
          </a>
        </div>

        {/* IEEE badge */}
        <div className="ieee-badge">
          <span className="badge-text">Powered by IEEE SPS Kerala Chapter</span>
        </div>
      </div>
      </section>
  );
};

export default HeroSection;