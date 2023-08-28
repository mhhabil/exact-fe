import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface IUpdateInitialNursingAssessmentChildrenRequest extends IAppRequest {
  emr_id: string,
  nomor_mr: string,
  id_pelayanan: string,
  kode_cabang: string,
  tipe_pasien: string,
  jenis_pelayanan: string,
  id_dokter: string,
  tanggal: string;
  jam: string;
  pengkajian_diperoleh: string;
  keluhan_utama: string;
  riwayat_penyakit_sekarang: string;
  riwayat_penyakit_dahulu: string;
  riwayat_pengobatan: string;
  riwayat_operasi_radio: string;
  riwayat_penyakit_hipertensi: string;
  riwayat_penyakit_asma: string;
  riwayat_penyakit_diabetes: string;
  riwayat_penyakit_hepatitis: string;
  riwayat_penyakit_glaukoma: string;
  riwayat_penyakit_stroke: string;
  riwayat_penyakit_lainnya: string;
  riwayat_penyakit_lainnya_teks: string;
  lama_kehamilan: string;
  komplikasi_radio: string;
  komplikasi_radio_ket: string;
  neonatus_radio: string;
  neonatus_radio_ket: string;
  maternal_radio: string;
  maternal_radio_ket: string;
  imunisasi_bcg: string;
  imunisasi_polio_1: string;
  imunisasi_polio_2: string;
  imunisasi_polio_3: string;
  imunisasi_hepatitis_1: string;
  imunisasi_hepatitis_2: string;
  imunisasi_hepatitis_3: string;
  imunisasi_varicela: string;
  imunisasi_dpt_1: string;
  imunisasi_dpt_2: string;
  imunisasi_dpt_3: string;
  imunisasi_typhus: string;
  imunisasi_campak: string;
  imunisasi_mmr: string;
  imunisasi_lainnya_2: string;
  imunisasi_lainnya_2_teks: string;
  imunisasi_influenza: string;
  imunisasi_lainnya_1: string;
  imunisasi_lainnya_1_teks: string;
  bb_lahir: string;
  pb_lahir: string;
  asi_umur: string;
  makan_tambahan_umur: string;
  berjalan_umur: string;
  tengkurap_umur: string;
  duduk_umur: string;
  merangkak_umur: string;
  berdiri_umur: string;
  asesmen_remaja_1: string;
  asesmen_remaja_2: string;
  asesmen_remaja_3: string;
  asesmen_remaja_4: string;
  asesmen_remaja_5: string;
  asesmen_remaja_6: string;
  asesmen_remaja_7: string;
  asesmen_remaja_8: string;
  asesmen_remaja_9: string;
  asesmen_remaja_10: string;
  asesmen_remaja_11: string;
  asesmen_remaja_12: string;
  pf_td: string;
  pf_nadi: string;
  pf_suhu: string;
  pf_bb: string;
  pf_p: string;
  pf_tb: string;
  kesadaran_radio: string;
  alergi_reaksi_radio: string;
  nyeri_radio: string;
  pengkajian_nyeri: string;
  wajah_radio: string;
  kaki_radio: string;
  aktivitas_radio: string;
  menangis_radio: string;
  kenyamanan_radio: string;
  penyebab_nyeri: string;
  kualitas_nyeri: string;
  lokasi_nyeri: string;
  skala_nyeri: string;
  durasi_nyeri: string;
  total_skor: string;
  kategori_nyeri: string;
  skala_nyeri_radio: string;
  skrining_gizi_1: string;
  skrining_gizi_2: string;
  skrining_gizi_3: string;
  skrining_gizi_4: string;
  skrining_gizi_total: string;
  kategori_nilai_gizi: string;
  keterbatasan_gerak_radio: string;
  nyeri_otot: string;
  kelemahan: string;
  kaku_otot: string;
  amputasi: string;
  lemah_otot: string;
  deformitas: string;
  nyeri_sendi: string;
  parese: string;
  parese_dibagian: string;
  bengkak_sendi: string;
  inkoordinasi: string;
  tidur_malam: string;
  tidur_siang: string;
  kesulitan_tidur_radio: string;
  makan_1: string;
  makan_2: string;
  makan_3: string;
  makan_4: string;
  makan_5: string;
  makan_6: string;
  mandi_1: string;
  mandi_2: string;
  mandi_3: string;
  mandi_4: string;
  mandi_5: string;
  mandi_6: string;
  rawat_1: string;
  rawat_2: string;
  rawat_3: string;
  rawat_4: string;
  rawat_5: string;
  rawat_6: string;
  pakaian_1: string;
  pakaian_2: string;
  pakaian_3: string;
  pakaian_4: string;
  pakaian_5: string;
  pakaian_6: string;
  bak_1: string;
  bak_2: string;
  bak_3: string;
  bak_4: string;
  bak_5: string;
  bak_6: string;
  bab_1: string;
  bab_2: string;
  bab_3: string;
  bab_4: string;
  bab_5: string;
  bab_6: string;
  toilet_1: string;
  toilet_2: string;
  toilet_3: string;
  toilet_4: string;
  toilet_5: string;
  toilet_6: string;
  transfer_1: string;
  transfer_2: string;
  transfer_3: string;
  transfer_4: string;
  transfer_5: string;
  transfer_6: string;
  mobilitas_1: string;
  mobilitas_2: string;
  mobilitas_3: string;
  mobilitas_4: string;
  mobilitas_5: string;
  mobilitas_6: string;
  tangga_1: string;
  tangga_2: string;
  tangga_3: string;
  tangga_4: string;
  tangga_5: string;
  tangga_6: string;
  total_1: string;
  total_2: string;
  total_3: string;
  total_4: string;
  total_5: string;
  total_6: string;
  resiko_jatuh_radio: string;
  bicara_radio: string;
  perlu_penerjemah_radio: string;
  hambatan_belajar_radio: string;
  tingkat_pendidikan_radio: string;
  tingkat_pendidikan_lain_teks: string;
  status_ekonomi_radio: string;
  status_psikologi_radio: string;
  status_psikologi_tidak_terganggu: string;
  status_psikologi_cemas: string;
  status_psikologi_takut: string;
  status_psikologi_marah: string;
  status_psikologi_panik: string;
  status_mental_radio: string;
  sosial_radio: string;
  agama: string;
  keyakinan: string;
  nilai_nilai: string;
  spiritual: string;
  selama_keperawatan: string;
  keperawatan_persepsi_sensori: string;
  keperawatan_penurunan_kesadaran: string;
  keperawatan_nyeri: string;
  keperawatan_resiko_infeksi: string;
  keperawatan_intake_output: string;
  keperawatan_resiko_jatuh: string;
  keperawatan_hiperthermia: string;
  keperawatan_tekanan_intra: string;
  keperawatan_kurang_pengetahuan: string;
  keperawatan_lainnya: string;
  keperawatan_lainnya_masalah: string;
  keperawatan_lainnya_rencana: string;
  id_perawat_pengkaji: string;
  nama_perawat_pengkaji: string;
  ttd_perawat_pengkaji: string;
}

