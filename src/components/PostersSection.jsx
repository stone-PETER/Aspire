import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PostersSection.css";

// Organize posters by hub
const postersByHub = {
  kochi: ["/posters/campuss.png", "/posters/p1.jpg", "/posters/p2.jpg"],
  malabar: ["/posters/p3.jpg", "/posters/p4.jpg", "/posters/prize$.png"],
  travancore: [
    "/posters/winitall.jpg",
    "/posters/CLOSING.png",
    "/posters/cli.png",
  ],
};

const PostersSection = () => {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [activeHub, setActiveHub] = useState("kochi"); // Default to Kochi
  const originalOverflowRef = useRef(null);
  const swiperRef = useRef(null);

  // Get posters for the currently active hub
  const currentPosters = postersByHub[activeHub];

  const openModal = (posterUrl) => {
    setSelectedPoster(posterUrl);
    // Save original overflow value and prevent scrolling when modal is open
    originalOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Pause autoplay while modal is open
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const closeModal = () => {
    setSelectedPoster(null);
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
      <section id="posters" className="posters">
        <div className="section-inner">
          <h2>Event Posters & Track Information</h2>
          <p className="section-description">
            Explore the diverse technical tracks and events organized by Student
            Branch Chapters across our three regional hubs. Each hub brings
            unique perspectives to Signal Processing education.
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

          <div className="posters-carousel-container">
            <Swiper
              key={activeHub} // Force re-render when hub changes
              loop={currentPosters.length > 3} // Only enable loop if more than 3 slides
              initialSlide={currentPosters.length / 2} // Always start at the first slide when hub changes
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={currentPosters.length > 1} // Only center if more than 1 slide
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                768: {
                  slidesPerView: Math.min(2, currentPosters.length),
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: Math.min(3, currentPosters.length),
                  spaceBetween: 30,
                },
              }}
              className="posters-swiper"
            >
              {currentPosters.map((poster, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="poster-card"
                    onClick={() => openModal(poster)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openModal(poster);
                      }
                    }}
                  >
                    <img
                      src={poster}
                      alt={`Event Poster ${index + 1}`}
                      className="poster-image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPoster && (
        <div className="poster-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={selectedPoster}
              alt="Event Poster"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PostersSection;
