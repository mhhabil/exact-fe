import * as yup from 'yup';

import { AppRequest, IAppRequest } from '@src/shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdateNursingInitialAssessmentRequest extends IAppRequest {
  person_responsible: string;
  person_in_charge_name: string;
  person_in_charge_age: string;
  responsible_gender: string;
  person_in_charge_address: string;
  responsible_relationship: string;
  main_complaint: string;
  td: string;
  bb: string;
  p: string;
  pulse: string;
  tb: string;
  temperature: string;
  awareness: string;
  painful: string;
  pain_status: string;
  pain_scale: string;
  pain_screening: string;
  pain_location: string;
  pain_duration: string;
  frequency_pain: string;
  pain_lost: string;
  pain_missing_other_text: string;
  tell_doctor_physical_examination: string;
  notify_doctor_physical_examination_at: string;
  total_score: string;
  result_total_score: string;
  how_to_walk: string;
  holding_support: string;
  result_value: string;
  result_text: string;
  tell_doctor_risk_injury: string;
  tell_doctor_risk_injury_punch: string;
  type_operation_experienced: string;
  operating_time: string;
  complications: string;
  history_disease_family: string;
  have_dependency: string;
  dependence_on: string[];
  dependence_on_description: string;
  dependence_on_explanation: string;
  allergy_history: string;
  history_allergy_description: string;
  nutrition_down_bb: string;
  food_intake: string;
  diagnostic_special: string;
  types_of_diseases: string[];
  type_disease_description: string;
  nutrition_score: string;
  status_functional: string;
  status_functional_description: string;
  status_functional_notified_at: string;
  talk: string;
  talk_text: string;
  need_translator: string;
  need_translator_text: string;
  sign_language: string;
  barrier_learning: string;
  barriers_learning_text: string;
  level_of_education: string;
  level_education_text: string;
  economic_status: string;
  status_economy_text: string;
  social_status: string;
  status_psychology: string;
  status_psychology_text: string;
  mental_state: string;
  status_mental_text: string;
  relationship_patient_family: string;
  religion: string;
  disturbance_table: string;
  table_pain: string;
  table_infection: string;
  table_fall: string;
  tabel_tio: string;
  table_less_knowledge: string;
  other_table: string;
  table_other_problems: string;
  other_plan_table: string;
  signed_nurse_study_in: string;
  id_nurse_study_login: string;
  face_table: string;
  foot_table: string;
  activity_table: string;
  crying_table: string;
  convenience_table: string;
  tanggal_waktu: string;
}

