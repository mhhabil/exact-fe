import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateGlassesPrescriptionRequest extends IAppRequest {
  od_preliminary_study: string;
  os_preliminary_study: string;
  phone: string;
  name: string;
  flag_params: string;
  invoice_no: string;
  h_recipe: string;
  sph_right_distance: string;
  cyl_right_distance: string;
  ax_right_distance: string;
  va_right_distance: string;
  sph_left_distance: string;
  cyl_left_distance: string;
  ax_left_distance: string;
  va_left_distance: string;
  pd_distance: string;
  sph_right_reading: string;
  cyl_right_reading: string;
  ax_right_reading: string;
  va_right_reading: string;
  sph_left_reading: string;
  cyl_left_reading: string;
  ax_left_reading: string;
  va_left_reading: string;
  pd_reading: string;
  note: string;
  prescription_date: string;
  signature_doctor: string;
  doctor: string;
}

export class UpdateGlassesPrescriptionRequest extends AppRequest {
  od_preliminary_study: string;
  os_preliminary_study: string;
  phone: string;
  name: string;
  flag_params: string;
  invoice_no: string;
  h_recipe: string;
  sph_right_distance: string;
  cyl_right_distance: string;
  ax_right_distance: string;
  va_right_distance: string;
  sph_left_distance: string;
  cyl_left_distance: string;
  ax_left_distance: string;
  va_left_distance: string;
  pd_distance: string;
  sph_right_reading: string;
  cyl_right_reading: string;
  ax_right_reading: string;
  va_right_reading: string;
  sph_left_reading: string;
  cyl_left_reading: string;
  ax_left_reading: string;
  va_left_reading: string;
  pd_reading: string;
  note: string;
  prescription_date: string;
  signature_doctor: string;
  doctor: string;

  constructor(request: IUpdateGlassesPrescriptionRequest) {
    super(request)
    this.od_preliminary_study = request.od_preliminary_study;
    this.os_preliminary_study = request.os_preliminary_study;
    this.phone = request.phone;
    this.name = request.name;
    this.flag_params = request.flag_params;
    this.invoice_no = request.invoice_no;
    this.h_recipe = request.h_recipe;

    this.sph_right_distance = request.sph_right_distance;
    this.cyl_right_distance = request.cyl_right_distance;
    this.ax_right_distance = request.ax_right_distance;
    this.va_right_distance = request.va_right_distance;

    this.sph_left_distance = request.sph_left_distance;
    this.cyl_left_distance = request.cyl_left_distance;
    this.ax_left_distance = request.ax_left_distance;
    this.va_left_distance = request.va_left_distance;

    this.pd_distance = request.pd_distance;

    this.sph_right_reading = request.sph_right_reading;
    this.cyl_right_reading = request.cyl_right_reading;
    this.ax_right_reading = request.ax_right_reading;
    this.va_right_reading = request.va_right_reading;

    this.sph_left_reading = request.sph_left_reading;
    this.cyl_left_reading = request.cyl_left_reading;
    this.ax_left_reading = request.ax_left_reading;
    this.va_left_reading = request.va_left_reading;

    this.pd_reading = request.pd_reading;
    this.note = request.note;
    this.prescription_date = request.prescription_date;
    this.signature_doctor = request.signature_doctor;
    this.doctor = request.doctor;
  }

  static schema() {
    return yup.object().shape({
      od_preliminary_study: yup.string(),
      os_preliminary_study: yup.string(),
      phone: yup.string(),
      name: yup.string(),
      flag_params: yup.string(),
      invoice_no: yup.string(),
      h_recipe: yup.string(),
      sph_right_distance: yup.string(),
      cyl_right_distance: yup.string(),
      ax_right_distance: yup.string(),
      va_right_distance: yup.string(),
      sph_left_distance: yup.string(),
      cyl_left_distance: yup.string(),
      ax_left_distance: yup.string(),
      va_left_distance: yup.string(),
      pd_distance: yup.string(),
      sph_right_reading: yup.string(),
      cyl_right_reading: yup.string(),
      ax_right_reading: yup.string(),
      va_right_reading: yup.string(),
      sph_left_reading: yup.string(),
      cyl_left_reading: yup.string(),
      ax_left_reading: yup.string(),
      va_left_reading: yup.string(),
      pd_reading: yup.string(),
      note: yup.string(),
      prescription_date: yup.string(),
      signature_doctor: yup.string(),
      doctor: yup.string(),
    });
  }

  static createFromJson(json: IUpdateGlassesPrescriptionRequest) {
    return new UpdateGlassesPrescriptionRequest(json);
  }

  normalize() {
    return {
      "pengkajian-awal-od": this.od_preliminary_study,
      "pengkajian-awal-os": this.os_preliminary_study,
      no_hp: this.phone,
      nama_pasien: this.name,
      flag_params: this.flag_params,
      no_faktur: this.invoice_no,
      resep_h: this.h_recipe,
      sph_right_distance: this.sph_right_distance,
      cyl_right_distance: this.cyl_right_distance,
      ax_right_distance: this.ax_right_distance,
      va_right_distance: this.va_right_distance,
      sph_left_distance: this.sph_left_distance,
      cyl_left_distance: this.cyl_left_distance,
      ax_left_distance: this.ax_left_distance,
      va_left_distance: this.va_left_distance,
      pd_distance: this.pd_distance,
      sph_right_reading: this.sph_right_reading,
      cyl_right_reading: this.cyl_right_reading,
      ax_right_reading: this.ax_right_reading,
      va_right_reading: this.va_right_reading,
      sph_left_reading: this.sph_left_reading,
      cyl_left_reading: this.cyl_left_reading,
      ax_left_reading: this.ax_left_reading,
      va_left_reading: this.va_left_reading,
      pd_reading: this.pd_reading,
      "catatan-lain": this.note,
      "tanggal-resep": UpdateGlassesPrescriptionRequest.convertToNormalDatetime(this.prescription_date),
      "ttd-dokter": this.signature_doctor,
      dokter: this.doctor,
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

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
}
