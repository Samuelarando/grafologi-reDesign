import React from 'react';

interface RoadmapStep {
  level: string;
  badge: string;
  title: string;
  description: string;
  skills: string[];
  opportunity: string;
}

const roadmapSteps: RoadmapStep[] = [
  {
    level: 'Level 01',
    badge: 'Fondasi Pemula',
    title: 'Dasar Analisis Goresan & Kepribadian',
    description: 'Mengenal anatomi tulisan tangan, tekanan goresan, ukuran, dan zona tulisan untuk membaca karakter dasar seseorang.',
    skills: ['Membaca Zona Tulisan', 'Analisis Tekanan & Ukuran', 'Pola Emosi Dasar'],
    opportunity: 'Cocok untuk pengembangan diri (self-awareness) & memahami orang terdekat.',
  },
  {
    level: 'Level 02',
    badge: 'Tingkat Menengah',
    title: 'Analisis Pola Mental & Profesional',
    description: 'Mempelajari kemiringan, jarak antar kata, bentuk huruf sambung, serta indikator kejujuran dan konsistensi kerja.',
    skills: ['Evaluasi Konsistensi & Fokus', 'Analisis Gaya Komunikasi', 'Deteksi Potensi Stres & Burnout'],
    opportunity: 'Mulai diaplikasikan untuk dunia kerja, HR screening, dan psikologi praktis.',
  },
  {
    level: 'Level 03',
    badge: 'Tingkat Mahir',
    title: 'Grafoterapi & Konseling Lanjutan',
    description: 'Menguasai teknik terapi tulisan tangan (Graphotherapy) untuk membantu mengubah kebiasaan negatif serta teknik wawancara berbasis grafologi.',
    skills: ['Penyusunan Program Grafoterapi', 'Studi Kasus Psikologis Kompleks', 'Konseling & Sesi Klien Profesional'],
    opportunity: 'Membuka praktik konseling mandiri & sesi privat berbayar.',
  },
  {
    level: 'Level 04',
    badge: 'Level Profesional',
    title: 'Certified Handwriting Analyst (CHA)',
    description: 'Meraih sertifikasi resmi sebagai Analis Tulisan Tangan tersertifikasi yang siap terjun sebagai ahli di industri profesional.',
    skills: ['Audit Forensik Dokumen Dasar', 'Sertifikasi Keahlian Resmi', 'Etika & Bisnis Konsultan Grafologi'],
    opportunity: 'Berkarir sebagai Konsultan Ahli, Pembicara, Trainer SDM, atau Forensik Partner.',
  },
];

export const CareerRoadmapSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest shadow-xs">
            Roadmap Transformasi
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Jalur Perjalanan Menuju Ahli Grafologi Profesional
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Kurikulum kami dirancang secara sistematis membawa Anda bertransformasi dari tingkat pemula hingga menjadi praktisi bersertifikat.
          </p>
        </div>

        {/* Roadmap Grid / Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {roadmapSteps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Top Card Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 bg-slate-950 text-white rounded-full">
                    {step.level}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {step.description}
                </p>

                {/* Skills Tags */}
                <div className="space-y-1.5 pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Keahlian Dipelajari:
                  </p>
                  <ul className="space-y-1">
                    {step.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-700 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Opportunity Box */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Peluang Karir / Output:
                </p>
                <p className="text-xs font-medium text-slate-900 bg-slate-50 p-3 rounded-2xl border border-slate-200/60 leading-snug">
                  {step.opportunity}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};