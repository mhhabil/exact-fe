import * as yup from 'yup';

import { AppRequest, IAppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdateFallRiskAssessmentRequest extends IAppRequest {
  preliminary_date: string;
  unbalanced_radio: string;
  auxiliary_radio: string;
  tool_value: string[];
  support_radio: string;
  result_date: string
  result_value: string;
  result_text: string;
  result_description: string;
  action_date: string;
  high_sticker_radio: string;
  high_yellow_radio: string;
  high_education_radio: string;
  signature: string;
  id_sign: string;
  no_risk_radio: string;
  low_education_radio: string;
}

export class UpdateFallRiskAssessmentRequest extends AppRequest {
  preliminary_date: string;
  unbalanced_radio: string;
  auxiliary_radio: string;
  tool_value: string[];
  support_radio: string;
  result_date: string
  result_value: string;
  result_text: string;
  result_description: string;
  action_date: string;
  high_sticker_radio: string;
  high_yellow_radio: string;
  high_education_radio: string;
  signature: string;
  id_sign: string;
  no_risk_radio: string;
  low_education_radio: string;

  constructor(request: IUpdateFallRiskAssessmentRequest) {
    super(request);
    this.preliminary_date = request.preliminary_date;
    this.unbalanced_radio = request.unbalanced_radio;
    this.auxiliary_radio = request.auxiliary_radio;
    this.tool_value = request.tool_value;
    this.support_radio = request.support_radio;
    this.result_date = request.result_date;
    this.result_value = request.result_value;
    this.result_text = request.result_text;
    this.result_description = request.result_description;
    this.action_date = request.action_date;
    this.high_sticker_radio = request.high_sticker_radio;
    this.high_yellow_radio = request.high_yellow_radio;
    this.high_education_radio = request.high_education_radio;
    this.signature = request.signature;
    this.id_sign = request.id_sign
    this.no_risk_radio = request.no_risk_radio;
    this.low_education_radio = request.low_education_radio;
  }

  static schema() {
    return yup.object().shape({
      preliminary_date: yup.string(),
      unbalanced_radio: yup.string(),
      auxiliary_radio: yup.string(),
      tool_value: yup.string(),
      support_radio: yup.string(),
      result_date: yup.string(),
      result_value: yup.string(),
      result_text: yup.string(),
      result_description: yup.string(),
      action_date: yup.string(),
      high_sticker_radio: yup.string(),
      high_yellow_radio: yup.string(),
      high_education_radio: yup.string(),
      signature: yup.string(),
      id_sign: yup.string(),
      no_risk_radio: yup.string(),
      low_education_radio: yup.string(),
    });
  }

  normalize() {
    return {
      "tanggal-pengkaji": (this.preliminary_date) ? DateTimeConverter.convertToNormalDatetime(this.preliminary_date) : '',
      "tidakSeimbang-radio": this.unbalanced_radio,
      "alatBantu-radio": this.auxiliary_radio,
      "alatBantu-value": this.tool_value,
      "menopang-radio": this.support_radio,
      "tanggal-hasil": this.result_date ? DateTimeConverter.convertToNormalDatetime(this.result_date) : '',
      "hasil-value": this.result_value,
      "hasil-teks": this.result_text,
      "hasil-keterangan": this.result_description,
      "tanggal-tindakan": this.action_date ? DateTimeConverter.convertToNormalDatetime(this.action_date) : '',
      "tidakBerisiko-radio": this.no_risk_radio,
      "tinggi-stiker-radio": this.high_sticker_radio,
      "tinggi-kuning-radio": this.high_yellow_radio,
      "tinggi-edukasi-radio": this.high_education_radio,
      "tanda-tangan": this.signature,
      "rendah-edukasi-radio": this.low_education_radio,
      "id-tanda-tangan": this.id_sign,
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
    }
  }

  static createFromJson(json: IUpdateFallRiskAssessmentRequest) {
    return new UpdateFallRiskAssessmentRequest(json);
  }
  
}