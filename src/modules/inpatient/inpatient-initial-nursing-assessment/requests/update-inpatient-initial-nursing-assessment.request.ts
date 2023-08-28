import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IUpdateInpatientInitialNursingAssessmentRequest extends IAppRequest {
  skrining_nyeri: string;
  provocating: string;
  quality: string;
  region: string;
  severity: string;
  time: string;
  perawatan_diri: string;
  berpakaian: string;
  naik_turun_tangga: string;
  nyeri_hilang_lainnya_text: string;
  tanggal_masuk_rawat_inap: string,
  riwayat_alergi_tidak_check: string,
  riwayat_alergi_obat_check: string,
  riwayat_alergi_makanan_check: string,
  riwayat_alergi_lainnya_check: string,
  riwayat_alergi_klip_tanda_check: string,
  riwayat_alergi_tidak_diketahui_check: string,
  riwayat_alergi_obat_keterangan: string,
  riwayat_alergi_obat_reaksi: string,
  riwayat_alergi_makanan_keterangan: string,
  riwayat_alergi_makanan_reaksi: string,
  riwayat_alergi_lainnya_keterangan: string,
  riwayat_alergi_lainnya_reaksi: string,
  keperawatan_1_check: string;
  keperawatan_2_check: string;
  keperawatan_3_check: string;
  keperawatan_4_check: string;
  keperawatan_5_check: string;
  keperawatan_6_check: string;
  keperawatan_7_check: string;
  keperawatan_8_check: string;
  keperawatan_9_check: string;
  masalah_keperawatan_lainnya_text: string;
  rencana_keperawatan_lainnya_text: string;
  keluhan_utama: string,
  riwayat_pengobatan_sebelumnya: string,
  pernah_dirawat: string,
  pernah_dirawat_keterangan: string,
  implant_terpasang: string,
  implant_terpasang_keterangan: string,
  psikologis: string,
  psikologis_lain_keterangan: string,
  mental: string,
  mental_lain_keterangan: string,
  mental_kekerasan_keterangan: string,
  hubungan_pasien_keluarga: string,
  tempat_tinggal: string,
  tempat_tinggal_keterangan: string,
  kerabat_nama: string,
  kerabat_hubungan: string,
  kerabat_telepon: string,
  agama: string,
  spiritual_nilai_nilai: string,
  spiritual_keyakinan: string,
  spiritual_kegiatan_perawatan: string,
  td: string,
  bb: string,
  p: string,
  nadi: string,
  tb: string,
  suhu: string,
  rpt: string,
  rpo: string,
  'gambar-mata-od': string,
  'gambar-mata-os': string,
  nutrisi_turun_bb: string,
  asupan_makan: string,
  diagnosa_khusus: string,
  diagnosa: string,
  jenis_penyakit_keterangan: string,
  nutrisionis: string,
  nutrisionis_tanggal: string,
  risiko_jatuh: string,
  status_fungsional: string,
  status_fungsional_keterangan: string,
  alat_bantu_jalan: string,
  skala_nyeri: string,
  lokasi_nyeri: string,
  intensitas_istirahat: string,
  jenis_nyeri: string,
  intensitas_aktivitas: string,
  hambatan: string,
  jenis_hambatan_lain_keterangan: string,
  topik_pembelajaran_lain_keterangan: string,
  waktu_penilaian: string,
  rangsang_defeksi: string,
  rangsang_berkemih: string,
  bersih_diri: string,
  penggunaan_jamban: string,
  makan: string,
  sikap_berbaring_duduk: string,
  berpindah_berjalan: string,
  tanggal_pengkajian_masuk: string,
  tanggal_pengkajian_keluar: string,
  'ttd-perawat-pengkajian-masuk': string,
  'id-perawat-pengkajian-masuk': string,
  'ttd-perawat-pengkajian-keluar': string,
  'id-perawat-pengkajian-keluar': string,
  jenis_penyakit: any,
  nyeri_hilang: any,
  jenis_hambatan: any,
  topik_pembelajaran: any,

  sebelum_sakit_makan: string;
  sebelum_sakit_mandi: string;
  sebelum_sakit_perawatan_diri: string;
  sebelum_sakit_berpakaian: string;
  sebelum_sakit_bak: string;
  sebelum_sakit_bab: string;
  sebelum_sakit_penggunaan_toilet: string;
  sebelum_sakit_transfer: string;
  sebelum_sakit_mobilitas: string;
  sebelum_sakit_naik_turun_tangga: string;
  saat_masuk_makan: string;
  saat_masuk_mandi: string;
  saat_masuk_perawatan_diri: string;
  saat_masuk_berpakaian: string;
  saat_masuk_bak: string;
  saat_masuk_bab: string;
  saat_masuk_penggunaan_toilet: string;
  saat_masuk_transfer: string;
  saat_masuk_mobilitas: string;
  saat_masuk_naik_turun_tangga: string;
  minggu_2_makan: string;
  minggu_2_mandi: string;
  minggu_2_perawatan_diri: string;
  minggu_2_berpakaian: string;
  minggu_2_bak: string;
  minggu_2_bab: string;
  minggu_2_penggunaan_toilet: string;
  minggu_2_transfer: string;
  minggu_2_mobilitas: string;
  minggu_2_naik_turun_tangga: string;
  minggu_3_makan: string;
  minggu_3_mandi: string;
  minggu_3_perawatan_diri: string;
  minggu_3_berpakaian: string;
  minggu_3_bak: string;
  minggu_3_bab: string;
  minggu_3_penggunaan_toilet: string;
  minggu_3_transfer: string;
  minggu_3_mobilitas: string;
  minggu_3_naik_turun_tangga: string;
  minggu_4_makan: string;
  minggu_4_mandi: string;
  minggu_4_perawatan_diri: string;
  minggu_4_berpakaian: string;
  minggu_4_bak: string;
  minggu_4_bab: string;
  minggu_4_penggunaan_toilet: string;
  minggu_4_transfer: string;
  minggu_4_mobilitas: string;
  minggu_4_naik_turun_tangga: string;
  saat_pulang_makan: string;
  saat_pulang_mandi: string;
  saat_pulang_perawatan_diri: string;
  saat_pulang_berpakaian: string;
  saat_pulang_bak: string;
  saat_pulang_bab: string;
  saat_pulang_penggunaan_toilet: string;
  saat_pulang_transfer: string;
  saat_pulang_mobilitas: string;
  saat_pulang_naik_turun_tangga: string;
  sebelum_sakit_total: string;
  saat_masuk_total: string;
  minggu_2_total: string;
  minggu_3_total: string;
  minggu_4_total: string;
  saat_pulang_total: string;
}

