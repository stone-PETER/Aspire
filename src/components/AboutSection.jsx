import React from "react";
import "./AboutSection.css";

const AboutSection = () => (
  <section className="about">
    <div className="section-inner">
      <h2>
        ASPIRE - Annual Signal Processing Initiative for Regional Empowerment
      </h2>
      <p>
        ASPIRE is a one-day flagship event organized by IEEE SPS Kerala Chapter
        in collaboration with all Student Branch Chapters under the Travancore
        Hub. This initiative aims to foster technical excellence, collaboration,
        and leadership among students through multiple parallel track events
        hosted by individual Student Branch Chapters.
      </p>

      <div className="aspire-highlights">
        <div className="highlight-card">
          <h3>🎯 Our Mission</h3>
          <p>
            Foster technical excellence, collaboration, and leadership among
            students in Signal Processing
          </p>
        </div>

        <div className="highlight-card">
          <h3>🤝 Collaboration</h3>
          <p>
            Unite all Student Branch Chapters under the Travancore Hub with
            shared vision and innovation
          </p>
        </div>

        <div className="highlight-card">
          <h3>🚀 Empowerment</h3>
          <p>
            Each chapter designs and conducts its own technical session with
            IEEE SPS support
          </p>
        </div>
      </div>

      <ul className="bullet-grid">
        <li>
          <strong>Regional Impact:</strong> Bringing together students from
          across Kerala to create a unified platform for Signal Processing
          innovation and learning.
        </li>
        <li>
          <strong>Technical Excellence:</strong> Multiple parallel tracks ensure
          diverse learning opportunities tailored to different interests and
          skill levels.
        </li>
        <li>
          <strong>Industry Support:</strong> Financial and technical backing
          from IEEE SPS Kerala Chapter ensures high-quality content and
          resources.
        </li>
      </ul>
    </div>
  </section>
);

export default AboutSection;
