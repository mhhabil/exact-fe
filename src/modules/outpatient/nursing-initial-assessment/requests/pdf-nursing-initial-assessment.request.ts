import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfNursingInitialAssessmentRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,

    date: string,
    time: string,
    complaint: string,
    person_in_charge_name: string,
    responsible_relationship: string,
    td: string,
    temperature: string,
    p: string,
    pulse: string,
    bb: string,
    tb: string,
    pain_location: string,
    frequency_pain: string,
    pain_missing_other_text: string,
    notify_time: string,
    ttl: string,
    nyeri: string,
    total_hasil: string,
    tell_doctor_risk_injury_punch: string,
    type_operation_experienced: string,
    operating_time: string,
    complications: string,
    history_disease_family: string,
    ketergantungan_terhadap_keterangan: string,
    dependence_on_explanation: string,
    history_allergy_description: string,
    type_disease_description: string,
    status_functional_description: string,
    status_functional_notified_at: string,
    talk_text: string,
    need_translator_text: string,
    barriers_learning_text: string,
    level_education_text: string,
    status_economy_text: string,
    status_psychology_text: string,
    status_mental_text: string,
    religion: string,
    'form.Nama_Perawat_pengkaji': string,
    table_other_problems: string,
    other_plan_table: string,

    signature_person_1: string,
    signature_person_2: string,
    awareness_1: string,
    awareness_2: string,
    awareness_3: string,
    awareness_4: string,
    awareness_5: string,
    painful_1: string,
    painful_0: string,
    pain_status_0: string,
    pain_scale_0: string,
    pain_scale_1: string,
    pain_scale_2: string,
    pain_scale_3: string,
    pain_scale_4: string,
    pain_scale_5: string,
    pain_scale_6: string,
    pain_scale_7: string,
    pain_scale_8: string,
    pain_scale_9: string,
    pain_scale_10: string,
    pain_screening_1: string,
    pain_screening_2: string,
    pain_screening_3: string,
    pain_lost_1: string,
    pain_lost_2: string,
    pain_lost_3: string,
    pain_lost_4: string,
    pain_lost_5: string,
    tell_doctor_physical_examination_2: string,
    tell_doctor_physical_examination_1: string,
    pain_status_1: string,
    face_table_1: string,
    face_table_2: string,
    face_table_3: string,
    foot_table_1: string,
    foot_table_2: string,
    activity_table_1: string,
    activity_table_2: string,
    activity_table_3: string,
    crying_table_1: string,
    crying_table_2: string,
    crying_table_3: string,
    convenience_table_1: string,
    convenience_table_2: string,
    convenience_table_3: string,
    how_to_walk_1: string,
    how_to_walk_0: string,
    holding_support_1: string,
    holding_support_0: string,
    tell_doctor_risk_injury_1: string,
    have_dependency_0: string,
    have_dependency_1: string,
    dependence_on_1: string,
    ketergantungan_terhadap_2: string,
    ketergantungan_terhadap_3: string,
    ketergantungan_terhadap_4: string,
    allergy_history_13: string,
    kketergantungan_terhadap_3: string,
    nutrition_down_bb_1: string,
    nutrition_down_bb_2: string,
    nutrition_down_bb_3: string,
    nutrition_down_bb_4: string,
    nutrition_down_bb_5: string,
    nutrition_down_bb_6: string,
    nutrition_down_bb_7: string,
    food_intake_1: string,
    food_intake_0: string,
    diagnostic_special_1: string,
    diagnostic_special_0: string,
    types_of_diseases_1: string,
    types_of_diseases_2: string,
    types_of_diseases_3: string,
    types_of_diseases_4: string,
    types_of_diseases_5: string,
    types_of_diseases_6: string,
    types_of_diseases_7: string,
    types_of_diseases_8: string,
    types_of_diseases_9: string,
    status_functional_1: string,
    status_functional_2: string,
    status_functional_3: string,
    talk_1: string,
    talk_0: string,
    need_translator_1: string,
    need_translator_0: string,
    sign_language_1: string,
    sign_language: string,
    barrier_learning_1: string,
    barrier_learning_0: string,
    level_of_education_1: string,
    level_of_education_2: string,
    level_of_education_3: string,
    level_of_education_4: string,
    level_of_education_5: string,
    level_of_education_6: string,
    level_of_education_7: string,
    economic_status_1: string,
    economic_status_2: string,
    economic_status_3: string,
    economic_status_4: string,
    status_psychology_1: string,
    status_psychology_2: string,
    status_psychology_3: string,
    status_psychology_4: string,
    status_psychology_5: string,
    status_psychology_6: string,
    mental_state_1: string,
    mental_state_2: string,
    mental_state_3: string,
    relationship_patient_family_1: string,
    relationship_patient_family_2: string,
    disturbance_table_1: string,
    table_pain: string,
    table_infection: string,
    table_fall: string,
    tabel_tio: string,
    table_less_knowledge: string,
    other_table: string,
    Tanda_Tangan_Perawat_pengkaji: string,
    pain_duration: string,
    tell_doctor_risk_injury_0: string,
    nik: string,
  }
}