export class UpdateInitialNursingAssessmentChildrenRequest extends AppRequest {
  tanggal: string;
  jam: string;
  pengkajian_diperoleh: string;
  keluhan_utama: string;
  riwayat_penyakit_sekarang: string;
  riwayat_penyakit_dahulu: string;
  riwayat_pengobatan: string;
  riwayat_operasi_radio: string;
  riwayat_penyakit_hipertensi: string;
  riwayat_penyakit_asma: string;
  riwayat_penyakit_diabetes: string;
  riwayat_penyakit_hepatitis: string;
  riwayat_penyakit_glaukoma: string;
  riwayat_penyakit_stroke: string;
  riwayat_penyakit_lainnya: string;
  riwayat_penyakit_lainnya_teks: string;
  lama_kehamilan: string;
  komplikasi_radio: string;
  komplikasi_radio_ket: string;
  neonatus_radio: string;
  neonatus_radio_ket: string;
  maternal_radio: string;
  maternal_radio_ket: string;
  imunisasi_bcg: string;
  imunisasi_polio_1: string;
  imunisasi_polio_2: string;
  imunisasi_polio_3: string;
  imunisasi_hepatitis_1: string;
  imunisasi_hepatitis_2: string;
  imunisasi_hepatitis_3: string;
  imunisasi_varicela: string;
  imunisasi_dpt_1: string;
  imunisasi_dpt_2: string;
  imunisasi_dpt_3: string;
  imunisasi_typhus: string;
  imunisasi_campak: string;
  imunisasi_mmr: string;
  imunisasi_lainnya_2: string;
  imunisasi_lainnya_2_teks: string;
  imunisasi_influenza: string;
  imunisasi_lainnya_1: string;
  imunisasi_lainnya_1_teks: string;
  bb_lahir: string;
  pb_lahir: string;
  asi_umur: string;
  makan_tambahan_umur: string;
  berjalan_umur: string;
  tengkurap_umur: string;
  duduk_umur: string;
  merangkak_umur: string;
  berdiri_umur: string;
  asesmen_remaja_1: string;
  asesmen_remaja_2: string;
  asesmen_remaja_3: string;
  asesmen_remaja_4: string;
  asesmen_remaja_5: string;
  asesmen_remaja_6: string;
  asesmen_remaja_7: string;
  asesmen_remaja_8: string;
  asesmen_remaja_9: string;
  asesmen_remaja_10: string;
  asesmen_remaja_11: string;
  asesmen_remaja_12: string;
  pf_td: string;
  pf_nadi: string;
  pf_suhu: string;
  pf_bb: string;
  pf_p: string;
  pf_tb: string;
  kesadaran_radio: string;
  alergi_reaksi_radio: string;
  nyeri_radio: string;
  pengkajian_nyeri: string;
  wajah_radio: string;
  kaki_radio: string;
  aktivitas_radio: string;
  menangis_radio: string;
  kenyamanan_radio: string;
  penyebab_nyeri: string;
  kualitas_nyeri: string;
  lokasi_nyeri: string;
  skala_nyeri: string;
  durasi_nyeri: string;
  total_skor: string;
  kategori_nyeri: string;
  skala_nyeri_radio: string;
  skrining_gizi_1: string;
  skrining_gizi_2: string;
  skrining_gizi_3: string;
  skrining_gizi_4: string;
  skrining_gizi_total: string;
  kategori_nilai_gizi: string;
  keterbatasan_gerak_radio: string;
  nyeri_otot: string;
  kelemahan: string;
  kaku_otot: string;
  amputasi: string;
  lemah_otot: string;
  deformitas: string;
  nyeri_sendi: string;
  parese: string;
  parese_dibagian: string;
  bengkak_sendi: string;
  inkoordinasi: string;
  tidur_malam: string;
  tidur_siang: string;
  kesulitan_tidur_radio: string;
  makan_1: string;
  makan_2: string;
  makan_3: string;
  makan_4: string;
  makan_5: string;
  makan_6: string;
  mandi_1: string;
  mandi_2: string;
  mandi_3: string;
  mandi_4: string;
  mandi_5: string;
  mandi_6: string;
  rawat_1: string;
  rawat_2: string;
  rawat_3: string;
  rawat_4: string;
  rawat_5: string;
  rawat_6: string;
  pakaian_1: string;
  pakaian_2: string;
  pakaian_3: string;
  pakaian_4: string;
  pakaian_5: string;
  pakaian_6: string;
  bak_1: string;
  bak_2: string;
  bak_3: string;
  bak_4: string;
  bak_5: string;
  bak_6: string;
  bab_1: string;
  bab_2: string;
  bab_3: string;
  bab_4: string;
  bab_5: string;
  bab_6: string;
  toilet_1: string;
  toilet_2: string;
  toilet_3: string;
  toilet_4: string;
  toilet_5: string;
  toilet_6: string;
  transfer_1: string;
  transfer_2: string;
  transfer_3: string;
  transfer_4: string;
  transfer_5: string;
  transfer_6: string;
  mobilitas_1: string;
  mobilitas_2: string;
  mobilitas_3: string;
  mobilitas_4: string;
  mobilitas_5: string;
  mobilitas_6: string;
  tangga_1: string;
  tangga_2: string;
  tangga_3: string;
  tangga_4: string;
  tangga_5: string;
  tangga_6: string;
  total_1: string;
  total_2: string;
  total_3: string;
  total_4: string;
  total_5: string;
  total_6: string;
  resiko_jatuh_radio: string;
  bicara_radio: string;
  perlu_penerjemah_radio: string;
  hambatan_belajar_radio: string;
  tingkat_pendidikan_radio: string;
  tingkat_pendidikan_lain_teks: string;
  status_ekonomi_radio: string;
  status_psikologi_radio: string;
  status_psikologi_tidak_terganggu: string;
  status_psikologi_cemas: string;
  status_psikologi_takut: string;
  status_psikologi_marah: string;
  status_psikologi_panik: string;
  status_mental_radio: string;
  sosial_radio: string;
  agama: string;
  keyakinan: string;
  nilai_nilai: string;
  spiritual: string;
  selama_keperawatan: string;
  keperawatan_persepsi_sensori: string;
  keperawatan_penurunan_kesadaran: string;
  keperawatan_nyeri: string;
  keperawatan_resiko_infeksi: string;
  keperawatan_intake_output: string;
  keperawatan_resiko_jatuh: string;
  keperawatan_hiperthermia: string;
  keperawatan_tekanan_intra: string;
  keperawatan_kurang_pengetahuan: string;
  keperawatan_lainnya: string;
  keperawatan_lainnya_masalah: string;
  keperawatan_lainnya_rencana: string;
  id_perawat_pengkaji: string;
  nama_perawat_pengkaji: string;
  ttd_perawat_pengkaji: string;

