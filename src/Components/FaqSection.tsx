import React, { useState } from 'react';
import { faqData } from './data/faqData';
import { motion, AnimatePresence } from 'framer-motion';

export const FaqSection: React.FC = () => {
  // Default terbuka modul pertama
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-slate-50 text-slate-900 font-sans border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Header Editorial Minimalis dengan Animasi */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-950 pb-10"
        >
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-slate-400 block">
              // FAQ & Information
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-slate-950 tracking-tight leading-[1.05]">
              Pertanyaan Pertanyaan <br />
              <span className="font-sans font-light italic text-slate-500">Yang Sering Diajukan</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xs">
            Segala hal mengenai kurikulum, metode fleksibel, dan sertifikasi keahlian CHA™.
          </p>
        </motion.div>

        {/* List Accordion Editorial Minimalis */}
        <div className="divide-y divide-slate-200 border-b border-slate-200">
          {faqData.map((item, index) => {
            const isOpen = openFaqId === item.id;
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group transition-colors duration-200 py-6 sm:py-8"
              >
                {/* Header Pertanyaan */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  type="button"
                  className="w-full text-left flex items-start justify-between gap-6 focus:outline-none select-none cursor-pointer"
                >
                  <div className="flex items-start gap-4 sm:gap-8">
                    {/* Nomor Indeks Monospaced */}
                    <span className="text-xs sm:text-sm font-mono font-medium text-slate-400 pt-1">
                      {formattedIndex}
                    </span>

                    <h3 className={`text-lg sm:text-2xl font-serif tracking-tight transition-colors duration-200 ${
                      isOpen ? 'text-slate-950 font-bold' : 'text-slate-800 font-normal group-hover:text-slate-950'
                    }`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Indikator Teks Minimalis [ + ] / [ − ] */}
                  <span className="text-xs sm:text-sm font-mono font-medium text-slate-400 group-hover:text-slate-950 shrink-0 pt-1">
                    {isOpen ? '[ − ]' : '[ + ]'}
                  </span>
                </button>

                {/* Jawaban dengan AnimatePresence untuk Transisi Halus */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 sm:pl-14 pr-4 sm:pr-12 pt-4 pb-2">
                        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Banner Bantuan Minimalis dengan Animasi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-200"
        >
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-950 tracking-tight">
              Belum menemukan jawaban yang Anda cari?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Tim akademik kami siap berdiskusi secara langsung melalui WhatsApp.
            </p>
          </div>

          <motion.a
            whileHover={{ x: 4 }}
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-950 hover:text-lime-700 transition-colors py-2 border-b-2 border-slate-950 hover:border-lime-700"
          >
            <span>Konsultasi Akademik</span>
            <span>↗</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};