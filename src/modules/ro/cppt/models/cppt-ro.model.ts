import { AnamnesaModel, IAnamnesaModel } from '../../preliminary-study/models/preliminary-study.model';
import { IPatientModel, PatientModel } from '@shared/model';
import { IPicture, Picture } from '@src/modules/operating-room/cppt/requests/create-cppt-ok-nurse.request';
import { ConsultationSheetForm } from '@src/modules/outpatient/consultation-sheet/models/consultation-sheet.model';
import { IPictureDataO, PictureDataO } from '@src/modules/outpatient/cppt/requests/create-cppt-out-patient.request';
import { Pediatric, IPediatric, Image, IImage  } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';

export interface ICpptRoModel {
  EMR_ID: string;
  ID: string
  ID_Pelayanan: string;
  Data_S: string;
  Data_O: string;
  Data_O_Json?: any;
  Select_Data_O: string;
  Data_A: string;
  Data_A_Text?: string;
  Data_P: string;
  Instruksi_PPA: string;
  Unit: string;
  Waktu: string;
  ID_Petugas?: string;
  Nama_Petugas?: string;
  Is_Dokter: string;
  Id_Perawat_Cppt: string;
  TTD_Perawat_Cppt: string;
  Nama_Perawat_Cppt: string;
  Id_Dokter_Pengkaji: string;
  TTD_Dokter_Pengkaji: string;
  Nama_Dokter_Pengkaji: string;
  Updated_At: string;
  Updated_By: string;
  Updated_By_Name: string;
  Validated_At?: string;
  Cmb_Data_O: number;
}

export class CpptRoModel {
  EMR_ID: string;
  ID: string
  ID_Pelayanan: string;
  Data_S: string;
  Data_O: string;
  Data_O_Json?: any;
  Select_Data_O: string;
  Data_A: string;
  Data_A_Text?: string;
  Data_P: string;
  Instruksi_PPA: string;
  Unit: string;
  Waktu: string;
  ID_Petugas?: string;
  Nama_Petugas?: string;
  Is_Dokter: string;
  Id_Perawat_Cppt: string;
  TTD_Perawat_Cppt: string;
  Nama_Perawat_Cppt: string;
  Id_Dokter_Pengkaji: string;
  TTD_Dokter_Pengkaji: string;
  Nama_Dokter_Pengkaji: string;
  Updated_At: string;
  Updated_By: string;
  Updated_By_Name: string;
  Validated_At?: string;
  Cmb_Data_O: number;

  constructor(cpptRo: ICpptRoModel) {
    this.EMR_ID = cpptRo.EMR_ID;
    this.ID = cpptRo.ID;
    this.Unit = cpptRo.Unit;
    this.Waktu = cpptRo.Waktu;
    this.Data_A = cpptRo.Data_A;
    this.Data_O = cpptRo.Data_O;
    this.Data_P = cpptRo.Data_P;
    this.Data_S = cpptRo.Data_S;
    this.Data_O_Json = cpptRo.Data_O_Json;
    this.Select_Data_O = cpptRo.Select_Data_O;
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
    this.Updated_By_Name = cpptRo.Updated_By_Name;
    this.Validated_At = cpptRo.Validated_At;
    this.Cmb_Data_O = cpptRo.Cmb_Data_O;
  }
}

