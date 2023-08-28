export interface IDailyEducationItemModel {
  EMR_ID: string;
  Alamat: string;
  ID: string;
  ID_Pemberi_Edukasi: string;
  ID_Petugas: string;
  Nama: string;
  Nama_Pemberi_Edukasi: string;
  Nama_Petugas: string;
  Pendengar: string;
  TTD_Pemberi_Edukasi: string;
  Tanda_Tangan: string;
  Telepon: string;
  Unit: string;
  Updated_At: string;
  Updated_By: string;
  Uraian: string;
  Waktu: string;
}

export class DailyEducationItemModel {
  EMR_ID: string;
  Alamat: string;
  ID: string;
  ID_Pemberi_Edukasi: string;
  ID_Petugas: string;
  Nama: string;
  Nama_Pemberi_Edukasi: string;
  Nama_Petugas: string;
  Pendengar: string;
  TTD_Pemberi_Edukasi: string;
  Tanda_Tangan: string;
  Telepon: string;
  Unit: string;
  Updated_At: string;
  Updated_By: string;
  Uraian: string;
  Waktu: string;

  constructor(model: IDailyEducationItemModel) {
    this.EMR_ID = model.EMR_ID;
    this.Alamat = model.Alamat;
    this.ID = model.ID;
    this.ID_Pemberi_Edukasi = model.ID_Pemberi_Edukasi;
    this.ID_Petugas = model.ID_Petugas;
    this.Nama = model.Nama;
    this.Nama_Pemberi_Edukasi = model.Nama_Pemberi_Edukasi;
    this.Nama_Petugas = model.Nama_Petugas;
    this.Pendengar = model.Pendengar;
    this.TTD_Pemberi_Edukasi = model.TTD_Pemberi_Edukasi;
    this.Tanda_Tangan = model.Tanda_Tangan;
    this.Telepon = model.Telepon;
    this.Unit = model.Unit;
    this.Updated_At = model.Updated_At;
    this.Updated_By = model.Updated_By;
    this.Uraian = model.Uraian;
    this.Waktu = model.Waktu;
  }

  static createFromJson(json: IDailyEducationItemModel) {
    return new DailyEducationItemModel(json);
  }
}


export interface IDailyEducationModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<IDailyEducationItemModel>;
}

export class DailyEducationModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<DailyEducationItemModel>;

  constructor(model: IDailyEducationModel) {
    this.EMR_ID = model.EMR_ID;
    this.totalFiltered = model.totalFiltered;
    this.total = model.total;
    this.records = (Array.isArray(model.records)) ? model.records.map(d => new DailyEducationItemModel(d)) : [];
  }

  static createFromJson(json: IDailyEducationModel) {
    return new DailyEducationModel(json);
  }
}