export class UpdateInpatientInitialNursingAssessmentRequest extends AppRequest {
  skrining_nyeri: string;
  provocating: string;
  quality: string;
  region: string;
  severity: string;
  time: string;
  perawatan_diri: string;
  berpakaian: string;
  naik_turun_tangga: string;
  nyeri_hilang_lainnya_text: string;
  tanggal_masuk_rawat_inap?: string;
  riwayat_alergi_tidak_check: string;
  riwayat_alergi_obat_check: string;
  riwayat_alergi_makanan_check: string;
  riwayat_alergi_lainnya_check: string;
  riwayat_alergi_klip_tanda_check: string;
  riwayat_alergi_tidak_diketahui_check: string;
  riwayat_alergi_obat_keterangan?: string;
  riwayat_alergi_obat_reaksi?: string;
  riwayat_alergi_makanan_keterangan?: string;
  riwayat_alergi_makanan_reaksi?: string;
  riwayat_alergi_lainnya_keterangan?: string;
  riwayat_alergi_lainnya_reaksi?: string;
  keperawatan_1_check: string;
  keperawatan_2_check: string;
  keperawatan_3_check: string;
  keperawatan_4_check: string;
  keperawatan_5_check: string;
  keperawatan_6_check: string;
  keperawatan_7_check: string;
  keperawatan_8_check: string;
  keperawatan_9_check: string;
  masalah_keperawatan_lainnya_text: string;
  rencana_keperawatan_lainnya_text: string;
  keluhan_utama?: string;
  riwayat_pengobatan_sebelumnya?: string;
  pernah_dirawat?: string;
  pernah_dirawat_keterangan?: string;
  implant_terpasang?: string;
  implant_terpasang_keterangan?: string;
  psikologis?: string;
  psikologis_lain_keterangan?: string;
  mental?: string;
  mental_lain_keterangan?: string;
  mental_kekerasan_keterangan?: string;
  hubungan_pasien_keluarga?: string;
  tempat_tinggal?: string;
  tempat_tinggal_keterangan?: string;
  kerabat_nama?: string;
  kerabat_hubungan?: string;
  kerabat_telepon?: string;
  agama?: string;
  spiritual_nilai_nilai: string;
  spiritual_keyakinan: string;
  spiritual_kegiatan_perawatan?: string;
  td?: string;
  bb?: string;
  p?: string;
  nadi?: string;
  tb?: string;
  suhu?: string;
  rpt?: string;
  rpo?: string;
  'gambar-mata-od'?: string;
  'gambar-mata-os'?: string;
  nutrisi_turun_bb?: string;
  asupan_makan?: string;
  diagnosa_khusus?: string;
  diagnosa?: string;
  jenis_penyakit_keterangan?: string;
  nutrisionis?: string;
  nutrisionis_tanggal?: string;
  risiko_jatuh?: string;
  status_fungsional?: string;
  status_fungsional_keterangan?: string;
  alat_bantu_jalan?: string;
  skala_nyeri?: string;
  lokasi_nyeri?: string;
  intensitas_istirahat?: string;
  jenis_nyeri?: string;
  intensitas_aktivitas?: string;
  hambatan?: string;
  jenis_hambatan_lain_keterangan?: string;
  topik_pembelajaran_lain_keterangan?: string;
  waktu_penilaian?: string;
  rangsang_defeksi?: string;
  rangsang_berkemih?: string;
  bersih_diri?: string;
  penggunaan_jamban?: string;
  makan?: string;
  sikap_berbaring_duduk?: string;
  berpindah_berjalan?: string;
  tanggal_pengkajian_masuk?: string;
  tanggal_pengkajian_keluar?: string;
  'ttd-perawat-pengkajian-masuk'?: string;
  'id-perawat-pengkajian-masuk'?: string;
  'ttd-perawat-pengkajian-keluar'?: string;
  'id-perawat-pengkajian-keluar'?: string;
  jenis_penyakit?: any;
  nyeri_hilang?: any;
  jenis_hambatan?: any;
  topik_pembelajaran?: any;

