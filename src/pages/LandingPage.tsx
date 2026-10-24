import React from 'react';
import { useState } from 'react';
import { useGraphologyModules } from '../Hooks/useGraphologyModules';
import { HeroCard } from '../Components/HeroCard';
import { ProgramSection } from '../Components/Program';
import { CareerRoadmapSection } from '../Components/CareerRoadmapSection';
import { QuoteSection } from '../Components/QuoteSection';     
import { Navbar } from '../Components/Navbar';
import { InstructorSection } from '../Components/InstructorSection';
import { FaqSection } from '../Components/FaqSection';
import { Footer } from '../Components/Footer';

const Pages: React.FC = () => {
  const { modules, activeTab, nextModule } = useGraphologyModules();
  const [currentPage, setCurrentPage] = useState<'home' | 'auth'>('home');

  return (
    <main className="relative h-200 w-full">
      {/* Header Navigasi */}
      <Navbar onOpenAuth={() => setCurrentPage('auth')} onGoHome={() => setCurrentPage('home')} />

      {/* HERO SECTION. START */}
      <div 
        className="absolute w-full inset-0 bg-cover bg-center bg-no-repeat brightness-[0.25] contrast-125 filter"
      />

      {/* Overlay Vignette */} 
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
      />

      {/* Hero Container Full Width */}
      <div className="relative z-10 w-full">
        <HeroCard 
          modules={modules} 
          activeTab={activeTab} 
          onNext={nextModule} 
        />
      </div>
      {/* HERO SECTION. END */}

      {/* Section dengan ID Anchor untuk Navigasi Header */}
      <div id="program">
        <ProgramSection />
      </div>

      <div id="roadmap">
        <CareerRoadmapSection />
      </div>

      <QuoteSection />

      <div id="instruktur">
        <InstructorSection />
      </div>

      <div id="faq">
        <FaqSection />
      </div>

      <Footer />
    </main>
  );
};

export default Pages;