export class UpdateNursingInitialAssessmentRequest extends AppRequest {
  person_responsible: string;
  person_in_charge_name: string;
  person_in_charge_age: string;
  responsible_gender: string;
  person_in_charge_address: string;
  responsible_relationship: string;
  main_complaint: string;
  td: string;
  bb: string;
  p: string;
  pulse: string;
  tb: string;
  temperature: string;
  awareness: string;
  painful: string;
  pain_status: string;
  pain_scale: string;
  pain_screening: string;
  pain_location: string;
  pain_duration: string;
  frequency_pain: string;
  pain_lost: string;
  pain_missing_other_text: string;
  tell_doctor_physical_examination: string;
  notify_doctor_physical_examination_at: string;
  total_score: string;
  result_total_score: string;
  how_to_walk: string;
  holding_support: string;
  result_value: string;
  result_text: string;
  tell_doctor_risk_injury: string;
  tell_doctor_risk_injury_punch: string;
  type_operation_experienced: string;
  operating_time: string;
  complications: string;
  history_disease_family: string;
  have_dependency: string;
  dependence_on: string[];
  dependence_on_description: string;
  dependence_on_explanation: string;
  allergy_history: string;
  history_allergy_description: string;
  nutrition_down_bb: string;
  food_intake: string;
  diagnostic_special: string;
  types_of_diseases: string[];
  type_disease_description: string;
  nutrition_score: string;
  status_functional: string;
  status_functional_description: string;
  status_functional_notified_at: string;
  talk: string;
  talk_text: string;
  need_translator: string;
  need_translator_text: string;
  sign_language: string;
  barrier_learning: string;
  barriers_learning_text: string;
  level_of_education: string;
  level_education_text: string;
  economic_status: string;
  status_economy_text: string;
  social_status: string;
  status_psychology: string;
  status_psychology_text: string;
  mental_state: string;
  status_mental_text: string;
  relationship_patient_family: string;
  religion: string;
  disturbance_table: string;
  table_pain: string;
  table_infection: string;
  table_fall: string;
  tabel_tio: string;
  table_less_knowledge: string;
  other_table: string;
  table_other_problems: string;
  other_plan_table: string;
  signed_nurse_study_in: string;
  id_nurse_study_login: string;
  face_table: string;
  foot_table: string;
  activity_table: string;
  crying_table: string;
  convenience_table: string;
  tanggal_waktu: string;
  constructor(request: IUpdateNursingInitialAssessmentRequest) {
    super(request);
    this.person_responsible = request.person_responsible;
    this.person_in_charge_name = request.person_in_charge_name;
    this.person_in_charge_age = request.person_in_charge_age;
    this.responsible_gender = request.responsible_gender;
    this.person_in_charge_address = request.person_in_charge_address;
    this.responsible_relationship = request.responsible_relationship;
    this.main_complaint = request.main_complaint;
    this.td = request.td;
    this.bb = request.bb;
    this.p = request.p;
    this.pulse = request.pulse;
    this.tb = request.tb;
    this.temperature = request.temperature;
    this.awareness = request.awareness;
    this.painful = request.painful;
    this.pain_status = request.pain_status;
    this.pain_scale = request.pain_scale;
    this.pain_screening = request.pain_screening;
    this.pain_location = request.pain_location;
    this.pain_duration = request.pain_duration;
    this.frequency_pain = request.frequency_pain;
    this.pain_lost = request.pain_lost;
    this.pain_missing_other_text = request.pain_missing_other_text;
    this.tell_doctor_physical_examination = request.tell_doctor_physical_examination;
    this.notify_doctor_physical_examination_at = request.notify_doctor_physical_examination_at;
    this.total_score = request.total_score;
    this.result_total_score = request.result_total_score;
    this.how_to_walk = request.how_to_walk;
    this.holding_support = request.holding_support;
    this.result_value = request.result_value;
    this.result_text = request.result_text;
    this.tell_doctor_risk_injury = request.tell_doctor_risk_injury;
    this.tell_doctor_risk_injury_punch = request.tell_doctor_risk_injury_punch ? DateTimeConverter.convertToNormalDatetime(request.tell_doctor_risk_injury_punch) : '';
    this.type_operation_experienced = request.type_operation_experienced;
    this.operating_time = request.operating_time ? DateTimeConverter.convertToNormalDatetime(request.operating_time) : '';
    this.complications = request.complications;
    this.history_disease_family = request.history_disease_family;
    this.have_dependency = request.have_dependency;
    this.dependence_on = request.dependence_on;
    this.dependence_on_description = request.dependence_on_description;
    this.dependence_on_explanation = request.dependence_on_explanation;
    this.allergy_history = request.allergy_history;
    this.history_allergy_description = request.history_allergy_description;
    this.nutrition_down_bb = request.nutrition_down_bb;
    this.food_intake = request.food_intake;
    this.diagnostic_special = request.diagnostic_special;
    this.types_of_diseases = request.types_of_diseases;
    this.type_disease_description = request.type_disease_description;
    this.nutrition_score = request.nutrition_score;
    this.status_functional = request.status_functional;
    this.status_functional_description = request.status_functional_description;
    this.status_functional_notified_at = request.status_functional_notified_at;
    this.talk = request.talk;
    this.talk_text = request.talk_text;
    this.need_translator = request.need_translator;
    this.need_translator_text = request.need_translator_text;
    this.sign_language = request.sign_language;
    this.barrier_learning = request.barrier_learning;
    this.barriers_learning_text = request.barriers_learning_text;
    this.level_of_education = request.level_of_education;
    this.level_education_text = request.level_education_text;
    this.economic_status = request.economic_status;
    this.status_economy_text = request.status_economy_text;
    this.social_status = request.social_status;
    this.status_psychology = request.status_psychology;
    this.status_psychology_text = request.status_psychology_text;
    this.mental_state = request.mental_state;
    this.status_mental_text = request.status_mental_text;
    this.relationship_patient_family = request.relationship_patient_family;
    this.religion = request.religion;
    this.disturbance_table = request.disturbance_table;
    this.table_pain = request.table_pain;
    this.table_infection = request.table_infection;
    this.table_fall = request.table_fall;
    this.tabel_tio = request.tabel_tio;
    this.table_less_knowledge = request.table_less_knowledge;
    this.other_table = request.other_table;
    this.table_other_problems = request.table_other_problems;
    this.other_plan_table = request.other_plan_table;
    this.signed_nurse_study_in = request.signed_nurse_study_in;
    this.id_nurse_study_login = request.id_nurse_study_login;
    this.face_table = request.face_table;
    this.foot_table = request.foot_table;
    this.activity_table = request.activity_table;
    this.crying_table = request.crying_table;
    this.convenience_table = request.convenience_table;
    this.tanggal_waktu = request.tanggal_waktu;
  }

