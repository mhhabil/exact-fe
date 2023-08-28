import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';
import { string } from 'prop-types';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdateOperativeFairyNursingNotesRequest extends IAppRequest {
  time_out: string;
  time_out_time: string;
  instrument_availability: string;
  availability_instrument_time: string;
  availability_prothesis: string;
  availability_prothesis_time: string;
  start_time: string;
  finished_time: string;
  operation_jenis: string;
  operation_type: string;
  anesthetic_type: string;
  level_consciousness: string;
  other_awareness_level_text: string;
  state_emotion: string;
  cannula_position_1: string;
  cannula_position_2: string;
  cannula_position_3: string;
  cannula_position_4: string;
  cannula_position_5: string;
  cannula_position_6: string;
  cannula_position_7: string;
  cannula_position_8: string;
  position_cannula_other_text: string;
  operating_position_1: string;
  operating_position_2: string;
  operating_position_3: string;
  operating_position_4: string;
  operating_position_5: string;
  position_operation_other_text: string;
  id_position_operating_supervised: string;
  arm_position_1: string;
  arm_position_2: string;
  arm_position_3: string;
  arm_position_4: string;
  arm_position_5: string;
  other_arm_position_text: string;
  position_tool: string;
  position_other_text_tools: string;
  catheter_urine: string;
  skin_prep: string;
  other_skin_prep_text: string;
  discharging_diathermy: string;
  discharging_diathermy_1: string;
  discharging_diathermy_2: string;
  discharging_diathermy_3: string;
  location_electrode: string;
  location_electrode_1: string;
  location_electrode_2: string;
  location_electrode_3: string;
  location_electrode_4: string;
  location_electrode_5: string;
  other_electrode_location_text: string;
  condition_before: string;
  condition_before_1: string;
  condition_before_2: string;
  condition_before_3: string;
  condition_before_other_text: string;
  after_condition: string;
  after_condition_1: string;
  after_condition_2: string;
  after_condition_3: string;
  condition_after_other_text: string;
  code_electrosurgical_unit: string;
  heating_unit: string;
  heater_setting_temperature: string;
  heater_start_time: string;
  heater_finished_time: string;
  heater_code_unit: string;
  unit_cooling: string;
  cooler_setting_temperature: string;
  cooler_start_time: string;
  cooler_finished_time: string;
  cooler_code_unit: string;
  laser_use: string;
  laser_power: string;
  laser_duration: string;
  laser_interval: string;
  laser_number_shoot: string;
  laser_code_model: string;
  laser_date: string;
  id_laser_supervised_1: string;
  id_laser_supervised_2: string;
  id_laser_supervised_3: string;
  use_implant: string;
  implant_factory: string;
  implant_type: string;
  implant_size: string;
  implant_seri: string;
  code_inventory: string;
  url_image_sticker: string;
  name_image_sticker: string;
  type_image_sticker: string;
  size_image_sticker: string;
  irrigation_wound: string;
  irrigation_wound_other_text: string;
  use_liquid_water_text: string;
  use_other_liquid_text: string;
  discharging_fluid: string;
  use_liquid_sodium_text: string;
  balutan_cairan: string;
  spesimen_cairan: string;
  use_fluid_histology_text: string;
  use_fluid_cytology_text: string;
  use_fluid_culture_text: string;
  specimen_liquid_examination: string;
  specimen_type_tissue: string;
  specimen_number_tissue: string;
  specimen_description: string;
  signed_nurse_instruments: string;
  id_nurse_instrument: string;
  signed_nurse_circular: string;
  id_nurse_circular: string;
  jenis_balutan: string;
  jenis_spesimen: string;
  lain_spesimen: string;
  tanggal_kadaluarsa: string;

  // diagnosa intra operatif
  gangguan_pola_nafas_diagnosa_neuromuskular: string;
  gangguan_pola_nafas_diagnosa_sekret: string;
  gangguan_pola_nafas_intervensi_miringkan_kepala: string;
  gangguan_pola_nafas_intervensi_rahang: string;
  gangguan_pola_nafas_intervensi_observasi: string;
  gangguan_pola_nafas_intervensi_ttv: string;
  gangguan_pola_nafas_intervensi_suction: string;
  gangguan_pola_nafas_intervensi_o2: string;
  gangguan_pola_nafas_intervensi_obat: string;
  gangguan_pola_nafas_evaluasi_ttv: string;
  gangguan_pola_nafas_evaluasi_nafas_spontan: string;
  gangguan_pola_nafas_evaluasi_sianosis: string;
  gangguan_pola_nafas_evaluasi_o2: string;
  gangguan_pola_nafas_evaluasi_o2_teks: string;
  gangguan_pola_nafas_evaluasi_observasi: string;
  ttd_perawat_gangguan_pola_nafas: string;
  id_perawat_gangguan_pola_nafas: string;
  tanggal_perawat_gangguan_pola_nafas: string;
  kekurangan_cairan_diagnosa_intake: string;
  kekurangan_cairan_diagnosa_abnormal: string;
  kekurangan_cairan_diagnosa_integritas: string;
  kekurangan_cairan_diagnosa_puasa: string;
  kekurangan_cairan_intervensi_ukur: string;
  kekurangan_cairan_intervensi_ttv: string;
  kekurangan_cairan_intervensi_mual_muntah: string;
  kekurangan_cairan_intervensi_pembalut_luka: string;
  kekurangan_cairan_intervensi_suhu_tubuh: string;
  kekurangan_cairan_evaluasi_ttv: string;
  kekurangan_cairan_evaluasi_input: string;
  kekurangan_cairan_evaluasi_input_teks: string;
  kekurangan_cairan_evaluasi_output: string;
  kekurangan_cairan_evaluasi_output_teks: string;
  kekurangan_cairan_evaluasi_mukosa: string;
  kekurangan_cairan_evaluasi_turgor: string;
  ttd_perawat_kekurangan_cairan: string;
  id_perawat_kekurangan_cairan: string;
  tanggal_perawat_kekurangan_cairan: string;
  tinggi_cedera_diagnosa_pemajanan: string;
  tinggi_cedera_diagnosa_hipoksia: string;
  tinggi_cedera_intervensi_lepas_gigi: string;
  tinggi_cedera_intervensi_periksa_identitas: string;
  tinggi_cedera_intervensi_terkunci: string;
  tinggi_cedera_intervensi_sabuk_pengaman: string;
  tinggi_cedera_intervensi_posisi: string;
  tinggi_cedera_intervensi_elektrikal: string;
  tinggi_cedera_intervensi_plate_diatermi: string;
  tinggi_cedera_intervensi_cairan: string;
  tinggi_cedera_intervensi_jumlah_pemakaian: string;
  tinggi_cedera_evaluasi_posisi: string;
  tinggi_cedera_evaluasi_prosedur: string;
  tinggi_cedera_evaluasi_jumlah: string;
  ttd_perawat_tinggi_cedera: string;
  id_perawat_tinggi_cedera: string;
  tanggal_perawat_tinggi_cedera: string;
  infeksi_diagnosa_trauma: string;
  infeksi_diagnosa_lingkungan: string;
  infeksi_diagnosa_peralatan: string;
  infeksi_intervensi_cuci_tangan: string;
  infeksi_intervensi_disinfeksi: string;
  infeksi_intervensi_kadaluarsa: string;
  infeksi_intervensi_sterilitas: string;
  infeksi_intervensi_penutup: string;
  infeksi_evaluasi_pertahankan: string;
  ttd_perawat_infeksi: string;
  id_perawat_infeksi: string;
  tanggal_perawat_infeksi: string;
  nyeri_diagnosa_luka: string;
  nyeri_diagnosa_pemasangan_alat: string;
  nyeri_intervensi_skala_nyeri: string;
  nyeri_intervensi_teknik_relaksasi: string;
  nyeri_intervensi_posisi_nyaman: string;
  nyeri_intervensi_teknik_distraksi: string;
  nyeri_intervensi_kolaborasi: string;
  nyeri_evaluasi_berkurang: string;
  nyeri_evaluasi_teknik: string;
  ttd_perawat_nyeri: string;
  id_perawat_nyeri: string;
  tanggal_perawat_nyeri: string;
  penglihatan_diagnosa_penurunan: string;
  penglihatan_diagnosa_perlindungan: string;
  penglihatan_intervensi_ketajaman: string;
  penglihatan_intervensi_orientasi: string;
  penglihatan_intervensi_alternative: string;
  penglihatan_intervensi_cegah_sinar: string;
  penglihatan_intervensi_optimal_lingkungan: string;
  penglihatan_evaluasi_kemampuan: string;
  penglihatan_evaluasi_perubahan: string;
  ttd_perawat_penglihatan: string;
  id_perawat_penglihatan: string;
  tanggal_perawat_penglihatan: string;
  kecemasan_diagnosa_prosedur: string;
  kecemasan_diagnosa_kurang_pengetahuan: string;
  kecemasan_intervensi_gambaran: string;
  kecemasan_intervensi_beri_waktu: string;
  kecemasan_intervensi_informasi: string;
  kecemasan_intervensi_kesempatan: string;
  kecemasan_evaluasi_berkurang: string;
  kecemasan_evaluasi_tenang: string;
  ttd_perawat_kecemasan: string;
  id_perawat_kecemasan: string;
  tanggal_perawat_kecemasan: string;

  // diagnosa pasca operatif
  nyeri_diagnosa_luka_pasca: string;
  nyeri_diagnosa_gaangguan_kulit: string;
  nyeri_intervensi_kaji_lokasi: string;
  nyeri_intervensi_kaji_ttv: string;
  nyeri_intervensi_teknik_relaksaksi: string;
  nyeri_intervensi_posisi_nyaman_pasca: string;
  nyeri_intervensi_teknik_distraksi_pasca: string;
  nyeri_intervensi_pemeberian_analgesi: string;
  nyeri_evaluasi_ttv: string;
  nyeri_evaluasi_nyeri_terkontrol: string;
  nyeri_evaluasi_nyeri_berkurang: string;
  nyeri_evaluasi_diobservasi: string;
  ttd_perawat_nyeri_pasca: string;
  id_perawat_nyeri_pasca: string;
  tanggal_perawat_nyeri_pasca: string;
  infeksi_diagnosa_trauma_pasca: string;
  infeksi_diagnosa_lingkungan_pasca: string;
  infeksi_diagnosa_peralatan_pasca: string;
  infeksi_intervensi_cuci_tangan_pasca: string;
  infeksi_intervensi_disinfeksi_pasca: string;
  infeksi_intervensi_kadaluarsa_pasca: string;
  infeksi_intervensi_sterilitas_pasca: string;
  infeksi_intervensi_penutup_pasca: string;
  infeksi_evaluasi_pertahankan_pasca: string;
  ttd_perawat_infeksi_pasca: string;
  id_perawat_infeksi_pasca: string;
  tanggal_perawat_infeksi_pasca: string;
  perubahan_diagnosa_suhu: string;
  perubahan_diagnosa_obat: string;
  perubahan_diagnosa_dehidrasi: string;
  perubahan_intervensi_catatan_suhu: string;
  perubahan_intervensi_kaji_suhu: string;
  perubahan_intervensi_kolaborasi: string;
  perubahan_evaluasi_pasien_dingin: string;
  perubahan_evaluasi_pasien_menggigil: string;
  perubahan_evaluasi_suhu_ruangan: string;
  evaluasi_suhu_ruangan_teks: string;
  ttd_perawat_perubahan: string;
  id_perawat_perubahan: string;
  tanggal_perawat_perubahan: string;
  kecemasan_pasca_operatif_diagnosa_perawatan_luka: string;
  kecemasan_pasca_operatif_intervensi_gambar_luka: string;
  kecemasan_pasca_operatif_intervensi_waktu_perasaan: string
  kecemasan_pasca_operatif_intervensi_beri_informasi: string;
  kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan: string;
  kecemasan_pasca_operatif_intervensi_perasaan_klien: string;
  kecemasan_pasca_operatif_intervensi_kesempatan_bertanya: string;
  kecemasan_pasca_operatif_intervensi_nomor_pasien: string;
  kecemasan_pasca_operatif_evaluasi_kecemasan: string;
  kecemasan_pasca_operatif_evaluasi_tenang_selama: string;
  ttd_perawat_kecemasan_pasca: string;
  id_perawat_kecemasan_pasca: string;
  tanggal_perawat_kecemasan_pasca: string;

  // catatan keperawatan pasca operasi
  rawat_pasca: string;
  transport: string;
  time_out_waktu_ckpo: string;
  keadaan_umum: string;
  tingkat_kesadaran_ckpo: string;
  jalan_nafas: string;
  pernafasan: string;
  terapi_oksigen: string;
  terapi_oksigen_lain_teks: string;
  kulit_datang_kering: string;
  kulit_datang_lembab: string;
  kulit_datang_merah_muda: string;
  kulit_datang_biru: string;
  kulit_datang_hangat: string;
  kulit_datang_dingin: string;
  kulit_datang_lain: string;
  kulit_datang_lain_teks: string;
  kulit_keluar_kering: string;
  kulit_keluar_lembab: string;
  kulit_keluar_merah_muda: string;
  kulit_keluar_biru: string;
  kulit_keluar_hangat: string;
  kulit_keluar_dingin: string;
  kulit_keluar_lain: string;
  kulit_keluar_lain_teks: string;
  sirkulasi: string;
  posisi_pasien: string;
  posisi_pasien_lain_teks: string;
  la_ga: string;
  skor: string;
  aldrette_aktivitas: string;
  aldrette_pernafasan: string;
  aldrette_sirkulasi: string;
  aldrette_kesadaran: string;
  aldrette_saturasi: string;
  steward_pergerakan: string;
  steward_pernafasan: string;
  steward_kesadaran: string;
  tanggal_pasca_operasi: string;
  skala_anestesi: string;
  grid_chart_img: string;
  grid_chart_data: string;
  time_nadi_teratur_masuk: string;
  time_nadi_teratur_keluar: string;
  time_nadi_tidakteratur_masuk: string;
  time_nadi_tidakteratur_keluar: string;
  time_nadi_lemah_masuk: string;
  time_nadi_lemah_keluar: string;
  time_nadi_kuat_masuk: string;
  time_nadi_kuat_keluar: string;
  time_napas_teratur_masuk: string;
  time_napas_teratur_keluar: string;
  time_napas_tidakteratur_masuk: string;
  time_napas_tidakteratur_keluar: string;
  time_napas_dangkal_masuk: string;
  time_napas_dangkal_keluar: string;
  time_napas_dalam_masuk: string;
  time_napas_dalam_keluar: string;
  time_napas_sukar_masuk: string;
  time_napas_sukar_keluar: string;
  time_napas_terapi_masuk: string;
  time_napas_terapi_keluar: string;
  time_spo_masuk: string;
  time_spo_keluar: string;
  time_masalah_aktual: string[];
  masalah_aktual_teks: string[];
  masalah_aktual_intruksi_teks: string[];
  masalah_aktual_tindakan_teks: string[];
  time_urine_satu: string;
  time_urine_dua: string;
  time_urine_tiga: string;
  time_urine_empat: string;
  time_urine_total: string;
  time_pemberitahu_ruang: string;
  time_perawat_ruang: string;
  id_perawat_dokter: string;
  ttd_perawat: string;
  id_perawat: string;
}

