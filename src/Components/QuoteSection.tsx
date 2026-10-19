import React from 'react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-60 px-4 sm:px-8 lg:px-16 bg-slate-50 font-sans overflow-hidden flex">
      <div className="max-w-6xl mx-auto w-full">
        {/* Banner Card Utama - Menggunakan Background Vanila (#F1FECB) */}
        <div className="relative bg-[#F1FECB] text-slate-900 rounded-3xl p-6 sm:p-12 md:p-16 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border border-lime-200/60">
          
          {/* Latar Belakang Efek Glow Halus */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-lime-300/30 rounded-full blur-3xl pointer-events-none" />

          {/* Sisi Kiri: Teks Kutipan & Penulis */}
          <div className="flex-1 space-y-6 relative z-10 text-left max-w-xl lg:max-w-2xl">
            <span className="text-4xl text-lime-700 font-serif leading-none block select-none">
              “
            </span>
            
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-slate-900 tracking-wide font-sans">
              Es el cerebro el que escribe. El brazo, la mano, los dedos no constituyen los verdaderos factores de las peculiaridades esenciales e individuales de la escritura.
            </blockquote>

            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed italic border-l-2 border-lime-600/60 pl-4 my-4">
              "Otaklah yang menulis. Lengan, tangan, dan jari jemari bukanlah faktor utama dari keunikan serta ciri khas esensial dalam tulisan tangan seseorang."
            </p>

            <div className="pt-2">
              <h4 className="text-lg sm:text-xl font-bold text-slate-950 tracking-wide">
                Max Pulver
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                Pelopor Grafologi Modern & Psikolog Swiss
              </p>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Sisi Kanan: Foto Max Pulver (Posisi tetap dipertahankan sesuai keinginan) */}
      <div className="relative z-10 shrink-0 w-48 sm:w-64 md:w-72 md:right-30 md:top-21 hidden md:block">
        <div className="relative rounded-3xl overflow-hidden border-4 border-white/60 shadow-2xl group">
          <img 
            src="/max-pulver.webp" 
            alt="Max Pulver" 
            loading="lazy"
            className="w-full h-64 sm:h-80 md:h-88 object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};