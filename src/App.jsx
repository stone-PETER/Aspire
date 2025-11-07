import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PhasesSection from "./components/PhasesSection";
import OpportunitiesSection from "./components/OpportunitiesSection";
import PrizesSection from "./components/PrizesSection";
import FAQSection from "./components/FAQSection";
import PostersSection from "./components/PostersSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GuidelinesModal from "./components/GuidelinesModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header onRegisterClick={handleOpenModal} />
      <main id="main">
        <HeroSection onRegisterClick={handleOpenModal} />
        <div id="about">
          <AboutSection />
        </div>
        <div id="phases">
          <PhasesSection />
        </div>
        <div id="opportunities">
          <OpportunitiesSection />
        </div>
        <div id="prizes">
          <PrizesSection />
        </div>
        <div id="faq">
          <FAQSection />
        </div>
        <div id="posters">
          <PostersSection />
        </div>
        {/* <div id="team">
          <TeamSection />
        </div> */}
      </main>
      <Footer />

      <GuidelinesModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
