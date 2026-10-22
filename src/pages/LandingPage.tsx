import React from 'react';
import { useGraphologyModules } from '../Hooks/useGraphologyModules';
import { HeroCard } from '../Components/HeroCard';
import {ProgramSection} from '../Components/Program';
import {CareerRoadmapSection} from '../Components/CareerRoadmapSection';
import {QuoteSection} from '../Components/QuoteSection';     
import { Navbar } from '../Components/Navbar';
import {InstructorSection} from '../Components/InstructorSection'
import { FaqSection } from '../Components/FaqSection';
import {Footer} from '../Components/Footer';

const Pages: React.FC = () => {
  const { modules, activeTab, nextModule } = useGraphologyModules();

  
// Di file App.tsx atau Home.tsx Anda:

  return (
    <main className="relative h-200 w-full">
         {/* Header Navigasi */}
      <Navbar />
      {/* HEERO SECTION. START */}
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
      {/* HEERO SECTION. END */}


      <ProgramSection />
      <CareerRoadmapSection />
       <QuoteSection />
       <InstructorSection />
        <FaqSection />
        <Footer />
    </main>
  );
};

export default Pages;