export interface IFallRiskAssessementAdultItemModel {
  Waktu_Pengkajian: string;
  Riwayat_Jatuh: string;
  Riwayat_Jatuh_Radio: string;
  Diagnosa_Sekunder: string;
  Diagnosa_Sekunder_Radio: string;
  Alat_Bantu_Jalan: string;
  Alat_Bantu_Jalan_Radio: string;
  Pasien_Diinfus: string;
  Pasien_Diinfus_Radio: string;
  Cara_Berjalan: string;
  Cara_Berjalan_Radio: string;
  Kondisi_Mental: string;
  Kondisi_Mental_Radio: string;
  Keterangan_Waktu_Pengkajian_Id: string;
  Total_Skor: string;
  Resiko_Jatuh: string;
  Resiko_Jatuh_Keterangan: string;
  Ruangan : string;
  Lembar : string;
  TTD_Perawat: string;
  ID_Perawat: string;
  Unit_Pengkaji: string;
  Pengkaji: string;
  Pengkaji_Id: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Perawat: string;
  ID: string;
  EMR_ID: string;
}

export class FallRiskAssessementAdultItemModel {
  Waktu_Pengkajian: string;
  Riwayat_Jatuh: string;
  Riwayat_Jatuh_Radio: string;
  Diagnosa_Sekunder: string;
  Diagnosa_Sekunder_Radio: string;
  Alat_Bantu_Jalan: string;
  Alat_Bantu_Jalan_Radio: string;
  Pasien_Diinfus: string;
  Pasien_Diinfus_Radio: string;
  Cara_Berjalan: string;
  Cara_Berjalan_Radio: string;
  Kondisi_Mental: string;
  Kondisi_Mental_Radio: string;
  Keterangan_Waktu_Pengkajian_Id: string;
  Total_Skor: string;
  Resiko_Jatuh: string;
  Resiko_Jatuh_Keterangan: string;
  Ruangan : string;
  Lembar : string;
  TTD_Perawat: string;
  ID_Perawat: string;
  Unit_Pengkaji: string;
  Pengkaji: string;
  Pengkaji_Id: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Perawat: string;
  ID: string;
  EMR_ID: string;

  constructor(model: IFallRiskAssessementAdultItemModel) {

    this.Waktu_Pengkajian = model.Waktu_Pengkajian;
    this.Riwayat_Jatuh = model.Riwayat_Jatuh;
    this.Riwayat_Jatuh_Radio = model.Riwayat_Jatuh_Radio;
    this.Diagnosa_Sekunder = model.Diagnosa_Sekunder;
    this.Diagnosa_Sekunder_Radio = model.Diagnosa_Sekunder_Radio;
    this.Alat_Bantu_Jalan = model.Alat_Bantu_Jalan;
    this.Alat_Bantu_Jalan_Radio = model.Alat_Bantu_Jalan_Radio;
    this.Pasien_Diinfus = model.Pasien_Diinfus;
    this.Pasien_Diinfus_Radio = model.Pasien_Diinfus_Radio;
    this.Cara_Berjalan = model.Cara_Berjalan;
    this.Cara_Berjalan_Radio = model.Cara_Berjalan_Radio;
    this.Kondisi_Mental = model.Kondisi_Mental;
    this.Kondisi_Mental_Radio = model.Kondisi_Mental_Radio;
    this.Keterangan_Waktu_Pengkajian_Id = model.Keterangan_Waktu_Pengkajian_Id;
    this.Total_Skor = model.Total_Skor;
    this.Resiko_Jatuh = model.Resiko_Jatuh;
    this.Resiko_Jatuh_Keterangan = model.Resiko_Jatuh_Keterangan;
    this.Ruangan = model.Ruangan;
    this.Lembar = model.Lembar;
    this.TTD_Perawat = model.TTD_Perawat;
    this.ID_Perawat = model.ID_Perawat;
    this.Unit_Pengkaji = model.Unit_Pengkaji;
    this.Pengkaji = model.Pengkaji;
    this.Pengkaji_Id = model.Pengkaji_Id;
    this.Updated_At = model.Updated_At;
    this.Updated_By = model.Updated_By;
    this.Nama_Perawat = model.Nama_Perawat;
    this.ID = model.ID;
    this.EMR_ID = model.EMR_ID;


  }

  static createFromJson(json: IFallRiskAssessementAdultItemModel) {
    return new FallRiskAssessementAdultItemModel(json);
  }
}

export interface IFallRiskAssessementAdultModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<IFallRiskAssessementAdultItemModel>;
}

export class FallRiskAssessementAdultModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<FallRiskAssessementAdultItemModel>;

  constructor(model: IFallRiskAssessementAdultModel) {
    this.EMR_ID = model.EMR_ID;
    this.totalFiltered = model.totalFiltered;
    this.total = model.total;
    this.records = (Array.isArray(model.records)) ? model.records.map(d => new FallRiskAssessementAdultItemModel(d)) : [];
  }

  static createFromJson(json: IFallRiskAssessementAdultModel) {
    return new FallRiskAssessementAdultModel(json);
  }
}
