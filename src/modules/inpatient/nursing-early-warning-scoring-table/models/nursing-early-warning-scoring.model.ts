import { DataModel, IDataModel, IPatientModel } from '@shared/model';
export interface INursingEarlyWarning {
  Waktu_Pengkajian: string;
  Rr: string;
  Rr_Skor: string;
  Nadi: string;
  Nadi_Skor: string;
  Td: string;
  Td_1: string;
  Td_Skor: string;
  ID_Perawat: string;
  TTD_Perawat: string;
  Nama_Perawat: string;
  Suhu_Tubuh: string;
  Suhu_Tubuh_Skor: string;
  Tingkat_Kesadaran: string;
  Tingkat_Kesadaran_Skor: string;
  Tingkat_Kesadaran_Teks: string;
  Perilaku: string;
  Perilaku_Skor: string;
  Kardiovaskular: string;
  Kardiovaskular_Skor: string;
  Total_Skor: string;
  Keterangan: string;
  Unit_Pengkaji: string;
  Tipe_Ews: string;
  Pengkaji: string;
  Pengkaji_Id: string;
  Updated_At: string;
  Updated_By: string;
  ID: string;
  EMR_ID: string;
}

export interface INursingEarlyWarningModel extends IDataModel {
  EMR_ID: string;
  total: number;
  totalFiltered: number;
  pasien: IPatientModel;
  records: any;
}

export class NursingEarlyWarningModel extends DataModel {
  EMR_ID: string;
  total: number;
  totalFiltered: number;
  pasien: IPatientModel;
  records?: INursingEarlyWarning[] = [];
  constructor(nursingEarlyWarning: INursingEarlyWarningModel) {
    super(nursingEarlyWarning);
    this.EMR_ID = nursingEarlyWarning.EMR_ID;
    this.total = nursingEarlyWarning.total;
    this.totalFiltered = nursingEarlyWarning.totalFiltered;
    this.pasien = nursingEarlyWarning.pasien;
    this.records = nursingEarlyWarning.records && Array.isArray(nursingEarlyWarning.records) ? nursingEarlyWarning.records : [];
  }
}
