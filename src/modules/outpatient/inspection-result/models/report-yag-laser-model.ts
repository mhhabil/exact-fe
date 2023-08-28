import { DataModel, IDataModel } from '@shared/model';
import { IDoctorModel } from '@src/shared/doctor';
import { DoctorModel } from '@src/shared/doctor/models/doctor.model';

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

export interface IMata {
  Kiri: number;
  Kanan: number;
}

export class Mata {
  Kiri: number;
  Kanan: number;

  constructor(mata: IMata) {
    this.Kiri = mata.Kiri;
    this.Kanan = mata.Kanan;
  }
}

export interface IPasien_Ditetes {
  Lfx: number;
  Floxa: number;
  Timol: number;
  Tonor: number;
  Noncort_Eye_Drop: number;
}

export class Pasien_Ditetes {
  Lfx: number;
  Floxa: number;
  Timol: number;
  Tonor: number;
  Noncort_Eye_Drop: number;

  constructor(pasien: IPasien_Ditetes) {
    this.Lfx = pasien.Lfx;
    this.Floxa = pasien.Floxa;
    this.Timol = pasien.Timol;
    this.Tonor = pasien.Tonor;
    this.Noncort_Eye_Drop = pasien.Noncort_Eye_Drop;
  }
}

export interface IMataPasienDitetes {
  Mydriatil: number;
  Pantocain: number;
}

export class MataPasienDitetes {
  Mydriatil: number;
  Pantocain: number;

  constructor(ditetes: IMataPasienDitetes) {
    this.Mydriatil = ditetes.Mydriatil;
    this.Pantocain = ditetes.Pantocain;
  }
}

export interface IReportYagLaserForm {
  Mata: IMata;
  Dokter_id: string;
  Lain_Lain: string;
  ID_Petugas: string;
  Keterangan: string;
  Updated_At: string;
  Updated_By: string;
  Dokter_Nama: string;
  Power_Laser: string;
  Jumlah_Laser: string;
  Nama_Petugas: string;
  Lama_Tindakan: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Pasien_Ditetes: IPasien_Ditetes;
  Tanggal_Tindakan: string;
  Dokter_Operator_Id: string;
  Mata_Pasien_Ditetes: IMataPasienDitetes;
  TTD_Dokter_Operator: string;
  Diagnosa_Pra_Tindakan: string;
  Perawat_Rawat_Jalan_Id: string;
  TTD_Perawat_Rawat_Jalan: string;
  Nama_TTD_Dokter_Operator: string;
  Tanggal_Fakoemulsifikasi: string;
  Nama_TTD_Perawat_Rawat_Jalan: string;
}

export class ReportYagLaserForm {
  Mata: IMata;
  Dokter_id: string;
  Lain_Lain: string;
  ID_Petugas: string;
  Keterangan: string;
  Updated_At: string;
  Updated_By: string;
  Dokter_Nama: string;
  Power_Laser: string;
  Jumlah_Laser: string;
  Nama_Petugas: string;
  Lama_Tindakan: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Pasien_Ditetes: IPasien_Ditetes;
  Tanggal_Tindakan: string;
  Dokter_Operator_Id: string;
  Mata_Pasien_Ditetes: IMataPasienDitetes;
  TTD_Dokter_Operator: string;
  Diagnosa_Pra_Tindakan: string;
  Perawat_Rawat_Jalan_Id: string;
  TTD_Perawat_Rawat_Jalan: string;
  Nama_TTD_Dokter_Operator: string;
  Tanggal_Fakoemulsifikasi: string;
  Nama_TTD_Perawat_Rawat_Jalan: string;

  constructor(yag: IReportYagLaserForm) {
    this.Mata = yag.Mata;
    this.Dokter_id = yag.Dokter_id;
    this.Lain_Lain = yag.Lain_Lain; 
    this.ID_Petugas = yag.ID_Petugas;
    this.Keterangan = yag.Keterangan;
    this.Updated_At = yag.Updated_At;
    this.Updated_By = yag.Updated_By;
    this.Dokter_Nama = yag.Dokter_Nama;
    this.Power_Laser = yag.Power_Laser;
    this.Jumlah_Laser = yag.Jumlah_Laser;
    this.Nama_Petugas = yag.Nama_Petugas;
    this.Lama_Tindakan = yag.Lama_Tindakan;
    this.Gambar_Mata_OD = yag.Gambar_Mata_OD;
    this.Gambar_Mata_OS = yag.Gambar_Mata_OS;
    this.Pasien_Ditetes = yag.Pasien_Ditetes;
    this.Tanggal_Tindakan = yag.Tanggal_Tindakan;
    this.Dokter_Operator_Id = yag.Dokter_Operator_Id;
    this.Mata_Pasien_Ditetes = yag.Mata_Pasien_Ditetes;
    this.TTD_Dokter_Operator = yag.TTD_Dokter_Operator;
    this.Diagnosa_Pra_Tindakan = yag.Diagnosa_Pra_Tindakan;
    this.Perawat_Rawat_Jalan_Id = yag.Perawat_Rawat_Jalan_Id;
    this.TTD_Perawat_Rawat_Jalan = yag.Perawat_Rawat_Jalan_Id;
    this.Nama_TTD_Dokter_Operator = yag.Nama_TTD_Dokter_Operator;
    this.Tanggal_Fakoemulsifikasi = yag.Tanggal_Fakoemulsifikasi;
    this.Nama_TTD_Perawat_Rawat_Jalan = yag.Nama_TTD_Perawat_Rawat_Jalan;
  }
}

export interface IReportYagLaserModel extends IDataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;
  dokter: Array<IDoctorModel>;
}

export class ReportYagLaserModel extends DataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;
  dokter: Array<IDoctorModel>;

  constructor(yag: IReportYagLaserModel) {
    super(yag);
    this.no_berobat = (Array.isArray(yag.no_berobat)) ? yag.no_berobat.map((a) => new TreatmentNumber(a)) : [];
    this.form = yag.form;
    this.dokter = (Array.isArray(yag.dokter)) ? yag.dokter.map((a) => new DoctorModel(a)) : [];
  }

}