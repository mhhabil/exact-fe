import { DataModel, IDataModel } from '@shared/model';
import { INursingEarlyWarning } from '../../nursing-early-warning-scoring-table/models/nursing-early-warning-scoring.model';

export interface IInpatientInitialNursingAssessmentChildrenForm {
  Tanggal: string;
  Jam: string;
  Pengkajian_Diperoleh: string;
  Keluhan_Utama: string;
  Riwayat_Penyakit_Sekarang: string;
  Riwayat_Penyakit_Dahulu: string;
  Riwayat_Pengobatan: string;
  Riwayat_Operasi_Radio: string;
  Riwayat_Penyakit_Hipertensi: string;
  Riwayat_Penyakit_Asma: string;
  Riwayat_Penyakit_Diabetes: string;
  Riwayat_Penyakit_Hepatitis: string;
  Riwayat_Penyakit_Glaukoma: string;
  Riwayat_Penyakit_Stroke: string;
  Riwayat_Penyakit_Lainnya: string;
  Riwayat_Penyakit_Lainnya_Teks: string;
  Lama_Kehamilan: string;
  Komplikasi_Radio: string;
  Komplikasi_Radio_Ket: string;
  Neonatus_Radio: string;
  Neonatus_Radio_Ket: string;
  Maternal_Radio: string;
  Maternal_Radio_Ket: string;
  Imunisasi_BCG: string;
  Imunisasi_Polio_1: string;
  Imunisasi_Polio_2: string;
  Imunisasi_Polio_3: string;
  Imunisasi_Hepatitis_1: string;
  Imunisasi_Hepatitis_2: string;
  Imunisasi_Hepatitis_3: string;
  Imunisasi_Varicela: string;
  Imunisasi_DPT_1: string;
  Imunisasi_DPT_2: string;
  Imunisasi_DPT_3: string;
  Imunisasi_Typhus: string;
  Imunisasi_Campak: string;
  Imunisasi_MMR: string;
  Imunisasi_Lainnya_2: string;
  Imunisasi_Lainnya_2_Teks: string;
  Imunisasi_Influenza: string;
  Imunisasi_Lainnya_1: string;
  Imunisasi_Lainnya_1_Teks: string;
  BB_Lahir: string;
  PB_Lahir: string;
  ASI_Umur: string;
  Makan_Tambahan_Umur: string;
  Berjalan_Umur: string;
  Tengkurap_Umur: string;
  Duduk_Umur: string;
  Merangkak_Umur: string;
  Berdiri_Umur: string;
  Asesmen_Remaja_1: string;
  Asesmen_Remaja_2: string;
  Asesmen_Remaja_3: string;
  Asesmen_Remaja_4: string;
  Asesmen_Remaja_5: string;
  Asesmen_Remaja_6: string;
  Asesmen_Remaja_7: string;
  Asesmen_Remaja_8: string;
  Asesmen_Remaja_9: string;
  Asesmen_Remaja_10: string;
  Asesmen_Remaja_11: string;
  Asesmen_Remaja_12: string;
  PF_TD: string;
  PF_Nadi: string;
  PF_Suhu: string;
  PF_BB: string;
  PF_P: string;
  PF_TB: string;
  Kesadaran_Radio: string;
  Alergi_Reaksi_Radio: string;
  Nyeri_Radio: string;
  Pengkajian_Nyeri: string;
  Wajah_Radio: string;
  Kaki_Radio: string;
  Aktivitas_Radio: string;
  Menangis_Radio: string;
  Kenyamanan_Radio: string;
  Penyebab_Nyeri: string;
  Kualitas_Nyeri: string;
  Lokasi_Nyeri: string;
  Skala_Nyeri: string;
  Durasi_Nyeri: string;
  Total_Skor: string;
  Kategori_Nyeri: string;
  Skala_Nyeri_Radio: string;
  Skrining_Gizi_1: string;
  Skrining_Gizi_2: string;
  Skrining_Gizi_3: string;
  Skrining_Gizi_4: string;
  Skrining_Gizi_Total: string;
  Kategori_Nilai_Gizi: string;
  Keterbatasan_Gerak_Radio: string;
  Nyeri_Otot: string;
  Kelemahan: string;
  Kaku_Otot: string;
  Amputasi: string;
  Lemah_Otot: string;
  Deformitas: string;
  Nyeri_Sendi: string;
  Parese: string;
  Parese_Dibagian: string;
  Bengkak_Sendi: string;
  Inkoordinasi: string;
  Tidur_Malam: string;
  Tidur_Siang: string;
  Kesulitan_Tidur_Radio: string;
  Makan_1: string;
  Makan_2: string;
  Makan_3: string;
  Makan_4: string;
  Makan_5: string;
  Makan_6: string;
  Mandi_1: string;
  Mandi_2: string;
  Mandi_3: string;
  Mandi_4: string;
  Mandi_5: string;
  Mandi_6: string;
  Rawat_1: string;
  Rawat_2: string;
  Rawat_3: string;
  Rawat_4: string;
  Rawat_5: string;
  Rawat_6: string;
  Pakaian_1: string;
  Pakaian_2: string;
  Pakaian_3: string;
  Pakaian_4: string;
  Pakaian_5: string;
  Pakaian_6: string;
  BAK_1: string;
  BAK_2: string;
  BAK_3: string;
  BAK_4: string;
  BAK_5: string;
  BAK_6: string;
  BAB_1: string;
  BAB_2: string;
  BAB_3: string;
  BAB_4: string;
  BAB_5: string;
  BAB_6: string;
  Toilet_1: string;
  Toilet_2: string;
  Toilet_3: string;
  Toilet_4: string;
  Toilet_5: string;
  Toilet_6: string;
  Transfer_1: string;
  Transfer_2: string;
  Transfer_3: string;
  Transfer_4: string;
  Transfer_5: string;
  Transfer_6: string;
  Mobilitas_1: string;
  Mobilitas_2: string;
  Mobilitas_3: string;
  Mobilitas_4: string;
  Mobilitas_5: string;
  Mobilitas_6: string;
  Tangga_1: string;
  Tangga_2: string;
  Tangga_3: string;
  Tangga_4: string;
  Tangga_5: string;
  Tangga_6: string;
  Total_1: string;
  Total_2: string;
  Total_3: string;
  Total_4: string;
  Total_5: string;
  Total_6: string;
  Resiko_Jatuh_Radio: string;
  Bicara_Radio: string;
  Perlu_Penerjemah_Radio: string;
  Hambatan_Belajar_Radio: string;
  Tingkat_Pendidikan_Radio: string;
  Tingkat_Pendidikan_Lain_Teks: string;
  Status_Ekonomi_Radio: string;
  Status_Psikologi_Radio: string;
  Status_Psikologi_Tidak_Terganggu: string;
  Status_Psikologi_Cemas: string;
  Status_Psikologi_Takut: string;
  Status_Psikologi_Marah: string;
  Status_Psikologi_Panik: string;
  Status_Mental_Radio: string;
  Sosial_Radio: string;
  Agama: string;
  Keyakinan: string;
  Nilai_Nilai: string;
  Spiritual: string;
  Selama_Keperawatan: string;
  Keperawatan_Persepsi_Sensori: string;
  Keperawatan_Penurunan_Kesadaran: string;
  Keperawatan_Nyeri: string;
  Keperawatan_Resiko_Infeksi: string;
  Keperawatan_Intake_Output: string;
  Keperawatan_Resiko_Jatuh: string;
  Keperawatan_Hiperthermia: string;
  Keperawatan_Tekanan_Intra: string;
  Keperawatan_Kurang_Pengetahuan: string;
  Keperawatan_Lainnya: string;
  Keperawatan_Lainnya_Masalah: string;
  Keperawatan_Lainnya_Rencana: string;
  ID_Perawat_Pengkaji: string;
  TTD_Perawat_Pengkaji: string;
  Nama_Perawat_Pengkaji: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
}

