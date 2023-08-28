import * as yup from 'yup';
import {CreateCpptRoRequest, ICreateCpptRoRequest} from '@modules/ro/cppt/requests';
import { IPictureDataO, PictureDataO } from '@src/modules/outpatient/cppt/requests/create-cppt-out-patient.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
export interface ICreateCpptOkRequest extends ICreateCpptRoRequest {
  resep: any
  unit: string;
  anjuran: string;
  gambar_mata_od: string;
  gambar_mata_os: string;
  gambar_retina_od: string;
  gambar_retina_os: string;
  how_to_use: Array<string>;
  notes: Array<string>;
  total: Array<string>;
  meds_name: Array<string>;
  is_form_doctor: boolean;
  eye_submit: string;
  retina_submit: string;
  picture_data_o: IPictureDataO;
}

export class CreateCpptOkRequest extends CreateCpptRoRequest {
  resep: any
  unit: string;
  anjuran: string;
  gambar_mata_od: string;
  gambar_mata_os: string;
  gambar_retina_od: string;
  gambar_retina_os: string;
  how_to_use: Array<string>;
  notes: Array<string>;
  total: Array<string>;
  meds_name: Array<string>;
  is_form_doctor: boolean;
  eye_submit: string;
  retina_submit: string;
  picture_data_o: PictureDataO;

  constructor(request: ICreateCpptOkRequest) {
    super(request);
    this.resep = request.resep;
    this.unit = request.unit ?? 'OK';
    this.anjuran = request.anjuran;
    this.gambar_mata_od = request.gambar_mata_od;
    this.gambar_mata_os = request.gambar_mata_os;
    this.gambar_retina_od = request.gambar_retina_od;
    this.gambar_retina_os = request.gambar_retina_os;
    this.how_to_use = (request.how_to_use && Array.isArray(request.how_to_use)) ? request.how_to_use : [];
    this.notes = (request.notes && Array.isArray(request.notes)) ? request.notes : [];
    this.total = (request.total && Array.isArray(request.total)) ? request.total : [];
    this.meds_name = (request.meds_name && Array.isArray(request.meds_name)) ? request.meds_name : [];
    this.is_form_doctor = request.is_form_doctor;
    this.eye_submit = request.eye_submit;
    this.retina_submit = request.retina_submit;
    this.picture_data_o = request.picture_data_o;
  }

  normalize(): any {
    return {
      'data-s': this.data_s,
      'data-o': this.data_o,
      'data-a': this.data_a,
      'data-p': this.data_p,
      'instruksi-ppa': this.instruksi_ppa,
      waktu: this.waktu ? DateTimeConverter.convertToNormalDatetime(this.waktu) : '',
      'id-perawat-cppt': this.id_perawat_cppt ?? '',
      'ttd-perawat-cppt': this.ttd_perawat_cppt ?? '',
      'id-dokter-pengkaji': this.id_dokter_pengkaji ?? '',
      'ttd-dokter-pengkaji': this.ttd_dokter_pengkaji ?? '',
      'data-o-json': this.data_o_json,
      anjuran: this.anjuran,
      unit: this.unit,
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
      "aturan-pakai": this.how_to_use,
      catatan: this.notes,
      jumlah: this.total,
      'nama-obat': this.meds_name,
      'gambar-mata-od': this.gambar_mata_od,
      'gambar-mata-os': this.gambar_mata_os,
      'gambar-retina-od': this.gambar_retina_od,
      'gambar-retina-os': this.gambar_retina_os,
      'is-form-dokter': this.is_form_doctor,
      'submit-mata': this.eye_submit,
      'submit-retina': this.retina_submit,
      'picture-data-o': this.picture_data_o,
    }
  }

  static scheme() {
    return yup.object().shape({
      data_s: yup.string(),
      data_o: yup.string(),
      data_a: yup.string(),
      data_p: yup.string(),
      data_a_text: yup.string(),
      instruksi_ppa: yup.string(),
      anjuran: yup.string(),
      waktu: yup.string(),
      how_to_use: yup.array().of(yup.string()),
      notes: yup.array().of(yup.string()),
      total: yup.array().of(yup.string()),
      meds_name: yup.array().of(yup.string()),
      id_perawat_cppt: yup.string(),
      ttd_perawat_cppt: yup.string(),
      id_dokter_pengkaji: yup.string(),
      ttd_dokter_pengkaji: yup.string(),
      gambar_mata_od: yup.mixed(),
      gambar_mata_os: yup.mixed(),
      gambar_retina_od: yup.mixed(),
      gambar_retina_os: yup.mixed(),
      picture_data_o: PictureDataO.scheme(),
    });
  }

  static createFromJson(json: ICreateCpptOkRequest) {
    return new CreateCpptOkRequest(json);
  }
}
