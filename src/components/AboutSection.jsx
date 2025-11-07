import React from "react";
import "./AboutSection.css";

const AboutSection = () => (
  <section className="about">
    <div className="section-inner">
      <h2>A Tri-Venue Learning Experience</h2>
      <p>
        Aspire is a comprehensive learning opportunity spanning three vibrant hubs 
        across Kerala - Kochi, Malabar, and Travancore. Each hub offers unique 
        perspectives and collaborative experiences.
      </p>
      <ul className="bullet-grid">
        <li>
          <strong>Our Mission:</strong> Foster innovation and learning through 
          collaborative experiences across three regional hubs.
        </li>
        <li>
          <strong>Get Involved:</strong> Join us at any of our three venues and 
          be part of a transformative learning journey.
        </li>
      </ul>
    </div>
  </section>
);

export default AboutSection;