  static schema() {
    return yup.object().shape({
      person_responsible: yup.string(),
      person_in_charge_name: yup.string(),
      person_in_charge_age: yup.string(),
      responsible_gender: yup.string(),
      person_in_charge_address: yup.string(),
      responsible_relationship: yup.string(),
      td: yup.string(),
      bb: yup.string(),
      p: yup.string(),
      pulse: yup.string(),
      tb: yup.string(),
      main_complaint: yup.string(),
      temperature: yup.string(),
      awareness: yup.string(),
      painful: yup.string(),
      pain_status: yup.string(),
      pain_scale: yup.string(),
      pain_screening: yup.string(),
      pain_location: yup.string(),
      pain_duration: yup.string(),
      frequency_pain: yup.string(),
      pain_lost: yup.string(),
      pain_missing_other_text: yup.string(),
      tell_doctor_physical_examination: yup.string(),
      notify_doctor_physical_examination_at: yup.string(),
      total_score: yup.string(),
      result_total_score: yup.string(),
      how_to_walk: yup.string(),
      holding_support: yup.string(),
      result_value: yup.string(),
      result_text: yup.string(),
      tell_doctor_risk_injury: yup.string(),
      tell_doctor_risk_injury_punch: yup.string(),
      type_operation_experienced: yup.string(),
      operating_time: yup.string(),
      complications: yup.string(),
      history_disease_family: yup.string(),
      have_dependency: yup.string(),
      dependence_on: yup.string(),
      dependence_on_description: yup.string(),
      dependence_on_explanation: yup.string(),
      allergy_history: yup.string(),
      history_allergy_description: yup.string(),
      nutrition_down_bb: yup.string(),
      food_intake: yup.string(),
      diagnostic_special: yup.string(),
      types_of_diseases: yup.string(),
      type_disease_description: yup.string(),
      nutrition_score: yup.string(),
      status_functional: yup.string(),
      status_functional_description: yup.string(),
      status_functional_notified_at: yup.string(),
      talk: yup.string(),
      talk_text: yup.string(),
      need_translator: yup.string(),
      need_translator_text: yup.string(),
      Sign_language: yup.string(),
      barrier_learning: yup.string(),
      barriers_learning_text: yup.string(),
      level_of_education: yup.string(),
      level_education_text: yup.string(),
      economic_status: yup.string(),
      status_economy_text: yup.string(),
      social_status: yup.string(),
      status_psychology: yup.string(),
      status_psychology_text: yup.string(),
      mental_state: yup.string(),
      status_mental_text: yup.string(),
      relationship_patient_family: yup.string(),
      religion: yup.string(),
      disturbance_table: yup.string(),
      table_pain: yup.string(),
      table_infection: yup.string(),
      table_fall: yup.string(),
      tabel_tio: yup.string(),
      table_less_knowledge: yup.string(),
      other_table: yup.string(),
      table_other_problems: yup.string(),
      other_plan_table: yup.string(),
      signed_nurse_study_in: yup.string(),
      id_nurse_study_login: yup.string(),
      face_table: yup.string(),
      foot_table: yup.string(),
      activity_table: yup.string(),
      crying_table: yup.string(),
      convenience_table: yup.string(),
      tanggal_waktu: yup.string(),
    });
  }

