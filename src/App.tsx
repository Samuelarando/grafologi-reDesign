import React from 'react';
import { useGraphologyModules } from './Hooks/useGraphologyModules';
import { HeroCard } from './Components/HeroCard';
import {ProgramSection} from './Components/Program';

const App: React.FC = () => {
  const { modules, activeTab, nextModule } = useGraphologyModules();

  

  return (
    <main className="relative h-200 w-full">
  
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
    </main>
  );
};

export default App;