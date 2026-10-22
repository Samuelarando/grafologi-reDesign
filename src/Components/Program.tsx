import React from 'react';
import { programModules } from '../Components/data/ProgramData';
import { useNavigate } from 'react-router-dom';

export const ProgramSection: React.FC = () => {

  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/modul/${id}`);
  };

  return (
    <section  className="w-full bg-transparent text-slate-900 py-70 pb-28 px-4 sm:px-8 lg:px-16 border-b border-black/10">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        
        {/* Header Seksi */}
    {/* Header Editorial Minimalis (Mewah & Dewasa) */}
{/* Header Editorial High-End (Ukuran Lebih Besar & Megah) */}
<div className="text-left space-y-6 max-w-5xl border-b border-slate-200/80 pb-12">
  <div className="flex items-center gap-4">
    <span className="w-12 h-[1.5px] bg-slate-950" />
    <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.35em] font-semibold text-slate-500">
      Syllabus & Learning Path
    </span>
  </div>

  <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-slate-950 tracking-tight leading-[0.98]">
    Program Pembelajaran <br className="hidden sm:inline" />
    <span className="font-sans font-light text-slate-400 italic">Komprehensif</span>
  </h2>

  <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl pt-2">
    Rangkaian kurikulum terstruktur dari metodologi analisis dasar hingga penerapan praktis di tingkat profesional.
  </p>
</div>

        {/* Baris Zig-Zag Berurutan Menurun */}
        <div id="program" className="space-y-20 sm:space-y-28">
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