export class UpdateOperativeFairyNursingNotesRequest extends AppRequest {
  time_out: string;
  time_out_time: string;
  instrument_availability: string;
  availability_instrument_time: string;
  availability_prothesis: string;
  availability_prothesis_time: string;
  start_time: string;
  finished_time: string;
  operation_jenis: string;
  operation_type: string;
  anesthetic_type: string;
  level_consciousness: string;
  other_awareness_level_text: string;
  state_emotion: string;
  cannula_position_1: string;
  cannula_position_2: string;
  cannula_position_3: string;
  cannula_position_4: string;
  cannula_position_5: string;
  cannula_position_6: string;
  cannula_position_7: string;
  cannula_position_8: string;
  position_cannula_other_text: string;
  operating_position_1: string;
  operating_position_2: string;
  operating_position_3: string;
  operating_position_4: string;
  operating_position_5: string;
  position_operation_other_text: string;
  id_position_operating_supervised: string;
  arm_position_1: string;
  arm_position_2: string;
  arm_position_3: string;
  arm_position_4: string;
  arm_position_5: string;
  other_arm_position_text: string;
  position_tool: string;
  position_other_text_tools: string;
  catheter_urine: string;
  skin_prep: string;
  other_skin_prep_text: string;
  discharging_diathermy: string;
  discharging_diathermy_1: string;
  discharging_diathermy_2: string;
  discharging_diathermy_3: string;
  location_electrode: string;
  location_electrode_1: string;
  location_electrode_2: string;
  location_electrode_3: string;
  location_electrode_4: string;
  location_electrode_5: string;
  other_electrode_location_text: string;
  condition_before: string;
  condition_before_1: string;
  condition_before_2: string;
  condition_before_3: string;
  condition_before_other_text: string;
  after_condition: string;
  after_condition_1: string;
  after_condition_2: string;
  after_condition_3: string;
  condition_after_other_text: string;
  code_electrosurgical_unit: string;
  heating_unit: string;
  heater_setting_temperature: string;
  heater_start_time: string;
  heater_finished_time: string;
  heater_code_unit: string;
  unit_cooling: string;
  cooler_setting_temperature: string;
  cooler_start_time: string;
  cooler_finished_time: string;
  cooler_code_unit: string;
  laser_use: string;
  laser_power: string;
  laser_duration: string;
  laser_interval: string;
  laser_number_shoot: string;
  laser_code_model: string;
  laser_date: string;
  id_laser_supervised_1: string;
  id_laser_supervised_2: string;
  id_laser_supervised_3: string;
  use_implant: string;
  implant_factory: string;
  implant_type: string;
  implant_size: string;
  implant_seri: string;
  code_inventory: string;
  url_image_sticker: string;
  name_image_sticker: string;
  type_image_sticker: string;
  size_image_sticker: string;
  irrigation_wound: string;
  irrigation_wound_other_text: string;
  use_liquid_water_text: string;
  use_other_liquid_text: string;
  discharging_fluid: string;
  use_liquid_sodium_text: string;
  balutan_cairan: string;
  spesimen_cairan: string;
  use_fluid_histology_text: string;
  use_fluid_cytology_text: string;
  use_fluid_culture_text: string;
  specimen_liquid_examination: string;
  specimen_type_tissue: string;
  specimen_number_tissue: string;
  specimen_description: string;
  signed_nurse_instruments: string;
  id_nurse_instrument: string;
  signed_nurse_circular: string;
  id_nurse_circular: string;
  jenis_balutan: string;
  jenis_spesimen: string;
  lain_spesimen: string;
  tanggal_kadaluarsa: string;

  // diagnosa  intra operatif
  gangguan_pola_nafas_diagnosa_neuromuskular: string;
  gangguan_pola_nafas_diagnosa_sekret: string;
  gangguan_pola_nafas_intervensi_miringkan_kepala: string;
  gangguan_pola_nafas_intervensi_rahang: string;
  gangguan_pola_nafas_intervensi_observasi: string;
  gangguan_pola_nafas_intervensi_ttv: string;
  gangguan_pola_nafas_intervensi_suction: string;
  gangguan_pola_nafas_intervensi_o2: string;
  gangguan_pola_nafas_intervensi_obat: string;
  gangguan_pola_nafas_evaluasi_ttv: string;
  gangguan_pola_nafas_evaluasi_nafas_spontan: string;
  gangguan_pola_nafas_evaluasi_sianosis: string;
  gangguan_pola_nafas_evaluasi_o2: string;
  gangguan_pola_nafas_evaluasi_o2_teks: string;
  gangguan_pola_nafas_evaluasi_observasi: string;
  ttd_perawat_gangguan_pola_nafas: string;
  id_perawat_gangguan_pola_nafas: string;
  tanggal_perawat_gangguan_pola_nafas: string;
  kekurangan_cairan_diagnosa_intake: string;
  kekurangan_cairan_diagnosa_abnormal: string;
  kekurangan_cairan_diagnosa_integritas: string;
  kekurangan_cairan_diagnosa_puasa: string;
  kekurangan_cairan_intervensi_ukur: string;
  kekurangan_cairan_intervensi_ttv: string;
  kekurangan_cairan_intervensi_mual_muntah: string;
  kekurangan_cairan_intervensi_pembalut_luka: string;
  kekurangan_cairan_intervensi_suhu_tubuh: string;
  kekurangan_cairan_evaluasi_ttv: string;
  kekurangan_cairan_evaluasi_input: string;
  kekurangan_cairan_evaluasi_input_teks: string;
  kekurangan_cairan_evaluasi_output: string;
  kekurangan_cairan_evaluasi_output_teks: string;
  kekurangan_cairan_evaluasi_mukosa: string;
  kekurangan_cairan_evaluasi_turgor: string;
  ttd_perawat_kekurangan_cairan: string;
  id_perawat_kekurangan_cairan: string;
  tanggal_perawat_kekurangan_cairan: string;
  tinggi_cedera_diagnosa_pemajanan: string;
  tinggi_cedera_diagnosa_hipoksia: string;
  tinggi_cedera_intervensi_lepas_gigi: string;
  tinggi_cedera_intervensi_periksa_identitas: string;
  tinggi_cedera_intervensi_terkunci: string;
  tinggi_cedera_intervensi_sabuk_pengaman: string;
  tinggi_cedera_intervensi_posisi: string;
  tinggi_cedera_intervensi_elektrikal: string;
  tinggi_cedera_intervensi_plate_diatermi: string;
  tinggi_cedera_intervensi_cairan: string;
  tinggi_cedera_intervensi_jumlah_pemakaian: string;
  tinggi_cedera_evaluasi_posisi: string;
  tinggi_cedera_evaluasi_prosedur: string;
  tinggi_cedera_evaluasi_jumlah: string;
  ttd_perawat_tinggi_cedera: string;
  id_perawat_tinggi_cedera: string;
  tanggal_perawat_tinggi_cedera: string;
  infeksi_diagnosa_trauma: string;
  infeksi_diagnosa_lingkungan: string;
  infeksi_diagnosa_peralatan: string;
  infeksi_intervensi_cuci_tangan: string;
  infeksi_intervensi_disinfeksi: string;
  infeksi_intervensi_kadaluarsa: string;
  infeksi_intervensi_sterilitas: string;
  infeksi_intervensi_penutup: string;
  infeksi_evaluasi_pertahankan: string;
  ttd_perawat_infeksi: string;
  id_perawat_infeksi: string;
  tanggal_perawat_infeksi: string;
  nyeri_diagnosa_luka: string;
  nyeri_diagnosa_pemasangan_alat: string;
  nyeri_intervensi_skala_nyeri: string;
  nyeri_intervensi_teknik_relaksasi: string;
  nyeri_intervensi_posisi_nyaman: string;
  nyeri_intervensi_teknik_distraksi: string;
  nyeri_intervensi_kolaborasi: string;
  nyeri_evaluasi_berkurang: string;
  nyeri_evaluasi_teknik: string;
  ttd_perawat_nyeri: string;
  id_perawat_nyeri: string;
  tanggal_perawat_nyeri: string;
  penglihatan_diagnosa_penurunan: string;
  penglihatan_diagnosa_perlindungan: string;
  penglihatan_intervensi_ketajaman: string;
  penglihatan_intervensi_orientasi: string;
  penglihatan_intervensi_alternative: string;
  penglihatan_intervensi_cegah_sinar: string;
  penglihatan_intervensi_optimal_lingkungan: string;
  penglihatan_evaluasi_kemampuan: string;
  penglihatan_evaluasi_perubahan: string;
  ttd_perawat_penglihatan: string;
  id_perawat_penglihatan: string;
  tanggal_perawat_penglihatan: string;
  kecemasan_diagnosa_prosedur: string;
  kecemasan_diagnosa_kurang_pengetahuan: string;
  kecemasan_intervensi_gambaran: string;
  kecemasan_intervensi_beri_waktu: string;
  kecemasan_intervensi_informasi: string;
  kecemasan_intervensi_kesempatan: string;
  kecemasan_evaluasi_berkurang: string;
  kecemasan_evaluasi_tenang: string;
  ttd_perawat_kecemasan: string;
  id_perawat_kecemasan: string;
  tanggal_perawat_kecemasan: string;

  // diagnosa pasca operatif
  nyeri_diagnosa_luka_pasca: string;
  nyeri_diagnosa_gaangguan_kulit: string;
  nyeri_intervensi_kaji_lokasi: string;
  nyeri_intervensi_kaji_ttv: string;
  nyeri_intervensi_teknik_relaksaksi: string;
  nyeri_intervensi_posisi_nyaman_pasca: string;
  nyeri_intervensi_teknik_distraksi_pasca: string;
  nyeri_intervensi_pemeberian_analgesi: string;
  nyeri_evaluasi_ttv: string;
  nyeri_evaluasi_nyeri_terkontrol: string;
  nyeri_evaluasi_nyeri_berkurang: string;
  nyeri_evaluasi_diobservasi: string;
  ttd_perawat_nyeri_pasca: string;
  id_perawat_nyeri_pasca: string;
  tanggal_perawat_nyeri_pasca: string;
  infeksi_diagnosa_trauma_pasca: string;
  infeksi_diagnosa_lingkungan_pasca: string;
  infeksi_diagnosa_peralatan_pasca: string;
  infeksi_intervensi_cuci_tangan_pasca: string;
  infeksi_intervensi_disinfeksi_pasca: string;
  infeksi_intervensi_kadaluarsa_pasca: string;
  infeksi_intervensi_sterilitas_pasca: string;
  infeksi_intervensi_penutup_pasca: string;
  infeksi_evaluasi_pertahankan_pasca: string;
  ttd_perawat_infeksi_pasca: string;
  id_perawat_infeksi_pasca: string;
  tanggal_perawat_infeksi_pasca: string;
  perubahan_diagnosa_suhu: string;
  perubahan_diagnosa_obat: string;
  perubahan_diagnosa_dehidrasi: string;
  perubahan_intervensi_catatan_suhu: string;
  perubahan_intervensi_kaji_suhu: string;
  perubahan_intervensi_kolaborasi: string;
  perubahan_evaluasi_pasien_dingin: string;
  perubahan_evaluasi_pasien_menggigil: string;
  perubahan_evaluasi_suhu_ruangan: string;
  evaluasi_suhu_ruangan_teks: string;
  ttd_perawat_perubahan: string;
  id_perawat_perubahan: string;
  tanggal_perawat_perubahan: string;
  kecemasan_pasca_operatif_diagnosa_perawatan_luka: string;
  kecemasan_pasca_operatif_intervensi_gambar_luka: string;
  kecemasan_pasca_operatif_intervensi_waktu_perasaan: string
  kecemasan_pasca_operatif_intervensi_beri_informasi: string;
  kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan: string;
  kecemasan_pasca_operatif_intervensi_perasaan_klien: string;
  kecemasan_pasca_operatif_intervensi_kesempatan_bertanya: string;
  kecemasan_pasca_operatif_intervensi_nomor_pasien: string;
  kecemasan_pasca_operatif_evaluasi_kecemasan: string;
  kecemasan_pasca_operatif_evaluasi_tenang_selama: string;
  ttd_perawat_kecemasan_pasca: string;
  id_perawat_kecemasan_pasca: string;
  tanggal_perawat_kecemasan_pasca: string;

