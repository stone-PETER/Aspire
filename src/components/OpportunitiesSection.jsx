import React from "react";
import "./OpportunitiesSection.css";

const OpportunitiesSection = () => (
  <section className="opportunities">
    <div className="section-inner">
      <div className="opportunities-header">
        <h2>Why Participate in ASPIRE?</h2>
        <p>
          Join IEEE SPS Kerala Chapter's flagship initiative and unlock
          opportunities for technical growth, professional networking, and
          regional collaboration in Signal Processing innovation.
        </p>
      </div>

      <div className="opportunities-grid">
        <div className="opportunity-card">
          <div className="card-icon">📘</div>
          <h3>Learning & Skill Development</h3>
          <p>
            Engage in sessions on cybersecurity (by Offenso), stock marketing,
            prompt engineering, social media marketing, and women empowerment.
            Gain hands-on experience through DSP processor workshops, IoT and
            ESP sessions, and structured mentorship programs that enhance your
            technical expertise.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">👥</div>
          <h3>Networking & Mentorship</h3>
          <p>
            Connect with industry professionals, mentors, and peers from across
            Kerala. Participate in exclusive networking sessions, receive
            personalized guidance through mentorship initiatives, and interact
            with innovators shaping the future of signal processing and
            technology.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">🌐</div>
          <h3>Exposure & Innovation</h3>
          <p>
            Experience cutting-edge advancements at the Robo Expo and Drone
            Expo. Explore real-world signal processing applications, participate
            in interactive demos, and present your innovative ideas on a
            statewide platform that celebrates creativity and technology.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">🎓</div>
          <h3>Career & Professional Growth</h3>
          <p>
            Access valuable insights into emerging career paths, research
            opportunities, and higher education guidance. Learn how to leverage
            IEEE resources, certifications, and professional networks to
            accelerate your journey in engineering and technology.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">💡</div>
          <h3>Leadership & Team Experience</h3>
          <p>
            Get involved in event coordination, technical planning, or community
            engagement activities. Build leadership, teamwork, and communication
            skills that prepare you to take on impactful roles within and beyond
            the IEEE community.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">🎉</div>
          <h3>Beyond Tech</h3>
          <p>
            Step beyond the technical sphere with cultural performances, food
            stalls, fun games like paintball, and interactive activities. ASPIRE
            blends technology, culture, and community to create a vibrant,
            holistic experience that inspires learning and celebration alike.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OpportunitiesSection;
