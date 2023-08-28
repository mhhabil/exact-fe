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

export interface IVisualFieldResultsForm {
  Anjuran: string;
  Od_Defek: string;
  Os_Defek: string;
  ID_Petugas: string;
  Kesimpulan: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Od_Parameter: string;
  Os_Parameter: string;
  Od_Reliabilitas: string;
  Os_Reliabilitas: string;
  Od_Tendensi_Defek: string;
  Os_Tendensi_Defek: string;
  Pemeriksaan_Rutin: string;
  Od_Severitas_Defek: string;
  Os_Severitas_Defek: string;
  Dokter_Pemeriksa_Id: string;
  TTD_Dokter_Pemeriksa: string;
  Dokter_Pemeriksa_Nama: string;
  TTD_Perawat_Pemeriksa: string;
  Perawat_Pemeriksa_Nama: string;
  Perawat_Pemeriksa_Id: string;
}

export class VisualFieldResultsForm {
  Anjuran: string;
  Od_Defek: string;
  Os_Defek: string;
  ID_Petugas: string;
  Kesimpulan: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Od_Parameter: string;
  Os_Parameter: string;
  Od_Reliabilitas: string;
  Os_Reliabilitas: string;
  Od_Tendensi_Defek: string;
  Os_Tendensi_Defek: string;
  Pemeriksaan_Rutin: string;
  Od_Severitas_Defek: string;
  Os_Severitas_Defek: string;
  Dokter_Pemeriksa_Id: string;
  TTD_Dokter_Pemeriksa: string;
  Dokter_Pemeriksa_Nama: string;
  TTD_Perawat_Pemeriksa: string;
  Perawat_Pemeriksa_Nama: string;
  Perawat_Pemeriksa_Id: string;

  constructor(lapang: IVisualFieldResultsForm) {
    this.Anjuran = lapang.Anjuran;
    this.Od_Defek = lapang.Od_Defek;
    this.Os_Defek = lapang.Os_Defek;
    this.ID_Petugas = lapang.ID_Petugas;
    this.Kesimpulan = lapang.Kesimpulan;
    this.Updated_At = lapang.Updated_At;
    this.Updated_By = lapang.Updated_By;
    this.TTD_Tanggal = lapang.TTD_Tanggal;
    this.Nama_Petugas = lapang.Nama_Petugas;
    this.Od_Parameter = lapang.Od_Parameter;
    this.Os_Parameter = lapang.Os_Parameter;
    this.Od_Reliabilitas = lapang.Od_Reliabilitas;
    this.Os_Reliabilitas = lapang.Os_Reliabilitas;
    this.Od_Tendensi_Defek = lapang.Od_Tendensi_Defek;
    this.Os_Tendensi_Defek = lapang.Os_Tendensi_Defek;
    this.Pemeriksaan_Rutin = lapang.Pemeriksaan_Rutin;
    this.Od_Severitas_Defek = lapang.Od_Severitas_Defek;
    this.Os_Severitas_Defek = lapang.Os_Severitas_Defek;
    this.Dokter_Pemeriksa_Id = lapang.Dokter_Pemeriksa_Id;
    this.TTD_Dokter_Pemeriksa = lapang.TTD_Dokter_Pemeriksa;
    this.Dokter_Pemeriksa_Nama = lapang.Dokter_Pemeriksa_Nama;
    this.TTD_Perawat_Pemeriksa = lapang.TTD_Perawat_Pemeriksa;
    this.Perawat_Pemeriksa_Nama = lapang.Perawat_Pemeriksa_Nama;
    this.Perawat_Pemeriksa_Id = lapang.Perawat_Pemeriksa_Id;
  }
}

export interface IVisualFieldResultsModel extends IDataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;
}

export class VisualFieldResultsModel extends DataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;

  constructor(pandang: IVisualFieldResultsModel) {
    super(pandang);
    this.no_berobat = (Array.isArray(pandang.no_berobat)) ? pandang.no_berobat.map((a) => new TreatmentNumber(a)) : [];
    this.form = pandang.form;
  }
}