   // catatan keperawatan pasca operasi
   rawat_pasca: string;
   transport: string;
   time_out_waktu_ckpo: string;
   keadaan_umum: string;
   tingkat_kesadaran_ckpo: string;
   jalan_nafas: string;
   pernafasan: string;
   terapi_oksigen: string;
   terapi_oksigen_lain_teks: string;
   kulit_datang_kering: string;
   kulit_datang_lembab: string;
   kulit_datang_merah_muda: string;
   kulit_datang_biru: string;
   kulit_datang_hangat: string;
   kulit_datang_dingin: string;
   kulit_datang_lain: string;
   kulit_datang_lain_teks: string;
   kulit_keluar_kering: string;
   kulit_keluar_lembab: string;
   kulit_keluar_merah_muda: string;
   kulit_keluar_biru: string;
   kulit_keluar_hangat: string;
   kulit_keluar_dingin: string;
   kulit_keluar_lain: string;
   kulit_keluar_lain_teks: string;
   sirkulasi: string;
   posisi_pasien: string;
   posisi_pasien_lain_teks: string;
   la_ga: string;
   skor: string;
   aldrette_aktivitas: string;
   aldrette_pernafasan: string;
   aldrette_sirkulasi: string;
   aldrette_kesadaran: string;
   aldrette_saturasi: string;
   steward_pergerakan: string;
   steward_pernafasan: string;
   steward_kesadaran: string;
   tanggal_pasca_operasi: string;
   skala_anestesi: string;
   grid_chart_img: string;
   grid_chart_data: string;
   time_nadi_teratur_masuk: string;
   time_nadi_teratur_keluar: string;
   time_nadi_tidakteratur_masuk: string;
   time_nadi_tidakteratur_keluar: string;
   time_nadi_lemah_masuk: string;
   time_nadi_lemah_keluar: string;
   time_nadi_kuat_masuk: string;
   time_nadi_kuat_keluar: string;
   time_napas_teratur_masuk: string;
   time_napas_teratur_keluar: string;
   time_napas_tidakteratur_masuk: string;
   time_napas_tidakteratur_keluar: string;
   time_napas_dangkal_masuk: string;
   time_napas_dangkal_keluar: string;
   time_napas_dalam_masuk: string;
   time_napas_dalam_keluar: string;
   time_napas_sukar_masuk: string;
   time_napas_sukar_keluar: string;
   time_napas_terapi_masuk: string;
   time_napas_terapi_keluar: string;
   time_spo_masuk: string;
   time_spo_keluar: string;
   time_masalah_aktual: string[];
   masalah_aktual_teks: string[];
   masalah_aktual_intruksi_teks: string[];
   masalah_aktual_tindakan_teks: string[];
   time_urine_satu: string;
   time_urine_dua: string;
   time_urine_tiga: string;
   time_urine_empat: string;
   time_urine_total: string;
   time_pemberitahu_ruang: string;
   time_perawat_ruang: string;
   id_perawat_dokter: string;
   ttd_perawat: string;
   id_perawat: string;
   constructor(request: IUpdateOperativeFairyNursingNotesRequest) {
     super(request);
     this.time_out = request.time_out;
     this.time_out_time = request.time_out_time;
     this.instrument_availability = request.instrument_availability;
     this.availability_instrument_time = request.availability_instrument_time;
     this.availability_prothesis = request.availability_prothesis;
     this.availability_prothesis_time = request.availability_prothesis_time;
     this.start_time = request.start_time;
     this.finished_time = request.finished_time;
     this.operation_jenis = request.operation_jenis;
     this.operation_type = request.operation_type;
     this.anesthetic_type = request.anesthetic_type;
     this.level_consciousness = request.level_consciousness;
     this.other_awareness_level_text = request.other_awareness_level_text;
     this.state_emotion = request.state_emotion;
     this.cannula_position_1 = request.cannula_position_1;
     this.cannula_position_2 = request.cannula_position_2;
     this.cannula_position_3 = request.cannula_position_3;
     this.cannula_position_4 = request.cannula_position_4;
     this.cannula_position_5 = request.cannula_position_5;
     this.cannula_position_6 = request.cannula_position_6;
     this.cannula_position_7 = request.cannula_position_7;
     this.cannula_position_8 = request.cannula_position_8;
     this.position_cannula_other_text = request.position_cannula_other_text;
     this.operating_position_1 = request.operating_position_1;
     this.operating_position_2 = request.operating_position_2;
     this.operating_position_3 = request.operating_position_3;
     this.operating_position_4 = request.operating_position_4;
     this.operating_position_5 = request.operating_position_5;
     this.position_operation_other_text = request.position_operation_other_text;
     this.id_position_operating_supervised = request.id_position_operating_supervised;
     this.arm_position_1 = request.arm_position_1;
     this.arm_position_2 = request.arm_position_2;
     this.arm_position_3 = request.arm_position_3;
     this.arm_position_4 = request.arm_position_4;
     this.arm_position_5 = request.arm_position_5;
     this.other_arm_position_text = request.other_arm_position_text;
     this.position_tool = request.position_tool;
     this.position_other_text_tools = request.position_other_text_tools;
     this.catheter_urine = request.catheter_urine;
     this.skin_prep = request.skin_prep;
     this.other_skin_prep_text = request.other_skin_prep_text;
     this.discharging_diathermy = request.discharging_diathermy;
     this.discharging_diathermy_1 = request.discharging_diathermy_1;
     this.discharging_diathermy_2 = request.discharging_diathermy_2;
     this.discharging_diathermy_3 = request.discharging_diathermy_3;
     this.location_electrode = request.location_electrode;
     this.location_electrode_1 = request.location_electrode_1;
     this.location_electrode_2 = request.location_electrode_2;
     this.location_electrode_3 = request.location_electrode_3;
     this.location_electrode_4 = request.location_electrode_4;
     this.location_electrode_5 = request.location_electrode_5;
     this.other_electrode_location_text = request.other_electrode_location_text;
     this.condition_before = request.condition_before;
     this.condition_before_1 = request.condition_before_1;
     this.condition_before_2 = request.condition_before_2;
     this.condition_before_3 = request.condition_before_3;
     this.condition_before_other_text = request.condition_before_other_text;
     this.after_condition = request.after_condition;
     this.after_condition_1 = request.after_condition_1;
     this.after_condition_2 = request.after_condition_2;
     this.after_condition_3 = request.after_condition_3;
     this.condition_after_other_text = request.condition_after_other_text;
     this.code_electrosurgical_unit = request.code_electrosurgical_unit;
     this.heating_unit = request.heating_unit;
     this.heater_setting_temperature = request.heater_setting_temperature;
     this.heater_start_time = request.heater_start_time;
     this.heater_finished_time = request.heater_finished_time;
     this.heater_code_unit = request.heater_code_unit;
     this.unit_cooling = request.unit_cooling;
     this.cooler_setting_temperature = request.cooler_setting_temperature;
     this.cooler_start_time = request.cooler_start_time;
     this.cooler_finished_time = request.cooler_finished_time;
     this.cooler_code_unit = request.cooler_code_unit;
     this.laser_use = request.laser_use;
     this.laser_power = request.laser_power;
     this.laser_duration = request.laser_duration;
     this.laser_interval = request.laser_interval;
     this.laser_number_shoot = request.laser_number_shoot;
     this.laser_code_model = request.laser_code_model;
     this.laser_date = request.laser_date;
     this.id_laser_supervised_1 = request.id_laser_supervised_1;
     this.id_laser_supervised_2 = request.id_laser_supervised_2;
     this.id_laser_supervised_3 = request.id_laser_supervised_3;
     this.use_implant = request.use_implant;
     this.implant_factory = request.implant_factory;
     this.implant_type = request.implant_type;
     this.implant_size = request.implant_size;
     this.implant_seri = request.implant_seri;
     this.code_inventory = request.code_inventory;
     this.url_image_sticker = request.url_image_sticker;
     this.name_image_sticker = request.name_image_sticker;
     this.type_image_sticker = request.type_image_sticker;
     this.size_image_sticker = request.size_image_sticker;
     this.irrigation_wound = request.irrigation_wound;
     this.irrigation_wound_other_text = request.irrigation_wound_other_text;
     this.use_liquid_water_text = request.use_liquid_water_text;
     this.use_other_liquid_text = request.use_other_liquid_text;
     this.discharging_fluid = request.discharging_fluid;
     this.use_liquid_sodium_text = request.use_liquid_sodium_text;
     this.balutan_cairan = request.balutan_cairan;
     this.spesimen_cairan = request.spesimen_cairan;
     this.use_fluid_histology_text = request.use_fluid_histology_text;
     this.use_fluid_cytology_text = request.use_fluid_cytology_text;
     this.use_fluid_culture_text = request.use_fluid_culture_text;
     this.specimen_liquid_examination = request.specimen_liquid_examination;
     this.specimen_type_tissue = request.specimen_type_tissue;
     this.specimen_number_tissue = request.specimen_number_tissue;
     this.specimen_description = request.specimen_description;
     this.signed_nurse_instruments = request.signed_nurse_instruments;
     this.id_nurse_instrument = request.id_nurse_instrument;
     this.signed_nurse_circular = request.signed_nurse_circular;
     this.id_nurse_circular = request.id_nurse_circular;
     this.jenis_balutan = request.jenis_balutan;
     this.jenis_spesimen = request.jenis_spesimen;
     this.lain_spesimen = request.lain_spesimen;
     this.tanggal_kadaluarsa = request.tanggal_kadaluarsa;

     // diagnosa intra operatif
     this.gangguan_pola_nafas_diagnosa_neuromuskular = request.gangguan_pola_nafas_diagnosa_neuromuskular;
     this.gangguan_pola_nafas_diagnosa_sekret = request.gangguan_pola_nafas_diagnosa_sekret;
     this.gangguan_pola_nafas_intervensi_miringkan_kepala = request.gangguan_pola_nafas_intervensi_miringkan_kepala;
     this.gangguan_pola_nafas_intervensi_rahang = request.gangguan_pola_nafas_intervensi_rahang;
     this.gangguan_pola_nafas_intervensi_observasi = request.gangguan_pola_nafas_intervensi_observasi;
     this.gangguan_pola_nafas_intervensi_ttv = request.gangguan_pola_nafas_intervensi_ttv;
     this.gangguan_pola_nafas_intervensi_suction = request.gangguan_pola_nafas_intervensi_suction;
     this.gangguan_pola_nafas_intervensi_o2 = request.gangguan_pola_nafas_intervensi_o2;
     this.gangguan_pola_nafas_intervensi_obat = request.gangguan_pola_nafas_intervensi_obat;
     this.gangguan_pola_nafas_evaluasi_ttv = request.gangguan_pola_nafas_evaluasi_ttv;
     this.gangguan_pola_nafas_evaluasi_nafas_spontan = request.gangguan_pola_nafas_evaluasi_nafas_spontan;
     this.gangguan_pola_nafas_evaluasi_sianosis = request.gangguan_pola_nafas_evaluasi_sianosis;
     this.gangguan_pola_nafas_evaluasi_o2 = request.gangguan_pola_nafas_evaluasi_o2;
     this.gangguan_pola_nafas_evaluasi_o2_teks = request.gangguan_pola_nafas_evaluasi_o2_teks;
     this.gangguan_pola_nafas_evaluasi_observasi = request.gangguan_pola_nafas_evaluasi_observasi;
     this.ttd_perawat_gangguan_pola_nafas = request.ttd_perawat_gangguan_pola_nafas
     this.id_perawat_gangguan_pola_nafas = request.id_perawat_gangguan_pola_nafas
     this.tanggal_perawat_gangguan_pola_nafas = request.tanggal_perawat_gangguan_pola_nafas;
     this.kekurangan_cairan_diagnosa_intake = request.kekurangan_cairan_diagnosa_intake;
     this.kekurangan_cairan_diagnosa_abnormal = request.kekurangan_cairan_diagnosa_abnormal;
     this.kekurangan_cairan_diagnosa_integritas = request.kekurangan_cairan_diagnosa_integritas;
     this.kekurangan_cairan_diagnosa_puasa = request.kekurangan_cairan_diagnosa_puasa;
     this.kekurangan_cairan_intervensi_ukur = request.kekurangan_cairan_intervensi_ukur;
     this.kekurangan_cairan_intervensi_ttv = request.kekurangan_cairan_intervensi_ttv;
     this.kekurangan_cairan_intervensi_mual_muntah = request.kekurangan_cairan_intervensi_mual_muntah
     this.kekurangan_cairan_intervensi_pembalut_luka = request.kekurangan_cairan_intervensi_pembalut_luka;
     this.kekurangan_cairan_intervensi_suhu_tubuh = request.kekurangan_cairan_intervensi_suhu_tubuh;
     this.kekurangan_cairan_evaluasi_ttv = request.kekurangan_cairan_evaluasi_ttv;
     this.kekurangan_cairan_evaluasi_input = request.kekurangan_cairan_evaluasi_input;
     this.kekurangan_cairan_evaluasi_input_teks = request.kekurangan_cairan_evaluasi_input_teks;
     this.kekurangan_cairan_evaluasi_output = request.kekurangan_cairan_evaluasi_output;
     this.kekurangan_cairan_evaluasi_output_teks = request.kekurangan_cairan_evaluasi_output_teks;
     this.kekurangan_cairan_evaluasi_mukosa = request.kekurangan_cairan_evaluasi_mukosa;
     this.kekurangan_cairan_evaluasi_turgor = request.kekurangan_cairan_evaluasi_turgor;
     this.ttd_perawat_kekurangan_cairan = request.ttd_perawat_kekurangan_cairan;
     this.id_perawat_kekurangan_cairan = request.id_perawat_kekurangan_cairan;
     this.tanggal_perawat_kekurangan_cairan = request.tanggal_perawat_kekurangan_cairan;
     this.tinggi_cedera_diagnosa_pemajanan = request.tinggi_cedera_diagnosa_pemajanan;
     this.tinggi_cedera_diagnosa_hipoksia = request.tinggi_cedera_diagnosa_hipoksia;
     this.tinggi_cedera_intervensi_lepas_gigi = request.tinggi_cedera_intervensi_lepas_gigi;
     this.tinggi_cedera_intervensi_periksa_identitas = request.tinggi_cedera_intervensi_periksa_identitas;
     this.tinggi_cedera_intervensi_terkunci = request.tinggi_cedera_intervensi_terkunci;
     this.tinggi_cedera_intervensi_sabuk_pengaman = request.tinggi_cedera_intervensi_sabuk_pengaman;
     this.tinggi_cedera_intervensi_posisi = request.tinggi_cedera_intervensi_posisi;
     this.tinggi_cedera_intervensi_elektrikal = request.tinggi_cedera_intervensi_elektrikal;
     this.tinggi_cedera_intervensi_plate_diatermi = request.tinggi_cedera_intervensi_plate_diatermi;
     this.tinggi_cedera_intervensi_cairan = request.tinggi_cedera_intervensi_cairan;
     this.tinggi_cedera_intervensi_jumlah_pemakaian = request.tinggi_cedera_intervensi_jumlah_pemakaian;
     this.tinggi_cedera_evaluasi_posisi = request.tinggi_cedera_evaluasi_posisi;
     this.tinggi_cedera_evaluasi_prosedur = request.tinggi_cedera_evaluasi_prosedur;
     this.tinggi_cedera_evaluasi_jumlah = request.tinggi_cedera_evaluasi_jumlah;
     this.ttd_perawat_tinggi_cedera = request.ttd_perawat_tinggi_cedera;
     this.id_perawat_tinggi_cedera = request.id_perawat_tinggi_cedera;
     this.tanggal_perawat_tinggi_cedera = request.tanggal_perawat_tinggi_cedera;
     this.infeksi_diagnosa_trauma = request.infeksi_diagnosa_trauma;
     this.infeksi_diagnosa_lingkungan = request.infeksi_diagnosa_lingkungan;
     this.infeksi_diagnosa_peralatan = request.infeksi_diagnosa_peralatan;
     this.infeksi_intervensi_cuci_tangan = request.infeksi_intervensi_cuci_tangan;
     this.infeksi_intervensi_disinfeksi = request.infeksi_intervensi_disinfeksi;
     this.infeksi_intervensi_kadaluarsa = request.infeksi_intervensi_kadaluarsa;
     this.infeksi_intervensi_sterilitas = request.infeksi_intervensi_sterilitas;
     this.infeksi_intervensi_penutup = request.infeksi_intervensi_penutup;
     this.infeksi_evaluasi_pertahankan = request.infeksi_evaluasi_pertahankan;
     this.ttd_perawat_infeksi = request.ttd_perawat_infeksi;
     this.id_perawat_infeksi = request.id_perawat_infeksi;
     this.tanggal_perawat_infeksi = request.tanggal_perawat_infeksi;
     this.nyeri_diagnosa_luka = request.nyeri_diagnosa_luka;
     this.nyeri_diagnosa_pemasangan_alat = request.nyeri_diagnosa_pemasangan_alat;
     this.nyeri_intervensi_skala_nyeri = request.nyeri_intervensi_skala_nyeri;
     this.nyeri_intervensi_teknik_relaksasi = request.nyeri_intervensi_teknik_relaksasi;
     this.nyeri_intervensi_posisi_nyaman = request.nyeri_intervensi_posisi_nyaman;
     this.nyeri_intervensi_teknik_distraksi = request.nyeri_intervensi_teknik_distraksi;
     this.nyeri_intervensi_kolaborasi = request.nyeri_intervensi_kolaborasi;
     this.nyeri_evaluasi_berkurang = request.nyeri_evaluasi_berkurang;
     this.nyeri_evaluasi_teknik = request.nyeri_evaluasi_teknik;
     this.ttd_perawat_nyeri = request.ttd_perawat_nyeri;
     this.id_perawat_nyeri = request.id_perawat_nyeri;
     this.tanggal_perawat_nyeri = request.tanggal_perawat_nyeri;
     this.penglihatan_diagnosa_penurunan = request.penglihatan_diagnosa_penurunan;
     this.penglihatan_diagnosa_perlindungan = request.penglihatan_diagnosa_perlindungan;
     this.penglihatan_intervensi_ketajaman = request.penglihatan_intervensi_ketajaman;
     this.penglihatan_intervensi_orientasi = request.penglihatan_intervensi_orientasi;
     this.penglihatan_intervensi_alternative = request.penglihatan_intervensi_alternative;
     this.penglihatan_intervensi_cegah_sinar = request.penglihatan_intervensi_cegah_sinar;
     this.penglihatan_intervensi_optimal_lingkungan = request.penglihatan_intervensi_optimal_lingkungan;
     this.penglihatan_evaluasi_kemampuan = request.penglihatan_evaluasi_kemampuan;
     this.penglihatan_evaluasi_perubahan = request.penglihatan_evaluasi_perubahan;
     this.ttd_perawat_penglihatan = request.ttd_perawat_penglihatan;
     this.id_perawat_penglihatan = request.id_perawat_penglihatan;
     this.tanggal_perawat_penglihatan = request.tanggal_perawat_penglihatan;
     this.kecemasan_diagnosa_prosedur = request.kecemasan_diagnosa_prosedur;
     this.kecemasan_diagnosa_kurang_pengetahuan = request.kecemasan_diagnosa_kurang_pengetahuan;
     this.kecemasan_intervensi_gambaran = request.kecemasan_intervensi_gambaran;
     this.kecemasan_intervensi_beri_waktu = request.kecemasan_intervensi_beri_waktu;
     this.kecemasan_intervensi_informasi = request.kecemasan_intervensi_informasi;
     this.kecemasan_intervensi_kesempatan = request.kecemasan_intervensi_kesempatan;
     this.kecemasan_evaluasi_berkurang = request.kecemasan_evaluasi_berkurang;
     this.kecemasan_evaluasi_tenang = request.kecemasan_evaluasi_tenang;
     this.ttd_perawat_kecemasan = request.ttd_perawat_kecemasan;
     this.id_perawat_kecemasan = request.id_perawat_kecemasan;
     this.tanggal_perawat_kecemasan = request.tanggal_perawat_kecemasan;

     // diagnosa pasca operatif
     this.nyeri_diagnosa_luka_pasca = request.nyeri_diagnosa_luka_pasca;
     this.nyeri_diagnosa_gaangguan_kulit = request.nyeri_diagnosa_gaangguan_kulit;
     this.nyeri_intervensi_kaji_lokasi = request.nyeri_intervensi_kaji_lokasi;
     this.nyeri_intervensi_kaji_ttv = request.nyeri_intervensi_kaji_ttv;
     this.nyeri_intervensi_teknik_relaksaksi = request.nyeri_intervensi_teknik_relaksaksi;
     this.nyeri_intervensi_posisi_nyaman_pasca = request.nyeri_intervensi_posisi_nyaman_pasca;
     this.nyeri_intervensi_teknik_distraksi_pasca = request.nyeri_intervensi_teknik_distraksi_pasca;
     this.nyeri_intervensi_pemeberian_analgesi =  request.nyeri_intervensi_pemeberian_analgesi;
     this.nyeri_evaluasi_ttv = request.nyeri_evaluasi_ttv;
     this.nyeri_evaluasi_nyeri_terkontrol = request.nyeri_evaluasi_nyeri_terkontrol;
     this.nyeri_evaluasi_nyeri_berkurang = request.nyeri_evaluasi_nyeri_berkurang;
     this.nyeri_evaluasi_diobservasi = request.nyeri_evaluasi_diobservasi;
     this.ttd_perawat_nyeri_pasca = request.ttd_perawat_nyeri_pasca;
     this.id_perawat_nyeri_pasca = request.id_perawat_nyeri_pasca;
     this.tanggal_perawat_nyeri_pasca = request.tanggal_perawat_nyeri_pasca;
     this.infeksi_diagnosa_trauma_pasca = request.infeksi_diagnosa_trauma_pasca;
     this.infeksi_diagnosa_lingkungan_pasca = request.infeksi_diagnosa_lingkungan_pasca;
     this.infeksi_diagnosa_peralatan_pasca = request.infeksi_diagnosa_peralatan_pasca;
     this.infeksi_intervensi_cuci_tangan_pasca = request.infeksi_intervensi_cuci_tangan_pasca;
     this.infeksi_intervensi_disinfeksi_pasca = request.infeksi_intervensi_disinfeksi_pasca;
     this.infeksi_intervensi_kadaluarsa_pasca = request.infeksi_intervensi_kadaluarsa_pasca;
     this.infeksi_intervensi_sterilitas_pasca = request.infeksi_intervensi_sterilitas_pasca;
     this.infeksi_intervensi_penutup_pasca = request.infeksi_intervensi_penutup_pasca;
     this.infeksi_evaluasi_pertahankan_pasca =  request.infeksi_evaluasi_pertahankan_pasca;
     this.ttd_perawat_infeksi_pasca = request.ttd_perawat_infeksi_pasca;
     this.id_perawat_infeksi_pasca = request.id_perawat_infeksi_pasca;
     this.tanggal_perawat_infeksi_pasca = request.tanggal_perawat_infeksi_pasca;
     this.perubahan_diagnosa_suhu = request.perubahan_diagnosa_suhu;
     this.perubahan_diagnosa_obat = request.perubahan_diagnosa_obat;
     this.perubahan_diagnosa_dehidrasi = request.perubahan_diagnosa_dehidrasi;
     this.perubahan_intervensi_catatan_suhu = request.perubahan_intervensi_catatan_suhu;
     this.perubahan_intervensi_kaji_suhu = request.perubahan_intervensi_kaji_suhu;
     this.perubahan_intervensi_kolaborasi = request.perubahan_intervensi_kolaborasi;
     this.perubahan_evaluasi_pasien_dingin = request.perubahan_evaluasi_pasien_dingin;
     this.perubahan_evaluasi_pasien_menggigil = request.perubahan_evaluasi_pasien_menggigil;
     this.perubahan_evaluasi_suhu_ruangan = request.perubahan_evaluasi_suhu_ruangan;
     this.evaluasi_suhu_ruangan_teks = request.evaluasi_suhu_ruangan_teks;
     this.ttd_perawat_perubahan = request.ttd_perawat_perubahan;
     this.id_perawat_perubahan = request.id_perawat_perubahan;
     this.tanggal_perawat_perubahan = request.tanggal_perawat_perubahan;
     this.kecemasan_pasca_operatif_diagnosa_perawatan_luka = request.kecemasan_pasca_operatif_diagnosa_perawatan_luka;
     this.kecemasan_pasca_operatif_intervensi_gambar_luka = request.kecemasan_pasca_operatif_intervensi_gambar_luka;
     this.kecemasan_pasca_operatif_intervensi_waktu_perasaan = request.kecemasan_pasca_operatif_intervensi_waktu_perasaan;
     this.kecemasan_pasca_operatif_intervensi_beri_informasi =  request.kecemasan_pasca_operatif_intervensi_beri_informasi;
     this.kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan = request.kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan;
     this.kecemasan_pasca_operatif_intervensi_perasaan_klien = request.kecemasan_pasca_operatif_intervensi_perasaan_klien;
     this.kecemasan_pasca_operatif_intervensi_kesempatan_bertanya = request.kecemasan_pasca_operatif_intervensi_kesempatan_bertanya;
     this.kecemasan_pasca_operatif_intervensi_nomor_pasien =  request.kecemasan_pasca_operatif_intervensi_nomor_pasien;
     this.kecemasan_pasca_operatif_evaluasi_kecemasan = request.kecemasan_pasca_operatif_evaluasi_kecemasan;
     this.kecemasan_pasca_operatif_evaluasi_tenang_selama = request.kecemasan_pasca_operatif_evaluasi_tenang_selama;
     this.ttd_perawat_kecemasan_pasca = request.ttd_perawat_kecemasan_pasca;
     this.id_perawat_kecemasan_pasca = request.id_perawat_kecemasan_pasca;
     this.tanggal_perawat_kecemasan_pasca = request.tanggal_perawat_kecemasan_pasca;

     //  Catatan keperawatan pasca operasi
     this.rawat_pasca = request.rawat_pasca;
     this.transport = request.transport;
     this.time_out_waktu_ckpo = request.time_out_waktu_ckpo;
     this.keadaan_umum = request.keadaan_umum;
     this.tingkat_kesadaran_ckpo = request.tingkat_kesadaran_ckpo;
     this.jalan_nafas = request.jalan_nafas;
     this.pernafasan = request.pernafasan;
     this.terapi_oksigen = request.terapi_oksigen;
     this.terapi_oksigen_lain_teks = request.terapi_oksigen_lain_teks;
     this.kulit_datang_kering = request.kulit_datang_kering;
     this.kulit_datang_lembab = request.kulit_datang_lembab;
     this.kulit_datang_merah_muda = request.kulit_datang_merah_muda;
     this.kulit_datang_biru = request.kulit_datang_biru;
     this.kulit_datang_hangat = request.kulit_datang_hangat;
     this.kulit_datang_dingin = request.kulit_datang_dingin;
     this.kulit_datang_lain = request.kulit_datang_lain;
     this.kulit_datang_lain_teks = request.kulit_datang_lain_teks;
     this.kulit_keluar_kering = request.kulit_keluar_kering;
     this.kulit_keluar_lembab = request.kulit_keluar_lembab;
     this.kulit_keluar_merah_muda = request.kulit_keluar_merah_muda;
     this.kulit_keluar_biru = request.kulit_keluar_biru;
     this.kulit_keluar_hangat = request.kulit_keluar_hangat;
     this.kulit_keluar_dingin = request.kulit_keluar_dingin;
     this.kulit_keluar_lain = request.kulit_keluar_lain;
     this.kulit_keluar_lain_teks =  request.kulit_keluar_lain_teks;
     this.sirkulasi = request.sirkulasi;
     this.posisi_pasien = request.posisi_pasien;
     this.posisi_pasien_lain_teks = request.posisi_pasien_lain_teks;
     this.la_ga = request.la_ga;
     this.skor = request.skor;
     this.aldrette_aktivitas = request.aldrette_aktivitas;
     this.aldrette_pernafasan = request.aldrette_pernafasan;
     this.aldrette_sirkulasi = request.aldrette_sirkulasi;
     this.aldrette_kesadaran = request.aldrette_kesadaran;
     this.aldrette_saturasi = request.aldrette_saturasi;
     this.steward_pergerakan = request.steward_pergerakan;
     this.steward_pernafasan = request.steward_pernafasan;
     this.steward_kesadaran =  request.steward_kesadaran;
     this.tanggal_pasca_operasi = request.tanggal_pasca_operasi  ? DateTimeConverter.convertToNormalDatetime(request.tanggal_pasca_operasi) : '';
     this.skala_anestesi = request.skala_anestesi;
     this.grid_chart_img = request.grid_chart_img;
     this.grid_chart_data = request.grid_chart_data;
     this.time_nadi_teratur_masuk = request.time_nadi_teratur_masuk;
     this.time_nadi_teratur_keluar = request.time_nadi_teratur_keluar;
     this.time_nadi_tidakteratur_masuk = request.time_nadi_tidakteratur_masuk;
     this.time_nadi_tidakteratur_keluar = request.time_nadi_tidakteratur_keluar;
     this.time_nadi_lemah_masuk = request.time_nadi_lemah_masuk;
     this.time_nadi_lemah_keluar = request.time_nadi_lemah_keluar;
     this.time_nadi_kuat_masuk = request.time_nadi_kuat_masuk;
     this.time_nadi_kuat_keluar = request.time_nadi_kuat_keluar;
     this.time_napas_teratur_masuk = request.time_napas_teratur_masuk;
     this.time_napas_teratur_keluar = request.time_napas_teratur_keluar;
     this.time_napas_tidakteratur_masuk = request.time_napas_tidakteratur_masuk;
     this.time_napas_tidakteratur_keluar = request.time_napas_tidakteratur_keluar;
     this.time_napas_dangkal_masuk = request.time_napas_dangkal_masuk;
     this.time_napas_dangkal_keluar = request.time_napas_dangkal_keluar;
     this.time_napas_dalam_masuk = request.time_napas_dalam_masuk;
     this.time_napas_dalam_keluar = request.time_napas_dalam_keluar;
     this.time_napas_sukar_masuk = request.time_napas_sukar_masuk;
     this.time_napas_sukar_keluar =  request.time_napas_sukar_keluar;
     this.time_napas_terapi_masuk = request.time_napas_terapi_masuk;
     this.time_napas_terapi_keluar = request.time_napas_terapi_keluar;
     this.time_spo_masuk = request.time_spo_masuk;
     this.time_spo_keluar = request.time_spo_keluar;
     this.time_masalah_aktual = request.time_masalah_aktual;
     this.masalah_aktual_teks = request.masalah_aktual_teks;
     this.masalah_aktual_intruksi_teks = request.masalah_aktual_intruksi_teks;
     this.masalah_aktual_tindakan_teks = request.masalah_aktual_tindakan_teks;
     this.time_urine_satu = request.time_urine_satu;
     this.time_urine_dua = request.time_urine_dua;
     this.time_urine_tiga = request.time_urine_tiga;
     this.time_urine_empat = request.time_urine_empat;
     this.time_urine_total =  request.time_urine_total;
     this.time_pemberitahu_ruang = request.time_pemberitahu_ruang;
     this.time_perawat_ruang = request.time_perawat_ruang;
     this.id_perawat_dokter = request.id_perawat_dokter;
     this.ttd_perawat = request.ttd_perawat;
     this.id_perawat = request.id_perawat;
   }

