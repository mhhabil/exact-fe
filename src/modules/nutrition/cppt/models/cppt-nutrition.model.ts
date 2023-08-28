export interface ICpptNutritionModel {
  EMR_ID: string;
  ID: string;
  Data_A: string;
  Data_D: string;
  Data_I: string;
  Data_M: string;
  Data_E: string;
  ID_Pelayanan: string
  ID_Petugas: string
  Id_Dokter_Pengkaji: string;
  Id_Perawat_Cppt: string
  Instruksi_PPA: string
  Is_Dokter: boolean
  Nama_Perawat_Cppt: string
  Nama_Dokter_Pengkaji: string;
  Nama_Petugas: string
  TTD_Perawat_Cppt: string;
  TTD_Dokter_Pengkaji: string;
  Unit: string;
  Updated_At: string;
  Updated_By: string;
  Waktu: string;
}

export class CpptNutritionModel {
  EMR_ID: string;
  ID: string;
  Data_A: string;
  Data_D: string;
  Data_I: string;
  Data_M: string;
  Data_E: string;
  ID_Pelayanan: string
  ID_Petugas: string
  Id_Perawat_Cppt: string
  Id_Dokter_Pengkaji: string;
  Instruksi_PPA: string
  Is_Dokter: boolean
  Nama_Perawat_Cppt: string
  Nama_Dokter_Pengkaji: string;
  Nama_Petugas: string
  TTD_Perawat_Cppt: string;
  TTD_Dokter_Pengkaji: string;
  Unit: string;
  Updated_At: string;
  Updated_By: string;
  Waktu: string;

  constructor(req: ICpptNutritionModel) {
    this.EMR_ID = req.EMR_ID;
    this.ID = req.ID;
    this.Data_A = req.Data_A;
    this.Data_D = req.Data_D;
    this.Data_I = req.Data_I;
    this.Data_M = req.Data_M;
    this.Data_E = req.Data_E;
    this.ID_Pelayanan = req.ID_Pelayanan;
    this.ID_Petugas = req.ID_Petugas;
    this.Id_Perawat_Cppt = req.Id_Perawat_Cppt;
    this.Id_Dokter_Pengkaji = req.Id_Dokter_Pengkaji;
    this.Instruksi_PPA = req.Instruksi_PPA;
    this.Is_Dokter = req.Is_Dokter;
    this.Nama_Perawat_Cppt = req.Nama_Perawat_Cppt;
    this.Nama_Dokter_Pengkaji = req.Nama_Dokter_Pengkaji;
    this.Nama_Petugas = req.Nama_Petugas;
    this.TTD_Perawat_Cppt = req.TTD_Perawat_Cppt;
    this.TTD_Dokter_Pengkaji = req.TTD_Dokter_Pengkaji;
    this.Unit = req.Unit;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Waktu = req.Waktu;
  }
}
