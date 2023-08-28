import { IDataModel, DataModel } from "@src/shared/model";

export interface IPreparationOfAnestheticEquipmentFormModel {
  Unit: string;
  Tanggal_Tindakan: string;
  Jenis_Operasi: string;
  Teknik_Anestesi: string;
  Listrik_1: string;
  Listrik_2: string;
  Listrik_3: string;
  Gas_1: string;
  Gas_2: string;
  Gas_3: string;
  Gas_4: string;
  Gas_5: string;
  Gas_6: string;
  Mesin_Anestesi_1: string;
  Mesin_Anestesi_2: string;
  Mesin_Anestesi_3: string;
  Mesin_Anestesi_4: string;
  Mesin_Anestesi_5: string;
  Manajemen_Nafas_1: string;
  Manajemen_Nafas_2: string;
  Manajemen_Nafas_3: string;
  Manajemen_Nafas_4: string;
  Manajemen_Nafas_5: string;
  Manajemen_Nafas_6: string;
  Manajemen_Nafas_7: string;
  Manajemen_Nafas_8: string;
  Manajemen_Nafas_9: string;
  Pemantauan_1: string;
  Pemantauan_2: string;
  Pemantauan_3: string;
  Pemantauan_4: string;
  Pemantauan_5: string;
  Pemantauan_6: string;
  Lainnya_1: string;
  Lainnya_2: string;
  Lainnya_3: string;
  Lainnya_4: string;
  Lainnya_5: string;
  Lainnya_6: string;
  Lainnya_7: string;
  Obat_1: string;
  Obat_2: string;
  Obat_3: string;
  Obat_4: string;
  Obat_5: string;
  Obat_6: string;
  Obat_7: string;
  Obat_7_Teks: string;
  TTD_Penata_Anestesi: string;
  ID_Penata_Anestesi: string;
  Nama_Penata_Anestesi: string;
  TTD_Dokter_Anestesi: string;
  ID_Dokter_Anestesi: string;
  Nama_Dokter_Anestesi: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
}

