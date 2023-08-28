import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { DateTimeInput, SelectInput, TextInput } from '@shared/input';
import { FindPdfRequest, IPdfModel } from '@shared/pdf';
import {
  IUpdateInitialNursingAssessmentChildrenRequest,
  UpdateInitialNursingAssessmentChildrenRequest,
} from '@modules/inpatient/inpatient-initial-nursing-assessment-children/requests/update-initial-nursing-assessment-children.request';
import { useEffect, useState } from 'react';
import { AppRequest } from '@shared/request';
import { AssessmentUgdModel } from '@modules/emergency-room/assessment/models/assessment-ugd-models';
import { InpatientInitialNursingAssessmentChildren } from '@modules/inpatient/inpatient-initial-nursing-assessment-children/models/inpatient-initial-nursing-assessment-chiildren.model';
import InpatientInitialNursingAssessmentChildrenService from '@modules/inpatient/inpatient-initial-nursing-assessment-children/services';
import { PdfInpatientInitialNursingAssessmentChildrenRequest } from '@modules/inpatient/inpatient-initial-nursing-assessment-children/requests/pdf-inpatient-initial-nursing-assessment-children.request';
import { Signature } from '@shared/signature/components';
import { SignatureModel } from '@shared/signature/models/signature.model';
import { SubmitButton } from '@shared/button';
import { fetchInpatientInitialNursingAssessmentChildrenPdf } from '@modules/inpatient/inpatient-initial-nursing-assessment-children/stores/inpatient-initial-nursing-assessment-children.store';
import { handlePdf } from '@modules/inpatient/initial-nutritional-assessment/stores/initial-nutritional-assessment.store';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import sampaidua from '@modules/inpatient/inpatient-initial-nursing-assessment/const/sampaidua';
import sampaisatu from '@modules/inpatient/inpatient-initial-nursing-assessment/const/sampaisatu';
import sampaitiga from '@modules/inpatient/inpatient-initial-nursing-assessment/const/sampaitiga';
import { DateTimeConverter } from "@src/shared/datetime-converter";

const riwayatPenyakitKeluargas: Array<{
  form: 'Riwayat_Penyakit_Hipertensi' | 'Riwayat_Penyakit_Asma' | 'Riwayat_Penyakit_Diabetes' | 'Riwayat_Penyakit_Hepatitis' | 'Riwayat_Penyakit_Glaukoma' | 'Riwayat_Penyakit_Stroke' | 'Riwayat_Penyakit_Lainnya',
  name: string,
  label: string,
}> = [
  {
    form: 'Riwayat_Penyakit_Hipertensi',
    name: 'riwayat_penyakit_hipertensi',
    label: 'Hipertensi',
  },
  {
    form: 'Riwayat_Penyakit_Asma',
    name: 'riwayat_penyakit_asma',
    label: 'Asma',
  },
  {
    form: 'Riwayat_Penyakit_Diabetes',
    name: 'riwayat_penyakit_diabetes',
    label: 'Diabetes',
  },
  {
    form: 'Riwayat_Penyakit_Hepatitis',
    name: 'riwayat_penyakit_hepatitis',
    label: 'Hepatitis',
  },
  {
    form: 'Riwayat_Penyakit_Glaukoma',
    name: 'riwayat_penyakit_glaukoma',
    label: 'Glaukoma',
  },
  {
    form: 'Riwayat_Penyakit_Stroke',
    name: 'riwayat_penyakit_stroke',
    label: 'Stroke',
  },
  {
    form: 'Riwayat_Penyakit_Lainnya',
    name: 'riwayat_penyakit_lainnya',
    label: 'Lainnya (lain)',
  },
];

const kesadaran = [
  {
    form: 'Kesadaran_Radio',
    name: 'kesadaran_radio',
    label: 'CM',
    isDefault: true,
  },
  {
    form: 'Kesadaran_Radio',
    name: 'kesadaran_radio',
    label: 'Apatis',
  },
  {
    form: 'Kesadaran_Radio',
    name: 'kesadaran_radio',
    label: 'Somnolent',
  },
  {
    form: 'Kesadaran_Radio',
    name: 'kesadaran_radio',
    label: 'Soporocoma',
  },
  {
    form: 'Kesadaran_Radio',
    name: 'kesadaran_radio',
    label: 'Koma',
  },
];

const riwayatPrenatals: Array<{
  form: 'Komplikasi_Radio' | 'Neonatus_Radio' | 'Maternal_Radio',
  name: string,
  label: string,
}> = [
  {
    form: 'Komplikasi_Radio',
    name: 'komplikasi_radio',
    label: 'Komplikasi',
  },
  {
    form: 'Neonatus_Radio',
    name: 'neonatus_radio',
    label: 'Masalah Neonatus',
  },
  {
    form: 'Maternal_Radio',
    name: 'maternal_radio',
    label: 'Masalah Maternal',
  },
];

const riwayatImunisasi: Array<Array<{
  form: 'Imunisasi_BCG' | 'Imunisasi_Hepatitis_1' | 'Imunisasi_DPT_1' | 'Imunisasi_Campak' | 'Imunisasi_Lainnya_1' | 'Imunisasi_Polio_1' |
    'Imunisasi_Hepatitis_2' | 'Imunisasi_DPT_2' | 'Imunisasi_MMR' | 'Imunisasi_Polio_2' | 'Imunisasi_Hepatitis_3' | 'Imunisasi_DPT_3' | 'Imunisasi_Lainnya_2' |
    'Imunisasi_Polio_3' | 'Imunisasi_Varicela' | 'Imunisasi_Typhus' | 'Imunisasi_Influenza',
  name: string,
  label: string,
}>> = [
  [
    {
      form: 'Imunisasi_BCG',
      name: 'imunisasi_bcg',
      label: 'BCG',
    },
    {
      form: 'Imunisasi_Hepatitis_1',
      name: 'imunisasi_hepatitis_1',
      label: 'Hepatitis B I',
    },
    {
      form: 'Imunisasi_DPT_1',
      name: 'imunisasi_dpt_1',
      label: 'DPT I',
    },
    {
      form: 'Imunisasi_Campak',
      name: 'imunisasi_campak',
      label: 'Campak',
    },
    {
      form: 'Imunisasi_Lainnya_1',
      name: 'imunisasi_lainnya_1',
      label: 'Lainnya (imunisasi_1_lainnya)',
    },
  ],
  [
    {
      form: 'Imunisasi_Polio_1',
      name: 'imunisasi_polio_1',
      label: 'Polio I',
    },
    {
      form: 'Imunisasi_Hepatitis_2',
      name: 'imunisasi_hepatitis_2',
      label: 'Hepatitis B II',
    },
    {
      form: 'Imunisasi_DPT_2',
      name: 'imunisasi_dpt_2',
      label: 'DPT II',
    },
    {
      form: 'Imunisasi_MMR',
      name: 'imunisasi_mmr',
      label: 'MMR',
    },
  ],
  [
    {
      form: 'Imunisasi_Polio_2',
      name: 'imunisasi_polio_2',
      label: 'Polio II',
    },
    {
      form: 'Imunisasi_Hepatitis_3',
      name: 'imunisasi_hepatitis_3',
      label: 'Hepatitis B III',
    },
    {
      form: 'Imunisasi_DPT_3',
      name: 'imunisasi_dpt_3',
      label: 'DPT III',
    },
    {
      form: 'Imunisasi_Lainnya_2',
      name: 'imunisasi_lainnya_2',
      label: 'Lainnya (imunisasi_2_lainnya)',
    },
  ],
  [
    {
      form: 'Imunisasi_Polio_3',
      name: 'imunisasi_polio_3',
      label: 'Polio III',
    },
    {
      form: 'Imunisasi_Varicela',
      name: 'imunisasi_varicela',
      label: 'Varicela',
    },
    {
      form: 'Imunisasi_Typhus',
      name: 'imunisasi_typhus',
      label: 'Typhus',
    },
    {
      form: 'Imunisasi_Influenza',
      name: 'imunisasi_influenza',
      label: 'Influenza',
    },
  ],
];

const riwayatTumbuhKembang: Array<Array<{
  form: any,
  name: string,
  label: string,
  unit: string,
}>> = [
  [
    {
      form: 'BB_Lahir',
      name: 'bb_lahir',
      label: 'BB lahir',
      unit: 'gram',
    },
    {
      form: 'Tengkurap_Umur',
      name: 'tengkurap_umur',
      label: 'Tengkurap',
      unit: 'bulan',
    },
  ],
  [
    {
      form: 'PB_Lahir',
      name: 'pb_lahir',
      label: 'PB lahir',
      unit: 'cm',
    },
    {
      form: 'Duduk_Umur',
      name: 'duduk_umur',
      label: 'Duduk',
      unit: 'bulan',
    },
  ],
  [
    {
      form: 'ASI_Umur',
      name: 'asi_umur',
      label: 'ASI s/d Umur',
      unit: 'tahun',
    },
    {
      form: 'Merangkak_Umur',
      name: 'merangkak_umur',
      label: 'Merangkak',
      unit: 'bulan',
    },
  ],
  [
    {
      form: 'Makan_Tambahan_Umur',
      name: 'makan_tambahan_umur',
      label: 'Makanan Tambahan Umur',
      unit: 'bulan',
    },
    {
      form: 'Berdiri_Umur',
      name: 'berdiri_umur',
      label: 'Berdiri',
      unit: 'bulan',
    },
  ],
  [
    {
      form: 'Berjalan_Umur',
      name: 'berjalan_umur',
      label: 'Berjalan',
      unit: 'bulan',
    },
  ],
];

const assesmentKhususRemaja: Array<{
  form: 'Asesmen_Remaja_1' | 'Asesmen_Remaja_2' | 'Asesmen_Remaja_3' | 'Asesmen_Remaja_4' | 'Asesmen_Remaja_5' | 'Asesmen_Remaja_6' | 'Asesmen_Remaja_7' |
    'Asesmen_Remaja_8' | 'Asesmen_Remaja_9' | 'Asesmen_Remaja_10' | 'Asesmen_Remaja_11' | 'Asesmen_Remaja_12',
  name: string,
  label: string,
}> = [
  {
    form: 'Asesmen_Remaja_1',
    name: 'asesmen_remaja_1',
    label: '1. Apakah mempunyai permasalahan dengan berat badan dan tinggi badan (berat badan kurang, gemuk, pendek, terlalu tinggi',
  },
  {
    form: 'Asesmen_Remaja_2',
    name: 'asesmen_remaja_2',
    label: '2. Apakah bermasalah dengan makan',
  },
  {
    form: 'Asesmen_Remaja_3',
    name: 'asesmen_remaja_3',
    label: '3. Apakah sulit berkonsentrasi dengan belajar',
  },
  {
    form: 'Asesmen_Remaja_4',
    name: 'asesmen_remaja_4',
    label: '4. Apakah lebih sering menyendiri / sendiri',
  },
  {
    form: 'Asesmen_Remaja_5',
    name: 'asesmen_remaja_5',
    label: '5. Apakah merasa tidak bisa diam / selalu ada yang dikerjakan',
  },
  {
    form: 'Asesmen_Remaja_6',
    name: 'asesmen_remaja_6',
    label: '6. Apakah merasa tidak diterima dikelompok sekolah atau lingkungan',
  },
  {
    form: 'Asesmen_Remaja_7',
    name: 'asesmen_remaja_7',
    label: '7. Apakah sering berkonsultasi dengan psikolog',
  },
  {
    form: 'Asesmen_Remaja_8',
    name: 'asesmen_remaja_8',
    label: '8. Apakah sering bermasalah disekolah',
  },
  {
    form: 'Asesmen_Remaja_9',
    name: 'asesmen_remaja_9',
    label: '9. Apakah sering merasa cemas / rendah diri',
  },
  {
    form: 'Asesmen_Remaja_10',
    name: 'asesmen_remaja_10',
    label: '10. Apakah bermasalah dengan kesehatan',
  },
  {
    form: 'Asesmen_Remaja_11',
    name: 'asesmen_remaja_11',
    label: '11. Apakah pernah kecanduan obat obatan, minuman keras atau rokok',
  },
  {
    form: 'Asesmen_Remaja_12',
    name: 'asesmen_remaja_12',
    label: '12. Apakah bermasalah dengan menstruasi / keputihan',
  },
];

