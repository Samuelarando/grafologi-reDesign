import { useState } from 'react';

// Interface untuk data Modul Grafologi
export interface GraphologyModule {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  gradient: string;
  textColor: string;
}

export const useGraphologyModules = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const modules: GraphologyModule[] = [
    {
      id: 1,
      title: "Kuasai 100+ Traits",
      subtitle: "Program Sertifikasi CHA™",
      description: "Kuasai lebih dari 100 indikator kepribadian yang digunakan dalam analisis grafologi profesional.",
      badge: "Sertifikasi Resmi",
      gradient: "from-lime-300 via-lime-400 to-emerald-400",
      textColor: "text-slate-950",
    },
    {
      id: 2,
      title: "Sertifikasi Resmi CHA",
      subtitle: "Modul Praktik 02",
      description: "Raih sertifikasi grafologi internasional yang membuktikan kompetensi Anda sebagai Certified Handwriting Analyst.",
      badge: "Modul Utama",
      gradient: "from-amber-200 via-amber-300 to-amber-500",
      textColor: "text-slate-950",
    },
    {
      id: 3,
      title: "Keunggulan Profesional",
      subtitle: "Modul Praktik 03",
      description: "Jadilah profesional yang melihat lebih dalam dengan keahlian yang tidak dimiliki semua orang.",
      badge: "Portofolio Riset",
      gradient: "from-slate-100 via-slate-200 to-slate-300",
      textColor: "text-slate-900",
    },
  ];

  const nextModule = (): void => {
    setActiveTab((prev) => (prev + 1) % modules.length);
  };

  return {
    modules,
    activeTab,
    setActiveTab,
    nextModule,
  };
};