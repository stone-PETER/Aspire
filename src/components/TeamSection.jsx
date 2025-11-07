import React from "react";
import "./TeamSection.css";

const team = [
  {
    name: "IEEE SPS Kerala",
    role: "Organizing Chapter",
    desc: "Flagship chapter driving Signal Processing innovation across Kerala.",
  },
  {
    name: "Student Branch Chapters",
    role: "Track Coordinators",
    desc: "Individual chapters designing unique technical sessions and workshops.",
  },
  {
    name: "Travancore Hub",
    role: "Regional Coordinator",
    desc: "Uniting chapters under shared vision of regional empowerment.",
  },
  {
    name: "Technical Mentors",
    role: "Industry Experts",
    desc: "Providing guidance and expertise across Signal Processing domains.",
  },
];

const TeamSection = () => (
  <section className="team">
    <div className="section-inner">
      <h2>Organizing Committee</h2>
      <p className="section-description">
        ASPIRE is a collaborative effort bringing together IEEE SPS Kerala
        Chapter with Student Branch Chapters across the Travancore Hub to
        deliver exceptional technical content.
      </p>
      <div className="team-list auto-grid">
        {team.map((member, idx) => (
          <div className="team-card card" key={idx}>
            <div className="avatar-icon">
              {idx === 0 && "🏛️"}
              {idx === 1 && "👥"}
              {idx === 2 && "🌐"}
              {idx === 3 && "🎓"}
            </div>
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
