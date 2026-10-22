import React from 'react';
import { instructorsData } from './data/instructorsData';

export const InstructorSection: React.FC = () => {
  return (
    <section id="instruktur" className="py-24 px-4 sm:px-8 lg:px-16 bg-slate-50 text-slate-900 font-sans border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto space-y-28">
        
        {/* Header Utama Section */}
        <div className="text-left space-y-6 max-w-4xl border-b border-slate-200 pb-10">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1.5px] bg-slate-950" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.35em] font-semibold text-slate-500">
              Faculty & Mentors
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-slate-950 tracking-tight leading-[1.05]">
            Belajar Langsung dari <br className="hidden sm:inline" />
            <span className="font-sans font-light text-slate-400 italic">Praktisi Berpengalaman</span>
          </h2>
        </div>

        {/* List Instruktur */}
        <div className="space-y-32">
          {instructorsData.map((instructor) => (
            <div key={instructor.id} className="relative">
              
              {/* Baris Atas: Gambar Kiri + Paragraf Teks Kanan */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Gambar 1 (Kiri) */}
                <div className="md:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src={instructor.mainImage}
                    alt={instructor.name}
                    loading="lazy"
                    className="w-full h-72 sm:h-80 md:h-96 object-cover filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Paragraf & Info Teks (Kanan) */}
                <div className="md:col-span-7 m-7 space-y-5 text-left pt-2 pb-12 md:pb-20">
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 block">
                    {instructor.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 leading-snug">
                    {instructor.title}
                  </h3>

                  <div className="border-l-2 border-slate-900 pl-4 py-0.5">
                    <h4 className="text-base font-bold text-slate-900">
                      {instructor.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-mono">
                      {instructor.credentials.join(' • ')}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {instructor.description}
                  </p>

                </div>

              </div>

              {/* Wrapper Bawah: Gambar 2 Mengajar (Dempet & Bertumpuk di Bawah Paragraf) */}
              <div className="w-full md:w-7/12 ml-auto -mt-6 md:-mt-24 relative z-10 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-xl">
                <img
                  src={instructor.teachingImage}
                  alt={`${instructor.name} saat mengajar`}
                  loading="lazy"
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};