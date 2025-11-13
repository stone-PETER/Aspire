import React, { useState } from "react";
import "./GuidelinesModal.css";

const GuidelinesModal = ({ isOpen, onClose }) => {
  const [selectedHub, setSelectedHub] = useState("");

  // Hub registration links
  const hubLinks = {
    kochi: "https://www.yepdesk.com/aspire-kochi-hub",
    malabar: "https://www.yepdesk.com/aspire-malabar-hub",
    travancore: "https://www.yepdesk.com/aspire-travancore-hub",
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleHubChange = (e) => {
    setSelectedHub(e.target.value);
  };

  const handleRegisterClick = () => {
    if (selectedHub && hubLinks[selectedHub]) {
      window.open(hubLinks[selectedHub], "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h2>Event Guidelines</h2>
          <div className="modal-actions">
            <div className="hub-selection">
              <select
                className="hub-dropdown"
                value={selectedHub}
                onChange={handleHubChange}
              >
                <option value="" disabled>
                  Select Hub
                </option>
                <option value="kochi">Kochi</option>
                <option value="malabar">Malabar</option>
                <option value="travancore">Travancore</option>
              </select>
            </div>
            {selectedHub && (
              <button className="register-btn" onClick={handleRegisterClick}>
                Register Now
              </button>
            )}
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>
        </div>

        <div className="modal-content">
          <div className="guidelines-content">
            <section>
              <h3>About ASPiRE 2025</h3>
              <p>
                ASPiRE (Annual Signal Processing Initiative for Regional
                Empowerment) is the flagship one-day event of the IEEE Signal
                Processing Society Kerala Chapter, organized in collaboration
                with the Travancore, Kochi, and Malabar Hubs.
              </p>
              <p>
                The initiative unites Student Branch Chapters across Kerala to
                host parallel technical sessions, workshops, and competitions,
                each designed to foster innovation, collaboration, and
                leadership in signal processing and allied domains. Supported
                technically and financially by IEEE SPS Kerala Chapter, ASPiRE
                provides students with opportunities to learn from experts,
                showcase projects, network with peers and professionals, and
                enhance their technical and managerial skills.
              </p>
              <p>
                Through ASPiRE, IEEE SPS Kerala Chapter envisions a community of
                empowered student innovators driving regional impact and
                technological advancement.
              </p>
            </section>

            <section>
              <h3>Opportunities</h3>

              <h4>Learning & Skill Development</h4>
              <ul>
                <li>
                  Attend talk sessions on topics like cybersecurity (by
                  Offenso), stock marketing, prompt engineering, social media
                  marketing, and women empowerment.
                </li>
                <li>
                  Take part in hands-on workshops on DSP processors, ESP & IoT,
                  and 1-1 mentorship programs.
                </li>
                <li>
                  Participate in technical sessions and ideathons that test
                  creativity and problem-solving skills.
                </li>
              </ul>

              <h4>Networking & Mentorship</h4>
              <ul>
                <li>
                  Connect with industry experts, mentors, and peers from across
                  Kerala.
                </li>
                <li>
                  Gain personal guidance through dedicated mentorship programs
                  hosted by various hubs and colleges.
                </li>
                <li>
                  Interact with leaders and innovators driving change in the
                  field of signal processing.
                </li>
              </ul>

              <h4>Exposure & Innovation</h4>
              <ul>
                <li>
                  Witness cutting-edge technology at the Robo Expo and Drone
                  Expo organized by ASAP.
                </li>
                <li>
                  Explore real-world applications of signal processing and
                  emerging technologies through interactive demos.
                </li>
                <li>
                  Showcase your ideas and innovations on a statewide platform.
                </li>
              </ul>

              <h4>Beyond Tech</h4>
              <ul>
                <li>
                  Enjoy cultural performances, food stalls, and fun games like
                  paintball and more.
                </li>
                <li>
                  Celebrate teamwork, creativity, and the vibrant community
                  spirit that defines ASPiRE.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesModal;
