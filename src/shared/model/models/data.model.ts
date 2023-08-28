import { IPatientModel, PatientModel } from './patient.model';
import { IWaliModel, WaliModel } from './wali.model';

export interface IDataModel {
  EMR_ID: string;
  id_pelayanan: string;
  jenis_pelayanan: string;
  kode_cabang: string;
  nomor_mr: string;
  tipe_pasien: string;
  pasien?: IPatientModel;
  wali?: IWaliModel;
}

export class DataModel {
  EMR_ID: string;
  id_pelayanan: string;
  jenis_pelayanan: string;
  kode_cabang: string;
  nomor_mr: string;
  tipe_pasien: string;
  pasien?: PatientModel;
  wali?: WaliModel;

  constructor(data: IDataModel) {
    this.EMR_ID = data.EMR_ID;
    this.id_pelayanan = data.id_pelayanan;
    this.jenis_pelayanan = data.jenis_pelayanan;
    this.kode_cabang = data.kode_cabang;
    this.nomor_mr = data.nomor_mr;
    this.tipe_pasien = data.tipe_pasien;
    if (data.pasien) {
      this.pasien = new PatientModel(data.pasien);
    }
    if (data.wali) {
      this.wali = new WaliModel(data.wali);
    }
  }
}
