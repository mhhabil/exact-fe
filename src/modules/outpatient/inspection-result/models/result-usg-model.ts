import { DataModel, IDataModel } from '@shared/model';

export interface ITreatmentNumber {
  ID: string;
  ID_Dokter: string;
  ID_Berobat: string;
  Penanganan: string;
  Dokter_Nama: string;
  Waktu_Visit: string;
}

export class TreatmentNumber {
  ID: string;
  ID_Dokter: string;
  ID_Berobat: string;
  Penanganan: string;
  Dokter_Nama: string;
  Waktu_Visit: string;

  constructor(treatment: ITreatmentNumber) {
    this.ID = treatment.ID;
    this.ID_Dokter = treatment.ID_Dokter;
    this.ID_Berobat = treatment.ID_Berobat;
    this.Penanganan = treatment.Penanganan;
    this.Dokter_Nama = treatment.Dokter_Nama;
    this.Waktu_Visit = treatment.Waktu_Visit;
  }
}

export interface IResultUSGForm {
  Od_Axl: string;
  Os_Axl: string;
  Od_Gain: string;
  Os_Gain: string;
  Od_Spike: string;
  Os_Spike: string;
  Od_Lokasi: string;
  Os_Lokasi: string;
  ID_Petugas: string;
  Kesimpulan: string;
  Kesimpulan_Opt: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Od_Lain_Lain: string;
  Os_Lain_Lain: string;
  Od_Perlekatan: string;
  Os_Perlekatan: string;
  Od_After_Movement: string;
  Os_After_Movement: string;
  Od_Bentuk_Kelainan: string;
  Os_Bentuk_Kelainan: string;
  Dokter_Pemeriksa_Id: string;
  Perawat_Pemeriksa_Id: string;
  TTD_Dokter_Pemeriksa: string;
  Dokter_Pemeriksa_Nama: string;
  Od_Struktur_Bola_Mata: string;
  Os_Struktur_Bola_Mata: string;
  TTD_Perawat_Pemeriksa: string;
  Perawat_Pemeriksa_Nama: string;
}

export class ResultUSGForm {
  Od_Axl: string;
  Os_Axl: string;
  Od_Gain: string;
  Os_Gain: string;
  Od_Spike: string;
  Os_Spike: string;
  Od_Lokasi: string;
  Os_Lokasi: string;
  ID_Petugas: string;
  Kesimpulan: string;
  Kesimpulan_Opt: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Od_Lain_Lain: string;
  Os_Lain_Lain: string;
  Od_Perlekatan: string;
  Os_Perlekatan: string;
  Od_After_Movement: string;
  Os_After_Movement: string;
  Od_Bentuk_Kelainan: string;
  Os_Bentuk_Kelainan: string;
  Dokter_Pemeriksa_Id: string;
  Perawat_Pemeriksa_Id: string;
  TTD_Dokter_Pemeriksa: string;
  Dokter_Pemeriksa_Nama: string;
  Od_Struktur_Bola_Mata: string;
  Os_Struktur_Bola_Mata: string;
  TTD_Perawat_Pemeriksa: string;
  Perawat_Pemeriksa_Nama: string;

  constructor(usg: IResultUSGForm) {
    this.Od_Axl = usg.Od_Axl;
    this.Os_Axl = usg.Os_Axl;
    this.Od_Gain = usg.Od_Gain;
    this.Os_Gain = usg.Os_Gain;
    this.Od_Spike = usg.Od_Spike;
    this.Os_Spike = usg.Os_Spike;
    this.Od_Lokasi = usg.Od_Lokasi;
    this.Os_Lokasi = usg.Os_Lokasi;
    this.ID_Petugas = usg.ID_Petugas;
    this.Kesimpulan = usg.Kesimpulan;
    this.Kesimpulan_Opt = usg.Kesimpulan_Opt;
    this.Updated_At = usg.Updated_At;
    this.Updated_By = usg.Updated_By;
    this.TTD_Tanggal = usg.TTD_Tanggal;
    this.Nama_Petugas = usg.Nama_Petugas;
    this.Od_Lain_Lain = usg.Od_Lain_Lain;
    this.Os_Lain_Lain = usg.Os_Lain_Lain;
    this.Od_Perlekatan = usg.Od_Perlekatan;
    this.Os_Perlekatan = usg.Os_Perlekatan;
    this.Od_After_Movement = usg.Od_After_Movement;
    this.Os_After_Movement = usg.Os_After_Movement;
    this.Od_Bentuk_Kelainan = usg.Od_Bentuk_Kelainan;
    this.Os_Bentuk_Kelainan = usg.Os_Bentuk_Kelainan;
    this.Dokter_Pemeriksa_Id = usg.Dokter_Pemeriksa_Id;
    this.Perawat_Pemeriksa_Id = usg.Perawat_Pemeriksa_Id;
    this.TTD_Dokter_Pemeriksa = usg.TTD_Dokter_Pemeriksa;
    this.Dokter_Pemeriksa_Nama = usg.Dokter_Pemeriksa_Nama;
    this.Od_Struktur_Bola_Mata = usg.Od_Struktur_Bola_Mata;
    this.Os_Struktur_Bola_Mata = usg.Os_Struktur_Bola_Mata;
    this.TTD_Perawat_Pemeriksa = usg.TTD_Perawat_Pemeriksa;
    this.Perawat_Pemeriksa_Nama = usg.Perawat_Pemeriksa_Nama
  }
}

export interface IResultUSGModel extends IDataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;
}

export class ResultUSGModel extends DataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;

  constructor(usg: IResultUSGModel) {
    super(usg);
    this.no_berobat = (Array.isArray(usg.no_berobat)) ? usg.no_berobat.map((a) => new TreatmentNumber(a)) : [];
    this.form = usg.form;
  }

  static createFromJson(json: IResultUSGModel) {
    return new ResultUSGModel(json);
  }
}