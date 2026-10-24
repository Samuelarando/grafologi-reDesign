import React from 'react';
import { motion } from 'framer-motion';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-30 px-4 sm:px-8 lg:px-16 bg-slate-50 font-sans overflow-hidden flex">
      <div className="max-w-6xl mx-auto w-full relative flex flex-col md:flex-row items-center">
        
        {/* Banner Card Utama - Menggunakan Background Vanila (#F1FECB) dengan Animasi Masuk */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full bg-[#F1FECB] text-slate-900 rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 border border-lime-200/60"
        >
          
          {/* Latar Belakang Efek Glow Halus */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-lime-300/30 rounded-full blur-3xl pointer-events-none" />

          {/* Sisi Kiri: Teks Kutipan & Penulis */}
          <div className="flex-1 space-y-4 sm:space-y-6 relative z-10 text-left max-w-full md:max-w-md lg:max-w-2xl">
            <span className="text-3xl sm:text-4xl text-lime-700 font-serif leading-none block select-none">
              “
            </span>
            
            <blockquote className="text-base sm:text-xl lg:text-3xl font-medium leading-relaxed text-slate-900 tracking-wide font-sans">
              Es el cerebro el que escribe. El brazo, la mano, los dedos no constituyen los verdaderos factores de las peculiaridades esenciales e individuales de la escritura.
            </blockquote>

            <p className="text-xs sm:text-sm lg:text-base text-slate-700 font-medium leading-relaxed italic border-l-2 border-lime-600/60 pl-3 sm:pl-4 my-3 sm:my-4">
              "Otaklah yang menulis. Lengan, tangan, dan jari jemari bukanlah faktor utama dari keunikan serta ciri khas esensial dalam tulisan tangan seseorang."
            </p>

            <div className="pt-1 sm:pt-2">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-950 tracking-wide">
                Max Pulver
              </h4>
              <p className="text-[11px] sm:text-xs lg:text-sm text-slate-700 font-medium">
                Pelopor Grafologi Modern & Psikolog Swiss
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
      
      {/* Sisi Kanan: Foto Max Pulver dengan Animasi Slide in dari Kanan */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 shrink-0 w-40 sm:w-52 md:w-64 lg:w-72 md:-ml-20 lg:-ml-24 mt-6 md:mt-10 hidden md:block"
      >
        <div className="relative rounded-3xl overflow-hidden border-4 border-white/60 shadow-2xl group">
          <img 
            src="/max-pulver.webp" 
            alt="Max Pulver" 
            loading="lazy"
            className="w-full h-56 sm:h-72 md:h-80 lg:h-88 object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};