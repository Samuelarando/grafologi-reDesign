import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  // State untuk kontrol menu mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex flex-col justify-between px-4 sm:px-8 lg:px-12 py-4 sm:py-5 border-b border-white/10 z-50">
      <div className="flex items-center justify-between w-full">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-lg sm:text-xl text-white tracking-tight">
          <span>grafologi</span>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 sm:px-2 rounded bg-lime-400 text-slate-950">
            CHA™
          </span>
        </div>

        {/* Desktop Nav Links (Hanya muncul di Layar Medium/Besar) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-medium text-slate-400">
          <a href="#program" className="hover:text-white transition-colors">Program</a>
          <a href="#kurikulum" className="hover:text-white transition-colors">Kurikulum</a>
          <a href="#sertifikasi" className="hover:text-white transition-colors">Sertifikasi</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        {/* Right Action & Hamburger Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#daftar"
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/10 transition-all backdrop-blur-md whitespace-nowrap active:scale-95"
          >
            Daftar Sekarang
          </a>

          {/* Tombol Hamburger (Hanya Tampil di Layar HP / Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? (
              /* Icon X (Tutup) */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Icon Hamburger (Buka) */
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Menu Dropdown khusus Mobile (Tampil saat Hamburger diklik) */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 text-xs font-medium text-slate-300 animate-in fade-in slide-in-from-top-2 duration-200">
          <a 
            href="#kursus" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-lime-400 py-1 transition-colors"
          >
            Program
          </a>
          <a 
            href="#kurikulum" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-lime-400 py-1 transition-colors"
          >
            Kurikulum
          </a>
          <a 
            href="#sertifikasi" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-lime-400 py-1 transition-colors"
          >
            Sertifikasi
          </a>
          <a 
            href="#faq" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-lime-400 py-1 transition-colors"
          >
            FAQ
          </a>
        </div>
      )}
    </nav>
  );
};