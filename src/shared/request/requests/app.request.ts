import { ITreatmentModel } from '@modules/site/patient-list/models';

export interface IAppRequest {
  emr_id: string;
  nomor_mr: string;
  id_pelayanan: string;
  kode_cabang: string;
  tipe_pasien: string;
  jenis_pelayanan: string;
  id_dokter: string;
  no_sep?: string;
  tanggal_berobat?: string;
}

export class AppRequest {
  emr_id: string;
  nomor_mr: string;
  id_pelayanan: string;
  kode_cabang: string;
  tipe_pasien: string;
  jenis_pelayanan: string;
  id_dokter: string;
  no_sep?: string;
  tanggal_berobat?: string;

  constructor(request: IAppRequest) {
    this.emr_id = request.emr_id;
    this.nomor_mr = request.nomor_mr;
    this.id_pelayanan = request.id_pelayanan;
    this.kode_cabang = request.kode_cabang;
    this.tipe_pasien = request.tipe_pasien;
    this.jenis_pelayanan = request.jenis_pelayanan;
    this.id_dokter = request.id_dokter;
    this.no_sep = request.no_sep;
    this.tanggal_berobat = request.tanggal_berobat;
  }

  static createFromStore(store: ITreatmentModel) {
    return AppRequest.createFromJson({
      emr_id: store.EMR_ID,
      nomor_mr: store.No_MR,
      id_pelayanan: store.ID_Pelayanan,
      kode_cabang: store.Kode_Cabang,
      tipe_pasien: store.Tipe_Pasien,
      jenis_pelayanan: store.Jenis_Pelayanan,
      id_dokter: store.ID_Dokter,
      tanggal_berobat: store.Tgl_Berobat,
    })
  }

  static createFromJson(json: IAppRequest) {
    return new AppRequest(json);
  }
}
