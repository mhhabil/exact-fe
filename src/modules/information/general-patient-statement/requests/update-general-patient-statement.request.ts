import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdateGeneralPatientStatementRequest extends IAppRequest {
  tanggal_ttd: string;
  id_ttd_petugas: string;
  id_ttd_saksi: string;
  ttd_pasien: string;
  ttd_wali: string;
  ttd_petugas: string;
  ttd_saksi: string;
  nik: string;
}

export class UpdateGeneralPatientStatementRequest extends AppRequest {
  tanggal_ttd: string;
  id_ttd_petugas: string;
  id_ttd_saksi: string;
  ttd_pasien: string;
  ttd_wali: string;
  ttd_petugas: string;
  ttd_saksi: string;
  nik: string;

  constructor(request: IUpdateGeneralPatientStatementRequest) {
    super(request);
    this.tanggal_ttd = request.tanggal_ttd ? DateTimeConverter.convertToNormalDatetime(request.tanggal_ttd) : '';
    this.id_ttd_petugas = request.id_ttd_petugas;
    this.id_ttd_saksi = request.id_ttd_saksi;
    this.ttd_pasien = request.ttd_pasien;
    this.ttd_wali = request.ttd_wali;
    this.ttd_petugas = request.ttd_petugas;
    this.ttd_saksi = request.ttd_saksi;
    this.nik = request.nik;
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
      nik: yup.string(),
    });
  }

  static createFromJson(json: IUpdateGeneralPatientStatementRequest) {
    return new UpdateGeneralPatientStatementRequest(json);
  }
}
