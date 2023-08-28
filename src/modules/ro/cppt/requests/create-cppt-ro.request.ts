import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface ICreateCpptRoRequest extends IAppRequest {
  unit: string;
  data_s: string;
  data_o: string;
  data_a: string;
  data_a_text: string;
  data_p: string;
  instruksi_ppa: string;
  waktu: string;
  id_perawat_cppt?: string;
  ttd_perawat_cppt?: string;
  id_dokter_pengkaji: string;
  ttd_dokter_pengkaji: string;
  data_o_json: any;
  cmb_data_o?: string;
}

export class CreateCpptRoRequest extends AppRequest {
  unit: string;
  data_s: string;
  data_o: string;
  data_a: string;
  data_a_text: string;
  data_p: string;
  instruksi_ppa: string;
  waktu: string;
  id_perawat_cppt?: string;
  ttd_perawat_cppt?: string;
  id_dokter_pengkaji: string;
  ttd_dokter_pengkaji: string;
  data_o_json: any;
  cmb_data_o?: string;

  constructor(request: ICreateCpptRoRequest) {
    super(request);

    this.unit = request.unit ?? 'RO';
    this.data_s = request.data_s;
    this.data_o = request.data_o;
    this.data_a = request.data_a;
    this.cmb_data_o = request.cmb_data_o;
    this.data_a_text = request.data_a_text;
    this.data_p = request.data_p;
    this.instruksi_ppa = request.instruksi_ppa;
    this.waktu = request.waktu;
    this.id_perawat_cppt = request.id_perawat_cppt;
    this.ttd_perawat_cppt = request.ttd_perawat_cppt;
    this.id_dokter_pengkaji = request.id_dokter_pengkaji;
    this.ttd_dokter_pengkaji = request.ttd_dokter_pengkaji;
    this.data_o_json = request.data_o_json;
  }

  normalize() {
    return {
      'data-s': this.data_s,
      'data-o': this.data_o,
      'cmb-data-o': this.cmb_data_o,
      'data-a': this.data_a,
      'data-a-text': this.data_a_text,
      'data-p': this.data_p,
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
    }
  }

  static scheme() {
    return yup.object().shape({
      data_s: yup.string(),
      data_o: yup.string(),
      data_a: yup.string(),
      data_a_text: yup.string(),
      data_p: yup.string(),
      instruksi_ppa: yup.string(),
      waktu: yup.string(),
      id_perawat_cppt: yup.string(),
      ttd_perawat_cppt: yup.string(),
      id_dokter_pengkaji: yup.string(),
      ttd_dokter_pengkaji: yup.string(),
    });
  }

  static createFromJson(json: ICreateCpptRoRequest) {
    return new CreateCpptRoRequest(json);
  }
}
