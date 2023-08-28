import { DataModel, IDataModel } from "@src/shared/model";

export interface IBerjalanAlatBantuData {
  Kruk: number;
  Tripot: number;
  Kursi_Roda: number;
  Orang_Lain: number;
}

export class Berjalan_Alat_Bantu_Data {
  Kruk: number;
  Tripot: number;
  Kursi_Roda: number;
  Orang_Lain: number;
  constructor(alat: IBerjalanAlatBantuData) {
    this.Kruk = alat.Kruk;
    this.Tripot = alat.Tripot;
    this.Kursi_Roda = alat.Kursi_Roda;
    this.Orang_Lain = alat.Orang_Lain;
  }
}

export interface IFallRiskAssessmentFormModel {
  Waktu: string;
  Menopang: number;
  Hasil_Teks: string;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Hasil_Angka: number;
  Nama_Petugas: string;
  Tanda_Tangan: string;
  Tanggal_Hasil: string;
  ID_Tanda_Tangan: string;
  Keterangan_Hasil: string;
  Tanggal_Pengkaji: string;
  Tanggal_Tindakan: string;
  Nama_Tanda_Tangan: string;
  Berjalan_Alat_Bantu: number;
  Tindakan_Tinggi_Kuning: number;
  Berjalan_Tidak_Seimbang: number;
  Tindakan_Tinggi_Edukasi: number;
  Tindakan_Rendah_Edukasi: number;
  Berjalan_Alat_Bantu_Data: IBerjalanAlatBantuData;
  Tindakan_Tinggi_Pasang_Stiker: number;
  Tindakan_Tidak_Ada_Berisiko: number;
}

export class FallRiskAssessmentFormModel {
  Waktu: string;
  Menopang: number;
  Hasil_Teks: string;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Hasil_Angka: number;
  Nama_Petugas: string;
  Tanda_Tangan: string;
  Tanggal_Hasil: string;
  ID_Tanda_Tangan: string;
  Keterangan_Hasil: string;
  Tanggal_Pengkaji: string;
  Tanggal_Tindakan: string;
  Nama_Tanda_Tangan: string;
  Berjalan_Alat_Bantu: number;
  Tindakan_Tinggi_Kuning: number;
  Berjalan_Tidak_Seimbang: number;
  Tindakan_Tinggi_Edukasi: number;
  Tindakan_Rendah_Edukasi: number;
  Berjalan_Alat_Bantu_Data: IBerjalanAlatBantuData;
  Tindakan_Tinggi_Pasang_Stiker: number;
  Tindakan_Tidak_Ada_Berisiko: number;

  constructor(form: IFallRiskAssessmentFormModel) {
    this.Waktu = form.Waktu;
    this.Menopang = form.Menopang;
    this.Hasil_Teks = form.Hasil_Teks;
    this.ID_Petugas = form.ID_Petugas;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
    this.Hasil_Angka = form.Hasil_Angka;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Tanda_Tangan = form.Tanda_Tangan;
    this.Tanggal_Hasil = form.Tanggal_Hasil;
    this.ID_Tanda_Tangan = form.ID_Tanda_Tangan;
    this.Keterangan_Hasil = form.Keterangan_Hasil;
    this.Tanggal_Pengkaji = form.Tanggal_Pengkaji;
    this.Tanggal_Tindakan = form.Tanggal_Tindakan;
    this.Nama_Tanda_Tangan = form.Nama_Tanda_Tangan;
    this.Berjalan_Alat_Bantu = form.Berjalan_Alat_Bantu;
    this.Tindakan_Tinggi_Kuning = form.Tindakan_Tinggi_Kuning;
    this.Berjalan_Tidak_Seimbang = form.Berjalan_Tidak_Seimbang;
    this.Tindakan_Tinggi_Edukasi = form.Tindakan_Tinggi_Edukasi;
    this.Tindakan_Rendah_Edukasi = form.Tindakan_Rendah_Edukasi
    this.Berjalan_Alat_Bantu_Data = form.Berjalan_Alat_Bantu_Data;
    this.Tindakan_Tinggi_Pasang_Stiker = form.Tindakan_Tinggi_Pasang_Stiker;
    this.Tindakan_Tidak_Ada_Berisiko = form.Tindakan_Tidak_Ada_Berisiko;
  }
}


export interface IFallRiskAssessmentModel extends IDataModel {
  form: IFallRiskAssessmentFormModel;
}

export class FallRiskAssessmentModel extends DataModel {
  form: FallRiskAssessmentFormModel;
  constructor(req: IFallRiskAssessmentModel) {
    super(req)
    this.form = req.form;
  }
}
