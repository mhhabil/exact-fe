import { DataModel, IDataModel } from "@src/shared/model";

export interface ITriageFormModel {
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Cara_Datang: string;
  Respon_Time: string;
  Nama_Petugas: string;
  Warna_Triase: string;
  Jenis_Emergency: string;
  Waktu_Kedatangan: string;
  Kesadaran_1_GCS_9: number;
  Kesadaran_3_Bebas: number;
  Kesadaran_6_GCS_0: number;
  Sirkulasi_2_Pucat: number;
  Jenis_Kasus_Trauma: string;
  Kesadaran_1_Kejang: number;
  Kesadaran_3_Apatis: number;
  Kesadaran_4_GCS_15: number;
  Kesadaran_5_GCS_15: number;
  Kesadaran_Kategori: string;
  Pernafasan_2_Mengi: number;
  Pernafasan_3_Mengi: number;
  Pernafasan_3_Sesak: number;
  Pernafasan_6_Minus: number;
  Sirkulasi_Kategori: string;
  Jalan_Nafas_2_Bebas: number;
  Jalan_Nafas_3_Bebas: number;
  Jalan_Nafas_4_Bebas: number;
  Jalan_Nafas_5_Bebas: number;
  Kesadaran_2_Gelisah: number;
  Pernafasan_3_Normal: number;
  Pernafasan_4_Normal: number;
  Pernafasan_5_Normal: number;
  Pernafasan_Kategori: string;
  Sirkulasi_3_TDD_100: number;
  Sirkulasi_3_TDS_160: number;
  Tanda_Lain_Kategori: string;
  Jalan_Nafas_Kategori: string;
  Kesadaran_2_GCS_9_12: number;
  Kesadaran_3_Samnolen: number;
  Jalan_Nafas_2_Ancaman: number;
  Kesadaran_3_GCS_12_15: number;
  Pernafasan_1_Sianosis: number;
  Pernafasan_2_Takipnoe: number;
  Sirkulasi_2_Takikardi: number;
  Sirkulasi_3_Nadi_Kuat: number;
  Sirkulasi_4_Nadi_Kuat: number;
  Sirkulasi_4_TDD_70_90: number;
  Sirkulasi_5_Nadi_Kuat: number;
  Sirkulasi_5_TDD_70_90: number;
  Sirkulasi_6_TDS_Minus: number;
  Jalan_Nafas_1_Sumbatan: number;
  Jenis_Kasus_Kecelakaan: string;
  Kesadaran_2_Nyeri_Dada: number;
  Pernafasan_1_Bradipnoe: number;
  Sirkulasi_2_Bradikardi: number;
  Sirkulasi_3_Takikardia: number;
  Sirkulasi_6_Nadi_Minus: number;
  Jalan_Nafas_6_Tidak_Ada: number;
  Kesadaran_2_Hemiparesis: number;
  Sirkulasi_2_CRT_2_Detik: number;
  Sirkulasi_4_Nadi_Normal: number;
  Sirkulasi_4_TDS_100_120: number;
  Sirkulasi_5_Nadi_Normal: number;
  Sirkulasi_5_TDS_100_120: number;
  Tanda_Lain_4_Nyeri_Mata: number;
  Sirkulasi_1_Akral_Dingin: number;
  Sirkulasi_2_Akral_Dingin: number;
  Tanda_Lain_1_Threatening: number;
  Tanda_Lain_6_Visus_Minus: number;
  Sirkulasi_1_Henti_Jantung: number;
  Tanda_Lain_2_Trauma_Kimia: number;
  Tanda_Lain_3_Nyeri_Sedang: number;
  Tanda_Lain_4_Visus_Normal: number;
  Tanda_Lain_5_Visus_Normal: number;
  Pernafasan_1_Hipoventilasi: number;
  Tanda_Lain_2_Trauma_Tembus: number;
  Kesadaran_6_Tanda_Kehidupan: number;
  Tanda_Lain_2_Nyeri_Mendadak: number;
  Tanda_Lain_3_Visus_Abnormal: number;
  Kesadaran_1_Tidak_Ada_Respon: number;
  Tanda_Lain_2_Penurunan_Visus: number;
  Tanda_Lain_5_Tidak_Ada_Nyeri: number;
  Sirkulasi_1_Nadi_Tidak_Teraba: number;
  Sirkulasi_2_Nadi_Teraba_Lemah: number;
  Sirkulasi_6_Frekuensi_Nadi_Minus: number;
  TTD_Perawat: string;
  ID_Perawat: string;
  Nama_Perawat: string;
}

