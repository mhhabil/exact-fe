export interface IAssessmentVitalSignsItemModel {
  Waktu_Asesmen: string;
  Suhu: string;
  Nadi: string;
  Pernafasan: string;
  Tekanan_Darah: string;
  Oxygen_Saturation: string;
  Th: string;
  Skala_Nyeri: string;
  Lokasi_Id: string;
  Kualitas_Id: string;
  Frekuensi_Id: string;
  Tindakan_Id: string;
  ID_Perawat : string;
  TTD_Perawat : string;
  Nama_Perawat : string;
  Unit: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  ID: string;
  EMR_ID: string;
}

export class AssessmentVitalSignsItemModel {
  Waktu_Asesmen: string;
  Suhu: string;
  Nadi: string;
  Pernafasan: string;
  Tekanan_Darah: string;
  Oxygen_Saturation: string;
  Th: string;
  Skala_Nyeri: string;
  Lokasi_Id: string;
  Kualitas_Id: string;
  Frekuensi_Id: string;
  Tindakan_Id: string;
  ID_Perawat : string;
  TTD_Perawat : string;
  Nama_Perawat : string;
  Unit: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  ID: string;
  EMR_ID: string;

  constructor(model: IAssessmentVitalSignsItemModel) {
    this.Waktu_Asesmen = model.Waktu_Asesmen;
    this.Suhu = model.Suhu;
    this.Nadi = model.Nadi;
    this.Pernafasan = model.Pernafasan;
    this.Tekanan_Darah = model.Tekanan_Darah;
    this.Oxygen_Saturation = model.Oxygen_Saturation;
    this.Th = model.Th;
    this.Skala_Nyeri = model.Skala_Nyeri;
    this.Lokasi_Id = model.Lokasi_Id;
    this.Kualitas_Id = model.Kualitas_Id;
    this.Frekuensi_Id = model.Frekuensi_Id;
    this.Tindakan_Id = model.Tindakan_Id;
    this.Unit = model.Unit;
    this.ID_Perawat = model.ID_Perawat;
    this.TTD_Perawat = model.TTD_Perawat;
    this.Nama_Perawat = model.Nama_Perawat;
    this.ID_Petugas = model.ID_Petugas;
    this.Nama_Petugas = model.Nama_Petugas;
    this.Updated_At = model.Updated_At;
    this.Updated_By = model.Updated_By;
    this.ID = model.ID;
    this.EMR_ID = model.EMR_ID;
  }

  static createFromJson(json: IAssessmentVitalSignsItemModel) {
    return new AssessmentVitalSignsItemModel(json);
  }
}


export interface IAssessmentVitalSignsModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<IAssessmentVitalSignsItemModel>;
}

export class AssessmentVitalSignsModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<AssessmentVitalSignsItemModel>;

  constructor(model: IAssessmentVitalSignsModel) {
    this.EMR_ID = model.EMR_ID;
    this.totalFiltered = model.totalFiltered;
    this.total = model.total;
    this.records = (Array.isArray(model.records)) ? model.records.map(d => new AssessmentVitalSignsItemModel(d)) : [];
  }

  static createFromJson(json: IAssessmentVitalSignsModel) {
    return new AssessmentVitalSignsModel(json);
  }
}
