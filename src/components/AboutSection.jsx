import React from "react";
import "./AboutSection.css";

const AboutSection = () => (
  <section className="about">
    <div className="section-inner">
      <h2>Transforming Communication Through Technology</h2>
      <p>
        Signs to Sounds bridges the gap between the deaf/hard-of-hearing and
        hearing communities by leveraging AI, machine learning, and embedded
        systems.
      </p>
      <ul className="bullet-grid">
        <li>
          <strong>Our Mission:</strong> Inspire impactful tech-driven solutions
          for inclusivity.
        </li>
        <li>
          <strong>Get Involved:</strong> Collaborate globally to create
          real-time sign language to speech systems.
        </li>
      </ul>
    </div>
  </section>
);

export default AboutSection;
