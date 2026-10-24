export interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export const loginFields: FormField[] = [
  {
    id: 'email',
    label: 'Email Terdaftar',
    type: 'email',
    placeholder: 'nama@email.com',
    required: true,
  },
  {
    id: 'password',
    label: 'Kata Sandi',
    type: 'password',
    placeholder: '••••••••',
    required: true,
  },
];

export const registerFields: FormField[] = [
  {
    id: 'fullName',
    label: 'Nama Lengkap (Sesuai Sertifikat)',
    type: 'text',
    placeholder: 'Dr. Samuel Purba',
    required: true,
  },
  {
    id: 'email',
    label: 'Alamat Email',
    type: 'email',
    placeholder: 'nama@email.com',
    required: true,
  },
  {
    id: 'phone',
    label: 'Nomor WhatsApp Active',
    type: 'tel',
    placeholder: '081234567890',
    required: true,
  },
  {
    id: 'password',
    label: 'Kata Sandi Baru',
    type: 'password',
    placeholder: 'Minimal 8 karakter',
    required: true,
  },
];