export class PreparationOfAnestheticEquipmentFormModel {
  Unit: string;
  Tanggal_Tindakan: string;
  Jenis_Operasi: string;
  Teknik_Anestesi: string;
  Listrik_1: string;
  Listrik_2: string;
  Listrik_3: string;
  Gas_1: string;
  Gas_2: string;
  Gas_3: string;
  Gas_4: string;
  Gas_5: string;
  Gas_6: string;
  Mesin_Anestesi_1: string;
  Mesin_Anestesi_2: string;
  Mesin_Anestesi_3: string;
  Mesin_Anestesi_4: string;
  Mesin_Anestesi_5: string;
  Manajemen_Nafas_1: string;
  Manajemen_Nafas_2: string;
  Manajemen_Nafas_3: string;
  Manajemen_Nafas_4: string;
  Manajemen_Nafas_5: string;
  Manajemen_Nafas_6: string;
  Manajemen_Nafas_7: string;
  Manajemen_Nafas_8: string;
  Manajemen_Nafas_9: string;
  Pemantauan_1: string;
  Pemantauan_2: string;
  Pemantauan_3: string;
  Pemantauan_4: string;
  Pemantauan_5: string;
  Pemantauan_6: string;
  Lainnya_1: string;
  Lainnya_2: string;
  Lainnya_3: string;
  Lainnya_4: string;
  Lainnya_5: string;
  Lainnya_6: string;
  Lainnya_7: string;
  Obat_1: string;
  Obat_2: string;
  Obat_3: string;
  Obat_4: string;
  Obat_5: string;
  Obat_6: string;
  Obat_7: string;
  Obat_7_Teks: string;
  TTD_Penata_Anestesi: string;
  ID_Penata_Anestesi: string;
  Nama_Penata_Anestesi: string;
  TTD_Dokter_Anestesi: string;
  ID_Dokter_Anestesi: string;
  Nama_Dokter_Anestesi: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  constructor(request: IPreparationOfAnestheticEquipmentFormModel) {
    this.Unit = request.Unit;
    this.Tanggal_Tindakan = request.Tanggal_Tindakan;
    this.Jenis_Operasi = request.Jenis_Operasi;
    this.Teknik_Anestesi = request.Teknik_Anestesi;
    this.Listrik_1 = request.Listrik_1;
    this.Listrik_2 = request.Listrik_2;
    this.Listrik_3 = request.Listrik_3;
    this.Gas_1 = request.Gas_1;
    this.Gas_2 = request.Gas_2;
    this.Gas_3 = request.Gas_3;
    this.Gas_4 = request.Gas_4;
    this.Gas_5 = request.Gas_5;
    this.Gas_6 = request.Gas_6;
    this.Mesin_Anestesi_1 = request.Mesin_Anestesi_1;
    this.Mesin_Anestesi_2 = request.Mesin_Anestesi_2;
    this.Mesin_Anestesi_3 = request.Mesin_Anestesi_3;
    this.Mesin_Anestesi_4 = request.Mesin_Anestesi_4;
    this.Mesin_Anestesi_5 = request.Mesin_Anestesi_5;
    this.Manajemen_Nafas_1 = request.Manajemen_Nafas_1;
    this.Manajemen_Nafas_2 = request.Manajemen_Nafas_2;
    this.Manajemen_Nafas_3 = request.Manajemen_Nafas_3;
    this.Manajemen_Nafas_4 = request.Manajemen_Nafas_4;
    this.Manajemen_Nafas_5 = request.Manajemen_Nafas_5;
    this.Manajemen_Nafas_6 = request.Manajemen_Nafas_6;
    this.Manajemen_Nafas_7 = request.Manajemen_Nafas_7;
    this.Manajemen_Nafas_8 = request.Manajemen_Nafas_8;
    this.Manajemen_Nafas_9 = request.Manajemen_Nafas_9;
    this.Pemantauan_1 = request.Pemantauan_1;
    this.Pemantauan_2 = request.Pemantauan_2;
    this.Pemantauan_3 = request.Pemantauan_3;
    this.Pemantauan_4 = request.Pemantauan_4;
    this.Pemantauan_5 = request.Pemantauan_5;
    this.Pemantauan_6 = request.Pemantauan_6;
    this.Lainnya_1 = request.Lainnya_1;
    this.Lainnya_2 = request.Lainnya_2;
    this.Lainnya_3 = request.Lainnya_3;
    this.Lainnya_4 = request.Lainnya_4;
    this.Lainnya_5 = request.Lainnya_5;
    this.Lainnya_6 = request.Lainnya_6;
    this.Lainnya_7 = request.Lainnya_7;
    this.Obat_1 = request.Obat_1;
    this.Obat_2 = request.Obat_2;
    this.Obat_3 = request.Obat_3;
    this.Obat_4 = request.Obat_4;
    this.Obat_5 = request.Obat_5;
    this.Obat_6 = request.Obat_6;
    this.Obat_7 = request.Obat_7;
    this.Obat_7_Teks = request.Obat_7_Teks;
    this.TTD_Penata_Anestesi = request.TTD_Penata_Anestesi;
    this.ID_Penata_Anestesi = request.ID_Penata_Anestesi;
    this.Nama_Penata_Anestesi = request.Nama_Penata_Anestesi;
    this.TTD_Dokter_Anestesi = request.TTD_Dokter_Anestesi;
    this.ID_Dokter_Anestesi = request.ID_Dokter_Anestesi;
    this.Nama_Dokter_Anestesi = request.Nama_Dokter_Anestesi;
    this.ID_Petugas = request.ID_Petugas;
    this.Nama_Petugas = request.Nama_Petugas;
    this.Updated_At = request.Updated_At;
    this.Updated_By = request.Updated_By;
  }
}

export interface IPreparationOfAnestheticEquipmentModel extends IDataModel {
  form: IPreparationOfAnestheticEquipmentFormModel;
}

export class PreparationOfAnestheticEquipmentModel extends DataModel {
  form: IPreparationOfAnestheticEquipmentFormModel;

  constructor(request: IPreparationOfAnestheticEquipmentModel) {
    super(request);
    this.form = request.form;
  }
}