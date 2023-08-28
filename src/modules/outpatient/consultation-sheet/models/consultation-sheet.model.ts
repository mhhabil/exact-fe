import { IPatientModel, PatientModel } from "@src/shared/model";
import { IPrescription } from "../../doctor-preliminary-study/models/doctor-preliminary-study.model";

export interface IConsultationSheetForm {
  EMR_ID: string;
  ID: string;
  Tab: string;
  Rumah_Sakit_Tujuan: string;
  Dokter_Konsul_Nama_Eksternal: string;
  Tanggal_Konsul: string;
  Diagnosa: string;
  Terapi: string;
  Yth_Dokter_Konsul_Nama: string;
  Yth_Dokter_Konsul_Id: string;
  Status_Konsultasi: string;
  Balas_Resep: any;
  TTD_Dokter_Konsultasi: string;
  ID_Dokter_Konsultasi: string;
  Nama_TTD_Dokter_Konsultasi: string;
  Tanggal_Balas: string;
  Anjuran: string;
  Yth_Dokter_Balas_Nama: string;
  Yth_Dokter_Balas_Id: string;
  TTD_Dokter_Balas_Konsultasi: string;
  ID_Dokter_Balas_Konsultasi: string;
  Nama_TTD_Dokter_Balas_Konsultasi: string;
  Deleted: number;
  Url_Image_Surat: string;
  Name_Image_Surat: string;
  Type_Image_Surat: string;
  Size_Image_Surat: string;
  PDF: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  CPPT_ID: string;
}

export class ConsultationSheetForm {
  EMR_ID: string;
  ID: string;
  Tab: string;
  Rumah_Sakit_Tujuan: string;
  Dokter_Konsul_Nama_Eksternal: string;
  Tanggal_Konsul: string;
  Diagnosa: string;
  Terapi: string;
  Yth_Dokter_Konsul_Nama: string;
  Yth_Dokter_Konsul_Id: string;
  Status_Konsultasi: string;
  Balas_Resep: any;
  TTD_Dokter_Konsultasi: string;
  ID_Dokter_Konsultasi: string;
  Nama_TTD_Dokter_Konsultasi: string;
  Tanggal_Balas: string;
  Anjuran: string;
  Yth_Dokter_Balas_Nama: string;
  Yth_Dokter_Balas_Id: string;
  TTD_Dokter_Balas_Konsultasi: string;
  ID_Dokter_Balas_Konsultasi: string;
  Nama_TTD_Dokter_Balas_Konsultasi: string;
  Url_Image_Surat: string;
  Name_Image_Surat: string;
  Type_Image_Surat: string;
  Size_Image_Surat: string;
  Deleted: number;
  PDF: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  CPPT_ID: string;

  constructor(req: IConsultationSheetForm) {
    this.EMR_ID = req.EMR_ID;
    this.ID = req.ID;
    this.Tab = req.Tab;
    this.Rumah_Sakit_Tujuan = req.Rumah_Sakit_Tujuan;
    this.Dokter_Konsul_Nama_Eksternal = req.Dokter_Konsul_Nama_Eksternal;
    this.Tanggal_Konsul = req.Tanggal_Konsul;
    this.Tanggal_Balas = req.Tanggal_Balas;
    this.Diagnosa = req.Diagnosa;
    this.Terapi = req.Terapi;
    this.Yth_Dokter_Konsul_Nama = req.Yth_Dokter_Konsul_Nama;
    this.Yth_Dokter_Konsul_Id = req.Yth_Dokter_Konsul_Id;
    this.Status_Konsultasi = req.Status_Konsultasi;
    this.Balas_Resep = req.Balas_Resep && Array.isArray(req.Balas_Resep) ? req.Balas_Resep : [];
    this.TTD_Dokter_Konsultasi = req.TTD_Dokter_Konsultasi;
    this.ID_Dokter_Konsultasi = req.ID_Dokter_Konsultasi;
    this.Nama_TTD_Dokter_Konsultasi = req.Nama_TTD_Dokter_Konsultasi;
    this.Anjuran = req.Anjuran;
    this.Yth_Dokter_Balas_Nama = req.Yth_Dokter_Balas_Nama;
    this.Yth_Dokter_Balas_Id = req.Yth_Dokter_Balas_Id;
    this.TTD_Dokter_Balas_Konsultasi = req.TTD_Dokter_Balas_Konsultasi;
    this.Url_Image_Surat = req.Url_Image_Surat;
    this.Name_Image_Surat = req.Name_Image_Surat;
    this.Type_Image_Surat = req.Type_Image_Surat;
    this.Size_Image_Surat = req.Size_Image_Surat;
    this.ID_Dokter_Balas_Konsultasi = req.ID_Dokter_Balas_Konsultasi;
    this.Nama_TTD_Dokter_Balas_Konsultasi = req.Nama_TTD_Dokter_Balas_Konsultasi;
    this.Deleted = req.Deleted;
    this.PDF = req.PDF;
    this.ID_Petugas = req.ID_Petugas;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.CPPT_ID = req.CPPT_ID;
  }
}

export interface IConsultationSheet {
  total: number;
  totalFiltered: number;
  EMR_ID: string;
  pasien: IPatientModel;
  records: Array<IConsultationSheetForm>
}

export class ConsultationSheet {
  total: number;
  totalFiltered: number;
  EMR_ID: string;
  pasien: IPatientModel;
  records: Array<IConsultationSheetForm>

  constructor(req: IConsultationSheet) {
    this.total = req.total;
    this.totalFiltered = req.totalFiltered;
    this.EMR_ID = req.EMR_ID;
    this.pasien = new PatientModel(req.pasien);
    this.records = (req.records && Array.isArray(req.records)) ? req.records.map((c) => new ConsultationSheetForm(c)) : [];
  }
}

export interface ICPPTLink {
  Data_A: string;
  Data_P: string;
  ID: string;
}

export class CPPTLink {
  Data_A: string;
  Data_P: string;
  ID: string;
  constructor(model: ICPPTLink) {
    this.Data_A = model.Data_A;
    this.Data_P = model.Data_P;
    this.ID = model.ID;
  }

  static createPData(dataP: string, prescription: any) {
    let string = '';
    if (dataP) {
      string = string.concat(`${dataP}\n`)
    }
    for (let i = 0; i < prescription.length; i += 1) {
      if (prescription[i]) {
        string = string.concat(`${prescription[i].Nama_Obat} - ${prescription[i].Kode_AturanPakai}\n`)
      }
    }
    return string;
  }
}
