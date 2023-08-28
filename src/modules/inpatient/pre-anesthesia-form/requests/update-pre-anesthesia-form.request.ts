import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdatePreAnesthesiaFormRequest extends IAppRequest {
  emr_id: string;
  nomor_mr: string;
  id_pelayanan: string;
  kode_cabang: string;
  tipe_pasien: string;
  jenis_pelayanan: string;
  id_dokter: string;
  merokok_radio: string;
  merokok_teks: string;
  alkohol_radio: string;
  alkohol_teks: string;
  kopi_radio: string;
  kopi_teks: string;
  olahraga_radio: string;
  olahraga_teks: string;
  obat_resep: string;
  aspirin_radio: string;
  aspirin_teks: string;
  anti_sakit_radio: string;
  anti_sakit_teks: string;
  obat_bebas: string;
  alergi_obat: string;
  alergi_makanan: string;
  keluarga_pendarahan_radio: string;
  keluarga_pembekuan_darah_radio: string;
  keluarga_pembiusan_radio: string;
  keluarga_demam_radio: string;
  keluarga_diabetes_radio: string;
  keluarga_jantung_radio: string;
  keluarga_irama_jantung_radio: string;
  keluarga_hipertensi_radio: string;
  keluarga_tuberkulosis_radio: string;
  keluarga_lainnya_radio: string;
  keluarga_teks: string;
  pasien_pendarahan_radio: string;
  pasien_pembekuan_darah_radio: string;
  pasien_maag_radio: string;
  pasien_anemia_radio: string;
  pasien_jantung_radio: string;
  pasien_asthma_radio: string;
  pasien_diabetes_radio: string;
  pasien_pingsan_radio: string;
  pasien_mengorok_radio: string;
  pasien_hepatitis_radio: string;
  pasien_hipertensi_radio: string;
  pasien_lainnya_radio: string;
  pasien_kejang_radio: string;
  pasien_bawaan_radio: string;
  pasien_teks: string;
  pasien_transfusi: string;
  pasien_transfusi_teks: string;
  pasien_diagnosis_hiv: string;
  pasien_diagnosis_hiv_teks: string;
  pasien_diagnosis_hiv_hasil: string;
  pasien_lensa_kontak: string;
  pasien_kacamata: string;
  pasien_alat_bantu_dengar: string;
  pasien_gigi_palsu: string;
  pasien_pakai_lainnya: string;
  pasien_pakai_lainnya_teks: string;
  riwayat_operasi: string;
  anestesi_lokal: string;
  anestesi_regional: string;
  anestesi_umum: string;
  sistem_gigi_radio: string;
  sistem_mobilisasi_leher_radio: string;
  sistem_leher_pendek_radio: string;
  sistem_batuk_radio: string;
  sistem_sesak_napas_radio: string;
  sistem_ispa_radio: string;
  sistem_dada_radio: string;
  sistem_denyut_jantung_radio: string;
  sistem_muntah_radio: string;
  sistem_pingsan_radio: string;
  sistem_stroke_radio: string;
  sistem_kejang_radio: string;
  sistem_hamil_radio: string;
  sistem_tulang_belakang_radio: string;
  sistem_obesitas_radio: string;
  sistem_teks: string;
  berat_badan: string;
  tinggi_badan: string;
  tekanan_darah: string;
  nadi: string;
  suhu: string;
  kajian_teks_mallampati: string;
  kajian_teks_gigi_palsu: string;
  kajian_teks_jantung: string;
  kajian_teks_paru: string;
  kajian_teks_abdomen: string;
  kajian_teks_tulang_belakang: string;
  kajian_teks_ekstremitas: string;
  kajian_teks_neurologi: string;
  kajian_teks_keterangan: string;
  laboratorium_hb_ht: string;
  laboratorium_pt: string;
  laboratorium_glukosa: string;
  laboratorium_kehamilan: string;
  laboratorium_kalium: string;
  laboratorium_ureum: string;
  laboratorium_leukosit: string;
  laboratorium_trombosit: string;
  laboratorium_rontgen: string;
  laboratorium_ekg: string;
  laboratorium_na_cl: string;
  laboratorium_kreatinin: string;
  laboratorium_teks: string;
  diagnosis_icd_x: string;
  asa_1: string;
  asa_2: string;
  asa_3: string;
  asa_4: string;
  penyulit_lain_radio: string;
  penyulit_lain_teks: string;
  catatan_tindak_lanjut: string;
  perencanaan_anestesi_sedasi: string;
  perencanaan_anestesi_sedasi_teks: string;
  perencanaan_anestesi_ga: string;
  perencanaan_anestesi_ga_teks: string;
  perencanaan_anestesi_lainnya: string;
  perencanaan_anestesi_lainnya_teks: string;
  perencanaan_khusus_tidak_ada: string;
  perencanaan_khusus_hipotensi: string;
  perencanaan_khusus_ventilasi: string;
  perencanaan_khusus_tci: string;
  perencanaan_khusus_lainnya: string;
  perencanaan_khusus_lainnya_teks: string;
  perencanaan_monitoring_ekg_lead: string;
  perencanaan_monitoring_ekg_lead_teks: string;
  perencanaan_monitoring_cvp: string;
  perencanaan_monitoring_cvp_teks: string;
  perencanaan_monitoring_arteri_line: string;
  perencanaan_monitoring_arteri_line_teks: string;
  perencanaan_monitoring_spo2: string;
  perencanaan_monitoring_et_co2: string;
  perencanaan_monitoring_nibp: string;
  perencanaan_monitoring_bis: string;
  perencanaan_monitoring_temp: string;
  perencanaan_monitoring_lainnya: string;
  perencanaan_monitoring_lainnya_teks: string;
  perencanaan_alat_khusus_bronchoscopy: string;
  perencanaan_alat_khusus_glidescope: string;
  perencanaan_alat_khusus_usg: string;
  perencanaan_alat_khusus_lainnya: string;
  perencanaan_alat_khusus_lainnya_teks: string;
  perencanaan_perawatan_rawat_inap: string;
  perencanaan_perawatan_rawat_jalan: string;
  perencanaan_perawatan_lainnya: string;
  perencanaan_perawatan_lainnya_teks: string;
  perencanaan_persiapan_puasa: string;
  perencanaan_persiapan_puasa_waktu: string;
  perencanaan_persiapan_pre_medikasi: string;
  perencanaan_persiapan_pre_medikasi_waktu: string;
  perencanaan_persiapan_transportasi_kamar_bedah: string;
  perencanaan_persiapan_transportasi_kamar_bedah_waktu: string;
  perencanaan_persiapan_rencana_operasi: string;
  perencanaan_persiapan_rencana_operasi_waktu: string;
  tanda_tangan_pasien: string;
  tanda_tangan_dokter: string;
  id_ttd_dokter: string;
  catatan_persiapan_text: string;
}

