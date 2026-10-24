import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenAuth?: () => void;
  onGoHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onGoHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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

  const handleLogoClick = () => {
    if (onGoHome) {
      onGoHome();
    }
    navigate('/');
  };

  const handleAuthClick = () => {
    if (onOpenAuth) {
      onOpenAuth();
    }
    navigate('/login');
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 sm:px-8 lg:px-12 ${
        isScrolled
          ? 'py-3 sm:py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'py-4 sm:py-6 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent border-b border-white/10'
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        
        {/* Brand Logo dengan Motion Hover */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogoClick}
          type="button"
          className="flex items-center gap-2 font-bold text-lg sm:text-xl text-white tracking-tight shrink-0 drop-shadow-sm focus:outline-none cursor-pointer bg-transparent border-none"
        >
          <span className="font-sans font-extrabold text-white">grafologi</span>
          <span className="text-[9px] sm:text-[10px] font-mono font-black px-1.5 py-0.5 rounded bg-[#F1FECB] text-slate-950 shadow-xs">
            CHA™
          </span>
        </motion.button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-slate-200">
          <a href="#program" onClick={onGoHome} className="hover:text-white transition-colors duration-200">Program</a>
          <a href="#roadmap" onClick={onGoHome} className="hover:text-white transition-colors duration-200">Roadmap</a>
          <a href="#instruktur" onClick={onGoHome} className="hover:text-white transition-colors duration-200">Instruktur</a>
          <a href="#faq" onClick={onGoHome} className="hover:text-white transition-colors duration-200">FAQ</a>
        </div>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAuthClick}
            type="button"
            className="px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-[#F1FECB] hover:bg-lime-300 transition-all duration-300 shadow-md whitespace-nowrap cursor-pointer border-none"
          >
            Masuk / Daftar
          </motion.button>

          {/* Tombol Hamburger Mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden p-2 rounded-xl text-white bg-slate-900/80 hover:bg-slate-800 border border-white/20 transition-colors focus:outline-none cursor-pointer"
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
          </motion.button>
        </div>

      </div>

      {/* Menu Dropdown Mobile dengan AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-3 text-xs font-semibold text-slate-100 bg-slate-950/95 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl max-w-7xl mx-auto overflow-hidden"
          >
            <a href="#program" onClick={() => { setIsOpen(false); onGoHome?.(); }} className="hover:text-[#F1FECB] py-1 transition-colors">Program</a>
            <a href="#roadmap" onClick={() => { setIsOpen(false); onGoHome?.(); }} className="hover:text-[#F1FECB] py-1 transition-colors">Roadmap</a>
            <a href="#instruktur" onClick={() => { setIsOpen(false); onGoHome?.(); }} className="hover:text-[#F1FECB] py-1 transition-colors">Instruktur</a>
            <a href="#faq" onClick={() => { setIsOpen(false); onGoHome?.(); }} className="hover:text-[#F1FECB] py-1 transition-colors">FAQ</a>
            <button
              onClick={() => { setIsOpen(false); handleAuthClick(); }}
              type="button"
              className="text-left font-bold text-[#F1FECB] py-1 pt-2 border-t border-white/10 bg-transparent cursor-pointer"
            >
              Masuk / Daftar ↗
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};