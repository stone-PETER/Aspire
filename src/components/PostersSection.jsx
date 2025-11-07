import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PostersSection.css";

// Import all posters from the posters directory
// Add more poster paths as you add new files to public/posters/
const posters = [
  "/posters/campuss.png",
  "/posters/p1.jpg",
  "/posters/p2.jpg",
  "/posters/p3.jpg",
  "/posters/p4.jpg",
  "/posters/prize$.png",
  "/posters/winitall.jpg",


  // Add more poster paths here as you add new posters
  // Example: "/posters/poster2.jpg",
];

const PostersSection = () => {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const originalOverflowRef = useRef(null);
  const swiperRef = useRef(null);

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
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <>
      <section id="posters" className="posters">
        <div className="section-inner">
          <h2>Posters</h2>
          <div className="posters-carousel-container">
            <Swiper
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
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
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="posters-swiper"
            >
              {posters.map((poster, index) => (
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
