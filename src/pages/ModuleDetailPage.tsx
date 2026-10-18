import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { programModules } from '../Components/data/ProgramData'; // Sesuaikan path jika beda

export const ModuleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const moduleData = programModules.find((item) => item.id === id);

  if (!moduleData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 p-4">
        <h2 className="text-2xl font-bold mb-4">Modul tidak ditemukan!</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-slate-950 text-white rounded-xl text-sm font-bold hover:bg-lime-500 hover:text-slate-950 transition-all cursor-pointer"
        >
          Kembali ke Utama
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Tombol Kembali */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950 transition-colors cursor-pointer"
        >
          ← Kembali ke Landing Page
        </button>

        {/* Header Info (Menyatu tanpa kotak) */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-slate-950 text-white">
              {moduleData.badge}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-lime-200/70 text-lime-900 border border-lime-300">
              ⏱ {moduleData.duration}
            </span>
            <span className="font-mono text-xl font-bold text-slate-400 ml-auto">
              Modul 0{moduleData.id}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
            {moduleData.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            {moduleData.fullDescription}
          </p>
        </div>

        {/* Banner Gambar Modul */}
        <div className="overflow-hidden rounded-3xl shadow-2xl border border-black/10 bg-slate-200">
          <img 
            src={moduleData.imageSide} 
            alt={moduleData.title}
            loading="lazy"
            decoding="async"
            className="w-full h-[320px] sm:h-[480px] object-cover"
          />
        </div>

        {/* Grid Detail: Target Audiens & Benefits (Tanpa Kotak Utama, menggunakan aksen minimalis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
          
          {/* Siapa Yang Wajib Ikut */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
              🎯 Ditujukan Untuk Siapa?
            </h3>
            <ul className="space-y-3">
              {moduleData.targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium leading-relaxed">
                  <span className="text-lime-600 font-black">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fasilitas Yang Didapatkan */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-slate-950 uppercase tracking-wider flex items-center gap-2">
              🎁 Fasilitas Modul Ini:
            </h3>
            <ul className="space-y-3">
              {moduleData.benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-900 font-semibold leading-relaxed">
                  <span className="text-lime-600 font-black">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Silabus Kurikulum Terperinci */}
        <div className="space-y-6 pt-6 border-t border-black/10">
          <h3 className="text-2xl font-black text-slate-950">
            📚 Silabus & Materi Pembelajaran
          </h3>
          <div className="grid grid-cols-1 gap-3.5">
            {moduleData.subTopics.map((topic, idx) => (
              <div key={idx} className="p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-black/5 flex items-center gap-4 shadow-sm hover:border-black/20 transition-all">
                <span className="w-9 h-9 rounded-xl bg-slate-950 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  0{idx + 1}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-10 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 pb-12">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">Siap menguasai modul ini?</p>
            <p className="text-base font-extrabold text-slate-950 mt-0.5">Amankan kursi Anda sekarang & mulai belajar.</p>
          </div>
          <Link 
            to="/#daftar"
            className="w-full sm:w-auto text-center px-8 py-4 bg-slate-950 hover:bg-lime-500 hover:text-slate-950 text-white rounded-2xl font-black text-sm transition-all shadow-xl cursor-pointer"
          >
            Daftar Kelas Modul 0{moduleData.id} ➔
          </Link>
        </div>

      </div>
    </div>
  );
};