export class TriageFormModel {
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Cara_Datang: string;
  Respon_Time: string;
  Nama_Petugas: string;
  Warna_Triase: string;
  Jenis_Emergency: string;
  Waktu_Kedatangan: string;
  Kesadaran_1_GCS_9: number;
  Kesadaran_3_Bebas: number;
  Kesadaran_6_GCS_0: number;
  Sirkulasi_2_Pucat: number;
  Jenis_Kasus_Trauma: string;
  Kesadaran_1_Kejang: number;
  Kesadaran_3_Apatis: number;
  Kesadaran_4_GCS_15: number;
  Kesadaran_5_GCS_15: number;
  Kesadaran_Kategori: string;
  Pernafasan_2_Mengi: number;
  Pernafasan_3_Mengi: number;
  Pernafasan_3_Sesak: number;
  Pernafasan_6_Minus: number;
  Sirkulasi_Kategori: string;
  Jalan_Nafas_2_Bebas: number;
  Jalan_Nafas_3_Bebas: number;
  Jalan_Nafas_4_Bebas: number;
  Jalan_Nafas_5_Bebas: number;
  Kesadaran_2_Gelisah: number;
  Pernafasan_3_Normal: number;
  Pernafasan_4_Normal: number;
  Pernafasan_5_Normal: number;
  Pernafasan_Kategori: string;
  Sirkulasi_3_TDD_100: number;
  Sirkulasi_3_TDS_160: number;
  Tanda_Lain_Kategori: string;
  Jalan_Nafas_Kategori: string;
  Kesadaran_2_GCS_9_12: number;
  Kesadaran_3_Samnolen: number;
  Jalan_Nafas_2_Ancaman: number;
  Kesadaran_3_GCS_12_15: number;
  Pernafasan_1_Sianosis: number;
  Pernafasan_2_Takipnoe: number;
  Sirkulasi_2_Takikardi: number;
  Sirkulasi_3_Nadi_Kuat: number;
  Sirkulasi_4_Nadi_Kuat: number;
  Sirkulasi_4_TDD_70_90: number;
  Sirkulasi_5_Nadi_Kuat: number;
  Sirkulasi_5_TDD_70_90: number;
  Sirkulasi_6_TDS_Minus: number;
  Jalan_Nafas_1_Sumbatan: number;
  Jenis_Kasus_Kecelakaan: string;
  Kesadaran_2_Nyeri_Dada: number;
  Pernafasan_1_Bradipnoe: number;
  Sirkulasi_2_Bradikardi: number;
  Sirkulasi_3_Takikardia: number;
  Sirkulasi_6_Nadi_Minus: number;
  Jalan_Nafas_6_Tidak_Ada: number;
  Kesadaran_2_Hemiparesis: number;
  Sirkulasi_2_CRT_2_Detik: number;
  Sirkulasi_4_Nadi_Normal: number;
  Sirkulasi_4_TDS_100_120: number;
  Sirkulasi_5_Nadi_Normal: number;
  Sirkulasi_5_TDS_100_120: number;
  Tanda_Lain_4_Nyeri_Mata: number;
  Sirkulasi_1_Akral_Dingin: number;
  Sirkulasi_2_Akral_Dingin: number;
  Tanda_Lain_1_Threatening: number;
  Tanda_Lain_6_Visus_Minus: number;
  Sirkulasi_1_Henti_Jantung: number;
  Tanda_Lain_2_Trauma_Kimia: number;
  Tanda_Lain_3_Nyeri_Sedang: number;
  Tanda_Lain_4_Visus_Normal: number;
  Tanda_Lain_5_Visus_Normal: number;
  Pernafasan_1_Hipoventilasi: number;
  Tanda_Lain_2_Trauma_Tembus: number;
  Kesadaran_6_Tanda_Kehidupan: number;
  Tanda_Lain_2_Nyeri_Mendadak: number;
  Tanda_Lain_3_Visus_Abnormal: number;
  Kesadaran_1_Tidak_Ada_Respon: number;
  Tanda_Lain_2_Penurunan_Visus: number;
  Tanda_Lain_5_Tidak_Ada_Nyeri: number;
  Sirkulasi_1_Nadi_Tidak_Teraba: number;
  Sirkulasi_2_Nadi_Teraba_Lemah: number;
  Sirkulasi_6_Frekuensi_Nadi_Minus: number;
  TTD_Perawat: string;
  ID_Perawat: string;
  Nama_Perawat: string;

