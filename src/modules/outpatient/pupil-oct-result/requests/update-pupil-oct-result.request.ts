import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdatePupilOCTResultRequest extends IAppRequest {
  treatment_number_list: string;
  od_rnfl_normal_text: string;
  od_rnfl_menipis_text: string;
  od_rnfl: string;
  od_rnfl_menebal_text: string;
  od_cd_vertical_normal_text: string;
  od_cd_vertical: string;
  od_cd_vertical_upnormal_text: string;
  os_rnfl_normal_text: string;
  os_rnfl: string;
  os_rnfl_menipis_text: string;
  os_rnfl_menebal_text: string;
  os_cd_vertical: string;
  os_cd_vertical_normal_text: string;
  os_cd_vertical_upnormal_text: string;
  summary: string;
  signature_date: string;
}

export class UpdatePupilOCTResultRequest extends AppRequest {
  treatment_number_list: string;
  od_rnfl_normal_text: string;
  od_rnfl_menipis_text: string;
  od_rnfl: string;
  od_rnfl_menebal_text: string;
  od_cd_vertical_normal_text: string;
  od_cd_vertical: string;
  od_cd_vertical_upnormal_text: string;
  os_rnfl_normal_text: string;
  os_rnfl: string;
  os_rnfl_menipis_text: string;
  os_rnfl_menebal_text: string;
  os_cd_vertical: string;
  os_cd_vertical_normal_text: string;
  os_cd_vertical_upnormal_text: string;
  summary: string;
  signature_date: string;

  constructor(request: IUpdatePupilOCTResultRequest) {
    super(request);
    this.treatment_number_list = request.treatment_number_list;
    this.od_rnfl_normal_text = request.od_rnfl_normal_text;
    this.od_rnfl_menipis_text = request.od_rnfl_menipis_text;
    this.od_rnfl = request.od_rnfl;
    this.od_rnfl_menebal_text = request.od_rnfl_menebal_text;
    this.od_cd_vertical_normal_text = request.od_cd_vertical_normal_text;
    this.od_cd_vertical = request.od_cd_vertical;
    this.od_cd_vertical_upnormal_text = request.od_cd_vertical_upnormal_text;
    this.os_rnfl_normal_text = request.os_rnfl_normal_text;
    this.os_rnfl = request.os_rnfl;
    this.os_rnfl_menipis_text = request.os_rnfl_menipis_text;
    this.os_rnfl_menebal_text = request.os_rnfl_menebal_text;
    this.os_cd_vertical = request.os_cd_vertical;
    this.os_cd_vertical_normal_text = request.os_cd_vertical_normal_text;
    this.os_cd_vertical_upnormal_text = request.os_cd_vertical_upnormal_text;
    this.summary = request.summary;
    this.signature_date = request.signature_date;
  }

  static schema() {
    return yup.object().shape({
      treatment_number_list: yup.string(),
      od_rnfl_normal_text: yup.string(),
      od_rnfl_menipis_text: yup.string(),
      od_rnfl: yup.string(),
      od_rnfl_menebal_text: yup.string(),
      od_cd_vertical_normal_text: yup.string(),
      od_cd_vertical: yup.string(),
      od_cd_vertical_upnormal_text: yup.string(),
      os_rnfl_normal_text: yup.string(),
      os_rnfl: yup.string(),
      os_rnfl_menipis_text: yup.string(),
      os_rnfl_menebal_text: yup.string(),
      os_cd_vertical: yup.string(),
      os_cd_vertical_normal_text: yup.string(),
      os_cd_vertical_upnormal_text: yup.string(),
      summary: yup.string(),
      signature_date: yup.string(),
    });
  }

  static createFromJson(json: IUpdatePupilOCTResultRequest) {
    return new UpdatePupilOCTResultRequest(json);
  }

  normalize() {
    return {
      'list-no-berobat': this.treatment_number_list,
      od_rnfl_normal_text: this.od_rnfl_normal_text,
      od_rnfl_menipis_text: this.od_rnfl_menipis_text,
      od_rnfl: this.od_rnfl,
      od_rnfl_menebal_text: this.od_rnfl_menebal_text,
      od_cd_vertical_normal_text: this.od_cd_vertical_normal_text,
      od_cd_vertical: this.od_cd_vertical,
      od_cd_vertical_upnormal_text: this.od_cd_vertical_upnormal_text,
      os_rnfl_normal_text: this.os_rnfl_normal_text,
      os_rnfl: this.os_rnfl,
      os_rnfl_menipis_text: this.os_rnfl_menipis_text,
      os_rnfl_menebal_text: this.os_rnfl_menebal_text,
      os_cd_vertical: this.os_cd_vertical,
      os_cd_vertical_normal_text: this.os_cd_vertical_normal_text,
      os_cd_vertical_upnormal_text: this.os_cd_vertical_upnormal_text,
      kesimpulan: this.summary,
      'ttd-tanggal': UpdatePupilOCTResultRequest.convertToNormalDatetime(this.signature_date),
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
    }
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
}
