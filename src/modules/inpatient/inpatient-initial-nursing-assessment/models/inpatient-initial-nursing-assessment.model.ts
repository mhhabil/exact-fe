import { DataModel, IDataModel } from '@shared/model';
import { INursingEarlyWarning } from '../../nursing-early-warning-scoring-table/models/nursing-early-warning-scoring.model';

export interface IBarthex {
  Makan: string;
  Mandi: string;
  Perawatan_Diri: string;
  Berpakaian: string;
  BAK: string;
  BAB: string;
  Penggunaan_Toilet: string;
  Transfer: string;
  Mobilitas: string;
  Naik_Turun_Tangga: string;
}

export interface IInpatientInitialNursingAssessmentForm {
  Nyeri_Hilang_Lainnya_Text: string;
  Skrining_Nyeri: string;
  Provocating: string;
  Quality: string;
  Region: string;
  Severity: string;
  Time: string;
  RPO: string;
  RPT: string;
  Agama: string;
  Makan: string;
  Agama_Id: string;
  Diagnosa: string;
  Hambatan: string;
  Penyakit?:   {
    Dm: number;
    Ginjal: number;
    Hati: number;
    Jantung: number;
    Paru: number;
    Stroke: number;
    Kanker: number;
    Geriatri: number;
    Lain: number;
  },
  Bersih_Diri: string;
  Jenis_Nyeri: string;
  Nutrisionis: string;
  Skala_Nyeri: string;
  Asupan_Makan: string;
  Kerabat_Nama: string;
  Nyeri_Hilang?: {
    Minum_Obat: number;
    Istirahat: number;
    Mendengar_Musik: number;
    Posisi_Tidur: number;
    Lainnya: number;
  },
  Risiko_Jatuh: string;
  Keluhan_Utama: string;
  Status_Mental: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Jenis_Hambatan?:  {
    Pendengaran: number;
    Penglihatan: number;
    Kognitif: number;
    Fisik: number;
    Budaya: number;
    Agama: number;
    Emosi: number;
    Bahasa: number;
    Lain: number;
  },
  Nilai_Nilai: string;
  Keyakinan: string;
  Pernah_Dirawat: string;
  Tempat_Tinggal: string;
  Diagnosa_Khusus: string;
  Lokasi_Nyeri_Id: string;
  Kerabat_Hubungan: string;
  Nutrisi_Turun_Bb: string;
  Rangsang_Defeksi: string;
  Implant_Terpasang: string;
  Pemeriksaan_Fisik?:  {
    Tekanan_Darah: string;
    Nadi: string;
    Pernafasan: string;
    Suhu: string;
    Berat_Badan: string;
    Tinggi_Badan: string;
  },
  Penggunaan_Jamban: string;
  Rangsang_Berkemih: string;
  Status_Fungsional: string;
  Status_Psikologis: string;
  Berpindah_Berjalan: string;
  Kegiatan_Spiritual: string;
  Kerabat_No_Telepon: string;
  Topik_Pembelajaran?:  {
    Diagnosis_Manajemen_Penyakit: number;
    Obat: number;
    Diet_Nutrisi: number;
    Keperawatan: number;
    Rehabilitasi: number;
    Manajemen_Nyeri: number;
    Lain: number;
  },
  Waktu_Penilaian_Id: string;
  Alat_Bantu_Jalan_Id: string;
  Nutrisionis_Tanggal: string;
  Riwayat_Alergi_Tidak_Check: string;
  Riwayat_Alergi_Obat_Check: string;
  Riwayat_Alergi_Makanan_Check: string;
  Riwayat_Alergi_Lainnya_Check: string;
  Riwayat_Alergi_Klip_Tanda_Check: string;
  Riwayat_Alergi_Tidak_Diketahui_Check: string;
  Keperawatan_1_Check: string;
  Keperawatan_2_Check: string;
  Keperawatan_3_Check: string;
  Keperawatan_4_Check: string;
  Keperawatan_5_Check: string;
  Keperawatan_6_Check: string;
  Keperawatan_7_Check: string;
  Keperawatan_8_Check: string;
  Keperawatan_9_Check: string;
  Perawatan_Diri: string;
  Berpakaian: string;
  Naik_Turun_Tangga: string;
  Masalah_Keperawatan_Lainnya_Text: string;
  Rencana_Keperawatan_Lainnya_Text: string;
  Sikap_Berbaring_Duduk: string;
  Intensitas_Aktivitas_Id: string;
  Intensitas_Istirahat_Id: string;
  Hubungan_Pasien_Keluarga: string;
  Penyakit_Lain_Keterangan: string;
  Tanggal_Masuk_Rawat_Inap: string;
  Pernah_Dirawat_Keterangan: string;
  Tempat_Tinggal_Keterangan: string;
  Riwayat_Alergi_Obat_Reaksi: string;
  ID_Perawat_Pengkajian_Masuk: string;
  ID_Perawat_Pengkajian_Keluar: string;
  Implant_Terpasang_Keterangan: string;
  Status_Fungsional_Keterangan: string;
  Status_Psikologis_Keterangan: string;
  TTD_Perawat_Pengkajian_Masuk: string;
  Riwayat_Alergi_Lainnya_Reaksi: string;
  Riwayat_Alergi_Makanan_Reaksi: string;
  Riwayat_Pengobatan_Sebelumnya: string;
  Status_Mental_Lain_Keterangan: string;
  TTD_Perawat_Pengkajian_Keluar: string;
  Jenis_Hambatan_Lain_Keterangan: string;
  Riwayat_Alergi_Obat_Keterangan: string;
  Riwayat_Alergi_Lainnya_Keterangan: string;
  Riwayat_Alergi_Makanan_Keterangan: string;
  Status_Mental_Kekerasan_Keterangan: string;
  Topik_Pembelajaran_Lain_Keterangan: string;
  Nama_Perawat_Pengkajian_Keluar: string;
  Nama_Perawat_Pengkajian_Masuk: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Sebelum_Sakit: IBarthex;
  Saat_Masuk_RS: IBarthex;
  Minggu_2_RS: IBarthex;
  Minggu_3_RS: IBarthex;
  Minggu_4_RS: IBarthex;
  Saat_Pulang: IBarthex;
  Saat_Masuk_Total: string;
  Saat_Pulang_Total: string;
  Sebelum_Sakit_Total: string;
  Minggu_2_Total: string;
  Minggu_3_Total: string;
  Minggu_4_Total: string;
}