  normalize() {
    return {
      "penanggung-jawab": this.person_responsible,
      "penanggung-jawab-nama": this.person_in_charge_name,
      "penanggung-jawab-umur": this.person_in_charge_age,
      "penanggung-jawab-jenisKelamin": this.responsible_gender,
      "penanggung-jawab-alamat": this.person_in_charge_address,
      "penanggung-jawab-hubungan": this.responsible_relationship,
      td: this.td,
      bb: this.bb,
      p: this.p,
      nadi: this.pulse,
      tb: this.tb,
      suhu: this.temperature,
      keluhan_utama: this.main_complaint,
      kesadaran: this.awareness,
      nyeri: this.painful,
      status_nyeri: this.pain_status,
      skala_nyeri: this.pain_scale,
      skrining_nyeri: this.pain_screening,
      lokasi_nyeri: this.pain_location,
      durasi_nyeri: this.pain_duration,
      frekwensi_nyeri: this.frequency_pain,
      nyeri_hilang: this.pain_lost,
      nyeri_hilang_lain_text: this.pain_missing_other_text,
      beritahu_dokter_pemeriksaan_fisik: this.tell_doctor_physical_examination,
      beritahu_dokter_pemeriksaan_fisik_pukul: this.notify_doctor_physical_examination_at,
      total_skor: this.total_score,
      hasil_total_skor: this.result_total_score,
      cara_berjalan: this.how_to_walk,
      memegang_penopang: this.holding_support,
      "hasil-value": this.result_value,
      "hasil-teks": this.result_text,
      beritahu_dokter_risiko_cedera: this.tell_doctor_risk_injury,
      beritahu_dokter_risiko_cedera_pukul: this.tell_doctor_risk_injury_punch,
      jenis_operasi_dialami: this.type_operation_experienced,
      waktu_operasi: this.operating_time,
      komplikasi: this.complications,
      riwayat_penyakit_keluarga: this.history_disease_family,
      mempunyai_ketergantungan: this.have_dependency,
      ketergantungan_terhadap: this.dependence_on,
      ketergantungan_terhadap_keterangan: this.dependence_on_description,
      ketergantungan_terhadap_penjelasan: this.dependence_on_explanation,
      riwayat_alergi: this.allergy_history,
      riwayat_alergi_keterangan: this.history_allergy_description,
      nutrisi_turun_bb: this.nutrition_down_bb,
      asupan_makan: this.food_intake,
      diagnosa_khusus: this.diagnostic_special,
      jenis_penyakit: this.types_of_diseases,
      jenis_penyakit_keterangan: this.type_disease_description,
      skor_nutrisi: this.nutrition_score,
      status_fungsional: this.status_functional,
      status_fungsional_keterangan: this.status_functional_description,
      status_fungsional_diberitahukan_pukul: this.status_functional_notified_at,
      bicara: this.talk,
      bicara_text: this.talk_text,
      perlu_penerjemah: this.need_translator,
      perlu_penerjemah_text: this.need_translator_text,
      bahasa_isyarat: this.sign_language,
      hambatan_belajar: this.barrier_learning,
      hambatan_belajar_text: this.barriers_learning_text,
      tingkat_pendidikan: this.level_of_education,
      tingkat_pendidikan_text: this.level_education_text,
      status_ekonomi: this.economic_status,
      status_ekonomi_text: this.status_economy_text,
      status_sosial: this.social_status,
      status_psikologi: this.status_psychology,
      status_psikologi_text: this.status_psychology_text,
      status_mental: this.mental_state,
      status_mental_text: this.status_mental_text,
      hubungan_pasien_keluarga: this.relationship_patient_family,
      agama: this.religion,
      tabel_gangguan: this.disturbance_table,
      tabel_nyeri: this.table_pain,
      tabel_infeksi: this.table_infection,
      tabel_jatuh: this.table_fall,
      tabel_tio: this.tabel_tio,
      tabel_kurang_pengetahuan: this.table_less_knowledge,
      tabel_lainnya: this.other_table,
      tabel_masalah_lainnya: this.table_other_problems,
      tabel_rencana_lainnya: this.other_plan_table,
      "ttd-perawat-pengkajian-masuk": this.signed_nurse_study_in,
      "id-perawat-pengkajian-masuk": this.id_nurse_study_login,
      tabel_wajah: this.face_table,
      tabel_kaki: this.foot_table,
      tabel_aktivitas: this.activity_table,
      tabel_menangis: this.crying_table,
      tabel_kenyamanan: this.convenience_table,
      emr_id: this.emr_id,
      nomor_mr: this.nomor_mr,
      id_pelayanan: this.id_pelayanan,
      kode_cabang: this.kode_cabang,
      tipe_pasien: this.tipe_pasien,
      jenis_pelayanan: this.jenis_pelayanan,
      id_dokter: this.id_dokter,
      no_sep: this.no_sep,
      tanggal_waktu: this.tanggal_waktu,
    }
  }

  static createFromJson(json: IUpdateNursingInitialAssessmentRequest) {
    return new UpdateNursingInitialAssessmentRequest(json);
  }
}