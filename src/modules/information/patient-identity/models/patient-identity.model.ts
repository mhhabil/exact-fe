import { DataModel, IDataModel } from '@shared/model';

export interface IPatientIdentityFormModel {
  ID_Petugas: string;
  Nama_Petugas: string;
  Tanda_Tangan_Pasien: string;
  Tanda_Tangan_Petugas: string;
  Tanda_Tangan_Radio: string;
  Tanda_Tangan_Wali: string;
  Updated_At: string;
  Updated_By: string;
  Updated_By_Name: string;
}

export class PatientIdentityFormModel {
  ID_Petugas: string;
  Nama_Petugas: string;
  Tanda_Tangan_Pasien: string;
  Tanda_Tangan_Petugas: string;
  Tanda_Tangan_Radio: string;
  Tanda_Tangan_Wali: string;
  Updated_At: string;
  Updated_By: string;
  Updated_By_Name: string;

  constructor(form: IPatientIdentityFormModel) {
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Tanda_Tangan_Pasien = form.Tanda_Tangan_Pasien;
    this.Tanda_Tangan_Petugas = form.Tanda_Tangan_Petugas;
    this.Tanda_Tangan_Radio = form.Tanda_Tangan_Radio;
    this.Tanda_Tangan_Wali = form.Tanda_Tangan_Wali;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
    this.Updated_By_Name = form.Updated_By_Name;
  }
}

export interface IPatientIdentityModel extends IDataModel {
  form: IPatientIdentityFormModel;
}

export class PatientIdentityModel extends DataModel {

  form: PatientIdentityFormModel;

  constructor(patientIdentity: IPatientIdentityModel) {
    super(patientIdentity);
    this.form = new PatientIdentityFormModel(patientIdentity.form);
  }
}