const skriningNyeri: Array<{
  form: 'Penyebab_Nyeri' | 'Kualitas_Nyeri' | 'Lokasi_Nyeri' | 'Skala_Nyeri' | 'Durasi_Nyeri',
  name: string,
  label: string,
}> = [
  {
    form: 'Penyebab_Nyeri',
    name: 'penyebab_nyeri',
    label: 'Provocating (Penyebab / Pemicu)',
  },
  {
    form: 'Kualitas_Nyeri',
    name: 'kualitas_nyeri',
    label: 'Quality (Kualitas Nyeri)',
  },
  {
    form: 'Lokasi_Nyeri',
    name: 'lokasi_nyeri',
    label: 'Region (Lokasi)',
  },
  {
    form: 'Skala_Nyeri',
    name: 'skala_nyeri',
    label: 'Severity (Skala Nyeri)',
  },
  {
    form: 'Durasi_Nyeri',
    name: 'durasi_nyeri',
    label: 'Time (Durasi / Frekuensi)',
  },
];

const wongBaker = [
  {
    name: 'w',
    label: '1',
  },
  {
    name: 'w',
    label: '2',
  },
  {
    name: 'w',
    label: '3',
  },
  {
    name: 'w',
    label: '4',
  },
  {
    name: 'w',
    label: '5',
  },
  {
    name: 'w',
    label: '6',
  },
  {
    name: 'w',
    label: '7',
  },
  {
    name: 'w',
    label: '8',
  },
  {
    name: 'w',
    label: '9',
  },
  {
    name: 'w',
    label: '10',
  },
];

const nutrisi: Array<{
  form: 'Skrining_Gizi_1' | 'Skrining_Gizi_2' | 'Skrining_Gizi_3' | 'Skrining_Gizi_4',
  name: string,
  labels: any,
}> = [
  {
    form: 'Skrining_Gizi_1',
    name: 'skrining_gizi_1',
    labels: ['Apakah anak tampak kurus'],
  },
  {
    form: 'Skrining_Gizi_2',
    name: 'skrining_gizi_2',
    labels: [
      'Apakah terdapat penurunan berat badan selama satu bulan terakhir ?',
      '1. Berdasarkan penilaian objektif data berat badan (bila ada)',
      '2. Penilaian subjektif orang tua pasien',
      '3. Untuk bayi < 1 tahun berat badan tidak naik selama 3 bulan terakhir',
    ],
  },
  {
    form: 'Skrining_Gizi_3',
    name: 'skrining_gizi_3',
    labels: [
      'Apakah terdapat salah satu kondisi berikut ?',
      '1. Diare > 5 kali/hari atau muntah > 3 kali/hari dalam seminggu terakhir',
      '2. Asupan makanan berkurang selama 1 minggu terakhir',
    ],
  },
  {
    form: 'Skrining_Gizi_4',
    name: 'skrining_gizi_4',
    labels: [
      'Apakah terdapat penyakit atau keadaaan yang mengakibatkan pasien beresiko mengalami malnutrisi (Ya jika ada minimal satu tanda dari penyakit atau keadaan dibawah ini):',
      'a. Diare kronik lebih dari 2 minggu',
      'b. (Tersangka) Penyakit jantung bawaan',
      'c. (Tersangka) Infeksi HIV',
      'd. (Tersangka) Kanker',
      'e. Penyakit hati kronik',
      'f. Penyakit ginjal kronis',
      'g. TB Paru',
      'h. Terpasang stoma',
      'i. Trauma',
      'j. Luka bakar luas',
      'k. Kelainan metabolic bawaan',
      'l. Kelainan anatomi daerah mulut yang menyebabkan kesulitan makan',
      'm. Rencana / pasca operasi mayor',
      'n. Retardasi mental',
      'o. Keterlambatan pengembangan',
      'p. Lain-lain (berdasarkan penilaian dokter)',
    ],
  },
];

const waktuPenilaian = [
  {
    value: '1',
    label: 'Sebelum sakit',
  },
  {
    value: '2',
    label: 'Saat Masuk RS',
  },
  {
    value: '3',
    label: 'Hari II di RS',
  },
  {
    value: '4',
    label: 'Hari III di RS',
  },
  {
    value: '5',
    label: 'Hari IV di RS',
  },
  {
    value: '6',
    label: 'Saat Pulang',
  },
];

const statusFungsional = [
  {
    name: 'makan',
    label: '1 .Makan',
    options: [
      {
        value: '0',
        label: 'Tidak mampu',
      },
      {
        value: '1',
        label: 'Butuh bantuan memotong, mengoles mentega dll',
      },
      {
        value: '2',
        label: 'Mandiri',
      },
    ],
  },
  {
    name: 'mandi',
    label: '2. Mandi',
    options: [
      {
        value: '0',
        label: 'Tergantung orang lain',
      },
      {
        value: '1',
        label: 'Mandiri',
      },
    ],
  },
  {
    name: 'rawat',
    label: '3. Perawatan diri',
    options: [
      {
        value: '0',
        label: 'Membutuhkan bantuan orang lain',
      },
      {
        value: '1',
        label: 'Mandiri dalam perawatan muka, rambut, gigi dan bercukur',
      },
    ],
  },
  {
    name: 'pakaian',
    label: '4. Berpakaian',
    options: [
      {
        value: '0',
        label: 'Tergantung orang lain',
      },
      {
        value: '1',
        label: 'Sebagian dibantu (misalnya mengancing baju)',
      },
      {
        value: '2',
        label: 'Mandiri',
      },
    ],
  },
  {
    name: 'bak',
    label: '5. Buang air kecil',
    options: [
      {
        value: '0',
        label: 'Inkontinensia (tidak teratur atau perlu enema)',
      },
      {
        value: '1',
        label: 'Kadang inkontinensial (maks 1x24jam)',
      },
      {
        value: '2',
        label: 'Kontinensia (teratur)',
      },
    ],
  },
  {
    name: 'bab',
    label: '6. Buang air besar (BAB)',
    options: [
      {
        value: '0',
        label: 'Inkontinensia (tidak teratur atau perlu enema)',
      },
      {
        value: '1',
        label: 'Kadang inkontinensial (sekali seminggu)',
      },
      {
        value: '2',
        label: 'Kontinensia (teratur)',
      },
    ],
  },
  {
    name: 'toilet',
    label: '7. Penggunaan toilet',
    options: [
      {
        value: '0',
        label: 'Tergantung bantuan orang lain',
      },
      {
        value: '1',
        label: 'Membutuhkan bantuan, tapi dapat melakukan beberapa hal sendiri',
      },
      {
        value: '2',
        label: 'Mandiri',
      },
    ],
  },
  {
    name: 'transfer',
    label: '8. Transfer',
    options: [
      {
        value: '0',
        label: 'Tidak mampu',
      },
      {
        value: '1',
        label: 'Butuh bantuan untuk duduk (2 orang)',
      },
      {
        value: '2',
        label: 'Bantuan kecil (1 orang)',
      },
      {
        value: '3',
        label: 'Mandiri',
      },
    ],
  },
  {
    name: 'mobilitas',
    label: '9. Mobilitas',
    options: [
      {
        value: '0',
        label: 'immobile (tidak mampu)',
      },
      {
        value: '1',
        label: 'Menggunakan kursi roda',
      },
      {
        value: '2',
        label: 'Berjalan dengan bantuan satu orang',
      },
      {
        value: '3',
        label: 'Mandiri (meskipun menggunakan alat bantu seperti tongkat)',
      },
    ],
  },
  {
    name: 'tangga',
    label: '10. Naik turun tangga',
    options: [
      {
        value: '0',
        label: 'Tidak mampu',
      },
      {
        value: '1',
        label: 'Membutukan bantuan (alat bantu)',
      },
      {
        value: '2',
        label: 'Mandiri',
      },
    ],
  },
];

const kebutuhanKomunikasi: Array<{
  form: 'Bicara_Radio' | 'Perlu_Penerjemah_Radio' | 'Hambatan_Belajar_Radio' | 'Tingkat_Pendidikan_Radio',
  name: string,
  label: string,
  options: any,
}> = [
  {
    form: 'Bicara_Radio',
    name: 'bicara_radio',
    label: 'Bicara',
    options: [
      {
        value: '0',
        label: 'Normal',
        isDefault: true,
      },
      {
        value: '1',
        label: 'Gangguan bicara, jelaskan',
      },
    ],
  },
  {
    form: 'Perlu_Penerjemah_Radio',
    name: 'perlu_penerjemah_radio',
    label: 'Perlu penterjemah',
    options: [
      {
        value: '0',
        label: 'Tidak',
      },
      {
        value: '1',
        label: 'Ya, Bahasa',
      },
    ],
  },
  {
    form: 'Hambatan_Belajar_Radio',
    name: 'hambatan_belajar_radio',
    label: 'Hambatan belajar',
    options: [
      {
        value: '0',
        label: 'Tidak',
        isDefault: true,
      },
      {
        value: '1',
        label: 'Ya',
      },
    ],
  },
  {
    form: 'Tingkat_Pendidikan_Radio',
    name: 'tingkat_pendidikan_radio',
    label: 'Tingkat pendidikan',
    options: [
      {
        value: '0',
        label: 'TK',
      },
      {
        value: '1',
        label: 'SD',
      },
      {
        value: '2',
        label: 'SMP',
      },
      {
        value: '3',
        label: 'SMA',
      },
      {
        value: '4',
        label: 'Akademi',
      },
      {
        value: '5',
        label: 'Sarjana',
      },
      {
        value: '6',
        label: 'Lain-lain',
      },
    ],
  },
];

