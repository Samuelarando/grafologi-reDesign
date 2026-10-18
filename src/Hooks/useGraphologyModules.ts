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
      subtitle: "Program Grafologi Fondasi",
      description: "Kuasai lebih dari 100 indikator kepribadian yang digunakan dalam analisis grafologi profesional.",
      badge: "Materi Komprehensif",
      gradient: "from-lime-300 via-lime-400 to-emerald-400",
      textColor: "text-slate-950",
    },
    {
      id: 2,
      title: "Analisis Tulisan Tangan Lanjutan",
      subtitle: "Modul Praktik 02",
      description: "Pelajari metode analisis mendalam yang memperkuat kompetensi Anda dalam memahami karakter dan kepribadian.",
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