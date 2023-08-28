export interface IFallRiskAssessementChildrenItemModel {
  Waktu_Pengkajian: string
  Usia: string
  Jenis_Kelamin: string
  Diagnosa: string
  Gangguan_Kognitif: string
  Faktor_Lingkungan: string
  Respon_Operasi: string
  Penggunaan_Obat: string
  Keterangan_Waktu_Pengkajian_Id: string
  Total_Skor: string
  Resiko_Jatuh: string
  Resiko_Jatuh_Keterangan: string
  Usia_Radio: string
  Jenis_Kelamin_Radio: string
  Diagnosa_Radio: string
  Gangguan_Kognitif_Radio: string
  Faktor_Lingkungan_Radio: string
  Respon_Operasi_Radio: string
  Penggunaan_Obat_Radio: string
  Unit_Pengimplementasi: string
  Unit_Pengkaji: string
  Ruangan: string
  Lembar: string
  TTD_Petugas: string
  ID_Petugas: string
  Pengkaji: string
  Pengkaji_Id: string
  Updated_At: string
  Updated_By: string
  Nama_Petugas: string
  ID: string;
  EMR_ID: string;
}

export class FallRiskAssessementChildrenItemModel {
  Waktu_Pengkajian: string
  Usia: string
  Jenis_Kelamin: string
  Diagnosa: string
  Gangguan_Kognitif: string
  Faktor_Lingkungan: string
  Respon_Operasi: string
  Penggunaan_Obat: string
  Keterangan_Waktu_Pengkajian_Id: string
  Total_Skor: string
  Resiko_Jatuh: string
  Resiko_Jatuh_Keterangan: string
  Usia_Radio: string
  Jenis_Kelamin_Radio: string
  Diagnosa_Radio: string
  Gangguan_Kognitif_Radio: string
  Faktor_Lingkungan_Radio: string
  Respon_Operasi_Radio: string
  Penggunaan_Obat_Radio: string
  Unit_Pengimplementasi: string
  Unit_Pengkaji: string
  Ruangan: string
  Lembar: string
  TTD_Petugas: string
  ID_Petugas: string
  Pengkaji: string
  Pengkaji_Id: string
  Updated_At: string
  Updated_By: string
  Nama_Petugas: string
  ID: string;
  EMR_ID: string;

  constructor(model: IFallRiskAssessementChildrenItemModel) {

    this.Waktu_Pengkajian = model.Waktu_Pengkajian;
    this.Usia = model.Usia;
    this.Jenis_Kelamin = model.Jenis_Kelamin;
    this.Diagnosa = model.Diagnosa;
    this.Gangguan_Kognitif = model.Gangguan_Kognitif;
    this.Faktor_Lingkungan = model.Faktor_Lingkungan;
    this.Respon_Operasi = model.Respon_Operasi;
    this.Penggunaan_Obat = model.Penggunaan_Obat;
    this.Keterangan_Waktu_Pengkajian_Id = model.Keterangan_Waktu_Pengkajian_Id;
    this.Total_Skor = model.Total_Skor;
    this.Resiko_Jatuh = model.Resiko_Jatuh;
    this.Resiko_Jatuh_Keterangan = model.Resiko_Jatuh_Keterangan;
    this.Usia_Radio = model.Usia_Radio;
    this.Jenis_Kelamin_Radio = model.Jenis_Kelamin_Radio;
    this.Diagnosa_Radio = model.Diagnosa_Radio;
    this.Gangguan_Kognitif_Radio = model.Gangguan_Kognitif_Radio;
    this.Faktor_Lingkungan_Radio = model.Faktor_Lingkungan_Radio;
    this.Respon_Operasi_Radio = model.Respon_Operasi_Radio;
    this.Penggunaan_Obat_Radio = model.Penggunaan_Obat_Radio;
    this.Unit_Pengimplementasi = model.Unit_Pengimplementasi;
    this.Unit_Pengkaji = model.Unit_Pengkaji;
    this.Ruangan = model.Ruangan;
    this.Lembar = model.Ruangan;
    this.TTD_Petugas = model.TTD_Petugas;
    this.ID_Petugas = model.ID_Petugas;
    this.Pengkaji = model.Pengkaji;
    this.Pengkaji_Id = model.Pengkaji_Id;
    this.Updated_At = model.Updated_At;
    this.Updated_By = model.Updated_By;
    this.Nama_Petugas = model.Nama_Petugas;
    this.ID = model.ID;
    this.EMR_ID = model.EMR_ID;

  }

  static createFromJson(json: IFallRiskAssessementChildrenItemModel) {
    return new FallRiskAssessementChildrenItemModel(json);
  }
}

export interface IFallRiskAssessementChildrenModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<IFallRiskAssessementChildrenItemModel>;
}

export class FallRiskAssessementChildrenModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<FallRiskAssessementChildrenItemModel>;

  constructor(model: IFallRiskAssessementChildrenModel) {
    this.EMR_ID = model.EMR_ID;
    this.totalFiltered = model.totalFiltered;
    this.total = model.total;
    this.records = (Array.isArray(model.records)) ? model.records.map(d => new FallRiskAssessementChildrenItemModel(d)) : [];
  }

  static createFromJson(json: IFallRiskAssessementChildrenModel) {
    return new FallRiskAssessementChildrenModel(json);
  }
}
