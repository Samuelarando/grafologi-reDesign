import React from 'react';
import { programModules } from '../Components/data/ProgramData';
import { useNavigate } from 'react-router-dom';

export const ProgramSection: React.FC = () => {

  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/modul/${id}`);
  };

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
                
                {/* Sisi Gambar (Lebih Besar: 58% Lebar) */}
                <div className="w-full md:w-[58%] overflow-hidden rounded-3xl shadow-2xl border border-black/10 bg-white/50 group">
                  <img 
                    src={item.imageSide} 
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[360px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Sisi Teks (42% Lebar) dengan margin mt-80 sesuai permintaan */}
                <div className="w-full md:w-[42%] space-y-5 text-left md:mt-80">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-slate-950 text-white border border-slate-950">
                      {item.badge}
                    </span>
                    <span className="font-mono text-2xl font-bold text-slate-400">
                      0{item.id}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight font-serif">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  <ul className="space-y-3 pt-1">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-semibold">
                        <span className="text-lime-600 font-black">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <button
                      onClick={() => handleNavigate(item.id)} 
                      className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-wider px-7 py-4 rounded-2xl bg-slate-950 hover:bg-lime-500 hover:text-slate-950 text-white transition-all duration-300 shadow-xl cursor-pointer"
                    >
                      <span>Pelajari Modul Ini</span>
                      <span className="text-sm">➔</span>
                    </button>
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