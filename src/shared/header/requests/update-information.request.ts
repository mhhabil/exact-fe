import * as yup from 'yup';
import { AppRequest, IAppRequest } from "@src/shared/request";

interface ISelect {
  label: string;
  value: string;
}
export interface IUpdateInformationRequest extends IAppRequest {
  allergy: string;
  allergy_select: Array<ISelect>;
  allergy_radio: string;
  other_allergy: string;
  other_allergy_text: string;
  rpt: string;
  rpt_select: Array<ISelect>;
  rpt_radio: string;
  other_rpt: string;
  other_rpt_text: string;
  rpo: string;
  rpo_select: Array<ISelect>;
  rpo_radio: string;
  other_rpo: string;
  other_rpo_text: string;
  kll_radio: string;
  officer_id: string;
}

export class UpdateInformationRequest extends AppRequest {
  allergy: string;
  allergy_select: Array<ISelect>;
  allergy_radio: string;
  other_allergy: string;
  other_allergy_text: string;
  rpt: string;
  rpt_select: Array<ISelect>;
  rpt_radio: string;
  other_rpt: string;
  other_rpt_text: string;
  rpo: string;
  rpo_select: Array<ISelect>;
  rpo_radio: string;
  other_rpo: string;
  other_rpo_text: string;
  kll_radio: string;
  officer_id: string;

  constructor(request: IUpdateInformationRequest) {
    super(request);
    this.allergy = request.allergy;
    this.allergy_select = request.allergy_select;
    this.allergy_radio = request.allergy_radio;
    this.other_allergy = request.other_allergy;
    this.other_allergy_text = request.other_allergy_text;
    this.rpt = request.rpt;
    this.rpt_select = request.rpt_select;
    this.rpt_radio = request.rpt_radio;
    this.other_rpt = request.other_rpt;
    this.other_rpt_text = request.other_rpt_text
    this.rpo = request.rpo;
    this.rpo_select = request.rpo_select;
    this.rpo_radio = request.rpo_radio;
    this.other_rpo = request.other_rpo;
    this.other_rpo_text = request.other_rpo_text;
    this.kll_radio = request.kll_radio;
    this.officer_id = request.officer_id;
  }

  static createFromJson(json: IUpdateInformationRequest) {
    return new UpdateInformationRequest(json);
  }

  static schema() {
    return yup.object().shape({
      allergy: yup.string(),
      // allergy_select: yup.array(),
      rpt: yup.string(),
      // rpt_select: yup.array(),
      rpo: yup.string(),
      // rpo_select: yup.array(),
      officer_id: yup.string(),
    });
  }

  normalize() {
    return {
      alergi: this.allergy,
      alergi_select: this.allergy_select,
      alergi_radio: this.allergy_radio,
      alergi_lain: this.other_allergy,
      alergi_lain_teks: this.other_allergy_text,
      rpt: this.rpt,
      rpt_select: this.rpt_select,
      rpt_radio: this.rpt_radio,
      rpt_lain: this.other_rpt,
      rpt_lain_teks: this.other_rpt_text,
      rpo: this.rpo,
      rpo_select: this.rpo_select,
      rpo_radio: this.rpo_radio,
      rpo_lain: this.other_rpo,
      rpo_lain_teks: this.other_rpo_text,
      kll_radio: this.kll_radio,
      "id-petugas": this.officer_id,
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
}