export class InpatientInitialNursingAssessmentChildrenForm {
  Tanggal: string;
  Jam: string;
  Pengkajian_Diperoleh: string;
  Keluhan_Utama: string;
  Riwayat_Penyakit_Sekarang: string;
  Riwayat_Penyakit_Dahulu: string;
  Riwayat_Pengobatan: string;
  Riwayat_Operasi_Radio: string;
  Riwayat_Penyakit_Hipertensi: string;
  Riwayat_Penyakit_Asma: string;
  Riwayat_Penyakit_Diabetes: string;
  Riwayat_Penyakit_Hepatitis: string;
  Riwayat_Penyakit_Glaukoma: string;
  Riwayat_Penyakit_Stroke: string;
  Riwayat_Penyakit_Lainnya: string;
  Riwayat_Penyakit_Lainnya_Teks: string;
  Lama_Kehamilan: string;
  Komplikasi_Radio: string;
  Komplikasi_Radio_Ket: string;
  Neonatus_Radio: string;
  Neonatus_Radio_Ket: string;
  Maternal_Radio: string;
  Maternal_Radio_Ket: string;
  Imunisasi_BCG: string;
  Imunisasi_Polio_1: string;
  Imunisasi_Polio_2: string;
  Imunisasi_Polio_3: string;
  Imunisasi_Hepatitis_1: string;
  Imunisasi_Hepatitis_2: string;
  Imunisasi_Hepatitis_3: string;
  Imunisasi_Varicela: string;
  Imunisasi_DPT_1: string;
  Imunisasi_DPT_2: string;
  Imunisasi_DPT_3: string;
  Imunisasi_Typhus: string;
  Imunisasi_Campak: string;
  Imunisasi_MMR: string;
  Imunisasi_Lainnya_2: string;
  Imunisasi_Lainnya_2_Teks: string;
  Imunisasi_Influenza: string;
  Imunisasi_Lainnya_1: string;
  Imunisasi_Lainnya_1_Teks: string;
  BB_Lahir: string;
  PB_Lahir: string;
  ASI_Umur: string;
  Makan_Tambahan_Umur: string;
  Berjalan_Umur: string;
  Tengkurap_Umur: string;
  Duduk_Umur: string;
  Merangkak_Umur: string;
  Berdiri_Umur: string;
  Asesmen_Remaja_1: string;
  Asesmen_Remaja_2: string;
  Asesmen_Remaja_3: string;
  Asesmen_Remaja_4: string;
  Asesmen_Remaja_5: string;
  Asesmen_Remaja_6: string;
  Asesmen_Remaja_7: string;
  Asesmen_Remaja_8: string;
  Asesmen_Remaja_9: string;
  Asesmen_Remaja_10: string;
  Asesmen_Remaja_11: string;
  Asesmen_Remaja_12: string;
  PF_TD: string;
  PF_Nadi: string;
  PF_Suhu: string;
  PF_BB: string;
  PF_P: string;
  PF_TB: string;
  Kesadaran_Radio: string;
  Alergi_Reaksi_Radio: string;
  Nyeri_Radio: string;
  Pengkajian_Nyeri: string;
  Wajah_Radio: string;
  Kaki_Radio: string;
  Aktivitas_Radio: string;
  Menangis_Radio: string;
  Kenyamanan_Radio: string;
  Penyebab_Nyeri: string;
  Kualitas_Nyeri: string;
  Lokasi_Nyeri: string;
  Skala_Nyeri: string;
  Durasi_Nyeri: string;
  Total_Skor: string;
  Kategori_Nyeri: string;
  Skala_Nyeri_Radio: string;
  Skrining_Gizi_1: string;
  Skrining_Gizi_2: string;
  Skrining_Gizi_3: string;
  Skrining_Gizi_4: string;
  Skrining_Gizi_Total: string;
  Kategori_Nilai_Gizi: string;
  Keterbatasan_Gerak_Radio: string;
  Nyeri_Otot: string;
  Kelemahan: string;
  Kaku_Otot: string;
  Amputasi: string;
  Lemah_Otot: string;
  Deformitas: string;
  Nyeri_Sendi: string;
  Parese: string;
  Parese_Dibagian: string;
  Bengkak_Sendi: string;
  Inkoordinasi: string;
  Tidur_Malam: string;
  Tidur_Siang: string;
  Kesulitan_Tidur_Radio: string;
  Makan_1: string;
  Makan_2: string;
  Makan_3: string;
  Makan_4: string;
  Makan_5: string;
  Makan_6: string;
  Mandi_1: string;
  Mandi_2: string;
  Mandi_3: string;
  Mandi_4: string;
  Mandi_5: string;
  Mandi_6: string;
  Rawat_1: string;
  Rawat_2: string;
  Rawat_3: string;
  Rawat_4: string;
  Rawat_5: string;
  Rawat_6: string;
  Pakaian_1: string;
  Pakaian_2: string;
  Pakaian_3: string;
  Pakaian_4: string;
  Pakaian_5: string;
  Pakaian_6: string;
  BAK_1: string;
  BAK_2: string;
  BAK_3: string;
  BAK_4: string;
  BAK_5: string;
  BAK_6: string;
  BAB_1: string;
  BAB_2: string;
  BAB_3: string;
  BAB_4: string;
  BAB_5: string;
  BAB_6: string;
  Toilet_1: string;
  Toilet_2: string;
  Toilet_3: string;
  Toilet_4: string;
  Toilet_5: string;
  Toilet_6: string;
  Transfer_1: string;
  Transfer_2: string;
  Transfer_3: string;
  Transfer_4: string;
  Transfer_5: string;
  Transfer_6: string;
  Mobilitas_1: string;
  Mobilitas_2: string;
  Mobilitas_3: string;
  Mobilitas_4: string;
  Mobilitas_5: string;
  Mobilitas_6: string;
  Tangga_1: string;
  Tangga_2: string;
  Tangga_3: string;
  Tangga_4: string;
  Tangga_5: string;
  Tangga_6: string;
  Total_1: string;
  Total_2: string;
  Total_3: string;
  Total_4: string;
  Total_5: string;
  Total_6: string;
  Resiko_Jatuh_Radio: string;
  Bicara_Radio: string;
  Perlu_Penerjemah_Radio: string;
  Hambatan_Belajar_Radio: string;
  Tingkat_Pendidikan_Radio: string;
  Tingkat_Pendidikan_Lain_Teks: string;
  Status_Ekonomi_Radio: string;
  Status_Psikologi_Radio: string;
  Status_Psikologi_Tidak_Terganggu: string;
  Status_Psikologi_Cemas: string;
  Status_Psikologi_Takut: string;
  Status_Psikologi_Marah: string;
  Status_Psikologi_Panik: string;
  Status_Mental_Radio: string;
  Sosial_Radio: string;
  Agama: string;
  Keyakinan: string;
  Nilai_Nilai: string;
  Spiritual: string;
  Selama_Keperawatan: string;
  Keperawatan_Persepsi_Sensori: string;
  Keperawatan_Penurunan_Kesadaran: string;
  Keperawatan_Nyeri: string;
  Keperawatan_Resiko_Infeksi: string;
  Keperawatan_Intake_Output: string;
  Keperawatan_Resiko_Jatuh: string;
  Keperawatan_Hiperthermia: string;
  Keperawatan_Tekanan_Intra: string;
  Keperawatan_Kurang_Pengetahuan: string;
  Keperawatan_Lainnya: string;
  Keperawatan_Lainnya_Masalah: string;
  Keperawatan_Lainnya_Rencana: string;
  ID_Perawat_Pengkaji: string;
  TTD_Perawat_Pengkaji: string;
  Nama_Perawat_Pengkaji: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  constructor(form: InpatientInitialNursingAssessmentChildrenForm) {

    this.Tanggal = form.Tanggal;
    this.Jam = form.Jam;
    this.Pengkajian_Diperoleh = form.Pengkajian_Diperoleh;
    this.Keluhan_Utama = form.Keluhan_Utama;
    this.Riwayat_Penyakit_Sekarang = form.Riwayat_Penyakit_Sekarang;
    this.Riwayat_Penyakit_Dahulu = form.Riwayat_Penyakit_Dahulu;
    this.Riwayat_Pengobatan = form.Riwayat_Pengobatan;
    this.Riwayat_Operasi_Radio = form.Riwayat_Operasi_Radio;
    this.Riwayat_Penyakit_Hipertensi = form.Riwayat_Penyakit_Hipertensi;
    this.Riwayat_Penyakit_Asma = form.Riwayat_Penyakit_Asma;
    this.Riwayat_Penyakit_Diabetes = form.Riwayat_Penyakit_Diabetes;
    this.Riwayat_Penyakit_Hepatitis = form.Riwayat_Penyakit_Hepatitis;
    this.Riwayat_Penyakit_Glaukoma = form.Riwayat_Penyakit_Glaukoma;
    this.Riwayat_Penyakit_Stroke = form.Riwayat_Penyakit_Stroke;
    this.Riwayat_Penyakit_Lainnya = form.Riwayat_Penyakit_Lainnya;
    this.Riwayat_Penyakit_Lainnya_Teks = form.Riwayat_Penyakit_Lainnya_Teks;
    this.Lama_Kehamilan = form.Lama_Kehamilan;
    this.Komplikasi_Radio = form.Komplikasi_Radio;
    this.Komplikasi_Radio_Ket = form.Komplikasi_Radio_Ket;
    this.Neonatus_Radio = form.Neonatus_Radio;
    this.Neonatus_Radio_Ket = form.Neonatus_Radio_Ket;
    this.Maternal_Radio = form.Maternal_Radio;
    this.Maternal_Radio_Ket = form.Maternal_Radio_Ket;
    this.Imunisasi_BCG = form.Imunisasi_BCG;
    this.Imunisasi_Polio_1 = form.Imunisasi_Polio_1;
    this.Imunisasi_Polio_2 = form.Imunisasi_Polio_2;
    this.Imunisasi_Polio_3 = form.Imunisasi_Polio_3;
    this.Imunisasi_Hepatitis_1 = form.Imunisasi_Hepatitis_1;
    this.Imunisasi_Hepatitis_2 = form.Imunisasi_Hepatitis_2;
    this.Imunisasi_Hepatitis_3 = form.Imunisasi_Hepatitis_3;
    this.Imunisasi_Varicela = form.Imunisasi_Varicela;
    this.Imunisasi_DPT_1 = form.Imunisasi_DPT_1;
    this.Imunisasi_DPT_2 = form.Imunisasi_DPT_2;
    this.Imunisasi_DPT_3 = form.Imunisasi_DPT_3;
    this.Imunisasi_Typhus = form.Imunisasi_Typhus;
    this.Imunisasi_Campak = form.Imunisasi_Campak;
    this.Imunisasi_MMR = form.Imunisasi_MMR;
    this.Imunisasi_Lainnya_2 = form.Imunisasi_Lainnya_2;
    this.Imunisasi_Lainnya_2_Teks = form.Imunisasi_Lainnya_2_Teks;
    this.Imunisasi_Influenza = form.Imunisasi_Influenza;
    this.Imunisasi_Lainnya_1 = form.Imunisasi_Lainnya_1;
    this.Imunisasi_Lainnya_1_Teks = form.Imunisasi_Lainnya_1_Teks;
    this.BB_Lahir = form.BB_Lahir;
    this.PB_Lahir = form.PB_Lahir;
    this.ASI_Umur = form.ASI_Umur;
    this.Makan_Tambahan_Umur = form.Makan_Tambahan_Umur;
    this.Berjalan_Umur = form.Berjalan_Umur;
    this.Tengkurap_Umur = form.Tengkurap_Umur;
    this.Duduk_Umur = form.Duduk_Umur;
    this.Merangkak_Umur = form.Merangkak_Umur;
    this.Berdiri_Umur = form.Berdiri_Umur;
    this.Asesmen_Remaja_1 = form.Asesmen_Remaja_1;
    this.Asesmen_Remaja_2 = form.Asesmen_Remaja_2;
    this.Asesmen_Remaja_3 = form.Asesmen_Remaja_3;
    this.Asesmen_Remaja_4 = form.Asesmen_Remaja_4;
    this.Asesmen_Remaja_5 = form.Asesmen_Remaja_5;
    this.Asesmen_Remaja_6 = form.Asesmen_Remaja_6;
    this.Asesmen_Remaja_7 = form.Asesmen_Remaja_7;
    this.Asesmen_Remaja_8 = form.Asesmen_Remaja_8;
    this.Asesmen_Remaja_9 = form.Asesmen_Remaja_9;
    this.Asesmen_Remaja_10 = form.Asesmen_Remaja_10;
    this.Asesmen_Remaja_11 = form.Asesmen_Remaja_11;
    this.Asesmen_Remaja_12 = form.Asesmen_Remaja_12;
    this.PF_TD = form.PF_TD;
    this.PF_Nadi = form.PF_Nadi;
    this.PF_Suhu = form.PF_Suhu;
    this.PF_BB = form.PF_BB;
    this.PF_P = form.PF_P;
    this.PF_TB = form.PF_TB;
    this.Kesadaran_Radio = form.Kesadaran_Radio;
    this.Alergi_Reaksi_Radio = form.Alergi_Reaksi_Radio;
    this.Nyeri_Radio = form.Nyeri_Radio;
    this.Pengkajian_Nyeri = form.Pengkajian_Nyeri;
    this.Wajah_Radio = form.Wajah_Radio;
    this.Kaki_Radio = form.Kaki_Radio;
    this.Aktivitas_Radio = form.Aktivitas_Radio;
    this.Menangis_Radio = form.Menangis_Radio;
    this.Kenyamanan_Radio = form.Kenyamanan_Radio;
    this.Penyebab_Nyeri = form.Penyebab_Nyeri;
    this.Kualitas_Nyeri = form.Kualitas_Nyeri;
    this.Lokasi_Nyeri = form.Lokasi_Nyeri;
    this.Skala_Nyeri = form.Skala_Nyeri;
    this.Durasi_Nyeri = form.Durasi_Nyeri;
    this.Total_Skor = form.Total_Skor;
    this.Kategori_Nyeri = form.Kategori_Nyeri;
    this.Skala_Nyeri_Radio = form.Skala_Nyeri_Radio;
    this.Skrining_Gizi_1 = form.Skrining_Gizi_1;
    this.Skrining_Gizi_2 = form.Skrining_Gizi_2;
    this.Skrining_Gizi_3 = form.Skrining_Gizi_3;
    this.Skrining_Gizi_4 = form.Skrining_Gizi_4;
    this.Skrining_Gizi_Total = form.Skrining_Gizi_Total;
    this.Kategori_Nilai_Gizi = form.Kategori_Nilai_Gizi;
    this.Keterbatasan_Gerak_Radio = form.Keterbatasan_Gerak_Radio;
    this.Nyeri_Otot = form.Nyeri_Otot;
    this.Kelemahan = form.Kelemahan;
    this.Kaku_Otot = form.Kaku_Otot;
    this.Amputasi = form.Amputasi;
    this.Lemah_Otot = form.Lemah_Otot;
    this.Deformitas = form.Deformitas;
    this.Nyeri_Sendi = form.Nyeri_Sendi;
    this.Parese = form.Parese;
    this.Parese_Dibagian = form.Parese_Dibagian;
    this.Bengkak_Sendi = form.Bengkak_Sendi;
    this.Inkoordinasi = form.Inkoordinasi;
    this.Tidur_Malam = form.Tidur_Malam;
    this.Tidur_Siang = form.Tidur_Siang;
    this.Kesulitan_Tidur_Radio = form.Kesulitan_Tidur_Radio;
    this.Makan_1 = form.Makan_1;
    this.Makan_2 = form.Makan_2;
    this.Makan_3 = form.Makan_3;
    this.Makan_4 = form.Makan_4;
    this.Makan_5 = form.Makan_5;
    this.Makan_6 = form.Makan_6;
    this.Mandi_1 = form.Mandi_1;
    this.Mandi_2 = form.Mandi_2;
    this.Mandi_3 = form.Mandi_3;
    this.Mandi_4 = form.Mandi_4;
    this.Mandi_5 = form.Mandi_5;
    this.Mandi_6 = form.Mandi_6;
    this.Rawat_1 = form.Rawat_1;
    this.Rawat_2 = form.Rawat_2;
    this.Rawat_3 = form.Rawat_3;
    this.Rawat_4 = form.Rawat_4;
    this.Rawat_5 = form.Rawat_5;
    this.Rawat_6 = form.Rawat_6;
    this.Pakaian_1 = form.Pakaian_1;
    this.Pakaian_2 = form.Pakaian_2;
    this.Pakaian_3 = form.Pakaian_3;
    this.Pakaian_4 = form.Pakaian_4;
    this.Pakaian_5 = form.Pakaian_5;
    this.Pakaian_6 = form.Pakaian_6;
    this.BAK_1 = form.BAK_1;
    this.BAK_2 = form.BAK_2;
    this.BAK_3 = form.BAK_3;
    this.BAK_4 = form.BAK_4;
    this.BAK_5 = form.BAK_5;
    this.BAK_6 = form.BAK_6;
    this.BAB_1 = form.BAB_1;
    this.BAB_2 = form.BAB_2;
    this.BAB_3 = form.BAB_3;
    this.BAB_4 = form.BAB_4;
    this.BAB_5 = form.BAB_5;
    this.BAB_6 = form.BAB_6;
    this.Toilet_1 = form.Toilet_1;
    this.Toilet_2 = form.Toilet_2;
    this.Toilet_3 = form.Toilet_3;
    this.Toilet_4 = form.Toilet_4;
    this.Toilet_5 = form.Toilet_5;
    this.Toilet_6 = form.Toilet_6;
    this.Transfer_1 = form.Transfer_1;
    this.Transfer_2 = form.Transfer_2;
    this.Transfer_3 = form.Transfer_3;
    this.Transfer_4 = form.Transfer_4;
    this.Transfer_5 = form.Transfer_5;
    this.Transfer_6 = form.Transfer_6;
    this.Mobilitas_1 = form.Mobilitas_1;
    this.Mobilitas_2 = form.Mobilitas_2;
    this.Mobilitas_3 = form.Mobilitas_3;
    this.Mobilitas_4 = form.Mobilitas_4;
    this.Mobilitas_5 = form.Mobilitas_5;
    this.Mobilitas_6 = form.Mobilitas_6;
    this.Tangga_1 = form.Tangga_1;
    this.Tangga_2 = form.Tangga_2;
    this.Tangga_3 = form.Tangga_3;
    this.Tangga_4 = form.Tangga_4;
    this.Tangga_5 = form.Tangga_5;
    this.Tangga_6 = form.Tangga_6;
    this.Total_1 = form.Total_1;
    this.Total_2 = form.Total_2;
    this.Total_3 = form.Total_3;
    this.Total_4 = form.Total_4;
    this.Total_5 = form.Total_5;
    this.Total_6 = form.Total_6;
    this.Resiko_Jatuh_Radio = form.Resiko_Jatuh_Radio;
    this.Bicara_Radio = form.Bicara_Radio;
    this.Perlu_Penerjemah_Radio = form.Perlu_Penerjemah_Radio;
    this.Hambatan_Belajar_Radio = form.Hambatan_Belajar_Radio;
    this.Tingkat_Pendidikan_Radio = form.Tingkat_Pendidikan_Radio;
    this.Tingkat_Pendidikan_Lain_Teks = form.Tingkat_Pendidikan_Lain_Teks;
    this.Status_Ekonomi_Radio = form.Status_Ekonomi_Radio;
    this.Status_Psikologi_Radio = form.Status_Psikologi_Radio;
    this.Status_Psikologi_Tidak_Terganggu = form.Status_Psikologi_Tidak_Terganggu;
    this.Status_Psikologi_Cemas = form.Status_Psikologi_Cemas;
    this.Status_Psikologi_Takut = form.Status_Psikologi_Takut;
    this.Status_Psikologi_Marah = form.Status_Psikologi_Marah;
    this.Status_Psikologi_Panik = form.Status_Psikologi_Panik;
    this.Status_Mental_Radio = form.Status_Mental_Radio;
    this.Sosial_Radio = form.Sosial_Radio;
    this.Agama = form.Agama;
    this.Keyakinan = form.Keyakinan;
    this.Nilai_Nilai = form.Nilai_Nilai;
    this.Spiritual = form.Spiritual;
    this.Selama_Keperawatan = form.Selama_Keperawatan;
    this.Keperawatan_Persepsi_Sensori = form.Keperawatan_Persepsi_Sensori;
    this.Keperawatan_Penurunan_Kesadaran = form.Keperawatan_Penurunan_Kesadaran;
    this.Keperawatan_Nyeri = form.Keperawatan_Nyeri;
    this.Keperawatan_Resiko_Infeksi = form.Keperawatan_Resiko_Infeksi;
    this.Keperawatan_Intake_Output = form.Keperawatan_Intake_Output;
    this.Keperawatan_Resiko_Jatuh = form.Keperawatan_Resiko_Jatuh;
    this.Keperawatan_Hiperthermia = form.Keperawatan_Hiperthermia;
    this.Keperawatan_Tekanan_Intra = form.Keperawatan_Tekanan_Intra;
    this.Keperawatan_Kurang_Pengetahuan = form.Keperawatan_Kurang_Pengetahuan;
    this.Keperawatan_Lainnya = form.Keperawatan_Lainnya;
    this.Keperawatan_Lainnya_Masalah = form.Keperawatan_Lainnya_Masalah;
    this.Keperawatan_Lainnya_Rencana = form.Keperawatan_Lainnya_Rencana;
    this.ID_Perawat_Pengkaji = form.ID_Perawat_Pengkaji;
    this.TTD_Perawat_Pengkaji = form.TTD_Perawat_Pengkaji;
    this.Nama_Perawat_Pengkaji = form.Nama_Perawat_Pengkaji;
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
  }
}

export interface IInpatientInitialNursingAssessmentChildren extends IDataModel {
  form: IInpatientInitialNursingAssessmentChildrenForm;
  rawat_inap: any;
  ews: INursingEarlyWarning;
}

export class InpatientInitialNursingAssessmentChildren extends DataModel {
  form?: InpatientInitialNursingAssessmentChildrenForm;
  rawat_inap?: any
  ews?: INursingEarlyWarning;
  constructor(model: InpatientInitialNursingAssessmentChildren) {
    super(model);
    if (model.form) {
      this.form = new InpatientInitialNursingAssessmentChildrenForm(model.form);
    }
    if (model.rawat_inap) {
      this.rawat_inap = model.rawat_inap;
    }
    if (model.ews) {
      this.ews = model.ews;
    }
  }
}