export interface ICpptRecord {
  Validated_At?: string;
  Data_A: string;
  Data_A_Lain_Text: string;
  Data_O: string;
  Data_O_Json: any;
  Data_O_Tambahan: string;
  Data_P: string;
  Data_P_Lain_Text: string;
  Data_S: string;
  Data_S_Lain_Text: string;
  Data_D: string;
  Data_I: string;
  Data_M: string;
  Data_E: string;
  Dokter_Dpjp_Id: string;
  Dokter_Dpjp_Nama: string;
  EMR_ID: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  Anjuran: string;
  ID: string;
  ID_Berobat: string;
  ID_Pelayanan: string;
  ID_Petugas: string;
  Id_Dokter_Pengkaji: string;
  Id_Perawat_Cppt: string;
  Instruksi_PPA: string;
  Is_Dokter: string;
  Is_Form_Dokter: number;
  Nama_Dokter_Pengkaji: string;
  Nama_Perawat_Cppt: string;
  Nama_Petugas: string;
  Pediatrik: IPediatric;
  Picture: IPicture;
  Resep: string;
  Submit_Mata: number;
  Submit_Pediatrik: number;
  Submit_Retina: number;
  TTD_Dokter_Dpjp: string;
  TTD_Dokter_Pengkaji: string;
  TTD_Perawat_Cppt: string;
  Unit: string;
  Updated_At: string;
  Updated_By: string;
  Waktu: string;
  Picture_Data_O: IPictureDataO;
  Cmb_Data_O: number;
  Masalah_Obat_Radio: string;
  Masalah_Obat_Teks: string;
  Efek_Samping_Obat: string;
  Efek_Samping_Obat_Radio: string;
  Interaksi_Obat: string;
  Interaksi_Obat_Radio: string;
  Monitor_Terapi: string;
  Monitor_Efek_Samping: string;
  Anjuran_Dokter: string;
  Anjuran_Perawat: string;
  TD: string;
  KGD: string;
  formFarmasi: any;
  Konsultasi: string;
  Image_2: IImage;
}

export class CpptRecord {
  Validated_At?: string;
  Data_A: string;
  Data_A_Lain_Text: string;
  Data_O: string;
  Data_O_Json: any;
  Data_O_Tambahan: string;
  Data_P: string;
  Data_P_Lain_Text: string;
  Data_S: string;
  Data_S_Lain_Text: string;
  Data_D: string;
  Data_I: string;
  Data_M: string;
  Data_E: string;
  Dokter_Dpjp_Id: string;
  Dokter_Dpjp_Nama: string;
  EMR_ID: string;
  Anjuran: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  ID: string;
  ID_Berobat: string;
  ID_Pelayanan: string;
  ID_Petugas: string;
  Id_Dokter_Pengkaji: string;
  Id_Perawat_Cppt: string;
  Instruksi_PPA: string;
  Is_Dokter: string;
  Is_Form_Dokter: number;
  Nama_Dokter_Pengkaji: string;
  Nama_Perawat_Cppt: string;
  Nama_Petugas: string;
  Pediatrik: Pediatric;
  Picture: Picture;
  Resep: string;
  Submit_Mata: number;
  Submit_Pediatrik: number;
  Submit_Retina: number;
  TTD_Dokter_Dpjp: string;
  TTD_Dokter_Pengkaji: string;
  TTD_Perawat_Cppt: string;
  Unit: string;
  Updated_At: string;
  Updated_By: string;
  Waktu: string;
  Picture_Data_O: PictureDataO;
  Cmb_Data_O: number;
  Masalah_Obat_Radio: string;
  Masalah_Obat_Teks: string;
  Efek_Samping_Obat: string;
  Efek_Samping_Obat_Radio: string;
  Interaksi_Obat: string;
  Interaksi_Obat_Radio: string;
  Monitor_Terapi: string;
  Monitor_Efek_Samping: string;
  Anjuran_Dokter: string;
  Anjuran_Perawat: string;
  TD: string;
  KGD: string;
  formFarmasi: any;
  Konsultasi: string;
  Image_2: Image;
  
