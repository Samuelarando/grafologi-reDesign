export interface ProgramModuleItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  imageSide: string;
  // Properti tambahan baru:
  fullDescription: string;
  duration: string;
  targetAudience: string[];
  subTopics: string[];
  benefits: string[];
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
    imageSide: "/grafologi_1.webp",
    duration: "2 Minggu (4 Sesi Pertemuan)",
    fullDescription: "Modul ini dirancang khusus bagi Anda yang ingin menguasai seni dan sains di balik analisis tulisan tangan dari nol. Anda akan mempelajari bagaimana aspek visual seperti tekanan pulpen, kemiringan huruf, dan ukuran tulisan mencerminkan karakter bawah sadar seseorang secara objektif.",
    targetAudience: [
      "Pemula yang tertarik dengan sains perilaku & psikologi",
      "Praktisi HRD & Recruiter untuk validasi karakter calon karyawan",
      "Pendidik, Orang Tua, & Konselor untuk memahami anak/klien"
    ],
    subTopics: [
      "Sesi 1: Sejarah, Etika, & Prinsip Dasar Analisis Tulisan Tangan",
      "Sesi 2: Pembedahan 3 Zona Utama (Atas, Tengah, Bawah)",
      "Sesi 3: Membaca Tekanan, Ukuran, Kemiringan, & Kecepatan",
      "Sesi 4: Mengidentifikasi 100+ Trait Indikator Kepribadian Utama"
    ],
    benefits: [
      "E-Book Modul Panduan Praktis Grafologi Dasar",
      "Lembar Kerja (Worksheet) Latihan Analisis Sampel",
      "Sertifikat Kelulusan Modul Dasar",
      "Akses Diskusi Grup Komunitas Grafologi"
    ]
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
    imageSide: "/grafologi_2.webp",
    duration: "3 Minggu (6 Sesi Pertemuan)",
    fullDescription: "Modul tingkat lanjut ini memfokuskan pada aspek psikodinamika, kondisi emosional, kecerdasan emosi (EQ), serta rahasia di balik tanda tangan. Anda akan mampu mendeteksi potensi kecemasan, tingkat kejujuran, motivasi internal, hingga kepribadian publik seseorang.",
    targetAudience: [
      "Alumni Modul Dasar / Praktisi yang sudah paham fondasi grafologi",
      "Manager & Pemimpin Tim yang ingin mengelola potensi tim secara optimal",
      "Psikolog & Terapis sebagai alat bantu diagnostik komplementer"
    ],
    subTopics: [
      "Sesi 1: Analisis Marjin, Spasi Baris, Kata, & Huruf (Orientasi Ruang)",
      "Sesi 2: Menilai Kecerdasan Emosional (EQ) & Stabilitas Emosi",
      "Sesi 3: Anatomi Tanda Tangan: Topeng Publik vs Kepribadian Asli",
      "Sesi 4: Deteksi Indikator Ketidakjujuran, Integritas, & Trauma Bawah Sadar",
      "Sesi 5: Analisis Gaya Berpikir & Orientasi Kerja (Konseptual vs Praktis)",
      "Sesi 6: Pembahasan Kasus Kompleks & Integrasi Indikator Multi-Variabel"
    ],
    benefits: [
      "Matrix Guide Tanda Tangan & Emosi (Cheat Sheet)",
      "Video Rekaman Sesi Pembelajaran Interaktif",
      "Template Laporan Analisis Karakter Emosional",
      "Sertifikat Kelulusan Modul Lanjut"
    ]
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
    imageSide: "/grafologi_3.webp",
    duration: "3 Minggu (6 Sesi Pertemuan)",
    fullDescription: "Modul puncaknya yang dirancang untuk mentransformasi pengetahuan Anda menjadi keterampilan terapan tingkat profesional. Anda akan berlatih menyusun laporan asesmen formal, menangani studi kasus dunia nyata, dan mempraktikkan simulasi asesmen untuk rekrutmen atau layanan konseling.",
    targetAudience: [
      "Calon Analyst / Konsultan Grafologi Profesional",
      "HR Business Partner & Talent Acquisition Specialist",
      "Professional Coach & Mentor Karir"
    ],
    subTopics: [
      "Sesi 1: Metodologi Penyusunan Laporan Asesmen Formal & Objektif",
      "Sesi 2: Grafologi untuk Rekrutmen: Matching Job Profile & Trait",
      "Sesi 3: Studi Kasus sampel Asli dari Berbagai Industri & Usia",
      "Sesi 4: Teknik Verifikasi Data & Menghindari Bias Subjektif",
      "Sesi 5: Simulasi Konseling & Cara Menyampaikan Hasil Analisis",
      "Sesi 6: Ujian Praktik & Evaluasi Kualitas Analisis Standar CHA"
    ],
    benefits: [
      "Template Laporan Asesmen HRD & Konseling Siap Pakai",
      "Akses Bank Sampel Tulisan Tangan Ratusan Kasus",
      "Sertifikat Keahlian / CHA Professional Prep",
      "Sesi Coaching Mentoring 1-on-1 dengan Instruktur"
    ]
  }
];