const sosialEkonomi = [
  {
    value: '0',
    label: 'Baik',
    isDefault: true,
  },
  {
    value: '1',
    label: 'Cukup',
  },
  {
    value: '2',
    label: 'Kurang',
  },
  {
    value: '3',
    label: 'Sulit dinilai',
  },
];

const statusPsikologis: Array<{
  name: string,
  form: 'Status_Psikologi_Tidak_Terganggu' | 'Status_Psikologi_Cemas' | 'Status_Psikologi_Takut' | 'Status_Psikologi_Marah' | 'Status_Psikologi_Panik',
  label: string,
  isDefault?: boolean,
}> = [
  {
    name: 'status_psikologi_tidak_terganggu',
    form: 'Status_Psikologi_Tidak_Terganggu',
    label: 'Tidak terganggu',
    isDefault: true,
  },
  {
    name: 'status_psikologi_cemas',
    form: 'Status_Psikologi_Cemas',
    label: 'Cemas',
  },
  {
    name: 'status_psikologi_takut',
    form: 'Status_Psikologi_Takut',
    label: 'Takut',
  },
  {
    name: 'status_psikologi_marah',
    form: 'Status_Psikologi_Marah',
    label: 'Marah',
  },
  {
    name: 'status_psikologi_panik',
    form: 'Status_Psikologi_Panik',
    label: 'Panik',
  },
];

const statusMental = [
  {
    value: '0',
    label: 'sadar dan orientasi baik',
    isDefault: true,
  },
  {
    value: '1',
    label: 'ada masalah perilaku',
  },
  {
    value: '2',
    label: 'perilaku kekerasan yang dialami pasien sebelumnya',
  },
];

const statusSpiritual: Array<{
  form: 'Agama' | 'Keyakinan' | 'Nilai_Nilai' | 'Spiritual' | 'Selama_Keperawatan',
  name: string,
  label: string,
}> = [
  {
    form: 'Agama',
    name: 'agama',
    label: 'Agama',
  },
  {
    form: 'Keyakinan',
    name: 'keyakinan',
    label: 'Keyakinan',
  },
  {
    form: 'Nilai_Nilai',
    name: 'nilai_nilai',
    label: 'Nilai-nilai kepercayaan',
  },
  {
    form: 'Spiritual',
    name: 'spiritual',
    label: 'Kegiatan spiritual yang',
  },
  {
    form: 'Selama_Keperawatan',
    name: 'selama_keperawatan',
    label: 'Dibutuhkan selama keperawatan',
  },
];

const flaccs: Array<Array<{
  kategori: string;
  parameter: string;
  value: string;
  name: string;
  form: 'Wajah_Radio' | 'Kaki_Radio' | 'Aktivitas_Radio' | 'Menangis_Radio' | 'Kenyamanan_Radio';
}>> = [
  [
    {
      kategori: 'Wajah',
      parameter: 'Rileks ada kontak mata atau senyum',
      value: '0',
      name: 'wajah_radio',
      form: 'Wajah_Radio',
    },
    {
      kategori: 'Wajah',
      parameter: 'Sesekali meringis atau mengerutkan dahi',
      value: '1',
      name: 'wajah_radio',
      form: 'Wajah_Radio',
    },
    {
      kategori: 'Wajah',
      parameter: 'Sering cemberut mata tertutup mulut terbuka',
      value: '2',
      name: 'wajah_radio',
      form: 'Wajah_Radio',
    },
  ],
  [
    {
      kategori: 'Kaki',
      parameter: 'Posisi normal atau santai',
      value: '0',
      name: 'kaki_radio',
      form: 'Kaki_Radio',
    },
    {
      kategori: 'Kaki',
      parameter: 'Tidak nyaman gelisah tegang',
      value: '1',
      name: 'kaki_radio',
      form: 'Kaki_Radio',
    },
    {
      kategori: 'Kaki',
      parameter: 'Menendang atau kaki disusun',
      value: '2',
      name: 'kaki_radio',
      form: 'Kaki_Radio',
    },
  ],
  [
    {
      kategori: 'Aktivitas',
      parameter: 'Aktivitas normal bergerak dengan mudah',
      value: '0',
      name: 'aktivitas_radio',
      form: 'Aktivitas_Radio',
    },
    {
      kategori: 'Aktivitas',
      parameter: 'Menggeliat menggeser maju mundur tegang',
      value: '1',
      name: 'aktivitas_radio',
      form: 'Aktivitas_Radio',
    },
    {
      kategori: 'Aktivitas',
      parameter: 'Melengkung kaku',
      value: '2',
      name: 'aktivitas_radio',
      form: 'Aktivitas_Radio',
    },
  ],
  [
    {
      kategori: 'Menangis',
      parameter: 'Tidak menangis (terjaga atau tertidur)',
      value: '0',
      name: 'menangis_radio',
      form: 'Menangis_Radio',
    },
    {
      kategori: 'Menangis',
      parameter: 'Erangan atau rengekan keluhan sesekali',
      value: '1',
      name: 'menangis_radio',
      form: 'Menangis_Radio',
    },
    {
      kategori: 'Menangis',
      parameter: 'Menangis terus teriakan atau isak tangis sering mengeluh',
      value: '2',
      name: 'menangis_radio',
      form: 'Menangis_Radio',
    },
  ],
  [
    {
      kategori: 'Kenyamanan',
      parameter: 'Tenang atau santai',
      value: '0',
      name: 'kenyamanan_radio',
      form: 'Kenyamanan_Radio',
    },
    {
      kategori: 'Kenyamanan',
      parameter: 'Nyaman ketika disentuh dipeluk sesekali',
      value: '1',
      name: 'kenyamanan_radio',
      form: 'Kenyamanan_Radio',
    },
    {
      kategori: 'Kenyamanan',
      parameter: 'Sulit nyaman walaupun sudah disentuh dipeluk dan diajak bicara',
      value: '2',
      name: 'kenyamanan_radio',
      form: 'Kenyamanan_Radio',
    },
  ],
]

const keperawatan: Array<{
  form: 'Keperawatan_Persepsi_Sensori' | 'Keperawatan_Penurunan_Kesadaran' | 'Keperawatan_Nyeri' | 'Keperawatan_Resiko_Infeksi' | 'Keperawatan_Intake_Output' | 'Keperawatan_Resiko_Jatuh' | 'Keperawatan_Hiperthermia' |
    'Keperawatan_Tekanan_Intra' | 'Keperawatan_Kurang_Pengetahuan' | 'Keperawatan_Lainnya';
  name: string;
  label: any;
  input?: any,
}> = [
  {
    form : 'Keperawatan_Persepsi_Sensori',
    name: 'keperawatan_persepsi_sensori',
    label: {
      masalah: 'Gangguan persepsi sensori: Penglihatan',
      rencana: 'Mengkaji ketajaman penglihatan (visus)',
    },
  },
  {
    form: 'Keperawatan_Penurunan_Kesadaran',
    name: 'keperawatan_penurunan_kesadaran',
    label: {
      masalah: 'Penurunan kesadaran',
      rencana: 'Mengecek tanda vital',
    },
  },
  {
    form: 'Keperawatan_Nyeri',
    name: 'keperawatan_nyeri',
    label: {
      masalah: 'Nyeri',
      rencana: 'Mengajarkan teknik relaksasi',
    },
  },
  {
    form: 'Keperawatan_Resiko_Infeksi',
    name: 'keperawatan_resiko_infeksi',
    label: {
      masalah: 'Resiko infeksi',
      rencana: 'Perawatan luka dan Edukasi Pasien',
    },
  },
  {
    form: 'Keperawatan_Intake_Output',
    name: 'keperawatan_intake_output',
    label: {
      masalah: 'Gangguan intake dan output cairan',
      rencana: 'Memberikan terapi cairan',
    },
  },
  {
    form: 'Keperawatan_Resiko_Jatuh',
    name: 'keperawatan_resiko_jatuh',
    label: {
      masalah: 'Resiko Jatuh',
      rencana: 'Memberikan penandaan gelang',
    },
  },
  {
    form: 'Keperawatan_Hiperthermia',
    name: 'keperawatan_hiperthermia',
    label: {
      masalah: 'Hipethermia',
      rencana: 'Melakukan kompres hangat',
    },
  },
  {
    form: 'Keperawatan_Tekanan_Intra',
    name: 'keperawatan_tekanan_intra',
    label: {
      masalah: 'Peningkatan tekanan intra (TIO)',
      rencana: 'Menganjurkan untuk kolaborasi pemberian obat',
    },
  },
  {
    form: 'Keperawatan_Kurang_Pengetahuan',
    name: 'keperawatan_kurang_pengetahuan',
    label: {
      masalah: 'Kurang pengetahuan',
      rencana: 'Pemberian informasi tentang status kesehatan',
    },
  },
  {
    form: 'Keperawatan_Lainnya',
    name: 'keperawatan_lainnya',
    label: {
      masalah: 'Lainnya',
      rencana: 'Lainnya',
    },
    input: {
      masalah: {
        name: 'keperawatan_lainnya_masalah',
        form: 'Keperawatan_Lainnya_Masalah',
      },
      rencana: {
        name: 'keperawatan_lainnya_rencana',
        form: 'Keperawatan_Lainnya_Rencana',
      },
    },
  },
];

const keterbatasanGerak: Array<Array<{
  form: 'Nyeri_Otot' | 'Kaku_Otot' | 'Lemah_Otot' | 'Nyeri_Sendi' | 'Bengkak_Sendi' | 'Inkoordinasi' | 'Kelemahan' | 'Amputasi' | 'Deformitas' | 'Parese',
  name: string,
  label: string,
  md?: string,
}>> = [
  [
    {
      form: 'Nyeri_Otot',
      name: 'nyeri_otot',
      label: 'Nyeri otot',
    },
    {
      form: 'Kaku_Otot',
      name: 'kaku_otot',
      label: 'Kaku otot',
    },
    {
      form: 'Lemah_Otot',
      name: 'lemah_otot',
      label: 'Lemah otot',
    },
    {
      form: 'Nyeri_Sendi',
      name: 'nyeri_sendi',
      label: 'Nyeri sendi',
    },
    {
      form: 'Bengkak_Sendi',
      name: 'bengkak_sendi',
      label: 'Bengkak sendi',
    },
    {
      form: 'Inkoordinasi',
      name: 'inkoordinasi',
      label: 'Inkordinasi',
    },
  ],
  [
    {
      form: 'Kelemahan',
      name: 'kelemahan',
      label: 'Kelemahan',
    },
    {
      form: 'Amputasi',
      name: 'amputasi',
      label: 'Amputasi',
    },
    {
      form: 'Deformitas',
      name: 'deformitas',
      label: 'Deformitas',
    },
    {
      form: 'Parese',
      name: 'parese',
      label: 'Parese / Parelise, di bagian',
      md: 'auto',
    },
  ],
];

