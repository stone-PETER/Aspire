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
          Attend sessions on cybersecurity (by Offenso), stock marketing, prompt
          engineering, social media marketing, and women empowerment. Gain hands-on
          experience through DSP processor workshops, IoT & ESP sessions, and
          mentorship programs.
        </p>
      </div>

      <div className="opportunity-card">
        <div className="card-icon">👥</div>
        <h3>Networking & Mentorship</h3>
        <p>
          Connect with industry experts, mentors, and peers across Kerala. Receive
          personal guidance through dedicated mentorship programs and interact with
          innovators shaping the future of signal processing.
        </p>
      </div>

      <div className="opportunity-card">
        <div className="card-icon">🌐</div>
        <h3>Exposure & Innovation</h3>
        <p>
          Witness cutting-edge tech at the Robo Expo & Drone Expo. Explore
          real-world signal processing applications, participate in interactive
          demos, and showcase your ideas on a statewide platform.
        </p>
      </div>

      <div className="opportunity-card">
        <div className="card-icon">🎉</div>
        <h3>Beyond Tech</h3>
        <p>
          Enjoy cultural shows, food stalls, fun games like paintball, and more.
          Celebrate teamwork, creativity, and the vibrant community spirit of ASPiRE.
        </p>
      </div>

    </div>
  </div>
</section>
);

export default OpportunitiesSection;
