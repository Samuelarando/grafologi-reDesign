import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100 font-sans border-t border-slate-800 pt-20 pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Baris Atas: Brand + Navigasi + Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-800">
          
          {/* Kolom 1: Profil Singkat Program (Col-span 5) */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white">
                GRAPHOLOGY<span className="font-sans font-light italic text-[#F1FECB]">ACADEMY</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              Lembaga pelatihan dan akreditasi resmi Certified Handwriting Analyst (CHA™). Menjembatani sains analisis pola tulisan tangan untuk kebutuhan forensik, HR, dan pengembangan diri.
            </p>

            <div className="pt-2">
              <a
                href="#daftar"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-slate-950 bg-[#F1FECB] hover:bg-lime-300 transition-colors"
              >
                <span>Daftar Sertifikasi</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi Halaman (Col-span 3) */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-slate-500">
              Navigasi Utama
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
              <li>
                <a href="#program" className="hover:text-[#F1FECB] transition-colors">Overview Program</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[#F1FECB] transition-colors">Jalur Karir (Roadmap)</a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-[#F1FECB] transition-colors">Kurikulum & Modul</a>
              </li>
              <li>
                <a href="#instruktur" className="hover:text-[#F1FECB] transition-colors">Tim Instruktur</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F1FECB] transition-colors">FAQ & Bantuan</a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Lisensi (Col-span 4) */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-slate-500">
              Kantor & Sekretariat
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              <p>
                Gedung Graha Aksara, Fl. 04<br />
                Jl. Sudirman No. 108, Jakarta Selatan
              </p>
              <p className="font-mono text-slate-300">
                Email: academic@graphology.id<br />
                WhatsApp: +62 812-3456-7890
              </p>
            </div>
          </div>

        </div>

        {/* Branding Serif Raksasa Gaya Editorial */}
        <div className="text-center select-none py-4 border-b border-slate-900">
          <h2 className="text-[11vw] leading-none font-serif font-black tracking-tighter text-slate-900/80 hover:text-slate-900 transition-colors uppercase">
            Graphology
          </h2>
        </div>

        {/* Baris Bawah: Hak Cipta & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>© {currentYear} Graphology Academy Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
          </div>
        </div>

      </div>
    </footer>
  );
};