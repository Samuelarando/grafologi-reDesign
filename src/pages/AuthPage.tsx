import React, { useState } from 'react';
import { loginFields, registerFields } from '../Components/data/authFormFields';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthPageProps {
  defaultMode?: 'login' | 'register';
  onBackToHome?: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  defaultMode = 'login',
  onBackToHome,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(defaultMode);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      console.log('Logging in with:', formData);
    } else {
      console.log('Registering with:', formData);
    }
  };

  // Indikator Sederhana Kekuatan Password
  const getPasswordStrength = (pass: string = '') => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 10) score += 1;
    if (/[A-Z]/.test(pass) && /[0-9]/.test(pass)) score += 1;
    return score; // Max 3
  };

  const passwordStrength = getPasswordStrength(formData['password']);
  const fieldsToRender = mode === 'login' ? loginFields : registerFields;

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 font-sans grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#F1FECB]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* SISI KIRI: Brand & Editorial Showcase (Hidden di Mobile, Visible di Large Screen) */}
      <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-12 lg:p-16 border-r border-white/10 bg-slate-950/50 backdrop-blur-3xl overflow-hidden">
        
        {/* Subtle Overlay Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        {/* Top Brand Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xl tracking-tight text-white">grafologi</span>
            <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-[#F1FECB] text-slate-950">
              CHA™
            </span>
          </div>
        </div>

        {/* Middle Showcase Content */}
        <div className="relative z-10 space-y-6 max-w-sm">
          <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#F1FECB] block">
            // Certified Handwriting Analyst
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight font-bold">
            Unravel <br />
            <span className="font-sans font-light italic text-[#F1FECB]">Human Mind</span> <br />
            Through Handwriting.
          </h2>
          <blockquote className="text-xs text-slate-400 font-normal leading-relaxed border-l-2 border-[#F1FECB]/60 pl-4 italic">
            "Otaklah yang menulis. Lengan, tangan, dan jari jemari hanyalah instrumen fisik." — Max Pulver
          </blockquote>
        </div>

        {/* Bottom Metadata Badges */}
        <div className="relative z-10 flex items-center gap-6 pt-8 border-t border-white/10 text-xs font-mono text-slate-400">
          <div>
            <span className="block font-bold text-white text-sm">4 Module</span>
            <span>Comprehensive</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div>
            <span className="block font-bold text-white text-sm">Global Certification</span>
            <span>CHA™ Standard</span>
          </div>
        </div>

      </div>

      {/* SISI KANAN: Form Authentication Ultra-Modern */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-between p-6 sm:p-12 lg:p-16 relative z-10 overflow-y-auto">
        
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto lg:max-w-none">
          {onBackToHome ? (
            <motion.button
              whileHover={{ x: -4 }}
              onClick={onBackToHome}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#F1FECB] transition-colors cursor-pointer border-none bg-transparent"
            >
              <span>←</span>
              <span>Kembali ke Beranda</span>
            </motion.button>
          ) : <div />}

          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            PORTAL AKADEMIK v2.0
          </span>
        </div>

        {/* Center Form Card */}
        <div className="w-full max-w-md mx-auto my-auto py-8">
          
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl space-y-6 relative overflow-hidden">
            
            {/* Header Form */}
            <div className="text-left space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                {mode === 'login' ? 'Selamat Datang Kembali' : 'Bergabung Sekarang'}
              </h1>
              <p className="text-xs text-slate-400">
                {mode === 'login' 
                  ? 'Masukan kredensial Anda untuk mengakses modul pembelajaran.' 
                  : 'Lengkapi formulir di bawah untuk memulai sertifikasi CHA™.'}
              </p>
            </div>

            {/* Tab Toggle Modern Segmented Control */}
            <div className="grid grid-cols-2 p-1 bg-slate-950/80 rounded-2xl border border-white/10 text-xs font-mono font-semibold relative">
              <button
                type="button"
                onClick={() => { setMode('login'); setFormData({}); }}
                className={`py-2.5 rounded-xl transition-colors duration-200 cursor-pointer relative z-10 border-none bg-transparent ${
                  mode === 'login' ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {mode === 'login' && (
                  <motion.div
                    layoutId="authTabModern"
                    className="absolute inset-0 bg-[#F1FECB] rounded-xl shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                [ LOGIN ]
              </button>

              <button
                type="button"
                onClick={() => { setMode('register'); setFormData({}); }}
                className={`py-2.5 rounded-xl transition-colors duration-200 cursor-pointer relative z-10 border-none bg-transparent ${
                  mode === 'register' ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {mode === 'register' && (
                  <motion.div
                    layoutId="authTabModern"
                    className="absolute inset-0 bg-[#F1FECB] rounded-xl shadow-md -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                [ REGISTER ]
              </button>
            </div>

            {/* Social Google Auth */}
            <button
              type="button"
              className="w-full py-3 px-4 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-white/10 text-xs font-mono text-slate-200 flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z" />
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z" />
                <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z" />
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z" />
              </svg>
              <span>Lanjutkan dengan Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] bg-slate-800 flex-1" />
              <span className="text-[10px] font-mono uppercase text-slate-500">atau dengan email</span>
              <span className="h-[1px] bg-slate-800 flex-1" />
            </div>

            {/* Form Fields dengan AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.form
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {fieldsToRender.map((field) => {
                  const isPasswordField = field.type === 'password';

                  return (
                    <div key={field.id} className="space-y-1.5 text-left">
                      <label htmlFor={field.id} className="text-xs font-mono font-medium text-slate-300 block">
                        {field.label} {field.required && <span className="text-[#F1FECB]">*</span>}
                      </label>
                      
                      <div className="relative">
                        <input
                          id={field.id}
                          type={isPasswordField ? (showPassword ? 'text' : 'password') : field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={formData[field.id] || ''}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F1FECB] focus:ring-1 focus:ring-[#F1FECB] transition-all"
                        />

                        {isPasswordField && (
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-[10px] font-mono bg-transparent border-none cursor-pointer"
                          >
                            {showPassword ? 'HIDE' : 'SHOW'}
                          </button>
                        )}
                      </div>

                      {/* Password Strength Indicator (Khusus Register Mode) */}
                      {isPasswordField && mode === 'register' && formData['password'] && (
                        <div className="space-y-1 pt-1">
                          <div className="flex gap-1.5 h-1">
                            <div className={`h-full flex-1 rounded-full ${passwordStrength >= 1 ? 'bg-amber-400' : 'bg-slate-800'}`} />
                            <div className={`h-full flex-1 rounded-full ${passwordStrength >= 2 ? 'bg-lime-400' : 'bg-slate-800'}`} />
                            <div className={`h-full flex-1 rounded-full ${passwordStrength >= 3 ? 'bg-emerald-400' : 'bg-slate-800'}`} />
                          </div>
                          <p className="text-[10px] font-mono text-slate-400">
                            {passwordStrength === 1 && 'Kategori Password: Lemah'}
                            {passwordStrength === 2 && 'Kategori Password: Sedang'}
                            {passwordStrength === 3 && 'Kategori Password: Sangat Kuat ✓'}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}

                {mode === 'login' ? (
                  <div className="text-right">
                    <a href="#reset" className="text-xs font-mono text-slate-400 hover:text-[#F1FECB] transition-colors">
                      Lupa kata sandi?
                    </a>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 rounded border-slate-800 bg-slate-950 text-[#F1FECB] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-[11px] text-slate-400 leading-tight">
                      Saya menyetujui <span className="text-white underline cursor-pointer">Syarat & Ketentuan</span> Akademik CHA™.
                    </label>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#F1FECB] hover:bg-lime-300 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-lg cursor-pointer border-none mt-2"
                >
                  {mode === 'login' ? 'Masuk ke Portal ↗' : 'Buat Akun Pendaftaran ↗'}
                </motion.button>
              </motion.form>
            </AnimatePresence>

          </div>

        </div>

        {/* Footer Text */}
        <div className="text-center text-[11px] font-mono text-slate-500">
          © {new Date().getFullYear()} Graphology Academy CHA™. All rights reserved.
        </div>

      </div>

    </section>
  );
};