const InpatientInitialNursingAssessmentChildrenForm = (props: { data: InpatientInitialNursingAssessmentChildren, assessmentUgd: AssessmentUgdModel }) => {

  const { data, assessmentUgd } = props;

  const { pdf } = useAppSelector(state => state.inpatientInitialNursingAssessmentChildren);
  const { treatment } = useAppSelector(state => state.patient);
  const { officers } = useAppSelector(state => state.officer);
  const dispatch = useAppDispatch();

  const [processing, setProcessing] = useState(false);
  const [pdfData, setPdfData] = useState<IPdfModel | undefined>(undefined);

  useEffect(() => {
    if (treatment) {
      dispatch(fetchInpatientInitialNursingAssessmentChildrenPdf(FindPdfRequest.createFromJson({ emr_id: treatment.EMR_ID, form_name: 'rawat-inap_pengkajian-awal-keperawatan-anak' })));
    }
  }, [treatment, dispatch]);

  useEffect(() => {
    if (!pdf) {
      setPdfData(undefined);
      return;
    }
    setPdfData(pdf);
  }, [pdf])

  const { register, handleSubmit, setValue, errors, watch  } = useForm({
    mode: 'onChange',
    criteriaMode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(UpdateInitialNursingAssessmentChildrenRequest.schema()),
    defaultValues: {
      tanggal: data?.form?.Tanggal ?? '',
      jam: data?.form?.Jam ?? '',
      pengkajian_diperoleh: data?.form?.Pengkajian_Diperoleh ?? '',
      keluhan_utama: data?.form?.Keluhan_Utama ?? '',
      riwayat_penyakit_sekarang: data?.form?.Riwayat_Penyakit_Sekarang ?? '',
      riwayat_penyakit_dahulu: data?.form?.Riwayat_Penyakit_Dahulu ?? '',
      riwayat_pengobatan: data?.form?.Riwayat_Pengobatan ?? '',
      riwayat_operasi_radio: data?.form?.Riwayat_Operasi_Radio ?? '0',
      riwayat_penyakit_hipertensi: data?.form?.Riwayat_Penyakit_Hipertensi ?? '',
      riwayat_penyakit_asma: data?.form?.Riwayat_Penyakit_Asma ?? '',
      riwayat_penyakit_diabetes: data?.form?.Riwayat_Penyakit_Diabetes ?? '',
      riwayat_penyakit_hepatitis: data?.form?.Riwayat_Penyakit_Hepatitis ?? '',
      riwayat_penyakit_glaukoma: data?.form?.Riwayat_Penyakit_Glaukoma ?? '',
      riwayat_penyakit_stroke: data?.form?.Riwayat_Penyakit_Stroke ?? '',
      riwayat_penyakit_lainnya: data?.form?.Riwayat_Penyakit_Lainnya ?? '',
      riwayat_penyakit_lainnya_teks: data?.form?.Riwayat_Penyakit_Lainnya_Teks ?? '',
      lama_kehamilan: data?.form?.Lama_Kehamilan ?? '',
      komplikasi_radio: data?.form?.Komplikasi_Radio ?? '0',
      komplikasi_radio_ket: data?.form?.Komplikasi_Radio_Ket ?? '',
      neonatus_radio: data?.form?.Neonatus_Radio ?? '0',
      neonatus_radio_ket: data?.form?.Neonatus_Radio_Ket ?? '',
      maternal_radio: data?.form?.Maternal_Radio ?? '0',
      maternal_radio_ket: data?.form?.Maternal_Radio_Ket ?? '',
      imunisasi_bcg: data?.form?.Imunisasi_BCG ?? '',
      imunisasi_polio_1: data?.form?.Imunisasi_Polio_1 ?? '',
      imunisasi_polio_2: data?.form?.Imunisasi_Polio_2 ?? '',
      imunisasi_polio_3: data?.form?.Imunisasi_Polio_3 ?? '',
      imunisasi_hepatitis_1: data?.form?.Imunisasi_Hepatitis_1 ?? '',
      imunisasi_hepatitis_2: data?.form?.Imunisasi_Hepatitis_2 ?? '',
      imunisasi_hepatitis_3: data?.form?.Imunisasi_Hepatitis_3 ?? '',
      imunisasi_varicela: data?.form?.Imunisasi_Varicela ?? '',
      imunisasi_dpt_1: data?.form?.Imunisasi_DPT_1 ?? '',
      imunisasi_dpt_2: data?.form?.Imunisasi_DPT_2 ?? '',
      imunisasi_dpt_3: data?.form?.Imunisasi_DPT_3 ?? '',
      imunisasi_typhus: data?.form?.Imunisasi_Typhus ?? '',
      imunisasi_campak: data?.form?.Imunisasi_Campak ?? '',
      imunisasi_mmr: data?.form?.Imunisasi_MMR ?? '',
      imunisasi_lainnya_2: data?.form?.Imunisasi_Lainnya_2 ?? '',
      imunisasi_lainnya_2_teks: data?.form?.Imunisasi_Lainnya_2_Teks ?? '',
      imunisasi_influenza: data?.form?.Imunisasi_Influenza ?? '',
      imunisasi_lainnya_1: data?.form?.Imunisasi_Lainnya_1 ?? '',
      imunisasi_lainnya_1_teks: data?.form?.Imunisasi_Lainnya_1_Teks ?? '',
      bb_lahir: data?.form?.BB_Lahir ?? '',
      pb_lahir: data?.form?.PB_Lahir ?? '',
      asi_umur: data?.form?.ASI_Umur ?? '',
      makan_tambahan_umur: data?.form?.Makan_Tambahan_Umur ?? '',
      berjalan_umur: data?.form?.Berjalan_Umur ?? '',
      tengkurap_umur: data?.form?.Tengkurap_Umur ?? '',
      duduk_umur: data?.form?.Duduk_Umur ?? '',
      merangkak_umur: data?.form?.Merangkak_Umur ?? '',
      berdiri_umur: data?.form?.Berdiri_Umur ?? '',
      asesmen_remaja_1: data?.form?.Asesmen_Remaja_1 ?? '0',
      asesmen_remaja_2: data?.form?.Asesmen_Remaja_2 ?? '0',
      asesmen_remaja_3: data?.form?.Asesmen_Remaja_3 ?? '0',
      asesmen_remaja_4: data?.form?.Asesmen_Remaja_4 ?? '0',
      asesmen_remaja_5: data?.form?.Asesmen_Remaja_5 ?? '0',
      asesmen_remaja_6: data?.form?.Asesmen_Remaja_6 ?? '0',
      asesmen_remaja_7: data?.form?.Asesmen_Remaja_7 ?? '0',
      asesmen_remaja_8: data?.form?.Asesmen_Remaja_8 ?? '0',
      asesmen_remaja_9: data?.form?.Asesmen_Remaja_9 ?? '0',
      asesmen_remaja_10: data?.form?.Asesmen_Remaja_10 ?? '0',
      asesmen_remaja_11: data?.form?.Asesmen_Remaja_11 ?? '0',
      asesmen_remaja_12: data?.form?.Asesmen_Remaja_12 ?? '0',
      pf_td: data?.form?.PF_TD ?? '',
      pf_nadi: data?.form?.PF_Nadi ?? '',
      pf_suhu: data?.form?.PF_Suhu ?? '',
      pf_bb: data?.form?.PF_BB ?? '',
      pf_p: data?.form?.PF_P ?? '',
      pf_tb: data?.form?.PF_TB ?? '',
      kesadaran_radio: data?.form?.Kesadaran_Radio ?? '0',
      alergi_reaksi_radio: data?.form?.Alergi_Reaksi_Radio ?? '0',
      nyeri_radio: data?.form?.Nyeri_Radio ?? '0',
      pengkajian_nyeri: data?.form?.Pengkajian_Nyeri ?? '',
      wajah_radio: data?.form?.Wajah_Radio ?? '',
      kaki_radio: data?.form?.Kaki_Radio ?? '',
      aktivitas_radio: data?.form?.Aktivitas_Radio ?? '',
      menangis_radio: data?.form?.Menangis_Radio ?? '',
      kenyamanan_radio: data?.form?.Kenyamanan_Radio ?? '',
      penyebab_nyeri: data?.form?.Penyebab_Nyeri ?? '',
      kualitas_nyeri: data?.form?.Kualitas_Nyeri ?? '',
      lokasi_nyeri: data?.form?.Lokasi_Nyeri ?? '',
      skala_nyeri: data?.form?.Skala_Nyeri ?? '',
      durasi_nyeri: data?.form?.Durasi_Nyeri ?? '',
      total_skor: data?.form?.Total_Skor ?? '',
      kategori_nyeri: data?.form?.Kategori_Nyeri ?? '',
      skala_nyeri_radio: data?.form?.Skala_Nyeri_Radio ?? '',
      skrining_gizi_1: data?.form?.Skrining_Gizi_1 ?? '',
      skrining_gizi_2: data?.form?.Skrining_Gizi_2 ?? '',
      skrining_gizi_3: data?.form?.Skrining_Gizi_3 ?? '',
      skrining_gizi_4: data?.form?.Skrining_Gizi_4 ?? '',
      skrining_gizi_total: data?.form?.Skrining_Gizi_Total ?? '',
      kategori_nilai_gizi: data?.form?.Kategori_Nilai_Gizi ?? '',
      keterbatasan_gerak_radio: data?.form?.Keterbatasan_Gerak_Radio ?? '0',
      nyeri_otot: data?.form?.Nyeri_Otot ?? '',
      kelemahan: data?.form?.Kelemahan ?? '',
      kaku_otot: data?.form?.Kaku_Otot ?? '',
      amputasi: data?.form?.Amputasi ?? '',
      lemah_otot: data?.form?.Lemah_Otot ?? '',
      deformitas: data?.form?.Deformitas ?? '',
      nyeri_sendi: data?.form?.Nyeri_Sendi ?? '',
      parese: data?.form?.Parese ?? '',
      parese_dibagian: data?.form?.Parese_Dibagian ?? '',
      bengkak_sendi: data?.form?.Bengkak_Sendi ?? '',
      inkoordinasi: data?.form?.Inkoordinasi ?? '',
      tidur_malam: data?.form?.Tidur_Malam ?? '',
      tidur_siang: data?.form?.Tidur_Siang ?? '',
      kesulitan_tidur_radio: data?.form?.Kesulitan_Tidur_Radio ?? '',
      makan_1: data?.form?.Makan_1 ?? '',
      makan_2: data?.form?.Makan_2 ?? '',
      makan_3: data?.form?.Makan_3 ?? '',
      makan_4: data?.form?.Makan_4 ?? '',
      makan_5: data?.form?.Makan_5 ?? '',
      makan_6: data?.form?.Makan_6 ?? '',
      mandi_1: data?.form?.Mandi_1 ?? '',
      mandi_2: data?.form?.Mandi_2 ?? '',
      mandi_3: data?.form?.Mandi_3 ?? '',
      mandi_4: data?.form?.Mandi_4 ?? '',
      mandi_5: data?.form?.Mandi_5 ?? '',
      mandi_6: data?.form?.Mandi_6 ?? '',
      rawat_1: data?.form?.Rawat_1 ?? '',
      rawat_2: data?.form?.Rawat_2 ?? '',
      rawat_3: data?.form?.Rawat_3 ?? '',
      rawat_4: data?.form?.Rawat_4 ?? '',
      rawat_5: data?.form?.Rawat_5 ?? '',
      rawat_6: data?.form?.Rawat_6 ?? '',
      pakaian_1: data?.form?.Pakaian_1 ?? '',
      pakaian_2: data?.form?.Pakaian_2 ?? '',
      pakaian_3: data?.form?.Pakaian_3 ?? '',
      pakaian_4: data?.form?.Pakaian_4 ?? '',
      pakaian_5: data?.form?.Pakaian_5 ?? '',
      pakaian_6: data?.form?.Pakaian_6 ?? '',
      bak_1: data?.form?.BAK_1 ?? '',
      bak_2: data?.form?.BAK_2 ?? '',
      bak_3: data?.form?.BAK_3 ?? '',
      bak_4: data?.form?.BAK_4 ?? '',
      bak_5: data?.form?.BAK_5 ?? '',
      bak_6: data?.form?.BAK_6 ?? '',
      bab_1: data?.form?.BAB_1 ?? '',
      bab_2: data?.form?.BAB_2 ?? '',
      bab_3: data?.form?.BAB_3 ?? '',
      bab_4: data?.form?.BAB_4 ?? '',
      bab_5: data?.form?.BAB_5 ?? '',
      bab_6: data?.form?.BAB_6 ?? '',
      toilet_1: data?.form?.Toilet_1 ?? '',
      toilet_2: data?.form?.Toilet_2 ?? '',
      toilet_3: data?.form?.Toilet_3 ?? '',
      toilet_4: data?.form?.Toilet_4 ?? '',
      toilet_5: data?.form?.Toilet_5 ?? '',
      toilet_6: data?.form?.Toilet_6 ?? '',
      transfer_1: data?.form?.Transfer_1 ?? '',
      transfer_2: data?.form?.Transfer_2 ?? '',
      transfer_3: data?.form?.Transfer_3 ?? '',
      transfer_4: data?.form?.Transfer_4 ?? '',
      transfer_5: data?.form?.Transfer_5 ?? '',
      transfer_6: data?.form?.Transfer_6 ?? '',
      mobilitas_1: data?.form?.Mobilitas_1 ?? '',
      mobilitas_2: data?.form?.Mobilitas_2 ?? '',
      mobilitas_3: data?.form?.Mobilitas_3 ?? '',
      mobilitas_4: data?.form?.Mobilitas_4 ?? '',
      mobilitas_5: data?.form?.Mobilitas_5 ?? '',
      mobilitas_6: data?.form?.Mobilitas_6 ?? '',
      tangga_1: data?.form?.Tangga_1 ?? '',
      tangga_2: data?.form?.Tangga_2 ?? '',
      tangga_3: data?.form?.Tangga_3 ?? '',
      tangga_4: data?.form?.Tangga_4 ?? '',
      tangga_5: data?.form?.Tangga_5 ?? '',
      tangga_6: data?.form?.Tangga_6 ?? '',
      total_1: data?.form?.Total_1 ?? '',
      total_2: data?.form?.Total_2 ?? '',
      total_3: data?.form?.Total_3 ?? '',
      total_4: data?.form?.Total_4 ?? '',
      total_5: data?.form?.Total_5 ?? '',
      total_6: data?.form?.Total_6 ?? '',
      resiko_jatuh_radio: data?.form?.Resiko_Jatuh_Radio ?? '1',
      bicara_radio: data?.form?.Bicara_Radio ?? '0',
      perlu_penerjemah_radio: data?.form?.Perlu_Penerjemah_Radio ?? '',
      hambatan_belajar_radio: data?.form?.Hambatan_Belajar_Radio ?? '0',
      tingkat_pendidikan_radio: data?.form?.Tingkat_Pendidikan_Radio ?? '',
      tingkat_pendidikan_lain_teks: data?.form?.Tingkat_Pendidikan_Lain_Teks ?? '',
      status_ekonomi_radio: data?.form?.Status_Ekonomi_Radio ?? '0',
      status_psikologi_radio: data?.form?.Status_Psikologi_Radio ?? '',
      status_psikologi_tidak_terganggu: data?.form?.Status_Psikologi_Tidak_Terganggu ?? '1',
      status_psikologi_cemas: data?.form?.Status_Psikologi_Cemas ?? '',
      status_psikologi_takut: data?.form?.Status_Psikologi_Takut ?? '',
      status_psikologi_marah: data?.form?.Status_Psikologi_Marah ?? '',
      status_psikologi_panik: data?.form?.Status_Psikologi_Panik ?? '',
      status_mental_radio: data?.form?.Status_Mental_Radio ?? '0',
      sosial_radio: data?.form?.Sosial_Radio ?? '0',
      agama: data?.form?.Agama ?? '',
      keyakinan: data?.form?.Keyakinan ?? '',
      nilai_nilai: data?.form?.Nilai_Nilai ?? '',
      spiritual: data?.form?.Spiritual ?? '',
      selama_keperawatan: data?.form?.Selama_Keperawatan ?? '',
      keperawatan_persepsi_sensori: data?.form?.Keperawatan_Persepsi_Sensori ?? '',
      keperawatan_penurunan_kesadaran: data?.form?.Keperawatan_Penurunan_Kesadaran ?? '',
      keperawatan_nyeri: data?.form?.Keperawatan_Nyeri ?? '',
      keperawatan_resiko_infeksi: data?.form?.Keperawatan_Resiko_Infeksi ?? '',
      keperawatan_intake_output: data?.form?.Keperawatan_Intake_Output ?? '',
      keperawatan_resiko_jatuh: data?.form?.Keperawatan_Resiko_Jatuh ?? '',
      keperawatan_hiperthermia: data?.form?.Keperawatan_Hiperthermia ?? '',
      keperawatan_tekanan_intra: data?.form?.Keperawatan_Tekanan_Intra ?? '',
      keperawatan_kurang_pengetahuan: data?.form?.Keperawatan_Kurang_Pengetahuan ?? '',
      keperawatan_lainnya: data?.form?.Keperawatan_Lainnya ?? '',
      keperawatan_lainnya_masalah: data?.form?.Keperawatan_Lainnya_Masalah ?? '',
      keperawatan_lainnya_rencana: data?.form?.Keperawatan_Lainnya_Rencana ?? '',
      id_perawat_pengkaji: data?.form?.ID_Perawat_Pengkaji ?? '',
      nama_perawat_pengkaji: data?.form?.Nama_Perawat_Pengkaji ?? '',
      ttd_perawat_pengkaji: data?.form?.TTD_Perawat_Pengkaji ?? '',
    },
  });

  const handleRadioChange = (e: any) => {
    setValue(`${e.target.name}` as any, e.target.value);
  }

  const handleCheckboxChange = (e: any) => {
    setValue(`${e.target.name}` as any, (e.target.checked) ? '1' : '0');
  }

  const handleSubmitForm = (value: IUpdateInitialNursingAssessmentChildrenRequest) => {
    if (!treatment) {
      return;
    }

    const appRequest = AppRequest.createFromStore(treatment);
    const params = UpdateInitialNursingAssessmentChildrenRequest.createFromJson({
      ...value,
      ...appRequest,
    });
    setProcessing(true);
    dispatch(handlePdf(undefined));
    InpatientInitialNursingAssessmentChildrenService().update(params)
      .then(() => {
        InpatientInitialNursingAssessmentChildrenService().show(appRequest)
          .then((response: any) => {
            if (response?.data?.data) {
              InpatientInitialNursingAssessmentChildrenService().pdfv3(PdfInpatientInitialNursingAssessmentChildrenRequest.createPdfRequest({ ...response.data.data, umur_lengkap: treatment?.Pasien?.Umur_Lengkap }, appRequest.emr_id))
                .then(() => {
                  setProcessing(false);
                  dispatch(fetchInpatientInitialNursingAssessmentChildrenPdf(FindPdfRequest.createFromJson({
                    emr_id: treatment.EMR_ID,
                    form_name: 'rawat-inap_pengkajian-awal-keperawatan-anak',
                  })));
                  return true;
                }).finally(() => {
                  setProcessing(false);
                })
            }
          })
      })
  }

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Row>
        <Col>
          <Card className="border-1">
            <CardBody>
              <Row>
                <Col md="12">
                  <FormGroup className="form-group" row>
                    <DateTimeInput name="tanggal" label="Tanggal Pengkajian" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="col-form-label fw-bolder">Pengkajian diperoleh dari</div>
                </Col>
                <Col md="8">
                  <Row>
                    <Col md="auto">
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="pengkajian_diperoleh"
                          className="me-1"
                          value="0"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Pengkajian_Diperoleh === '0'}
                          innerRef={register("pengkajian_diperoleh") as any}
                        />{' '}
                        <Label check>
                          Pasien Sendiri
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="pengkajian_diperoleh"
                          className="me-1"
                          value="1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Pengkajian_Diperoleh === '1'}
                          innerRef={register("pengkajian_diperoleh") as any}
                        />{' '}
                        <Label check>
                          Wali bernama (input nama wali), hubungan dengan pasien (input hubungan)
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <FormGroup className="form-group" row>
                <TextInput name="keluhan_utama" label="Keluhan utama saat masuk" md={4} {...{ register, errors }}/>
              </FormGroup>
              <FormGroup className="form-group" row>
                <TextInput name="riwayat_penyakit_sekarang" label="Riwayat penyakit sekarang" md={4} {...{ register, errors }}/>
              </FormGroup>
            </CardBody>
          </Card>
          <Card className="border-1">
            <CardBody>
              <div>Riwayat Penyakit Dahulu dan Riwayat Pengobatan</div>
              <FormGroup className="form-group" row>
                <TextInput name="riwayat_penyakit_dahulu" label="Riwayat Penyakit Terdahulu" md={4} {...{ register, errors }}/>
              </FormGroup>
              <FormGroup className="form-group" row>
                <TextInput name="riwayat_pengobatan" label="Riwayat Pengobatan" md={4} {...{ register, errors }}/>
              </FormGroup>
              <Row>
                <Col md={4}>
                  <div className="col-form-label fw-bolder">Riwayat Operasi</div>
                </Col>
                <Col>
                  <Row>
                    <Col md="auto">
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="riwayat_operasi_radio"
                          className="me-1"
                          value="0"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Riwayat_Operasi_Radio === '0' || (!data?.form?.Riwayat_Operasi_Radio)}
                          innerRef={register("riwayat_operasi_radio") as any}
                        />{' '}
                        <Label check>
                          Tidak
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md="auto">
                      <FormGroup check className="app-form-check">
                        <Input
                          type="radio"
                          name="riwayat_operasi_radio"
                          className="me-1"
                          value="1"
                          onChange={(e) => handleRadioChange(e)}
                          defaultChecked={data?.form?.Riwayat_Operasi_Radio === '1'}
                          innerRef={register("riwayat_operasi_radio") as any}
                        />{' '}
                        <Label check>
                          Ya, Jenisnya (jenis_rw_op)
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <div className="col-form-label fw-bolder">Riwayat Penyakit Keluarga</div>
                </Col>
                <Col>
                  <Row>
                    {
                      riwayatPenyakitKeluargas.map((item, key) => {
                        return (
                          <Col md="auto" key={key}>
                            <FormGroup check className="app-form-check">
                              <Input
                                type="checkbox"
                                name={item.name}
                                className="me-1"
                                value="1"
                                onChange={(e) => handleCheckboxChange(e)}
                                defaultChecked={data?.form?.[item.form] === '1'}
                                innerRef={register(item.name as any) as any}
                              />{' '}
                              <Label check>
                                { item.label }
                              </Label>
                            </FormGroup>
                          </Col>
                        )
                      })
                    }
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div>1. Riwayat Pediatrik</div>
              <div className="col-form-label fw-bolder">Riwayat Prenatal</div>
              <Row>
                <Col style={{ marginLeft: '1rem' }}>
                  <FormGroup className="form-group" row>
                    <TextInput name="lama_kehamilan" label="Lama Kehamilan" md={4} {...{ register, errors }}/>
                  </FormGroup>
                  {
                    riwayatPrenatals.map((item, key) => {
                      return (
                        <Row key={key}>
                          <Col md={4}>
                            <div className="col-form-label fw-bolder">{ item.label }</div>
                          </Col>
                          <Col md="auto">
                            <FormGroup check className="app-form-check">
                              <Input
                                type="radio"
                                name={item.name}
                                className="me-1"
                                value="0"
                                onChange={(e) => handleRadioChange(e)}
                                defaultChecked={data?.form?.[item.form] === '0' || (!data?.form?.[item.form])}
                                innerRef={register(item.name as any) as any}
                              />{' '}
                              <Label check>
                                Tidak
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col md="auto">
                            <FormGroup check className="app-form-check">
                              <Input
                                type="radio"
                                name={item.name}
                                className="me-1"
                                value="1"
                                onChange={(e) => handleRadioChange(e)}
                                defaultChecked={data?.form?.[item.form] === '1'}
                                innerRef={register(item.name as any) as any}
                              />{' '}
                              <Label check>
                                Ya
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col>
                            <TextInput name={`${item.name}_ket`} nolabel {...{ register, errors }}/>
                          </Col>
                        </Row>
                      )
                    })
                  }
                </Col>
              </Row>
              <div className="col-form-label fw-bolder">Riwayat Imunisasi</div>
              <Row>
                <Col style={{ marginLeft: '1rem' }}>
                  {
                    riwayatImunisasi.map((item, key) => {
                      return (
                        <Row key={key}>
                          {
                            item.map((item2, key2) => {
                              return (
                                <Col md={(key2 <= 2) ? 2 : 'auto'} key={key2}>

                                  <FormGroup check className="app-form-check">
                                    <Input
                                      type="checkbox"
                                      name={item2.name}
                                      className="me-1"
                                      value="1"
                                      onChange={(e) => handleCheckboxChange(e)}
                                      defaultChecked={data?.form?.[item2.form] === '1'}
                                      innerRef={register(item2.name as any) as any}
                                    />{' '}
                                    <Label check>
                                      { item2.label }
                                    </Label>
                                  </FormGroup>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      )
                    })
                  }
                </Col>
              </Row>
              <div className="col-form-label fw-bolder">Riwayat Tumbuh Kembang</div>
              <Row>
                <Col style={{ marginLeft: '1rem' }}>
                  {
                    riwayatTumbuhKembang.map((item, key) => {
                      return (
                        <Row key={key}>
                          {
                            item.map((item2, key2) => {
                              return (
                                <Col key={key2} md={6}>
                                  <Row>
                                    <Col md={10}>
                                      <FormGroup className="form-group" row>
                                        <TextInput name={item2.name} label={item2.label} md={4} {...{ register, errors }}/>
                                      </FormGroup>
                                    </Col>
                                    <Col>
                                      <div className="col-form-label fw-bolder">{ item2.unit }</div>
                                    </Col>
                                  </Row>
                                </Col>
                              )
                            })
                          }
                        </Row>
                      )
                    })
                  }
                </Col>
              </Row>
              <div className="col-form-label fw-bolder">Assessmen Khusus Remaja</div>
              <div className="col-form-label fw-bolder">Untuk usia 14 s/d 18 Tahun</div>
              <Row>
                <Col style={{ marginLeft: '1rem' }}>
                  {
                    assesmentKhususRemaja.map((item, key) => {
                      return (
                        <div key={key}>
                          <Row>
                            <div className="col-form-label fw-bolder">{ item.label }</div>
                          </Row>
                          <Row>
                            <Col md="auto">
                              <FormGroup check className="app-form-check">
                                <Input
                                  type="radio"
                                  name={item.name}
                                  className="me-1"
                                  value="1"
                                  onChange={(e) => handleRadioChange(e)}
                                  defaultChecked={data?.form?.[item.form] === '1'}
                                  innerRef={register(item.name as any) as any}
                                />{' '}
                                <Label check>
                                  Ya
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md="auto">
                              <FormGroup check className="app-form-check">
                                <Input
                                  type="radio"
                                  name={item.name}
                                  className="me-1"
                                  value="0"
                                  onChange={(e) => handleRadioChange(e)}
                                  defaultChecked={data?.form?.[item.form] === '0' || (!data?.form?.[item.form])}
                                  innerRef={register(item.name as any) as any}
                                />{' '}
                                <Label check>
                                  Tidak
                                </Label>
                              </FormGroup>
                            </Col>
                          </Row>
                        </div>
                      )
                    })
                  }
                </Col>
              </Row>
              <div className="col-form-label fw-bolder">*Khusus untuk remaja putri bila ada 1 jawaban ya maka dilakukan intervensi lebih lanjut oleh DPJP</div>
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div>2. Pemeriksaan Fisik</div>
              <Row>
                <Col>
                  <FormGroup className="form-group" row>
                    <TextInput name="pf_td" label="TD" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="form-group" row>
                    <TextInput name="pf_suhu" label="Suhu" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="form-group" row>
                    <TextInput name="pf_p" label="P" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup className="form-group" row>
                    <TextInput name="pf_nadi" label="Nadi" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="form-group" row>
                    <TextInput name="pf_bb" label="BB" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="form-group" row>
                    <TextInput name="pf_tb" label="TB" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <div className="col-form-label">Kesadaran</div>
                </Col>
                <Col>
                  <Row>
                    {
                      kesadaran && kesadaran.map((item, key) => {
                        return <Col key={key}>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name={item.name}
                              className="me-1"
                              value={key}
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data?.form?.Kesadaran_Radio === `${key}` || (item.isDefault ? !data?.form?.Kesadaran_Radio : false)}
                              innerRef={register(item.name as any) as any}
                            />{' '}
                            <Label check>
                              {item.label}
                            </Label>
                          </FormGroup>
                        </Col>
                      })
                    }
                  </Row>
                </Col>
              </Row>
              <div className="col-form-label">Alergi / Reaksi</div>
              <Row>
                <Col>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="alergi_reaksi_radio"
                      className="me-1"
                      value="0"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Alergi_Reaksi_Radio === '0' || !data?.form?.Alergi_Reaksi_Radio}
                      innerRef={register("alergi_reaksi_radio") as any}
                    />{' '}
                    <Label check>
                      Tidak Ada Alergi
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="alergi_reaksi_radio"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Alergi_Reaksi_Radio === '1'}
                      innerRef={register("alergi_reaksi_radio") as any}
                    />{' '}
                    <Label check>
                      Tidak Diketahui
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="alergi_reaksi_radio"
                      className="me-1"
                      value="2"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Alergi_Reaksi_Radio === '2'}
                      innerRef={register("alergi_reaksi_radio") as any}
                    />{' '}
                    <Label check>
                      Ada
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <div className="col-form-label">
                Pengkajian Nyeri
              </div>
              <Row>
                <Col md="4">
                  <div className="col-form-label">Nyeri</div>
                </Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nyeri_radio"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Nyeri_Radio === '1'}
                      innerRef={register("nyeri_radio") as any}
                    />{' '}
                    <Label check>
                      Ya
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="nyeri_radio"
                      className="me-1"
                      value="0"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Nyeri_Radio === '0' || !data?.form?.Nyeri_Radio}
                      innerRef={register("nyeri_radio") as any}
                    />{' '}
                    <Label check>
                      Tidak
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="col-form-label">Metode Pengkajian Nyeri</div>
                </Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="pengkajian_nyeri"
                      className="me-1"
                      value="0"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Pengkajian_Nyeri === '0'}
                      innerRef={register("pengkajian_nyeri") as any}
                    />{' '}
                    <Label check>
                      FLACC
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="pengkajian_nyeri"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Pengkajian_Nyeri === '1'}
                      innerRef={register("pengkajian_nyeri") as any}
                    />{' '}
                    <Label check>
                      Wong Baker / Numeric Pain Rating Scale
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              {
                watch('pengkajian_nyeri') === '0' && (
                  <>
                    <div className="col-form-label">
                      FLACCS (Face Leg Activity Cry Counsolability Scale)
                    </div>
                    <Table className="mb-2">
                      <thead>
                        <tr>
                          <th>Kategori</th>
                          <th>Parameter</th>
                          <th>Skor</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {
                          flaccs && flaccs.map((item2) => {
                            return (
                              <>
                                {
                                  item2 && item2.map((item, key) => {
                                    return (
                                      <tr key={key}>
                                        <td>{item.kategori}</td>
                                        <td>{item.parameter}</td>
                                        <td>{item.value}</td>
                                        <td>
                                          <FormGroup check className="app-form-check">
                                            <Input
                                              type="radio"
                                              name={item.name}
                                              className="me-1"
                                              value={item.value}
                                              onChange={(e) => handleRadioChange(e)}
                                              defaultChecked={data?.form?.[item.form] === item.value}
                                              innerRef={register(item.name as any) as any}
                                            />{' '}
                                          </FormGroup>
                                        </td>
                                      </tr>
                                    )
                                  })
                                }
                              </>
                            )
                          })
                        }
                      </tbody>
                    </Table>
                  </>
                )
              }
              <div className="col-form-label">
                Skrining Nyeri
              </div>
              {
                skriningNyeri && skriningNyeri.map((item, key) => {
                  return (
                    <FormGroup className="form-group" row key={key}>
                      <TextInput name={item.name} label={item.label} md={4} {...{ register, errors }}/>
                    </FormGroup>
                  )
                })
              }
              {
                watch('pengkajian_nyeri') === '1' && (
                  <>
                    <div className="col-form-label">
                      Wong baker / numeric pain rating scale
                    </div>
                    <Row>
                      {
                        wongBaker && wongBaker.map((item, key) => {
                          return (
                            <Col md="auto" key={key}>
                              <FormGroup check className="app-form-check">
                                <Input
                                  type="radio"
                                  name="skala_nyeri_radio"
                                  className="me-1"
                                  value={item.label}
                                  onChange={(e) => handleRadioChange(e)}
                                  defaultChecked={data?.form?.Skala_Nyeri_Radio === item.label}
                                  innerRef={register("skala_nyeri_radio") as any}
                                />{' '}
                                <Label check>
                                  {item.label}
                                </Label>
                              </FormGroup>
                            </Col>
                          )
                        })
                      }
                    </Row>
                  </>
                )
              }
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div>3. Nutrisi</div>
              <div className="col-form-label">Skrining gizi strong kid</div>
              {
                nutrisi && nutrisi.map((item, key) => {
                  return (
                    <>
                      {
                        item.labels && item.labels.map((item2: any, key2: any) => {
                          return (
                            <>
                              <div className="col-form-label " key={key2}>{item2}</div>
                            </>
                          )
                        })
                      }
                      <Row className="mb-2">
                        <Col md="auto" key={key}>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name={item.name}
                              className="me-1"
                              value="1"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data?.form?.[item.form] === '1'}
                              innerRef={register(item.name as any) as any}
                            />{' '}
                            <Label check>
                              Ya
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col md="auto" key={key}>
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name={item.name}
                              className="me-1"
                              value="0"
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data?.form?.[item.form] === '0'}
                              innerRef={register(item.name as any) as any}
                            />{' '}
                            <Label check>
                              Tidak
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </>
                  );
                })
              }
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div>4. Penilaian Fungsionalitas, Aktivitas, Latihan</div>
              <Row>
                <Col md="3"><div className="col-form-label">Keterbatasan gerak</div></Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="keterbatasan_gerak_radio"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Keterbatasan_Gerak_Radio === '1'}
                      innerRef={register("keterbatasan_gerak_radio") as any}
                    />{' '}
                    <Label check>
                      Ya
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="keterbatasan_gerak_radio"
                      className="me-1"
                      value="0"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Keterbatasan_Gerak_Radio === '0' || !data?.form?.Keterbatasan_Gerak_Radio}
                      innerRef={register("keterbatasan_gerak_radio") as any}
                    />{' '}
                    <Label check>
                      Tidak
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              {
                keterbatasanGerak && keterbatasanGerak.map((item2, key2) => {
                  return <Row key={key2}>
                    {
                      item2 && item2.map((item, key) => {
                        return (
                          <Col key={key} md={item.md ?? '2'}>
                            <FormGroup check className="app-form-check">
                              <Input
                                type="checkbox"
                                name={item.name}
                                className="me-1"
                                value="1"
                                onChange={(e) => handleCheckboxChange(e)}
                                defaultChecked={data?.form?.[item.form] === '1'}
                                innerRef={register(item.name as any) as any}
                              />{' '}
                              <Label check>
                                {item.label}
                              </Label>
                            </FormGroup>
                          </Col>
                        )
                      })
                    }
                  </Row>
                })
              }
              <div className="col-form-label">
                Lama Tidur
              </div>
              <Row>
                <Col md="4">
                  <FormGroup className="form-group" row>
                    <TextInput name="tidur_malam" label="Malam" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
                <Col md="auto">Jam</Col>
              </Row>
              <Row>
                <Col md="4">
                  <FormGroup className="form-group" row>
                    <TextInput name="tidur_siang" label="Siang" md={4} {...{ register, errors }}/>
                  </FormGroup>
                </Col>
                <Col md="auto">Jam</Col>
              </Row>
              <Row>
                <Col md="3"><div className="col-form-label">Kesulitan tidur</div></Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="kesulitan_tidur_radio"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Kesulitan_Tidur_Radio === '1'}
                      innerRef={register("kesulitan_tidur_radio") as any}
                    />{' '}
                    <Label check>
                      Ya
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="kesulitan_tidur_radio"
                      className="me-1"
                      value="0"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Kesulitan_Tidur_Radio === '0'}
                      innerRef={register("kesulitan_tidur_radio") as any}
                    />{' '}
                    <Label check>
                      Tidak
                    </Label>
                  </FormGroup>
                </Col>
              </Row>

              <div style={{ paddingLeft: "1rem" }} className='mt-3'>
                <Label>Status Fungsional (Berdasarkan Penilaian Barthel Index Diatas 60 Tahun)</Label>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th rowSpan={2}>No</th>
                      <th rowSpan={2}>Aktivitas</th>
                      <th rowSpan={2}>Penilaian</th>
                      <th colSpan={6} className='text-center'>Nilai</th>
                    </tr>
                    <tr>
                      <th>Sebelum Sakit</th>
                      <th>Saat Masuk Rs</th>
                      <th>Hari II Di RS</th>
                      <th>Hari III Di RS</th>
                      <th>Hari IV Di RS</th>
                      <th>Saat Pulang</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Makan</td>
                      <td>
                        <div>
                          <Label>0 = Tidak mampu</Label>
                        </div>
                        <div>
                          <Label>1 = Butuh bantuan memotong,mengoles mentega dll</Label>
                        </div>
                        <div>
                          <Label>2 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_makan"
                            name= "sebelum_sakit_makan"
                            style={{ width: '50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_makan"
                            name= "saat_masuk_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_makan"
                            name= "minggu_2_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_makan"
                            name= "minggu_3_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_makan"
                            name= "minggu_4_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_makan"
                            name= "saat_pulang_makan"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mandi</td>
                      <td>
                        <div>
                          <Label>0 = Tergantung Orang Lain</Label>
                        </div>
                        <div>
                          <Label>1 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_mandi"
                            name= "sebelum_sakit_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_mandi"
                            name= "saat_masuk_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_mandi"
                            name= "minggu_2_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_mandi"
                            name= "minggu_3_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_mandi"
                            name= "minggu_4_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_mandi"
                            name= "saat_pulang_mandi"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Perawatan Diri</td>
                      <td>
                        <div>
                          <Label>0 = Membutuhkan Bantuan Orang Lain</Label>
                        </div>
                        <div>
                          <Label>1 = Mandiri Dalam Perawatan Muka, Rambut, Gigi Dan Bercukur</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_perawatan_diri"
                            name= "sebelum_sakit_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_perawatan_diri"
                            name= "saat_masuk_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_perawatan_diri"
                            name= "minggu_2_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_perawatan_diri"
                            name= "minggu_3_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_perawatan_diri"
                            name= "minggu_4_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_perawatan_diri"
                            name= "saat_pulang_perawatan_diri"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaisatu && sampaisatu.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Berpakaian</td>
                      <td>
                        <div>
                          <Label>0 = Tergantung Orang Lain</Label>
                        </div>
                        <div>
                          <Label>1 = Sebagian Dibantu(Misal Mengancing Baju)</Label>
                        </div>
                        <div>
                          <Label>2 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_berpakaian"
                            name= "sebelum_sakit_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_berpakaian"
                            name= "saat_masuk_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_berpakaian"
                            name= "minggu_2_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_berpakaian"
                            name= "minggu_3_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_berpakaian"
                            name= "minggu_4_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_berpakaian"
                            name= "saat_pulang_berpakaian"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Buang Air Kecil (BAK)</td>
                      <td>
                        <div>
                          <Label>0 = Inkontinensia (Tidak Teratur atau Perlu Enema)</Label>
                        </div>
                        <div>
                          <Label>1 = Kadang Inkontinensia (Maks. 1x24 Jam)</Label>
                        </div>
                        <div>
                          <Label>2 = Kontinensia (Teratur)</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_bak"
                            name= "sebelum_sakit_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_bak"
                            name= "saat_masuk_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_bak"
                            name= "minggu_2_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_bak"
                            name= "minggu_3_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_bak"
                            name= "minggu_4_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_bak"
                            name= "saat_pulang_bak"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Buang Air Besar (BAB)</td>
                      <td>
                        <div>
                          <Label>0 = Inkontinensia (Tidak Teratur atau Perlu Enema)</Label>
                        </div>
                        <div>
                          <Label>1 = Kadang Inkontinensia (Sekali Seminggu)</Label>
                        </div>
                        <div>
                          <Label>2 = Kontinensia (Teratur)</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_bab"
                            name= "sebelum_sakit_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_bab"
                            name= "saat_masuk_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_bab"
                            name= "minggu_2_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_bab"
                            name= "minggu_3_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_bab"
                            name= "minggu_4_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_bab"
                            name= "saat_pulang_bab"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Penggunaan Toilet</td>
                      <td>
                        <div>
                          <Label>0 = Tergantung Bantuan Orang Lain</Label>
                        </div>
                        <div>
                          <Label>1 = Membutuhkan Bantuan, Tapi dapat Melakukan Beberapa Hal Sendiri</Label>
                        </div>
                        <div>
                          <Label>2 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_penggunaan_toilet"
                            name= "sebelum_sakit_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_penggunaan_toilet"
                            name= "saat_masuk_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register({ required: true })}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_penggunaan_toilet"
                            name= "minggu_2_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_penggunaan_toilet"
                            name= "minggu_3_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_penggunaan_toilet"
                            name= "minggu_4_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_penggunaan_toilet"
                            name= "saat_pulang_penggunaan_toilet"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Transfer</td>
                      <td>
                        <div>
                          <Label>0 = Tidak Mampu</Label>
                        </div>
                        <div>
                          <Label>1 = Butuh Bantuan Untuk Bisa Duduk (2 Orang)</Label>
                        </div>
                        <div>
                          <Label>2 = Bantuan Kecil (1 Orang)</Label>
                        </div>
                        <div>
                          <Label>3 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_transfer"
                            name= "sebelum_sakit_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_transfer"
                            name= "saat_masuk_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_transfer"
                            name= "minggu_2_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_transfer"
                            name= "minggu_3_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_transfer"
                            name= "minggu_4_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_transfer"
                            name= "saat_pulang_transfer"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Mobilitas</td>
                      <td>
                        <div>
                          <Label>0 = Immobile(Tidak Mampu)</Label>
                        </div>
                        <div>
                          <Label>1 = Menggunakan Kursi Roda</Label>
                        </div>
                        <div>
                          <Label>2 = Berjalan Dengan Bantuan Satu Orang</Label>
                        </div>
                        <div>
                          <Label>3 = Mandiri (Meskipun Menggunakan Alat Bantu Seperti Tongkat)</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_mobilitas"
                            name= "sebelum_sakit_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_mobilitas"
                            name= "saat_masuk_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_mobilitas"
                            name= "minggu_2_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_mobilitas"
                            name= "minggu_3_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_mobilitas"
                            name= "minggu_4_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_mobilitas"
                            name= "saat_pulang_mobilitas"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaitiga && sampaitiga.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Naik Turun Tangga</td>
                      <td>
                        <div>
                          <Label>0 = Tidak Mampu</Label>
                        </div>
                        <div>
                          <Label>1 = Membutuhkan Bantuan (Alat Bantu)</Label>
                        </div>
                        <div>
                          <Label>2 = Mandiri</Label>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "sebelum_sakit_naik_turun_tangga"
                            name= "sebelum_sakit_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_masuk_naik_turun_tangga"
                            name= "saat_masuk_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_2_naik_turun_tangga"
                            name= "minggu_2_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_3_naik_turun_tangga"
                            name= "minggu_3_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "minggu_4_naik_turun_tangga"
                            name= "minggu_4_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            type="select"
                            id= "saat_pulang_naik_turun_tangga"
                            name= "saat_pulang_naik_turun_tangga"
                            style={{width:'50px'}}
                            innerRef={register()}
                          >
                            <option value="" disabled={false}>---</option>
                            {
                              sampaidua && sampaidua.map((item: any, key: number) => {
                                return <option value={item} key={key}>{ item }</option>;
                              })
                            }
                          </Input>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} className='text-center'>Total</td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='sebelum_sakit_total'
                            name='sebelum_sakit_total'
                            type="number"
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='saat_masuk_total'
                            name='saat_masuk_total'
                            type="number"
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='minggu_2_total'
                            name='minggu_2_total'
                            type='number'
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='minggu_3_total'
                            name='minggu_3_total'
                            type='number'
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='minggu_4_total'
                            name='minggu_4_total'
                            type='number'
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex justify-content-center'>
                          <Input
                            id='saat_pulang_total'
                            name='saat_pulang_total'
                            type='number'
                            style={{width:'50px'}}
                            innerRef={register()}
                            readOnly
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div>5. Pengkajian Resiko Jatuh</div>
              <div className="col-form-label">
                Gunakan pengkajian resiko jatuh humpty dumpty
              </div>
              <Row>
                <Col md="2">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="resiko_jatuh_radio"
                      className="me-1"
                      value="0"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Resiko_Jatuh_Radio === '0'}
                      innerRef={register("resiko_jatuh_radio") as any}
                    />{' '}
                    <Label check>
                      Tidak resiko
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="2">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="resiko_jatuh_radio"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Resiko_Jatuh_Radio === '1' || !data?.form?.Resiko_Jatuh_Radio}
                      innerRef={register("resiko_jatuh_radio") as any}
                    />{' '}
                    <Label check>
                      Resiko rendah
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="2">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="resiko_jatuh_radio"
                      className="me-1"
                      value="2"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Resiko_Jatuh_Radio === '2'}
                      innerRef={register("resiko_jatuh_radio") as any}
                    />{' '}
                    <Label check>
                      Resiko tinggi
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div>6. Kebutuhan komunikasi / pendidikan</div>
              {
                kebutuhanKomunikasi && kebutuhanKomunikasi.map((item) => {
                  return (
                    <>
                      <Row>
                        <Col md="3">
                          <div className="col-form-label">{ item.label }</div>
                        </Col>
                        {
                          item.options && item.options.map((item2: any, key2: any) => {
                            return (
                              <Col md="auto" key={key2}>
                                <FormGroup check className="app-form-check">
                                  <Input
                                    type="radio"
                                    name={item.name}
                                    className="me-1"
                                    value={item2.value}
                                    onChange={(e) => handleRadioChange(e)}
                                    defaultChecked={data?.form?.[item.form] === item2.value || (item2.isDefault ? !data?.form?.[item.form] : false)}
                                    innerRef={register(item.name as any) as any}
                                  />{' '}
                                  <Label check>
                                    {item2.label}
                                  </Label>
                                </FormGroup>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </>
                  )
                })
              }
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div>7. Status sosial ekonomi</div>
              <Row>
                {
                  sosialEkonomi && sosialEkonomi.map((item) => {
                    return (
                      <>
                        <Col md="2">
                          <FormGroup check className="app-form-check">
                            <Input
                              type="radio"
                              name="status_ekonomi_radio"
                              className="me-1"
                              value={item.value}
                              onChange={(e) => handleRadioChange(e)}
                              defaultChecked={data?.form?.Status_Ekonomi_Radio === item.value || (item.isDefault ? !data?.form?.Status_Ekonomi_Radio : false)}
                              innerRef={register("status_ekonomi_radio") as any}
                            />{' '}
                            <Label check>
                              {item.label}
                            </Label>
                          </FormGroup>
                        </Col>
                      </>
                    )
                  })
                }
              </Row>
            </CardBody>
          </Card>

          <Card className="border-1">
            <CardBody>
              <div>8. Riwayat psikologis dan spiritual</div>
              <div className="col-form-label">Status Psikologis</div>
              <Row>
                {
                  statusPsikologis && statusPsikologis.map((item) => {
                    return (
                      <>
                        <Col md="2">
                          <FormGroup check className="app-form-check">
                            <Input
                              type="checkbox"
                              name={item.name}
                              className="me-1"
                              value="1"
                              onChange={(e) => handleCheckboxChange(e)}
                              defaultChecked={data?.form?.[item.form] === "1" || (item.isDefault ? !data?.form?.[item.form] : false)}
                              innerRef={register(item.name as any) as any}
                            />{' '}
                            <Label check>
                              {item.label}
                            </Label>
                          </FormGroup>
                        </Col>
                      </>
                    )
                  })
                }
              </Row>
              <div className="col-form-label">Status Mental</div>
              {
                statusMental && statusMental.map((item, key) => {
                  return (
                    <FormGroup check className="app-form-check" key={key}>
                      <Input
                        type="radio"
                        name="status_mental_radio"
                        className="me-1"
                        value={item.value}
                        onChange={(e) => handleRadioChange(e)}
                        defaultChecked={data?.form?.Status_Mental_Radio === item.value || (item.isDefault ? !data?.form?.Status_Mental_Radio : false)}
                        innerRef={register("status_mental_radio") as any}
                      />{' '}
                      <Label check>
                        {item.label}
                      </Label>
                    </FormGroup>
                  )
                })
              }

              <div className="col-form-label">
                Sosial
              </div>
              <Row>
                <Col md="3">
                  <div className="col-form-label">Hubungan pasien dengan anggota</div>
                </Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="sosial_radio"
                      className="me-1"
                      value="0"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Sosial_Radio === '0' || !data?.form?.Sosial_Radio}
                      innerRef={register("sosial_radio") as any}
                    />{' '}
                    <Label check>
                      Baik
                    </Label>
                  </FormGroup>
                </Col>
                <Col md="auto">
                  <FormGroup check className="app-form-check">
                    <Input
                      type="radio"
                      name="sosial_radio"
                      className="me-1"
                      value="1"
                      onChange={(e) => handleRadioChange(e)}
                      defaultChecked={data?.form?.Sosial_Radio === '1'}
                      innerRef={register("sosial_radio") as any}
                    />{' '}
                    <Label check>
                      Tidak Baik
                    </Label>
                  </FormGroup>
                </Col>
              </Row>

              <div className="col-form-label">
                Status spiritual
              </div>
              {
                statusSpiritual && statusSpiritual.map((item) => {
                  return (
                    <>
                      <FormGroup className="form-group" row>
                        <TextInput name={item.name} label={item.label} md={4} {...{ register, errors }}/>
                      </FormGroup>
                    </>
                  )
                })
              }

              <Table className="mb-2">
                <thead>
                  <tr>
                    <th />
                    <th>Masalah Keperawatan</th>
                    <th>Rencana Keperawatan</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {
                    keperawatan && keperawatan.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>
                            <FormGroup check className="app-form-check">
                              <Input
                                type="checkbox"
                                name={item.name}
                                className="me-1"
                                value="1"
                                onChange={(e) => handleRadioChange(e)}
                                defaultChecked={data?.form?.[item.form] === '1'}
                                innerRef={register(item.name as any) as any}
                              />{' '}
                            </FormGroup>
                          </td>
                          <td>
                            {
                              item.label?.masalah
                            }
                            {
                              item.input && item.input.masalah && (
                                <>
                                  <FormGroup className="form-group" row>
                                    <TextInput name={item.input.masalah.name} label={item.input.masalah.label} {...{ register, errors }}/>
                                  </FormGroup>
                                </>
                              )
                            }
                          </td>
                          <td>
                            {
                              item.label?.rencana
                            }
                            {
                              item.input && item.input.rencana && (
                                <>
                                  <FormGroup className="form-group" row>
                                    <TextInput name={item.input.rencana.name} label={item.input.rencana.label} {...{ register, errors }}/>
                                  </FormGroup>
                                </>
                              )
                            }
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </CardBody>
          </Card>

        </Col>
      </Row>

      <div className="d-flex justify-content-around my-1">
        <Signature
          label="Perawat Yang Mengkaji"
          type="picker"
          defaultPerson={data?.form?.Nama_Perawat_Pengkaji ?? ''}
          initialImage={(data.form && data.form.TTD_Perawat_Pengkaji && data.form.TTD_Perawat_Pengkaji !== '' && data.form.TTD_Perawat_Pengkaji !== null) ? data?.form?.TTD_Perawat_Pengkaji : undefined}
          persons={officers}
          additionalLabel={(data?.form?.Nama_Perawat_Pengkaji && data?.form?.Nama_Perawat_Pengkaji !== '') ? data?.form?.Nama_Perawat_Pengkaji : undefined}
          onSigned={(assigner: SignatureModel) => {
            setValue('id_perawat_pengkaji', assigner.ID_Karyawan);
            setValue('ttd_perawat_pengkaji', assigner.Signature);
          }} />
        <Input
          type="hidden"
          name="id_perawat_pengkaji"
          innerRef={register({ required: true })}
          invalid={errors['id_perawat_pengkaji'] && true} />
        <Input
          type="hidden"
          name="ttd_perawat_pengkaji"
          innerRef={register({ required: true })}
          invalid={errors['ttd_perawat_pengkaji'] && true} />
      </div>

      <Row>
        <Col>
          <FormGroup className="d-flex mb-0 justify-content-center">
            <SubmitButton
              label="Simpan"
              buttonColor='primary'
              spinnerStyle={{ width: '1rem', height: '1rem' }}
              spinnerColor='light'
              processing={processing} />
            {
              pdfData && Array.isArray(pdfData) && pdfData.length > 0 && (
                <a color='success' href={`${pdfData[0].URL}`} target="_blank" rel="noreferrer">
                  <Button className='me-1' color='success' type='button'>
                    Cetak
                  </Button>
                </a>
              )
            }
            {
              (!pdfData || (pdfData && Array.isArray(pdfData) && pdfData.length === 0)) && (
                <Button className='me-1' color='success' type='button' disabled>
                  Cetak
                </Button>
              )
            }
          </FormGroup>
          <FormGroup className="form-group mt-0" row>
            <div className="d-flex justify-content-center align-items-center">
              <Label className="me-1">Terakhir Disimpan: </Label>
              <Label>{ `${DateTimeConverter.convertToDateTimeSecond(data?.form?.Updated_At)}` }</Label>
            </div>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default InpatientInitialNursingAssessmentChildrenForm;
