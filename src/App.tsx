import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/LandingPage';
import { ModuleDetailPage } from './pages/ModuleDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-lime-500 selection:text-slate-950">
        <Routes>
          {/* Halaman Utama / Landing Page */}
          <Route path="/" element={<Pages />} />

          
          <Route path="/modul/:id" element={<ModuleDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;