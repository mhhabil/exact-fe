import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreatePupilOCTResultRequest extends IAppRequest {
  unit: string;
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
  kesimpulan: string;
  kesimpulan_opt: string;
  'ttd-tanggal': string;
  "ttd-dokter-pemeriksa": string;
  dokter_pemeriksa: string;
  "ttd-perawat-pemeriksa": string;
  perawat_pemeriksa: string;
}

export class CreatePupilOCTResultRequest extends AppRequest {
  unit: string;
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
  kesimpulan: string;
  'ttd-tanggal': string;
  "ttd-dokter-pemeriksa": string;
  dokter_pemeriksa: string;
  "ttd-perawat-pemeriksa": string;
  perawat_pemeriksa: string;
  kesimpulan_opt: string;

  constructor(request: ICreatePupilOCTResultRequest) {
    super(request);
    this.unit = request.unit;
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
    this.kesimpulan = request.kesimpulan;
    this['ttd-tanggal'] = request['ttd-tanggal'] ? DateTimeConverter.convertToNormalDatetime(request['ttd-tanggal']) : '';
    this['ttd-dokter-pemeriksa'] = request['ttd-dokter-pemeriksa'];
    this.dokter_pemeriksa = request.dokter_pemeriksa;
    this['ttd-perawat-pemeriksa'] = request['ttd-perawat-pemeriksa'];
    this.perawat_pemeriksa = request.perawat_pemeriksa;
    this.kesimpulan_opt = request.kesimpulan_opt;
  }

  static schema() {
    return yup.object().shape({
      unit: yup.string(),
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
      kesimpulan: yup.string(),
      'ttd-tanggal': yup.string(),
      "ttd-dokter-pemeriksa": yup.string(),
      dokter_pemeriksa: yup.string(),
      "ttd-perawat-pemeriksa": yup.string(),
      perawat_pemeriksa: yup.string(),
      kesimpulan_opt: yup.string(),
    });
  }

  static createFromJson(json: ICreatePupilOCTResultRequest) {
    return new CreatePupilOCTResultRequest(json);
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
}
