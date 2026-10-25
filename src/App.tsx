import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LandingPage} from './pages/LandingPage';
import { ModuleDetailPage } from './pages/ModuleDetailPage';
import { AuthPage } from './pages/AuthPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-lime-500 selection:text-slate-950">
        <Routes>
          {/* Halaman Utama / Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<AuthPage defaultMode="login" />} />
          <Route path="/register" element={<AuthPage defaultMode="register" />} />
          
          <Route path="/modul/:id" element={<ModuleDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;