import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdatePatientIdentityRequest extends IAppRequest {
  name: string;
  bod_and_age: string;
  gender: string;
  address: string;
  city: string;
  phone: string;
  religion: string;
  job: string;
  marital_status: string;
  bpjs_no: string;
  family_name: string;
  family_relation: string;
  family_address: string;
  family_phone: string;
  family_nation: string;
  signature_person: string;
  signature_patient: string;
  signature_wali: string;
  signature_officer: string;
  id_officer: string;
}

export class UpdatePatientIdentityRequest extends AppRequest {
  name: string;
  bod_and_age: string;
  gender: string;
  address: string;
  city: string;
  phone: string;
  religion: string;
  job: string;
  marital_status: string;
  bpjs_no: string;
  family_name: string;
  family_relation: string;
  family_address: string;
  family_phone: string;
  family_nation: string;
  signature_person: string;
  signature_patient: string;
  signature_wali: string;
  signature_officer: string;
  id_officer: string;

  constructor(request: IUpdatePatientIdentityRequest) {
    super(request);
    this.name = request.name;
    this.bod_and_age = request.bod_and_age;
    this.gender = request.gender;
    this.address = request.address;
    this.city = request.city;
    this.phone = request.phone;
    this.religion = request.religion;
    this.job = request.job;
    this.marital_status = request.marital_status;
    this.bpjs_no = request.bpjs_no;
    this.family_name = request.family_name;
    this.family_relation = request.family_relation;
    this.family_address = request.family_address;
    this.family_phone = request.family_phone;
    this.family_nation = request.family_nation;
    this.signature_person = request.signature_person;
    this.signature_patient = request.signature_patient;
    this.signature_wali = request.signature_wali;
    this.signature_officer = request.signature_officer;
    this.id_officer = request.id_officer;
  }

  static schema() {
    return yup.object().shape({
      name: yup.string(),
      bod_and_age: yup.string(),
      gender: yup.string(),
      address: yup.string(),
      city: yup.string(),
      phone: yup.string(),
      religion: yup.string(),
      job: yup.string(),
      marital_status: yup.string(),
      bpjs_no: yup.string(),
      family_name: yup.string(),
      family_relation: yup.string(),
      family_address: yup.string(),
      family_phone: yup.string(),
      family_nation: yup.string(),
      signature_person: yup.string(),
      signature_patient: yup.string(),
      signature_wali: yup.string(),
      signature_officer: yup.string(),
      id_officer: yup.string(),
    });
  }

  normalize() {
    return {
      "tandaTangan-radio": this.signature_person,
      "tanda-tangan-pasien": this.signature_patient,
      "tanda-tangan-wali": this.signature_wali,
      "tanda-tangan-petugas": this.signature_officer,
      "id-petugas": this.id_officer,
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

  static createFromJson(json: IUpdatePatientIdentityRequest) {
    return new UpdatePatientIdentityRequest(json);
  }
}
