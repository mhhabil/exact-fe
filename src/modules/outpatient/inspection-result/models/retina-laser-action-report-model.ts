import { DataModel, IDataModel } from '@shared/model';

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

export interface ITindakanLaser {
  Grid: number;
  Focal: number;
  Laser: number;
  Barrage: number;
  Laser_1: number;
  Laser_2: number;
  Laser_3: number;
  Lattice: number;
}

export class TindakanLaser {
  Grid: number;
  Focal: number;
  Laser: number;
  Barrage: number;
  Laser_1: number;
  Laser_2: number;
  Laser_3: number;
  Lattice: number;

  constructor(tindakan: ITindakanLaser) {
    this.Grid = tindakan.Grid;
    this.Focal = tindakan.Focal;
    this.Laser = tindakan.Laser;
    this.Barrage = tindakan.Barrage;
    this.Laser_1 = tindakan.Laser_1;
    this.Laser_2 = tindakan.Laser_2;
    this.Laser_3 = tindakan.Laser_3;
    this.Lattice = tindakan.Lattice;
  }
}

export interface IMataPasienDitetes {
  Mydriatil: number;
  Pantocain: number;
}

export class MataPasienDitetes {
  Mydriatil: number;
  Pantocain: number;

  constructor(mata: IMataPasienDitetes) {
    this.Mydriatil = mata.Mydriatil;
    this.Pantocain = mata.Pantocain;
  }
}

export interface IRetinaLaserActionReportForm {
  Mata: IMata;
  Power: string;
  Durasi: string;
  Obat_Id: string;
  Jenis_Id: string;
  Informasi: string;
  Spot_Size: string;
  ID_Petugas: string;
  Komplikasi: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Tindakan_Laser: ITindakanLaser;
  Jumlah_Tembakan: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  Noncort_Eye_Drop: string;
  Diagnosa_Tindakan: string;
  Dokter_Operator_Id: string;
  Mata_Pasien_Ditetes: IMataPasienDitetes;
  TTD_Dokter_Operator: string;
  Perawat_Rawat_Jalan_Id: string;
  TTD_Perawat_Rawat_Jalan: string;
  Nama_TTD_Dokter_Operator: string;
  Nama_TTD_Perawat_Rawat_Jalan: string;
}

export class RetinaLaserActionReportForm {
  Mata: IMata;
  Power: string;
  Durasi: string;
  Obat_Id: string;
  Jenis_Id: string;
  Informasi: string;
  Spot_Size: string;
  ID_Petugas: string;
  Komplikasi: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Tindakan_Laser: ITindakanLaser;
  Jumlah_Tembakan: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  Diagnosa_Tindakan: string;
  Dokter_Operator_Id: string;
  Mata_Pasien_Ditetes: IMataPasienDitetes;
  TTD_Dokter_Operator: string;
  Perawat_Rawat_Jalan_Id: string;
  TTD_Perawat_Rawat_Jalan: string;
  Nama_TTD_Dokter_Operator: string;
  Nama_TTD_Perawat_Rawat_Jalan: string;

  constructor(retina: IRetinaLaserActionReportForm) {
    this.Mata = retina.Mata;
    this.Power = retina.Power;
    this.Durasi = retina.Durasi;
    this.Obat_Id = retina.Obat_Id;
    this.Jenis_Id = retina.Jenis_Id;
    this.Informasi = retina.Informasi;
    this.Spot_Size = retina.Spot_Size;
    this.ID_Petugas = retina.ID_Petugas;
    this.Komplikasi = retina.Komplikasi;
    this.Updated_At = retina.Updated_At;
    this.Updated_By = retina.Updated_By;
    this.TTD_Tanggal = retina.TTD_Tanggal;
    this.Nama_Petugas = retina.Nama_Petugas;
    this.Tindakan_Laser = retina.Tindakan_Laser;
    this.Jumlah_Tembakan = retina.Jumlah_Tembakan;
    this.Gambar_Retina_OD = retina.Gambar_Retina_OD;
    this.Gambar_Retina_OS = retina.Gambar_Retina_OS;
    this.Diagnosa_Tindakan = retina.Diagnosa_Tindakan;
    this.Dokter_Operator_Id = retina.Dokter_Operator_Id;
    this.Mata_Pasien_Ditetes = retina.Mata_Pasien_Ditetes;
    this.TTD_Dokter_Operator = retina.TTD_Dokter_Operator;
    this.Perawat_Rawat_Jalan_Id = retina.Perawat_Rawat_Jalan_Id;
    this.TTD_Perawat_Rawat_Jalan = retina.TTD_Perawat_Rawat_Jalan;
    this.Nama_TTD_Dokter_Operator = retina.Nama_TTD_Dokter_Operator;
    this.Nama_TTD_Perawat_Rawat_Jalan = retina.Nama_TTD_Perawat_Rawat_Jalan;
  }
}

export interface IRetinaLaserActionReportModel extends IDataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;
}

export class RetinaLaserActionReportModel extends DataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;

  constructor(laser: IRetinaLaserActionReportModel) {
    super(laser);
    this.no_berobat = (Array.isArray(laser.no_berobat)) ? laser.no_berobat.map((a) => new TreatmentNumber(a)) : [];
    this.form = laser.form;
  }
}