   static createActualParams(actuals: any) {
     if (actuals && Array.isArray(actuals)) {
       const timeProblem: Array<string> = [];
       const actualProblem: Array<string> = [];
       const instructionProblem: Array<string> = [];
       const actionProblem: Array<string> = [];

       for (let i = 0; i < actuals.length; i += 1) {
         timeProblem.push(actuals[i].time_masalah_aktual);
         actualProblem.push(actuals[i].masalah_aktual_teks);
         instructionProblem.push(actuals[i].masalah_aktual_intruksi_teks);
         actionProblem.push(actuals[i].masalah_aktual_tindakan_teks);
       }
       return {
         time_masalah_aktual: timeProblem,
         masalah_aktual_teks: actualProblem,
         masalah_aktual_intruksi_teks: instructionProblem,
         masalah_aktual_tindakan_teks: actionProblem,
       }
     }
     return undefined;
   }

   static schema() {
     return yup.object().shape({
       time_out: yup.string(),
       time_out_time: yup.string(),
       instrument_availability: yup.string(),
       availability_instrument_time: yup.string(),
       availability_prothesis: yup.string(),
       availability_prothesis_time: yup.string(),
       start_time: yup.string(),
       finished_time: yup.string(),
       operation_jenis: yup.string(),
       operation_type: yup.string(),
       anesthetic_type: yup.string(),
       level_consciousness: yup.string(),
       other_awareness_level_text: yup.string(),
       state_emotion: yup.string(),
       cannula_position_1: yup.string(),
       cannula_position_2: yup.string(),
       cannula_position_3: yup.string(),
       cannula_position_4: yup.string(),
       cannula_position_5: yup.string(),
       cannula_position_6: yup.string(),
       cannula_position_7: yup.string(),
       cannula_position_8: yup.string(),
       position_cannula_other_text: yup.string(),
       operating_position_1: yup.string(),
       operating_position_2: yup.string(),
       operating_position_3: yup.string(),
       operating_position_4: yup.string(),
       operating_position_5: yup.string(),
       position_operation_other_text: yup.string(),
       id_position_operating_supervised: yup.string(),
       arm_position_1: yup.string(),
       arm_position_2: yup.string(),
       arm_position_3: yup.string(),
       arm_position_4: yup.string(),
       arm_position_5: yup.string(),
       other_arm_position_text: yup.string(),
       position_tool: yup.string(),
       position_other_text_tools: yup.string(),
       catheter_urine: yup.string(),
       skin_prep: yup.string(),
       other_skin_prep_text: yup.string(),
       discharging_diathermy: yup.string(),
       discharging_diathermy_1: yup.string(),
       discharging_diathermy_2: yup.string(),
       discharging_diathermy_3: yup.string(),
       location_electrode: yup.string(),
       location_electrode_1: yup.string(),
       location_electrode_2: yup.string(),
       location_electrode_3: yup.string(),
       location_electrode_4: yup.string(),
       location_electrode_5: yup.string(),
       other_electrode_location_text: yup.string(),
       condition_before: yup.string(),
       condition_before_1: yup.string(),
       condition_before_2: yup.string(),
       condition_before_3: yup.string(),
       condition_before_other_text: yup.string(),
       after_condition: yup.string(),
       after_condition_1: yup.string(),
       after_condition_2: yup.string(),
       after_condition_3: yup.string(),
       condition_after_other_text: yup.string(),
       code_electrosurgical_unit: yup.string(),
       heating_unit: yup.string(),
       heater_setting_temperature: yup.string(),
       heater_start_time: yup.string(),
       heater_finished_time: yup.string(),
       heater_code_unit: yup.string(),
       unit_cooling: yup.string(),
       cooler_setting_temperature: yup.string(),
       cooler_start_time: yup.string(),
       cooler_finished_time: yup.string(),
       cooler_code_unit: yup.string(),
       laser_use: yup.string(),
       laser_power: yup.string(),
       laser_duration: yup.string(),
       laser_interval: yup.string(),
       laser_number_shoot: yup.string(),
       laser_code_model: yup.string(),
       laser_date: yup.string(),
       id_laser_supervised_1: yup.string(),
       id_laser_supervised_2: yup.string(),
       id_laser_supervised_3: yup.string(),
       use_implant: yup.string(),
       implant_factory: yup.string(),
       implant_type: yup.string(),
       implant_size: yup.string(),
       implant_seri: yup.string(),
       code_inventory: yup.string(),
       url_image_sticker: yup.string(),
       name_image_sticker: yup.string(),
       type_image_sticker: yup.string(),
       size_image_sticker: yup.string(),
       irrigation_wound: yup.string(),
       irrigation_wound_other_text: yup.string(),
       use_liquid_water_text: yup.string(),
       use_other_liquid_text: yup.string(),
       discharging_fluid: yup.string(),
       use_liquid_sodium_text: yup.string(),
       balutan_cairan: yup.string(),
       spesimen_cairan: yup.string(),
       use_fluid_histology_text: yup.string(),
       use_fluid_cytology_text: yup.string(),
       use_fluid_culture_text: yup.string(),
       specimen_liquid_examination: yup.string(),
       specimen_type_tissue: yup.string(),
       specimen_number_tissue: yup.string(),
       specimen_description: yup.string(),
       signed_nurse_instruments: yup.string(),
       id_nurse_instrument: yup.string(),
       signed_nurse_circular: yup.string(),
       id_nurse_circular: yup.string(),
       jenis_balutan: yup.string(),
       jenis_spesimen: yup.string(),
       lain_spesimen: yup.string(),
       tanggal_kadaluarsa: yup.string(),

       // diagnosa intra operatif
       gangguan_pola_nafas_diagnosa_neuromuskular: yup.string(),
       gangguan_pola_nafas_diagnosa_sekret: yup.string(),
       gangguan_pola_nafas_intervensi_miringkan_kepala: yup.string(),
       gangguan_pola_nafas_intervensi_rahang: yup.string(),
       gangguan_pola_nafas_intervensi_observasi: yup.string(),
       gangguan_pola_nafas_intervensi_ttv: yup.string(),
       gangguan_pola_nafas_intervensi_suction: yup.string(),
       gangguan_pola_nafas_intervensi_o2: yup.string(),
       gangguan_pola_nafas_intervensi_obat: yup.string(),
       gangguan_pola_nafas_evaluasi_ttv: yup.string(),
       gangguan_pola_nafas_evaluasi_nafas_spontan: yup.string(),
       gangguan_pola_nafas_evaluasi_sianosis: yup.string(),
       gangguan_pola_nafas_evaluasi_o2: yup.string(),
       gangguan_pola_nafas_evaluasi_o2_teks: yup.string(),
       gangguan_pola_nafas_evaluasi_observasi: yup.string(),
       ttd_perawat_gangguan_pola_nafas: yup.string(),
       id_perawat_gangguan_pola_nafas: yup.string(),
       tanggal_perawat_gangguan_pola_nafas: yup.string(),
       kekurangan_cairan_diagnosa_intake: yup.string(),
       kekurangan_cairan_diagnosa_abnormal: yup.string(),
       kekurangan_cairan_diagnosa_integritas: yup.string(),
       kekurangan_cairan_diagnosa_puasa: yup.string(),
       kekurangan_cairan_intervensi_ukur: yup.string(),
       kekurangan_cairan_intervensi_ttv: yup.string(),
       kekurangan_cairan_intervensi_mual_muntah: yup.string(),
       kekurangan_cairan_intervensi_pembalut_luka: yup.string(),
       kekurangan_cairan_intervensi_suhu_tubuh: yup.string(),
       kekurangan_cairan_evaluasi_ttv: yup.string(),
       kekurangan_cairan_evaluasi_input: yup.string(),
       kekurangan_cairan_evaluasi_input_teks: yup.string(),
       kekurangan_cairan_evaluasi_output: yup.string(),
       kekurangan_cairan_evaluasi_output_teks: yup.string(),
       kekurangan_cairan_evaluasi_mukosa: yup.string(),
       kekurangan_cairan_evaluasi_turgor: yup.string(),
       ttd_perawat_kekurangan_cairan: yup.string(),
       id_perawat_kekurangan_cairan: yup.string(),
       tanggal_perawat_kekurangan_cairan: yup.string(),
       tinggi_cedera_diagnosa_pemajanan: yup.string(),
       tinggi_cedera_diagnosa_hipoksia: yup.string(),
       tinggi_cedera_intervensi_lepas_gigi: yup.string(),
       tinggi_cedera_intervensi_periksa_identitas: yup.string(),
       tinggi_cedera_intervensi_terkunci: yup.string(),
       tinggi_cedera_intervensi_sabuk_pengaman: yup.string(),
       tinggi_cedera_intervensi_posisi: yup.string(),
       tinggi_cedera_intervensi_elektrikal: yup.string(),
       tinggi_cedera_intervensi_plate_diatermi: yup.string(),
       tinggi_cedera_intervensi_cairan: yup.string(),
       tinggi_cedera_intervensi_jumlah_pemakaian: yup.string(),
       tinggi_cedera_evaluasi_posisi: yup.string(),
       tinggi_cedera_evaluasi_prosedur: yup.string(),
       tinggi_cedera_evaluasi_jumlah: yup.string(),
       ttd_perawat_tinggi_cedera: yup.string(),
       id_perawat_tinggi_cedera: yup.string(),
       tanggal_perawat_tinggi_cedera: yup.string(),
       infeksi_diagnosa_trauma: yup.string(),
       infeksi_diagnosa_lingkungan: yup.string(),
       infeksi_diagnosa_peralatan: yup.string(),
       infeksi_intervensi_cuci_tangan: yup.string(),
       infeksi_intervensi_disinfeksi: yup.string(),
       infeksi_intervensi_kadaluarsa: yup.string(),
       infeksi_intervensi_sterilitas: yup.string(),
       infeksi_intervensi_penutup: yup.string(),
       infeksi_evaluasi_pertahankan: yup.string(),
       ttd_perawat_infeksi: yup.string(),
       id_perawat_infeksi: yup.string(),
       tanggal_perawat_infeksi: yup.string(),
       nyeri_diagnosa_luka: yup.string(),
       nyeri_diagnosa_pemasangan_alat: yup.string(),
       nyeri_intervensi_skala_nyeri: yup.string(),
       nyeri_intervensi_teknik_relaksasi: yup.string(),
       nyeri_intervensi_posisi_nyaman: yup.string(),
       nyeri_intervensi_teknik_distraksi: yup.string(),
       nyeri_intervensi_kolaborasi: yup.string(),
       nyeri_evaluasi_berkurang: yup.string(),
       nyeri_evaluasi_teknik: yup.string(),
       ttd_perawat_nyeri: yup.string(),
       id_perawat_nyeri: yup.string(),
       tanggal_perawat_nyeri: yup.string(),
       penglihatan_diagnosa_penurunan: yup.string(),
       penglihatan_diagnosa_perlindungan: yup.string(),
       penglihatan_intervensi_ketajaman: yup.string(),
       penglihatan_intervensi_orientasi: yup.string(),
       penglihatan_intervensi_alternative: yup.string(),
       penglihatan_intervensi_cegah_sinar: yup.string(),
       penglihatan_intervensi_optimal_lingkungan: yup.string(),
       penglihatan_evaluasi_kemampuan: yup.string(),
       penglihatan_evaluasi_perubahan: yup.string(),
       ttd_perawat_penglihatan: yup.string(),
       id_perawat_penglihatan: yup.string(),
       tanggal_perawat_penglihatan: yup.string(),
       kecemasan_diagnosa_prosedur: yup.string(),
       kecemasan_diagnosa_kurang_pengetahuan: yup.string(),
       kecemasan_intervensi_gambaran: yup.string(),
       kecemasan_intervensi_beri_waktu: yup.string(),
       kecemasan_intervensi_informasi: yup.string(),
       kecemasan_intervensi_kesempatan: yup.string(),
       kecemasan_evaluasi_berkurang: yup.string(),
       kecemasan_evaluasi_tenang: yup.string(),
       ttd_perawat_kecemasan: yup.string(),
       id_perawat_kecemasan: yup.string(),
       tanggal_perawat_kecemasan: yup.string(),

       // diagnosa pasca operatif
       nyeri_diagnosa_luka_pasca: yup.string(),
       nyeri_diagnosa_gaangguan_kulit: yup.string(),
       nyeri_intervensi_kaji_lokasi: yup.string(),
       nyeri_intervensi_kaji_ttv: yup.string(),
       nyeri_intervensi_teknik_relaksaksi: yup.string(),
       nyeri_intervensi_posisi_nyaman_pasca: yup.string(),
       nyeri_intervensi_teknik_distraksi_pasca: yup.string(),
       nyeri_intervensi_pemeberian_analgesi: yup.string(),
       nyeri_evaluasi_ttv: yup.string(),
       nyeri_evaluasi_nyeri_terkontrol: yup.string(),
       nyeri_evaluasi_nyeri_berkurang: yup.string(),
       nyeri_evaluasi_diobservasi: yup.string(),
       ttd_perawat_nyeri_pasca: yup.string(),
       id_perawat_nyeri_pasca: yup.string(),
       tanggal_perawat_nyeri_pasca: yup.string(),
       infeksi_diagnosa_trauma_pasca: yup.string(),
       infeksi_diagnosa_lingkungan_pasca: yup.string(),
       infeksi_diagnosa_peralatan_pasca: yup.string(),
       infeksi_intervensi_cuci_tangan_pasca: yup.string(),
       infeksi_intervensi_disinfeksi_pasca: yup.string(),
       infeksi_intervensi_kadaluarsa_pasca: yup.string(),
       infeksi_intervensi_sterilitas_pasca: yup.string(),
       infeksi_intervensi_penutup_pasca: yup.string(),
       infeksi_evaluasi_pertahankan_pasca: yup.string(),
       ttd_perawat_infeksi_pasca: yup.string(),
       id_perawat_infeksi_pasca: yup.string(),
       tanggal_perawat_infeksi_pasca: yup.string(),
       perubahan_diagnosa_suhu: yup.string(),
       perubahan_diagnosa_obat: yup.string(),
       perubahan_diagnosa_dehidrasi: yup.string(),
       perubahan_intervensi_catatan_suhu: yup.string(),
       perubahan_intervensi_kaji_suhu: yup.string(),
       perubahan_intervensi_kolaborasi: yup.string(),
       perubahan_evaluasi_pasien_dingin: yup.string(),
       perubahan_evaluasi_pasien_menggigil: yup.string(),
       perubahan_evaluasi_suhu_ruangan: yup.string(),
       evaluasi_suhu_ruangan_teks: yup.string(),
       ttd_perawat_perubahan: yup.string(),
       id_perawat_perubahan: yup.string(),
       tanggal_perawat_perubahan: yup.string(),
       kecemasan_pasca_operatif_diagnosa_perawatan_luka: yup.string(),
       kecemasan_pasca_operatif_intervensi_gambar_luka: yup.string(),
       kecemasan_pasca_operatif_intervensi_waktu_perasaan: yup.string(),
       kecemasan_pasca_operatif_intervensi_beri_informasi: yup.string(),
       kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan: yup.string(),
       kecemasan_pasca_operatif_intervensi_perasaan_klien: yup.string(),
       kecemasan_pasca_operatif_intervensi_kesempatan_bertanya: yup.string(),
       kecemasan_pasca_operatif_intervensi_nomor_pasien: yup.string(),
       kecemasan_pasca_operatif_evaluasi_kecemasan: yup.string(),
       kecemasan_pasca_operatif_evaluasi_tenang_selama: yup.string(),
       ttd_perawat_kecemasan_pasca: yup.string(),
       id_perawat_kecemasan_pasca: yup.string(),
       tanggal_perawat_kecemasan_pasca: yup.string(),

       //  catatan keperawatan pasca operasi
       rawat_pasca: yup.string(),
       transport: yup.string(),
       time_out_waktu_ckpo: yup.string(),
       keadaan_umum: yup.string(),
       tingkat_kesadaran_ckpo: yup.string(),
       jalan_nafas: yup.string(),
       pernafasan: yup.string(),
       terapi_oksigen: yup.string(),
       terapi_oksigen_lain_teks: yup.string(),
       kulit_datang_kering: yup.string(),
       kulit_datang_lembab: yup.string(),
       kulit_datang_merah_muda: yup.string(),
       kulit_datang_biru: yup.string(),
       kulit_datang_hangat: yup.string(),
       kulit_datang_dingin: yup.string(),
       kulit_datang_lain: yup.string(),
       kulit_datang_lain_teks: yup.string(),
       kulit_keluar_kering: yup.string(),
       kulit_keluar_lembab: yup.string(),
       kulit_keluar_merah_muda: yup.string(),
       kulit_keluar_biru: yup.string(),
       kulit_keluar_hangat: yup.string(),
       kulit_keluar_dingin: yup.string(),
       kulit_keluar_lain: yup.string(),
       kulit_keluar_lain_teks: yup.string(),
       sirkulasi: yup.string(),
       posisi_pasien: yup.string(),
       posisi_pasien_lain_teks: yup.string(),
       la_ga: yup.string(),
       skor: yup.string(),
       aldrette_aktivitas: yup.string(),
       aldrette_pernafasan: yup.string(),
       aldrette_sirkulasi: yup.string(),
       aldrette_kesadaran: yup.string(),
       aldrette_saturasi: yup.string(),
       steward_pergerakan: yup.string(),
       steward_pernafasan: yup.string(),
       steward_kesadaran: yup.string(),
       tanggal_pasca_operasi: yup.string(),
       skala_anestesi: yup.string(),
       grid_chart_img: yup.string(),
       grid_chart_data: yup.string(),
       time_nadi_teratur_masuk: yup.string(),
       time_nadi_teratur_keluar: yup.string(),
       time_nadi_tidakteratur_masuk: yup.string(),
       time_nadi_tidakteratur_keluar: yup.string(),
       time_nadi_lemah_masuk: yup.string(),
       time_nadi_lemah_keluar: yup.string(),
       time_nadi_kuat_masuk: yup.string(),
       time_nadi_kuat_keluar: yup.string(),
       time_napas_teratur_masuk: yup.string(),
       time_napas_teratur_keluar: yup.string(),
       time_napas_tidakteratur_masuk: yup.string(),
       time_napas_tidakteratur_keluar: yup.string(),
       time_napas_dangkal_masuk: yup.string(),
       time_napas_dangkal_keluar: yup.string(),
       time_napas_dalam_masuk: yup.string(),
       time_napas_dalam_keluar: yup.string(),
       time_napas_sukar_masuk: yup.string(),
       time_napas_sukar_keluar: yup.string(),
       time_napas_terapi_masuk: yup.string(),
       time_napas_terapi_keluar: yup.string(),
       time_spo_masuk: yup.string(),
       time_spo_keluar: yup.string(),
       time_masalah_aktual: yup.string(),
       masalah_aktual_teks: yup.string(),
       masalah_aktual_intruksi_teks: yup.string(),
       masalah_aktual_tindakan_teks: yup.string(),
       time_urine_satu: yup.string(),
       time_urine_dua: yup.string(),
       time_urine_tiga: yup.string(),
       time_urine_empat: yup.string(),
       time_urine_total: yup.string(),
       time_pemberitahu_ruang: yup.string(),
       time_perawat_ruang: yup.string(),
       id_perawat_dokter: yup.string(),
       ttd_perawat: yup.string(),
       id_perawat: yup.string(),
     });
   }