  constructor(req: ICpptRecord) {
    this.Validated_At = req.Validated_At;
    this.Data_A = req.Data_A;
    this.Data_A_Lain_Text = req.Data_A_Lain_Text;
    this.Data_O = req.Data_O;
    this.Data_O_Json = req.Data_O_Json;
    this.Data_O_Tambahan = req.Data_O_Tambahan;
    this.Data_P = req.Data_P;
    this.Data_P_Lain_Text = req.Data_P_Lain_Text;
    this.Data_S = req.Data_S;
    this.Data_S_Lain_Text = req.Data_S_Lain_Text;
    this.Data_D = req.Data_D;
    this.Data_I = req.Data_I;
    this.Data_M = req.Data_M;
    this.Data_E = req.Data_E;
    this.Dokter_Dpjp_Id = req.Dokter_Dpjp_Id;
    this.Dokter_Dpjp_Nama = req.Dokter_Dpjp_Nama;
    this.EMR_ID = req.EMR_ID;
    this.Gambar_Mata_OD = req.Gambar_Mata_OD;
    this.Gambar_Mata_OS = req.Gambar_Mata_OS;
    this.Gambar_Retina_OD = req.Gambar_Retina_OD;
    this.Gambar_Retina_OS = req.Gambar_Retina_OS;
    this.Anjuran = req.Anjuran;
    this.ID = req.ID;
    this.ID_Berobat = req.ID_Berobat;
    this.ID_Pelayanan = req.ID_Pelayanan;
    this.ID_Petugas = req.ID_Petugas;
    this.Id_Dokter_Pengkaji = req.Id_Dokter_Pengkaji;
    this.Id_Perawat_Cppt = req.Id_Perawat_Cppt;
    this.Instruksi_PPA = req.Instruksi_PPA;
    this.Is_Dokter = req.Is_Dokter;
    this.Is_Form_Dokter = req.Is_Form_Dokter;
    this.Nama_Dokter_Pengkaji = req.Nama_Dokter_Pengkaji;
    this.Nama_Perawat_Cppt = req.Nama_Perawat_Cppt;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Pediatrik = req.Pediatrik;
    this.Picture = req.Picture;
    this.Resep = req.Resep;
    this.Submit_Mata = req.Submit_Mata;
    this.Submit_Pediatrik = req.Submit_Pediatrik;
    this.Submit_Retina = req.Submit_Retina;
    this.TTD_Dokter_Dpjp = req.TTD_Dokter_Dpjp;
    this.TTD_Dokter_Pengkaji = req.TTD_Dokter_Pengkaji;
    this.TTD_Perawat_Cppt = req.TTD_Perawat_Cppt;
    this.Unit = req.Unit;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Validated_At = req.Validated_At;
    this.Waktu = req.Waktu;
    this.Picture_Data_O = req.Picture_Data_O;
    this.Cmb_Data_O = req.Cmb_Data_O;
    this.Data_O_Tambahan = req.Data_O_Tambahan;
    this.Masalah_Obat_Radio = req.Masalah_Obat_Radio;
    this.Masalah_Obat_Teks = req.Masalah_Obat_Teks;
    this.Efek_Samping_Obat = req.Efek_Samping_Obat;
    this.Efek_Samping_Obat_Radio = req.Efek_Samping_Obat_Radio;
    this.Interaksi_Obat = req.Interaksi_Obat;
    this.Interaksi_Obat_Radio = req.Interaksi_Obat_Radio;
    this.Monitor_Terapi = req.Monitor_Terapi;
    this.Monitor_Efek_Samping = req.Monitor_Efek_Samping;
    this.Anjuran_Dokter = req.Anjuran_Dokter;
    this.Anjuran_Perawat = req.Anjuran_Perawat;
    this.formFarmasi = req.formFarmasi;
    this.TD = req.TD;
    this.KGD = req.KGD;
    this.Konsultasi = req.Konsultasi;
    this.Image_2 = req.Image_2;
  }
}

export interface ICpptModel {
  EMR_ID: string;
  total: number;
  totalFiltered: number;
  pasien: IPatientModel,
  records: CpptRecord[],
  anamnesa: AnamnesaModel[];
}

export class CpptModel {
  EMR_ID: string;
  total: number;
  totalFiltered: number;
  pasien: IPatientModel;
  records: CpptRecord[] = [];
  anamnesa: AnamnesaModel[] = [];

  constructor(cppt: ICpptModel) {
    this.EMR_ID = cppt.EMR_ID;
    this.total = cppt.total;
    this.totalFiltered = cppt.totalFiltered;
    this.pasien = new PatientModel(cppt.pasien);
    this.records = (cppt.records && Array.isArray(cppt.records)) ? cppt.records.map((c) => new CpptRecord(c)) : [];
    this.anamnesa = (cppt.anamnesa && Array.isArray(cppt.anamnesa)) ? cppt.anamnesa.map((c) => new AnamnesaModel(c)) : [];
  }
}
