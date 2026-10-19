import React from 'react';
import type { GraphologyModule } from '../../Hooks/useGraphologyModules';

interface StackedCardsProps {
  modules: GraphologyModule[];
  activeTab: number;
  onNext: () => void;
}

export const StackedCards: React.FC<StackedCardsProps> = ({ modules, activeTab, onNext }) => {
  return (

    <div 
      onClick={onNext}
      className="relative w-full max-w-2xl mx-auto pt-10 cursor-pointer group select-none"
    >
      {/* Wrapper Kartu */}
      <div className="relative w-full flex justify-center items-center">
        {modules.map((mod, index) => {
          const offset = (index - activeTab + modules.length) % modules.length;
          
          const translateY = -offset * 26;
          const scale = 1 - offset * 0.04;
          const zIndex = 30 - offset; 
          const opacity = 1 - offset * 0.15;

          return (
            <div
              key={mod.id}
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
              }}
             
              className={`
                ${offset === 0 ? 'relative' : 'absolute top-0'}
                w-[95%] sm:w-[90%] p-7 sm:p-8 min-h-[230px] rounded-2xl sm:rounded-3xl shadow-2xl 
                transition-all duration-500 ease-out border border-white/20 
                bg-gradient-to-r ${mod.gradient} ${mod.textColor}
              `}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-black/10">
                  {mod.badge}
                </span>
                <span className="font-mono text-xs font-bold opacity-60">
                  0{mod.id}
                </span>
              </div>

              {/* FONT JUDUL DIKECILKAN SEDIKIT DARI 4XL KE 3XL */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight mb-2.5">
                {mod.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium opacity-90 leading-relaxed">
                {mod.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};