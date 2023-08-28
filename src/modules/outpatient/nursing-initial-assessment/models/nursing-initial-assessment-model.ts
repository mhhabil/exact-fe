import { DataModel, IDataModel } from "@src/shared/model";

export interface IJenisPenyakit {
  Dm: number;
  Ginjal: number;
  Hati: number;
  Jantung: number;
  Paru: number;
  Stroke: number;
  Kanker: number;
  Penurunan_Imunitas_Geriatri: number;
  Lain_lain: number;
}

export class JenisPenyakit {
  Dm: number;
  Hati: number;
  Paru: number;
  Ginjal: number;
  Kanker: number;
  Stroke: number;
  Jantung: number;
  Lain_lain: number;
  Penurunan_Imunitas_Geriatri: number;

  constructor(jenis: IJenisPenyakit) {
    this.Dm = jenis.Dm;
    this.Hati = jenis.Hati;
    this.Paru = jenis.Paru;
    this.Ginjal = jenis.Ginjal;
    this.Kanker = jenis.Kanker;
    this.Stroke = jenis.Stroke;
    this.Jantung = jenis.Jantung;
    this.Lain_lain = jenis.Lain_lain;
    this.Penurunan_Imunitas_Geriatri = jenis.Penurunan_Imunitas_Geriatri;
  }
}

export interface IKetergantunganTerhadap {
  Obat_obatan: number;
  Rokok: number;
  Alkohol: number;
  Lain_lain: number;
}

export class Ketergantungan_Terhadap {
  Rokok: number;
  Alkohol: number;
  Lain_lain: number;
  Obat_obatan: number;

  constructor(ketergantungan: IKetergantunganTerhadap) {
    this.Rokok = ketergantungan.Rokok;
    this.Alkohol = ketergantungan.Alkohol;
    this.Lain_lain = ketergantungan.Lain_lain;
    this.Obat_obatan = ketergantungan.Obat_obatan;
  }
}

export interface INursingInitialAssessmentFormModel {
  P: string;
  Bb: string;
  Tb: string;
  Td: string;
  Nadi: string;
  Suhu: string;
  Nyeri: string;
  Bicara: string;
  Agama_Id: string;
  Kesadaran: string;
  Tabel_Tio: number;
  ID_Petugas: string;
  Komplikasi: string;
  Tabel_Kaki: string;
  Total_Skor: string;
  Updated_At: string;
  Updated_By: string;
  Bicara_Text: string;
  Skala_Nyeri: string;
  Tabel_Jatuh: number;
  Tabel_Nyeri: number;
  Tabel_Wajah: string
  Asupan_Makan: string;
  Durasi_Nyeri: string;
  Lokasi_Nyeri: string;
  Nama_Petugas: string;
  Nyeri_Hilang: string;
  Skor_Nutrisi: string;
  Status_Nyeri: string;
  Cara_Berjalan: string;
  Status_Mental: string;
  Status_Sosial: string;
  Tabel_Infeksi: number;
  Tabel_Lainnya: number;
  Keluhan_Utama: string;
  Waktu_Operasi: string;
  Bahasa_Isyarat: string;
  Jenis_Penyakit: IJenisPenyakit;
  Riwayat_Alergi: string;
  Skrining_Nyeri: string;
  Status_Ekonomi: string;
  Tabel_Gangguan: number;
  Tabel_Menangis: string;
  Diagnosa_Khusus: string;
  Frekwensi_Nyeri: string;
  Tabel_Aktifitas: string;
  Hambatan_Belajar: string;
  Hasil_Total_Skor: string;
  Nutrisi_Turun_Bb: string;
  Penanggung_Jawab: string;
  Perlu_Penerjemah: string;
  Status_Psikologi: string;
  Tabel_Kenyamanan: string;
  Memegang_Penopang: string;
  Skor_Risiko_Jatuh: string;
  Status_Fungsional: string;
  Status_Mental_Text: string;
  Status_Ekonomi_Text: string;
  Tingkatan_Pendidikan: string;
  Hambatan_Belajar_Text: string;
  Jenis_Operasi_Dialami: string;
  Penanggung_Jawab_Nama: string;
  Perlu_Penerjemah_Text: string;
  Status_Psikologi_Text: string;
  Tabel_Masalah_Lainnya: string;
  Tabel_Rencana_Lainnya: string;
  Nyeri_Hilang_Lain_Text: string;
  Keterangan_Risiko_Jatuh: string;
  Ketergantungan_Terhadap: IKetergantunganTerhadap;
  Penanggung_Jawab_Alamat: string;
  Hubungan_Pasien_Keluarga: string;
  Mempunyai_Ketergantungan: string;
  Tabel_Kurang_Pengetahuan: number;
  Penanggung_Jawab_Hubungan: string;
  Riwayat_Alergi_Keterangan: string;
  Riwayat_Penyakit_Keluarga: string;
  Tingkatan_Pendidikan_Text: string;
  ID_Perawat_Pengkajian_Masuk: string;
  Status_Fungsional_Keterangan: string;
  TTD_Perawat_Pengkajian_Masuk: string;
  Beritahu_Dokter_Risiko_Cedera: string;
  Beritahu_Dokter_Risiko_Cedera_Waktu: string;
  Nama_Perawat_Pengkajian_Masuk: string;
  Jenis_Penyakit_Lain_Keterangan: string;
  Nama_Perawat_Pengkajian_Keluar: string;
  Beritahu_Dokter_Pemeriksaan_Fisik: string;
  Ketergantungan_Terhadap_Keterangan: string;
  Ketergantungan_Terhadap_Penjelasan: string;
  Status_Fungsional_Diberitahukan_Pukul: string;
  Beritahu_Dokter_Pemeriksaan_Fisik_Pukul: string;
  Tanggal_Waktu: string;
}

