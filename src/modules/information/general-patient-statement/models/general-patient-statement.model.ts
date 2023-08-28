import { DataModel, IDataModel } from "@src/shared/model";

export interface IGeneralPatientStatementFormModel {
  Tanggal_TTD: string;
  ID_TTD_Petugas: string;
  Nama_TTD_Petugas: string;
  ID_TTD_Saksi: string;
  Nama_TTD_Saksi: string;
  TTD_Pasien: string;
  TTD_Wali: string;
  TTD_Petugas: string;
  TTD_Saksi: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  NIK: string;
}

export class GeneralPatientStatementFormModel {
  Tanggal_TTD: string;
  ID_TTD_Petugas: string;
  Nama_TTD_Petugas: string;
  ID_TTD_Saksi: string;
  Nama_TTD_Saksi: string;
  TTD_Pasien: string;
  TTD_Wali: string;
  TTD_Petugas: string;
  TTD_Saksi: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  NIK: string;

  constructor(req: IGeneralPatientStatementFormModel) {
    this.Tanggal_TTD = req.Tanggal_TTD;
    this.ID_TTD_Petugas = req.ID_TTD_Petugas;
    this.Nama_TTD_Petugas = req.Nama_TTD_Petugas;
    this.ID_TTD_Saksi = req.ID_TTD_Saksi;
    this.Nama_TTD_Saksi = req.Nama_TTD_Saksi;
    this.TTD_Pasien = req.TTD_Pasien;
    this.TTD_Wali = req.TTD_Wali;
    this.TTD_Petugas = req.TTD_Petugas;
    this.TTD_Saksi = req.TTD_Saksi;
    this.ID_Petugas = req.ID_Petugas;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.NIK = req.NIK;
  }
}

export interface IGeneralPatientStatementModel extends IDataModel {
  form: GeneralPatientStatementFormModel;
}

export class GeneralPatientStatementModel extends DataModel {
  form: GeneralPatientStatementFormModel;

  constructor(request: IGeneralPatientStatementModel) {
    super(request);
    this.form = request.form;
  }
}
