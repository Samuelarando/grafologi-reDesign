export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah saya harus memiliki latar belakang psikologi untuk mengikuti program ini?',
    answer: 'Tidak sama sekali. Program Certified Handwriting Analyst (CHA™) dirancang secara sistematis mulai dari Level 01 (Fondasi Pemula) hingga tingkat mahir. Semua istilah medis dan psikologis dijelaskan secara praktis dan mudah dipahami oleh siapa saja.',
  },
  {
    id: 'faq-2',
    question: 'Bagaimana metode dan sistem belajar dalam program ini?',
    answer: 'Pembelajaran dilakukan secara intensif dengan kombinasi modul video berkualitas tinggi yang dapat diakses kapan saja (self-paced), modul modul cetak/pdf, serta sesi Live Mentoring & Q&A mingguan bersama Master Graphologist.',
  },
  {
    id: 'faq-3',
    question: 'Berapa lama waktu yang dibutuhkan sampai saya bisa lulus dan bersertifikat?',
    answer: 'Program ini dirancang untuk diselesaikan dalam waktu 8 hingga 10 minggu. Namun, Anda diberi fleksibilitas akses materi selamanya (lifetime access) sehingga dapat belajar sesuai dengan kecepatan waktu Anda sendiri.',
  },
  {
    id: 'faq-4',
    question: 'Bagaimana proses ujian sertifikasi gelar CHA™ dilakukan?',
    answer: 'Ujian dilakukan di akhir program dalam dua tahap: Ujian Teori Analisis (Online) dan Penilaian Studi Kasus Nyata (Portofolio). Setelah dinyatakan lulus oleh tim penguji, Anda berhak menyandang gelar lisensi CHA™ serta menerima sertifikat resmi.',
  },
  {
    id: 'faq-5',
    question: 'Apakah gelar CHA™ ini bisa digunakan untuk kepentingan profesional?',
    answer: 'Sangat bisa. Lulusan kami aktif menggunakan keahlian ini untuk berbagai bidang profesional seperti screening rekrutmen HRD, konseling psikologi praktis, executive coaching, hingga membuka praktik konsultan grafologi mandiri.',
  },
];