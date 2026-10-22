import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-8 lg:px-12 ${
        isScrolled
          ? 'py-3 sm:py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-4 sm:py-6 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent border-b border-white/10'
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* Brand Logo - Diberi warna kontras tinggi */}
        <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white tracking-tight shrink-0 drop-shadow-sm">
          <span className="font-sans font-extrabold text-white">grafologi</span>
          <span className="text-[9px] sm:text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-[#F1FECB] text-slate-950 shadow-xs">
            CHA™
          </span>
        </div>

        {/* Desktop Nav Links - Menggunakan warna slate-200 agar jauh lebih jelas di atas gambar */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-slate-200">
          <a href="#program" className="hover:text-white transition-colors duration-200">Program</a>
          <a href="#Roudmap" className="hover:text-white transition-colors duration-200">Roudmap</a>
          <a href="#Instruktur" className="hover:text-white transition-colors duration-200">Instruktur</a>
          <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
        </div>

        {/* Right Action & Hamburger Button */}
        <div className="flex items-center gap-3">
          <a
            href="#daftar"
            className="px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-[#F1FECB] hover:bg-lime-300 transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap"
          >
            Daftar Sekarang
          </a>

          {/* Tombol Hamburger khusus Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 rounded-xl text-white bg-slate-900/80 hover:bg-slate-800 border border-white/20 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Menu Dropdown khusus Mobile */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-3 text-xs font-semibold text-slate-100 bg-slate-950/95 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl max-w-7xl mx-auto">
          <a href="#program" onClick={() => setIsOpen(false)} className="hover:text-[#F1FECB] py-1 transition-colors">Program</a>
          <a href="#kurikulum" onClick={() => setIsOpen(false)} className="hover:text-[#F1FECB] py-1 transition-colors">Kurikulum</a>
          <a href="#sertifikasi" onClick={() => setIsOpen(false)} className="hover:text-[#F1FECB] py-1 transition-colors">Sertifikasi</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-[#F1FECB] py-1 transition-colors">FAQ</a>
        </div>
      )}
    </nav>
  );
};