export class InpatientInitialNursingAssessmentForm {
  Nyeri_Hilang_Lainnya_Text: string;
  Skrining_Nyeri: string;
  Provocating: string;
  Quality: string;
  Region: string;
  Severity: string;
  Time: string;
  RPO: string;
  RPT: string;
  Agama: string;
  Makan: string;
  Agama_Id: string;
  Diagnosa: string;
  Hambatan: string;
  Penyakit?:   {
    Dm?: number;
    Ginjal?: number;
    Hati?: number;
    Jantung?: number;
    Paru?: number;
    Stroke?: number;
    Kanker?: number;
    Geriatri?: number;
    Lain?: number;
  };
  Bersih_Diri: string;
  Jenis_Nyeri: string;
  Nutrisionis: string;
  Skala_Nyeri: string;
  Asupan_Makan: string;
  Kerabat_Nama: string;
  Nyeri_Hilang?: {
    Minum_Obat?: number;
    Istirahat?: number;
    Mendengar_Musik?: number;
    Posisi_Tidur?: number;
    Lainnya?: number;
  };
  Risiko_Jatuh: string;
  Keluhan_Utama: string;
  Status_Mental: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Jenis_Hambatan?:  {
    Pendengaran?: number;
    Penglihatan?: number;
    Kognitif?: number;
    Fisik?: number;
    Budaya?: number;
    Agama?: number;
    Emosi?: number;
    Bahasa?: number;
    Lain?: number;
  };
  Nilai_Nilai: string;
  Keyakinan: string;
  Pernah_Dirawat: string;
  Tempat_Tinggal: string;
  Diagnosa_Khusus: string;
  Lokasi_Nyeri_Id: string;
  Kerabat_Hubungan: string;
  Nutrisi_Turun_Bb: string;
  Rangsang_Defeksi: string;
  Implant_Terpasang: string;
  Pemeriksaan_Fisik?:  {
    Tekanan_Darah?: string;
    Nadi?: string;
    Pernafasan?: string;
    Suhu?: string;
    Berat_Badan?: string;
    Tinggi_Badan?: string;
  };
  Penggunaan_Jamban: string;
  Rangsang_Berkemih: string;
  Perawatan_Diri: string;
  Berpakaian: string;
  Naik_Turun_Tangga: string;
  Status_Fungsional: string;
  Status_Psikologis: string;
  Berpindah_Berjalan: string;
  Kegiatan_Spiritual: string;
  Kerabat_No_Telepon: string;
  Topik_Pembelajaran?:  {
    Diagnosis_Manajemen_Penyakit?: number;
    Obat?: number;
    Diet_Nutrisi?: number;
    Keperawatan?: number;
    Rehabilitasi?: number;
    Manajemen_Nyeri?: number;
    Lain?: number;
  };
  Waktu_Penilaian_Id: string;
  Alat_Bantu_Jalan_Id: string;
  Nutrisionis_Tanggal: string;
  Riwayat_Alergi_Tidak_Check: string;
  Riwayat_Alergi_Obat_Check: string;
  Riwayat_Alergi_Makanan_Check: string;
  Riwayat_Alergi_Lainnya_Check: string;
  Riwayat_Alergi_Klip_Tanda_Check: string;
  Riwayat_Alergi_Tidak_Diketahui_Check: string;
  Keperawatan_1_Check: string;
  Keperawatan_2_Check: string;
  Keperawatan_3_Check: string;
  Keperawatan_4_Check: string;
  Keperawatan_5_Check: string;
  Keperawatan_6_Check: string;
  Keperawatan_7_Check: string;
  Keperawatan_8_Check: string;
  Keperawatan_9_Check: string;
  Masalah_Keperawatan_Lainnya_Text: string;
  Rencana_Keperawatan_Lainnya_Text: string;
  Sikap_Berbaring_Duduk: string;
  Intensitas_Aktivitas_Id: string;
  Intensitas_Istirahat_Id: string;
  Hubungan_Pasien_Keluarga: string;
  Penyakit_Lain_Keterangan: string;
  Tanggal_Masuk_Rawat_Inap: string;
  Pernah_Dirawat_Keterangan: string;
  Tempat_Tinggal_Keterangan: string;
  Riwayat_Alergi_Obat_Reaksi: string;
  ID_Perawat_Pengkajian_Masuk: string;
  ID_Perawat_Pengkajian_Keluar: string;
  Implant_Terpasang_Keterangan: string;
  Status_Fungsional_Keterangan: string;
  Status_Psikologis_Keterangan: string;
  TTD_Perawat_Pengkajian_Masuk: string;
  Riwayat_Alergi_Lainnya_Reaksi: string;
  Riwayat_Alergi_Makanan_Reaksi: string;
  Riwayat_Pengobatan_Sebelumnya: string;
  Status_Mental_Lain_Keterangan: string;
  TTD_Perawat_Pengkajian_Keluar: string;
  Jenis_Hambatan_Lain_Keterangan: string;
  Riwayat_Alergi_Obat_Keterangan: string;
  Riwayat_Alergi_Lainnya_Keterangan: string;
  Riwayat_Alergi_Makanan_Keterangan: string;
  Status_Mental_Kekerasan_Keterangan: string;
  Topik_Pembelajaran_Lain_Keterangan: string;
  Nama_Perawat_Pengkajian_Keluar: string;
  Nama_Perawat_Pengkajian_Masuk: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Sebelum_Sakit: IBarthex;
  Saat_Masuk_RS: IBarthex;
  Minggu_2_RS: IBarthex;
  Minggu_3_RS: IBarthex;
  Minggu_4_RS: IBarthex;
  Saat_Pulang: IBarthex;
  Saat_Masuk_Total: string;
  Saat_Pulang_Total: string;
  Sebelum_Sakit_Total: string;
  Minggu_2_Total: string;
  Minggu_3_Total: string;
  Minggu_4_Total: string;
  constructor(form: InpatientInitialNursingAssessmentForm) {
    this.Nyeri_Hilang_Lainnya_Text = form.Nyeri_Hilang_Lainnya_Text;
    this.Skrining_Nyeri = form.Skrining_Nyeri;
    this.Provocating = form.Provocating;
    this.Quality = form.Quality;
    this.Region = form.Region;
    this.Severity = form.Severity;
    this.Time = form.Time;
    this.RPO = form.RPO;
    this.RPT = form.RPT;
    this.Agama = form.Agama;
    this.Makan = form.Makan;
    this.Agama_Id = form.Agama_Id;
    this.Diagnosa = form.Diagnosa;
    this.Hambatan = form.Hambatan;
    this.Penyakit = form.Penyakit;
    this.Bersih_Diri = form.Bersih_Diri;
    this.Jenis_Nyeri = form.Jenis_Nyeri;
    this.Nutrisionis = form.Nutrisionis;
    this.Skala_Nyeri = form.Skala_Nyeri;
    this.Asupan_Makan = form.Asupan_Makan;
    this.Kerabat_Nama = form.Kerabat_Nama;
    this.Nyeri_Hilang = form.Nyeri_Hilang;
    this.Risiko_Jatuh = form.Risiko_Jatuh;
    this.Keluhan_Utama = form.Keluhan_Utama;
    this.Status_Mental = form.Status_Mental;
    this.Gambar_Mata_OD = form.Gambar_Mata_OD;
    this.Gambar_Mata_OS = form.Gambar_Mata_OS;
    this.Jenis_Hambatan =  form.Jenis_Hambatan;
    this.Nilai_Nilai = form.Nilai_Nilai;
    this.Keyakinan = form.Keyakinan;
    this.Pernah_Dirawat = form.Pernah_Dirawat;
    this.Tempat_Tinggal = form.Tempat_Tinggal;
    this.Diagnosa_Khusus = form.Diagnosa_Khusus;
    this.Lokasi_Nyeri_Id = form.Lokasi_Nyeri_Id;
    this.Kerabat_Hubungan = form.Kerabat_Hubungan;
    this.Nutrisi_Turun_Bb = form.Nutrisi_Turun_Bb;
    this.Rangsang_Defeksi = form.Rangsang_Defeksi;
    this.Implant_Terpasang = form.Implant_Terpasang;
    this.Pemeriksaan_Fisik = form.Pemeriksaan_Fisik;
    this.Penggunaan_Jamban = form.Penggunaan_Jamban;
    this.Rangsang_Berkemih = form.Rangsang_Berkemih;
    this.Status_Fungsional = form.Status_Fungsional;
    this.Status_Psikologis = form.Status_Psikologis;
    this.Berpindah_Berjalan = form.Berpindah_Berjalan;
    this.Kegiatan_Spiritual = form.Kegiatan_Spiritual;
    this.Kerabat_No_Telepon = form.Kerabat_No_Telepon;
    this.Topik_Pembelajaran =  form.Topik_Pembelajaran;
    this.Waktu_Penilaian_Id = form.Waktu_Penilaian_Id;
    this.Alat_Bantu_Jalan_Id = form.Alat_Bantu_Jalan_Id;
    this.Nutrisionis_Tanggal = form.Nutrisionis_Tanggal;
    this.Riwayat_Alergi_Tidak_Check = form.Riwayat_Alergi_Tidak_Check;
    this.Riwayat_Alergi_Klip_Tanda_Check = form.Riwayat_Alergi_Klip_Tanda_Check;
    this.Riwayat_Alergi_Lainnya_Check = form.Riwayat_Alergi_Lainnya_Check;
    this.Riwayat_Alergi_Makanan_Check = form.Riwayat_Alergi_Makanan_Check;
    this.Riwayat_Alergi_Obat_Check = form.Riwayat_Alergi_Obat_Check;
    this.Riwayat_Alergi_Tidak_Diketahui_Check = form.Riwayat_Alergi_Tidak_Diketahui_Check;
    this.Sikap_Berbaring_Duduk = form.Sikap_Berbaring_Duduk;
    this.Intensitas_Aktivitas_Id = form.Intensitas_Aktivitas_Id;
    this.Intensitas_Istirahat_Id = form.Intensitas_Istirahat_Id;
    this.Hubungan_Pasien_Keluarga = form.Hubungan_Pasien_Keluarga;
    this.Penyakit_Lain_Keterangan = form.Penyakit_Lain_Keterangan;
    this.Tanggal_Masuk_Rawat_Inap = form.Tanggal_Masuk_Rawat_Inap;
    this.Pernah_Dirawat_Keterangan = form.Pernah_Dirawat_Keterangan;
    this.Tempat_Tinggal_Keterangan = form.Tempat_Tinggal_Keterangan;
    this.Riwayat_Alergi_Obat_Reaksi = form.Riwayat_Alergi_Obat_Reaksi;
    this.ID_Perawat_Pengkajian_Masuk = form.ID_Perawat_Pengkajian_Masuk;
    this.ID_Perawat_Pengkajian_Keluar = form.ID_Perawat_Pengkajian_Keluar;
    this.Implant_Terpasang_Keterangan = form.Implant_Terpasang_Keterangan;
    this.Status_Fungsional_Keterangan = form.Status_Fungsional_Keterangan;
    this.Status_Psikologis_Keterangan = form.Status_Psikologis_Keterangan;
    this.TTD_Perawat_Pengkajian_Masuk = form.TTD_Perawat_Pengkajian_Masuk;
    this.Riwayat_Alergi_Lainnya_Reaksi = form.Riwayat_Alergi_Lainnya_Reaksi;
    this.Riwayat_Alergi_Makanan_Reaksi = form.Riwayat_Alergi_Makanan_Reaksi;
    this.Riwayat_Pengobatan_Sebelumnya = form.Riwayat_Pengobatan_Sebelumnya;
    this.Status_Mental_Lain_Keterangan = form.Status_Mental_Lain_Keterangan;
    this.TTD_Perawat_Pengkajian_Keluar = form.TTD_Perawat_Pengkajian_Keluar;
    this.Jenis_Hambatan_Lain_Keterangan = form.Jenis_Hambatan_Lain_Keterangan;
    this.Riwayat_Alergi_Obat_Keterangan = form.Riwayat_Alergi_Obat_Keterangan;
    this.Riwayat_Alergi_Lainnya_Keterangan = form.Riwayat_Alergi_Lainnya_Keterangan;
    this.Riwayat_Alergi_Makanan_Keterangan = form.Riwayat_Alergi_Makanan_Keterangan;
    this.Status_Mental_Kekerasan_Keterangan = form.Status_Mental_Kekerasan_Keterangan;
    this.Topik_Pembelajaran_Lain_Keterangan = form.Topik_Pembelajaran_Lain_Keterangan;
    this.Nama_Perawat_Pengkajian_Keluar = form.Nama_Perawat_Pengkajian_Keluar;
    this.Nama_Perawat_Pengkajian_Masuk = form.Nama_Perawat_Pengkajian_Masuk;
    this.Keperawatan_1_Check = form.Keperawatan_1_Check;
    this.Keperawatan_2_Check = form.Keperawatan_2_Check;
    this.Keperawatan_3_Check = form.Keperawatan_3_Check;
    this.Keperawatan_4_Check = form.Keperawatan_4_Check;
    this.Keperawatan_5_Check = form.Keperawatan_5_Check;
    this.Keperawatan_6_Check = form.Keperawatan_6_Check;
    this.Keperawatan_7_Check = form.Keperawatan_7_Check;
    this.Keperawatan_8_Check = form.Keperawatan_8_Check;
    this.Keperawatan_9_Check = form.Keperawatan_9_Check;
    this.Masalah_Keperawatan_Lainnya_Text = form.Masalah_Keperawatan_Lainnya_Text;
    this.Rencana_Keperawatan_Lainnya_Text = form.Rencana_Keperawatan_Lainnya_Text;
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Perawatan_Diri = form.Perawatan_Diri;
    this.Berpakaian = form.Berpakaian;
    this.Naik_Turun_Tangga = form.Naik_Turun_Tangga;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
    this.Sebelum_Sakit = form.Sebelum_Sakit;
    this.Saat_Masuk_RS = form.Saat_Masuk_RS;
    this.Minggu_2_RS = form.Minggu_2_RS;
    this.Minggu_3_RS = form.Minggu_3_RS;
    this.Minggu_4_RS = form.Minggu_4_RS;
    this.Saat_Pulang = form.Saat_Pulang;
    this.Saat_Masuk_Total = form.Saat_Masuk_Total;
    this.Saat_Pulang_Total = form.Saat_Pulang_Total;
    this.Sebelum_Sakit_Total = form.Sebelum_Sakit_Total;
    this.Minggu_2_Total = form.Minggu_2_Total;
    this.Minggu_3_Total = form.Minggu_3_Total;
    this.Minggu_4_Total = form.Minggu_4_Total;
  }
}

export interface IInpatientInitialNursingAssessment extends IDataModel {
  form: IInpatientInitialNursingAssessmentForm;
  rawat_inap: any;
  ews: INursingEarlyWarning;
}

export class InpatientInitialNursingAssessment extends DataModel {
  form?: InpatientInitialNursingAssessmentForm;
  rawat_inap?: any
  ews?: INursingEarlyWarning;
  constructor(model: InpatientInitialNursingAssessment) {
    super(model);
    if (model.form) {
      this.form = new InpatientInitialNursingAssessmentForm(model.form);
    }
    if (model.rawat_inap) {
      this.rawat_inap = model.rawat_inap;
    }
    if (model.ews) {
      this.ews = model.ews;
    }
  }
}
