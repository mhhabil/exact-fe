import * as yup from 'yup';
import { CreateCpptRoRequest, ICreateCpptRoRequest } from "@src/modules/ro/cppt/requests";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface ICreateCpptNutritionRequest extends ICreateCpptRoRequest {
  data_d: string;
  data_i: string;
  data_m: string;
  data_e: string;
  unit: string;
}

export class CreateCpptNutritionRequest extends CreateCpptRoRequest {
  data_d: string;
  data_i: string;
  data_m: string;
  data_e: string;
  unit: string;

  constructor(req: ICreateCpptNutritionRequest) {
    super(req);
    this.data_d = req.data_d;
    this.data_i = req.data_i;
    this.data_m = req.data_m;
    this.data_e = req.data_e;
    this.unit = req.unit ?? 'Gizi';
  }

  normalize() {
    return {
      'data-s': this.data_s,
      'data-o': this.data_o,
      'data-a': this.data_a,
      'data-a-text': this.data_a_text,
      'data-p': this.data_p,
      'data-d': this.data_d,
      'data-i': this.data_i,
      'data-m': this.data_m,
      'data-e': this.data_e,
      'instruksi-ppa': this.instruksi_ppa,
      waktu: this.waktu ? DateTimeConverter.convertToNormalDatetime(this.waktu) : '',
      'id-perawat-cppt': this.id_perawat_cppt ?? '',
      'ttd-perawat-cppt': this.ttd_perawat_cppt ?? '',
      'id-dokter-pengkaji': this.id_dokter_pengkaji ?? '',
      'ttd-dokter-pengkaji': this.ttd_dokter_pengkaji ?? '',
      'data-o-json': this.data_o_json,
      unit: this.unit,
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
      'cmb-data-o': this.cmb_data_o,
    }
  }

  static createFromJson(json: ICreateCpptNutritionRequest) {
    return new CreateCpptNutritionRequest(json);
  }
}

