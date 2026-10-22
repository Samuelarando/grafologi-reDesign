import React from 'react';
import { StackedCards } from './ui/StackedCards';
import { Metrics } from './ui/Metrics';
import type { GraphologyModule } from '../Hooks/useGraphologyModules';

interface HeroCardProps {
  modules: GraphologyModule[];
  activeTab: number;
  onNext: () => void;
}


export const HeroCard: React.FC<HeroCardProps> = ({ modules, activeTab, onNext }) => {
  const bgImageUrl: string = "/grafologi.webp";

  return (
    
    <div 
      className="w-full h-[540px] rounded-b-[28px] sm:rounded-b-[40px] lg:rounded-b-[56px] bg-slate-900/85 backdrop-blur-xl border-b border-x border-white/10 shadow-2xl bg-cover bg-center transition-all duration-300"
      style={{ 
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url(${bgImageUrl})` 
      }}
    >
      
     

      {/* Inner Content dengan Padding & Spacing Responsif */}
      <div className="max-w-7xl mx-auto px-4 pt-4 sm:px-8 sm:pt-8 lg:px-12 lg:pt-12 pb-6 sm:pb-10 space-y-6 sm:space-y-8">
        
        {/* Layout Top: Grid 1 Kolom di HP -> 12 Kolom di Laptop/Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Judul Utama Responsif */}
          <div className="lg:col-span-7">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black mt-15 text-white tracking-tight leading-snug sm:leading-[1.1]">
              Jadilah Profesional yang Mampu Melihat Lebih Dalam
            </h1>
          </div>

          {/* Deskripsi & CTA Responsif */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 mt-20">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Pelajari grafologi secara profesional untuk memahami manusia lebih mendalam dan perkuat profesi Anda dengan sertifikasi internasional Certified Handwriting Analyst (CHA).
            </p>

            {/* Tombol CTA: Full Width di HP (mudah di-tap), Inline di Layar Lebih Besar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#daftar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-xs text-slate-950 bg-lime-400 hover:bg-lime-300 transition-all shadow-lg shadow-lime-400/20 hover:scale-105 active:scale-95 text-center"
              >
                Daftar CHA™ Sekarang
                <span className="w-5 h-5 rounded-full bg-slate-950 text-lime-400 flex items-center justify-center text-xs">➔</span>
              </a>

              <Metrics />
            </div>
          </div>

        </div>

      </div>

      {/* Stacked Cards Section dengan Padding Samping Responsif */}
      <div className="w-full flex justify-center z-50 items-end px-3 sm:px-6 pb-6 sm:pb-8 pt-2">
        <StackedCards 
          modules={modules} 
          activeTab={activeTab} 
          onNext={onNext} 
        />
      </div>

    </div>
  );
};