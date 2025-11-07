import React from "react";
import "./TeamSection.css";

const team = [
  {
    name: "A. Leader",
    role: "Ambassador",
    desc: "Passionate about driving tech accessibility.",
  },
  {
    name: "B. Designer",
    role: "UI/UX",
    desc: "Crafts user-friendly interfaces for all.",
  },
  {
    name: "C. Engineer",
    role: "Tech Lead",
    desc: "Builds future-driven communication solutions.",
  },
  {
    name: "D. Mentor",
    role: "Mentor",
    desc: "Supports innovation for the real world.",
  },
];

const TeamSection = () => (
  <section className="team">
    <div className="section-inner">
      <h2>Our Team</h2>
      <div className="team-list auto-grid">
        {team.map((member, idx) => (
          <div className="team-card card" key={idx}>
            <div className="avatar" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="desc">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
