import { DataModel, IDataModel } from "@src/shared/model";

export interface IPatientBpjsStatementFormModel {
  Tanggal_TTD: string;
  ID_TTD_Petugas: string;
  Nama_TTD_Petugas: string;
  Nama_TTD_Saksi: string;
  ID_TTD_Saksi: string;
  TTD_Pasien: string;
  TTD_Wali: string;
  TTD_Petugas: string;
  TTD_Saksi: string;
  Penanggung_Jawab: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Umur_Wali: string;
  Nama_Wali: string;
  Alamat_Wali: string;
  Hubungan_Wali: string;
  Jenis_Kelamin_Wali: string;
  Updated_At: string;
  Updated_By: string;
  Updated_By_Name: string;
}

export class PatientBpjsStatementFormModel {
  Tanggal_TTD: string;
  ID_TTD_Petugas: string;
  Nama_TTD_Petugas: string;
  ID_TTD_Saksi: string;
  Nama_TTD_Saksi: string;
  TTD_Pasien: string;
  TTD_Wali: string;
  TTD_Petugas: string;
  TTD_Saksi: string;
  Penanggung_Jawab: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Umur_Wali: string;
  Nama_Wali: string;
  Alamat_Wali: string;
  Hubungan_Wali: string;
  Jenis_Kelamin_Wali: string;
  Updated_At: string;
  Updated_By: string;
  Updated_By_Name: string;

  constructor(request: IPatientBpjsStatementFormModel) {
    this.Tanggal_TTD = request.Tanggal_TTD;
    this.ID_TTD_Petugas = request.ID_TTD_Petugas;
    this.Nama_TTD_Petugas = request.Nama_TTD_Petugas;
    this.ID_TTD_Saksi = request.ID_TTD_Saksi;
    this.Nama_TTD_Saksi = request.Nama_TTD_Saksi;
    this.TTD_Pasien = request.TTD_Pasien;
    this.TTD_Wali = request.TTD_Wali;
    this.TTD_Petugas = request.TTD_Petugas;
    this.TTD_Saksi = request.TTD_Saksi;
    this.Penanggung_Jawab = request.Penanggung_Jawab;
    this.ID_Petugas = request.ID_Petugas;
    this.Nama_Petugas = request.Nama_Petugas;
    this.Updated_At = request.Updated_At;
    this.Updated_By = request.Updated_By;
    this.Updated_By_Name = request.Updated_By_Name;
    this.Umur_Wali = request.Umur_Wali;
    this.Nama_Wali = request.Nama_Wali;
    this.Alamat_Wali = request.Alamat_Wali;
    this.Hubungan_Wali = request.Hubungan_Wali;
    this.Jenis_Kelamin_Wali = request.Jenis_Kelamin_Wali;
  }
}

export interface IPatientBpjsStatementModel extends IDataModel {
  form: IPatientBpjsStatementFormModel;
}

export class PatientBpjsStatementModel extends DataModel {
  form: IPatientBpjsStatementFormModel;

  constructor(req: IPatientBpjsStatementModel) {
    super(req);
    this.form = req.form;
  }
}
