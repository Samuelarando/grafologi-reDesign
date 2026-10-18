export interface ProgramModuleItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  imageSide: string; // Path atau link gambar modul
}

export const programModules: ProgramModuleItem[] = [
  {
    id: "01",
    badge: "Tingkat Dasar",
    title: "Fondasi & Indikator Kepribadian",
    description: "Memahami prinsip dasar grafologi dan menguasai indikator utama tulisan tangan secara akurat.",
    features: [
      "Pengenalan sejarah & etika grafologi",
      "Analisis kemiringan, tekanan, & ukuran huruf",
      "Penguasaan 100+ traits indikator karakter"
    ],
    imageSide: "/grafologi_1.webp"
  },
  {
    id: "02",
    badge: "Tingkat Lanjut",
    title: "Analisis Emosi & Perilaku",
    description: "Membaca pola pikir bawah sadar dan dinamika emosional melalui struktur tulisan & tanda tangan.",
    features: [
      "Analisis spasi, marjin, & kepadatan kata",
      "Membaca indikator kecerdasan emosional",
      "Teknik pembedahan struktur tanda tangan"
    ],
    imageSide: "/grafologi_2.webp"
  },
  {
    id: "03",
    badge: "Praktik Profesional",
    title: "Penerapan & Studi Kasus",
    description: "Mengaplikasikan keahlian grafologi untuk kebutuhan asesmen rekrutmen dan konseling mandiri.",
    features: [
      "Studi kasus sampel tulisan tangan nyata",
      "Penyusunan laporan analisis karakter",
      "Simulasi asesmen untuk rekrutmen & HRD"
    ],
    imageSide: "/grafologi_3.webp"
  }
];