export class PdfNursingInitialAssessmentRequest extends CreatePDFRequest {
  data: any;

  constructor(req: IPdfNursingInitialAssessmentRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfNursingInitialAssessmentRequest) {
    return new PdfNursingInitialAssessmentRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfNursingInitialAssessmentRequest {
    const totalNyeri = +(val?.form?.Tabel_Wajah ?? 0) + +(val?.form?.Tabel_Kaki ?? 0) + +(val?.form?.Tabel_Aktifitas ?? 0) + +(val?.form?.Tabel_Menangis ?? 0) + +(val?.form?.Tabel_Kenyamanan ?? 0);
    let deskripsiNyeri = '';
    if (totalNyeri === 0) {
      deskripsiNyeri = 'Tidak Nyeri';
    } else if (totalNyeri >= 1 && totalNyeri <= 3) {
      deskripsiNyeri = 'Nyeri Ringan';
    } else if (totalNyeri >= 4 && totalNyeri <= 6) {
      deskripsiNyeri = 'Nyeri Sedang';
    } else {
      deskripsiNyeri = 'Nyeri Berat';
    }

    return new PdfNursingInitialAssessmentRequest({
      emr_id: emrId,
      form_name: 'rawat-jalan_pengkajian-awal-keperawatan_v3',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),

        // date: val?.form?.Waktu_Operasi ?? '',
        date: DateTimeConverter.convertToNormalDate(val?.form?.Tanggal_Waktu && val?.form?.Tanggal_Waktu !== '' ? val?.form?.Tanggal_Waktu.substring(0, 10) : ''),
        time: val?.form?.Tanggal_Waktu && val?.form?.Tanggal_Waktu !== '' ? val?.form?.Tanggal_Waktu.substring(11, 16) : '',
        complaint: val?.form?.Keluhan_Utama ?? '',
        person_in_charge_name: val?.form?.Penanggung_Jawab_Nama ?? '',
        responsible_relationship: val?.form?.Penanggung_Jawab ?? '',
        td: val?.form?.Td ?? '',
        temperature: val?.form?.Suhu ?? '',
        p: val?.form?.P,
        pulse: val?.form?.Nadi ?? '',
        bb: val?.form?.Bb ?? '',
        tb: val?.form?.Tb ?? '',
        pain_location: val?.form?.Lokasi_Nyeri ?? '',
        frequency_pain: val?.form?.Frekwensi_Nyeri ?? '',
        pain_missing_other_text: val?.form?.Nyeri_Hilang_Lain_Text ?? '',
        notify_time: DateTimeConverter.convertToDateTime(val?.form?.Beritahu_Dokter_Pemeriksaan_Fisik_Pukul),
        ttl: `${totalNyeri}`,
        nyeri: `${deskripsiNyeri}`,
        total_hasil: val?.form?.Keterangan_Risiko_Jatuh ?? '',
        // tell_doctor_risk_injury_punch: val?.form?.Beritahu_Dokter_Risiko_Cedera_Waktu ?? '',
        tell_doctor_risk_injury_punch: val?.form?.Beritahu_Dokter_Risiko_Cedera_Pukul && val?.form?.Beritahu_Dokter_Risiko_Cedera_Pukul !== '' ? val?.form?.Beritahu_Dokter_Risiko_Cedera_Pukul.substring(11, 16) : '',
        type_operation_experienced: val?.form?.Jenis_Operasi_Dialami,
        operating_time: DateTimeConverter.convertToDateTime(val?.form?.Waktu_Operasi),
        complications: val?.form?.Komplikasi ?? '',
        history_disease_family: val?.form?.Riwayat_Penyakit_Keluarga ?? '',
        ketergantungan_terhadap_keterangan: val?.form?.Ketergantungan_Terhadap_Keterangan ?? '',
        dependence_on_explanation: val?.form?.Ketergantungan_Terhadap_Penjelasan ?? '',
        history_allergy_description: val?.form?.Riwayat_Alergi_Keterangan ?? '',
        type_disease_description: val?.form?.Jenis_Penyakit_Lain_Keterangan ?? '',
        status_functional_description: val?.form?.Status_Fungsional_Keterangan ?? '',
        status_functional_notified_at: val?.form?.Status_Fungsional_Diberitahukan_Pukul ?? '',
        talk_text: val?.form?.Bicara_Text ?? '',
        need_translator_text: val?.form?.Perlu_Penerjemah_Text ?? '',
        barriers_learning_text: val?.form?.Hambatan_Belajar_Text ?? '',
        level_education_text: val?.form?.Tingkatan_Pendidikan_Text ?? '',
        status_economy_text: val?.form?.Status_Ekonomi_Text ?? '',
        status_psychology_text: val?.form?.Status_Psikologi_Text ?? '',
        status_mental_text: val?.form?.Status_Mental_Text ?? '',
        religion: val?.form?.Agama_Id ?? '',
        'form.Nama_Perawat_pengkaji': val?.form?.Nama_Perawat_Pengkajian_Masuk ?? '',
        table_other_problems: val?.form?.Tabel_Masalah_Lainnya ?? '',
        other_plan_table: val?.form?.Tabel_Rencana_Lainnya ?? '',

        signature_person_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Penanggung_Jawab !== 'Wali'),
        signature_person_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Penanggung_Jawab === 'Wali'),
        awareness_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Kesadaran === '1'),
        awareness_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Kesadaran === '2'),
        awareness_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Kesadaran === '3'),
        awareness_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Kesadaran === '4'),
        awareness_5: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Kesadaran === '5'),
        painful_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nyeri === '1'),
        painful_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nyeri === '0'),
        pain_status_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Nyeri === '0'),
        pain_status_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Nyeri === '1'),
        pain_scale_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '0'),
        pain_scale_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '1'),
        pain_scale_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '2'),
        pain_scale_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '3'),
        pain_scale_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '4'),
        pain_scale_5: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '5'),
        pain_scale_6: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '6'),
        pain_scale_7: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '7'),
        pain_scale_8: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '8'),
        pain_scale_9: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '9'),
        pain_scale_10: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skala_Nyeri === '10'),
        pain_screening_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skrining_Nyeri === '1'),
        pain_screening_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skrining_Nyeri === '2'),
        pain_screening_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Skrining_Nyeri === '3'),
        pain_lost_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nyeri_Hilang === '1'),
        pain_lost_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nyeri_Hilang === '2'),
        pain_lost_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nyeri_Hilang === '3'),
        pain_lost_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nyeri_Hilang === '4'),
        pain_lost_5: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nyeri_Hilang === '5'),
        tell_doctor_physical_examination_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Beritahu_Dokter_Pemeriksaan_Fisik === '1'),
        tell_doctor_physical_examination_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Beritahu_Dokter_Pemeriksaan_Fisik !== '1'),
        face_table_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Wajah === '1'),
        face_table_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Wajah === '2'),
        face_table_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Wajah === '3'),
        foot_table_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Kaki === '1'),
        foot_table_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Kaki === '2'),
        activity_table_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Aktifitas === '1'),
        activity_table_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Aktifitas === '2'),
        activity_table_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Aktifitas === '3'),
        crying_table_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Menangis === '1'),
        crying_table_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Menangis === '2'),
        crying_table_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Menangis === '3'),
        convenience_table_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Kenyamanan === '1'),
        convenience_table_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Kenyamanan === '2'),
        convenience_table_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Kenyamanan === '3'),
        how_to_walk_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Cara_Berjalan === '1'),
        how_to_walk_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Cara_Berjalan === '0'),
        holding_support_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Memegang_Penopang === '1'),
        holding_support_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Memegang_Penopang === '0'),
        tell_doctor_risk_injury_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Beritahu_Dokter_Risiko_Cedera === '0'),
        tell_doctor_risk_injury_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Beritahu_Dokter_Risiko_Cedera === '1'),
        have_dependency_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Mempunyai_Ketergantungan === '0'),
        have_dependency_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Mempunyai_Ketergantungan === '1'),
        dependence_on_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Ketergantungan_Terhadap?.Obat_obatan === 1),
        ketergantungan_terhadap_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Ketergantungan_Terhadap?.Rokok === 1),
        ketergantungan_terhadap_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Ketergantungan_Terhadap?.Alkohol === 1),
        ketergantungan_terhadap_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Ketergantungan_Terhadap?.Lain_lain === 1),
        allergy_history_13: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Riwayat_Alergi === '1'),
        kketergantungan_terhadap_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Riwayat_Alergi === '0'),
        nutrition_down_bb_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nutrisi_Turun_Bb === '1'),
        nutrition_down_bb_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nutrisi_Turun_Bb === '2'),
        nutrition_down_bb_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nutrisi_Turun_Bb === '3'),
        nutrition_down_bb_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nutrisi_Turun_Bb === '4'),
        nutrition_down_bb_5: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nutrisi_Turun_Bb === '5'),
        nutrition_down_bb_6: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nutrisi_Turun_Bb === '6'),
        nutrition_down_bb_7: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Nutrisi_Turun_Bb === '7'),
        food_intake_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Asupan_Makan === '1'),
        food_intake_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Asupan_Makan === '0'),
        diagnostic_special_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Diagnosa_Khusus === '1'),
        diagnostic_special_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Diagnosa_Khusus === '0'),
        types_of_diseases_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Dm === 1),
        types_of_diseases_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Ginjal === 1),
        types_of_diseases_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Hati === 1),
        types_of_diseases_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Jantung === 1),
        types_of_diseases_5: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Paru === 1),
        types_of_diseases_6: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Stroke === 1),
        types_of_diseases_7: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Kanker === 1),
        types_of_diseases_8: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Penurunan_Imunitas_Geriatri === 1),
        types_of_diseases_9: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Jenis_Penyakit?.Lain_lain === 1),
        status_functional_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Fungsional === '1'),
        status_functional_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Fungsional === '2'),
        status_functional_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Fungsional === '3'),
        talk_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Bicara === '1'),
        talk_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Bicara === '0'),
        need_translator_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Perlu_Penerjemah === '1'),
        need_translator_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Perlu_Penerjemah === '0'),
        sign_language_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Bahasa_Isyarat === '1'),
        sign_language: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Bahasa_Isyarat === '0'),
        barrier_learning_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Hambatan_Belajar === '1'),
        barrier_learning_0: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Hambatan_Belajar === '0'),
        level_of_education_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tingkatan_Pendidikan === '1'),
        level_of_education_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tingkatan_Pendidikan === '2'),
        level_of_education_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tingkatan_Pendidikan === '3'),
        level_of_education_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tingkatan_Pendidikan === '4'),
        level_of_education_5: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tingkatan_Pendidikan === '5'),
        level_of_education_6: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tingkatan_Pendidikan === '6'),
        level_of_education_7: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tingkatan_Pendidikan === '7'),
        economic_status_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Ekonomi === '1'),
        economic_status_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Ekonomi === '2'),
        economic_status_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Ekonomi === '3'),
        economic_status_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Ekonomi === '4'),
        status_psychology_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Psikologi === '1'),
        status_psychology_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Psikologi === '2'),
        status_psychology_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Psikologi === '3'),
        status_psychology_4: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Psikologi === '4'),
        status_psychology_5: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Psikologi === '5'),
        status_psychology_6: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Psikologi === '6'),
        mental_state_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Mental === '1'),
        mental_state_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Mental === '2'),
        mental_state_3: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Status_Mental === '3'),
        relationship_patient_family_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Hubungan_Pasien_Keluarga === '1'),
        relationship_patient_family_2: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Hubungan_Pasien_Keluarga === '2'),
        disturbance_table_1: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Gangguan === 1),
        table_pain: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Nyeri === 1),
        table_infection: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Infeksi === 1),
        table_fall: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Jatuh === 1),
        tabel_tio: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Tio === 1),
        table_less_knowledge: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Kurang_Pengetahuan === 1),
        other_table: PdfNursingInitialAssessmentRequest.getCheckImage(val?.form?.Tabel_Lainnya === 1),
        Tanda_Tangan_Perawat_pengkaji: val?.form?.TTD_Perawat_Pengkajian_Masuk ?? undefined,
        pain_duration: val?.form?.Durasi_Nyeri ?? '',
        nik:  val?.pasien?.NIK ?? '',
      },
    })
  }
}
