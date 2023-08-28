import { IPediatric, IPrescription, Image, IImage } from '@modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { IPictureDataO, PictureDataO } from '@modules/outpatient/cppt/requests/create-cppt-out-patient.request';
import { IPatientModel } from '@src/shared/model';

export interface ICpptInpatientModel {
  EMR_ID: string;
  ID: string;
  ID_Berobat: string;
  Data_A: string
  Unit: string;
  Waktu: string;
  Data_S: string;
  Data_O: string;
  Data_P: string;
  Is_Dokter: boolean;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  ID_Pelayanan: string;
  Nama_Petugas: string;
  Instruksi_PPA: string;
  Id_Perawat_Cppt: string;
  TTD_Perawat_Cppt: string;
  Nama_Perawat_Cppt: string;
  Id_Dokter_Pengkaji: string;
  TTD_Dokter_Pengkaji: string;
  Nama_Dokter_Pengkaji: string
  Data_P_Lain_Text: string;
  Data_A_Lain_Text: string;
  Data_S_Lain_Text: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  Is_Form_Dokter: number;
  Pediatrik: IPediatric;
  Resep: Array<IPrescription>;
  Submit_Mata: number;
  Submit_Pediatrik: number;
  Submit_Retina: number;
  Validated_At?: string;
  Picture_Data_O: IPictureDataO;
  formFarmasi: any;
  Image_2: IImage;
}

export class CpptInpatientModel {
  EMR_ID: string;
  ID: string;
  ID_Berobat: string;
  Data_A: string
  Data_A_Lain_Text: string
  Data_O: string
  Data_P: string
  Data_P_Lain_Text: string
  Data_S: string
  Data_S_Lain_Text: string
  Gambar_Mata_OD: string
  Gambar_Mata_OS: string
  Gambar_Retina_OD: string
  Gambar_Retina_OS: string
  ID_Pelayanan: string
  ID_Petugas: string
  Id_Dokter_Pengkaji: string
  Id_Perawat_Cppt: string
  Instruksi_PPA: string
  Is_Dokter: boolean
  Is_Form_Dokter: number
  Nama_Dokter_Pengkaji: string
  Nama_Perawat_Cppt: string
  Nama_Petugas: string
  Pediatrik: IPediatric
  Resep: Array<IPrescription>
  Submit_Mata: number
  Submit_Pediatrik: number
  Submit_Retina: number
  TTD_Dokter_Pengkaji: string;
  TTD_Perawat_Cppt: string;
  Unit: string;
  Updated_At: string;
  Updated_By: string;
  Validated_At?: string;
  Waktu: string;
  Picture_Data_O: PictureDataO;
  formFarmasi: any;
  Image_2: IImage;


  constructor(cpptRo: ICpptInpatientModel) {
    this.EMR_ID = cpptRo.EMR_ID;
    this.ID_Berobat = cpptRo.ID_Berobat;
    this.ID = cpptRo.ID;
    this.Unit = cpptRo.Unit;
    this.Waktu = cpptRo.Waktu;
    this.Data_A = cpptRo.Data_A;
    this.Data_O = cpptRo.Data_O;
    this.Data_P = cpptRo.Data_P;
    this.Data_P_Lain_Text = cpptRo.Data_P_Lain_Text;
    this.Data_S_Lain_Text = cpptRo.Data_S_Lain_Text;
    this.Gambar_Mata_OD = cpptRo.Gambar_Mata_OD;
    this.Gambar_Mata_OS = cpptRo.Gambar_Mata_OS;
    this.Gambar_Retina_OD = cpptRo.Gambar_Retina_OD;
    this.Gambar_Retina_OS = cpptRo.Gambar_Retina_OS;
    this.Is_Form_Dokter = cpptRo.Is_Form_Dokter;
    this.Pediatrik = cpptRo.Pediatrik;
    this.Resep = (cpptRo.Resep && Array.isArray(cpptRo.Resep)) ? cpptRo.Resep : [];
    this.Submit_Mata = cpptRo.Submit_Mata;
    this.Submit_Retina = cpptRo.Submit_Retina;
    this.Submit_Pediatrik = cpptRo.Submit_Pediatrik;
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
    this.Data_A_Lain_Text = cpptRo.Data_A_Lain_Text;
    this.Validated_At = cpptRo.Validated_At;
    this.Picture_Data_O = cpptRo.Picture_Data_O;
    this.formFarmasi = cpptRo.formFarmasi;
    this.Image_2 = cpptRo.Image_2;
  }
}

export interface IDoctorVisit {
  ID_Berobat: string;
  Waktu_Visit: string;
  ID_Dokter: string;
  Dokter_Nama: string;
  Penanganan: string;
  ID: string;
}

export class DoctorVisit {
  ID_Berobat: string;
  Waktu_Visit: string;
  ID_Dokter: string;
  Dokter_Nama: string;
  Penanganan: string;
  ID: string;

  constructor(req: IDoctorVisit) {
    this.ID_Berobat = req.ID_Berobat;
    this.Waktu_Visit = req.Waktu_Visit;
    this.ID_Dokter = req.ID_Dokter;
    this.Dokter_Nama = req.Dokter_Nama;
    this.Penanganan = req.Penanganan;
    this.ID = req.ID;
  }
}

export interface IDaftarVisitDokter {
  total: number;
  EMR_ID: string;
  pasien: IPatientModel;
  records: Array<IDoctorVisit>;
}

export class DaftarVisitDokter {
  total: number;
  EMR_ID: string;
  pasien: IPatientModel;
  records: Array<IDoctorVisit>;

  constructor(req: IDaftarVisitDokter) {
    this.total = req.total;
    this.EMR_ID = req.EMR_ID;
    this.pasien = req.pasien;
    this.records = req.records && Array.isArray(req.records) ? req.records.map((d) => new DoctorVisit(d)) : [];
  }
}
