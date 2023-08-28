import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdatePatientBpjsStatementRequest extends IAppRequest {
  tanggal_ttd: string;
  id_ttd_petugas: string;
  id_ttd_saksi: string;
  ttd_pasien: string;
  ttd_wali: string;
  ttd_petugas: string;
  ttd_saksi: string;
  penanggung_jawab: string;
  umur_wali: string;
  nama_wali: string;
  alamat_wali: string;
  hubungan_wali: string;
  jenis_kelamin_wali: string;
}

export class UpdatePatientBpjsStatementRequest extends AppRequest {
  tanggal_ttd: string;
  id_ttd_petugas: string;
  id_ttd_saksi: string;
  ttd_pasien: string;
  ttd_wali: string;
  ttd_petugas: string;
  ttd_saksi: string;
  penanggung_jawab: string;
  umur_wali: string;
  nama_wali: string;
  alamat_wali: string;
  hubungan_wali: string;
  jenis_kelamin_wali: string;

  constructor(request: IUpdatePatientBpjsStatementRequest) {
    super(request);
    this.tanggal_ttd = request.tanggal_ttd ? DateTimeConverter.convertToNormalDatetime(request.tanggal_ttd) : '';
    this.id_ttd_petugas = request.id_ttd_petugas;
    this.id_ttd_saksi = request.id_ttd_saksi;
    this.ttd_pasien = request.ttd_pasien;
    this.ttd_wali = request.ttd_wali;
    this.ttd_petugas = request.ttd_petugas;
    this.ttd_saksi = request.ttd_saksi;
    this.penanggung_jawab = request.penanggung_jawab;
    this.umur_wali = request.umur_wali;
    this.nama_wali = request.nama_wali;
    this.alamat_wali = request.alamat_wali;
    this.hubungan_wali = request.hubungan_wali;
    this.jenis_kelamin_wali = request.jenis_kelamin_wali;
  }

  static schema() {
    return yup.object().shape({
      tanggal_ttd: yup.string(),
      id_ttd_petugas: yup.string(),
      id_ttd_saksi: yup.string(),
      ttd_pasien: yup.string(),
      ttd_wali: yup.string(),
      ttd_petugas: yup.string(),
      ttd_saksi: yup.string(),
      penanggung_jawab: yup.string(),
      umur_wali: yup.string(),
      nama_wali: yup.string(),
      alamat_wali: yup.string(),
      hubungan_wali: yup.string(),
      jenis_kelamin_wali: yup.string(),
    });
  }

  static createFromJson(json: IUpdatePatientBpjsStatementRequest) {
    return new UpdatePatientBpjsStatementRequest(json);
  }
}
