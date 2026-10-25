import React, { useState } from 'react';
import { HeroCard } from '../Components/HeroCard';
import { ProgramSection } from '../Components/Program';
import { CareerRoadmapSection } from '../Components/CareerRoadmapSection';
import { QuoteSection } from '../Components/QuoteSection';
import { InstructorSection } from '../Components/InstructorSection';
import { FaqSection } from '../Components/FaqSection';
import { AuthPage } from '../pages/AuthPage';

export const LandingPage: React.FC = () => {
  // State manajemen halaman (Home atau Auth Portal)
  const [currentPage, setCurrentPage] = useState<'home' | 'auth'>('home');

  if (currentPage === 'auth') {
    return <AuthPage defaultMode="login" onBackToHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 font-sans selection:bg-[#F1FECB] selection:text-slate-950 overflow-x-hidden">
      
      {/* Navigation Bar Minimalis */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif font-bold text-xl tracking-tight text-slate-950">
            GRAPHOLOGY<span className="font-sans font-light italic text-slate-500">ACADEMY</span>
          </span>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-white">
            CHA™
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-slate-600">
          <a href="#program" className="hover:text-slate-950 transition-colors">Syllabus</a>
          <a href="#Roudmap" className="hover:text-slate-950 transition-colors">Roadmap</a>
          <a href="#Instruktur" className="hover:text-slate-950 transition-colors">Faculty</a>
          <a href="#faq" className="hover:text-slate-950 transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('auth')}
            className="text-xs font-mono font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl bg-slate-950 text-white hover:bg-lime-300 hover:text-slate-950 transition-all duration-300 cursor-pointer shadow-md"
          >
            Portal Siswa ↗
          </button>
        </div>
      </header>

      {/* Hero Section Menggunakan HeroCard Asli */}
      <main className="pt-24">
        <HeroCard onNavigateAuth={() => setCurrentPage('auth')} />

        {/* Program / Syllabus Section */}
        <ProgramSection />

        {/* Career Roadmap Section */}
        <CareerRoadmapSection />

        {/* Quote Section (Max Pulver) */}
        <QuoteSection />

        {/* Instructor Section */}
        <InstructorSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer Minimalis */}
      <footer className="py-12 px-4 sm:px-8 lg:px-16 bg-slate-950 text-slate-400 font-sans border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
          <p>© {new Date().getFullYear()} Graphology Academy CHA™. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#program" className="hover:text-white transition-colors">Syllabus</a>
            <a href="#Roudmap" className="hover:text-white transition-colors">Roadmap</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </footer>

    </div>
  );
};