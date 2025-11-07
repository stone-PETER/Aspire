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
          <div className="card-icon">🎓</div>
          <h3>Technical Excellence</h3>
          <p>
            Learn from expert speakers, engage in hands-on workshops, and
            explore cutting-edge Signal Processing applications across multiple
            specialized tracks.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">🤝</div>
          <h3>Professional Networking</h3>
          <p>
            Connect with like-minded students, researchers, and industry
            professionals from across Kerala's IEEE Student Branch Chapters.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">🏆</div>
          <h3>Recognition & Awards</h3>
          <p>
            Showcase your skills, compete in technical challenges, and gain
            recognition from IEEE SPS Kerala Chapter and participating
            institutions.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">🚀</div>
          <h3>Career Advancement</h3>
          <p>
            Access mentorship opportunities, industry insights, and pathways to
            advanced research and career opportunities in Signal Processing.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">💡</div>
          <h3>Innovation Platform</h3>
          <p>
            Experience diverse perspectives from different Student Branch
            Chapters, each bringing unique technical approaches and innovative
            solutions.
          </p>
        </div>

        <div className="opportunity-card">
          <div className="card-icon">🔗</div>
          <h3>Regional Unity</h3>
          <p>
            Be part of a unified platform that brings together the entire
            Travancore Hub under a shared vision of regional empowerment and
            collaboration.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OpportunitiesSection;
