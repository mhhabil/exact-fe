import { DataModel, IDataModel } from '@shared/model';

export interface IDokter {
  ID_Karyawan: string;
  Nama: string;
}

export class Dokter {
  ID_Karyawan: string;
  Nama: string;
  constructor(dokter: IDokter) {
    this.ID_Karyawan = dokter.ID_Karyawan;
    this.Nama = dokter.Nama;
  }
}

export interface IGeneralConsentFormModel {
  ID_Saksi: string;
  Nama_Wali: string;
  TTD_Saksi: string;
  ID_Petugas: string;
  Nama_Saksi: string;
  TTD_Pasien: string;
  Updated_At: string;
  Updated_By: string;
  Tanggal_TTD: string;
  Nama_Petugas: string;
  Tanda_Tangan: string;
  ID_Dokter_Jaga: string;
  Pelepasan_Lain: string;
  ID_Dokter_Rawat: string;
  Tipe_Pembayaran: string;
  Nama_Dokter_Jaga: string;
  Nama_Dokter_Rawat: string;
  Tanda_Tangan_Nama: string;
  Bersedia_Dikunjung: number;
  Tanda_Tangan_Alamat: string;
  Nama_Tidak_Diizinkan: any[];
  Tanda_Tangan_Telepon: string;
}

export class GeneralConsentFormModel {
  ID_Saksi: string;
  Nama_Wali: string;
  TTD_Saksi: string;
  ID_Petugas: string;
  Nama_Saksi: string;
  TTD_Pasien: string;
  Updated_At: string;
  Updated_By: string;
  Tanggal_TTD: string;
  Nama_Petugas: string;
  Tanda_Tangan: string;
  ID_Dokter_Jaga: string;
  Pelepasan_Lain: string;
  ID_Dokter_Rawat: string;
  Tipe_Pembayaran: string;
  Nama_Dokter_Jaga: string;
  Nama_Dokter_Rawat: string;
  Tanda_Tangan_Nama: string;
  Bersedia_Dikunjung: number;
  Tanda_Tangan_Alamat: string;
  Nama_Tidak_Diizinkan: any[];
  Tanda_Tangan_Telepon: string;
  constructor(form: IGeneralConsentFormModel) {
    this.ID_Saksi = form.ID_Saksi;
    this.Nama_Wali = form.Nama_Wali;
    this.TTD_Saksi = form.TTD_Saksi;
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Saksi = form.Nama_Saksi;
    this.TTD_Pasien = form.TTD_Pasien;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
    this.Tanggal_TTD = form.Tanggal_TTD;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Tanda_Tangan = form.Tanda_Tangan;
    this.ID_Dokter_Jaga = form.ID_Dokter_Jaga;
    this.Pelepasan_Lain = form.Pelepasan_Lain;
    this.ID_Dokter_Rawat = form.ID_Dokter_Rawat;
    this.Tipe_Pembayaran = form.Tipe_Pembayaran;
    this.Nama_Dokter_Jaga = form.Nama_Dokter_Jaga;
    this.Nama_Dokter_Rawat = form.Nama_Dokter_Rawat;
    this.Tanda_Tangan_Nama = form.Tanda_Tangan_Nama;
    this.Bersedia_Dikunjung = +form.Bersedia_Dikunjung;
    this.Tanda_Tangan_Alamat = form.Tanda_Tangan_Alamat;
    this.Nama_Tidak_Diizinkan = form.Nama_Tidak_Diizinkan;
    this.Tanda_Tangan_Telepon = form.Tanda_Tangan_Telepon;
  }
}

export interface IGeneralConsentModel extends IDataModel {
  tagihan: string;
  dokter: Array<IDokter>;
  form: IGeneralConsentFormModel;
  id_dokter: string;
}

export class GeneralConsentModel extends DataModel {
  tagihan: string;
  dokter: Array<Dokter> = [];
  form?: GeneralConsentFormModel;
  id_dokter: string;
  constructor(generalConsent: IGeneralConsentModel) {
    super(generalConsent);
    this.tagihan = generalConsent.tagihan;
    this.id_dokter = generalConsent.id_dokter
    if (generalConsent.dokter && Array.isArray(generalConsent.dokter)) {
      this.dokter = generalConsent.dokter.map(d => new Dokter(d));
    }
    if (generalConsent.form) {
      this.form = new GeneralConsentFormModel(generalConsent.form);
    }
  }
}