  constructor(request: IUpdateInitialNursingAssessmentChildrenRequest) {
    super(request);

    this.tanggal = request.tanggal;
    this.jam = request.jam
    this.pengkajian_diperoleh = request.pengkajian_diperoleh;
    this.keluhan_utama = request.keluhan_utama;
    this.riwayat_penyakit_sekarang = request.riwayat_penyakit_sekarang;
    this.riwayat_penyakit_dahulu = request.riwayat_penyakit_dahulu;
    this.riwayat_pengobatan = request.riwayat_pengobatan;
    this.riwayat_operasi_radio = request.riwayat_operasi_radio;
    this.riwayat_penyakit_hipertensi = request.riwayat_penyakit_hipertensi;
    this.riwayat_penyakit_asma = request.riwayat_penyakit_asma;
    this.riwayat_penyakit_diabetes = request.riwayat_penyakit_diabetes;
    this.riwayat_penyakit_hepatitis = request.riwayat_penyakit_hepatitis;
    this.riwayat_penyakit_glaukoma = request.riwayat_penyakit_glaukoma;
    this.riwayat_penyakit_stroke = request.riwayat_penyakit_stroke;
    this.riwayat_penyakit_lainnya = request.riwayat_penyakit_lainnya;
    this.riwayat_penyakit_lainnya_teks = request.riwayat_penyakit_lainnya_teks;
    this.lama_kehamilan = request.lama_kehamilan;
    this.komplikasi_radio = request.komplikasi_radio;
    this.komplikasi_radio_ket = request.komplikasi_radio_ket;
    this.neonatus_radio = request.neonatus_radio;
    this.neonatus_radio_ket = request.neonatus_radio_ket;
    this.maternal_radio = request.maternal_radio;
    this.maternal_radio_ket = request.maternal_radio_ket;
    this.imunisasi_bcg = request.imunisasi_bcg;
    this.imunisasi_polio_1 = request.imunisasi_polio_1;
    this.imunisasi_polio_2 = request.imunisasi_polio_2;
    this.imunisasi_polio_3 = request.imunisasi_polio_3;
    this.imunisasi_hepatitis_1 = request.imunisasi_hepatitis_1;
    this.imunisasi_hepatitis_2 = request.imunisasi_hepatitis_2;
    this.imunisasi_hepatitis_3 = request.imunisasi_hepatitis_3;
    this.imunisasi_varicela = request.imunisasi_varicela;
    this.imunisasi_dpt_1 = request.imunisasi_dpt_1;
    this.imunisasi_dpt_2 = request.imunisasi_dpt_2;
    this.imunisasi_dpt_3 = request.imunisasi_dpt_3;
    this.imunisasi_typhus = request.imunisasi_typhus;
    this.imunisasi_campak = request.imunisasi_campak;
    this.imunisasi_mmr = request.imunisasi_mmr;
    this.imunisasi_lainnya_2 = request.imunisasi_lainnya_2;
    this.imunisasi_lainnya_2_teks = request.imunisasi_lainnya_2_teks;
    this.imunisasi_influenza = request.imunisasi_influenza;
    this.imunisasi_lainnya_1 = request.imunisasi_lainnya_1;
    this.imunisasi_lainnya_1_teks = request.imunisasi_lainnya_1_teks;
    this.bb_lahir = request.bb_lahir;
    this.pb_lahir = request.pb_lahir;
    this.asi_umur = request.asi_umur;
    this.makan_tambahan_umur = request.makan_tambahan_umur;
    this.berjalan_umur = request.berjalan_umur;
    this.tengkurap_umur = request.tengkurap_umur;
    this.duduk_umur = request.duduk_umur;
    this.merangkak_umur = request.merangkak_umur;
    this.berdiri_umur = request.berdiri_umur;
    this.asesmen_remaja_1 = request.asesmen_remaja_1;
    this.asesmen_remaja_2 = request.asesmen_remaja_2;
    this.asesmen_remaja_3 = request.asesmen_remaja_3;
    this.asesmen_remaja_4 = request.asesmen_remaja_4;
    this.asesmen_remaja_5 = request.asesmen_remaja_5;
    this.asesmen_remaja_6 = request.asesmen_remaja_6;
    this.asesmen_remaja_7 = request.asesmen_remaja_7;
    this.asesmen_remaja_8 = request.asesmen_remaja_8;
    this.asesmen_remaja_9 = request.asesmen_remaja_9;
    this.asesmen_remaja_10 = request.asesmen_remaja_10;
    this.asesmen_remaja_11 = request.asesmen_remaja_11;
    this.asesmen_remaja_12 = request.asesmen_remaja_12;
    this.pf_td = request.pf_td;
    this.pf_nadi = request.pf_nadi;
    this.pf_suhu = request.pf_suhu;
    this.pf_bb = request.pf_bb;
    this.pf_p = request.pf_p;
    this.pf_tb = request.pf_tb;
    this.kesadaran_radio = request.kesadaran_radio;
    this.alergi_reaksi_radio = request.alergi_reaksi_radio;
    this.nyeri_radio = request.nyeri_radio;
    this.pengkajian_nyeri = request.pengkajian_nyeri;
    this.wajah_radio = request.wajah_radio;
    this.kaki_radio = request.kaki_radio;
    this.aktivitas_radio = request.aktivitas_radio;
    this.menangis_radio = request.menangis_radio;
    this.kenyamanan_radio = request.kenyamanan_radio;
    this.penyebab_nyeri = request.penyebab_nyeri;
    this.kualitas_nyeri = request.kualitas_nyeri;
    this.lokasi_nyeri = request.lokasi_nyeri;
    this.skala_nyeri = request.skala_nyeri;
    this.durasi_nyeri = request.durasi_nyeri;
    this.total_skor = request.total_skor;
    this.kategori_nyeri = request.kategori_nyeri;
    this.skala_nyeri_radio = request.skala_nyeri_radio;
    this.skrining_gizi_1 = request.skrining_gizi_1;
    this.skrining_gizi_2 = request.skrining_gizi_2;
    this.skrining_gizi_3 = request.skrining_gizi_3;
    this.skrining_gizi_4 = request.skrining_gizi_4;
    this.skrining_gizi_total = request.skrining_gizi_total;
    this.kategori_nilai_gizi = request.kategori_nilai_gizi;
    this.keterbatasan_gerak_radio = request.keterbatasan_gerak_radio;
    this.nyeri_otot = request.nyeri_otot;
    this.kelemahan = request.kelemahan;
    this.kaku_otot = request.kaku_otot;
    this.amputasi = request.amputasi;
    this.lemah_otot = request.lemah_otot;
    this.deformitas = request.deformitas;
    this.nyeri_sendi = request.nyeri_sendi;
    this.parese = request.parese;
    this.parese_dibagian = request.parese_dibagian;
    this.bengkak_sendi = request.bengkak_sendi;
    this.inkoordinasi = request.inkoordinasi;
    this.tidur_malam = request.tidur_malam;
    this.tidur_siang = request.tidur_siang;
    this.kesulitan_tidur_radio = request.kesulitan_tidur_radio;
    this.makan_1 = request.makan_1;
    this.makan_2 = request.makan_2;
    this.makan_3 = request.makan_3;
    this.makan_4 = request.makan_4;
    this.makan_5 = request.makan_5;
    this.makan_6 = request.makan_6;
    this.mandi_1 = request.mandi_1;
    this.mandi_2 = request.mandi_2;
    this.mandi_3 = request.mandi_3;
    this.mandi_4 = request.mandi_4;
    this.mandi_5 = request.mandi_5;
    this.mandi_6 = request.mandi_6;
    this.rawat_1 = request.rawat_1;
    this.rawat_2 = request.rawat_2;
    this.rawat_3 = request.rawat_3;
    this.rawat_4 = request.rawat_4;
    this.rawat_5 = request.rawat_5;
    this.rawat_6 = request.rawat_6;
    this.pakaian_1 = request.pakaian_1;
    this.pakaian_2 = request.pakaian_2;
    this.pakaian_3 = request.pakaian_3;
    this.pakaian_4 = request.pakaian_4;
    this.pakaian_5 = request.pakaian_5;
    this.pakaian_6 = request.pakaian_6;
    this.bak_1 = request.bak_1;
    this.bak_2 = request.bak_2;
    this.bak_3 = request.bak_3;
    this.bak_4 = request.bak_4;
    this.bak_5 = request.bak_5;
    this.bak_6 = request.bak_6;
    this.bab_1 = request.bab_1;
    this.bab_2 = request.bab_2;
    this.bab_3 = request.bab_3;
    this.bab_4 = request.bab_4;
    this.bab_5 = request.bab_5;
    this.bab_6 = request.bab_6;
    this.toilet_1 = request.toilet_1;
    this.toilet_2 = request.toilet_2;
    this.toilet_3 = request.toilet_3;
    this.toilet_4 = request.toilet_4;
    this.toilet_5 = request.toilet_5;
    this.toilet_6 = request.toilet_6;
    this.transfer_1 = request.transfer_1;
    this.transfer_2 = request.transfer_2;
    this.transfer_3 = request.transfer_3;
    this.transfer_4 = request.transfer_4;
    this.transfer_5 = request.transfer_5;
    this.transfer_6 = request.transfer_6;
    this.mobilitas_1 = request.mobilitas_1;
    this.mobilitas_2 = request.mobilitas_2;
    this.mobilitas_3 = request.mobilitas_3;
    this.mobilitas_4 = request.mobilitas_4;
    this.mobilitas_5 = request.mobilitas_5;
    this.mobilitas_6 = request.mobilitas_6;
    this.tangga_1 = request.tangga_1;
    this.tangga_2 = request.tangga_2;
    this.tangga_3 = request.tangga_3;
    this.tangga_4 = request.tangga_4;
    this.tangga_5 = request.tangga_5;
    this.tangga_6 = request.tangga_6;
    this.total_1 = request.total_1;
    this.total_2 = request.total_2;
    this.total_3 = request.total_3;
    this.total_4 = request.total_4;
    this.total_5 = request.total_5;
    this.total_6 = request.total_6;
    this.resiko_jatuh_radio = request.resiko_jatuh_radio;
    this.bicara_radio = request.bicara_radio;
    this.perlu_penerjemah_radio = request.perlu_penerjemah_radio;
    this.hambatan_belajar_radio = request.hambatan_belajar_radio;
    this.tingkat_pendidikan_radio = request.tingkat_pendidikan_radio;
    this.tingkat_pendidikan_lain_teks = request.tingkat_pendidikan_lain_teks;
    this.status_ekonomi_radio = request.status_ekonomi_radio;
    this.status_psikologi_radio = request.status_psikologi_radio;
    this.status_psikologi_tidak_terganggu = request.status_psikologi_tidak_terganggu;
    this.status_psikologi_cemas = request.status_psikologi_cemas;
    this.status_psikologi_takut = request.status_psikologi_takut;
    this.status_psikologi_marah = request.status_psikologi_marah;
    this.status_psikologi_panik = request.status_psikologi_panik;
    this.status_mental_radio = request.status_mental_radio;
    this.sosial_radio = request.sosial_radio;
    this.agama = request.agama;
    this.keyakinan = request.keyakinan;
    this.nilai_nilai = request.nilai_nilai;
    this.spiritual = request.spiritual;
    this.selama_keperawatan = request.selama_keperawatan;
    this.keperawatan_persepsi_sensori = request.keperawatan_persepsi_sensori;
    this.keperawatan_penurunan_kesadaran = request.keperawatan_penurunan_kesadaran;
    this.keperawatan_nyeri = request.keperawatan_nyeri;
    this.keperawatan_resiko_infeksi = request.keperawatan_resiko_infeksi;
    this.keperawatan_intake_output = request.keperawatan_intake_output;
    this.keperawatan_resiko_jatuh = request.keperawatan_resiko_jatuh;
    this.keperawatan_hiperthermia = request.keperawatan_hiperthermia;
    this.keperawatan_tekanan_intra = request.keperawatan_tekanan_intra;
    this.keperawatan_kurang_pengetahuan = request.keperawatan_kurang_pengetahuan;
    this.keperawatan_lainnya = request.keperawatan_lainnya;
    this.keperawatan_lainnya_masalah = request.keperawatan_lainnya_masalah;
    this.keperawatan_lainnya_rencana = request.keperawatan_lainnya_rencana;
    this.id_perawat_pengkaji = request.id_perawat_pengkaji;
    this.nama_perawat_pengkaji = request.nama_perawat_pengkaji;
    this.ttd_perawat_pengkaji = request.ttd_perawat_pengkaji;
  }

