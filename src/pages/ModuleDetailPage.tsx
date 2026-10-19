import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { programModules } from '../Components/data/ProgramData';

export const ModuleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const moduleData = programModules.find((item) => item.id === id);

  // Hook Pengkondisian Ukuran Layar untuk SVG Dinamis
  const [svgScale, setSvgScale] = useState<number>(1);
  const [containerDimensions, setContainerDimensions] = useState<{ width: number; height: number }>({
    width: 841,
    height: 461,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Layar Mobile/HP
        setSvgScale(0.42);
        setContainerDimensions({ width: 350, height: 193 });
      } else if (width < 1024) {
        // Layar Tablet
        setSvgScale(0.75);
        setContainerDimensions({ width: 630, height: 345 });
      } else {
        // Layar Desktop
        setSvgScale(1);
        setContainerDimensions({ width: 841, height: 461 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!moduleData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 p-4 font-sans">
        <h2 className="text-2xl font-bold mb-4">Modul tidak ditemukan!</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-slate-950 text-white rounded-full text-sm font-bold hover:bg-lime-500 hover:text-slate-950 transition-all cursor-pointer"
        >
          ← Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-x-hidden">
      
      {/* Definisi SVG ClipPath dengan Skala Dinamis */}
      <svg className="absolute pointer-events-none w-0 h-0">
        <defs>
          <clipPath id="customShapeDynamic" clipPathUnits="userSpaceOnUse">
            <path 
              d="M801 0C823.091 1.03082e-05 841 17.9086 841 40V196C841 218.091 823.091 236 801 236H427C404.909 236 387 253.909 387 276V421C387 443.091 369.091 461 347 461H40C17.9086 461 5.2353e-07 443.091 0 421V276C0 253.909 17.9086 236 40 236H156C178.091 236 196 218.091 196 196V40C196 17.9086 213.909 0 236 0H801Z" 
              transform={`scale(${svgScale})`}
            />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Tombol Navigasi Kembali */}
        <div>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-950 transition-colors cursor-pointer"
          >
            ← Kembali ke Program Utama
          </button>
        </div>

        {/* Header Terpusat */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
            {moduleData.badge} • Modul 0{moduleData.id}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
            {moduleData.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            {moduleData.fullDescription}
          </p>
        </div>

        {/* Komposisi Gambar Utama & Kartu Melayang */}
        <div className="relative my-8 lg:my-12 flex justify-center items-center w-full">
          
          <div 
            className="relative mx-auto flex justify-center items-center drop-shadow-2xl transition-all duration-300"
            style={{
              width: `${containerDimensions.width}px`,
              height: `${containerDimensions.height}px`,
            }}
          >
            {/* Wrapper Div ClipPath */}
            <div 
              className="w-full h-full relative overflow-hidden group"
              style={{ clipPath: 'url(#customShapeDynamic)' }}
            >
              <img 
                src="/grafologi_4.webp" 
                alt={moduleData.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/25 pointer-events-none" />
            </div>

            {/* Floating Card 1: Hitam Kiri Atas */}
            <div className="absolute -top-6 -left-4 sm:top-2 sm:-left-8 lg:-left-12 bg-slate-950 text-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl max-w-[140px] sm:max-w-[210px] border border-slate-800 z-20">
              <p className="text-xl sm:text-3xl font-black tracking-tight text-white mb-0.5">99%</p>
              <p className="text-[9px] sm:text-xs text-slate-300 font-medium leading-snug">
                Akurasi analisis & wawasan kepribadian
              </p>
            </div>

            {/* Floating Card 2: Putih Kiri Bawah */}
            <div className="absolute -bottom-6 -left-4 sm:bottom-2 sm:-left-8 lg:-left-12 bg-white text-slate-900 p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl max-w-[140px] sm:max-w-[210px] border border-slate-200/80 z-20">
              <p className="text-lg sm:text-2xl font-black tracking-tight text-slate-950 mb-0.5">
                {moduleData.duration.split(' ')[0]} {moduleData.duration.split(' ')[1]}
              </p>
              <p className="text-[9px] sm:text-xs text-slate-500 font-medium leading-snug">
                Durasi bimbingan langsung bersama instruktur
              </p>
            </div>

            {/* Floating Card 3: Putih Kanan Atas */}
            <div className="absolute -top-6 -right-4 sm:top-2 sm:-right-8 lg:-right-12 bg-white text-slate-900 p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 flex items-center gap-2 z-20">
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-950 leading-none">4.9</p>
                <p className="text-[8px] sm:text-[10px] text-slate-500 font-medium mt-0.5">Rating Kepuasan</p>
              </div>
              <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-slate-950 text-yellow-400 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                ★
              </span>
            </div>

            {/* Floating Card 4: Putih Kanan Bawah (Diperbesar) */}
            <div className="absolute md:bottom-10 md:left-100 -bottom-6 -right-10 lg:-right-16 bg-white text-slate-900 p-4 sm:p-6 rounded-3xl shadow-2xl border border-slate-200/80 max-w-[220px] sm:max-w-[220px] lg:max-w-[380px] z-20">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 sm:mb-3">
                Topik Utama Modul
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {moduleData.subTopics.slice(0, 5).map((topic, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-100 text-slate-800 text-[10px] sm:text-xs font-semibold hover:bg-slate-200 transition-colors"
                  >
                    {topic.split(':')[0]}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Space Penyeimbang untuk Mobile */}
        <div className="h-10 sm:h-4"></div>

        {/* Penjelasan Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-8 max-w-5xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              🎯 Target Peserta
            </h3>
            <ul className="space-y-3">
              {moduleData.targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                  <span className="text-lime-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              🎁 Fasilitas Pembelajaran
            </h3>
            <ul className="space-y-3">
              {moduleData.benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-900 font-semibold">
                  <span className="text-lime-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tombol Utama */}
        <div className="text-center pt-6 pb-12">
          <Link 
            to="/#daftar"
            className="inline-flex items-center gap-3 px-10 sm:px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-sm sm:text-base shadow-xl shadow-blue-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Daftar Modul Ini Sekarang</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">➔</span>
          </Link>
        </div>

      </div>
    </div>
  );
};