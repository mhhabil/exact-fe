import { DataModel, IDataModel } from "@src/shared/model";

export interface IMedsAllergy {
  Nama_Obat_Alergi: string;
  Tingkat: string;
  Reaksi_Alergi: string;
}

export class MedsAllergy {
  Nama_Obat_Alergi: string;
  Tingkat: string;
  Reaksi_Alergi: string;

  constructor(req: IMedsAllergy) {
    this.Nama_Obat_Alergi = req.Nama_Obat_Alergi;
    this.Tingkat = req.Tingkat;
    this.Reaksi_Alergi = req.Reaksi_Alergi;
  }
}

export interface IInMeds {
  Nama_Obat: string;
  Jumlah: string;
  Rute: string;
  Aturan_Pakai: string;
  Tindak_Lanjut: string;
  Perubahan_Aturan_Pakai: string;
  Obat_Milik_Pasien: string;
}

export class InMeds {
  Nama_Obat: string;
  Jumlah: string;
  Rute: string;
  Aturan_Pakai: string;
  Tindak_Lanjut: string;
  Perubahan_Aturan_Pakai: string;
  Obat_Milik_Pasien: string;

  constructor(req: IInMeds) {
    this.Nama_Obat = req.Nama_Obat;
    this.Jumlah = req.Jumlah;
    this.Rute = req.Rute;
    this.Aturan_Pakai = req.Aturan_Pakai;
    this.Tindak_Lanjut = req.Tindak_Lanjut;
    this.Perubahan_Aturan_Pakai = req.Perubahan_Aturan_Pakai;
    this.Obat_Milik_Pasien = req.Obat_Milik_Pasien
  }
}

export interface IRoomMeds {
  Nama_Obat: string;
  Jumlah: string;
  Rute: string;
  Aturan_Pakai: string;
  Tindak_Lanjut: string;
  Perubahan_Aturan_Pakai: string;
}

export class RoomMeds {
  Nama_Obat: string;
  Jumlah: string;
  Rute: string;
  Aturan_Pakai: string;
  Tindak_Lanjut: string;
  Perubahan_Aturan_Pakai: string;

  constructor(req: IRoomMeds) {
    this.Nama_Obat = req.Nama_Obat;
    this.Jumlah = req.Jumlah;
    this.Rute = req.Rute;
    this.Aturan_Pakai = req.Aturan_Pakai;
    this.Tindak_Lanjut = req.Tindak_Lanjut;
    this.Perubahan_Aturan_Pakai = req.Perubahan_Aturan_Pakai;
  }
}

export interface IOutMeds {
  Nama_Obat: string;
  Jumlah: string;
  Rute: string;
  Aturan_Pakai: string;
  Tindak_Lanjut: string;
  Perubahan_Aturan_Pakai: string;
  Kategori: string;
}

export class OutMeds {
  Nama_Obat: string;
  Jumlah: string;
  Rute: string;
  Aturan_Pakai: string;
  Tindak_Lanjut: string;
  Perubahan_Aturan_Pakai: string;
  Kategori: string;

  constructor(req: IOutMeds) {
    this.Nama_Obat = req.Nama_Obat;
    this.Jumlah = req.Jumlah;
    this.Rute = req.Rute;
    this.Aturan_Pakai = req.Aturan_Pakai;
    this.Tindak_Lanjut = req.Tindak_Lanjut;
    this.Perubahan_Aturan_Pakai = req.Perubahan_Aturan_Pakai;
    this.Kategori = req.Kategori;
  }
}

