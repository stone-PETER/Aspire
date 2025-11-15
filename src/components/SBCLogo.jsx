import React, { useState } from "react";
import "./SBCLogo.css";

// Auto-generated logo lists - you can regenerate these by running the generate-logos script
const logosByHub = {
  kochi: [
    "/SBCLogo/Kochi/IMG_1301.PNG",
    "/SBCLogo/Kochi/SB_LOGO_Purple.png",
    "/SBCLogo/Kochi/cropped-cropped-Artboard-19-1-2.png",
    "/SBCLogo/Kochi/ieee sahrdaya logo.png",
    "/SBCLogo/Kochi/logo (3).png",
    "/SBCLogo/Kochi/logo_white (1).png",
    "/SBCLogo/Kochi/output-onlinepngtools.png",
  ],
  malabar: [
    "/SBCLogo/Malabar/Logo SB40 - Copy (2).png",
    "/SBCLogo/Malabar/MDIT SB BLACK 1.png",
    "/SBCLogo/Malabar/SB LOGO WHITE.PNG",
    "/SBCLogo/Malabar/SB LOGO.jpg",
    "/SBCLogo/Malabar/ieeemeasb.png",
  ],
  travancore: [
    "/SBCLogo/Travancore/IEEE LMCST Logo.png",
    "/SBCLogo/Travancore/IEEE Logo white -2FE6CB8-.png",
    "/SBCLogo/Travancore/IEEE SB CET.png",
    "/SBCLogo/Travancore/IMG-20251104-WA0013.jpg",
    "/SBCLogo/Travancore/ceal-ieee-sb.png",
    "/SBCLogo/Travancore/ieee logo blue.png",
  ],
};

const SBCLogoSection = () => {
  const [activeHub, setActiveHub] = useState("kochi"); // Default to Kochi

  // Get logos for the currently active hub
  const currentLogos = logosByHub[activeHub];

  return (
    <>
      <section id="sbc-logos" className="sbc-logos">
        <div className="section-inner">
          <h2>Student Branch Chapters</h2>
          <p className="section-description">
            Meet the IEEE Student Branch Chapters from across Kerala's three
            regional hubs. These chapters are the driving force behind ASPiRE
            2025, bringing together innovation, collaboration, and excellence in
            signal processing education.
          </p>

          {/* Hub Toggle Buttons */}
          <div
            className="hub-toggles"
            role="group"
            aria-label="Hub filter buttons"
          >
            <button
              className={`hub-button ${activeHub === "kochi" ? "active" : ""}`}
              onClick={() => setActiveHub("kochi")}
              aria-pressed={activeHub === "kochi"}
              aria-label="Show Kochi Hub events"
            >
              🌊 Kochi Hub
            </button>
            <button
              className={`hub-button ${
                activeHub === "malabar" ? "active" : ""
              }`}
              onClick={() => setActiveHub("malabar")}
              aria-pressed={activeHub === "malabar"}
              aria-label="Show Malabar Hub events"
            >
              🏔️ Malabar Hub
            </button>
            <button
              className={`hub-button ${
                activeHub === "travancore" ? "active" : ""
              }`}
              onClick={() => setActiveHub("travancore")}
              aria-pressed={activeHub === "travancore"}
              aria-label="Show Travancore Hub events"
            >
              🌿 Travancore Hub
            </button>
          </div>

          <div className="logos-grid-container">
            <div className="logos-grid">
              {currentLogos.map((logo, index) => (
                <div key={index} className="logo-card">
                  <img
                    src={logo}
                    alt={`Student Branch Logo ${index + 1}`}
                    className="logo-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SBCLogoSection;
