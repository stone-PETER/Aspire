import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SBCLogo.css";

// Organize logos by hub
const logosByHub = {
  kochi: [
    "/SBCLogo/Kochi/ieee sahrdaya logo.png",
    "/SBCLogo/Kochi/IMG_1302.PNG",
    "/SBCLogo/Kochi/logo white.png",
    "/SBCLogo/Kochi/logo_white (1).png",
    "/SBCLogo/Kochi/SB_LOGO_Purple.png",
  ],
  malabar: [
    "/SBCLogo/Malabar/Logo SB40 - Copy (2).png",
    "/SBCLogo/Malabar/MDIT SB WHITE 1.png",
    "/SBCLogo/Malabar/sb logo white (1).png",
    "/SBCLogo/Malabar/SB LOGO WHITE.PNG",
    "/SBCLogo/Malabar/SB LOGO.jpg",
  ],
  travancore: [
    "/SBCLogo/Travancore/ceal-ieee-sb.png",
    "/SBCLogo/Travancore/IEEE LMCST Logo.png",
    "/SBCLogo/Travancore/IEEE Logo white -2FE6CB8-.png",
    "/SBCLogo/Travancore/ieee logo white-1.png",
    "/SBCLogo/Travancore/IEEE SB CET.png",
    "/SBCLogo/Travancore/IMG-20251104-WA0013.jpg",
  ],
};

const SBCLogoSection = () => {
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [activeHub, setActiveHub] = useState("kochi"); // Default to Kochi
  const originalOverflowRef = useRef(null);
  const swiperRef = useRef(null);

  // Get logos for the currently active hub
  const currentLogos = logosByHub[activeHub];

  const openModal = (logoUrl) => {
    setSelectedLogo(logoUrl);
    // Save original overflow value and prevent scrolling when modal is open
    originalOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Pause autoplay while modal is open
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const closeModal = () => {
    setSelectedLogo(null);
    // Restore original overflow value (fall back to "auto" if unknown)
    document.body.style.overflow = originalOverflowRef.current ?? "auto";
    // Resume autoplay when modal is closed
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  // Cleanup on unmount: make sure overflow is restored and autoplay resumed
  useEffect(() => {
    return () => {
      document.body.style.overflow = originalOverflowRef.current ?? "auto";
      if (swiperRef.current && swiperRef.current.autoplay) {
        try {
          swiperRef.current.autoplay.start();
        } catch {
          // Silently ignore - autoplay may fail if swiper is already destroyed
        }
      }
    };
  }, []);

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

          <div className="logos-carousel-container">
            <Swiper
              key={activeHub} // Force re-render when hub changes
              loop={currentLogos.length > 3} // Only enable loop if more than 3 slides
              initialSlide={0} // Always start at the first slide when hub changes
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={currentLogos.length > 1} // Only center if more than 1 slide
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                768: {
                  slidesPerView: Math.min(3, currentLogos.length),
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: Math.min(4, currentLogos.length),
                  spaceBetween: 30,
                },
              }}
              className="logos-swiper"
            >
              {currentLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="logo-card"
                    onClick={() => openModal(logo)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openModal(logo);
                      }
                    }}
                  >
                    <img
                      src={logo}
                      alt={`Student Branch Logo ${index + 1}`}
                      className="logo-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedLogo && (
        <div className="logo-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={selectedLogo}
              alt="Student Branch Logo"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SBCLogoSection;
