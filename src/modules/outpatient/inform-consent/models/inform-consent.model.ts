import { DataModel, IDataModel } from "@src/shared/model"

export interface IDoctorsConsentFormModel {
  Kota: string
  Waktu: string
  ID_Saksi: string
  ID_Petugas: string
  Nama_Saksi: string
  Updated_At: string
  Updated_By: string
  Pasien_Kota: string
  Nama_Petugas: string
  Tindakan_Operasi: string
  Dokter_Pelaksana: string
  Tanda_Tangan: string
  Pernyataan_Id: string
  Pasien_Tanggal: string
  Tanda_Tangan_JK: string
  Tanda_Tangan_Nama: string
  Tanda_Tangan_Telp: string
  Tanda_Tangan_Saksi: string
  Nama_Saksi_Keluarga: string
  Tanda_Tangan_Alamat: string
  Tanda_Tangan_Pasien: string
  Tanda_Tangan_Saksi_2: string
  Nama_Dokter_Pelaksana: string
  Tanda_Tangan_Hubungan: string
  Tanda_Tangan_TglLahir: string
  Tanggal_Tanda_Tangan: string
  Tanggal_TTD: string
}

export class DoctorsConsentFormModel {
  Kota: string
  Waktu: string
  ID_Saksi: string
  ID_Petugas: string
  Nama_Saksi: string
  Dokter_Pelaksana: string
  Tindakan_Operasi: string
  Updated_At: string
  Updated_By: string
  Pasien_Kota: string
  Nama_Petugas: string
  Tanda_Tangan: string
  Pernyataan_Id: string
  Pasien_Tanggal: string
  Tanda_Tangan_JK: string
  Tanda_Tangan_Nama: string
  Tanda_Tangan_Telp: string
  Tanda_Tangan_Saksi: string
  Nama_Saksi_Keluarga: string
  Tanda_Tangan_Alamat: string
  Tanda_Tangan_Pasien: string
  Tanda_Tangan_Saksi_2: string
  Nama_Dokter_Pelaksana: string
  Tanda_Tangan_Hubungan: string
  Tanda_Tangan_TglLahir: string
  Tanggal_Tanda_Tangan: string
  Tanggal_TTD: string

  constructor(req: IDoctorsConsentFormModel) {
    this.Kota = req.Kota;
    this.Waktu = req.Waktu;
    this.ID_Saksi = req.ID_Saksi;
    this.ID_Petugas = req.ID_Petugas;
    this.Nama_Saksi = req.Nama_Saksi;
    this.Dokter_Pelaksana = req.Dokter_Pelaksana;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Pasien_Kota = req.Pasien_Kota;
    this.Tindakan_Operasi = req.Tindakan_Operasi;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Tanda_Tangan = req.Tanda_Tangan;
    this.Pernyataan_Id = req.Pernyataan_Id;
    this.Pasien_Tanggal = req.Pasien_Tanggal;
    this.Tanda_Tangan_JK = req.Tanda_Tangan_JK;
    this.Tanda_Tangan_Nama = req.Tanda_Tangan_Nama;
    this.Tanda_Tangan_Telp = req.Tanda_Tangan_Telp;
    this.Tanda_Tangan_Saksi = req.Tanda_Tangan_Saksi;
    this.Nama_Saksi_Keluarga = req.Nama_Saksi_Keluarga;
    this.Tanda_Tangan_Alamat = req.Tanda_Tangan_Alamat;
    this.Tanda_Tangan_Pasien = req.Tanda_Tangan_Pasien;
    this.Tanda_Tangan_Saksi_2 = req.Tanda_Tangan_Saksi_2;
    this.Nama_Dokter_Pelaksana = req.Nama_Dokter_Pelaksana;
    this.Tanda_Tangan_Hubungan = req.Tanda_Tangan_Hubungan;
    this.Tanda_Tangan_TglLahir = req.Tanda_Tangan_TglLahir;
    this.Tanggal_Tanda_Tangan = req.Tanggal_Tanda_Tangan;
    this.Tanggal_TTD = req.Tanggal_TTD;
  }

  static createFromJson(json: IDoctorsConsentFormModel) {
    return new DoctorsConsentFormModel(json);
  }
}

export interface IProvisionOfInformationFormModel {
  Risiko: string
  Tujuan: string
  Hal_Lain: string
  Diagnosis: string
  Nama_Wali: string
  Prognosis: string
  Tata_Cara: string
  ID_Petugas: string
  Komplikasi: string
  TTD_Pasien: string
  Updated_At: string
  Updated_By: string
  Nama_Petugas: string
  Risiko_Check: string
  Tujuan_Check: string
  Hal_Lain_Check: string
  Dasar_Diagnosis: string
  Diagnosis_Check: string
  Prognosis_Check: string
  Tata_Cara_Check: string
  Diagnosis_Custom: string
  Dokter_Pelaksana: string
  Komplikasi_Check: string
  Alternatif_Risiko: string
  Indikasi_Tindakan: string
  Penerima_Informasi: string
  Hal_Lain_Konsultasi: number
  ID_Dokter_Pelaksana: string
  Tindakan_Kedokteran: string
  ID_Pemberi_Informasi: string
  TTD_Dokter_Pelaksana: string
  Dasar_Diagnosis_Check: string
  Nama_Dokter_Pelaksana: string
  Tata_Cara_Tipe_Sedasi: number
  Nama_Pemberi_Informasi: string
  Alternatif_Resiko_Check: string
  Indikasi_Tindakan_Check: string
  Tata_Cara_Uraian_Singkat: number
  Nama_Tanda_Tangan_Petugas: string
  Tindakan_Kedokteran_Check: string
  Hal_Lain_Perluasan_Tindakan: number
  Alternatif_Risiko_Pilihan_Pengobatan: number
  Nama_Template : string
}

