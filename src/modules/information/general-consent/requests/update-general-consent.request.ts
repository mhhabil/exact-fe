import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateGeneralConsentRequest extends IAppRequest {
  patient_name: string;
  patient_no_mr: string;
  patient_bod: string;
  patient_address: string;
  signature_person: string;
  signature_name: string;
  signature_phone: string;
  signature_address: string;
  service_type: string;
  doctor_treatment: string;
  doctor_on_duty: string;
  payment: string;
  wali: string;
  other: string;
  visitable: string;
  forbidden_name: Array<string>;
  signature_date: string;
  signature_patient: string;
  signature_wali: string;
  signature_officer: string;
  id_officer: string;
}

export class UpdateGeneralConsentRequest extends AppRequest {
  patient_name: string;
  patient_no_mr: string;
  patient_bod: string;
  patient_address: string;
  signature_person: string;
  signature_name: string;
  signature_phone: string;
  signature_address: string;
  service_type: string;
  doctor_treatment: string;
  doctor_on_duty: string;
  payment: string;
  wali: string;
  other: string;
  visitable: string;
  forbidden_name: Array<string>;
  signature_date: string;
  signature_patient: string;
  signature_wali: string;
  signature_officer: string;
  id_officer: string;

  constructor(request: IUpdateGeneralConsentRequest) {
    super(request);
    this.patient_name = request.patient_name;
    this.patient_no_mr = request.patient_no_mr;
    this.patient_bod = request.patient_bod;
    this.patient_address = request.patient_address;
    this.signature_person = request.signature_person;
    this.signature_name = request.signature_name;
    this.signature_phone = request.signature_phone;
    this.signature_address = request.signature_address;
    this.service_type = request.service_type
    this.doctor_treatment = request.doctor_treatment;
    this.doctor_on_duty = request.doctor_on_duty;
    this.payment = request.payment;
    this.wali = request.wali;
    this.other = request.other;
    this.visitable = request.visitable;
    this.forbidden_name = request.forbidden_name;
    this.signature_date = request.signature_date;
    this.signature_patient = request.signature_patient;
    this.signature_wali = request.signature_wali;
    this.signature_officer = request.signature_officer;
    this.id_officer = request.id_officer;
  }

  static schema() {
    return yup.object().shape({
      patient_name: yup.string(),
      patient_no_mr: yup.string(),
      patient_bod: yup.string(),
      patient_address: yup.string(),
      signature_person: yup.string(),
      signature_name: yup.string(),
      signature_phone: yup.string(),
      signature_address: yup.string(),
      service_type: yup.string(),
      doctor_treatment: yup.string(),
      doctor_on_duty: yup.string(),
      payment: yup.string(),
      wali: yup.string().required(),
      other: yup.string(),
      visitable: yup.string(),
      forbidden_name: yup.array().of(yup.string()),
      signature_date: yup.string(),
      signature_patient: yup.string(),
      signature_wali: yup.string(),
      signature_officer: yup.string(),
      id_officer: yup.string(),
    });
  }

  normalize() {
    return {
      "pasien-nama": this.patient_name,
      "pasien-nomorMR": this.patient_no_mr,
      "pasien-tglLahir": this.patient_bod,
      "pasien-alamat": this.patient_address,
      "tandaTangan-radio": this.signature_person,
      "tandaTangan-nama": this.signature_name,
      "tandaTangan-telp": this.signature_phone,
      "tandaTangan-alamat": this.signature_address,
      "tipeRawat-radio": this.service_type,
      "dokter-rawat": this.doctor_treatment,
      "dokter-jaga": this.doctor_on_duty,
      "pelepasan-pembayaran": this.payment,
      "pelepasan-wali": this.wali,
      "pelepasan-lain": this.other,
      "kunjungan-radio": this.visitable,
      namaTidakIzin: (Array.isArray(this.forbidden_name)) ? this.forbidden_name : [],
      "tanggal-ttd": UpdateGeneralConsentRequest.convertToNormalDatetime(this.signature_date),
      "ttd-pasien": this.signature_patient,
      "ttd-saksi": this.signature_officer,
      "id-saksi": this.id_officer,
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
  static createFromJson(json: IUpdateGeneralConsentRequest) {
    return new UpdateGeneralConsentRequest(json);
  }
}
