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
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-content">
          <div className="registration-content">
            <h2>🎉 Early Bird Registrations Are Open Now!</h2>
            <p>
              Secure your spot at ASPiRE 2025 and take advantage of early bird
              pricing.
            </p>

            <div className="registration-form">
              <div className="hub-selection">
                <label htmlFor="hub-select">Choose Your Hub:</label>
                <select
                  id="hub-select"
                  className="hub-dropdown"
                  value={selectedHub}
                  onChange={handleHubChange}
                >
                  <option value="" disabled>
                    Select Hub
                  </option>
                  <option value="kochi">🌊 Kochi Hub</option>
                  <option value="malabar">🏔️ Malabar Hub</option>
                  <option value="travancore">🌿 Travancore Hub</option>
                </select>
              </div>

              <button
                className={`register-btn ${!selectedHub ? "disabled" : ""}`}
                onClick={handleRegisterClick}
                disabled={!selectedHub}
              >
                {selectedHub ? "Register Now" : "Select a Hub to Register"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesModal;
