import { IPatientModel, PatientModel } from "@src/shared/model";

export interface IHaisSurveillanceInfectionListDetail {
  Hari: string;
  ID: string;
  Waktu: string;
  Keterangan: string;
  ID_Pegawai: string;
  Nama_Pegawai: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Pegawai: string;
  KRS: number;
  Kontrol: number;
  Pelindung_Kasa: number;
  Pelindung_Eyeshield: number;
  Antibiotik_Topikal: number;
  Antibiotik_Oral: number;
  Mata_Air: number;
  Mata_Asap: number;
  Mata_Debu: number;
  GDA: number;
  IDO_Kabur: number;
  IDO_Merah: number;
  IDO_Nyeri: number;
  IDO_TIO: number;
  IDO_Odem_Kornea: number;
  IDO_Flare: number;
  IDO_Hiporpion: number;
  IDO_Membran: number;
  IDO_Pupil: number;
  IDO_Kekeruhan: number;
  IDO_Kultur: number;
  IDO_Dx: number;
}

export class HaisSurveillanceInfectionListDetail {
  Hari: string;
  ID: string;
  Waktu: string;
  Keterangan: string;
  ID_Pegawai: string;
  Nama_Pegawai: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Pegawai: string;
  KRS: number;
  Kontrol: number;
  Pelindung_Kasa: number;
  Pelindung_Eyeshield: number;
  Antibiotik_Topikal: number;
  Antibiotik_Oral: number;
  Mata_Air: number;
  Mata_Asap: number;
  Mata_Debu: number;
  GDA: number;
  IDO_Kabur: number;
  IDO_Merah: number;
  IDO_Nyeri: number;
  IDO_TIO: number;
  IDO_Odem_Kornea: number;
  IDO_Flare: number;
  IDO_Hiporpion: number;
  IDO_Membran: number;
  IDO_Pupil: number;
  IDO_Kekeruhan: number;
  IDO_Kultur: number;
  IDO_Dx: number;

  constructor(req: IHaisSurveillanceInfectionListDetail) {
    this.Hari = req.Hari;
    this.ID = req.ID;
    this.Waktu = req.Waktu;
    this.Keterangan = req.Keterangan;
    this.ID_Pegawai = req.ID_Pegawai;
    this.Nama_Pegawai = req.Nama_Pegawai;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.TTD_Pegawai = req.TTD_Pegawai;
    this.KRS = req.KRS;
    this.Kontrol = req.Kontrol;
    this.Pelindung_Kasa = req.Pelindung_Kasa;
    this.Pelindung_Eyeshield = req.Pelindung_Eyeshield;
    this.Antibiotik_Topikal = req.Antibiotik_Topikal;
    this.Antibiotik_Oral = req.Antibiotik_Oral;
    this.Mata_Air = req.Mata_Air;
    this.Mata_Asap = req.Mata_Asap;
    this.Mata_Debu = req.Mata_Debu;
    this.GDA = req.GDA;
    this.IDO_Kabur = req.IDO_Kabur;
    this.IDO_Merah = req.IDO_Merah;
    this.IDO_Nyeri = req.IDO_Nyeri;
    this.IDO_TIO = req.IDO_TIO;
    this.IDO_Odem_Kornea = req.IDO_Odem_Kornea;
    this.IDO_Flare = req.IDO_Flare;
    this.IDO_Hiporpion = req.IDO_Hiporpion;
    this.IDO_Membran = req.IDO_Membran;
    this.IDO_Pupil = req.IDO_Pupil;
    this.IDO_Kekeruhan = req.IDO_Kekeruhan;
    this.IDO_Kultur = req.IDO_Kultur;
    this.IDO_Dx = req.IDO_Dx;
  }

  static createFromJson(json: IHaisSurveillanceInfectionListDetail) {
    return new HaisSurveillanceInfectionListDetail(json);
  }
}

export interface IHaisSurveillanceInfectionList {
  total: number
  totalFiltered: number
  EMR_ID: string
  pasien: IPatientModel
  records: Array<IHaisSurveillanceInfectionListDetail>
}

export class HaisSurveillanceInfectionList {
  total: number
  totalFiltered: number
  EMR_ID: string
  pasien: IPatientModel
  records: IHaisSurveillanceInfectionListDetail[] = [];

  constructor(req: IHaisSurveillanceInfectionList) {
    this.total = req.total;
    this.totalFiltered = req.totalFiltered;
    this.EMR_ID = req.EMR_ID;
    this.pasien = new PatientModel(req.pasien);
    this.records = req.records && Array.isArray(req.records) ? req.records.map(d => new HaisSurveillanceInfectionListDetail(d)) : [];
  }

  static createFromJson(json: IHaisSurveillanceInfectionList) {
    return new HaisSurveillanceInfectionList(json);
  }
}