export class UpdatePreAnesthesiaFormRequest extends AppRequest {
  emr_id: string;
  nomor_mr: string;
  id_pelayanan: string;
  kode_cabang: string;
  tipe_pasien: string;
  jenis_pelayanan: string;
  id_dokter: string;
  merokok_radio: string;
  merokok_teks: string;
  alkohol_radio: string;
  alkohol_teks: string;
  kopi_radio: string;
  kopi_teks: string;
  olahraga_radio: string;
  olahraga_teks: string;
  obat_resep: string;
  aspirin_radio: string;
  aspirin_teks: string;
  anti_sakit_radio: string;
  anti_sakit_teks: string;
  obat_bebas: string;
  alergi_obat: string;
  alergi_makanan: string;
  keluarga_pendarahan_radio: string;
  keluarga_pembekuan_darah_radio: string;
  keluarga_pembiusan_radio: string;
  keluarga_demam_radio: string;
  keluarga_diabetes_radio: string;
  keluarga_jantung_radio: string;
  keluarga_irama_jantung_radio: string;
  keluarga_hipertensi_radio: string;
  keluarga_tuberkulosis_radio: string;
  keluarga_lainnya_radio: string;
  keluarga_teks: string;
  pasien_pendarahan_radio: string;
  pasien_pembekuan_darah_radio: string;
  pasien_maag_radio: string;
  pasien_anemia_radio: string;
  pasien_jantung_radio: string;
  pasien_asthma_radio: string;
  pasien_diabetes_radio: string;
  pasien_pingsan_radio: string;
  pasien_mengorok_radio: string;
  pasien_hepatitis_radio: string;
  pasien_hipertensi_radio: string;
  pasien_lainnya_radio: string;
  pasien_kejang_radio: string;
  pasien_bawaan_radio: string;
  pasien_teks: string;
  pasien_transfusi: string;
  pasien_transfusi_teks: string;
  pasien_diagnosis_hiv: string;
  pasien_diagnosis_hiv_teks: string;
  pasien_diagnosis_hiv_hasil: string;
  pasien_lensa_kontak: string;
  pasien_kacamata: string;
  pasien_alat_bantu_dengar: string;
  pasien_gigi_palsu: string;
  pasien_pakai_lainnya: string;
  pasien_pakai_lainnya_teks: string;
  riwayat_operasi: string;
  anestesi_lokal: string;
  anestesi_regional: string;
  anestesi_umum: string;
  sistem_gigi_radio: string;
  sistem_mobilisasi_leher_radio: string;
  sistem_leher_pendek_radio: string;
  sistem_batuk_radio: string;
  sistem_sesak_napas_radio: string;
  sistem_ispa_radio: string;
  sistem_dada_radio: string;
  sistem_denyut_jantung_radio: string;
  sistem_muntah_radio: string;
  sistem_pingsan_radio: string;
  sistem_stroke_radio: string;
  sistem_kejang_radio: string;
  sistem_hamil_radio: string;
  sistem_tulang_belakang_radio: string;
  sistem_obesitas_radio: string;
  sistem_teks: string;
  berat_badan: string;
  tinggi_badan: string;
  tekanan_darah: string;
  nadi: string;
  suhu: string;
  kajian_teks_mallampati: string;
  kajian_teks_gigi_palsu: string;
  kajian_teks_jantung: string;
  kajian_teks_paru: string;
  kajian_teks_abdomen: string;
  kajian_teks_tulang_belakang: string;
  kajian_teks_ekstremitas: string;
  kajian_teks_neurologi: string;
  kajian_teks_keterangan: string;
  laboratorium_hb_ht: string;
  laboratorium_pt: string;
  laboratorium_glukosa: string;
  laboratorium_kehamilan: string;
  laboratorium_kalium: string;
  laboratorium_ureum: string;
  laboratorium_leukosit: string;
  laboratorium_trombosit: string;
  laboratorium_rontgen: string;
  laboratorium_ekg: string;
  laboratorium_na_cl: string;
  laboratorium_kreatinin: string;
  laboratorium_teks: string;
  diagnosis_icd_x: string;
  asa_1: string;
  asa_2: string;
  asa_3: string;
  asa_4: string;
  penyulit_lain_radio: string;
  penyulit_lain_teks: string;
  catatan_tindak_lanjut: string;
  perencanaan_anestesi_sedasi: string;
  perencanaan_anestesi_sedasi_teks: string;
  perencanaan_anestesi_ga: string;
  perencanaan_anestesi_ga_teks: string;
  perencanaan_anestesi_lainnya: string;
  perencanaan_anestesi_lainnya_teks: string;
  perencanaan_khusus_tidak_ada: string;
  perencanaan_khusus_hipotensi: string;
  perencanaan_khusus_ventilasi: string;
  perencanaan_khusus_tci: string;
  perencanaan_khusus_lainnya: string;
  perencanaan_khusus_lainnya_teks: string;
  perencanaan_monitoring_ekg_lead: string;
  perencanaan_monitoring_ekg_lead_teks: string;
  perencanaan_monitoring_cvp: string;
  perencanaan_monitoring_cvp_teks: string;
  perencanaan_monitoring_arteri_line: string;
  perencanaan_monitoring_arteri_line_teks: string;
  perencanaan_monitoring_spo2: string;
  perencanaan_monitoring_et_co2: string;
  perencanaan_monitoring_nibp: string;
  perencanaan_monitoring_bis: string;
  perencanaan_monitoring_temp: string;
  perencanaan_monitoring_lainnya: string;
  perencanaan_monitoring_lainnya_teks: string;
  perencanaan_alat_khusus_bronchoscopy: string;
  perencanaan_alat_khusus_glidescope: string;
  perencanaan_alat_khusus_usg: string;
  perencanaan_alat_khusus_lainnya: string;
  perencanaan_alat_khusus_lainnya_teks: string;
  perencanaan_perawatan_rawat_inap: string;
  perencanaan_perawatan_rawat_jalan: string;
  perencanaan_perawatan_lainnya: string;
  perencanaan_perawatan_lainnya_teks: string;
  perencanaan_persiapan_puasa: string;
  perencanaan_persiapan_puasa_waktu: string;
  perencanaan_persiapan_pre_medikasi: string;
  perencanaan_persiapan_pre_medikasi_waktu: string;
  perencanaan_persiapan_transportasi_kamar_bedah: string;
  perencanaan_persiapan_transportasi_kamar_bedah_waktu: string;
  perencanaan_persiapan_rencana_operasi: string;
  perencanaan_persiapan_rencana_operasi_waktu: string;
  tanda_tangan_pasien: string;
  tanda_tangan_dokter: string;
  id_ttd_dokter: string;
  catatan_persiapan_text: string;