export interface IMedsReconciliationFormModel {
  Riwayat_Pemakaian_Obat: Array<string>;
  Alergi_Obat_Radio: string;
  Alergi_Obat: Array<IMedsAllergy>;
  Unit_Masuk_RS: string;
  Nama_Ka_Unit_Masuk_RS: string;
  ID_Ka_Unit_Masuk_RS: string;
  Waktu_Masuk_RS: string;
  Obat_Saat_Masuk_RS: Array<IInMeds>;
  ID_Perawat_Masuk_RS: string;
  TTD_Perawat_Masuk_RS: string;
  Nama_Perawat_Masuk_RS: string;
  TTD_Pasien_Masuk_RS: string;
  ID_Dokter_Masuk_RS: string;
  TTD_Dokter_Masuk_RS: string;
  Nama_Dokter_Masuk_RS: string;
  ID_Apoteker_Masuk_RS: string;
  TTD_Apoteker_Masuk_RS: string;
  Nama_Apoteker_Masuk_RS: string;
  Unit_Ruangan_1: string;
  Nama_Ka_Unit_Ruangan_1: string;
  ID_Ka_Unit_Ruangan_1: string;
  Waktu_Ruangan_1: string;
  Obat_Ruangan_1: Array<IRoomMeds>;
  ID_Perawat_Ruangan_1: string;
  TTD_Perawat_Ruangan_1: string;
  Nama_Perawat_Ruangan_1: string;
  ID_Dokter_Ruangan_1: string;
  TTD_Dokter_Ruangan_1: string;
  Nama_Dokter_Ruangan_1: string;
  TTD_Pasien_Ruangan_1: string;
  ID_Apoteker_Ruangan_1: string;
  TTD_Apoteker_Ruangan_1: string;
  Nama_Apoteker_Ruangan_1: string;
  Unit_Ruangan_2: string;
  Nama_Ka_Unit_Ruangan_2: string;
  ID_Ka_Unit_Ruangan_2: string;
  Waktu_Ruangan_2: string;
  Obat_Ruangan_2: Array<IRoomMeds>;
  ID_Perawat_Ruangan_2: string;
  TTD_Perawat_Ruangan_2: string;
  Nama_Perawat_Ruangan_2: string;
  ID_Dokter_Ruangan_2: string;
  TTD_Dokter_Ruangan_2: string;
  Nama_Dokter_Ruangan_2: string;
  TTD_Pasien_Ruangan_2: string;
  ID_Apoteker_Ruangan_2: string;
  TTD_Apoteker_Ruangan_2: string;
  Nama_Apoteker_Ruangan_2: string;
  Unit_Keluar: string;
  Nama_Ka_Unit_Keluar: string;
  ID_Ka_Unit_Keluar: string;
  Waktu_Keluar: string;
  Obat_Keluar: Array<IOutMeds>;
  ID_Perawat_Keluar: string;
  TTD_Perawat_Keluar: string;
  Nama_Perawat_Keluar: string;
  ID_Dokter_Keluar: string;
  TTD_Dokter_Keluar: string;
  Nama_Dokter_Keluar: string;
  TTD_Pasien_Keluar: string;
  ID_Apoteker_Keluar: string;
  TTD_Apoteker_Keluar: string;
  Nama_Apoteker_Keluar: string;
  Updated_At: string;
  Updated_By: string;
  ID_Petugas: string;
  Nama_Petugas: string;
}

export class MedsReconciliationFormModel {
  Riwayat_Pemakaian_Obat: Array<string>;
  Alergi_Obat_Radio: string;
  Alergi_Obat: Array<IMedsAllergy>;
  Unit_Masuk_RS: string;
  Nama_Ka_Unit_Masuk_RS: string;
  ID_Ka_Unit_Masuk_RS: string;
  Waktu_Masuk_RS: string;
  Obat_Saat_Masuk_RS: Array<IInMeds>;
  ID_Perawat_Masuk_RS: string;
  TTD_Perawat_Masuk_RS: string;
  Nama_Perawat_Masuk_RS: string;
  TTD_Pasien_Masuk_RS: string;
  ID_Dokter_Masuk_RS: string;
  TTD_Dokter_Masuk_RS: string;
  Nama_Dokter_Masuk_RS: string;
  ID_Apoteker_Masuk_RS: string;
  TTD_Apoteker_Masuk_RS: string;
  Nama_Apoteker_Masuk_RS: string;
  Unit_Ruangan_1: string;
  Nama_Ka_Unit_Ruangan_1: string;
  ID_Ka_Unit_Ruangan_1: string;
  Waktu_Ruangan_1: string;
  Obat_Ruangan_1: Array<IRoomMeds>;
  ID_Perawat_Ruangan_1: string;
  TTD_Perawat_Ruangan_1: string;
  Nama_Perawat_Ruangan_1: string;
  ID_Dokter_Ruangan_1: string;
  TTD_Dokter_Ruangan_1: string;
  Nama_Dokter_Ruangan_1: string;
  TTD_Pasien_Ruangan_1: string;
  ID_Apoteker_Ruangan_1: string;
  TTD_Apoteker_Ruangan_1: string;
  Nama_Apoteker_Ruangan_1: string;
  Unit_Ruangan_2: string;
  Nama_Ka_Unit_Ruangan_2: string;
  ID_Ka_Unit_Ruangan_2: string;
  Waktu_Ruangan_2: string;
  Obat_Ruangan_2: Array<IRoomMeds>;
  ID_Perawat_Ruangan_2: string;
  TTD_Perawat_Ruangan_2: string;
  Nama_Perawat_Ruangan_2: string;
  ID_Dokter_Ruangan_2: string;
  TTD_Dokter_Ruangan_2: string;
  Nama_Dokter_Ruangan_2: string;
  TTD_Pasien_Ruangan_2: string;
  ID_Apoteker_Ruangan_2: string;
  TTD_Apoteker_Ruangan_2: string;
  Nama_Apoteker_Ruangan_2: string;
  Unit_Keluar: string;
  Nama_Ka_Unit_Keluar: string;
  ID_Ka_Unit_Keluar: string;
  Waktu_Keluar: string;
  Obat_Keluar: Array<IOutMeds>;
  ID_Perawat_Keluar: string;
  TTD_Perawat_Keluar: string;
  Nama_Perawat_Keluar: string;
  ID_Dokter_Keluar: string;
  TTD_Dokter_Keluar: string;
  Nama_Dokter_Keluar: string;
  TTD_Pasien_Keluar: string;
  ID_Apoteker_Keluar: string;
  TTD_Apoteker_Keluar: string;
  Nama_Apoteker_Keluar: string;
  Updated_At: string;
  Updated_By: string;
  ID_Petugas: string;
  Nama_Petugas: string;

