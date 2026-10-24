import React from 'react';
import { motion } from 'framer-motion';

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
    level: '01',
    badge: 'Fondasi Pemula',
    title: 'Dasar Analisis Goresan & Kepribadian',
    description: 'Mengenal anatomi tulisan tangan, tekanan goresan, ukuran, dan zona tulisan untuk membaca karakter dasar seseorang.',
    skills: ['Membaca Zona Tulisan', 'Analisis Tekanan & Ukuran', 'Pola Emosi Dasar'],
    opportunity: 'Self-awareness & Pemahaman Karakter Dekat',
  },
  {
    level: '02',
    badge: 'Tingkat Menengah',
    title: 'Analisis Pola Mental & Profesional',
    description: 'Mempelajari kemiringan, jarak antar kata, bentuk huruf sambung, serta indikator kejujuran dan konsistensi kerja.',
    skills: ['Evaluasi Konsistensi & Fokus', 'Analisis Gaya Komunikasi', 'Deteksi Stres & Burnout'],
    opportunity: 'HR Screening, Rekrutmen & Psikologi Praktis',
  },
  {
    level: '03',
    badge: 'Tingkat Mahir',
    title: 'Grafoterapi & Konseling Lanjutan',
    description: 'Menguasai teknik terapi tulisan tangan untuk merubah kebiasaan serta teknik wawancara berbasis grafologi.',
    skills: ['Program Grafoterapi', 'Studi Kasus Psikologis', 'Sesi Konseling Klien'],
    opportunity: 'Praktik Konseling Mandiri & Sesi Privat',
  },
  {
    level: '04',
    badge: 'Sertifikasi Keahlian',
    title: 'Certified Handwriting Analyst (CHA)',
    description: 'Meraih sertifikasi resmi sebagai Analis Tulisan Tangan yang siap terjun sebagai ahli di industri profesional.',
    skills: ['Audit Forensik Dokumen', 'Sertifikasi Resmi', 'Etika Konsultan Grafologi'],
    opportunity: 'Konsultan Ahli, Trainer SDM & Forensik Partner',
  },
];

export const CareerRoadmapSection: React.FC = () => {
  return (
    <section id="Roudmap" className="py-24 px-4 sm:px-8 lg:px-16 bg-slate-50 text-slate-900 font-sans border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Header Section Editorial Rata Kiri dengan Animasi */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left space-y-6 max-w-4xl border-b border-slate-200 pb-10"
        >
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1.5px] bg-slate-950" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.35em] font-semibold text-slate-500">
              Career & Skill Roadmap
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-slate-950 tracking-tight leading-[1.05]">
            Jalur Perjalanan <br className="hidden sm:inline" />
            <span className="font-sans font-light text-slate-400 italic">Ahli Grafologi</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl pt-2">
            Kurikulum terstruktur yang dirancang secara progresif untuk membawa Anda dari tingkat pemula hingga diakui sebagai praktisi bersertifikat.
          </p>
        </motion.div>

        {/* Grid Step/Kartu Editorial dengan Animasi Muncul Satu Per Setiap Jeda (Delay 0.25s) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.25, ease: "easeOut" }}
              className="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 group-hover:bg-slate-950 transition-colors duration-300" />

              <div className="space-y-6">
                {/* Header Angka & Level */}
                <div className="flex items-baseline justify-between border-b border-slate-100 pb-4">
                  <span className="text-4xl font-serif font-bold text-slate-950 tracking-tight">
                    {step.level}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
                    {step.badge}
                  </span>
                </div>

                {/* Judul & Deskripsi */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-950 leading-snug tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* List Keahlian */}
                <div className="pt-2 space-y-3">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Keahlian Utama:
                  </p>
                  <ul className="space-y-2">
                    {step.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-xs text-slate-800 font-medium flex items-center gap-2">
                        <span className="w-1 h-1 bg-slate-950 rounded-full shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Output Box (Aksen Warna Muted Editorial) */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Peluang Karir / Result:
                </p>
                <div className="p-3.5 rounded-xl bg-[#F1FECB]/50 border border-[#F1FECB] text-slate-900 text-xs font-semibold leading-snug">
                  {step.opportunity}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};