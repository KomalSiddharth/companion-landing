
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyCompanionSection from './components/WhyCompanionSection';
import HowItWorksSection from './components/HowItWorksSection';
import ConnectionModesSection from './components/ConnectionModesSection';
import DifferentiatorSection from './components/DifferentiatorSection';
import JoinMovementSection from './components/JoinMovementSection';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#FBF9F4] text-stone-800 antialiased overflow-x-hidden">
      <Header onJoinClick={handleOpenModal} />
      <main>
        <HeroSection onJoinClick={handleOpenModal} />
        <WhyCompanionSection />
        <HowItWorksSection />
        <ConnectionModesSection />
        <DifferentiatorSection />
        <JoinMovementSection onJoinClick={handleOpenModal} />
      </main>
      <Footer />
      <WaitlistModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
