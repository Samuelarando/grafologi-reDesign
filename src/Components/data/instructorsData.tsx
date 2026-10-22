export interface InstructorStory {
  id: string;
  category: string;
  name: string;
  title: string;
  description: string;
  mainImage: string;
  teachingImage: string;
  credentials: string[];
}

export const instructorsData: InstructorStory[] = [
  {
    id: 'valeria',
    category: 'Lead Master Graphologist',
    name: 'Dr. Valeria Santoso, CHA™',
    title: 'Membimbing Analisis Tingkat Lanjut dengan Pendekatan Forensik & Behavioral',
    description: 'Berpengalaman lebih dari 14 tahun dalam dunia analisis tulisan tangan forensik. Dalam setiap sesi pelatihan, beliau membimbing peserta secara praktis lewat studi kasus nyata dari dunia profesional dan korporasi.',
    mainImage: '/grafologi_7.webp',
    teachingImage: '/grafologi_5.webp',
    credentials: ['Certified Senior Analyst', '14+ Tahun Pengalaman', 'Konsultan Forensik Korporasi'],
  },
  {
    id: 'lukas',
    category: 'Senior Graphotherapist',
    name: 'Lukas Pratama, M.Psi., CHA™',
    title: 'Menggabungkan Metode Grafologi dengan Teknik Terapi Psikologi Modern',
    description: 'Fokus pada penerapan Grafoterapi untuk mengubah pola pikir dan kebiasaan. Mengarahkan peserta melalui praktek bimbingan interaktif, analisis mendalam, dan sesi simulasi konseling langsung.',
    mainImage: '/grafologi_8.webp',
    teachingImage: '/grafologi_6.webp',
    credentials: ['Master of Psychology', 'Pakar Grafoterapi', 'Executive Behavioral Coach'],
  },
];