  constructor(request: IUpdatePreAnesthesiaFormRequest) {
    super(request);

    this.emr_id = request.emr_id;
    this.nomor_mr = request.nomor_mr;
    this.id_pelayanan = request.id_pelayanan;
    this.kode_cabang = request.kode_cabang;
    this.tipe_pasien = request.tipe_pasien;
    this.jenis_pelayanan = request.jenis_pelayanan;
    this.id_dokter = request.id_dokter;
    this.merokok_radio = request.merokok_radio;
    this.merokok_teks = request.merokok_teks;
    this.alkohol_radio = request.alkohol_radio;
    this.alkohol_teks = request.alkohol_teks;
    this.kopi_radio = request.kopi_radio;
    this.kopi_teks = request.kopi_teks;
    this.olahraga_radio = request.olahraga_radio;
    this.olahraga_teks = request.olahraga_teks;
    this.obat_resep = request.obat_resep;
    this.aspirin_radio = request.aspirin_radio;
    this.aspirin_teks = request.aspirin_teks;
    this.anti_sakit_radio = request.anti_sakit_radio;
    this.anti_sakit_teks = request.anti_sakit_teks;
    this.obat_bebas = request.obat_bebas;
    this.alergi_obat = request.alergi_obat;
    this.alergi_makanan = request.alergi_makanan;
    this.keluarga_pendarahan_radio = request.keluarga_pendarahan_radio;
    this.keluarga_pembekuan_darah_radio = request.keluarga_pembekuan_darah_radio;
    this.keluarga_pembiusan_radio = request.keluarga_pembiusan_radio;
    this.keluarga_demam_radio = request.keluarga_demam_radio
    this.keluarga_diabetes_radio = request.keluarga_diabetes_radio;
    this.keluarga_jantung_radio = request.keluarga_jantung_radio;
    this.keluarga_irama_jantung_radio = request.keluarga_irama_jantung_radio;
    this.keluarga_hipertensi_radio = request.keluarga_hipertensi_radio;
    this.keluarga_tuberkulosis_radio = request.keluarga_tuberkulosis_radio;
    this.keluarga_lainnya_radio = request.keluarga_lainnya_radio;
    this.keluarga_teks = request.keluarga_teks;
    this.pasien_pendarahan_radio = request.pasien_pendarahan_radio;
    this.pasien_pembekuan_darah_radio = request.pasien_pembekuan_darah_radio;
    this.pasien_maag_radio = request.pasien_maag_radio;
    this.pasien_anemia_radio = request.pasien_anemia_radio;
    this.pasien_jantung_radio = request.pasien_jantung_radio;
    this.pasien_asthma_radio = request.pasien_asthma_radio;
    this.pasien_diabetes_radio = request.pasien_diabetes_radio;
    this.pasien_pingsan_radio = request.pasien_pingsan_radio;
    this.pasien_mengorok_radio = request.pasien_mengorok_radio;
    this.pasien_hepatitis_radio = request.pasien_hepatitis_radio;
    this.pasien_hipertensi_radio = request.pasien_hipertensi_radio;
    this.pasien_lainnya_radio = request.pasien_lainnya_radio;
    this.pasien_kejang_radio = request.pasien_kejang_radio;
    this.pasien_bawaan_radio = request.pasien_bawaan_radio;
    this.pasien_teks = request.pasien_teks;
    this.pasien_transfusi = request.pasien_transfusi;
    this.pasien_transfusi_teks = request.pasien_transfusi_teks;
    this.pasien_diagnosis_hiv = request.pasien_diagnosis_hiv;
    this.pasien_diagnosis_hiv_teks = request.pasien_diagnosis_hiv_teks;
    this.pasien_diagnosis_hiv_hasil = request.pasien_diagnosis_hiv_hasil;
    this.pasien_lensa_kontak = request.pasien_lensa_kontak;
    this.pasien_kacamata = request.pasien_kacamata;
    this.pasien_alat_bantu_dengar = request.pasien_alat_bantu_dengar;
    this.pasien_gigi_palsu = request.pasien_gigi_palsu;
    this.pasien_pakai_lainnya = request.pasien_pakai_lainnya;
    this.pasien_pakai_lainnya_teks = request.pasien_pakai_lainnya_teks;
    this.riwayat_operasi = request.riwayat_operasi;
    this.anestesi_lokal = request.anestesi_lokal;
    this.anestesi_regional = request.anestesi_regional;
    this.anestesi_umum = request.anestesi_umum;
    this.sistem_gigi_radio = request.sistem_gigi_radio;
    this.sistem_mobilisasi_leher_radio = request.sistem_mobilisasi_leher_radio;
    this.sistem_leher_pendek_radio = request.sistem_leher_pendek_radio;
    this.sistem_batuk_radio = request.sistem_batuk_radio;
    this.sistem_sesak_napas_radio = request.sistem_sesak_napas_radio;
    this.sistem_ispa_radio = request.sistem_ispa_radio;
    this.sistem_dada_radio = request.sistem_dada_radio;
    this.sistem_denyut_jantung_radio = request.sistem_denyut_jantung_radio;
    this.sistem_muntah_radio = request.sistem_muntah_radio;
    this.sistem_pingsan_radio = request.sistem_pingsan_radio;
    this.sistem_stroke_radio = request.sistem_stroke_radio;
    this.sistem_kejang_radio = request.sistem_kejang_radio;
    this.sistem_hamil_radio = request.sistem_hamil_radio;
    this.sistem_tulang_belakang_radio = request.sistem_tulang_belakang_radio;
    this.sistem_obesitas_radio = request.sistem_obesitas_radio;
    this.sistem_teks = request.sistem_teks;
    this.berat_badan = request.berat_badan;
    this.tinggi_badan = request.tinggi_badan;
    this.tekanan_darah = request.tekanan_darah;
    this.nadi = request.nadi;
    this.suhu = request.suhu;
    this.kajian_teks_mallampati = request.kajian_teks_mallampati;
    this.kajian_teks_gigi_palsu = request.kajian_teks_gigi_palsu;
    this.kajian_teks_jantung = request.kajian_teks_jantung;
    this.kajian_teks_paru = request.kajian_teks_paru;
    this.kajian_teks_abdomen = request.kajian_teks_abdomen;
    this.kajian_teks_tulang_belakang = request.kajian_teks_tulang_belakang;
    this.kajian_teks_ekstremitas = request.kajian_teks_ekstremitas;
    this.kajian_teks_neurologi = request.kajian_teks_neurologi;
    this.kajian_teks_keterangan = request.kajian_teks_keterangan;
    this.laboratorium_hb_ht = request.laboratorium_hb_ht;
    this.laboratorium_pt = request.laboratorium_pt;
    this.laboratorium_glukosa = request.laboratorium_glukosa;
    this.laboratorium_kehamilan = request.laboratorium_kehamilan;
    this.laboratorium_kalium = request.laboratorium_kalium;
    this.laboratorium_ureum = request.laboratorium_ureum;
    this.laboratorium_leukosit = request.laboratorium_leukosit;
    this.laboratorium_trombosit = request.laboratorium_trombosit;
    this.laboratorium_rontgen = request.laboratorium_rontgen;
    this.laboratorium_ekg = request.laboratorium_ekg;
    this.laboratorium_na_cl = request.laboratorium_na_cl;
    this.laboratorium_kreatinin = request.laboratorium_kreatinin;
    this.laboratorium_teks = request.laboratorium_teks;
    this.diagnosis_icd_x = request.diagnosis_icd_x;
    this.asa_1 = request.asa_1;
    this.asa_2 = request.asa_2;
    this.asa_3 = request.asa_3;
    this.asa_4 = request.asa_4;
    this.penyulit_lain_radio = request.penyulit_lain_radio;
    this.penyulit_lain_teks = request.penyulit_lain_teks;
    this.catatan_tindak_lanjut = request.catatan_tindak_lanjut;
    this.perencanaan_anestesi_sedasi = request.perencanaan_anestesi_sedasi;
    this.perencanaan_anestesi_sedasi_teks = request.perencanaan_anestesi_sedasi_teks;
    this.perencanaan_anestesi_ga = request.perencanaan_anestesi_ga;
    this.perencanaan_anestesi_ga_teks = request.perencanaan_anestesi_ga_teks;
    this.perencanaan_anestesi_lainnya = request.perencanaan_anestesi_lainnya;
    this.perencanaan_anestesi_lainnya_teks = request.perencanaan_anestesi_lainnya_teks;
    this.perencanaan_khusus_tidak_ada = request.perencanaan_khusus_tidak_ada;
    this.perencanaan_khusus_hipotensi = request.perencanaan_khusus_hipotensi;
    this.perencanaan_khusus_ventilasi = request.perencanaan_khusus_ventilasi;
    this.perencanaan_khusus_tci = request.perencanaan_khusus_tci;
    this.perencanaan_khusus_lainnya = request.perencanaan_khusus_lainnya;
    this.perencanaan_khusus_lainnya_teks = request.perencanaan_khusus_lainnya_teks;
    this.perencanaan_monitoring_ekg_lead = request.perencanaan_monitoring_ekg_lead;
    this.perencanaan_monitoring_ekg_lead_teks = request.perencanaan_monitoring_ekg_lead_teks;
    this.perencanaan_monitoring_cvp = request.perencanaan_monitoring_cvp;
    this.perencanaan_monitoring_cvp_teks = request.perencanaan_monitoring_cvp_teks;
    this.perencanaan_monitoring_arteri_line = request.perencanaan_monitoring_arteri_line;
    this.perencanaan_monitoring_arteri_line_teks = request.perencanaan_monitoring_arteri_line_teks;
    this.perencanaan_monitoring_spo2 = request.perencanaan_monitoring_spo2;
    this.perencanaan_monitoring_et_co2 = request.perencanaan_monitoring_et_co2;
    this.perencanaan_monitoring_nibp = request.perencanaan_monitoring_nibp;
    this.perencanaan_monitoring_bis = request.perencanaan_monitoring_bis;
    this.perencanaan_monitoring_temp = request.perencanaan_monitoring_temp;
    this.perencanaan_monitoring_lainnya = request.perencanaan_monitoring_lainnya;
    this.perencanaan_monitoring_lainnya_teks = request.perencanaan_monitoring_lainnya_teks;
    this.perencanaan_alat_khusus_bronchoscopy = request.perencanaan_alat_khusus_bronchoscopy;
    this.perencanaan_alat_khusus_glidescope = request.perencanaan_alat_khusus_glidescope;
    this.perencanaan_alat_khusus_usg = request.perencanaan_alat_khusus_usg;
    this.perencanaan_alat_khusus_lainnya = request.perencanaan_alat_khusus_lainnya;
    this.perencanaan_alat_khusus_lainnya_teks = request.perencanaan_alat_khusus_lainnya_teks;
    this.perencanaan_perawatan_rawat_inap = request.perencanaan_perawatan_rawat_inap;
    this.perencanaan_perawatan_rawat_jalan = request.perencanaan_perawatan_rawat_jalan;
    this.perencanaan_perawatan_lainnya = request.perencanaan_perawatan_lainnya;
    this.perencanaan_perawatan_lainnya_teks = request.perencanaan_perawatan_lainnya_teks;
    this.perencanaan_persiapan_puasa = request.perencanaan_persiapan_puasa;
    this.perencanaan_persiapan_puasa_waktu = request.perencanaan_persiapan_puasa_waktu;
    this.perencanaan_persiapan_pre_medikasi = request.perencanaan_persiapan_pre_medikasi;
    this.perencanaan_persiapan_pre_medikasi_waktu = request.perencanaan_persiapan_pre_medikasi_waktu;
    this.perencanaan_persiapan_transportasi_kamar_bedah = request.perencanaan_persiapan_transportasi_kamar_bedah;
    this.perencanaan_persiapan_transportasi_kamar_bedah_waktu = request.perencanaan_persiapan_transportasi_kamar_bedah_waktu;
    this.perencanaan_persiapan_rencana_operasi = request.perencanaan_persiapan_rencana_operasi;
    this.perencanaan_persiapan_rencana_operasi_waktu = request.perencanaan_persiapan_rencana_operasi_waktu;
    this.tanda_tangan_pasien = request.tanda_tangan_pasien;
    this.tanda_tangan_dokter = request.tanda_tangan_dokter;
    this.id_ttd_dokter = request.id_ttd_dokter;
    this.catatan_persiapan_text = request.catatan_persiapan_text;
  }