   normalize() {
     return {
       "time-out": this.time_out,
       "time-out-waktu": this.time_out_time,
       "ketersediaan-instrumen": this.instrument_availability,
       "ketersediaan-instrumen-waktu": this.availability_instrument_time,
       "ketersediaan-prothese": this.availability_prothesis,
       "ketersediaan-prothese-waktu": this.availability_prothesis_time,
       "mulai-waktu": this.start_time,
       "selesai-waktu": this.finished_time,
       "jenis-operasi": this.operation_jenis,
       "tipe-operasi": this.operation_type,
       "tipe-pembiusan": this.anesthetic_type,
       "tingkat-kesadaran": this.level_consciousness,
       "tingkat-kesadaran-lain-teks": this.other_awareness_level_text,
       "status-emosi": this.state_emotion,
       "posisi-kanula-1": this.cannula_position_1,
       "posisi-kanula-2": this.cannula_position_2,
       "posisi-kanula-3": this.cannula_position_3,
       "posisi-kanula-4": this.cannula_position_4,
       "posisi-kanula-5": this.cannula_position_5,
       "posisi-kanula-6": this.cannula_position_6,
       "posisi-kanula-7": this.cannula_position_7,
       "posisi-kanula-8": this.cannula_position_8,
       "posisi-kanula-lain-teks": this.position_cannula_other_text,
       "posisi-operasi-1": this.operating_position_1,
       "posisi-operasi-2": this.operating_position_2,
       "posisi-operasi-3": this.operating_position_3,
       "posisi-operasi-4": this.operating_position_4,
       "posisi-operasi-5": this.operating_position_5,
       "posisi-operasi-lain-teks": this.position_operation_other_text,
       "id-posisi-operasi-diawasi": this.id_position_operating_supervised,
       "posisi-lengan-1": this.arm_position_1,
       "posisi-lengan-2": this.arm_position_2,
       "posisi-lengan-3": this.arm_position_3,
       "posisi-lengan-4": this.arm_position_4,
       "posisi-lengan-5": this.arm_position_5,
       "posisi-lengan-lain-teks": this.other_arm_position_text,
       "posisi-alat": this.position_tool,
       "posisi-alat-lain-teks": this.position_other_text_tools,
       "kateter-urine": this.catheter_urine,
       "persiapan-kulit": this.skin_prep,
       "persiapan-kulit-lain-teks": this.other_skin_prep_text,
       "pemakaian-diathermy": this.discharging_diathermy,
       "pemakaian-diathermy-1": this.discharging_diathermy_1,
       "pemakaian-diathermy-2": this.discharging_diathermy_2,
       "pemakaian-diathermy-3": this.discharging_diathermy_3,
       "lokasi-elektrode": this.location_electrode,
       "lokasi-elektrode-1": this.location_electrode_1,
       "lokasi-elektrode-2": this.location_electrode_2,
       "lokasi-elektrode-3": this.location_electrode_3,
       "lokasi-elektrode-4": this.location_electrode_4,
       "lokasi-elektrode-5": this.location_electrode_5,
       "lokasi-elektrode-lain-teks": this.other_electrode_location_text,
       "kondisi-sebelum": this.condition_before,
       "kondisi-sebelum-1": this.condition_before_1,
       "kondisi-sebelum-2": this.condition_before_2,
       "kondisi-sebelum-3": this.condition_before_3,
       "kondisi-sebelum-lain-teks": this.condition_before_other_text,
       "kondisi-sesudah": this.after_condition,
       "kondisi-sesudah-1": this.after_condition_1,
       "kondisi-sesudah-2": this.after_condition_2,
       "kondisi-sesudah-3": this.after_condition_3,
       "kondisi-sesudah-lain-teks": this.condition_after_other_text,
       "kode-unit-elektrosurgikal": this.code_electrosurgical_unit,
       "unit-pemanas": this.heating_unit,
       "pemanas-pengaturan-temperatur": this.heater_setting_temperature,
       "pemanas-mulai-waktu": this.heater_start_time,
       "pemanas-selesai-waktu": this.heater_finished_time,
       "pemanas-kode-unit": this.heater_code_unit,
       "unit-pendingin": this.unit_cooling,
       "pendingin-pengaturan-temperatur": this.cooler_setting_temperature,
       "pendingin-mulai-waktu": this.cooler_start_time,
       "pendingin-selesai-waktu": this.cooler_finished_time,
       "pendingin-kode-unit": this.cooler_code_unit,
       "pemakaian-laser": this.laser_use,
       "laser-power": this.laser_power,
       "laser-durasi": this.laser_duration,
       "laser-interval": this.laser_interval,
       "laser-jumlah-tembak": this.laser_number_shoot,
       "laser-kode-model": this.laser_code_model,
       "laser-tanggal": this.laser_date,
       "id-laser-diawasi-1": this.id_laser_supervised_1,
       "id-laser-diawasi-2": this.id_laser_supervised_2,
       "id-laser-diawasi-3": this.id_laser_supervised_3,
       "pemakaian-implant": this.use_implant,
       "implant-pabrik": this.implant_factory,
       "implant-type": this.implant_type,
       "implant-size": this.implant_size,
       "implant-seri": this.implant_seri,
       "kode-inventory": this.code_inventory,
       "url-image-stiker": this.url_image_sticker,
       "name-image-stiker": this.name_image_sticker,
       "type-image-stiker": this.type_image_sticker,
       "size-image-stiker": this.size_image_sticker,
       "irigasi-luka": this.irrigation_wound,
       "irigasi-luka-lain-teks": this.irrigation_wound_other_text,
       "pemakaian-cairan-air-teks": this.use_liquid_water_text,
       "pemakaian-cairan-lain-teks": this.use_other_liquid_text,
       "pemakaian-cairan": this.discharging_fluid,
       "pemakaian-cairan-sodium-teks": this.use_liquid_sodium_text,
       "balutan-cairan": this.balutan_cairan,
       "spesimen-cairan": this.spesimen_cairan,
       "pemakaian-cairan-histologi-teks": this.use_fluid_histology_text,
       "pemakaian-cairan-sitologi-teks": this.use_fluid_cytology_text,
       "pemakaian-cairan-kultur-teks": this.use_fluid_culture_text,
       "spesimen-cairan-pemeriksaan": this.specimen_liquid_examination,
       "spesimen-jenis-jaringan": this.specimen_type_tissue,
       "spesimen-jumlah-jaringan": this.specimen_number_tissue,
       "spesimen-keterangan": this.specimen_description,
       "ttd-perawat-instrumen": this.signed_nurse_instruments,
       "id-perawat-instrumen": this.id_nurse_instrument,
       "ttd-perawat-sirkuler": this.signed_nurse_circular,
       "id-perawat-sirkuler": this.id_nurse_circular,
       "jenis-balutan": this.jenis_balutan,
       "jenis-spesimen": this.jenis_spesimen,
       'lain-spesimen': this.lain_spesimen,
       'tanggal-kadaluarsa': this.tanggal_kadaluarsa,

       // diagnosa intra operatif
       "gangguan-pola-nafas-diagnosa-neuromuskular":  this.gangguan_pola_nafas_diagnosa_neuromuskular,
       "gangguan-pola-nafas-diagnosa-sekret": this.gangguan_pola_nafas_diagnosa_sekret,
       "gangguan-pola-nafas-intervensi-miringkan-kepala": this.gangguan_pola_nafas_intervensi_miringkan_kepala,
       "gangguan-pola-nafas-intervensi-rahang": this.gangguan_pola_nafas_intervensi_rahang,
       "gangguan-pola-nafas-intervensi-observasi": this.gangguan_pola_nafas_intervensi_observasi,
       "gangguan-pola-nafas-intervensi-ttv": this.gangguan_pola_nafas_intervensi_ttv,
       "gangguan-pola-nafas-intervensi-suction": this.gangguan_pola_nafas_intervensi_suction,
       "gangguan-pola-nafas-intervensi-o2": this.gangguan_pola_nafas_intervensi_o2,
       "gangguan-pola-nafas-intervensi-obat": this.gangguan_pola_nafas_intervensi_obat,
       "gangguan-pola-nafas-evaluasi-ttv": this.gangguan_pola_nafas_evaluasi_ttv,
       "gangguan-pola-nafas-evaluasi-nafas-spontan": this.gangguan_pola_nafas_evaluasi_nafas_spontan,
       "gangguan-pola-nafas-evaluasi-sianosis":  this.gangguan_pola_nafas_evaluasi_sianosis,
       "gangguan-pola-nafas-evaluasi-o2":  this.gangguan_pola_nafas_evaluasi_o2,
       "gangguan-pola-nafas-evaluasi-o2-teks": this.gangguan_pola_nafas_evaluasi_o2_teks,
       "gangguan-pola-nafas-evaluasi-observasi": this.gangguan_pola_nafas_evaluasi_observasi,
       "ttd-perawat-gangguan-pola-nafas": this.ttd_perawat_gangguan_pola_nafas,
       "id-perawat-gangguan-pola-nafas": this.id_perawat_gangguan_pola_nafas,
       "tanggal-perawat-gangguan-pola-nafas": this.tanggal_perawat_gangguan_pola_nafas,
       "kekurangan-cairan-diagnosa-intake": this.kekurangan_cairan_diagnosa_intake,
       "kekurangan-cairan-diagnosa-abnormal": this.kekurangan_cairan_diagnosa_abnormal,
       "kekurangan-cairan-diagnosa-integritas": this.kekurangan_cairan_diagnosa_integritas,
       "kekurangan-cairan-diagnosa-puasa": this.kekurangan_cairan_diagnosa_puasa,
       "kekurangan-cairan-intervensi-ukur": this.kekurangan_cairan_intervensi_ukur,
       "kekurangan-cairan-intervensi-ttv": this.kekurangan_cairan_intervensi_ttv,
       "kekurangan-cairan-intervensi-mual-muntah": this.kekurangan_cairan_intervensi_mual_muntah,
       "kekurangan-cairan-intervensi-pembalut-luka": this.kekurangan_cairan_intervensi_pembalut_luka,
       "kekurangan-cairan-intervensi-suhu-tubuh": this.kekurangan_cairan_intervensi_suhu_tubuh,
       "kekurangan-cairan-evaluasi-ttv": this.kekurangan_cairan_evaluasi_ttv,
       "kekurangan-cairan-evaluasi-input": this.kekurangan_cairan_evaluasi_input,
       "kekurangan-cairan-evaluasi-input-teks": this.kekurangan_cairan_evaluasi_input_teks,
       "kekurangan-cairan-evaluasi-output": this.kekurangan_cairan_evaluasi_output,
       "kekurangan-cairan-evaluasi-output-teks": this.kekurangan_cairan_evaluasi_output_teks,
       "kekurangan-cairan-evaluasi-mukosa": this.kekurangan_cairan_evaluasi_mukosa,
       "kekurangan-cairan-evaluasi-turgor": this.kekurangan_cairan_evaluasi_turgor,
       "ttd-perawat-kekurangan-cairan": this.ttd_perawat_kekurangan_cairan,
       "id-perawat-kekurangan-cairan": this.id_perawat_kekurangan_cairan,
       "tanggal-perawat-kekurangan-cairan": this.tanggal_perawat_kekurangan_cairan,
       "tinggi-cedera-diagnosa-pemajanan": this.tinggi_cedera_diagnosa_pemajanan,
       "tinggi-cedera-diagnosa-hipoksia": this.tinggi_cedera_diagnosa_hipoksia,
       "tinggi-cedera-intervensi-lepas-gigi": this.tinggi_cedera_intervensi_lepas_gigi,
       "tinggi-cedera-intervensi-periksa-identitas": this.tinggi_cedera_intervensi_periksa_identitas,
       "tinggi-cedera-intervensi-terkunci": this.tinggi_cedera_intervensi_terkunci,
       "tinggi-cedera-intervensi-sabuk-pengaman":  this.tinggi_cedera_intervensi_sabuk_pengaman,
       "tinggi-cedera-intervensi-posisi": this.tinggi_cedera_intervensi_posisi,
       "tinggi-cedera-intervensi-elektrikal": this.tinggi_cedera_intervensi_elektrikal,
       "tinggi-cedera-intervensi-plate-diatermi": this.tinggi_cedera_intervensi_plate_diatermi,
       "tinggi-cedera-intervensi-cairan": this.tinggi_cedera_intervensi_cairan,
       "tinggi-cedera-intervensi-jumlah-pemakaian": this.tinggi_cedera_intervensi_jumlah_pemakaian,
       "tinggi-cedera-evaluasi-posisi": this.tinggi_cedera_evaluasi_posisi,
       "tinggi-cedera-evaluasi-prosedur":  this.tinggi_cedera_evaluasi_prosedur,
       "tinggi-cedera-evaluasi-jumlah": this.tinggi_cedera_evaluasi_jumlah,
       "ttd-perawat-tinggi-cedera": this.ttd_perawat_tinggi_cedera,
       "id-perawat-tinggi-cedera": this.id_perawat_tinggi_cedera,
       "tanggal-perawat-tinggi-cedera": this.tanggal_perawat_tinggi_cedera,
       "infeksi-diagnosa-trauma": this.infeksi_diagnosa_trauma,
       "infeksi-diagnosa-lingkungan": this.infeksi_diagnosa_lingkungan,
       "infeksi-diagnosa-peralatan": this.infeksi_diagnosa_peralatan,
       "infeksi-intervensi-cuci-tangan": this.infeksi_intervensi_cuci_tangan,
       "infeksi-intervensi-disinfeksi": this.infeksi_intervensi_disinfeksi,
       "infeksi-intervensi-kadaluarsa": this.infeksi_intervensi_kadaluarsa,
       "infeksi-intervensi-sterilitas": this.infeksi_intervensi_sterilitas,
       "infeksi-intervensi-penutup": this.infeksi_intervensi_penutup,
       "infeksi-evaluasi-pertahankan": this.infeksi_evaluasi_pertahankan,
       "ttd-perawat-infeksi": this.ttd_perawat_infeksi,
       "id-perawat-infeksi": this.id_perawat_infeksi,
       "tanggal-perawat-infeksi": this.tanggal_perawat_infeksi,
       "nyeri-diagnosa-luka": this.nyeri_diagnosa_luka,
       "nyeri-diagnosa-pemasangan-alat": this.nyeri_diagnosa_pemasangan_alat,
       "nyeri-intervensi-skala-nyeri": this.nyeri_intervensi_skala_nyeri,
       "nyeri-intervensi-teknik-relaksasi": this.nyeri_intervensi_teknik_relaksasi,
       "nyeri-intervensi-posisi-nyaman": this.nyeri_intervensi_posisi_nyaman,
       "nyeri-intervensi-teknik-distraksi": this.nyeri_intervensi_teknik_distraksi,
       "nyeri-intervensi-kolaborasi": this.nyeri_intervensi_kolaborasi,
       "nyeri-evaluasi-berkurang": this.nyeri_evaluasi_berkurang,
       "nyeri-evaluasi-teknik": this.nyeri_evaluasi_teknik,
       "ttd-perawat-nyeri": this.ttd_perawat_nyeri,
       "id-perawat-nyeri": this.id_perawat_nyeri,
       "tanggal-perawat-nyeri": this.tanggal_perawat_nyeri,
       "penglihatan-diagnosa-penurunan": this.penglihatan_diagnosa_penurunan,
       "penglihatan-diagnosa-perlindungan": this.penglihatan_diagnosa_perlindungan,
       "penglihatan-intervensi-ketajaman": this.penglihatan_intervensi_ketajaman,
       "penglihatan-intervensi-orientasi": this.penglihatan_intervensi_orientasi,
       "penglihatan-intervensi-alternative": this.penglihatan_intervensi_alternative,
       "penglihatan-intervensi-cegah-sinar":  this.penglihatan_intervensi_cegah_sinar,
       "penglihatan-intervensi-optimal-lingkungan": this.penglihatan_intervensi_optimal_lingkungan,
       "penglihatan-evaluasi-kemampuan": this.penglihatan_evaluasi_kemampuan,
       "penglihatan-evaluasi-perubahan": this.penglihatan_evaluasi_perubahan,
       "ttd-perawat-penglihatan": this.ttd_perawat_penglihatan,
       "id-perawat-penglihatan": this.id_perawat_penglihatan,
       "tanggal-perawat-penglihatan": this.tanggal_perawat_penglihatan,
       "kecemasan-diagnosa-prosedur": this.kecemasan_diagnosa_prosedur,
       "kecemasan-diagnosa-kurang-pengetahuan": this.kecemasan_diagnosa_kurang_pengetahuan,
       "kecemasan-intervensi-gambaran": this.kecemasan_intervensi_gambaran,
       "kecemasan-intervensi-beri-waktu": this.kecemasan_intervensi_beri_waktu,
       "kecemasan-intervensi-informasi": this.kecemasan_intervensi_informasi,
       "kecemasan-intervensi-kesempatan": this.kecemasan_intervensi_kesempatan,
       "kecemasan-evaluasi-berkurang": this.kecemasan_evaluasi_berkurang,
       "kecemasan-evaluasi-tenang": this.kecemasan_evaluasi_tenang,
       "ttd-perawat-kecemasan": this.ttd_perawat_kecemasan,
       "id-perawat-kecemasan": this.id_perawat_kecemasan,
       "tanggal-perawat-kecemasan": this.tanggal_perawat_kecemasan,

       // diagnosa pasca operatif
       "nyeri-diagnosa-luka-pasca": this.nyeri_diagnosa_luka_pasca,
       "nyeri-diagnosa-gaangguan-kulit": this.nyeri_diagnosa_gaangguan_kulit,
       "nyeri-intervensi-kaji-lokasi": this.nyeri_intervensi_kaji_lokasi,
       "nyeri-intervensi-kaji-ttv": this.nyeri_intervensi_kaji_ttv,
       "nyeri-intervensi-teknik-relaksaksi": this.nyeri_intervensi_teknik_relaksaksi,
       "nyeri-intervensi-posisi-nyaman-pasca": this.nyeri_intervensi_posisi_nyaman_pasca,
       "nyeri-intervensi-teknik-distraksi-pasca": this.nyeri_intervensi_teknik_distraksi_pasca,
       "nyeri-intervensi-pemeberian-analgesi": this.nyeri_intervensi_pemeberian_analgesi,
       "nyeri-evaluasi-ttv": this.nyeri_evaluasi_ttv,
       "nyeri-evaluasi-nyeri-terkontrol": this.nyeri_evaluasi_nyeri_terkontrol,
       "nyeri-evaluasi-nyeri-berkurang": this.nyeri_evaluasi_nyeri_berkurang,
       "nyeri-evaluasi-diobservasi": this.nyeri_evaluasi_diobservasi,
       "ttd-perawat-nyeri-pasca": this.ttd_perawat_nyeri_pasca,
       "id-perawat-nyeri-pasca": this.id_perawat_nyeri_pasca,
       "tanggal-perawat-nyeri-pasca": this.tanggal_perawat_nyeri_pasca,
       "infeksi-diagnosa-trauma-pasca": this.infeksi_diagnosa_trauma_pasca,
       "infeksi-diagnosa-lingkungan-pasca": this.infeksi_diagnosa_lingkungan_pasca,
       "infeksi-diagnosa-peralatan-pasca": this.infeksi_diagnosa_peralatan_pasca,
       "infeksi-intervensi-cuci-tangan-pasca": this.infeksi_intervensi_cuci_tangan_pasca,
       "infeksi-intervensi-disinfeksi-pasca": this.infeksi_intervensi_disinfeksi_pasca,
       "infeksi-intervensi-kadaluarsa-pasca": this.infeksi_intervensi_kadaluarsa_pasca,
       "infeksi-intervensi-sterilitas-pasca": this.infeksi_intervensi_sterilitas_pasca,
       "infeksi-intervensi-penutup-pasca": this.infeksi_intervensi_penutup_pasca,
       "infeksi-evaluasi-pertahankan-pasca": this.infeksi_evaluasi_pertahankan_pasca,
       "ttd-perawat-infeksi-pasca": this.ttd_perawat_infeksi_pasca,
       "id-perawat-infeksi-pasca": this.id_perawat_infeksi_pasca,
       "tanggal-perawat-infeksi-pasca": this.tanggal_perawat_infeksi_pasca,
       "perubahan-diagnosa-suhu": this.perubahan_diagnosa_suhu,
       "perubahan-diagnosa-obat": this.perubahan_diagnosa_obat,
       "perubahan-diagnosa-dehidrasi": this.perubahan_diagnosa_dehidrasi,
       "perubahan-intervensi-catatan-suhu": this.perubahan_intervensi_catatan_suhu,
       "perubahan-intervensi-kaji-suhu": this.perubahan_intervensi_kaji_suhu,
       "perubahan-intervensi-kolaborasi": this.perubahan_intervensi_kolaborasi,
       "perubahan-evaluasi-pasien-dingin": this.perubahan_evaluasi_pasien_dingin,
       "perubahan-evaluasi-pasien-menggigil": this.perubahan_evaluasi_pasien_menggigil,
       "perubahan-evaluasi-suhu-ruangan":  this.perubahan_evaluasi_suhu_ruangan,
       "evaluasi-suhu-ruangan-teks": this.evaluasi_suhu_ruangan_teks,
       "ttd-perawat-perubahan": this.ttd_perawat_perubahan,
       "id-perawat-perubahan": this.id_perawat_perubahan,
       "tanggal-perawat-perubahan": this.tanggal_perawat_perubahan,
       "kecemasan-pasca-operatif-diagnosa-perawatan-luka": this.kecemasan_pasca_operatif_diagnosa_perawatan_luka,
       "kecemasan-pasca-operatif-intervensi-gambar-luka": this.kecemasan_pasca_operatif_intervensi_gambar_luka,
       "kecemasan-pasca-operatif-intervensi-waktu-perasaan": this.kecemasan_pasca_operatif_intervensi_waktu_perasaan,
       "kecemasan-pasca-operatif-intervensi-beri-informasi": this.kecemasan_pasca_operatif_intervensi_beri_informasi,
       "kecemasan-pasca-operatif-intervensi-perbaikan-pengelihatan": this.kecemasan_pasca_operatif_intervensi_perbaikan_pengelihatan,
       "kecemasan-pasca-operatif-intervensi-perasaan-klien": this.kecemasan_pasca_operatif_intervensi_perasaan_klien,
       "kecemasan-pasca-operatif-intervensi-kesempatan-bertanya": this.kecemasan_pasca_operatif_intervensi_kesempatan_bertanya,
       "kecemasan-pasca-operatif-intervensi-nomor-pasien": this.kecemasan_pasca_operatif_intervensi_nomor_pasien,
       "kecemasan-pasca-operatif-evaluasi-kecemasan": this.kecemasan_pasca_operatif_evaluasi_kecemasan,
       "kecemasan-pasca-operatif-evaluasi-tenang-selama": this.kecemasan_pasca_operatif_evaluasi_tenang_selama,
       "ttd-perawat-kecemasan-pasca": this.ttd_perawat_kecemasan_pasca,
       "id-perawat-kecemasan-pasca": this.id_perawat_kecemasan_pasca,
       "tanggal-perawat-kecemasan-pasca": this.tanggal_perawat_kecemasan_pasca,

       //  catatan keperawatan pasca operasi
       "rawat-pasca": this.rawat_pasca,
       transport: this.transport,
       "time-out-waktu-ckpo": this.time_out_waktu_ckpo,
       "keadaan-umum": this.keadaan_umum,
       "tingkat-kesadaran-ckpo": this.tingkat_kesadaran_ckpo,
       "jalan-nafas": this.jalan_nafas,
       pernafasan: this.pernafasan,
       "terapi-oksigen": this.terapi_oksigen,
       "terapi-oksigen-lain-teks": this.terapi_oksigen_lain_teks,
       "kulit-datang-kering": this.kulit_datang_kering,
       "kulit-datang-lembab": this.kulit_datang_lembab,
       "kulit-datang-merah-muda": this.kulit_datang_merah_muda,
       "kulit-datang-biru": this.kulit_datang_biru,
       "kulit-datang-hangat": this.kulit_datang_hangat,
       "kulit-datang-dingin": this.kulit_datang_dingin,
       "kulit-datang-lain": this.kulit_datang_lain,
       "kulit-datang-lain-teks": this.kulit_datang_lain_teks,
       "kulit-keluar-kering": this.kulit_keluar_kering,
       "kulit-keluar-lembab": this.kulit_keluar_lembab,
       "kulit-keluar-merah-muda": this.kulit_keluar_merah_muda,
       "kulit-keluar-biru": this.kulit_keluar_biru,
       "kulit-keluar-hangat": this.kulit_keluar_hangat,
       "kulit-keluar-dingin": this.kulit_keluar_dingin,
       "kulit-keluar-lain": this.kulit_keluar_lain,
       "kulit-keluar-lain-teks": this.kulit_keluar_lain_teks,
       sirkulasi: this.sirkulasi,
       "posisi-pasien": this.posisi_pasien,
       "posisi-pasien-lain-teks": this.posisi_pasien_lain_teks,
       "la-ga": this.la_ga,
       skor: this.skor,
       "aldrette-aktivitas": this.aldrette_aktivitas,
       "aldrette-pernafasan": this.aldrette_pernafasan,
       "aldrette-sirkulasi": this.aldrette_sirkulasi,
       "aldrette-kesadaran": this.aldrette_kesadaran,
       "aldrette-saturasi":  this.aldrette_saturasi,
       "steward-pergerakan": this.steward_pergerakan,
       "steward-pernafasan": this.steward_pernafasan,
       "steward-kesadaran": this.steward_kesadaran,
       "tanggal-pasca-operasi": this.tanggal_pasca_operasi,
       "skala-anestesi": this.skala_anestesi,
       "grid-chart-img": this.grid_chart_img,
       "grid-chart-data": this.grid_chart_data,
       "time-nadi-teratur-masuk": this.time_nadi_teratur_masuk,
       "time-nadi-teratur-keluar": this.time_nadi_teratur_keluar,
       "time-nadi-tidakteratur-masuk": this.time_nadi_tidakteratur_masuk,
       "time-nadi-tidakteratur-keluar": this.time_nadi_tidakteratur_keluar,
       "time-nadi-lemah-masuk": this.time_nadi_lemah_masuk,
       "time-nadi-lemah-keluar": this.time_nadi_lemah_keluar,
       "time-nadi-kuat-masuk": this.time_nadi_kuat_masuk,
       "time-nadi-kuat-keluar": this.time_nadi_kuat_keluar,
       "time-napas-teratur-masuk": this.time_napas_teratur_masuk,
       "time-napas-teratur-keluar": this.time_napas_teratur_keluar,
       "time-napas-tidakteratur-masuk": this.time_napas_tidakteratur_masuk,
       "time-napas-tidakteratur-keluar": this.time_napas_tidakteratur_keluar,
       "time-napas-dangkal-masuk": this.time_napas_dangkal_masuk,
       "time-napas-dangkal-keluar": this.time_napas_dangkal_keluar,
       "time-napas-dalam-masuk": this.time_napas_dalam_masuk,
       "time-napas-dalam-keluar": this.time_napas_dalam_keluar,
       "time-napas-sukar-masuk": this.time_napas_sukar_masuk,
       "time-napas-sukar-keluar": this.time_napas_sukar_keluar,
       "time-napas-terapi-masuk": this.time_napas_terapi_masuk,
       "time-napas-terapi-keluar": this.time_napas_terapi_keluar,
       "time-spo-masuk": this.time_spo_masuk,
       "time-spo-keluar": this.time_spo_keluar,
       "time-masalah-aktual": this.time_masalah_aktual,
       "masalah-aktual-teks": this.masalah_aktual_teks,
       "masalah-aktual-intruksi-teks": this.masalah_aktual_intruksi_teks,
       "masalah-aktual-tindakan-teks": this.masalah_aktual_tindakan_teks,
       "time-urine-satu": this.time_urine_satu,
       "time-urine-dua": this.time_urine_dua,
       "time-urine-tiga": this.time_urine_tiga,
       "time-urine-empat": this.time_urine_empat,
       "time-urine-total": this.time_urine_total,
       "time-pemberitahu-ruang": this.time_pemberitahu_ruang,
       "time-perawat-ruang": this.time_perawat_ruang,
       "id-perawat-dokter":  this.id_perawat_dokter,
       "ttd-perawat": this.ttd_perawat,
       "id-perawat": this.id_perawat,
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

   static createFromJson(json: IUpdateOperativeFairyNursingNotesRequest) {
     return new UpdateOperativeFairyNursingNotesRequest(json);
   }
}

