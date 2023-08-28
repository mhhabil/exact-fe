import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { IOperativeFairyNursingNotesModel } from '../models';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfOperativeFairyNursingNotesRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    'form.Nama_Perawat_Instrument': string,
    'form.Nama_Perawat_Sirkuler': string,
    'time-out-time': string,
    'availability-instrument-time': string,
    'availability-prothesis-time': number,
    'start-time': string,
    'finished-time': string,
    operation_jenis: string,
    kadaluarsa: string,
    jenis_18: string,
    jenis_19: string,
    'other-awareness-level-text': string,
    other_awareness_level_text: string,
    id_position_operating_supervised: string,
    position_operation_other_text: string,
    other_arm_position_text: string,
    position_other_text_tools: string,
    other_skin_prep_text: string,
    other_electrode_location_text: string,
    condition_before_other_text: string,
    condition_after_other_text: string,
    code_electrosurgical_unit: string,
    heater_setting_temperature: string,
    'heater-start-time': string,
    'heater-code-unit': string,
    'heater-finished-time': string,
    cooler_setting_temperature: string,
    'cooler-start-time': string,
    cooler_code_unit: string,
    'cooler-finished-time': string,
    'laser-code-model': string,
    'laser-power': string,
    'laser-duration': string,
    'laser-interval': string,
    'laser-date': string,
    'id-laser-supervised-1': string,
    'id-laser-supervised-2': string,
    'id-laser-supervised-3': string,
    'implant-factory': string,
    'implant-type': string,
    'implant-size': string,
    'implant-seri': string,
    'irrigation-wound-other-text': string,
    use_liquid_water_text: string,
    'use-liquid-sodium-text': string,
    'use-other-liquid-text': string,
    'use-fluid-histology-text': string,
    'use-fluid-culture-text': string,
    'use-fluid-cytology-text': string,
    'specimen-liquid-examination': string,
    'specimen-type-tissue': string,
    'specimen-number-tissue': string,
    'specimen-description': string,
    'lain-lain': string,
    date: string,
    time: string,

    time_out_0: string,
    time_out_1: string,
    instrument_availability_1: string,
    instrument_availability: string,
    availability_prothesis_1: string,
    availability_prothesis: string,
    'operation-type-1': string,
    operation_type_0: string,
    operation_type_2: string,
    anesthetic_type_1: string,
    anesthetic_type_2: string,
    'anesthetic-type-4': string,
    'anesthetic-type-3': string,
    'level-consciousness-1': string,
    'level-consciousness-2': string,
    'level-consciousness-3': string,
    'state-emotion-1': string,
    'state-emotion-2': string,
    'state-emotion-3': string,
    'cannula-position-1': string,
    'cannula-position-2': string,
    'cannula-position-3': string,
    'cannula-position-4': string,
    'cannula-position-5': string,
    'cannula-position-6': string,
    'cannula-position-7': string,
    'cannula-position-8': string,
    'operating-position-1': string,
    'operating-position-2': string,
    'operating-position-3': string,
    'operating-position-4': string,
    'operating-position-5': string,
    'arm-position-1': string,
    'arm-position-2': string,
    'arm-position-3': string,
    'arm-position-4': string,
    'arm-position-5': string,
    'position-tool-1': string,
    'position-tool-2': string,
    'catheter_urine-1': string,
    'catheter_urine-2': string,
    'catheter_urine-3': string,
    'skin-prep-1': string,
    'skin-prep-2': string,
    'skin-prep-3': string,
    'skin-prep-4': string,
    'skin-prep-5': string,
    'discharging-diathermy-1': string,
    'discharging-diathermy-2': string,
    'discharging-diathermy-3': string,
    'location-electrode-1': string,
    'location-electrode-2': string,
    'location-electrode-3': string,
    'location-electrode-4': string,
    'location-electrode-5': string,
    'condition-before-1': string,
    'condition-before-2': string,
    'condition-before-3': string,
    'after-condition-1': string,
    'after-condition-2': string,
    'after-condition-3': string,
    'heating-unit-0': string,
    'heating-unit-1': string,
    'unit-cooling-0': string,
    'unit-cooling-1': string,
    'laser-use-0': string,
    'laser-use-1': string,
    'use-implant-0': string,
    'use-implant-1': string,
    'irrigation-wound-1': string,
    'irrigation-wound-2': string,
    'irrigation-wound-3': string,
    'irrigation-wound-4': string,
    'irrigation-wound-5': string,
    'irrigation-wound-6': string,
    'discharging-fluid-1': string,
    'discharging-fluid-2': string,
    'discharging-fluid-3': string,
    'discharging-fluid-4': string,
    'discharging-fluid-5': string,
    'discharging-fluid-6': string,
    'balutan-cairan-1': string,
    'balutan-cairan-2': string,
    'balutan-cairan-3': string,
    'spesimen-cairan-1': string,
    'spesimen-cairan-2': string,
    'spesimen-cairan-3': string,
    'spesimen-cairan-4': string,
    'spesimen-cairan-5': string,

    Tanda_Tangan_Perawat_instrumen: string,
    Tanda_Tangan_Perawat_Sirkuler: string,
    'stiker-lensa': string,

    diagnosa_gangguan_pola_nafas_1: string;
    diagnosa_gangguan_pola_nafas_2: string;
    intervensi_gangguan_pola_nafas_1: string;
    intervensi_gangguan_pola_nafas_2: string;
    intervensi_gangguan_pola_nafas_3: string;
    intervensi_gangguan_pola_nafas_4: string;
    intervensi_gangguan_pola_nafas_5: string;
    intervensi_gangguan_pola_nafas_6: string;
    intervensi_gangguan_pola_nafas_7: string;
    evaluasi_gangguan_pola_nafas_1: string;
    evaluasi_gangguan_pola_nafas_2: string;
    evaluasi_gangguan_pola_nafas_3: string;
    evaluasi_gangguan_pola_nafas_4: string;
    '02_gangguan_pola_nafas': string;
    evaluasi_gangguan_pola_nafas_5: string;
    Tanda_Tangan_Perawat_Gangguan_Pola_Nafas: string;
    nama_perawat_gangguan_pola_nafas: string;
    date_gangguan_pola_nafas: string;

    diagnosa_resiko_kekurangan_cairan_1: string;
    diagnosa_resiko_kekurangan_cairan_2: string;
    diagnosa_resiko_kekurangan_cairan_3: string;
    diagnosa_resiko_kekurangan_cairan_4: string;
    intervensi_resiko_kekurangan_cairan_1: string;
    intervensi_resiko_kekurangan_cairan_2: string;
    intervensi_resiko_kekurangan_cairan_3: string;
    intervensi_resiko_kekurangan_cairan_4: string;
    intervensi_resiko_kekurangan_cairan_5: string;
    evaluasi_resiko_kekurangan_cairan_1: string;
    evaluasi_resiko_kekurangan_cairan_2: string;
    input_resiko_kekurangan_cairan: string;
    evaluasi_resiko_kekurangan_cairan_3: string;
    output_resiko_kekurangan_cairan: string;
    evaluasi_resiko_kekurangan_cairan_4: string;
    evaluasi_resiko_kekurangan_cairan_5: string;
    Tanda_Tangan_Perawat_Resiko_Kekurangan_Cairan: string;
    nama_perawat_resiko_kekurangan_cairan: string;
    date_resiko_kekurangan_cairan: string;

    diagnosa_resiko_cidera_1: string;
    diagnosa_resiko_cidera_2: string;
    intervensi_resiko_cidera_1: string;
    intervensi_resiko_cidera_2: string;
    intervensi_resiko_cidera_3: string;
    intervensi_resiko_cidera_4: string;
    intervensi_resiko_cidera_5: string;
    intervensi_resiko_cidera_6: string;
    intervensi_resiko_cidera_7: string;
    intervensi_resiko_cidera_8: string;
    intervensi_resiko_cidera_9: string;
    evaluasi_resiko_cidera_1: string;
    evaluasi_resiko_cidera_2: string;
    evaluasi_resiko_cidera_3: string;
    Tanda_Tangan_Perawat_Resiko_Cidera: string;
    nama_perawat_resiko_cidera: string;
    date_resiko_cidera: string;

    diagnosa_resiko_infeksi_1: string;
    diagnosa_resiko_infeksi_2: string;
    diagnosa_resiko_infeksi_3: string;
    intervensi_resiko_infeksi_1: string;
    intervensi_resiko_infeksi_2: string;
    intervensi_resiko_infeksi_3: string;
    intervensi_resiko_infeksi_4: string;
    intervensi_resiko_infeksi_5: string;
    evaluasi_resiko_infeksi_1: string;
    Tanda_Tangan_Perawat_Resiko_Infeksi: string;
    nama_perawat_resiko_infeksi: string;
    date_resiko_infeksi: string;

    diagnosa_gangguan_rasa_nyaman_1: string;
    diagnosa_gangguan_rasa_nyaman_2: string;
    intervensi_gangguan_rasa_nyaman_1: string;
    intervensi_gangguan_rasa_nyaman_2: string;
    intervensi_gangguan_rasa_nyaman_3: string;
    intervensi_gangguan_rasa_nyaman_4: string;
    intervensi_gangguan_rasa_nyaman_5: string;
    evaluasi_gangguan_rasa_nyaman_1: string;
    evaluasi_gangguan_rasa_nyaman_2: string;
    Tanda_Tangan_Perawat_Rasa_Nyaman: string;
    nama_perawat_gangguan_rasa_nyaman: string;
    date_gangguan_rasa_nyaman: string;

    diagnosa_gangguan_sensori_1: string;
    diagnosa_gangguan_sensori_2: string;
    intervensi_gangguan_sensori_1: string;
    intervensi_gangguan_sensori_2: string;
    intervensi_gangguan_sensori_3: string;
    intervensi_gangguan_sensori_4: string;
    intervensi_gangguan_sensori_5: string;
    evaluasi_gangguan_sensori_1: string;
    evaluasi_gangguan_sensori_2: string;
    Tanda_Tangan_Perawat_Gangguan_Sensori: string;
    nama_perawat_gangguan_sensori: string;
    date_gangguan_sensori: string;
    diagnosa_kecemasan_intraoperatif_1: string;
    diagnosa_kecemasan_intraoperatif_2: string;
    intervensi_kecemasan_intraoperatif_1: string;
    intervensi_kecemasan_intraoperatif_2: string;
    intervensi_kecemasan_intraoperatif_3: string;
    intervensi_kecemasan_intraoperatif_4: string;
    intervensi_kecemasan_intraoperatif_5: string;
    evaluasi_kecemasan_intraoperatif_1: string;
    evaluasi_kecemasan_intraoperatif_2: string;
    Tanda_Tangan_Perawat_Kecemasan_Intraoperatif: string;
    nama_perawat_kecemasan_intraoperatif: string;
    date_kecemasan_intraoperatif: string;

    //Section 2
    rawat_pasca_op_ruang_pemulihan: string,
    rawat_pasca_op_ruang_tunggu: string,
    transport_jalan_kaki: string,
    transport_strecher: string,
    transport_kursi_roda: string,
    time_catatan_pasca_op: string,
    ku_memuaskan: string,
    ku_jelek: string,
    tingkat_kesadaran_terjaga: string,
    tingkat_kesadaran_mudah_dibangunkan: string,
    tingkat_kesadaran_tidak_berespon: string,
    jalan_napas_tidak_ada_masalah: string,
    pernapasan_spontan: string,
    pernapasan_dibantu: string,
    terapi_oksigen_tidak: string,
    terapi_oksigen_02_nasal: string,
    terapi_oksigen_02_lainya: string,
    terapi_oksigen_lainya: string;
    kulit_datang_kering: string,
    kulit_datang_merah_muda: string,
    kulit_datang_hangat_dingin: string,
    kulit_datang_lainya: string,
    kulit_datang_lain_lain: string,
    kulit_keluar_kering: string,
    kulit_keluar_merah_muda: string,
    kulit_keluar_hangat_dingin: string,
    kulit_keluar_lainya: string,
    kulit_keluar_lain_lain: string,
    sirkulasi_merah_muda: string,
    sirkulasi_kebiru_biruan: string,
    posisi_pasien_lateral: string,
    posisi_pasien_tersanggah: string,
    posisi_pasien_lainya: string,
    posisi_pasien_lainya_teks: string,
    isSkorAldrette: boolean,
    aldrette_aktivitas_1: string,
    aldrette_aktivitas_2: string,
    aldrette_aktivitas_3: string,
    aldrette_pernapasan_1: string,
    aldrette_pernapasan_2: string,
    aldrette_pernapasan_3: string,
    aldrette_sirkulasi_1: string,
    aldrette_sirkulasi_2: string,
    aldrette_sirkulasi_3: string,
    aldrette_kesadaran_1: string,
    aldrette_kesadaran_2: string,
    aldrette_kesadaran_3: string,
    aldrette_saturasi02_1: string,
    aldrette_saturasi02_2: string,
    aldrette_saturasi02_3: string,
    isSkorSteward: boolean,
    steward_pergerakan_1: string,
    steward_pergerakan_2: string,
    steward_pergerakan_3: string,
    steward_pernafasan_1: string,
    steward_pernafasan_2: string,
    steward_pernafasan_3: string,
    steward_kesadaran_1: string,
    steward_kesadaran_2: string,
    steward_kesadaran_3: string,
    grafik_ttv: string,
    nadi_teratur_waktu_masuk: string,
    nadi_teratur_waktu_keluar: string,
    nadi_tidak_teratur_waktu_masuk: string,
    nadi_tidak_teratur_waktu_keluar: string,
    nadi_lemah_waktu_masuk: string,
    nadi_lemah_waktu_keluar: string,
    nadi_kuat_waktu_masuk: string,
    nadi_kuat_waktu_keluar: string,
    napas_teratur_waktu_masuk: string,
    napas_teratur_waktu_keluar: string,
    napas_tidak_teratur_waktu_masuk: string,
    napas_tidak_teratur_waktu_keluar: string,
    napas_dangkal_waktu_masuk: string,
    napas_dangkal_waktu_keluar: string,
    napas_dalam_waktu_masuk: string,
    napas_dalam_waktu_keluar: string,
    napas_sukar_waktu_masuk: string,
    napas_sukar_waktu_keluar: string,
    napas_terapi02_waktu_masuk: string,
    napas_terapi02_waktu_keluar: string,
    napas_sp02_waktu_masuk: string,
    napas_sp02_waktu_keluar: string,
    masalah_aktual:  any,
    output_urine_jam1: string,
    output_urine_jam2: string,
    output_urine_jam3: string,
    output_urine_jam4: string,
    total_output: string,
    jam_pemberitahuan_perawat_ruangan: string,
    jam_perawat_ruangan_datang: string,
    nama_perawat_ruangan: string,
    date_keperawatan_pasca_operasi: string,
    Tanda_Tangan_Keperawatan_Pasca_Operasi: string,
    nama_tanda_tangan_keperawatan_pasca_operasi: string,

    //D. Diagnosa
    diag_rasa_nyaman_1: string;
    diag_rasa_nyaman_2: string;
    intervensi_rasa_nyaman_1: string;
    intervensi_rasa_nyaman_2: string;
    intervensi_rasa_nyaman_3: string;
    intervensi_rasa_nyaman_4: string;
    intervensi_rasa_nyaman_5: string;
    intervensi_rasa_nyaman_6: string;
    evaluasi_rasa_nyaman_1: string;
    evaluasi_rasa_nyaman_2: string;
    evaluasi_rasa_nyaman_3: string;
    evaluasi_rasa_nyaman_4: string;
    ttd_perawat_gangguan_rasa_nyaman: string;
    nama_perawat_gangguan_rasa_nyaman_pasca: string;
    date_gangguan_rasa_nyaman_pasca: string;

    diag_resiko_infeksi_1: string;
    diag_resiko_infeksi_2: string;
    diag_resiko_infeksi_3: string;
    inter_resiko_infeksi_1: string;
    inter_resiko_infeksi_2: string;
    inter_resiko_infeksi_3: string;
    inter_resiko_infeksi_4: string;
    inter_resiko_infeksi_5: string;
    eval_resiko_infeksi_1: string;
    tanda_tangan_perawat_resiko_infeksi: string;
    nama_perawat_resiko_infeksi_pasca: string;
    date_resiko_infeksi_pasca: string;

    diag_suhu_tubuh_1: string;
    diag_suhu_tubuh_2: string;
    diag_suhu_tubuh_3: string;
    intervensi_suhu_tubuh_1: string;
    intervensi_suhu_tubuh_2: string;
    intervensi_suhu_tubuh_3: string;
    evaluasi_suhu_tubuh_1: string;
    evaluasi_suhu_tubuh_2: string;
    evaluasi_suhu_tubuh_3: string;
    perubahan_suhu_pasien: string;
    ttd_perawat_perubahan_suhu: string;
    nama_perawat_perubahan_suhu_pasca: string;
    date_resiko_perubahan_suhu_pasca: string;
    diag_kecemasan_1: string;
    intervensi_kecemasan_1: string;
    intervensi_kecemasan_2: string;
    intervensi_kecemasan_3: string;
    intervensi_kecemasan_4: string;
    intervensi_kecemasan_5: string;
    intervensi_kecemasan_6: string;
    intervensi_kecemasan_7: string;
    evaluasi_kecemasan_1: string;
    evaluasi_kecemasan_2: string;
    ttd_perawat_kecemasan_pascaoperatif: string;
    nama_perawat_kecemasan_pascaoperatif: string;
    date_kecemasan_pascaoperatif: string;
    nik: string;
  }
}

export class PdfOperativeFairyNursingNotesRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    'form.Nama_Perawat_Instrument': string,
    'form.Nama_Perawat_Sirkuler': string,
    'time-out-time': string,
    'availability-instrument-time': string,
    'availability-prothesis-time': number,
    'start-time': string,
    'finished-time': string,
    operation_jenis: string,
    kadaluarsa: string,
    jenis_18: string,
    jenis_19: string,
    'other-awareness-level-text': string,
    other_awareness_level_text: string,
    id_position_operating_supervised: string,
    position_operation_other_text: string,
    other_arm_position_text: string,
    position_other_text_tools: string,
    other_skin_prep_text: string,
    other_electrode_location_text: string,
    condition_before_other_text: string,
    condition_after_other_text: string,
    code_electrosurgical_unit: string,
    heater_setting_temperature: string,
    'heater-start-time': string,
    'heater-code-unit': string,
    'heater-finished-time': string,
    cooler_setting_temperature: string,
    'cooler-start-time': string,
    cooler_code_unit: string,
    'cooler-finished-time': string,
    'laser-code-model': string,
    'laser-power': string,
    'laser-duration': string,
    'laser-interval': string,
    'laser-date': string,
    'id-laser-supervised-1': string,
    'id-laser-supervised-2': string,
    'id-laser-supervised-3': string,
    'implant-factory': string,
    'implant-type': string,
    'implant-size': string,
    'implant-seri': string,
    'irrigation-wound-other-text': string,
    use_liquid_water_text: string,
    'use-liquid-sodium-text': string,
    'use-other-liquid-text': string,
    'use-fluid-histology-text': string,
    'use-fluid-culture-text': string,
    'use-fluid-cytology-text': string,
    'specimen-liquid-examination': string,
    'specimen-type-tissue': string,
    'specimen-number-tissue': string,
    'specimen-description': string,
    'lain-lain': string,
    date: string,
    time: string,

    time_out_0: string,
    time_out_1: string,
    instrument_availability_1: string,
    instrument_availability: string,
    availability_prothesis_1: string,
    availability_prothesis: string,
    'operation-type-1': string,
    operation_type_0: string,
    operation_type_2: string,
    anesthetic_type_1: string,
    anesthetic_type_2: string,
    'anesthetic-type-4': string,
    'anesthetic-type-3': string,
    'level-consciousness-1': string,
    'level-consciousness-2': string,
    'level-consciousness-3': string,
    'state-emotion-1': string,
    'state-emotion-2': string,
    'state-emotion-3': string,
    'cannula-position-1': string,
    'cannula-position-2': string,
    'cannula-position-3': string,
    'cannula-position-4': string,
    'cannula-position-5': string,
    'cannula-position-6': string,
    'cannula-position-7': string,
    'cannula-position-8': string,
    'operating-position-1': string,
    'operating-position-2': string,
    'operating-position-3': string,
    'operating-position-4': string,
    'operating-position-5': string,
    'arm-position-1': string,
    'arm-position-2': string,
    'arm-position-3': string,
    'arm-position-4': string,
    'arm-position-5': string,
    'position-tool-1': string,
    'position-tool-2': string,
    'catheter_urine-1': string,
    'catheter_urine-2': string,
    'catheter_urine-3': string,
    'skin-prep-1': string,
    'skin-prep-2': string,
    'skin-prep-3': string,
    'skin-prep-4': string,
    'skin-prep-5': string,
    'discharging-diathermy-1': string,
    'discharging-diathermy-2': string,
    'discharging-diathermy-3': string,
    'location-electrode-1': string,
    'location-electrode-2': string,
    'location-electrode-3': string,
    'location-electrode-4': string,
    'location-electrode-5': string,
    'condition-before-1': string,
    'condition-before-2': string,
    'condition-before-3': string,
    'after-condition-1': string,
    'after-condition-2': string,
    'after-condition-3': string,
    'heating-unit-0': string,
    'heating-unit-1': string,
    'unit-cooling-0': string,
    'unit-cooling-1': string,
    'laser-use-0': string,
    'laser-use-1': string,
    'use-implant-0': string,
    'use-implant-1': string,
    'irrigation-wound-1': string,
    'irrigation-wound-2': string,
    'irrigation-wound-3': string,
    'irrigation-wound-4': string,
    'irrigation-wound-5': string,
    'irrigation-wound-6': string,
    'discharging-fluid-1': string,
    'discharging-fluid-2': string,
    'discharging-fluid-3': string,
    'discharging-fluid-4': string,
    'discharging-fluid-5': string,
    'discharging-fluid-6': string,
    'balutan-cairan-1': string,
    'balutan-cairan-2': string,
    'balutan-cairan-3': string,
    'spesimen-cairan-1': string,
    'spesimen-cairan-2': string,
    'spesimen-cairan-3': string,
    'spesimen-cairan-4': string,
    'spesimen-cairan-5': string,

    Tanda_Tangan_Perawat_instrumen: string,
    Tanda_Tangan_Perawat_Sirkuler: string,
    'stiker-lensa': string,

    //section 2

    rawat_pasca_op_ruang_pemulihan: string,
    rawat_pasca_op_ruang_tunggu: string,
    transport_jalan_kaki: string,
    transport_strecher: string,
    transport_kursi_roda: string,
    time_catatan_pasca_op: string,
    ku_memuaskan: string,
    ku_jelek: string,
    tingkat_kesadaran_terjaga: string,
    tingkat_kesadaran_mudah_dibangunkan: string,
    tingkat_kesadaran_tidak_berespon: string,
    jalan_napas_tidak_ada_masalah: string,
    pernapasan_spontan: string,
    pernapasan_dibantu: string,
    terapi_oksigen_tidak: string,
    terapi_oksigen_02_nasal: string,
    terapi_oksigen_02_lainya: string,
    terapi_oksigen_lainya: string;
    kulit_datang_kering: string,
    kulit_datang_merah_muda: string,
    kulit_datang_hangat_dingin: string,
    kulit_datang_lainya: string,
    kulit_datang_lain_lain: string,
    kulit_keluar_kering: string,
    kulit_keluar_merah_muda: string,
    kulit_keluar_hangat_dingin: string,
    kulit_keluar_lainya: string,
    kulit_keluar_lain_lain: string,
    sirkulasi_merah_muda: string,
    sirkulasi_kebiru_biruan: string,
    posisi_pasien_lateral: string,
    posisi_pasien_tersanggah: string,
    posisi_pasien_lainya: string,
    posisi_pasien_lainya_teks: string,
    isSkorAldrette: boolean,
    aldrette_aktivitas_1: string,
    aldrette_aktivitas_2: string,
    aldrette_aktivitas_3: string,
    aldrette_pernapasan_1: string,
    aldrette_pernapasan_2: string,
    aldrette_pernapasan_3: string,
    aldrette_sirkulasi_1: string,
    aldrette_sirkulasi_2: string,
    aldrette_sirkulasi_3: string,
    aldrette_kesadaran_1: string,
    aldrette_kesadaran_2: string,
    aldrette_kesadaran_3: string,
    aldrette_saturasi02_1: string,
    aldrette_saturasi02_2: string,
    aldrette_saturasi02_3: string,
    isSkorSteward: boolean,
    steward_pergerakan_1: string,
    steward_pergerakan_2: string,
    steward_pergerakan_3: string,
    steward_pernafasan_1: string,
    steward_pernafasan_2: string,
    steward_pernafasan_3: string,
    steward_kesadaran_1: string,
    steward_kesadaran_2: string,
    steward_kesadaran_3: string,
    grafik_ttv: string,
    nadi_teratur_waktu_masuk: string,
    nadi_teratur_waktu_keluar: string,
    nadi_tidak_teratur_waktu_masuk: string,
    nadi_tidak_teratur_waktu_keluar: string,
    nadi_lemah_waktu_masuk: string,
    nadi_lemah_waktu_keluar: string,
    nadi_kuat_waktu_masuk: string,
    nadi_kuat_waktu_keluar: string,
    napas_teratur_waktu_masuk: string,
    napas_teratur_waktu_keluar: string,
    napas_tidak_teratur_waktu_masuk: string,
    napas_tidak_teratur_waktu_keluar: string,
    napas_dangkal_waktu_masuk: string,
    napas_dangkal_waktu_keluar: string,
    napas_dalam_waktu_masuk: string,
    napas_dalam_waktu_keluar: string,
    napas_sukar_waktu_masuk: string,
    napas_sukar_waktu_keluar: string,
    napas_terapi02_waktu_masuk: string,
    napas_terapi02_waktu_keluar: string,
    napas_sp02_waktu_masuk: string,
    napas_sp02_waktu_keluar: string,
    masalah_aktual:  any,
    output_urine_jam1: string,
    output_urine_jam2: string,
    output_urine_jam3: string,
    output_urine_jam4: string,
    total_output: string,
    jam_pemberitahuan_perawat_ruangan: string,
    jam_perawat_ruangan_datang: string,
    nama_perawat_ruangan: string,
    date_keperawatan_pasca_operasi: string,
    Tanda_Tangan_Keperawatan_Pasca_Operasi: string,
    nama_tanda_tangan_keperawatan_pasca_operasi: string,

    diagnosa_gangguan_pola_nafas_1: string;
    diagnosa_gangguan_pola_nafas_2: string;
    intervensi_gangguan_pola_nafas_1: string;
    intervensi_gangguan_pola_nafas_2: string;
    intervensi_gangguan_pola_nafas_3: string;
    intervensi_gangguan_pola_nafas_4: string;
    intervensi_gangguan_pola_nafas_5: string;
    intervensi_gangguan_pola_nafas_6: string;
    intervensi_gangguan_pola_nafas_7: string;
    evaluasi_gangguan_pola_nafas_1: string;
    evaluasi_gangguan_pola_nafas_2: string;
    evaluasi_gangguan_pola_nafas_3: string;
    evaluasi_gangguan_pola_nafas_4: string;
    '02_gangguan_pola_nafas': string;
    evaluasi_gangguan_pola_nafas_5: string;
    Tanda_Tangan_Perawat_Gangguan_Pola_Nafas: string;
    nama_perawat_gangguan_pola_nafas: string;
    date_gangguan_pola_nafas: string;

    diagnosa_resiko_kekurangan_cairan_1: string;
    diagnosa_resiko_kekurangan_cairan_2: string;
    diagnosa_resiko_kekurangan_cairan_3: string;
    diagnosa_resiko_kekurangan_cairan_4: string;
    intervensi_resiko_kekurangan_cairan_1: string;
    intervensi_resiko_kekurangan_cairan_2: string;
    intervensi_resiko_kekurangan_cairan_3: string;
    intervensi_resiko_kekurangan_cairan_4: string;
    intervensi_resiko_kekurangan_cairan_5: string;
    evaluasi_resiko_kekurangan_cairan_1: string;
    evaluasi_resiko_kekurangan_cairan_2: string;
    input_resiko_kekurangan_cairan: string;
    evaluasi_resiko_kekurangan_cairan_3: string;
    output_resiko_kekurangan_cairan: string;
    evaluasi_resiko_kekurangan_cairan_4: string;
    evaluasi_resiko_kekurangan_cairan_5: string;
    Tanda_Tangan_Perawat_Resiko_Kekurangan_Cairan: string;
    nama_perawat_resiko_kekurangan_cairan: string;
    date_resiko_kekurangan_cairan: string;

    diagnosa_resiko_cidera_1: string;
    diagnosa_resiko_cidera_2: string;
    intervensi_resiko_cidera_1: string;
    intervensi_resiko_cidera_2: string;
    intervensi_resiko_cidera_3: string;
    intervensi_resiko_cidera_4: string;
    intervensi_resiko_cidera_5: string;
    intervensi_resiko_cidera_6: string;
    intervensi_resiko_cidera_7: string;
    intervensi_resiko_cidera_8: string;
    intervensi_resiko_cidera_9: string;
    evaluasi_resiko_cidera_1: string;
    evaluasi_resiko_cidera_2: string;
    evaluasi_resiko_cidera_3: string;
    Tanda_Tangan_Perawat_Resiko_Cidera: string;
    nama_perawat_resiko_cidera: string;
    date_resiko_cidera: string;

    diagnosa_resiko_infeksi_1: string;
    diagnosa_resiko_infeksi_2: string;
    diagnosa_resiko_infeksi_3: string;
    intervensi_resiko_infeksi_1: string;
    intervensi_resiko_infeksi_2: string;
    intervensi_resiko_infeksi_3: string;
    intervensi_resiko_infeksi_4: string;
    intervensi_resiko_infeksi_5: string;
    evaluasi_resiko_infeksi_1: string;
    Tanda_Tangan_Perawat_Resiko_Infeksi: string;
    nama_perawat_resiko_infeksi: string;
    date_resiko_infeksi: string;

    diagnosa_gangguan_rasa_nyaman_1: string;
    diagnosa_gangguan_rasa_nyaman_2: string;
    intervensi_gangguan_rasa_nyaman_1: string;
    intervensi_gangguan_rasa_nyaman_2: string;
    intervensi_gangguan_rasa_nyaman_3: string;
    intervensi_gangguan_rasa_nyaman_4: string;
    intervensi_gangguan_rasa_nyaman_5: string;
    evaluasi_gangguan_rasa_nyaman_1: string;
    evaluasi_gangguan_rasa_nyaman_2: string;
    Tanda_Tangan_Perawat_Rasa_Nyaman: string;
    nama_perawat_gangguan_rasa_nyaman: string;
    date_gangguan_rasa_nyaman: string;

    diagnosa_gangguan_sensori_1: string;
    diagnosa_gangguan_sensori_2: string;
    intervensi_gangguan_sensori_1: string;
    intervensi_gangguan_sensori_2: string;
    intervensi_gangguan_sensori_3: string;
    intervensi_gangguan_sensori_4: string;
    intervensi_gangguan_sensori_5: string;
    evaluasi_gangguan_sensori_1: string;
    evaluasi_gangguan_sensori_2: string;
    Tanda_Tangan_Perawat_Gangguan_Sensori: string;
    nama_perawat_gangguan_sensori: string;
    date_gangguan_sensori: string;
    diagnosa_kecemasan_intraoperatif_1: string;
    diagnosa_kecemasan_intraoperatif_2: string;
    intervensi_kecemasan_intraoperatif_1: string;
    intervensi_kecemasan_intraoperatif_2: string;
    intervensi_kecemasan_intraoperatif_3: string;
    intervensi_kecemasan_intraoperatif_4: string;
    intervensi_kecemasan_intraoperatif_5: string;
    evaluasi_kecemasan_intraoperatif_1: string;
    evaluasi_kecemasan_intraoperatif_2: string;
    Tanda_Tangan_Perawat_Kecemasan_Intraoperatif: string;
    nama_perawat_kecemasan_intraoperatif: string;
    date_kecemasan_intraoperatif: string;

    //D. Diagnosa
    diag_rasa_nyaman_1: string;
    diag_rasa_nyaman_2: string;
    intervensi_rasa_nyaman_1: string;
    intervensi_rasa_nyaman_2: string;
    intervensi_rasa_nyaman_3: string;
    intervensi_rasa_nyaman_4: string;
    intervensi_rasa_nyaman_5: string;
    intervensi_rasa_nyaman_6: string;
    evaluasi_rasa_nyaman_1: string;
    evaluasi_rasa_nyaman_2: string;
    evaluasi_rasa_nyaman_3: string;
    evaluasi_rasa_nyaman_4: string;
    ttd_perawat_gangguan_rasa_nyaman: string;
    nama_perawat_gangguan_rasa_nyaman_pasca: string;
    date_gangguan_rasa_nyaman_pasca: string;

    diag_resiko_infeksi_1: string;
    diag_resiko_infeksi_2: string;
    diag_resiko_infeksi_3: string;
    inter_resiko_infeksi_1: string;
    inter_resiko_infeksi_2: string;
    inter_resiko_infeksi_3: string;
    inter_resiko_infeksi_4: string;
    inter_resiko_infeksi_5: string;
    eval_resiko_infeksi_1: string;
    tanda_tangan_perawat_resiko_infeksi: string;
    nama_perawat_resiko_infeksi_pasca: string;
    date_resiko_infeksi_pasca: string;

    diag_suhu_tubuh_1: string;
    diag_suhu_tubuh_2: string;
    diag_suhu_tubuh_3: string;
    intervensi_suhu_tubuh_1: string;
    intervensi_suhu_tubuh_2: string;
    intervensi_suhu_tubuh_3: string;
    evaluasi_suhu_tubuh_1: string;
    evaluasi_suhu_tubuh_2: string;
    evaluasi_suhu_tubuh_3: string;
    perubahan_suhu_pasien: string;
    ttd_perawat_perubahan_suhu: string;
    nama_perawat_perubahan_suhu_pasca: string;
    date_resiko_perubahan_suhu_pasca: string;
    diag_kecemasan_1: string;
    intervensi_kecemasan_1: string;
    intervensi_kecemasan_2: string;
    intervensi_kecemasan_3: string;
    intervensi_kecemasan_4: string;
    intervensi_kecemasan_5: string;
    intervensi_kecemasan_6: string;
    intervensi_kecemasan_7: string;
    evaluasi_kecemasan_1: string;
    evaluasi_kecemasan_2: string;
    ttd_perawat_kecemasan_pascaoperatif: string;
    nama_perawat_kecemasan_pascaoperatif: string;
    date_kecemasan_pascaoperatif: string;
    nik: string,
  }

  constructor(req: IPdfOperativeFairyNursingNotesRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfOperativeFairyNursingNotesRequest) {
    return new PdfOperativeFairyNursingNotesRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfOperativeFairyNursingNotesRequest {
    const arr = (val?.ck_intra_operasi?.Updated_At ?? '').split(' ');
    const date = arr[0];
    const time = arr.length > 1 ? arr[1] : '';
    const actualProbs = val.ck_pasca_operasi && val.ck_pasca_operasi.Aktual && Array.isArray(val.ck_pasca_operasi.Aktual) && val.ck_pasca_operasi.Aktual.length > 0 ? val.ck_pasca_operasi.Aktual : [];
    const newActualProbs = actualProbs.map((item: any) => {
      return {
        waktu_masalah_aktual: item.Time_Masalah_Aktual ?? '',
        masalah: item.Masalah_Aktual_Teks ?? '',
        intruksi_masalah_aktual: item.Masalah_Aktual_Instruksi_Teks ?? '',
        tindakan_masalah_aktual: item.Masalah_Aktual_Tindakan_Teks ?? '',
      }
    });
    return new PdfOperativeFairyNursingNotesRequest({
      emr_id: emrId,
      form_name: 'ok_catatan-keperawatan-intra-pasca_v3',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        'form.Nama_Perawat_Instrument': val?.ck_intra_operasi?.Nama_Perawat_Instrumen ?? '',
        'form.Nama_Perawat_Sirkuler': val?.ck_intra_operasi?.Nama_Perawat_Sirkuler ?? '',
        'time-out-time': val?.ck_intra_operasi?.Time_Out_Waktu ?? '',
        'availability-instrument-time': val?.ck_intra_operasi?.Ketersediaan_Instrumen_Waktu ?? '',
        'availability-prothesis-time': val?.ck_intra_operasi?.Ketersediaan_Prothese_Waktu ?? '',
        'start-time': val?.ck_intra_operasi?.Mulai_Waktu ?? '',
        'finished-time': val?.ck_intra_operasi?.Selesai_Waktu ?? '',
        operation_jenis: val?.ck_intra_operasi?.Jenis_Operasi ?? '',
        'other-awareness-level-text': val?.ck_intra_operasi?.Tingkat_Kesadaran_Lain_Teks ?? '',
        other_awareness_level_text: val?.ck_intra_operasi?.Posisi_Kanula_Lain_Teks ?? '',
        id_position_operating_supervised: val?.ck_intra_operasi?.Nama_Posisi_Operasi_Diawasi ?? '',
        position_operation_other_text: val?.ck_intra_operasi?.Posisi_Operasi_Lain_Teks ?? '',
        other_arm_position_text: val?.ck_intra_operasi?.Posisi_Lengan_Lain_Teks ?? '',
        position_other_text_tools: val?.ck_intra_operasi?.Posisi_Alat_Lain_Teks ?? '',
        other_skin_prep_text: val?.ck_intra_operasi?.Persiapan_Kulit_Lain_Teks ?? '',
        other_electrode_location_text: val?.ck_intra_operasi?.Lokasi_Elektrode_Lain_Teks ?? '',
        condition_before_other_text: val?.ck_intra_operasi?.Kondisi_Sebelum_Lain_Teks ?? '',
        condition_after_other_text: val?.ck_intra_operasi?.Kondisi_Sesudah_Lain_Teks ?? '',
        code_electrosurgical_unit: val?.ck_intra_operasi?.Kode_Unit_Elektrosurgikal ?? '',
        heater_setting_temperature: val?.ck_intra_operasi?.Pemanas_Pengaturan_Temperatur ?? '',
        'heater-start-time': val?.ck_intra_operasi?.Pemanas_Mulai_Waktu ?? '',
        'heater-code-unit': val?.ck_intra_operasi?.Pemanas_Kode_Unit ?? '',
        'heater-finished-time': val?.ck_intra_operasi?.Pemanas_Selesai_Waktu ?? '',
        cooler_setting_temperature: val?.ck_intra_operasi?.Pendingin_Pengaturan_Temperatur ?? '',
        'cooler-start-time': val?.ck_intra_operasi?.Pendingin_Mulai_Waktu ?? '',
        cooler_code_unit: val?.ck_intra_operasi?.Pendingin_Kode_Unit ?? '',
        'cooler-finished-time': val?.ck_intra_operasi?.Pendingin_Selesai_Waktu ?? '',
        'laser-code-model': val?.ck_intra_operasi?.Laser_Kode_Model ?? '',
        'laser-power': val?.ck_intra_operasi?.Laser_Power ?? '',
        'laser-duration': val?.ck_intra_operasi?.Laser_Durasi ?? '',
        'laser-interval': val?.ck_intra_operasi?.Laser_Interval ?? '',
        'laser-date': val?.ck_intra_operasi?.Laser_Tanggal ?? '',
        'id-laser-supervised-1': val?.ck_intra_operasi?.Nama_Laser_Diawasi_1 ?? '',
        'id-laser-supervised-2': val?.ck_intra_operasi?.Nama_Laser_Diawasi_2 ?? '',
        'id-laser-supervised-3': val?.ck_intra_operasi?.Nama_Laser_Diawasi_3 ?? '',
        kadaluarsa: DateTimeConverter.convertToNormalDate(val?.ck_intra_operasi?.Tanggal_Kadaluarsa),
        jenis_18: val?.ck_intra_operasi?.Jenis_Balutan ?? '',
        jenis_19: val?.ck_intra_operasi?.Jenis_Spesimen ?? '',
        'implant-factory': val?.ck_intra_operasi?.Implant_Pabrik ?? '',
        'implant-type': val?.ck_intra_operasi?.Implant_Type ?? '',
        'implant-size': val?.ck_intra_operasi?.Implant_Size ?? '',
        'implant-seri': val?.ck_intra_operasi?.Implant_Seri ?? '',
        'irrigation-wound-other-text': val?.ck_intra_operasi?.Irigasi_Luka_Lain_Teks ?? '',
        use_liquid_water_text: val?.ck_intra_operasi?.Pemakaian_Cairan_Air_Teks ?? '',
        'use-liquid-sodium-text': val?.ck_intra_operasi?.Pemakaian_Cairan_Sodium_Teks ?? '',
        'use-other-liquid-text': val?.ck_intra_operasi?.Pemakaian_Cairan_Lain_Teks ?? '',
        'lain-lain': val?.ck_intra_operasi?.Lain_Spesimen ?? '',
        'use-fluid-histology-text': val?.ck_intra_operasi?.Pemakaian_Cairan_Histologi_Teks ?? '',
        'use-fluid-culture-text': val?.ck_intra_operasi?.Pemakaian_Cairan_Kultur_Teks ?? '',
        'use-fluid-cytology-text': val?.ck_intra_operasi?.Pemakaian_Cairan_Sitologi_Teks ?? '',
        'specimen-liquid-examination': val?.ck_intra_operasi?.Spesimen_Cairan_Pemeriksaan ?? '',
        'specimen-type-tissue': val?.ck_intra_operasi?.Spesimen_Jenis_Jaringan ?? '',
        'specimen-number-tissue': val?.ck_intra_operasi?.Spesimen_Jumlah_Jaringan ?? '',
        'specimen-description': val?.ck_intra_operasi?.Spesimen_Keterangan ?? '',
        date: DateTimeConverter.convertToNormalDate(val?.ck_intra_operasi?.Updated_At && val?.ck_intra_operasi?.Updated_At !== '' ? val?.ck_intra_operasi?.Updated_At.substring(0, 10) : ''),
        time: val?.ck_intra_operasi?.Updated_At && val?.ck_intra_operasi?.Updated_At !== '' ? val?.ck_intra_operasi?.Updated_At.substring(11, 16) : '',

        time_out_0: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Time_Out === 1),
        time_out_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Time_Out === 0),

        instrument_availability_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Ketersediaan_Instrumen === 1),
        instrument_availability: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Ketersediaan_Instrumen === 0),
        availability_prothesis_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Ketersediaan_Prothese === 1),
        availability_prothesis: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Ketersediaan_Prothese === 0),
        'operation-type-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tipe_Operasi === 1),
        operation_type_0: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tipe_Operasi === 0),
        operation_type_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tipe_Operasi === 2),
        anesthetic_type_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tipe_Pembiusan === 1),
        anesthetic_type_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tipe_Pembiusan === 0),
        'anesthetic-type-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tipe_Pembiusan === 3),
        'anesthetic-type-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tipe_Pembiusan === 2),
        'level-consciousness-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tingkat_Kesadaran === 1),
        'level-consciousness-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tingkat_Kesadaran === 2),
        'level-consciousness-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Tingkat_Kesadaran === 3),
        'state-emotion-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Status_Emosi === 1),
        'state-emotion-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Status_Emosi === 2),
        'state-emotion-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Status_Emosi === 3),
        'cannula-position-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Kanula_1 === '1'),
        'cannula-position-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Kanula_2 === '1'),
        'cannula-position-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Kanula_3 === '1'),
        'cannula-position-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Kanula_4 === '1'),
        'cannula-position-5': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Kanula_5 === '1'),
        'cannula-position-6': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Kanula_6 === '1'),
        'cannula-position-7': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Kanula_7 === '1'),
        'cannula-position-8': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Kanula_8 === '1'),
        'operating-position-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Operasi_1 === '1'),
        'operating-position-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Operasi_2 === '1'),
        'operating-position-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Operasi_3 === '1'),
        'operating-position-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Operasi_4 === '1'),
        'operating-position-5': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Operasi_5 === '1'),
        'arm-position-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Lengan_1 === '1'),
        'arm-position-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Lengan_2 === '1'),
        'arm-position-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Lengan_3 === '1'),
        'arm-position-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Lengan_4 === '1'),
        'arm-position-5': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Lengan_5 === '1'),
        'position-tool-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Alat === 1),
        'position-tool-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Posisi_Alat === 2),
        'catheter_urine-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kateter_Urine === 1),
        'catheter_urine-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kateter_Urine === 2),
        'catheter_urine-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kateter_Urine === 3),
        'skin-prep-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Persiapan_Kulit === 1),
        'skin-prep-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Persiapan_Kulit === 2),
        'skin-prep-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Persiapan_Kulit === 3),
        'skin-prep-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Persiapan_Kulit === 4),
        'skin-prep-5': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Persiapan_Kulit === 5),
        'discharging-diathermy-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Diathermy_1 === '1'),
        'discharging-diathermy-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Diathermy_2 === '1'),
        'discharging-diathermy-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Diathermy_3 === '1'),
        'location-electrode-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Lokasi_Elektrode_1 === '1'),
        'location-electrode-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Lokasi_Elektrode_2 === '1'),
        'location-electrode-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Lokasi_Elektrode_3 === '1'),
        'location-electrode-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Lokasi_Elektrode_4 === '1'),
        'location-electrode-5': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Lokasi_Elektrode_5 === '1'),
        'condition-before-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kondisi_Sebelum_1 === '1'),
        'condition-before-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kondisi_Sebelum_2 === '1'),
        'condition-before-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kondisi_Sebelum_3 === '1'),
        'after-condition-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kondisi_Sesudah_1 === '1'),
        'after-condition-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kondisi_Sesudah_2 === '1'),
        'after-condition-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Kondisi_Sesudah_3 === '1'),
        'heating-unit-0': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Unit_Pemanas === 0),
        'heating-unit-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Unit_Pemanas === 1),
        'unit-cooling-0': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Unit_Pendingin === 0),
        'unit-cooling-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Unit_Pendingin === 1),
        'laser-use-0': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Laser === 0),
        'laser-use-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Laser === 1),
        'use-implant-0': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Implant === 0),
        'use-implant-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Implant === 1),
        'irrigation-wound-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Irigasi_Luka === 1),
        'irrigation-wound-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Irigasi_Luka === 2),
        'irrigation-wound-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Irigasi_Luka === 3),
        'irrigation-wound-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Irigasi_Luka === 4),
        'irrigation-wound-5': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Irigasi_Luka === 5),
        'irrigation-wound-6': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Irigasi_Luka === 6),
        'discharging-fluid-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Cairan === 1),
        'discharging-fluid-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Cairan === 2),
        'discharging-fluid-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Cairan === 3),
        'discharging-fluid-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Cairan === 4),
        'discharging-fluid-5': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Cairan === 5),
        'discharging-fluid-6': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Pemakaian_Cairan === 6),
        'balutan-cairan-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Balutan_Cairan === 1),
        'balutan-cairan-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Balutan_Cairan === 2),
        'balutan-cairan-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Balutan_Cairan === 3),
        'spesimen-cairan-1': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Spesimen_Cairan === 1),
        'spesimen-cairan-2': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Spesimen_Cairan === 2),
        'spesimen-cairan-3': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Spesimen_Cairan === 3),
        'spesimen-cairan-4': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Spesimen_Cairan === 4),
        'spesimen-cairan-5': PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_intra_operasi?.Spesimen_Cairan === 5),

        Tanda_Tangan_Perawat_instrumen: (val?.ck_intra_operasi?.TTD_Perawat_Instrumen && val?.ck_intra_operasi?.TTD_Perawat_Instrumen !== '') ? val?.ck_intra_operasi?.TTD_Perawat_Instrumen : 'https://bucket.rsmatasmec.com/blank.jpeg',
        Tanda_Tangan_Perawat_Sirkuler: (val?.ck_intra_operasi?.TTD_Perawat_Sirkuler && val?.ck_intra_operasi?.TTD_Perawat_Sirkuler !== '') ? val?.ck_intra_operasi?.TTD_Perawat_Sirkuler : 'https://bucket.rsmatasmec.com/blank.jpeg',
        'stiker-lensa': (val?.ck_intra_operasi?.Url_Image_Stiker && val?.ck_intra_operasi?.Url_Image_Stiker !== '') ? val?.ck_intra_operasi?.Url_Image_Stiker : 'https://bucket.rsmatasmec.com/blank.jpeg',

        diagnosa_gangguan_pola_nafas_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Diagnosa_Neuromuskular === 1),
        diagnosa_gangguan_pola_nafas_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Diagnosa_Sekret === 1),
        intervensi_gangguan_pola_nafas_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Miringkan_Kepala === 1),
        intervensi_gangguan_pola_nafas_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Rahang === 1),
        intervensi_gangguan_pola_nafas_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Observasi === 1),
        intervensi_gangguan_pola_nafas_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_TTV === 1),
        intervensi_gangguan_pola_nafas_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Suction === 1),
        intervensi_gangguan_pola_nafas_6: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_O2 === 1),
        intervensi_gangguan_pola_nafas_7: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Intervensi_Obat === 1),
        evaluasi_gangguan_pola_nafas_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_TTV === 1),
        evaluasi_gangguan_pola_nafas_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_Nafas_Spontan === 1),
        evaluasi_gangguan_pola_nafas_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_Sianosis === 1),
        evaluasi_gangguan_pola_nafas_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_O2 === 1),
        '02_gangguan_pola_nafas': val?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_O2_Teks ?? '',
        evaluasi_gangguan_pola_nafas_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Gangguan_Pola_Nafas_Evaluasi_Observasi === 1),
        Tanda_Tangan_Perawat_Gangguan_Pola_Nafas: val.intra_operatif && val.intra_operatif.TTD_Perawat_Gangguan_Pola_Nafas && val.intra_operatif.TTD_Perawat_Gangguan_Pola_Nafas !== '' ? val.intra_operatif.TTD_Perawat_Gangguan_Pola_Nafas : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_gangguan_pola_nafas: val?.intra_operatif?.Nama_Perawat_Gangguan_Pola_Nafas ?? '',
        date_gangguan_pola_nafas: DateTimeConverter.convertToNormalDate(val?.intra_operatif?.Tanggal_Perawat_Gangguan_Pola_Nafas),
        diagnosa_resiko_kekurangan_cairan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Diagnosa_Intake === 1),
        diagnosa_resiko_kekurangan_cairan_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Diagnosa_Abnormal === 1),
        diagnosa_resiko_kekurangan_cairan_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Diagnosa_Integritas === 1),
        diagnosa_resiko_kekurangan_cairan_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Diagnosa_Puasa === 1),
        intervensi_resiko_kekurangan_cairan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Intervensi_Ukur === 1),
        intervensi_resiko_kekurangan_cairan_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Intervensi_TTV === 1),
        intervensi_resiko_kekurangan_cairan_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Intervensi_Mual_Muntah === 1),
        intervensi_resiko_kekurangan_cairan_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Intervensi_Pembalut_Luka === 1),
        intervensi_resiko_kekurangan_cairan_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Intervensi_Suhu_Tubuh === 1),
        evaluasi_resiko_kekurangan_cairan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Evaluasi_TTV === 1),
        evaluasi_resiko_kekurangan_cairan_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Input === 1),
        input_resiko_kekurangan_cairan: val?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Input_Teks ?? '',
        evaluasi_resiko_kekurangan_cairan_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Output === 1),
        output_resiko_kekurangan_cairan: val?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Output_Teks ?? '',
        evaluasi_resiko_kekurangan_cairan_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Mukosa === 1),
        evaluasi_resiko_kekurangan_cairan_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kekurangan_Cairan_Evaluasi_Turgor === 1),
        Tanda_Tangan_Perawat_Resiko_Kekurangan_Cairan: val.intra_operatif && val.intra_operatif.TTD_Perawat_Kekurangan_Cairan && val.intra_operatif.TTD_Perawat_Kekurangan_Cairan !== '' ? val.intra_operatif.TTD_Perawat_Kekurangan_Cairan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_resiko_kekurangan_cairan: val?.intra_operatif?.Nama_Perawat_Kekurangan_Cairan ?? '',
        date_resiko_kekurangan_cairan: DateTimeConverter.convertToNormalDate(val?.intra_operatif?.Tanggal_Perawat_Kekurangan_Cairan),
        diagnosa_resiko_cidera_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Diagnosa_Pemajanan === 1),
        diagnosa_resiko_cidera_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Diagnosa_Hipoksia === 1),
        intervensi_resiko_cidera_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Lepas_Gigi === 1),
        intervensi_resiko_cidera_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Periksa_Identitas === 1),
        intervensi_resiko_cidera_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Terkunci === 1),
        intervensi_resiko_cidera_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Sabuk_Pengaman === 1),
        intervensi_resiko_cidera_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Posisi === 1),
        intervensi_resiko_cidera_6: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Elektrikal === 1),
        intervensi_resiko_cidera_7: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Plate_Diatermi === 1),
        intervensi_resiko_cidera_8: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Cairan === 1),
        intervensi_resiko_cidera_9: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Intervensi_Jumlah_Pemakaian === 1),
        evaluasi_resiko_cidera_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Evaluasi_Posisi === 1),
        evaluasi_resiko_cidera_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Evaluasi_Prosedur === 1),
        evaluasi_resiko_cidera_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Tinggi_Cedera_Evaluasi_Jumlah === 1),
        Tanda_Tangan_Perawat_Resiko_Cidera: val.intra_operatif && val.intra_operatif.TTD_Perawat_Tinggi_Cedera && val.intra_operatif.TTD_Perawat_Tinggi_Cedera !== '' ? val.intra_operatif.TTD_Perawat_Tinggi_Cedera : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_resiko_cidera: val?.intra_operatif?.Nama_Perawat_Tinggi_Cedera ?? '',
        date_resiko_cidera: DateTimeConverter.convertToNormalDate(val?.intra_operatif?.Tanggal_Perawat_Tinggi_Cedera),
        diagnosa_resiko_infeksi_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Diagnosa_Trauma === 1),
        diagnosa_resiko_infeksi_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Diagnosa_Lingkungan === 1),
        diagnosa_resiko_infeksi_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Diagnosa_Peralatan === 1),
        intervensi_resiko_infeksi_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Intervensi_Cuci_Tangan === 1),
        intervensi_resiko_infeksi_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Intervensi_Disinfeksi === 1),
        intervensi_resiko_infeksi_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Intervensi_Kadaluarsa === 1),
        intervensi_resiko_infeksi_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Intervensi_Sterilitas === 1),
        intervensi_resiko_infeksi_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Intervensi_Penutup === 1),
        evaluasi_resiko_infeksi_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Infeksi_Evaluasi_Pertahankan === 1),
        Tanda_Tangan_Perawat_Resiko_Infeksi: val.pasca_operatif && val.pasca_operatif.TTD_Perawat_Infeksi && val.pasca_operatif.TTD_Perawat_Infeksi !== '' ? val.pasca_operatif.TTD_Perawat_Infeksi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_resiko_infeksi: val?.intra_operatif?.Nama_Perawat_Infeksi ?? '',
        date_resiko_infeksi: DateTimeConverter.convertToNormalDate(val?.intra_operatif?.Tanggal_Perawat_Infeksi),
        diagnosa_gangguan_rasa_nyaman_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Diagnosa_Luka === 1),
        diagnosa_gangguan_rasa_nyaman_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Diagnosa_Pemasangan_Alat === 1),
        intervensi_gangguan_rasa_nyaman_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Intervensi_Skala_Nyeri === 1),
        intervensi_gangguan_rasa_nyaman_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Intervensi_Teknik_Relaksasi === 1),
        intervensi_gangguan_rasa_nyaman_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Intervensi_Posisi_Nyaman === 1),
        intervensi_gangguan_rasa_nyaman_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Intervensi_Teknik_Distraksi === 1),
        intervensi_gangguan_rasa_nyaman_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Intervensi_Kolaborasi === 1),
        evaluasi_gangguan_rasa_nyaman_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Evaluasi_Berkurang === 1),
        evaluasi_gangguan_rasa_nyaman_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Nyeri_Evaluasi_Teknik === 1),
        Tanda_Tangan_Perawat_Rasa_Nyaman: val.intra_operatif && val.intra_operatif.TTD_Perawat_Nyeri && val.intra_operatif.TTD_Perawat_Nyeri !== '' ? val.intra_operatif.TTD_Perawat_Nyeri : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_gangguan_rasa_nyaman: val?.intra_operatif?.Nama_Perawat_Nyeri ?? '',
        date_gangguan_rasa_nyaman: DateTimeConverter.convertToNormalDate(val?.intra_operatif?.Tanggal_Perawat_Nyeri),
        diagnosa_gangguan_sensori_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Diagnosa_Penurunan === 1),
        diagnosa_gangguan_sensori_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Diagnosa_Perlindungan === 1),
        intervensi_gangguan_sensori_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Intervensi_Ketajaman === 1),
        intervensi_gangguan_sensori_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Intervensi_Orientasi === 1),
        intervensi_gangguan_sensori_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Intervensi_Alternative === 1),
        intervensi_gangguan_sensori_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Intervensi_Cegah_Sinar === 1),
        intervensi_gangguan_sensori_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Intervensi_Optimal_Lingkungan === 1),
        evaluasi_gangguan_sensori_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Evaluasi_Kemampuan === 1),
        evaluasi_gangguan_sensori_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Penglihatan_Evaluasi_Perubahan === 1),
        Tanda_Tangan_Perawat_Gangguan_Sensori: val.intra_operatif && val.intra_operatif.TTD_Perawat_Penglihatan && val.intra_operatif.TTD_Perawat_Penglihatan !== '' ? val.intra_operatif.TTD_Perawat_Penglihatan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_gangguan_sensori: val?.intra_operatif?.Nama_Perawat_Penglihatan ?? '',
        date_gangguan_sensori: DateTimeConverter.convertToNormalDate(val?.intra_operatif?.Tanggal_Perawat_Penglihatan),
        diagnosa_kecemasan_intraoperatif_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kecemasan_Diagnosa_Prosedur === 1),
        diagnosa_kecemasan_intraoperatif_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kecemasan_Diagnosa_Kurang_Pengetahuan === 1),
        intervensi_kecemasan_intraoperatif_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kecemasan_Intervensi_Gambaran === 1),
        intervensi_kecemasan_intraoperatif_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kecemasan_Intervensi_Beri_Waktu === 1),
        intervensi_kecemasan_intraoperatif_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kecemasan_Intervensi_Informasi === 1),
        intervensi_kecemasan_intraoperatif_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(false),
        intervensi_kecemasan_intraoperatif_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kecemasan_Intervensi_Kesempatan === 1),
        evaluasi_kecemasan_intraoperatif_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kecemasan_Evaluasi_Berkurang === 1),
        evaluasi_kecemasan_intraoperatif_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.intra_operatif?.Kecemasan_Evaluasi_Tenang === 1),
        Tanda_Tangan_Perawat_Kecemasan_Intraoperatif: val.intra_operatif && val.intra_operatif.TTD_Perawat_Kecemasan && val.intra_operatif.TTD_Perawat_Kecemasan !== '' ? val.intra_operatif.TTD_Perawat_Kecemasan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_kecemasan_intraoperatif: val?.intra_operatif?.Nama_Perawat_Kecemasan ?? '',
        date_kecemasan_intraoperatif: DateTimeConverter.convertToNormalDate(val?.intra_operatif?.Tanggal_Perawat_Kecemasan),
        rawat_pasca_op_ruang_pemulihan: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Rawat_Pasca === 1),
        rawat_pasca_op_ruang_tunggu: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Rawat_Pasca === 2),
        transport_jalan_kaki: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Transport === 1),
        transport_strecher: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Transport === 2),
        transport_kursi_roda: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Transport === 3),
        time_catatan_pasca_op: val?.ck_pasca_operasi?.Time_Out_Waktu ?? '',
        ku_memuaskan: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Keadaan_Umum === 1),
        ku_jelek: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Keadaan_Umum === 2),
        tingkat_kesadaran_terjaga: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Tingkat_Kesadaran === 1),
        tingkat_kesadaran_mudah_dibangunkan: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Tingkat_Kesadaran === 2),
        tingkat_kesadaran_tidak_berespon: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Tingkat_Kesadaran === 3),
        jalan_napas_tidak_ada_masalah: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Jalan_Nafas === 1),
        pernapasan_spontan: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Pernafasan === 1),
        pernapasan_dibantu: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Pernafasan === 2),
        terapi_oksigen_tidak: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Terapi_Oksigen === 1),
        terapi_oksigen_02_nasal: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Terapi_Oksigen === 2),
        terapi_oksigen_02_lainya: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Terapi_Oksigen === 3),
        terapi_oksigen_lainya: val?.ck_pasca_operasi?.Terapi_Oksigen_Lain_Teks ?? '',
        kulit_datang_kering: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Kulit_Datang_Kering === 1),
        kulit_datang_merah_muda: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Kulit_Datang_Merah_Muda === 1),
        kulit_datang_hangat_dingin: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Kulit_Datang_Hangat === 1),
        kulit_datang_lainya: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Kulit_Datang_Lain === 1),
        kulit_datang_lain_lain: val?.ck_pasca_operasi?.Kulit_Datang_Lain_Teks ?? '',
        kulit_keluar_kering: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Kulit_Keluar_Kering === 1),
        kulit_keluar_merah_muda: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Kulit_Keluar_Merah_Muda === 1),
        kulit_keluar_hangat_dingin: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Kulit_Keluar_Hangat === 1),
        kulit_keluar_lainya: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Kulit_Keluar_Lain === 1),
        kulit_keluar_lain_lain: val?.ck_pasca_operasi?.Kulit_Keluar_Lain_Teks ?? '',
        sirkulasi_merah_muda: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Sirkulasi === 1),
        sirkulasi_kebiru_biruan: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Sirkulasi === 2),
        posisi_pasien_lateral: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Posisi_Pasien === 1),
        posisi_pasien_tersanggah: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Posisi_Pasien === 2),
        posisi_pasien_lainya: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Posisi_Pasien === 3),
        posisi_pasien_lainya_teks: val?.ck_pasca_operasi?.Posisi_Pasien_Lain_Teks ?? '',
        isSkorAldrette: !!(val?.ck_pasca_operasi?.Skor === 1),
        isSkorSteward: !!(val?.ck_pasca_operasi?.Skor === 2),
        aldrette_aktivitas_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Aktivitas === 1),
        aldrette_aktivitas_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Aktivitas === 2),
        aldrette_aktivitas_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Aktivitas === 3),
        aldrette_pernapasan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Pernafasan === 1),
        aldrette_pernapasan_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Pernafasan === 2),
        aldrette_pernapasan_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Pernafasan === 3),
        aldrette_sirkulasi_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Sirkulasi === 1),
        aldrette_sirkulasi_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Sirkulasi === 2),
        aldrette_sirkulasi_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Sirkulasi === 3),
        aldrette_kesadaran_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Kesadaran === 1),
        aldrette_kesadaran_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Kesadaran === 2),
        aldrette_kesadaran_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Kesadaran === 3),
        aldrette_saturasi02_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Saturasi === 1),
        aldrette_saturasi02_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Saturasi === 2),
        aldrette_saturasi02_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Aldrette_Saturasi === 3),
        steward_pergerakan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Pergerakan === 1),
        steward_pergerakan_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Pergerakan === 2),
        steward_pergerakan_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Pergerakan === 3),
        steward_pernafasan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Pernafasan === 1),
        steward_pernafasan_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Pernafasan === 2),
        steward_pernafasan_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Pernafasan === 3),
        steward_kesadaran_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Kesadaran === 1),
        steward_kesadaran_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Kesadaran === 2),
        steward_kesadaran_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Steward_Kesadaran === 3),
        grafik_ttv: val.ck_pasca_operasi && val.ck_pasca_operasi.Grid_Chart_Img !== '' ? val.ck_pasca_operasi.Grid_Chart_Img : 'https://bucket.rsmatasmec.com/grafik-anestesi.jpeg',
        nadi_teratur_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Nadi_Teratur_Masuk === '1'),
        nadi_teratur_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Nadi_Teratur_Keluar === '1'),
        nadi_tidak_teratur_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Nadi_Tidakteratur_Masuk === '1'),
        nadi_tidak_teratur_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Nadi_Tidakteratur_Keluar === '1'),
        nadi_lemah_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Nadi_Lemah_Masuk === '1'),
        nadi_lemah_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Nadi_Lemah_Keluar === '1'),
        nadi_kuat_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Nadi_Kuat_Masuk === '1'),
        nadi_kuat_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Nadi_Kuat_Keluar === '1'),
        napas_teratur_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Teratur_Masuk === '1'),
        napas_teratur_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Teratur_Keluar === '1'),
        napas_tidak_teratur_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Tidakteratur_Masuk === '1'),
        napas_tidak_teratur_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Tidakteratur_Keluar === '1'),
        napas_dangkal_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Dangkal_Masuk === '1'),
        napas_dangkal_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Dangkal_Keluar === '1'),
        napas_dalam_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Dalam_Masuk === '1'),
        napas_dalam_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Dalam_Keluar === '1'),
        napas_sukar_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Sukar_Masuk === '1'),
        napas_sukar_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Sukar_Keluar === '1'),
        napas_terapi02_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Terapi_Masuk === '1'),
        napas_terapi02_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Napas_Terapi_Keluar === '1'),
        napas_sp02_waktu_masuk: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Spo_Masuk === '1'),
        napas_sp02_waktu_keluar: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Spo_Keluar === '1'),
        masalah_aktual: newActualProbs,
        output_urine_jam1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Urine_Satu === '1'),
        output_urine_jam2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Urine_Dua === '1'),
        output_urine_jam3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Urine_Tiga === '1'),
        output_urine_jam4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.ck_pasca_operasi?.Time_Urine_Empat === '1'),
        total_output: val?.ck_pasca_operasi?.Time_Urine_Total ?? '',
        jam_pemberitahuan_perawat_ruangan: val?.ck_pasca_operasi?.Time_Pemberitahu_Ruang ?? '',
        jam_perawat_ruangan_datang: val?.ck_pasca_operasi?.Time_Perawat_Ruang ?? '',
        nama_perawat_ruangan: val?.ck_pasca_operasi?.Nama_Perawat_Dokter ?? '',
        date_keperawatan_pasca_operasi: DateTimeConverter.convertToNormalDate(val?.ck_pasca_operasi?.Tanggal_Pasca_Operasi && val?.ck_pasca_operasi?.Tanggal_Pasca_Operasi !== '' ? val?.ck_pasca_operasi?.Tanggal_Pasca_Operasi.substring(0, 10) : ''),
        Tanda_Tangan_Keperawatan_Pasca_Operasi: val.ck_pasca_operasi && val.ck_pasca_operasi.TTD_Perawat && val.ck_pasca_operasi.TTD_Perawat !== '' ? val.ck_pasca_operasi.TTD_Perawat : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_tanda_tangan_keperawatan_pasca_operasi: val?.ck_pasca_operasi?.Nama_Perawat ?? '',
        diag_rasa_nyaman_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Diagnosa_Luka === 1),
        diag_rasa_nyaman_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Diagnosa_Gaangguan_Kulit === 1),
        intervensi_rasa_nyaman_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Intervensi_Kaji_Lokasi === 1),
        intervensi_rasa_nyaman_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Intervensi_Kaji_Ttv === 1),
        intervensi_rasa_nyaman_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Intervensi_Teknik_Relaksaksi === 1),
        intervensi_rasa_nyaman_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Intervensi_Posisi_Nyaman === 1),
        intervensi_rasa_nyaman_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Intervensi_Teknik_Distraksi === 1),
        intervensi_rasa_nyaman_6: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Intervensi_Pemeberian_Analgesi === 1),
        evaluasi_rasa_nyaman_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Evaluasi_Ttv === 1),
        evaluasi_rasa_nyaman_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Evaluasi_Nyeri_Terkontrol === 1),
        evaluasi_rasa_nyaman_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Evaluasi_Nyeri_Berkurang === 1),
        evaluasi_rasa_nyaman_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Nyeri_Evaluasi_Diobservasi === 1),
        ttd_perawat_gangguan_rasa_nyaman: val.pasca_operatif && val.pasca_operatif.TTD_Perawat_Nyeri && val.pasca_operatif.TTD_Perawat_Nyeri !== '' ? val.pasca_operatif.TTD_Perawat_Nyeri : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_gangguan_rasa_nyaman_pasca: val?.pasca_operatif?.Nama_Perawat_Nyeri ?? '',
        date_gangguan_rasa_nyaman_pasca: DateTimeConverter.convertToNormalDate(val?.pasca_operatif?.Tanggal_Perawat_Nyeri),
        diag_resiko_infeksi_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Diagnosa_Trauma === 1),
        diag_resiko_infeksi_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Diagnosa_Lingkungan === 1),
        diag_resiko_infeksi_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Diagnosa_Peralatan === 1),
        inter_resiko_infeksi_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Intervensi_Cuci_Tangan === 1),
        inter_resiko_infeksi_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Intervensi_Disinfeksi === 1),
        inter_resiko_infeksi_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Intervensi_Kadaluarsa === 1),
        inter_resiko_infeksi_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Intervensi_Sterilitas === 1),
        inter_resiko_infeksi_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Intervensi_Penutup === 1),
        eval_resiko_infeksi_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Infeksi_Evaluasi_Pertahankan === 1),
        tanda_tangan_perawat_resiko_infeksi: val.intra_operatif && val.intra_operatif.TTD_Perawat_Infeksi && val.intra_operatif.TTD_Perawat_Infeksi !== '' ? val.intra_operatif.TTD_Perawat_Infeksi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_resiko_infeksi_pasca: val?.pasca_operatif?.Nama_Perawat_Infeksi ?? '',
        date_resiko_infeksi_pasca: DateTimeConverter.convertToNormalDate(val?.pasca_operatif?.Tanggal_Perawat_Infeksi),
        diag_suhu_tubuh_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Diagnosa_Suhu === 1),
        diag_suhu_tubuh_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Diagnosa_Obat === 1),
        diag_suhu_tubuh_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Diagnosa_Dehidrasi === 1),
        intervensi_suhu_tubuh_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Intervensi_Catatan_Suhu === 1),
        intervensi_suhu_tubuh_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Intervensi_Kaji_Suhu === 1),
        intervensi_suhu_tubuh_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Intervensi_Kolaborasi === 1),
        evaluasi_suhu_tubuh_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Evaluasi_Pasien_Dingin === 1),
        evaluasi_suhu_tubuh_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Evaluasi_Pasien_Menggigil === 1),
        evaluasi_suhu_tubuh_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Perubahan_Evaluasi_Suhu_Ruangan === 1),
        perubahan_suhu_pasien: val?.pasca_operatif?.Evaluasi_Suhu_Ruangan_Teks ?? '',
        ttd_perawat_perubahan_suhu: val.pasca_operatif && val.pasca_operatif.TTD_Perawat_Perubahan && val.pasca_operatif.TTD_Perawat_Perubahan !== '' ? val.pasca_operatif.TTD_Perawat_Perubahan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_perubahan_suhu_pasca: val?.pasca_operatif?.Nama_Perawat_Perubahan ?? '',
        date_resiko_perubahan_suhu_pasca: DateTimeConverter.convertToNormalDate(val?.pasca_operatif?.Tanggal_Perawat_Perubahan),
        diag_kecemasan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Diagnosa_Perawatan_Luka === 1),
        intervensi_kecemasan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Gambar_Luka === 1),
        intervensi_kecemasan_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Waktu_Perasaan === 1),
        intervensi_kecemasan_3: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Beri_Informasi === 1),
        intervensi_kecemasan_4: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Perbaikan_Pengelihatan === 1),
        intervensi_kecemasan_5: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Perasaan_Klien === 1),
        intervensi_kecemasan_6: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Kesempatan_Bertanya === 1),
        intervensi_kecemasan_7: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Intervensi_Nomor_Pasien === 1),
        evaluasi_kecemasan_1: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Evaluasi_Kecemasan === 1),
        evaluasi_kecemasan_2: PdfOperativeFairyNursingNotesRequest.getCheckImage(val?.pasca_operatif?.Kecemasan_Pasca_Operatif_Evaluasi_Tenang_Selama === 1),
        ttd_perawat_kecemasan_pascaoperatif: val.pasca_operatif && val.pasca_operatif.TTD_Perawat_Kecemasan_Pasca && val.pasca_operatif.TTD_Perawat_Kecemasan_Pasca !== '' ? val.pasca_operatif.TTD_Perawat_Kecemasan_Pasca : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_perawat_kecemasan_pascaoperatif: val?.pasca_operatif?.Nama_Perawat_Kecemasan_Pasca ?? '',
        date_kecemasan_pascaoperatif: DateTimeConverter.convertToNormalDate(val?.pasca_operatif?.Tanggal_Perawat_Kecemasan),
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