  static schema() {
    return yup.object().shape({
      emr_id: yup.string(),
      nomor_mr: yup.string(),
      id_pelayanan: yup.string(),
      kode_cabang: yup.string(),
      tipe_pasien: yup.string(),
      jenis_pelayanan: yup.string(),
      id_dokter: yup.string(),
      merokok_radio: yup.string(),
      merokok_teks: yup.string(),
      alkohol_radio: yup.string(),
      alkohol_teks: yup.string(),
      kopi_radio: yup.string(),
      kopi_teks: yup.string(),
      olahraga_radio: yup.string(),
      olahraga_teks: yup.string(),
      obat_resep: yup.string(),
      aspirin_radio: yup.string(),
      aspirin_teks: yup.string(),
      anti_sakit_radio: yup.string(),
      anti_sakit_teks: yup.string(),
      obat_bebas: yup.string(),
      alergi_obat: yup.string(),
      alergi_makanan: yup.string(),
      keluarga_pendarahan_radio: yup.string(),
      keluarga_pembekuan_darah_radio: yup.string(),
      keluarga_pembiusan_radio: yup.string(),
      keluarga_demam_radio: yup.string(),
      keluarga_diabetes_radio: yup.string(),
      keluarga_jantung_radio: yup.string(),
      keluarga_irama_jantung_radio: yup.string(),
      keluarga_hipertensi_radio: yup.string(),
      keluarga_tuberkulosis_radio: yup.string(),
      keluarga_lainnya_radio: yup.string(),
      keluarga_teks: yup.string(),
      pasien_pendarahan_radio: yup.string(),
      pasien_pembekuan_darah_radio: yup.string(),
      pasien_maag_radio: yup.string(),
      pasien_anemia_radio: yup.string(),
      pasien_jantung_radio: yup.string(),
      pasien_asthma_radio: yup.string(),
      pasien_diabetes_radio: yup.string(),
      pasien_pingsan_radio: yup.string(),
      pasien_mengorok_radio: yup.string(),
      pasien_hepatitis_radio: yup.string(),
      pasien_hipertensi_radio: yup.string(),
      pasien_lainnya_radio: yup.string(),
      pasien_kejang_radio: yup.string(),
      pasien_bawaan_radio: yup.string(),
      pasien_teks: yup.string(),
      pasien_transfusi: yup.string(),
      pasien_transfusi_teks: yup.string(),
      pasien_diagnosis_hiv: yup.string(),
      pasien_diagnosis_hiv_teks: yup.string(),
      pasien_diagnosis_hiv_hasil: yup.string(),
      pasien_lensa_kontak: yup.string(),
      pasien_kacamata: yup.string(),
      pasien_alat_bantu_dengar: yup.string(),
      pasien_gigi_palsu: yup.string(),
      pasien_pakai_lainnya: yup.string(),
      pasien_pakai_lainnya_teks: yup.string(),
      riwayat_operasi: yup.string(),
      anestesi_lokal: yup.string(),
      anestesi_regional: yup.string(),
      anestesi_umum: yup.string(),
      sistem_gigi_radio: yup.string(),
      sistem_mobilisasi_leher_radio: yup.string(),
      sistem_leher_pendek_radio: yup.string(),
      sistem_batuk_radio: yup.string(),
      sistem_sesak_napas_radio: yup.string(),
      sistem_ispa_radio: yup.string(),
      sistem_dada_radio: yup.string(),
      sistem_denyut_jantung_radio: yup.string(),
      sistem_muntah_radio: yup.string(),
      sistem_pingsan_radio: yup.string(),
      sistem_stroke_radio: yup.string(),
      sistem_kejang_radio: yup.string(),
      sistem_hamil_radio: yup.string(),
      sistem_tulang_belakang_radio: yup.string(),
      sistem_obesitas_radio: yup.string(),
      sistem_teks: yup.string(),
      berat_badan: yup.string(),
      tinggi_badan: yup.string(),
      tekanan_darah: yup.string(),
      nadi: yup.string(),
      suhu: yup.string(),
      kajian_teks_mallampati: yup.string(),
      kajian_teks_gigi_palsu: yup.string(),
      kajian_teks_jantung: yup.string(),
      kajian_teks_paru: yup.string(),
      kajian_teks_abdomen: yup.string(),
      kajian_teks_tulang_belakang: yup.string(),
      kajian_teks_ekstremitas: yup.string(),
      kajian_teks_neurologi: yup.string(),
      kajian_teks_keterangan: yup.string(),
      laboratorium_hb_ht: yup.string(),
      laboratorium_pt: yup.string(),
      laboratorium_glukosa: yup.string(),
      laboratorium_kehamilan: yup.string(),
      laboratorium_kalium: yup.string(),
      laboratorium_ureum: yup.string(),
      laboratorium_leukosit: yup.string(),
      laboratorium_trombosit: yup.string(),
      laboratorium_rontgen: yup.string(),
      laboratorium_ekg: yup.string(),
      laboratorium_na_cl: yup.string(),
      laboratorium_kreatinin: yup.string(),
      laboratorium_teks: yup.string(),
      diagnosis_icd_x: yup.string(),
      asa_1: yup.string(),
      asa_2: yup.string(),
      asa_3: yup.string(),
      asa_4: yup.string(),
      penyulit_lain_radio: yup.string(),
      penyulit_lain_teks: yup.string(),
      catatan_tindak_lanjut: yup.string(),
      perencanaan_anestesi_sedasi: yup.string(),
      perencanaan_anestesi_sedasi_teks: yup.string(),
      perencanaan_anestesi_ga: yup.string(),
      perencanaan_anestesi_ga_teks: yup.string(),
      perencanaan_anestesi_lainnya: yup.string(),
      perencanaan_anestesi_lainnya_teks: yup.string(),
      perencanaan_khusus_tidak_ada: yup.string(),
      perencanaan_khusus_hipotensi: yup.string(),
      perencanaan_khusus_ventilasi: yup.string(),
      perencanaan_khusus_tci: yup.string(),
      perencanaan_khusus_lainnya: yup.string(),
      perencanaan_khusus_lainnya_teks: yup.string(),
      perencanaan_monitoring_ekg_lead: yup.string(),
      perencanaan_monitoring_ekg_lead_teks: yup.string(),
      perencanaan_monitoring_cvp: yup.string(),
      perencanaan_monitoring_cvp_teks: yup.string(),
      perencanaan_monitoring_arteri_line: yup.string(),
      perencanaan_monitoring_arteri_line_teks: yup.string(),
      perencanaan_monitoring_spo2: yup.string(),
      perencanaan_monitoring_et_co2: yup.string(),
      perencanaan_monitoring_nibp: yup.string(),
      perencanaan_monitoring_bis: yup.string(),
      perencanaan_monitoring_temp: yup.string(),
      perencanaan_monitoring_lainnya: yup.string(),
      perencanaan_monitoring_lainnya_teks: yup.string(),
      perencanaan_alat_khusus_bronchoscopy: yup.string(),
      perencanaan_alat_khusus_glidescope: yup.string(),
      perencanaan_alat_khusus_usg: yup.string(),
      perencanaan_alat_khusus_lainnya: yup.string(),
      perencanaan_alat_khusus_lainnya_teks: yup.string(),
      perencanaan_perawatan_rawat_inap: yup.string(),
      perencanaan_perawatan_rawat_jalan: yup.string(),
      perencanaan_perawatan_lainnya: yup.string(),
      perencanaan_perawatan_lainnya_teks: yup.string(),
      perencanaan_persiapan_puasa: yup.string(),
      perencanaan_persiapan_puasa_waktu: yup.string(),
      perencanaan_persiapan_pre_medikasi: yup.string(),
      perencanaan_persiapan_pre_medikasi_waktu: yup.string(),
      perencanaan_persiapan_transportasi_kamar_bedah: yup.string(),
      perencanaan_persiapan_transportasi_kamar_bedah_waktu: yup.string(),
      perencanaan_persiapan_rencana_operasi: yup.string(),
      perencanaan_persiapan_rencana_operasi_waktu: yup.string(),
      tanda_tangan_pasien: yup.string(),
      tanda_tangan_dokter: yup.string(),
      id_ttd_dokter: yup.string(),
      catatn_persiapan_text: yup.string(),
    });
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdatePreAnesthesiaFormRequest) {
    return new UpdatePreAnesthesiaFormRequest(json);
  }
}