  static schema() {
    return yup.object().shape({
      tanggal: yup.string(),
      jam: yup.string(),
      pengkajian_diperoleh: yup.string(),
      keluhan_utama: yup.string(),
      riwayat_penyakit_sekarang: yup.string(),
      riwayat_penyakit_dahulu: yup.string(),
      riwayat_pengobatan: yup.string(),
      riwayat_operasi_radio: yup.string(),
      riwayat_penyakit_hipertensi: yup.string(),
      riwayat_penyakit_asma: yup.string(),
      riwayat_penyakit_diabetes: yup.string(),
      riwayat_penyakit_hepatitis: yup.string(),
      riwayat_penyakit_glaukoma: yup.string(),
      riwayat_penyakit_stroke: yup.string(),
      riwayat_penyakit_lainnya: yup.string(),
      riwayat_penyakit_lainnya_teks: yup.string(),
      lama_kehamilan: yup.string(),
      komplikasi_radio: yup.string(),
      komplikasi_radio_ket: yup.string(),
      neonatus_radio: yup.string(),
      neonatus_radio_ket: yup.string(),
      maternal_radio: yup.string(),
      maternal_radio_ket: yup.string(),
      imunisasi_bcg: yup.string(),
      imunisasi_polio_1: yup.string(),
      imunisasi_polio_2: yup.string(),
      imunisasi_polio_3: yup.string(),
      imunisasi_hepatitis_1: yup.string(),
      imunisasi_hepatitis_2: yup.string(),
      imunisasi_hepatitis_3: yup.string(),
      imunisasi_varicela: yup.string(),
      imunisasi_dpt_1: yup.string(),
      imunisasi_dpt_2: yup.string(),
      imunisasi_dpt_3: yup.string(),
      imunisasi_typhus: yup.string(),
      imunisasi_campak: yup.string(),
      imunisasi_mmr: yup.string(),
      imunisasi_lainnya_2: yup.string(),
      imunisasi_lainnya_2_teks: yup.string(),
      imunisasi_influenza: yup.string(),
      imunisasi_lainnya_1: yup.string(),
      imunisasi_lainnya_1_teks: yup.string(),
      bb_lahir: yup.string(),
      pb_lahir: yup.string(),
      asi_umur: yup.string(),
      makan_tambahan_umur: yup.string(),
      berjalan_umur: yup.string(),
      tengkurap_umur: yup.string(),
      duduk_umur: yup.string(),
      merangkak_umur: yup.string(),
      berdiri_umur: yup.string(),
      asesmen_remaja_1: yup.string(),
      asesmen_remaja_2: yup.string(),
      asesmen_remaja_3: yup.string(),
      asesmen_remaja_4: yup.string(),
      asesmen_remaja_5: yup.string(),
      asesmen_remaja_6: yup.string(),
      asesmen_remaja_7: yup.string(),
      asesmen_remaja_8: yup.string(),
      asesmen_remaja_9: yup.string(),
      asesmen_remaja_10: yup.string(),
      asesmen_remaja_11: yup.string(),
      asesmen_remaja_12: yup.string(),
      pf_td: yup.string(),
      pf_nadi: yup.string(),
      pf_suhu: yup.string(),
      pf_bb: yup.string(),
      pf_p: yup.string(),
      pf_tb: yup.string(),
      kesadaran_radio: yup.string(),
      alergi_reaksi_radio: yup.string(),
      nyeri_radio: yup.string(),
      pengkajian_nyeri: yup.string(),
      wajah_radio: yup.string(),
      kaki_radio: yup.string(),
      aktivitas_radio: yup.string(),
      menangis_radio: yup.string(),
      kenyamanan_radio: yup.string(),
      penyebab_nyeri: yup.string(),
      kualitas_nyeri: yup.string(),
      lokasi_nyeri: yup.string(),
      skala_nyeri: yup.string(),
      durasi_nyeri: yup.string(),
      total_skor: yup.string(),
      kategori_nyeri: yup.string(),
      skala_nyeri_radio: yup.string(),
      skrining_gizi_1: yup.string(),
      skrining_gizi_2: yup.string(),
      skrining_gizi_3: yup.string(),
      skrining_gizi_4: yup.string(),
      skrining_gizi_total: yup.string(),
      kategori_nilai_gizi: yup.string(),
      keterbatasan_gerak_radio: yup.string(),
      nyeri_otot: yup.string(),
      kelemahan: yup.string(),
      kaku_otot: yup.string(),
      amputasi: yup.string(),
      lemah_otot: yup.string(),
      deformitas: yup.string(),
      nyeri_sendi: yup.string(),
      parese: yup.string(),
      parese_dibagian: yup.string(),
      bengkak_sendi: yup.string(),
      inkoordinasi: yup.string(),
      tidur_malam: yup.string(),
      tidur_siang: yup.string(),
      kesulitan_tidur_radio: yup.string(),
      makan_1: yup.string(),
      makan_2: yup.string(),
      makan_3: yup.string(),
      makan_4: yup.string(),
      makan_5: yup.string(),
      makan_6: yup.string(),
      mandi_1: yup.string(),
      mandi_2: yup.string(),
      mandi_3: yup.string(),
      mandi_4: yup.string(),
      mandi_5: yup.string(),
      mandi_6: yup.string(),
      rawat_1: yup.string(),
      rawat_2: yup.string(),
      rawat_3: yup.string(),
      rawat_4: yup.string(),
      rawat_5: yup.string(),
      rawat_6: yup.string(),
      pakaian_1: yup.string(),
      pakaian_2: yup.string(),
      pakaian_3: yup.string(),
      pakaian_4: yup.string(),
      pakaian_5: yup.string(),
      pakaian_6: yup.string(),
      bak_1: yup.string(),
      bak_2: yup.string(),
      bak_3: yup.string(),
      bak_4: yup.string(),
      bak_5: yup.string(),
      bak_6: yup.string(),
      bab_1: yup.string(),
      bab_2: yup.string(),
      bab_3: yup.string(),
      bab_4: yup.string(),
      bab_5: yup.string(),
      bab_6: yup.string(),
      toilet_1: yup.string(),
      toilet_2: yup.string(),
      toilet_3: yup.string(),
      toilet_4: yup.string(),
      toilet_5: yup.string(),
      toilet_6: yup.string(),
      transfer_1: yup.string(),
      transfer_2: yup.string(),
      transfer_3: yup.string(),
      transfer_4: yup.string(),
      transfer_5: yup.string(),
      transfer_6: yup.string(),
      mobilitas_1: yup.string(),
      mobilitas_2: yup.string(),
      mobilitas_3: yup.string(),
      mobilitas_4: yup.string(),
      mobilitas_5: yup.string(),
      mobilitas_6: yup.string(),
      tangga_1: yup.string(),
      tangga_2: yup.string(),
      tangga_3: yup.string(),
      tangga_4: yup.string(),
      tangga_5: yup.string(),
      tangga_6: yup.string(),
      total_1: yup.string(),
      total_2: yup.string(),
      total_3: yup.string(),
      total_4: yup.string(),
      total_5: yup.string(),
      total_6: yup.string(),
      resiko_jatuh_radio: yup.string(),
      bicara_radio: yup.string(),
      perlu_penerjemah_radio: yup.string(),
      hambatan_belajar_radio: yup.string(),
      tingkat_pendidikan_radio: yup.string(),
      tingkat_pendidikan_lain_teks: yup.string(),
      status_ekonomi_radio: yup.string(),
      status_psikologi_radio: yup.string(),
      status_psikologi_tidak_terganggu: yup.string(),
      status_psikologi_cemas: yup.string(),
      status_psikologi_takut: yup.string(),
      status_psikologi_marah: yup.string(),
      status_psikologi_panik: yup.string(),
      status_mental_radio: yup.string(),
      sosial_radio: yup.string(),
      agama: yup.string(),
      keyakinan: yup.string(),
      nilai_nilai: yup.string(),
      spiritual: yup.string(),
      selama_keperawatan: yup.string(),
      keperawatan_persepsi_sensori: yup.string(),
      keperawatan_penurunan_kesadaran: yup.string(),
      keperawatan_nyeri: yup.string(),
      keperawatan_resiko_infeksi: yup.string(),
      keperawatan_intake_output: yup.string(),
      keperawatan_resiko_jatuh: yup.string(),
      keperawatan_hiperthermia: yup.string(),
      keperawatan_tekanan_intra: yup.string(),
      keperawatan_kurang_pengetahuan: yup.string(),
      keperawatan_lainnya: yup.string(),
      keperawatan_lainnya_masalah: yup.string(),
      keperawatan_lainnya_rencana: yup.string(),
      id_perawat_pengkaji: yup.string(),
      nama_perawat_pengkaji: yup.string(),
      ttd_perawat_pengkaji: yup.string(),
    });
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateInitialNursingAssessmentChildrenRequest) {
    return new UpdateInitialNursingAssessmentChildrenRequest(json);
  }
}
