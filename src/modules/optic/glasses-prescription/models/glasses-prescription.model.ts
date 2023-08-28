import { DataModel, IDataModel } from '@shared/model';
import { IPreliminaryStudyForm } from '@src/modules/ro/preliminary-study/models/preliminary-study.model';

export interface IGlassesPrescriptionDetail {
  Reading: string;
  Distance: string;
}

export class GlassesPrescriptionDetail {
  Reading: string;
  Distance: string;

  constructor(glassesPrescriptionDetail: IGlassesPrescriptionDetail) {
    this.Reading = glassesPrescriptionDetail.Reading;
    this.Distance = glassesPrescriptionDetail.Distance;
  }
}

export interface IGlassesPrescriptionEyes {
  Ax?: IGlassesPrescriptionDetail;
  Va?: IGlassesPrescriptionDetail;
  Cyl?: IGlassesPrescriptionDetail;
  Sph?: IGlassesPrescriptionDetail;
}

export class GlassesPrescriptionEyes {
  Ax?: IGlassesPrescriptionDetail;
  Va?: IGlassesPrescriptionDetail;
  Cyl?: IGlassesPrescriptionDetail;
  Sph?: IGlassesPrescriptionDetail;

  constructor(glassesPrescriptionEyes: IGlassesPrescriptionEyes) {
    this.Ax = glassesPrescriptionEyes.Ax;
    this.Va = glassesPrescriptionEyes.Va;
    this.Cyl = glassesPrescriptionEyes.Cyl;
    this.Sph = glassesPrescriptionEyes.Sph;
  }
}

export interface IPrescriptionDetail {
  No_Faktur: number;
  ID_Resep_H: number;
}

export class PrescriptionDetail {
  No_Faktur: number;
  ID_Resep_H: number;

  constructor(prescriptionDetail: IPrescriptionDetail) {
    this.No_Faktur = prescriptionDetail.No_Faktur;
    this.ID_Resep_H = prescriptionDetail.ID_Resep_H;
  }
}

export interface IGlassesPrescriptionFormModel {
  Pengkajian_Awal_Od: string;
  Pengkajian_Awal_Os: string;
  PD?: IGlassesPrescriptionDetail;
  Left?: IGlassesPrescriptionEyes;
  Right?: IGlassesPrescriptionEyes;
  ID_Resep?: IPrescriptionDetail;
  Dokter_Id: string;
  ID_Petugas: string;
  TTD_Dokter: string;
  Updated_At: string;
  Updated_By: string;
  Dokter_Nama: string;
  Catatan_Lain: string;
  Nama_Petugas: string;
  Tanggal_Resep: string;
}

export class GlassesPrescriptionFormModel {
  Pengkajian_Awal_Od: string;
  Pengkajian_Awal_Os: string;
  PD?: IGlassesPrescriptionDetail;
  Left?: IGlassesPrescriptionEyes;
  Right?: IGlassesPrescriptionEyes;
  ID_Resep?: IPrescriptionDetail;
  Dokter_Id: string;
  ID_Petugas: string;
  TTD_Dokter: string;
  Updated_At: string;
  Updated_By: string;
  Dokter_Nama: string;
  Catatan_Lain: string;
  Nama_Petugas: string;
  Tanggal_Resep: string;

  constructor(glassesPrescriptionFormModel: IGlassesPrescriptionFormModel) {
    this.Pengkajian_Awal_Od = glassesPrescriptionFormModel.Pengkajian_Awal_Od;
    this.Pengkajian_Awal_Os = glassesPrescriptionFormModel.Pengkajian_Awal_Os;
    this.PD = glassesPrescriptionFormModel.PD;
    this.Left = glassesPrescriptionFormModel.Left;
    this.Right = glassesPrescriptionFormModel.Right;
    this.ID_Resep = glassesPrescriptionFormModel.ID_Resep;
    this.Dokter_Id = glassesPrescriptionFormModel.Dokter_Id;
    this.ID_Petugas = glassesPrescriptionFormModel.ID_Petugas;
    this.TTD_Dokter = glassesPrescriptionFormModel.TTD_Dokter;
    this.Updated_At = glassesPrescriptionFormModel.Updated_At;
    this.Updated_By = glassesPrescriptionFormModel.Updated_By;
    this.Dokter_Nama = glassesPrescriptionFormModel.Dokter_Nama;
    this.Catatan_Lain = glassesPrescriptionFormModel.Catatan_Lain;
    this.Nama_Petugas = glassesPrescriptionFormModel.Nama_Petugas;
    this.Tanggal_Resep = glassesPrescriptionFormModel.Tanggal_Resep;
  }
}

export interface IGlassesPrescriptionModel extends IDataModel {
  form: IGlassesPrescriptionFormModel;
  formRO: IPreliminaryStudyForm;
}

export class GlassesPrescriptionModel extends DataModel {
  form: GlassesPrescriptionFormModel;
  formRO: IPreliminaryStudyForm;
  constructor(glassesPrescription: IGlassesPrescriptionModel) {
    super(glassesPrescription);
    this.form = new GlassesPrescriptionFormModel(glassesPrescription.form);
    this.formRO = glassesPrescription.formRO;
  }
}

