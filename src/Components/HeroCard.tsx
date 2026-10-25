import React from 'react';
import { motion } from 'framer-motion';

interface HeroCardProps {
  onNavigateAuth?: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onNavigateAuth }) => {
  return (
    <section className="relative pt-36 sm:pt-44 pb-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col items-start space-y-8 overflow-hidden rounded-3xl my-6 bg-slate-900 border border-slate-800 shadow-2xl">
      
      {/* Background Image Lokal dengan Opacity yang Lebih Tinggi & Keterangan Jelas */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/grafologi.webp" 
          alt="Handwriting Analysis Background" 
          className="w-full h-full object-cover opacity-60 filter brightness-75 contrast-100"
        />
        {/* Overlay dibuat lebih tipis agar gambar latar belakangnya terlihat jelas */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
      </div>

      {/* Konten Hero */}
      <div className="relative z-10 space-y-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold text-[#F1FECB]"
        >
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.02]"
        >
          The Science of <br />
          <span className="font-sans font-light italic text-[#F1FECB]">Handwriting Analysis</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed drop-shadow-md"
        >
          Kuasai metode ilmiah membaca kepribadian, potensi profesional, dan psikologi bawah sadar melalui goresan tangan bersama Certified Handwriting Analyst (CHA™).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          {onNavigateAuth && (
            <button
              onClick={onNavigateAuth}
              className="px-8 py-4 rounded-2xl bg-[#F1FECB] text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-lime-300 transition-all duration-300 shadow-xl cursor-pointer"
            >
              Daftar Sertifikasi CHA™ ↗
            </button>
          )}
          <a
            href="#program"
            className="px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all duration-300 shadow-sm flex items-center justify-center backdrop-blur-md"
          >
            Pelajari Kurikulum ↓
          </a>
        </motion.div>
      </div>

    </section>
  );
};