  constructor(req: IMedsReconciliationFormModel) {
    this.Riwayat_Pemakaian_Obat = req.Riwayat_Pemakaian_Obat && Array.isArray(req.Riwayat_Pemakaian_Obat) ? req.Riwayat_Pemakaian_Obat : [];
    this.Alergi_Obat_Radio = req.Alergi_Obat_Radio;
    this.Alergi_Obat = req.Alergi_Obat && Array.isArray(req.Alergi_Obat) ? req.Alergi_Obat.map(d => new MedsAllergy(d)) : [];
    this.Unit_Masuk_RS = req.Unit_Masuk_RS;
    this.Nama_Ka_Unit_Masuk_RS = req.Nama_Ka_Unit_Masuk_RS;
    this.ID_Ka_Unit_Masuk_RS = req.ID_Ka_Unit_Masuk_RS;
    this.Waktu_Masuk_RS = req.Waktu_Masuk_RS;
    this.Obat_Saat_Masuk_RS = req.Obat_Saat_Masuk_RS && Array.isArray(req.Obat_Saat_Masuk_RS) ? req.Obat_Saat_Masuk_RS.map(d => new InMeds(d)) : [];
    this.ID_Perawat_Masuk_RS = req.ID_Perawat_Masuk_RS;
    this.TTD_Perawat_Masuk_RS = req.TTD_Perawat_Masuk_RS;
    this.Nama_Perawat_Masuk_RS = req.Nama_Perawat_Masuk_RS;
    this.TTD_Pasien_Masuk_RS = req.TTD_Pasien_Masuk_RS;
    this.ID_Dokter_Masuk_RS = req.ID_Dokter_Masuk_RS;
    this.TTD_Dokter_Masuk_RS = req.TTD_Dokter_Masuk_RS;
    this.Nama_Dokter_Masuk_RS = req.Nama_Dokter_Masuk_RS;
    this.ID_Apoteker_Masuk_RS = req.ID_Apoteker_Masuk_RS;
    this.TTD_Apoteker_Masuk_RS = req.TTD_Apoteker_Masuk_RS;
    this.Nama_Apoteker_Masuk_RS = req.Nama_Apoteker_Masuk_RS;
    this.Unit_Ruangan_1 = req.Unit_Ruangan_1;
    this.Nama_Ka_Unit_Ruangan_1 = req.Nama_Ka_Unit_Ruangan_1;
    this.ID_Ka_Unit_Ruangan_1 = req.ID_Ka_Unit_Ruangan_1;
    this.Waktu_Ruangan_1 = req.Waktu_Ruangan_1;
    this.Obat_Ruangan_1 = req.Obat_Ruangan_1 && Array.isArray(req.Obat_Ruangan_1) ? req.Obat_Ruangan_1.map(d => new RoomMeds(d)) : [];
    this.ID_Perawat_Ruangan_1 = req.ID_Perawat_Ruangan_1;
    this.TTD_Perawat_Ruangan_1 = req.TTD_Perawat_Ruangan_1;
    this.Nama_Perawat_Ruangan_1 = req.Nama_Perawat_Ruangan_1;
    this.TTD_Pasien_Ruangan_1 = req.TTD_Pasien_Ruangan_1;
    this.ID_Dokter_Ruangan_1 = req.ID_Dokter_Ruangan_1;
    this.TTD_Dokter_Ruangan_1 = req.TTD_Dokter_Ruangan_1;
    this.Nama_Dokter_Ruangan_1 = req.Nama_Dokter_Ruangan_1;
    this.ID_Apoteker_Ruangan_1 = req.ID_Apoteker_Ruangan_1;
    this.TTD_Apoteker_Ruangan_1 = req.TTD_Apoteker_Ruangan_1;
    this.Nama_Apoteker_Ruangan_1 = req.Nama_Apoteker_Ruangan_1;
    this.Unit_Ruangan_2 = req.Unit_Ruangan_2;
    this.Nama_Ka_Unit_Ruangan_2 = req.Nama_Ka_Unit_Ruangan_2;
    this.ID_Ka_Unit_Ruangan_2 = req.ID_Ka_Unit_Ruangan_2;
    this.Waktu_Ruangan_2 = req.Waktu_Ruangan_2;
    this.Obat_Ruangan_2 = req.Obat_Ruangan_2 && Array.isArray(req.Obat_Ruangan_2) ? req.Obat_Ruangan_2.map(d => new RoomMeds(d)) : [];
    this.ID_Perawat_Ruangan_2 = req.ID_Perawat_Ruangan_2;
    this.TTD_Perawat_Ruangan_2 = req.TTD_Perawat_Ruangan_2;
    this.Nama_Perawat_Ruangan_2 = req.Nama_Perawat_Ruangan_2;
    this.TTD_Pasien_Ruangan_2 = req.TTD_Pasien_Ruangan_2;
    this.ID_Dokter_Ruangan_2 = req.ID_Dokter_Ruangan_2;
    this.TTD_Dokter_Ruangan_2 = req.TTD_Dokter_Ruangan_2;
    this.Nama_Dokter_Ruangan_2 = req.Nama_Dokter_Ruangan_2;
    this.ID_Apoteker_Ruangan_2 = req.ID_Apoteker_Ruangan_2;
    this.TTD_Apoteker_Ruangan_2 = req.TTD_Apoteker_Ruangan_2;
    this.Nama_Apoteker_Ruangan_2 = req.Nama_Apoteker_Ruangan_2;
    this.Unit_Keluar = req.Unit_Keluar;
    this.Nama_Ka_Unit_Keluar = req.Nama_Ka_Unit_Keluar;
    this.ID_Ka_Unit_Keluar = req.ID_Ka_Unit_Keluar;
    this.Waktu_Keluar = req.Waktu_Keluar;
    this.Obat_Keluar = req.Obat_Keluar && Array.isArray(req.Obat_Keluar) ? req.Obat_Keluar.map(d => new OutMeds(d)) : [];
    this.ID_Perawat_Keluar = req.ID_Perawat_Keluar;
    this.TTD_Perawat_Keluar = req.TTD_Perawat_Keluar;
    this.Nama_Perawat_Keluar = req.Nama_Perawat_Keluar;
    this.TTD_Pasien_Keluar = req.TTD_Pasien_Keluar;
    this.ID_Dokter_Keluar = req.ID_Dokter_Keluar;
    this.TTD_Dokter_Keluar = req.TTD_Dokter_Keluar;
    this.Nama_Dokter_Keluar = req.Nama_Dokter_Keluar;
    this.ID_Apoteker_Keluar = req.ID_Apoteker_Keluar;
    this.TTD_Apoteker_Keluar = req.TTD_Apoteker_Keluar;
    this.Nama_Apoteker_Keluar = req.Nama_Apoteker_Keluar
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.ID_Petugas = req.ID_Petugas;
    this.Nama_Petugas = req.Nama_Petugas;
  }
}

export interface IMedsReconciliationModel extends IDataModel {
  form: IMedsReconciliationFormModel;
}

export class MedsReconciliationModel extends DataModel {
  form?: MedsReconciliationFormModel;

  constructor(req: IMedsReconciliationModel) {
    super(req);
    if (req.form) {
      this.form = new MedsReconciliationFormModel(req.form);
    }
  }
}