  sebelum_sakit_makan: string;
  sebelum_sakit_mandi: string;
  sebelum_sakit_perawatan_diri: string;
  sebelum_sakit_berpakaian: string;
  sebelum_sakit_bak: string;
  sebelum_sakit_bab: string;
  sebelum_sakit_penggunaan_toilet: string;
  sebelum_sakit_transfer: string;
  sebelum_sakit_mobilitas: string;
  sebelum_sakit_naik_turun_tangga: string;
  saat_masuk_makan: string;
  saat_masuk_mandi: string;
  saat_masuk_perawatan_diri: string;
  saat_masuk_berpakaian: string;
  saat_masuk_bak: string;
  saat_masuk_bab: string;
  saat_masuk_penggunaan_toilet: string;
  saat_masuk_transfer: string;
  saat_masuk_mobilitas: string;
  saat_masuk_naik_turun_tangga: string;
  minggu_2_makan: string;
  minggu_2_mandi: string;
  minggu_2_perawatan_diri: string;
  minggu_2_berpakaian: string;
  minggu_2_bak: string;
  minggu_2_bab: string;
  minggu_2_penggunaan_toilet: string;
  minggu_2_transfer: string;
  minggu_2_mobilitas: string;
  minggu_2_naik_turun_tangga: string;
  minggu_3_makan: string;
  minggu_3_mandi: string;
  minggu_3_perawatan_diri: string;
  minggu_3_berpakaian: string;
  minggu_3_bak: string;
  minggu_3_bab: string;
  minggu_3_penggunaan_toilet: string;
  minggu_3_transfer: string;
  minggu_3_mobilitas: string;
  minggu_3_naik_turun_tangga: string;
  minggu_4_makan: string;
  minggu_4_mandi: string;
  minggu_4_perawatan_diri: string;
  minggu_4_berpakaian: string;
  minggu_4_bak: string;
  minggu_4_bab: string;
  minggu_4_penggunaan_toilet: string;
  minggu_4_transfer: string;
  minggu_4_mobilitas: string;
  minggu_4_naik_turun_tangga: string;
  saat_pulang_makan: string;
  saat_pulang_mandi: string;
  saat_pulang_perawatan_diri: string;
  saat_pulang_berpakaian: string;
  saat_pulang_bak: string;
  saat_pulang_bab: string;
  saat_pulang_penggunaan_toilet: string;
  saat_pulang_transfer: string;
  saat_pulang_mobilitas: string;
  saat_pulang_naik_turun_tangga: string;
  sebelum_sakit_total: string;
  saat_masuk_total: string;
  minggu_2_total: string;
  minggu_3_total: string;
  minggu_4_total: string;
  saat_pulang_total: string;