export class NursingInitialAssessmentFormModel {
  P: string;
  Bb: string;
  Tb: string;
  Td: string;
  Nadi: string;
  Suhu: string;
  Nyeri: string;
  Bicara: string;
  Agama_Id: string;
  Kesadaran: string;
  Tabel_Tio: number;
  ID_Petugas: string;
  Komplikasi: string;
  Tabel_Kaki: string;
  Total_Skor: string;
  Updated_At: string;
  Updated_By: string;
  Bicara_Text: string;
  Skala_Nyeri: string;
  Keluhan_Utama: string;
  Tabel_Jatuh: number;
  Tabel_Nyeri: number;
  Tabel_Wajah: string
  Asupan_Makan: string;
  Durasi_Nyeri: string;
  Lokasi_Nyeri: string;
  Nama_Petugas: string;
  Nyeri_Hilang: string;
  Skor_Nutrisi: string;
  Status_Nyeri: string;
  Cara_Berjalan: string;
  Status_Mental: string;
  Status_Sosial: string;
  Tabel_Infeksi: number;
  Tabel_Lainnya: number;
  Waktu_Operasi: string;
  Bahasa_Isyarat: string;
  Jenis_Penyakit: IJenisPenyakit;
  Riwayat_Alergi: string;
  Skrining_Nyeri: string;
  Status_Ekonomi: string;
  Tabel_Gangguan: number;
  Tabel_Menangis: string;
  Diagnosa_Khusus: string;
  Frekwensi_Nyeri: string;
  Tabel_Aktifitas: string;
  Hambatan_Belajar: string;
  Hasil_Total_Skor: string;
  Nutrisi_Turun_Bb: string;
  Penanggung_Jawab: string;
  Perlu_Penerjemah: string;
  Status_Psikologi: string;
  Tabel_Kenyamanan: string;
  Memegang_Penopang: string;
  Skor_Risiko_Jatuh: string;
  Status_Fungsional: string;
  Status_Mental_Text: string;
  Status_Ekonomi_Text: string;
  Tingkatan_Pendidikan: string;
  Hambatan_Belajar_Text: string;
  Jenis_Operasi_Dialami: string;
  Penanggung_Jawab_Nama: string;
  Perlu_Penerjemah_Text: string;
  Status_Psikologi_Text: string;
  Tabel_Masalah_Lainnya: string;
  Tabel_Rencana_Lainnya: string;
  Nyeri_Hilang_Lain_Text: string;
  Keterangan_Risiko_Jatuh: string;
  Ketergantungan_Terhadap: IKetergantunganTerhadap;
  Penanggung_Jawab_Alamat: string;
  Hubungan_Pasien_Keluarga: string;
  Mempunyai_Ketergantungan: string;
  Tabel_Kurang_Pengetahuan: number;
  Penanggung_Jawab_Hubungan: string;
  Riwayat_Alergi_Keterangan: string;
  Riwayat_Penyakit_Keluarga: string;
  Tingkatan_Pendidikan_Text: string;
  ID_Perawat_Pengkajian_Masuk: string;
  Status_Fungsional_Keterangan: string;
  TTD_Perawat_Pengkajian_Masuk: string;
  Beritahu_Dokter_Risiko_Cedera: string;
  Beritahu_Dokter_Risiko_Cedera_Waktu: string;
  Nama_Perawat_Pengkajian_Masuk: string;
  Jenis_Penyakit_Lain_Keterangan: string;
  Nama_Perawat_Pengkajian_Keluar: string;
  Beritahu_Dokter_Pemeriksaan_Fisik: string;
  Ketergantungan_Terhadap_Keterangan: string;
  Ketergantungan_Terhadap_Penjelasan: string;
  Status_Fungsional_Diberitahukan_Pukul: string;
  Beritahu_Dokter_Pemeriksaan_Fisik_Pukul: string;
  Tanggal_Waktu: string;

