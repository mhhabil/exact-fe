export interface IPainMonitoringItemModel {
  Waktu_Monitor: string;
  Temperatur: string;
  Nadi: string;
  Tekanan_Darah: string;
  RR: string;
  Skala_Nyeri: string;
  Lokasi_Nyeri: string;
  Tindakan: string;
  Unit: string;
  ID_Perawat : string;
  TTD_Perawat : string;
  Nama_Perawat : string;
  ID_Petugas: string;
  Nama_Monitor: string;
  Updated_At: string;
  Updated_By: string;
  ID: string;
  EMR_ID: string;
}

export class PainMonitoringItemModel {
  Waktu_Monitor: string;
  Temperatur: string;
  Nadi: string;
  Tekanan_Darah: string;
  RR: string;
  Skala_Nyeri: string;
  Lokasi_Nyeri: string;
  Tindakan: string;
  Unit: string;
  ID_Perawat : string;
  TTD_Perawat : string;
  Nama_Perawat : string;
  ID_Petugas: string;
  Nama_Monitor: string;
  Updated_At: string;
  Updated_By: string;
  ID: string;
  EMR_ID: string;

  constructor(model: IPainMonitoringItemModel) {
    this.Waktu_Monitor = model.Waktu_Monitor;
    this.Temperatur = model.Temperatur;
    this.Nadi = model.Nadi;
    this.Tekanan_Darah = model.Tekanan_Darah;
    this.RR = model.RR;
    this.Skala_Nyeri = model.Skala_Nyeri;
    this.Lokasi_Nyeri = model.Lokasi_Nyeri;
    this.Tindakan = model.Tindakan;
    this.Unit = model.Unit;
    this.ID_Perawat = model.ID_Perawat;
    this.TTD_Perawat = model.TTD_Perawat;
    this.Nama_Perawat = model.Nama_Perawat;
    this.ID_Petugas = model.ID_Petugas;
    this.Nama_Monitor = model.Nama_Monitor;
    this.Updated_At = model.Updated_At;
    this.Updated_By = model.Updated_By;
    this.ID = model.ID;
    this.EMR_ID = model.EMR_ID;
  }

  static createFromJson(json: IPainMonitoringItemModel) {
    return new PainMonitoringItemModel(json);
  }
}


export interface IPainMonitoringModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<IPainMonitoringItemModel>;
}

export class PainMonitoringModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<PainMonitoringItemModel>;

  constructor(model: IPainMonitoringModel) {
    this.EMR_ID = model.EMR_ID;
    this.totalFiltered = model.totalFiltered;
    this.total = model.total;
    this.records = (Array.isArray(model.records)) ? model.records.map(d => new PainMonitoringItemModel(d)) : [];
  }

  static createFromJson(json: IPainMonitoringModel) {
    return new PainMonitoringModel(json);
  }
}