  constructor(request: IUpdateInpatientInitialNursingAssessmentRequest) {
    super(request);

    this.skrining_nyeri = request.skrining_nyeri;
    this.provocating = request.provocating;
    this.quality = request.quality;
    this.region = request.region;
    this.severity = request.severity;
    this.time = request.time;
    this.nyeri_hilang_lainnya_text = request.nyeri_hilang_lainnya_text;
    this.perawatan_diri = request.perawatan_diri;
    this.berpakaian = request.berpakaian;
    this.naik_turun_tangga = request.naik_turun_tangga;
    this.tanggal_masuk_rawat_inap = request.tanggal_masuk_rawat_inap ? DateTimeConverter.convertToNormalDatetime(request.tanggal_masuk_rawat_inap) : '';
    this.riwayat_alergi_tidak_check = request.riwayat_alergi_tidak_check;
    this.riwayat_alergi_klip_tanda_check = request.riwayat_alergi_klip_tanda_check;
    this.riwayat_alergi_lainnya_check = request.riwayat_alergi_lainnya_check;
    this.riwayat_alergi_makanan_check = request.riwayat_alergi_makanan_check;
    this.riwayat_alergi_obat_check = request.riwayat_alergi_obat_check;
    this.riwayat_alergi_tidak_diketahui_check = request.riwayat_alergi_tidak_diketahui_check;
    this.riwayat_alergi_obat_keterangan = request.riwayat_alergi_obat_keterangan;
    this.riwayat_alergi_obat_reaksi = request.riwayat_alergi_obat_reaksi;
    this.riwayat_alergi_makanan_keterangan = request.riwayat_alergi_makanan_keterangan;
    this.riwayat_alergi_makanan_reaksi = request.riwayat_alergi_makanan_reaksi;
    this.riwayat_alergi_lainnya_keterangan = request.riwayat_alergi_lainnya_keterangan;
    this.riwayat_alergi_lainnya_reaksi = request.riwayat_alergi_lainnya_reaksi;
    this.keluhan_utama = request.keluhan_utama;
    this.riwayat_pengobatan_sebelumnya = request.riwayat_pengobatan_sebelumnya;
    this.pernah_dirawat = request.pernah_dirawat;
    this.pernah_dirawat_keterangan = request.pernah_dirawat_keterangan;
    this.implant_terpasang = request.implant_terpasang;
    this.implant_terpasang_keterangan = request.implant_terpasang_keterangan;
    this.psikologis = request.psikologis;
    this.psikologis_lain_keterangan = request.psikologis_lain_keterangan;
    this.mental = request.mental;
    this.mental_lain_keterangan = request.mental_lain_keterangan;
    this.mental_kekerasan_keterangan = request.mental_kekerasan_keterangan;
    this.hubungan_pasien_keluarga = request.hubungan_pasien_keluarga;
    this.tempat_tinggal = request.tempat_tinggal;
    this.tempat_tinggal_keterangan = request.tempat_tinggal_keterangan;
    this.kerabat_nama = request.kerabat_nama;
    this.kerabat_hubungan = request.kerabat_hubungan;
    this.kerabat_telepon = request.kerabat_telepon;
    this.agama = request.agama;
    this.spiritual_nilai_nilai = request.spiritual_nilai_nilai;
    this.spiritual_keyakinan = request.spiritual_keyakinan;
    this.spiritual_kegiatan_perawatan = request.spiritual_kegiatan_perawatan;
    this.keperawatan_1_check = request.keperawatan_1_check;
    this.keperawatan_2_check = request.keperawatan_2_check;
    this.keperawatan_3_check = request.keperawatan_3_check;
    this.keperawatan_4_check = request.keperawatan_4_check;
    this.keperawatan_5_check = request.keperawatan_5_check;
    this.keperawatan_6_check = request.keperawatan_6_check;
    this.keperawatan_7_check = request.keperawatan_7_check;
    this.keperawatan_8_check = request.keperawatan_8_check;
    this.keperawatan_9_check = request.keperawatan_9_check;
    this.masalah_keperawatan_lainnya_text = request.masalah_keperawatan_lainnya_text;
    this.rencana_keperawatan_lainnya_text = request.rencana_keperawatan_lainnya_text;
    this.td = request.td;
    this.bb = request.bb;
    this.p = request.p;
    this.nadi = request.nadi;
    this.tb = request.tb;
    this.suhu = request.suhu;
    this.rpt = request.rpt;
    this.rpo = request.rpo;
    this['gambar-mata-od'] = request['gambar-mata-od'];
    this['gambar-mata-os'] = request['gambar-mata-os'];
    this.nutrisi_turun_bb = request.nutrisi_turun_bb;
    this.asupan_makan = request.asupan_makan;
    this.diagnosa_khusus = request.diagnosa_khusus;
    this.diagnosa = request.diagnosa;
    this.jenis_penyakit_keterangan = request.jenis_penyakit_keterangan;
    this.nutrisionis = request.nutrisionis;
    this.nutrisionis_tanggal = request.nutrisionis_tanggal ? DateTimeConverter.convertToNormalDatetime(request.nutrisionis_tanggal) : '';
    this.risiko_jatuh = request.risiko_jatuh;
    this.status_fungsional = request.status_fungsional;
    this.status_fungsional_keterangan = request.status_fungsional_keterangan;
    this.alat_bantu_jalan = request.alat_bantu_jalan;
    this.skala_nyeri = request.skala_nyeri;
    this.lokasi_nyeri = request.lokasi_nyeri;
    this.intensitas_istirahat = request.intensitas_istirahat;
    this.jenis_nyeri = request.jenis_nyeri;
    this.intensitas_aktivitas = request.intensitas_aktivitas;
    this.hambatan = request.hambatan;
    this.jenis_hambatan_lain_keterangan = request.jenis_hambatan_lain_keterangan;
    this.topik_pembelajaran_lain_keterangan = request.topik_pembelajaran_lain_keterangan;
    this.waktu_penilaian = request.waktu_penilaian;
    this.rangsang_defeksi = request.rangsang_defeksi;
    this.rangsang_berkemih = request.rangsang_berkemih;
    this.bersih_diri = request.bersih_diri;
    this.penggunaan_jamban = request.penggunaan_jamban;
    this.makan = request.makan;
    this.sikap_berbaring_duduk = request.sikap_berbaring_duduk;
    this.berpindah_berjalan = request.berpindah_berjalan;
    this.tanggal_pengkajian_masuk = request.tanggal_pengkajian_masuk;
    this.tanggal_pengkajian_keluar = request.tanggal_pengkajian_keluar;
    this['ttd-perawat-pengkajian-masuk'] = request['ttd-perawat-pengkajian-masuk'];
    this['id-perawat-pengkajian-masuk'] = request['id-perawat-pengkajian-masuk'];
    this['ttd-perawat-pengkajian-keluar'] = request['ttd-perawat-pengkajian-keluar'];
    this['id-perawat-pengkajian-keluar'] = request['id-perawat-pengkajian-keluar'];
    this.jenis_penyakit = request.jenis_penyakit;
    this.nyeri_hilang = request.nyeri_hilang;
    this.jenis_hambatan = request.jenis_hambatan;
    this.topik_pembelajaran = request.topik_pembelajaran;

    this.sebelum_sakit_makan = request.sebelum_sakit_makan;
    this.sebelum_sakit_mandi = request.sebelum_sakit_mandi;
    this.sebelum_sakit_perawatan_diri = request.sebelum_sakit_perawatan_diri;
    this.sebelum_sakit_berpakaian = request.sebelum_sakit_berpakaian;
    this.sebelum_sakit_bak = request.sebelum_sakit_bak;
    this.sebelum_sakit_bab = request.sebelum_sakit_bab;
    this.sebelum_sakit_penggunaan_toilet = request.sebelum_sakit_penggunaan_toilet;
    this.sebelum_sakit_transfer = request.sebelum_sakit_transfer;
    this.sebelum_sakit_mobilitas = request.sebelum_sakit_mobilitas;
    this.sebelum_sakit_naik_turun_tangga = request.sebelum_sakit_naik_turun_tangga;
    this.saat_masuk_makan = request.saat_masuk_makan;
    this.saat_masuk_mandi = request.saat_masuk_mandi;
    this.saat_masuk_perawatan_diri = request.saat_masuk_perawatan_diri;
    this.saat_masuk_berpakaian = request.saat_masuk_berpakaian;
    this.saat_masuk_bak = request.saat_masuk_bak;
    this.saat_masuk_bab = request.saat_masuk_bab;
    this.saat_masuk_penggunaan_toilet = request.saat_masuk_penggunaan_toilet;
    this.saat_masuk_transfer = request.saat_masuk_transfer;
    this.saat_masuk_mobilitas = request.saat_masuk_mobilitas;
    this.saat_masuk_naik_turun_tangga = request.saat_masuk_naik_turun_tangga;
    this.minggu_2_makan = request.minggu_2_makan;
    this.minggu_2_mandi = request.minggu_2_mandi;
    this.minggu_2_perawatan_diri = request.minggu_2_perawatan_diri;
    this.minggu_2_berpakaian = request.minggu_2_berpakaian;
    this.minggu_2_bak = request.minggu_2_bak;
    this.minggu_2_bab = request.minggu_2_bab;
    this.minggu_2_penggunaan_toilet = request.minggu_2_penggunaan_toilet;
    this.minggu_2_transfer = request.minggu_2_transfer;
    this.minggu_2_mobilitas = request.minggu_2_mobilitas;
    this.minggu_2_naik_turun_tangga = request.minggu_2_naik_turun_tangga;
    this.minggu_3_makan = request.minggu_3_makan;
    this.minggu_3_mandi = request.minggu_3_mandi;
    this.minggu_3_perawatan_diri = request.minggu_3_perawatan_diri;
    this.minggu_3_berpakaian = request.minggu_3_berpakaian;
    this.minggu_3_bak = request.minggu_3_bak;
    this.minggu_3_bab = request.minggu_3_bab;
    this.minggu_3_penggunaan_toilet = request.minggu_3_penggunaan_toilet;
    this.minggu_3_transfer = request.minggu_3_transfer;
    this.minggu_3_mobilitas = request.minggu_3_mobilitas;
    this.minggu_3_naik_turun_tangga = request.minggu_3_naik_turun_tangga;
    this.minggu_4_makan = request.minggu_4_makan;
    this.minggu_4_mandi = request.minggu_4_mandi;
    this.minggu_4_perawatan_diri = request.minggu_4_perawatan_diri;
    this.minggu_4_berpakaian = request.minggu_4_berpakaian;
    this.minggu_4_bak = request.minggu_4_bak;
    this.minggu_4_bab = request.minggu_4_bab;
    this.minggu_4_penggunaan_toilet = request.minggu_4_penggunaan_toilet;
    this.minggu_4_transfer = request.minggu_4_transfer;
    this.minggu_4_mobilitas = request.minggu_4_mobilitas;
    this.minggu_4_naik_turun_tangga = request.minggu_4_naik_turun_tangga;
    this.saat_pulang_makan = request.saat_pulang_makan;
    this.saat_pulang_mandi = request.saat_pulang_mandi;
    this.saat_pulang_perawatan_diri = request.saat_pulang_perawatan_diri;
    this.saat_pulang_berpakaian = request.saat_pulang_berpakaian;
    this.saat_pulang_bak = request.saat_pulang_bak;
    this.saat_pulang_bab = request.saat_pulang_bab;
    this.saat_pulang_penggunaan_toilet = request.saat_pulang_penggunaan_toilet;
    this.saat_pulang_transfer =  request.saat_pulang_transfer;
    this.saat_pulang_mobilitas = request.saat_pulang_mobilitas;
    this.saat_pulang_naik_turun_tangga = request.saat_pulang_naik_turun_tangga;
    this.sebelum_sakit_total = request.sebelum_sakit_total;
    this.saat_masuk_total = request.saat_masuk_total;
    this.minggu_2_total = request.minggu_2_total;
    this.minggu_3_total = request.minggu_3_total;
    this.minggu_4_total = request.minggu_4_total;
    this.saat_pulang_total = request.saat_pulang_total;
  }

