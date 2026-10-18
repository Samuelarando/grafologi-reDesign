import React from 'react';
import { programModules } from '../Components/data/ProgramData';

export const ProgramSection: React.FC = () => {
  return (
    <section id="program" className="w-full bg-transparent text-slate-900 py-70 pb-28 px-4 sm:px-8 lg:px-16 border-b border-black/10">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        
        {/* Header Seksi */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-slate-700 font-serif">
            ✦ Kurikulum Eksklusif Grafologi ✦
          </p>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] font-serif italic">
            Program Pembelajaran <span className="not-italic underline decoration-lime-500 decoration-wavy decoration-2 underline-offset-8">Komprehensif</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium max-w-2xl mx-auto pt-2">
            Dirancang secara sistematis dari tingkat dasar hingga penerapan profesional agar Anda dapat menganalisis karakter tulisan tangan secara akurat dan objektif.
          </p>
        </div>

        {/* Baris Zig-Zag Berurutan Menurun */}
        <div className="space-y-20 sm:space-y-28">
          {programModules.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={item.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 sm:gap-16`}
              >
                
                {/* Sisi Gambar (50% Lebar) */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl border border-black/10 bg-white/50">
                  <img 
                    src={item.imageSide} 
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[300px] sm:h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Sisi Teks (50% Lebar) */}
                <div className="w-full md:w-1/2 space-y-5 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-white border border-slate-900">
                      {item.badge}
                    </span>
                    <span className="font-mono text-xl font-bold text-slate-400">
                      0{item.id}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <span className="text-lime-600 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <a 
                      href="#daftar" 
                      className="inline-flex items-center gap-2 text-xs font-bold px-6 py-3 rounded-xl bg-slate-950 hover:bg-lime-500 hover:text-slate-950 text-white transition-all duration-300 shadow-md"
                    >
                      <span>Pelajari Modul Ini</span>
                      <span>➔</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};