  constructor(form: INursingInitialAssessmentFormModel) {
    this.P = form.P;
    this.Bb = form.Bb;
    this.Tb = form.Tb;
    this.Td = form.Td;
    this.Nadi = form.Nadi;
    this.Suhu = form.Suhu;
    this.Nyeri = form.Nyeri;
    this.Bicara = form.Bicara;
    this.Agama_Id = form.Agama_Id;
    this.Keluhan_Utama = form.Keluhan_Utama;
    this.Kesadaran = form.Kesadaran;
    this.Tabel_Tio = form.Tabel_Tio;
    this.ID_Petugas = form.ID_Petugas;
    this.Komplikasi = form.Komplikasi;
    this.Total_Skor = form.Total_Skor;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
    this.Bicara_Text = form.Bicara_Text;
    this.Skala_Nyeri = form.Skala_Nyeri;
    this.Tabel_Jatuh = form.Tabel_Jatuh;
    this.Tabel_Nyeri = form.Tabel_Nyeri;
    this.Tabel_Wajah = form.Tabel_Wajah;
    this.Asupan_Makan = form.Asupan_Makan;
    this.Durasi_Nyeri = form.Durasi_Nyeri;
    this.Lokasi_Nyeri = form.Lokasi_Nyeri;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Nyeri_Hilang = form.Nyeri_Hilang;
    this.Skor_Nutrisi = form.Skor_Nutrisi;
    this.Status_Nyeri = form.Status_Nyeri;
    this.Cara_Berjalan = form.Cara_Berjalan;
    this.Status_Mental = form.Status_Mental;
    this.Status_Sosial = form.Status_Sosial;
    this.Tabel_Infeksi = form.Tabel_Infeksi;
    this.Tabel_Lainnya = form.Tabel_Lainnya;
    this.Waktu_Operasi = form.Waktu_Operasi;
    this.Tabel_Kaki = form.Tabel_Kaki;
    this.Tabel_Menangis = form.Tabel_Menangis;
    this.Tabel_Aktifitas = form.Tabel_Aktifitas;
    this.Tabel_Kenyamanan = form.Tabel_Kenyamanan;
    this.Bahasa_Isyarat = form.Bahasa_Isyarat;
    this.Jenis_Penyakit = form.Jenis_Penyakit;
    this.Riwayat_Alergi = form.Riwayat_Alergi;
    this.Skrining_Nyeri = form.Skrining_Nyeri;
    this.Status_Ekonomi = form.Status_Ekonomi;
    this.Tabel_Gangguan = form.Tabel_Gangguan;
    this.Diagnosa_Khusus = form.Diagnosa_Khusus;
    this.Frekwensi_Nyeri = form.Frekwensi_Nyeri;
    this.Hambatan_Belajar = form.Hambatan_Belajar;
    this.Hasil_Total_Skor = form.Hasil_Total_Skor;
    this.Nutrisi_Turun_Bb = form.Nutrisi_Turun_Bb;
    this.Penanggung_Jawab = form.Penanggung_Jawab;
    this.Perlu_Penerjemah = form.Perlu_Penerjemah;
    this.Status_Psikologi = form.Status_Psikologi;
    this.Memegang_Penopang = form.Memegang_Penopang;
    this.Skor_Risiko_Jatuh = form.Skor_Risiko_Jatuh;
    this.Status_Fungsional = form.Status_Fungsional;
    this.Status_Mental_Text = form.Status_Mental_Text;
    this.Status_Ekonomi_Text = form.Status_Ekonomi_Text;
    this.Tingkatan_Pendidikan = form.Tingkatan_Pendidikan;
    this.Hambatan_Belajar_Text = form.Hambatan_Belajar_Text;
    this.Jenis_Operasi_Dialami = form.Jenis_Operasi_Dialami;
    this.Penanggung_Jawab_Nama = form.Penanggung_Jawab_Nama;
    this.Perlu_Penerjemah_Text = form.Perlu_Penerjemah_Text;
    this.Status_Psikologi_Text = form.Status_Psikologi_Text;
    this.Tabel_Masalah_Lainnya = form.Tabel_Masalah_Lainnya;
    this.Tabel_Rencana_Lainnya = form.Tabel_Rencana_Lainnya;
    this.Nyeri_Hilang_Lain_Text = form.Nyeri_Hilang_Lain_Text;
    this.Keterangan_Risiko_Jatuh = form.Keterangan_Risiko_Jatuh;
    this.Ketergantungan_Terhadap = form.Ketergantungan_Terhadap;
    this.Penanggung_Jawab_Alamat = form.Penanggung_Jawab_Hubungan;
    this.Hubungan_Pasien_Keluarga = form.Hubungan_Pasien_Keluarga;
    this.Mempunyai_Ketergantungan = form.Mempunyai_Ketergantungan;
    this.Tabel_Kurang_Pengetahuan = form.Tabel_Kurang_Pengetahuan;
    this.Penanggung_Jawab_Hubungan = form.Penanggung_Jawab_Hubungan;
    this.Riwayat_Alergi_Keterangan = form.Riwayat_Alergi_Keterangan;
    this.Riwayat_Penyakit_Keluarga = form.Riwayat_Penyakit_Keluarga;
    this.Tingkatan_Pendidikan_Text = form.Tingkatan_Pendidikan_Text;
    this.ID_Perawat_Pengkajian_Masuk = form.ID_Perawat_Pengkajian_Masuk;
    this.Status_Fungsional_Keterangan = form.Status_Fungsional_Keterangan;
    this.TTD_Perawat_Pengkajian_Masuk = form.TTD_Perawat_Pengkajian_Masuk;
    this.Beritahu_Dokter_Risiko_Cedera = form.Beritahu_Dokter_Risiko_Cedera;
    this.Beritahu_Dokter_Risiko_Cedera_Waktu = form.Beritahu_Dokter_Risiko_Cedera_Waktu;
    this.Nama_Perawat_Pengkajian_Masuk = form.Nama_Perawat_Pengkajian_Masuk;
    this.Jenis_Penyakit_Lain_Keterangan = form.Jenis_Penyakit_Lain_Keterangan;
    this.Nama_Perawat_Pengkajian_Keluar = form.Nama_Perawat_Pengkajian_Keluar;
    this.Beritahu_Dokter_Pemeriksaan_Fisik = form.Beritahu_Dokter_Pemeriksaan_Fisik;
    this.Ketergantungan_Terhadap_Keterangan = form.Ketergantungan_Terhadap_Keterangan;
    this.Ketergantungan_Terhadap_Penjelasan = form.Ketergantungan_Terhadap_Penjelasan;
    this.Status_Fungsional_Diberitahukan_Pukul = form.Status_Fungsional_Diberitahukan_Pukul;
    this.Beritahu_Dokter_Pemeriksaan_Fisik_Pukul = form.Beritahu_Dokter_Pemeriksaan_Fisik_Pukul;
    this.Tanggal_Waktu = form.Tanggal_Waktu;
  }
}

export interface INursingInitialAssessmenttModel extends IDataModel{
  form: INursingInitialAssessmentFormModel;
}

export class NursingInitialAssessmenttModel extends DataModel {
  form: NursingInitialAssessmentFormModel;
  
  constructor(req: INursingInitialAssessmenttModel) {
    super(req)
    this.form = req.form;
  }
}

