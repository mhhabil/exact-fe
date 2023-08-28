import { CpptRoModel, ICpptRoModel } from '@modules/ro/cppt/models/cppt-ro.model';

export interface ICpptOkModel extends ICpptRoModel {
  Resep: any
}

export class CpptOkModel {
  ID: string;
  Unit: string;
  Waktu: string;
  Data_A: string;
  Data_O: string;
  Data_P: string;
  Data_S: string;
  Is_Dokter: any;
  ID_Petugas: any;
  Updated_At: string;
  Updated_By: string;
  ID_Pelayanan: string;
  Nama_Petugas: any;
  Instruksi_PPA: string;
  Id_Perawat_Cppt: string;
  TTD_Perawat_Cppt: string;
  Nama_Perawat_Cppt: string;
  Id_Dokter_Pengkaji: string;
  TTD_Dokter_Pengkaji: string;
  Nama_Dokter_Pengkaji: string;
  Data_A_Text?: string;
  Validated_At?: string;
  Data_O_Json?: any;
  Resep: any;

  constructor(cpptRo: ICpptOkModel) {
    this.ID = cpptRo.ID;
    this.Unit = cpptRo.Unit;
    this.Waktu = cpptRo.Waktu;
    this.Data_A = cpptRo.Data_A;
    this.Data_O = cpptRo.Data_O;
    this.Data_P = cpptRo.Data_P;
    this.Data_S = cpptRo.Data_S;
    this.Is_Dokter = cpptRo.Is_Dokter;
    this.ID_Petugas = cpptRo.ID_Petugas;
    this.Updated_At = cpptRo.Updated_At;
    this.Updated_By = cpptRo.Updated_By;
    this.ID_Pelayanan = cpptRo.ID_Pelayanan;
    this.Nama_Petugas = cpptRo.Nama_Petugas;
    this.Instruksi_PPA = cpptRo.Instruksi_PPA;
    this.Id_Perawat_Cppt = cpptRo.Id_Perawat_Cppt;
    this.TTD_Perawat_Cppt = cpptRo.TTD_Perawat_Cppt;
    this.Nama_Perawat_Cppt = cpptRo.Nama_Perawat_Cppt;
    this.Id_Dokter_Pengkaji = cpptRo.Id_Dokter_Pengkaji;
    this.TTD_Dokter_Pengkaji = cpptRo.TTD_Dokter_Pengkaji;
    this.Nama_Dokter_Pengkaji = cpptRo.Nama_Dokter_Pengkaji
    this.Data_A_Text = cpptRo.Data_A_Text;
    this.Validated_At = cpptRo.Validated_At;
    this.Data_O_Json = cpptRo.Data_O_Json;
    this.Resep = cpptRo.Resep;
  }
}