export class ProvisionOfInformationFormModel {
  Risiko: string
  Tujuan: string
  Hal_Lain: string
  Diagnosis: string
  Nama_Wali: string
  Prognosis: string
  Tata_Cara: string
  ID_Petugas: string
  Komplikasi: string
  TTD_Pasien: string
  Updated_At: string
  Updated_By: string
  Nama_Petugas: string
  Risiko_Check: string
  Tujuan_Check: string
  Hal_Lain_Check: string
  Dasar_Diagnosis: string
  Diagnosis_Check: string
  Prognosis_Check: string
  Tata_Cara_Check: string
  Diagnosis_Custom: string
  Dokter_Pelaksana: string
  Komplikasi_Check: string
  Alternatif_Risiko: string
  Indikasi_Tindakan: string
  Penerima_Informasi: string
  Hal_Lain_Konsultasi: number
  ID_Dokter_Pelaksana: string
  Tindakan_Kedokteran: string
  ID_Pemberi_Informasi: string
  TTD_Dokter_Pelaksana: string
  Dasar_Diagnosis_Check: string
  Nama_Dokter_Pelaksana: string
  Tata_Cara_Tipe_Sedasi: number
  Nama_Pemberi_Informasi: string
  Alternatif_Resiko_Check: string
  Indikasi_Tindakan_Check: string
  Tata_Cara_Uraian_Singkat: number
  Nama_Tanda_Tangan_Petugas: string
  Tindakan_Kedokteran_Check: string
  Hal_Lain_Perluasan_Tindakan: number
  Alternatif_Risiko_Pilihan_Pengobatan: number
  Nama_Template : string

  constructor(req: IProvisionOfInformationFormModel) {
    this.Risiko = req.Risiko;
    this.Tujuan = req.Tujuan;
    this.Hal_Lain = req.Hal_Lain;
    this.Diagnosis = req.Diagnosis;
    this.Prognosis = req.Prognosis;
    this.Tata_Cara = req.Tata_Cara;
    this.Nama_Wali = req.Nama_Wali;
    this.ID_Petugas = req.ID_Petugas;
    this.Komplikasi = req.Komplikasi;
    this.TTD_Pasien = req.TTD_Pasien;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Risiko_Check = req.Risiko_Check;
    this.Tujuan_Check = req.Tujuan_Check;
    this.Hal_Lain_Check = req.Hal_Lain_Check;
    this.Dasar_Diagnosis = req.Dasar_Diagnosis;
    this.Diagnosis_Check = req.Diagnosis_Check;
    this.Prognosis_Check = req.Prognosis_Check;
    this.Tata_Cara_Check = req.Tata_Cara_Check;
    this.Diagnosis_Custom = req.Diagnosis_Custom;
    this.Dokter_Pelaksana = req.Dokter_Pelaksana;
    this.Komplikasi_Check = req.Komplikasi_Check;
    this.Alternatif_Risiko = req.Alternatif_Risiko;
    this.Indikasi_Tindakan = req.Indikasi_Tindakan;
    this.Penerima_Informasi = req.Penerima_Informasi;
    this.Hal_Lain_Konsultasi = req.Hal_Lain_Konsultasi;
    this.ID_Dokter_Pelaksana = req.ID_Dokter_Pelaksana;
    this.Tindakan_Kedokteran = req.Tindakan_Kedokteran;
    this.ID_Pemberi_Informasi = req.ID_Pemberi_Informasi;
    this.TTD_Dokter_Pelaksana = req.TTD_Dokter_Pelaksana;
    this.Dasar_Diagnosis_Check = req.Dasar_Diagnosis_Check;
    this.Nama_Dokter_Pelaksana = req.Nama_Dokter_Pelaksana;
    this.Tata_Cara_Tipe_Sedasi = req.Tata_Cara_Tipe_Sedasi;
    this.Nama_Pemberi_Informasi = req.Nama_Pemberi_Informasi;
    this.Alternatif_Resiko_Check = req.Alternatif_Resiko_Check;
    this.Indikasi_Tindakan_Check = req.Indikasi_Tindakan_Check;
    this.Tata_Cara_Uraian_Singkat = req.Tata_Cara_Uraian_Singkat;
    this.Nama_Tanda_Tangan_Petugas = req.Nama_Tanda_Tangan_Petugas;
    this.Tindakan_Kedokteran_Check = req.Tindakan_Kedokteran_Check;
    this.Hal_Lain_Perluasan_Tindakan = req.Hal_Lain_Perluasan_Tindakan;
    this.Alternatif_Risiko_Pilihan_Pengobatan = req.Alternatif_Risiko_Pilihan_Pengobatan;
    this.Nama_Template = req.Nama_Template;
  }

  static createFromJson(json: IProvisionOfInformationFormModel) {
    return new ProvisionOfInformationFormModel(json);
  }
}

export interface IInformConsentModel extends IDataModel {
  doctors_consent: IDoctorsConsentFormModel;
  information_provision: IProvisionOfInformationFormModel;
  rawat_jalan: any;
}

export class InformConsentModel extends DataModel {
  doctors_consent?: IDoctorsConsentFormModel;
  information_provision?: IProvisionOfInformationFormModel;
  rawat_jalan: any;

  constructor(req: IInformConsentModel) {
    super(req);
    if (req.doctors_consent) {
      this.doctors_consent = new DoctorsConsentFormModel(req.doctors_consent);
    }
    if (req.information_provision) {
      this.information_provision = new ProvisionOfInformationFormModel(req.information_provision);
    }
    this.rawat_jalan = req.rawat_jalan;
  }
}