  static schema() {
    return yup.object().shape({
      skrining_nyeri: yup.string(),
      provocating: yup.string(),
      quality: yup.string(),
      severity: yup.string(),
      time: yup.string(),
      tanggal_masuk_rawat_inap: yup.string(),
      riwayat_alergi_tidak_check: yup.string(),
      riwayat_alergi_obat_check: yup.string(),
      riwayat_alergi_makanan_check: yup.string(),
      riwayat_alergi_lainnya_check: yup.string(),
      riwayat_alergi_klip_tanda_check: yup.string(),
      riwayat_alergi_tidak_diketahui_check: yup.string(),
      riwayat_alergi_obat_keterangan: yup.string(),
      riwayat_alergi_obat_reaksi: yup.string(),
      riwayat_alergi_makanan_keterangan: yup.string(),
      riwayat_alergi_makanan_reaksi: yup.string(),
      riwayat_alergi_lainnya_keterangan: yup.string(),
      riwayat_alergi_lainnya_reaksi: yup.string(),
      keluhan_utama: yup.string(),
      riwayat_pengobatan_sebelumnya: yup.string(),
      pernah_dirawat: yup.string(),
      pernah_dirawat_keterangan: yup.string(),
      implant_terpasang: yup.string(),
      implant_terpasang_keterangan: yup.string(),
      psikologis: yup.string(),
      psikologis_lain_keterangan: yup.string(),
      mental: yup.string(),
      mental_lain_keterangan: yup.string(),
      mental_kekerasan_keterangan: yup.string(),
      hubungan_pasien_keluarga: yup.string(),
      tempat_tinggal: yup.string(),
      tempat_tinggal_keterangan: yup.string(),
      kerabat_nama: yup.string(),
      kerabat_hubungan: yup.string(),
      kerabat_telepon: yup.string(),
      agama: yup.string(),
      spiritual_nilai_nilai: yup.string(),
      spiritual_keyakinan: yup.string(),
      spiritual_kegiatan_perawatan: yup.string(),
      td: yup.string(),
      bb: yup.string(),
      p: yup.string(),
      nadi: yup.string(),
      tb: yup.string(),
      suhu: yup.string(),
      rpt: yup.string(),
      rpo: yup.string(),
      'gambar-mata-od': yup.string(),
      'gambar-mata-os': yup.string(),
      nutrisi_turun_bb: yup.string(),
      asupan_makan: yup.string(),
      diagnosa_khusus: yup.string(),
      diagnosa: yup.string(),
      jenis_penyakit_keterangan: yup.string(),
      nutrisionis: yup.string(),
      nutrisionis_tanggal: yup.string(),
      risiko_jatuh: yup.string(),
      status_fungsional: yup.string(),
      status_fungsional_keterangan: yup.string(),
      alat_bantu_jalan: yup.string(),
      skala_nyeri: yup.string(),
      lokasi_nyeri: yup.string(),
      intensitas_istirahat: yup.string(),
      jenis_nyeri: yup.string(),
      intensitas_aktivitas: yup.string(),
      hambatan: yup.string(),
      jenis_hambatan_lain_keterangan: yup.string(),
      topik_pembelajaran_lain_keterangan: yup.string(),
      waktu_penilaian: yup.string(),
      rangsang_defeksi: yup.string(),
      rangsang_berkemih: yup.string(),
      bersih_diri: yup.string(),
      penggunaan_jamban: yup.string(),
      makan: yup.string(),
      sikap_berbaring_duduk: yup.string(),
      berpindah_berjalan: yup.string(),
      tanggal_pengkajian_masuk: yup.string(),
      tanggal_pengkajian_keluar: yup.string(),
      'ttd-perawat-pengkajian-masuk': yup.string(),
      'id-perawat-pengkajian-masuk': yup.string(),
      'ttd-perawat-pengkajian-keluar': yup.string(),
      'id-perawat-pengkajian-keluar': yup.string(),
      jenis_penyakit: yup.mixed(),
      nyeri_hilang: yup.mixed(),
      jenis_hambatan: yup.mixed(),
      topik_pembelajaran: yup.mixed(),

      sebelum_sakit_makan: yup.string(),
      sebelum_sakit_mandi: yup.string(),
      sebelum_sakit_perawatan_diri: yup.string(),
      sebelum_sakit_berpakaian: yup.string(),
      sebelum_sakit_bak: yup.string(),
      sebelum_sakit_bab: yup.string(),
      sebelum_sakit_penggunaan_toilet: yup.string(),
      sebelum_sakit_transfer: yup.string(),
      sebelum_sakit_mobilitas: yup.string(),
      sebelum_sakit_naik_turun_tangga: yup.string(),
      saat_masuk_makan: yup.string(),
      saat_masuk_mandi: yup.string(),
      saat_masuk_perawatan_diri: yup.string(),
      saat_masuk_berpakaian: yup.string(),
      saat_masuk_bak: yup.string(),
      saat_masuk_bab: yup.string(),
      saat_masuk_penggunaan_toilet: yup.string(),
      saat_masuk_transfer: yup.string(),
      saat_masuk_mobilitas: yup.string(),
      saat_masuk_naik_turun_tangga: yup.string(),
      minggu_2_makan: yup.string(),
      minggu_2_mandi: yup.string(),
      minggu_2_perawatan_diri: yup.string(),
      minggu_2_berpakaian: yup.string(),
      minggu_2_bak: yup.string(),
      minggu_2_bab: yup.string(),
      minggu_2_penggunaan_toilet: yup.string(),
      minggu_2_transfer: yup.string(),
      minggu_2_mobilitas: yup.string(),
      minggu_2_naik_turun_tangga: yup.string(),
      minggu_3_makan: yup.string(),
      minggu_3_mandi: yup.string(),
      minggu_3_perawatan_diri: yup.string(),
      minggu_3_berpakaian: yup.string(),
      minggu_3_bak: yup.string(),
      minggu_3_bab: yup.string(),
      minggu_3_penggunaan_toilet: yup.string(),
      minggu_3_transfer: yup.string(),
      minggu_3_mobilitas: yup.string(),
      minggu_3_naik_turun_tangga: yup.string(),
      minggu_4_makan: yup.string(),
      minggu_4_mandi: yup.string(),
      minggu_4_perawatan_diri: yup.string(),
      minggu_4_berpakaian: yup.string(),
      minggu_4_bak: yup.string(),
      minggu_4_bab: yup.string(),
      minggu_4_penggunaan_toilet: yup.string(),
      minggu_4_transfer: yup.string(),
      minggu_4_mobilitas: yup.string(),
      minggu_4_naik_turun_tangga: yup.string(),
      saat_pulang_makan: yup.string(),
      saat_pulang_mandi: yup.string(),
      saat_pulang_perawatan_diri: yup.string(),
      saat_pulang_berpakaian: yup.string(),
      saat_pulang_bak: yup.string(),
      saat_pulang_bab: yup.string(),
      saat_pulang_penggunaan_toilet: yup.string(),
      saat_pulang_transfer: yup.string(),
      saat_pulang_mobilitas: yup.string(),
      saat_pulang_naik_turun_tangga: yup.string(),
      sebelum_sakit_total: yup.string(),
      saat_masuk_total: yup.string(),
      minggu_2_total: yup.string(),
      minggu_3_total: yup.string(),
      minggu_4_total: yup.string(),
      saat_pulang_total: yup.string(),
    });
  }

  static convertToNormalDatetime(date: any) {
    const d = new Date(date);
    const dateFormat = `${d.getFullYear().toString().padStart(4, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    return dateFormat;
  }
  static createFromJson(json: IUpdateInpatientInitialNursingAssessmentRequest) {
    return new UpdateInpatientInitialNursingAssessmentRequest(json);
  }
}