  constructor(req: ITriageFormModel) {
    this.ID_Petugas = req.ID_Petugas;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Cara_Datang = req.Cara_Datang;
    this.Respon_Time = req.Respon_Time;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Warna_Triase = req.Warna_Triase;
    this.Jenis_Emergency = req.Jenis_Emergency;
    this.Waktu_Kedatangan = req.Waktu_Kedatangan;
    this.Kesadaran_1_GCS_9 = req.Kesadaran_1_GCS_9;
    this.Kesadaran_3_Bebas = req.Kesadaran_3_Bebas;
    this.Kesadaran_6_GCS_0 = req.Kesadaran_6_GCS_0;
    this.Sirkulasi_2_Pucat = req.Sirkulasi_2_Pucat;
    this.Jenis_Kasus_Trauma = req.Jenis_Kasus_Trauma;
    this.Kesadaran_1_Kejang = req.Kesadaran_1_Kejang;
    this.Kesadaran_3_Apatis = req.Kesadaran_3_Apatis;
    this.Kesadaran_4_GCS_15 = req.Kesadaran_4_GCS_15;
    this.Kesadaran_5_GCS_15 = req.Kesadaran_5_GCS_15;
    this.Kesadaran_Kategori = req.Kesadaran_Kategori;
    this.Pernafasan_2_Mengi = req.Pernafasan_2_Mengi;
    this.Pernafasan_3_Mengi = req.Pernafasan_3_Mengi;
    this.Pernafasan_3_Sesak = req.Pernafasan_3_Sesak;
    this.Pernafasan_6_Minus = req.Pernafasan_6_Minus;
    this.Sirkulasi_Kategori = req.Sirkulasi_Kategori;
    this.Jalan_Nafas_2_Bebas = req.Jalan_Nafas_2_Bebas;
    this.Jalan_Nafas_3_Bebas = req.Jalan_Nafas_3_Bebas;
    this.Jalan_Nafas_4_Bebas = req.Jalan_Nafas_4_Bebas;
    this.Jalan_Nafas_5_Bebas = req.Jalan_Nafas_5_Bebas;
    this.Kesadaran_2_Gelisah = req.Kesadaran_2_Gelisah;
    this.Pernafasan_3_Normal = req.Pernafasan_3_Normal;
    this.Pernafasan_4_Normal = req.Pernafasan_4_Normal;
    this.Pernafasan_5_Normal = req.Pernafasan_5_Normal;
    this.Pernafasan_Kategori = req.Pernafasan_Kategori;
    this.Sirkulasi_3_TDD_100 = req.Sirkulasi_3_TDD_100;
    this.Sirkulasi_3_TDS_160 = req.Sirkulasi_3_TDS_160;
    this.Tanda_Lain_Kategori = req.Tanda_Lain_Kategori;
    this.Jalan_Nafas_Kategori = req.Jalan_Nafas_Kategori;
    this.Kesadaran_2_GCS_9_12 = req.Kesadaran_2_GCS_9_12;
    this.Kesadaran_3_Samnolen = req.Kesadaran_3_Samnolen;
    this.Jalan_Nafas_2_Ancaman = req.Jalan_Nafas_2_Ancaman;
    this.Kesadaran_3_GCS_12_15 = req.Kesadaran_3_GCS_12_15;
    this.Pernafasan_1_Sianosis = req.Pernafasan_1_Sianosis;
    this.Pernafasan_2_Takipnoe = req.Pernafasan_2_Takipnoe;
    this.Sirkulasi_2_Takikardi = req.Sirkulasi_2_Takikardi;
    this.Sirkulasi_3_Nadi_Kuat = req.Sirkulasi_3_Nadi_Kuat;
    this.Sirkulasi_4_Nadi_Kuat = req.Sirkulasi_4_Nadi_Kuat;
    this.Sirkulasi_4_TDD_70_90 = req.Sirkulasi_4_TDD_70_90;
    this.Sirkulasi_5_Nadi_Kuat = req.Sirkulasi_5_Nadi_Kuat;
    this.Sirkulasi_5_TDD_70_90 = req.Sirkulasi_5_TDD_70_90;
    this.Sirkulasi_6_TDS_Minus = req.Sirkulasi_6_TDS_Minus;
    this.Jalan_Nafas_1_Sumbatan = req.Jalan_Nafas_1_Sumbatan;
    this.Jenis_Kasus_Kecelakaan = req.Jenis_Kasus_Kecelakaan;
    this.Kesadaran_2_Nyeri_Dada = req.Kesadaran_2_Nyeri_Dada;
    this.Pernafasan_1_Bradipnoe = req.Pernafasan_1_Bradipnoe;
    this.Sirkulasi_2_Bradikardi = req.Sirkulasi_2_Bradikardi;
    this.Sirkulasi_3_Takikardia = req.Sirkulasi_3_Takikardia;
    this.Sirkulasi_6_Nadi_Minus = req.Sirkulasi_6_Nadi_Minus;
    this.Jalan_Nafas_6_Tidak_Ada = req.Jalan_Nafas_6_Tidak_Ada;
    this.Kesadaran_2_Hemiparesis = req.Kesadaran_2_Hemiparesis;
    this.Sirkulasi_2_CRT_2_Detik = req.Sirkulasi_2_CRT_2_Detik;
    this.Sirkulasi_4_Nadi_Normal = req.Sirkulasi_4_Nadi_Normal;
    this.Sirkulasi_4_TDS_100_120 = req.Sirkulasi_4_TDS_100_120;
    this.Sirkulasi_5_Nadi_Normal = req.Sirkulasi_5_Nadi_Normal;
    this.Sirkulasi_5_TDS_100_120 = req.Sirkulasi_5_TDS_100_120;
    this.Tanda_Lain_4_Nyeri_Mata = req.Tanda_Lain_4_Nyeri_Mata;
    this.Sirkulasi_1_Akral_Dingin = req.Sirkulasi_1_Akral_Dingin;
    this.Sirkulasi_2_Akral_Dingin = req.Sirkulasi_2_Akral_Dingin;
    this.Tanda_Lain_1_Threatening = req.Tanda_Lain_1_Threatening;
    this.Tanda_Lain_6_Visus_Minus = req.Tanda_Lain_6_Visus_Minus;
    this.Sirkulasi_1_Henti_Jantung = req.Sirkulasi_1_Henti_Jantung;
    this.Tanda_Lain_2_Trauma_Kimia = req.Tanda_Lain_2_Trauma_Kimia;
    this.Tanda_Lain_3_Nyeri_Sedang = req.Tanda_Lain_3_Nyeri_Sedang;
    this.Tanda_Lain_4_Visus_Normal = req.Tanda_Lain_4_Visus_Normal;
    this.Tanda_Lain_5_Visus_Normal = req.Tanda_Lain_5_Visus_Normal;
    this.Pernafasan_1_Hipoventilasi = req.Pernafasan_1_Hipoventilasi;
    this.Tanda_Lain_2_Trauma_Tembus = req.Tanda_Lain_2_Trauma_Tembus;
    this.Kesadaran_6_Tanda_Kehidupan = req.Kesadaran_6_Tanda_Kehidupan;
    this.Tanda_Lain_2_Nyeri_Mendadak = req.Tanda_Lain_2_Nyeri_Mendadak;
    this.Tanda_Lain_3_Visus_Abnormal = req.Tanda_Lain_3_Visus_Abnormal;
    this.Kesadaran_1_Tidak_Ada_Respon = req.Kesadaran_1_Tidak_Ada_Respon;
    this.Tanda_Lain_2_Penurunan_Visus = req.Tanda_Lain_2_Penurunan_Visus;
    this.Tanda_Lain_5_Tidak_Ada_Nyeri = req.Tanda_Lain_5_Tidak_Ada_Nyeri;
    this.Sirkulasi_1_Nadi_Tidak_Teraba = req.Sirkulasi_1_Nadi_Tidak_Teraba;
    this.Sirkulasi_2_Nadi_Teraba_Lemah = req.Sirkulasi_2_Nadi_Teraba_Lemah;
    this.Sirkulasi_6_Frekuensi_Nadi_Minus = req.Sirkulasi_6_Frekuensi_Nadi_Minus;
    this.TTD_Perawat = req.TTD_Perawat;
    this.ID_Perawat = req.ID_Perawat;
    this.Nama_Perawat = req.Nama_Perawat;
  }

  static createFromJson(json: ITriageFormModel) {
    return new TriageFormModel(json);
  }
}

export interface ITriageForm extends IDataModel {
  form: ITriageFormModel;
}

export class TriageForm extends DataModel {
  form: TriageFormModel;

  constructor(req: ITriageForm) {
    super(req);
    this.form = req.form;
  }
}
