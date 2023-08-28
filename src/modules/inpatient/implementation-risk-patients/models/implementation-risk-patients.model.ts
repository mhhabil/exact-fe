export interface IImplementationRiskPatientsItemModel {
  Waktu_Implementasi: string;
  Pengkajian_Awal_Check: string;
  Rem_Tempat_Tidur_Check: string;
  Dalam_Jangkauan_Check: string;
  Tidak_Menghalangi_Check: string;
  Palang_Tempat_Tidur_Check: string;
  Penanda_Resiko_Jatuh_Check: string;
  Libatkan_Keluarga_Check: string;
  Cepat_Menanggapi_Check: string;
  Memantau_Respon_Check: string;
  Lakukan_Pengkajian_Ulang_Check: string;
  TTD_Perawat: string;
  ID_Perawat: string;
  Unit_Pengimplementasi: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Perawat: string;
  ID: string;
}

export class ImplementationRiskPatientsItemModel {
  Waktu_Implementasi: string;
  Pengkajian_Awal_Check: string;
  Rem_Tempat_Tidur_Check: string;
  Dalam_Jangkauan_Check: string;
  Tidak_Menghalangi_Check: string;
  Palang_Tempat_Tidur_Check: string;
  Penanda_Resiko_Jatuh_Check: string;
  Libatkan_Keluarga_Check: string;
  Cepat_Menanggapi_Check: string;
  Memantau_Respon_Check: string;
  Lakukan_Pengkajian_Ulang_Check: string;
  TTD_Perawat: string;
  ID_Perawat: string;
  Unit_Pengimplementasi: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Perawat: string;
  ID: string;


  constructor(model: IImplementationRiskPatientsItemModel) {
    this.Waktu_Implementasi = model.Waktu_Implementasi;
    this.Pengkajian_Awal_Check = model.Pengkajian_Awal_Check;
    this.Rem_Tempat_Tidur_Check = model.Rem_Tempat_Tidur_Check;
    this.Dalam_Jangkauan_Check = model.Dalam_Jangkauan_Check;
    this.Tidak_Menghalangi_Check = model.Tidak_Menghalangi_Check;
    this.Palang_Tempat_Tidur_Check = model.Palang_Tempat_Tidur_Check;
    this.Penanda_Resiko_Jatuh_Check = model.Penanda_Resiko_Jatuh_Check;
    this.Libatkan_Keluarga_Check = model.Libatkan_Keluarga_Check;
    this.Cepat_Menanggapi_Check = model.Cepat_Menanggapi_Check;
    this.Memantau_Respon_Check = model.Memantau_Respon_Check;
    this.Lakukan_Pengkajian_Ulang_Check = model.Lakukan_Pengkajian_Ulang_Check;
    this.TTD_Perawat = model.TTD_Perawat;
    this.ID_Perawat = model.ID_Perawat;
    this.Unit_Pengimplementasi = model.Unit_Pengimplementasi;
    this.ID_Petugas = model.ID_Petugas;
    this.Nama_Petugas = model.Nama_Petugas;
    this.Updated_At = model.Updated_At;
    this.Updated_By = model.Updated_By;
    this.Nama_Perawat = model.Nama_Perawat;
    this.ID = model.ID;
  }

  static createFromJson(json: IImplementationRiskPatientsItemModel) {
    return new ImplementationRiskPatientsItemModel(json);
  }
}


export interface IImplementationRiskPatientsModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<IImplementationRiskPatientsItemModel>;
}

export class ImplementationRiskPatientsModel {
  EMR_ID: string;
  totalFiltered: number;
  total: number;
  records: Array<ImplementationRiskPatientsItemModel>;

  constructor(model: IImplementationRiskPatientsModel) {
    this.EMR_ID = model.EMR_ID;
    this.totalFiltered = model.totalFiltered;
    this.total = model.total;
    this.records = (Array.isArray(model.records)) ? model.records.map(d => new ImplementationRiskPatientsItemModel(d)) : [];
  }

  static createFromJson(json: IImplementationRiskPatientsModel) {
    return new ImplementationRiskPatientsModel(json);
  }
}
