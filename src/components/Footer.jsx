import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { SITE_CONFIG } from "./siteConfig";

import "./Footer.css";
const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-links">
        <div className="contact section">
          <h4>Contact</h4>
          <p className="email">ieeespskerala@gmail.com</p>
          <div className="contact-person">
            <h5>IEEE SPS Kerala Chapter</h5>
            <p>Annual Signal Processing Initiative</p>
          </div>
          <div className="contact-person">
            <h5>Event Coordination</h5>
            <p>Student Branch Chapters - Travancore Hub</p>
          </div>
        </div>
        {/* <div className="sponsors section">
          <h4>Sponsors</h4>
        </div> */}
        <div className="social section">
          <h4>Connect With IEEE SPS</h4>
          <div className="contacts-section">
            <div className="link-logos">
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
              <a
                href={SITE_CONFIG.SOCIAL_LINKS.DISCORD}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <p className="copyright">
          © 2025 ASPIRE - IEEE SPS Kerala Chapter. All rights reserved.
        </p>
        <p className="tagline">
          Annual Signal Processing Initiative for Regional Empowerment
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
