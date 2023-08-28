import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@src/shared/request';

export interface IUpdateIntegratedEducationRequest extends IAppRequest {
  asesmen: Array<string>
  daftar_pasien_informasi_lain: Array<string>
  materi_edukasi: string;
  dpjp: string;
  dpjp_kondisi_pasien: string;
  dpjp_hasil_pemeriksaan: string;
  dpjp_pengobatan: string;
  dpjp_manfaat: string;
  dpjp_alternatif: string;
  dpjp_keberhasilan: string;
  dpjp_pemulihan: string;
  dpjp_diagnosa: string;
  dpjp_hasil_asuhan: string;
  dpjp_hasil_asuhan_teks: string;
  dpjp_hasil_asuhan_teks_2: string;
  dpjp_diagnosa_teks: string;
  dpjp_diagnosa_teks_1: string;
  dpjp_diagnosa_teks_2: string;
  manajemen_nyeri_farmakologi: string;
  manajemen_nyeri_non_farmakologi: string;
  rohaniawan_bimbingan: string;
  rohaniawan_konseling: string;
  keperawatan_mobilisasi: string;
  keperawatan_perawatan_luka: string;
  keperawatan_perawatan_peralatan: string;
  keperawatan_pemberian_makan: string;
  keperawatan_membuang_urine: string;
  keperawatan_lain_lain: string;
  keperawatan_lain_lain_teks: string;
  ttd_penerima_edukasi_dpjp: string;
  ttd_penerima_edukasi_manajemen_nyeri: string;
  ttd_penerima_edukasi_rohaniawan: string;
  ttd_penerima_edukasi_keperawatan: string;
  ttd_penerima_edukasi_informasi_lain: string;
  ttd_edukator_dpjp: string;
  ttd_edukator_manajemen_nyeri: string;
  ttd_edukator_rohaniawan: string;
  ttd_edukator_keperawatan: string;
  ttd_edukator_informasi_lain: string;
  id_edukator_dpjp: string;
  id_edukator_manajemen_nyeri: string;
  id_edukator_rohaniawan: string;
  id_edukator_keperawatan: string;
  id_edukator_informasi_lain: string;
  dpjp_diskusi: string;
  dpjp_demonstrasi: string;
  dpjp_ceramah: string;
  dpjp_solusi: string;
  dpjp_observatori: string;
  dpjp_metode_pembelajaran_lain: string;
  dpjp_metode_pembelajaran_lain_teks: string;
  dpjp_mampu_mengerti: string;
  dpjp_mampu_memahami: string;
  dpjp_evaluasi_pasien_lain: string;
  dpjp_evaluasi_pasien_lain_teks: string;
  dpjp_waktu_edukasi: string;
  dpjp_durasi: string;
  dpjp_pasien: string;
  dpjp_pasangan: string;
  dpjp_orang_tua: string;
  dpjp_saudara_kandung: string;
  dpjp_penerima_edukasi_lain: string;
  dpjp_penerima_edukasi_lain_teks: string;
  manajemen_nyeri_diskusi: string;
  manajemen_nyeri_demonstrasi: string;
  manajemen_nyeri_ceramah: string;
  manajemen_nyeri_solusi: string;
  manajemen_nyeri_observatori: string;
  manajemen_nyeri_metode_pembelajaran_lain: string;
  manajemen_nyeri_metode_pembelajaran_lain_teks: string;
  manajemen_nyeri_mampu_mengerti: string;
  manajemen_nyeri_mampu_memahami: string;
  manajemen_nyeri_evaluasi_pasien_lain: string;
  manajemen_nyeri_evaluasi_pasien_lain_teks: string;
  manajemen_nyeri_waktu_edukasi: string;
  manajemen_nyeri_durasi: string;
  manajemen_nyeri_pasien: string;
  manajemen_nyeri_pasangan: string;
  manajemen_nyeri_orang_tua: string;
  manajemen_nyeri_saudara_kandung: string;
  manajemen_nyeri_penerima_edukasi_lain: string;
  manajemen_nyeri_penerima_edukasi_lain_teks: string;
  rohaniawan_diskusi: string;
  rohaniawan_demonstrasi: string;
  rohaniawan_ceramah: string;
  rohaniawan_solusi: string;
  rohaniawan_observatori: string;
  rohaniawan_metode_pembelajaran_lain: string;
  rohaniawan_metode_pembelajaran_lain_teks: string;
  rohaniawan_mampu_mengerti: string;
  rohaniawan_mampu_memahami: string;
  rohaniawan_evaluasi_pasien_lain: string;
  rohaniawan_evaluasi_pasien_lain_teks: string;
  rohaniawan_waktu_edukasi: string;
  rohaniawan_durasi: string;
  rohaniawan_pasien: string;
  rohaniawan_pasangan: string;
  rohaniawan_orang_tua: string;
  rohaniawan_saudara_kandung: string;
  rohaniawan_penerima_edukasi_lain: string;
  rohaniawan_penerima_edukasi_lain_teks: string;
  keperawatan_diskusi: string;
  keperawatan_demonstrasi: string;
  keperawatan_ceramah: string;
  keperawatan_solusi: string;
  keperawatan_observatori: string;
  keperawatan_metode_pembelajaran_lain: string;
  keperawatan_metode_pembelajaran_lain_teks: string;
  keperawatan_mampu_mengerti: string;
  keperawatan_mampu_memahami: string;
  keperawatan_evaluasi_pasien_lain: string;
  keperawatan_evaluasi_pasien_lain_teks: string;
  keperawatan_waktu_edukasi: string;
  keperawatan_durasi: string;
  keperawatan_pasien: string;
  keperawatan_pasangan: string;
  keperawatan_orang_tua: string;
  keperawatan_saudara_kandung: string;
  keperawatan_penerima_edukasi_lain: string;
  keperawatan_penerima_edukasi_lain_teks: string;
  informasi_lain_diskusi: string;
  informasi_lain_demonstrasi: string;
  informasi_lain_ceramah: string;
  informasi_lain_solusi: string;
  informasi_lain_observatori: string;
  informasi_lain_metode_pembelajaran_lain: string;
  informasi_lain_metode_pembelajaran_lain_teks: string;
  informasi_lain_mampu_mengerti: string;
  informasi_lain_mampu_memahami: string;
  informasi_lain_evaluasi_pasien_lain: string;
  informasi_lain_evaluasi_pasien_lain_teks: string;
  informasi_lain_waktu_edukasi: string;
  informasi_lain_durasi: string;
  informasi_lain_pasien: string;
  informasi_lain_pasangan: string;
  informasi_lain_orang_tua: string;
  informasi_lain_saudara_kandung: string;
  informasi_lain_penerima_edukasi_lain: string;
  informasi_lain_penerima_edukasi_lain_teks: string;
  farmasi_penggunaan_obat: string;
  farmasi_efek_samping: string;
  farmasi_mencegah_interaksi: string;
  farmasi_lain_lain: string;
  farmasi_lain_lain_teks: string;
  farmasi_diskusi: string;
  farmasi_demonstrasi: string;
  farmasi_ceramah: string;
  farmasi_solusi: string;
  farmasi_observatori: string;
  farmasi_metode_pembelajaran_lain: string;
  farmasi_metode_pembelajaran_lain_teks: string;
  farmasi_mampu_memahami: string;
  farmasi_mampu_mengerti: string;
  farmasi_evaluasi_pasien_lain: string;
  farmasi_evaluasi_pasien_lain_teks: string;
  farmasi_waktu_edukasi: string;
  farmasi_durasi: string;
  farmasi_pasien: string;
  farmasi_pasangan: string;
  farmasi_orang_tua: string;
  farmasi_saudara_kandung: string;
  farmasi_penerima_edukasi_lain: string;
  farmasi_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_farmasi: string;
  ttd_edukator_farmasi: string;
  id_edukator_farmasi: string;
  gizi_status_gizi: string;
  gizi_selama_perawatan: string;
  gizi_untuk_dirumah: string;
  gizi_diluar_rs: string;
  gizi_lain_lain: string;
  gizi_lain_lain_teks: string;
  gizi_diskusi:  string
  gizi_demonstrasi: string;
  gizi_ceramah: string;
  gizi_solusi: string;
  gizi_observatori: string;
  gizi_metode_pembelajaran_lain: string;
  gizi_metode_pembelajaran_lain_teks: string;
  gizi_mampu_mengerti: string;
  gizi_mampu_memahami: string;
  gizi_evaluasi_pasien_lain: string;
  gizi_evaluasi_pasien_lain_teks: string;
  gizi_waktu_edukasi: string;
  gizi_durasi: string;
  gizi_pasien: string;
  gizi_pasangan: string;
  gizi_orang_tua: string;
  gizi_saudara_kandung: string;
  gizi_penerima_edukasi_lain: string;
  gizi_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_gizi: string;
  ttd_edukator_gizi: string;
  id_edukator_gizi: string;
  post_op_merunduk: string;
  post_op_setengah_duduk: string;
  post_op_tidak_ada: string;
  post_op_diskusi:  string
  post_op_demonstrasi: string;
  post_op_ceramah: string;
  post_op_solusi: string;
  post_op_observatori: string;
  post_op_metode_pembelajaran_lain: string;
  post_op_metode_pembelajaran_lain_teks: string;
  post_op_mampu_mengerti: string;
  post_op_mampu_memahami: string;
  post_op_evaluasi_pasien_lain: string;
  post_op_evaluasi_pasien_lain_teks: string;
  post_op_waktu_edukasi: string;
  post_op_durasi: string;
  post_op_pasien: string;
  post_op_pasangan: string;
  post_op_orang_tua: string;
  post_op_saudara_kandung: string;
  post_op_penerima_edukasi_lain: string;
  post_op_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_post_op: string;
  ttd_edukator_post_op: string;
  id_edukator_post_op: string;
  dokter_kondisi_pasien: string;
  dokter_hasil_pemeriksaan: string;
  dokter_teknik_anestesi: string;
  dokter_manfaat_kekurangan: string;
  dokter_nyeri_pasca: string;
  dokter_nyeri_analgesi: string;
  dokter_diskusi:  string;
  dokter_demonstrasi: string;
  dokter_ceramah: string;
  dokter_solusi: string;
  dokter_observatori: string;
  dokter_metode_pembelajaran_lain: string;
  dokter_metode_pembelajaran_lain_teks: string;
  dokter_mampu_mengerti: string;
  dokter_mampu_memahami: string;
  dokter_evaluasi_pasien_lain: string;
  dokter_evaluasi_pasien_lain_teks: string;
  dokter_waktu_edukasi: string;
  dokter_durasi: string;
  dokter_pasien: string;
  dokter_pasangan: string;
  dokter_orang_tua: string;
  dokter_saudara_kandung: string;
  dokter_penerima_edukasi_lain: string;
  dokter_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_dokter: string;
  ttd_edukator_dokter: string;
  id_edukator_dokter: string;
  mencuci_tangan_handwash: string;
  mencuci_tangan_handrub: string;
  mencuci_tangan_diskusi:  string;
  mencuci_tangan_demonstrasi: string;
  mencuci_tangan_ceramah: string;
  mencuci_tangan_solusi: string;
  mencuci_tangan_observatori: string;
  mencuci_tangan_metode_pembelajaran_lain: string;
  mencuci_tangan_metode_pembelajaran_lain_teks: string;
  mencuci_tangan_mampu_mengerti: string;
  mencuci_tangan_mampu_memahami: string;
  mencuci_tangan_evaluasi_pasien_lain: string;
  mencuci_tangan_evaluasi_pasien_lain_teks: string;
  mencuci_tangan_waktu_edukasi: string;
  mencuci_tangan_durasi: string;
  mencuci_tangan_pasien: string;
  mencuci_tangan_pasangan: string;
  mencuci_tangan_orang_tua: string;
  mencuci_tangan_saudara_kandung: string;
  mencuci_tangan_penerima_edukasi_lain: string;
  mencuci_tangan_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_mencuci_tangan: string;
  ttd_edukator_mencuci_tangan: string;
  id_edukator_mencuci_tangan: string;
  penggunaan_peralatan_infus: string;
  penggunaan_peralatan_oksigen: string;
  penggunaan_peralatan_nebulizer: string;
  penggunaan_peralatan_lain: string;
  penggunaan_peralatan_lain_teks: string;
  penggunaan_peralatan_diskusi:  string;
  penggunaan_peralatan_demonstrasi: string;
  penggunaan_peralatan_ceramah: string;
  penggunaan_peralatan_solusi: string;
  penggunaan_peralatan_observatori: string;
  penggunaan_peralatan_metode_pembelajaran_lain: string;
  penggunaan_peralatan_metode_pembelajaran_lain_teks: string;
  penggunaan_peralatan_mampu_mengerti: string;
  penggunaan_peralatan_mampu_memahami: string;
  penggunaan_peralatan_evaluasi_pasien_lain: string;
  penggunaan_peralatan_evaluasi_pasien_lain_teks: string;
  penggunaan_peralatan_waktu_edukasi: string;
  penggunaan_peralatan_durasi: string;
  penggunaan_peralatan_pasien: string;
  penggunaan_peralatan_pasangan: string;
  penggunaan_peralatan_orang_tua: string;
  penggunaan_peralatan_saudara_kandung: string;
  penggunaan_peralatan_penerima_edukasi_lain: string;
  penggunaan_peralatan_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_penggunaan_peralatan: string;
  ttd_edukator_penggunaan_peralatan: string;
  id_edukator_penggunaan_peralatan: string;
  hak_kewajiban_hak_pasien: string;
  hak_kewajiban_kewajiban_pasien: string;
  hak_kewajiban_diskusi:  string;
  hak_kewajiban_demonstrasi: string;
  hak_kewajiban_ceramah: string;
  hak_kewajiban_solusi: string;
  hak_kewajiban_observatori: string;
  hak_kewajiban_metode_pembelajaran_lain: string;
  hak_kewajiban_metode_pembelajaran_lain_teks: string;
  hak_kewajiban_mampu_mengerti: string;
  hak_kewajiban_mampu_memahami: string;
  hak_kewajiban_evaluasi_pasien_lain: string;
  hak_kewajiban_evaluasi_pasien_lain_teks: string;
  hak_kewajiban_waktu_edukasi: string;
  hak_kewajiban_durasi: string;
  hak_kewajiban_pasien: string;
  hak_kewajiban_pasangan: string;
  hak_kewajiban_orang_tua: string;
  hak_kewajiban_saudara_kandung: string;
  hak_kewajiban_penerima_edukasi_lain: string;
  hak_kewajiban_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_hak_kewajiban: string;
  ttd_edukator_hak_kewajiban: string;
  id_edukator_hak_kewajiban: string;
}

export class UpdateIntegratedEducationRequest extends AppRequest {
  asesmen: Array<string>
  daftar_pasien_informasi_lain: Array<string>
  materi_edukasi: string;
  dpjp: string;
  dpjp_kondisi_pasien: string;
  dpjp_hasil_pemeriksaan: string;
  dpjp_pengobatan: string;
  dpjp_manfaat: string;
  dpjp_alternatif: string;
  dpjp_keberhasilan: string;
  dpjp_pemulihan: string;
  dpjp_diagnosa: string;
  dpjp_hasil_asuhan: string;
  dpjp_hasil_asuhan_teks: string;
  dpjp_hasil_asuhan_teks_2: string;
  dpjp_diagnosa_teks: string;
  dpjp_diagnosa_teks_1: string;
  dpjp_diagnosa_teks_2: string;
  manajemen_nyeri_farmakologi: string;
  manajemen_nyeri_non_farmakologi: string;
  rohaniawan_bimbingan: string;
  rohaniawan_konseling: string;
  keperawatan_mobilisasi: string;
  keperawatan_perawatan_luka: string;
  keperawatan_perawatan_peralatan: string;
  keperawatan_pemberian_makan: string;
  keperawatan_membuang_urine: string;
  keperawatan_lain_lain: string;
  keperawatan_lain_lain_teks: string;
  ttd_penerima_edukasi_dpjp: string;
  ttd_penerima_edukasi_manajemen_nyeri: string;
  ttd_penerima_edukasi_rohaniawan: string;
  ttd_penerima_edukasi_keperawatan: string;
  ttd_penerima_edukasi_informasi_lain: string;
  ttd_edukator_dpjp: string;
  ttd_edukator_manajemen_nyeri: string;
  ttd_edukator_rohaniawan: string;
  ttd_edukator_keperawatan: string;
  ttd_edukator_informasi_lain: string;
  id_edukator_dpjp: string;
  id_edukator_manajemen_nyeri: string;
  id_edukator_rohaniawan: string;
  id_edukator_keperawatan: string;
  id_edukator_informasi_lain: string;
  dpjp_diskusi: string;
  dpjp_demonstrasi: string;
  dpjp_ceramah: string;
  dpjp_solusi: string;
  dpjp_observatori: string;
  dpjp_metode_pembelajaran_lain: string;
  dpjp_metode_pembelajaran_lain_teks: string;
  dpjp_mampu_mengerti: string;
  dpjp_mampu_memahami: string;
  dpjp_evaluasi_pasien_lain: string;
  dpjp_evaluasi_pasien_lain_teks: string;
  dpjp_waktu_edukasi: string;
  dpjp_durasi: string;
  dpjp_pasien: string;
  dpjp_pasangan: string;
  dpjp_orang_tua: string;
  dpjp_saudara_kandung: string;
  dpjp_penerima_edukasi_lain: string;
  dpjp_penerima_edukasi_lain_teks: string;
  manajemen_nyeri_diskusi: string;
  manajemen_nyeri_demonstrasi: string;
  manajemen_nyeri_ceramah: string;
  manajemen_nyeri_solusi: string;
  manajemen_nyeri_observatori: string;
  manajemen_nyeri_metode_pembelajaran_lain: string;
  manajemen_nyeri_metode_pembelajaran_lain_teks: string;
  manajemen_nyeri_mampu_mengerti: string;
  manajemen_nyeri_mampu_memahami: string;
  manajemen_nyeri_evaluasi_pasien_lain: string;
  manajemen_nyeri_evaluasi_pasien_lain_teks: string;
  manajemen_nyeri_waktu_edukasi: string;
  manajemen_nyeri_durasi: string;
  manajemen_nyeri_pasien: string;
  manajemen_nyeri_pasangan: string;
  manajemen_nyeri_orang_tua: string;
  manajemen_nyeri_saudara_kandung: string;
  manajemen_nyeri_penerima_edukasi_lain: string;
  manajemen_nyeri_penerima_edukasi_lain_teks: string;
  rohaniawan_diskusi: string;
  rohaniawan_demonstrasi: string;
  rohaniawan_ceramah: string;
  rohaniawan_solusi: string;
  rohaniawan_observatori: string;
  rohaniawan_metode_pembelajaran_lain: string;
  rohaniawan_metode_pembelajaran_lain_teks: string;
  rohaniawan_mampu_mengerti: string;
  rohaniawan_mampu_memahami: string;
  rohaniawan_evaluasi_pasien_lain: string;
  rohaniawan_evaluasi_pasien_lain_teks: string;
  rohaniawan_waktu_edukasi: string;
  rohaniawan_durasi: string;
  rohaniawan_pasien: string;
  rohaniawan_pasangan: string;
  rohaniawan_orang_tua: string;
  rohaniawan_saudara_kandung: string;
  rohaniawan_penerima_edukasi_lain: string;
  rohaniawan_penerima_edukasi_lain_teks: string;
  keperawatan_diskusi: string;
  keperawatan_demonstrasi: string;
  keperawatan_ceramah: string;
  keperawatan_solusi: string;
  keperawatan_observatori: string;
  keperawatan_metode_pembelajaran_lain: string;
  keperawatan_metode_pembelajaran_lain_teks: string;
  keperawatan_mampu_mengerti: string;
  keperawatan_mampu_memahami: string;
  keperawatan_evaluasi_pasien_lain: string;
  keperawatan_evaluasi_pasien_lain_teks: string;
  keperawatan_waktu_edukasi: string;
  keperawatan_durasi: string;
  keperawatan_pasien: string;
  keperawatan_pasangan: string;
  keperawatan_orang_tua: string;
  keperawatan_saudara_kandung: string;
  keperawatan_penerima_edukasi_lain: string;
  keperawatan_penerima_edukasi_lain_teks: string;
  informasi_lain_diskusi: string;
  informasi_lain_demonstrasi: string;
  informasi_lain_ceramah: string;
  informasi_lain_solusi: string;
  informasi_lain_observatori: string;
  informasi_lain_metode_pembelajaran_lain: string;
  informasi_lain_metode_pembelajaran_lain_teks: string;
  informasi_lain_mampu_mengerti: string;
  informasi_lain_mampu_memahami: string;
  informasi_lain_evaluasi_pasien_lain: string;
  informasi_lain_evaluasi_pasien_lain_teks: string;
  informasi_lain_waktu_edukasi: string;
  informasi_lain_durasi: string;
  informasi_lain_pasien: string;
  informasi_lain_pasangan: string;
  informasi_lain_orang_tua: string;
  informasi_lain_saudara_kandung: string;
  informasi_lain_penerima_edukasi_lain: string;
  informasi_lain_penerima_edukasi_lain_teks: string;
  farmasi_penggunaan_obat: string;
  farmasi_efek_samping: string;
  farmasi_mencegah_interaksi: string;
  farmasi_lain_lain: string;
  farmasi_lain_lain_teks: string;
  farmasi_diskusi: string;
  farmasi_demonstrasi: string;
  farmasi_ceramah: string;
  farmasi_solusi: string;
  farmasi_observatori: string;
  farmasi_metode_pembelajaran_lain: string;
  farmasi_metode_pembelajaran_lain_teks: string;
  farmasi_mampu_memahami: string;
  farmasi_mampu_mengerti: string;
  farmasi_evaluasi_pasien_lain: string;
  farmasi_evaluasi_pasien_lain_teks: string;
  farmasi_waktu_edukasi: string;
  farmasi_durasi: string;
  farmasi_pasien: string;
  farmasi_pasangan: string;
  farmasi_orang_tua: string;
  farmasi_saudara_kandung: string;
  farmasi_penerima_edukasi_lain: string;
  farmasi_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_farmasi: string;
  ttd_edukator_farmasi: string;
  id_edukator_farmasi: string;
  gizi_status_gizi: string;
  gizi_selama_perawatan: string;
  gizi_untuk_dirumah: string;
  gizi_diluar_rs: string;
  gizi_lain_lain: string;
  gizi_lain_lain_teks: string;
  gizi_diskusi:  string
  gizi_demonstrasi: string;
  gizi_ceramah: string;
  gizi_solusi: string;
  gizi_observatori: string;
  gizi_metode_pembelajaran_lain: string;
  gizi_metode_pembelajaran_lain_teks: string;
  gizi_mampu_mengerti: string;
  gizi_mampu_memahami: string;
  gizi_evaluasi_pasien_lain: string;
  gizi_evaluasi_pasien_lain_teks: string;
  gizi_waktu_edukasi: string;
  gizi_durasi: string;
  gizi_pasien: string;
  gizi_pasangan: string;
  gizi_orang_tua: string;
  gizi_saudara_kandung: string;
  gizi_penerima_edukasi_lain: string;
  gizi_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_gizi: string;
  ttd_edukator_gizi: string;
  id_edukator_gizi: string;
  post_op_merunduk: string;
  post_op_setengah_duduk: string;
  post_op_tidak_ada: string;
  post_op_diskusi:  string
  post_op_demonstrasi: string;
  post_op_ceramah: string;
  post_op_solusi: string;
  post_op_observatori: string;
  post_op_metode_pembelajaran_lain: string;
  post_op_metode_pembelajaran_lain_teks: string;
  post_op_mampu_mengerti: string;
  post_op_mampu_memahami: string;
  post_op_evaluasi_pasien_lain: string;
  post_op_evaluasi_pasien_lain_teks: string;
  post_op_waktu_edukasi: string;
  post_op_durasi: string;
  post_op_pasien: string;
  post_op_pasangan: string;
  post_op_orang_tua: string;
  post_op_saudara_kandung: string;
  post_op_penerima_edukasi_lain: string;
  post_op_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_post_op: string;
  ttd_edukator_post_op: string;
  id_edukator_post_op: string;
  dokter_kondisi_pasien: string;
  dokter_hasil_pemeriksaan: string;
  dokter_teknik_anestesi: string;
  dokter_manfaat_kekurangan: string;
  dokter_nyeri_pasca: string;
  dokter_nyeri_analgesi: string;
  dokter_diskusi:  string;
  dokter_demonstrasi: string;
  dokter_ceramah: string;
  dokter_solusi: string;
  dokter_observatori: string;
  dokter_metode_pembelajaran_lain: string;
  dokter_metode_pembelajaran_lain_teks: string;
  dokter_mampu_mengerti: string;
  dokter_mampu_memahami: string;
  dokter_evaluasi_pasien_lain: string;
  dokter_evaluasi_pasien_lain_teks: string;
  dokter_waktu_edukasi: string;
  dokter_durasi: string;
  dokter_pasien: string;
  dokter_pasangan: string;
  dokter_orang_tua: string;
  dokter_saudara_kandung: string;
  dokter_penerima_edukasi_lain: string;
  dokter_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_dokter: string;
  ttd_edukator_dokter: string;
  id_edukator_dokter: string;
  mencuci_tangan_handwash: string;
  mencuci_tangan_handrub: string;
  mencuci_tangan_diskusi: string;
  mencuci_tangan_demonstrasi: string;
  mencuci_tangan_ceramah: string;
  mencuci_tangan_solusi: string;
  mencuci_tangan_observatori: string;
  mencuci_tangan_metode_pembelajaran_lain: string;
  mencuci_tangan_metode_pembelajaran_lain_teks: string;
  mencuci_tangan_mampu_mengerti: string;
  mencuci_tangan_mampu_memahami: string;
  mencuci_tangan_evaluasi_pasien_lain: string;
  mencuci_tangan_evaluasi_pasien_lain_teks: string;
  mencuci_tangan_waktu_edukasi: string;
  mencuci_tangan_durasi: string;
  mencuci_tangan_pasien: string;
  mencuci_tangan_pasangan: string;
  mencuci_tangan_orang_tua: string;
  mencuci_tangan_saudara_kandung: string;
  mencuci_tangan_penerima_edukasi_lain: string;
  mencuci_tangan_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_mencuci_tangan: string;
  ttd_edukator_mencuci_tangan: string;
  id_edukator_mencuci_tangan: string;
  penggunaan_peralatan_infus: string;
  penggunaan_peralatan_oksigen: string;
  penggunaan_peralatan_nebulizer: string;
  penggunaan_peralatan_lain: string;
  penggunaan_peralatan_lain_teks: string;
  penggunaan_peralatan_diskusi: string;
  penggunaan_peralatan_demonstrasi: string;
  penggunaan_peralatan_ceramah: string;
  penggunaan_peralatan_solusi: string;
  penggunaan_peralatan_observatori: string;
  penggunaan_peralatan_metode_pembelajaran_lain: string;
  penggunaan_peralatan_metode_pembelajaran_lain_teks: string;
  penggunaan_peralatan_mampu_mengerti: string;
  penggunaan_peralatan_mampu_memahami: string;
  penggunaan_peralatan_evaluasi_pasien_lain: string;
  penggunaan_peralatan_evaluasi_pasien_lain_teks: string;
  penggunaan_peralatan_waktu_edukasi: string;
  penggunaan_peralatan_durasi: string;
  penggunaan_peralatan_pasien: string;
  penggunaan_peralatan_pasangan: string;
  penggunaan_peralatan_orang_tua: string;
  penggunaan_peralatan_saudara_kandung: string;
  penggunaan_peralatan_penerima_edukasi_lain: string;
  penggunaan_peralatan_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_penggunaan_peralatan: string;
  ttd_edukator_penggunaan_peralatan: string;
  id_edukator_penggunaan_peralatan: string;
  hak_kewajiban_hak_pasien: string;
  hak_kewajiban_kewajiban_pasien: string;
  hak_kewajiban_diskusi:  string;
  hak_kewajiban_demonstrasi: string;
  hak_kewajiban_ceramah: string;
  hak_kewajiban_solusi: string;
  hak_kewajiban_observatori: string;
  hak_kewajiban_metode_pembelajaran_lain: string;
  hak_kewajiban_metode_pembelajaran_lain_teks: string;
  hak_kewajiban_mampu_mengerti: string;
  hak_kewajiban_mampu_memahami: string;
  hak_kewajiban_evaluasi_pasien_lain: string;
  hak_kewajiban_evaluasi_pasien_lain_teks: string;
  hak_kewajiban_waktu_edukasi: string;
  hak_kewajiban_durasi: string;
  hak_kewajiban_pasien: string;
  hak_kewajiban_pasangan: string;
  hak_kewajiban_orang_tua: string;
  hak_kewajiban_saudara_kandung: string;
  hak_kewajiban_penerima_edukasi_lain: string;
  hak_kewajiban_penerima_edukasi_lain_teks: string;
  ttd_penerima_edukasi_hak_kewajiban: string;
  ttd_edukator_hak_kewajiban: string;
  id_edukator_hak_kewajiban: string;

  constructor(request: IUpdateIntegratedEducationRequest) {
    super(request);
    this.daftar_pasien_informasi_lain = request.daftar_pasien_informasi_lain;
    this.materi_edukasi = request.materi_edukasi;
    this.dpjp = request.dpjp;
    this.asesmen = request.asesmen;
    this.dpjp_kondisi_pasien = request.dpjp_kondisi_pasien;
    this.dpjp_hasil_pemeriksaan = request.dpjp_hasil_pemeriksaan;
    this.dpjp_pengobatan = request.dpjp_pengobatan; 
    this.dpjp_manfaat = request.dpjp_manfaat; 
    this.dpjp_alternatif = request.dpjp_alternatif;
    this.dpjp_keberhasilan = request.dpjp_keberhasilan;
    this.dpjp_pemulihan = request.dpjp_pemulihan;
    this.dpjp_diagnosa = request.dpjp_diagnosa;
    this.dpjp_diagnosa_teks = request.dpjp_diagnosa_teks;
    this.dpjp_diagnosa_teks_1 = request.dpjp_diagnosa_teks_1;
    this.dpjp_diagnosa_teks_2 = request.dpjp_diagnosa_teks_2;
    this.dpjp_hasil_asuhan = request.dpjp_hasil_asuhan
    this.dpjp_hasil_asuhan_teks = request.dpjp_hasil_asuhan_teks;
    this.dpjp_hasil_asuhan_teks_2 = request.dpjp_hasil_asuhan_teks_2;
    this.dpjp_diskusi = request.dpjp_diskusi;
    this.dpjp_demonstrasi = request.dpjp_demonstrasi;
    this.dpjp_ceramah = request.dpjp_ceramah;
    this.dpjp_solusi = request.dpjp_solusi;
    this.dpjp_observatori = request.dpjp_observatori;
    this.dpjp_metode_pembelajaran_lain = request.dpjp_metode_pembelajaran_lain;
    this.dpjp_metode_pembelajaran_lain_teks = request.dpjp_metode_pembelajaran_lain_teks;
    this.dpjp_mampu_mengerti = request.dpjp_mampu_mengerti;
    this.dpjp_mampu_memahami = request.dpjp_mampu_memahami;
    this.dpjp_evaluasi_pasien_lain = request.dpjp_evaluasi_pasien_lain;
    this.dpjp_evaluasi_pasien_lain_teks = request.dpjp_evaluasi_pasien_lain_teks;
    this.dpjp_waktu_edukasi = request.dpjp_waktu_edukasi;
    this.dpjp_durasi = request.dpjp_durasi;
    this.dpjp_pasien = request.dpjp_pasien;
    this.dpjp_pasangan = request.dpjp_pasangan;
    this.dpjp_orang_tua = request.dpjp_orang_tua;
    this.dpjp_saudara_kandung = request.dpjp_saudara_kandung;
    this.dpjp_penerima_edukasi_lain = request.dpjp_penerima_edukasi_lain;
    this.dpjp_penerima_edukasi_lain_teks = request.dpjp_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_dpjp = request.ttd_penerima_edukasi_dpjp;
    this.ttd_edukator_dpjp = request.ttd_edukator_dpjp;
    this.id_edukator_dpjp = request.id_edukator_dpjp;
    this.manajemen_nyeri_farmakologi = request.manajemen_nyeri_farmakologi;
    this.manajemen_nyeri_non_farmakologi = request.manajemen_nyeri_non_farmakologi;
    this.manajemen_nyeri_diskusi = request.manajemen_nyeri_diskusi;
    this.manajemen_nyeri_demonstrasi = request.manajemen_nyeri_demonstrasi;
    this.manajemen_nyeri_ceramah = request.manajemen_nyeri_ceramah;
    this.manajemen_nyeri_solusi = request.manajemen_nyeri_solusi;
    this.manajemen_nyeri_observatori = request.manajemen_nyeri_observatori;
    this.manajemen_nyeri_metode_pembelajaran_lain = request.manajemen_nyeri_metode_pembelajaran_lain;
    this.manajemen_nyeri_metode_pembelajaran_lain_teks = request.manajemen_nyeri_metode_pembelajaran_lain_teks;
    this.manajemen_nyeri_mampu_mengerti = request.manajemen_nyeri_mampu_mengerti;
    this.manajemen_nyeri_mampu_memahami = request.manajemen_nyeri_mampu_memahami;
    this.manajemen_nyeri_evaluasi_pasien_lain = request.manajemen_nyeri_evaluasi_pasien_lain;
    this.manajemen_nyeri_evaluasi_pasien_lain_teks = request.manajemen_nyeri_evaluasi_pasien_lain_teks;
    this.manajemen_nyeri_waktu_edukasi = request.manajemen_nyeri_waktu_edukasi;
    this.manajemen_nyeri_durasi = request.manajemen_nyeri_durasi;
    this.manajemen_nyeri_pasien = request.manajemen_nyeri_pasien;
    this.manajemen_nyeri_pasangan = request.manajemen_nyeri_pasangan;
    this.manajemen_nyeri_orang_tua = request.manajemen_nyeri_orang_tua;
    this.manajemen_nyeri_saudara_kandung = request.manajemen_nyeri_saudara_kandung;
    this.manajemen_nyeri_penerima_edukasi_lain = request.manajemen_nyeri_penerima_edukasi_lain;
    this.manajemen_nyeri_penerima_edukasi_lain_teks = request.manajemen_nyeri_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_manajemen_nyeri = request.ttd_penerima_edukasi_manajemen_nyeri;
    this.ttd_edukator_manajemen_nyeri = request.ttd_edukator_manajemen_nyeri;
    this.id_edukator_manajemen_nyeri = request.id_edukator_manajemen_nyeri;
    this.rohaniawan_bimbingan = request.rohaniawan_bimbingan;
    this.rohaniawan_konseling = request.rohaniawan_konseling;
    this.rohaniawan_diskusi = request.rohaniawan_diskusi;
    this.rohaniawan_demonstrasi = request.rohaniawan_demonstrasi;
    this.rohaniawan_ceramah = request.rohaniawan_ceramah;
    this.rohaniawan_solusi = request.rohaniawan_solusi;
    this.rohaniawan_observatori = request.rohaniawan_observatori;
    this.rohaniawan_metode_pembelajaran_lain = request.rohaniawan_metode_pembelajaran_lain;
    this.rohaniawan_metode_pembelajaran_lain_teks = request.rohaniawan_metode_pembelajaran_lain_teks;
    this.rohaniawan_mampu_mengerti = request.rohaniawan_mampu_mengerti;
    this.rohaniawan_mampu_memahami = request.rohaniawan_mampu_memahami;
    this.rohaniawan_evaluasi_pasien_lain = request.rohaniawan_evaluasi_pasien_lain;
    this.rohaniawan_evaluasi_pasien_lain_teks = request.rohaniawan_evaluasi_pasien_lain_teks;
    this.rohaniawan_waktu_edukasi = request.rohaniawan_waktu_edukasi;
    this.rohaniawan_durasi = request.rohaniawan_durasi;
    this.rohaniawan_pasien = request.rohaniawan_pasien;
    this.rohaniawan_pasangan = request.rohaniawan_pasangan;
    this.rohaniawan_orang_tua = request.rohaniawan_orang_tua;
    this.rohaniawan_saudara_kandung = request.rohaniawan_saudara_kandung;
    this.rohaniawan_penerima_edukasi_lain = request.rohaniawan_penerima_edukasi_lain;
    this.rohaniawan_penerima_edukasi_lain_teks = request.rohaniawan_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_rohaniawan = request.ttd_penerima_edukasi_rohaniawan;
    this.ttd_edukator_rohaniawan = request.ttd_edukator_rohaniawan;
    this.id_edukator_rohaniawan = request.id_edukator_rohaniawan;
    this.keperawatan_mobilisasi = request.keperawatan_mobilisasi;
    this.keperawatan_perawatan_luka = request.keperawatan_perawatan_luka;
    this.keperawatan_perawatan_peralatan = request.keperawatan_perawatan_peralatan;
    this.keperawatan_pemberian_makan = request.keperawatan_pemberian_makan;
    this.keperawatan_membuang_urine = request.keperawatan_membuang_urine;
    this.keperawatan_lain_lain = request.keperawatan_lain_lain;
    this.keperawatan_lain_lain_teks = request.keperawatan_lain_lain_teks;
    this.keperawatan_diskusi = request.keperawatan_diskusi;
    this.keperawatan_demonstrasi = request.keperawatan_demonstrasi;
    this.keperawatan_ceramah = request.keperawatan_ceramah;
    this.keperawatan_solusi = request.keperawatan_solusi;
    this.keperawatan_observatori = request.keperawatan_observatori;
    this.keperawatan_metode_pembelajaran_lain = request.keperawatan_metode_pembelajaran_lain;
    this.keperawatan_metode_pembelajaran_lain_teks = request.keperawatan_metode_pembelajaran_lain_teks;
    this.keperawatan_mampu_mengerti = request.keperawatan_mampu_mengerti;
    this.keperawatan_mampu_memahami = request.keperawatan_mampu_memahami;
    this.keperawatan_evaluasi_pasien_lain = request.keperawatan_evaluasi_pasien_lain;
    this.keperawatan_evaluasi_pasien_lain_teks = request.keperawatan_evaluasi_pasien_lain_teks;
    this.keperawatan_waktu_edukasi = request.keperawatan_waktu_edukasi;
    this.keperawatan_durasi = request.keperawatan_durasi;
    this.keperawatan_pasien = request.keperawatan_pasien;
    this.keperawatan_pasangan = request.keperawatan_pasangan;
    this.keperawatan_orang_tua = request.keperawatan_orang_tua;
    this.keperawatan_saudara_kandung = request.keperawatan_saudara_kandung;
    this.keperawatan_penerima_edukasi_lain = request.keperawatan_penerima_edukasi_lain;
    this.keperawatan_penerima_edukasi_lain_teks = request.keperawatan_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_keperawatan = request.ttd_penerima_edukasi_keperawatan;
    this.ttd_edukator_keperawatan = request.ttd_edukator_keperawatan;
    this.id_edukator_keperawatan = request.id_edukator_keperawatan;
    this.informasi_lain_diskusi = request.informasi_lain_diskusi;
    this.informasi_lain_demonstrasi = request.informasi_lain_demonstrasi;
    this.informasi_lain_ceramah = request.informasi_lain_ceramah;
    this.informasi_lain_solusi = request.informasi_lain_solusi;
    this.informasi_lain_observatori = request.informasi_lain_observatori;
    this.informasi_lain_metode_pembelajaran_lain = request.informasi_lain_metode_pembelajaran_lain;
    this.informasi_lain_metode_pembelajaran_lain_teks = request.informasi_lain_metode_pembelajaran_lain_teks;
    this.informasi_lain_mampu_mengerti = request.informasi_lain_mampu_mengerti;
    this.informasi_lain_mampu_memahami = request.informasi_lain_mampu_memahami;
    this.informasi_lain_evaluasi_pasien_lain = request.informasi_lain_evaluasi_pasien_lain;
    this.informasi_lain_evaluasi_pasien_lain_teks = request.informasi_lain_evaluasi_pasien_lain_teks;
    this.informasi_lain_waktu_edukasi = request.informasi_lain_waktu_edukasi;
    this.informasi_lain_durasi = request.informasi_lain_durasi;
    this.informasi_lain_pasangan = request.informasi_lain_pasangan;
    this.informasi_lain_orang_tua = request.informasi_lain_orang_tua;
    this.informasi_lain_saudara_kandung = request.informasi_lain_saudara_kandung;
    this.informasi_lain_penerima_edukasi_lain = request.informasi_lain_penerima_edukasi_lain;
    this.informasi_lain_penerima_edukasi_lain_teks = request.informasi_lain_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_informasi_lain = request.ttd_penerima_edukasi_informasi_lain;
    this.ttd_edukator_informasi_lain = request.ttd_edukator_informasi_lain;
    this.id_edukator_informasi_lain = request.id_edukator_informasi_lain;
    this.emr_id = request.emr_id;
    this.informasi_lain_pasien = request.informasi_lain_pasien;
    this.farmasi_penggunaan_obat = request.farmasi_penggunaan_obat;
    this.farmasi_efek_samping = request.farmasi_efek_samping;
    this.farmasi_mencegah_interaksi = request.farmasi_mencegah_interaksi;
    this.farmasi_lain_lain = request.farmasi_lain_lain;
    this.farmasi_lain_lain_teks = request.farmasi_lain_lain_teks;
    this.farmasi_diskusi = request.farmasi_diskusi;
    this.farmasi_demonstrasi = request.farmasi_demonstrasi;
    this.farmasi_ceramah = request.farmasi_ceramah;
    this.farmasi_solusi = request.farmasi_solusi;
    this.farmasi_observatori = request.farmasi_observatori;
    this.farmasi_metode_pembelajaran_lain = request.farmasi_metode_pembelajaran_lain;
    this.farmasi_metode_pembelajaran_lain_teks = request.farmasi_metode_pembelajaran_lain_teks;
    this.farmasi_mampu_memahami = request.farmasi_mampu_memahami;
    this.farmasi_mampu_mengerti = request.farmasi_mampu_mengerti;
    this.farmasi_evaluasi_pasien_lain = request.farmasi_evaluasi_pasien_lain;
    this.farmasi_evaluasi_pasien_lain_teks = request.farmasi_evaluasi_pasien_lain_teks;
    this.farmasi_waktu_edukasi = request.farmasi_waktu_edukasi;
    this.farmasi_durasi = request.farmasi_durasi;
    this.farmasi_pasien = request.farmasi_pasien;
    this.farmasi_pasangan = request.farmasi_pasangan;
    this.farmasi_orang_tua = request.farmasi_orang_tua;
    this.farmasi_saudara_kandung = request.farmasi_saudara_kandung;
    this.farmasi_penerima_edukasi_lain = request.farmasi_penerima_edukasi_lain;
    this.farmasi_penerima_edukasi_lain_teks = request.farmasi_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_farmasi = request.ttd_penerima_edukasi_farmasi;
    this.ttd_edukator_farmasi = request.ttd_edukator_farmasi;
    this.id_edukator_farmasi = request.id_edukator_farmasi;
    this.gizi_status_gizi = request.gizi_status_gizi;
    this.gizi_selama_perawatan = request.gizi_selama_perawatan;
    this.gizi_untuk_dirumah = request.gizi_untuk_dirumah;
    this.gizi_diluar_rs = request.gizi_diluar_rs;
    this.gizi_lain_lain = request.gizi_lain_lain;
    this.gizi_lain_lain_teks = request.gizi_lain_lain_teks;
    this.gizi_diskusi = request.gizi_diskusi;
    this.gizi_demonstrasi = request.gizi_demonstrasi;
    this.gizi_ceramah = request.gizi_ceramah;
    this.gizi_solusi = request.gizi_solusi;
    this.gizi_observatori = request.gizi_observatori;
    this.gizi_metode_pembelajaran_lain = request.gizi_metode_pembelajaran_lain;
    this.gizi_metode_pembelajaran_lain_teks = request.gizi_metode_pembelajaran_lain_teks;
    this.gizi_mampu_mengerti = request.gizi_mampu_mengerti;
    this.gizi_mampu_memahami = request.gizi_mampu_memahami;
    this.gizi_evaluasi_pasien_lain = request.gizi_evaluasi_pasien_lain;
    this.gizi_evaluasi_pasien_lain_teks = request.gizi_evaluasi_pasien_lain_teks;
    this.gizi_waktu_edukasi = request.gizi_waktu_edukasi;
    this.gizi_durasi = request.gizi_durasi;
    this.gizi_pasien = request.gizi_pasien;
    this.gizi_pasangan = request.gizi_pasangan;
    this.gizi_orang_tua = request.gizi_orang_tua;
    this.gizi_saudara_kandung = request.gizi_saudara_kandung;
    this.gizi_penerima_edukasi_lain = request.gizi_penerima_edukasi_lain;
    this.gizi_penerima_edukasi_lain_teks = request.gizi_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_gizi = request.ttd_penerima_edukasi_gizi;
    this.ttd_edukator_gizi = request.ttd_edukator_gizi;
    this.id_edukator_gizi = request.id_edukator_gizi;
    this.post_op_merunduk = request.post_op_merunduk;
    this.post_op_setengah_duduk = request.post_op_setengah_duduk;
    this.post_op_tidak_ada = request.post_op_tidak_ada;
    this.post_op_diskusi = request.post_op_diskusi;
    this.post_op_demonstrasi = request.post_op_demonstrasi;
    this.post_op_ceramah = request.post_op_ceramah;
    this.post_op_solusi = request.post_op_solusi
    this.post_op_observatori = request.post_op_observatori;
    this.post_op_metode_pembelajaran_lain = request.post_op_metode_pembelajaran_lain;
    this.post_op_metode_pembelajaran_lain_teks = request.post_op_metode_pembelajaran_lain_teks;
    this.post_op_mampu_mengerti = request.post_op_mampu_mengerti;
    this.post_op_mampu_memahami = request.post_op_mampu_memahami;
    this.post_op_evaluasi_pasien_lain = request.post_op_evaluasi_pasien_lain;
    this.post_op_evaluasi_pasien_lain_teks = request.post_op_evaluasi_pasien_lain_teks;
    this.post_op_waktu_edukasi = request.post_op_waktu_edukasi;
    this.post_op_durasi = request.post_op_durasi;
    this.post_op_pasien = request.post_op_pasien;
    this.post_op_pasangan = request.post_op_pasangan;
    this.post_op_orang_tua = request.post_op_orang_tua;
    this.post_op_saudara_kandung = request.post_op_saudara_kandung;
    this.post_op_penerima_edukasi_lain = request.post_op_penerima_edukasi_lain;
    this.post_op_penerima_edukasi_lain_teks = request.post_op_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_post_op = request.ttd_penerima_edukasi_post_op;
    this.ttd_edukator_post_op = request.ttd_edukator_post_op;
    this.id_edukator_post_op = request.id_edukator_post_op;
    this.dokter_kondisi_pasien = request.dokter_kondisi_pasien;
    this.dokter_hasil_pemeriksaan = request.dokter_hasil_pemeriksaan;
    this.dokter_teknik_anestesi = request.dokter_teknik_anestesi;
    this.dokter_manfaat_kekurangan = request.dokter_manfaat_kekurangan;
    this.dokter_nyeri_pasca = request.dokter_nyeri_pasca;
    this.dokter_nyeri_analgesi = request.dokter_nyeri_analgesi;
    this.dokter_diskusi = request.dokter_diskusi;
    this.dokter_demonstrasi = request.dokter_demonstrasi;
    this.dokter_ceramah = request.dokter_ceramah;
    this.dokter_solusi = request.dokter_solusi;
    this.dokter_observatori = request.dokter_observatori;
    this.dokter_metode_pembelajaran_lain = request.dokter_metode_pembelajaran_lain;
    this.dokter_metode_pembelajaran_lain_teks = request.dokter_metode_pembelajaran_lain_teks;
    this.dokter_mampu_mengerti = request.dokter_mampu_mengerti;
    this.dokter_mampu_memahami = request.dokter_mampu_memahami;
    this.dokter_evaluasi_pasien_lain = request.dokter_evaluasi_pasien_lain;
    this.dokter_evaluasi_pasien_lain_teks = request.dokter_evaluasi_pasien_lain_teks;
    this.dokter_waktu_edukasi = request.dokter_waktu_edukasi;
    this.dokter_durasi = request.dokter_durasi;
    this.dokter_pasien = request.dokter_pasien;
    this.dokter_pasangan = request.dokter_pasangan;
    this.dokter_orang_tua = request.dokter_orang_tua;
    this.dokter_saudara_kandung = request.dokter_saudara_kandung;
    this.dokter_penerima_edukasi_lain = request.dokter_penerima_edukasi_lain;
    this.dokter_penerima_edukasi_lain_teks = request.dokter_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_dokter = request.ttd_penerima_edukasi_dokter;
    this.ttd_edukator_dokter = request.ttd_edukator_dokter;
    this.id_edukator_dokter = request.id_edukator_dokter;
    this.mencuci_tangan_handwash = request.mencuci_tangan_handwash;
    this.mencuci_tangan_handrub = request.mencuci_tangan_handrub;
    this.mencuci_tangan_diskusi = request.mencuci_tangan_diskusi;
    this.mencuci_tangan_demonstrasi = request.mencuci_tangan_demonstrasi;
    this.mencuci_tangan_ceramah = request.mencuci_tangan_ceramah;
    this.mencuci_tangan_solusi = request.mencuci_tangan_solusi;
    this.mencuci_tangan_observatori = request.mencuci_tangan_observatori;
    this.mencuci_tangan_metode_pembelajaran_lain = request.mencuci_tangan_metode_pembelajaran_lain;
    this.mencuci_tangan_metode_pembelajaran_lain_teks = request.mencuci_tangan_metode_pembelajaran_lain_teks;
    this.mencuci_tangan_mampu_mengerti = request.mencuci_tangan_mampu_mengerti;
    this.mencuci_tangan_mampu_memahami = request.mencuci_tangan_mampu_memahami;
    this.mencuci_tangan_evaluasi_pasien_lain = request.mencuci_tangan_evaluasi_pasien_lain;
    this.mencuci_tangan_evaluasi_pasien_lain_teks = request.mencuci_tangan_evaluasi_pasien_lain_teks;
    this.mencuci_tangan_waktu_edukasi = request.mencuci_tangan_waktu_edukasi;
    this.mencuci_tangan_durasi = request.mencuci_tangan_durasi;
    this.mencuci_tangan_pasien = request.mencuci_tangan_pasien;
    this.mencuci_tangan_pasangan = request.mencuci_tangan_pasangan;
    this.mencuci_tangan_orang_tua = request.mencuci_tangan_orang_tua;
    this.mencuci_tangan_saudara_kandung = request.mencuci_tangan_saudara_kandung;
    this.mencuci_tangan_penerima_edukasi_lain = request.mencuci_tangan_penerima_edukasi_lain;
    this.mencuci_tangan_penerima_edukasi_lain_teks = request.mencuci_tangan_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_mencuci_tangan = request.ttd_penerima_edukasi_mencuci_tangan;
    this.ttd_edukator_mencuci_tangan = request.ttd_edukator_mencuci_tangan;
    this.id_edukator_mencuci_tangan = request.id_edukator_mencuci_tangan;
    this.penggunaan_peralatan_infus = request.penggunaan_peralatan_infus;
    this.penggunaan_peralatan_oksigen = request.penggunaan_peralatan_oksigen;
    this.penggunaan_peralatan_nebulizer = request.penggunaan_peralatan_nebulizer;
    this.penggunaan_peralatan_lain = request.penggunaan_peralatan_lain;
    this.penggunaan_peralatan_lain_teks = request.penggunaan_peralatan_lain_teks;
    this.penggunaan_peralatan_diskusi = request.penggunaan_peralatan_diskusi;
    this.penggunaan_peralatan_demonstrasi = request.penggunaan_peralatan_demonstrasi;
    this.penggunaan_peralatan_ceramah = request.penggunaan_peralatan_ceramah;
    this.penggunaan_peralatan_solusi = request.penggunaan_peralatan_solusi;
    this.penggunaan_peralatan_observatori = request.penggunaan_peralatan_observatori;
    this.penggunaan_peralatan_metode_pembelajaran_lain = request.penggunaan_peralatan_metode_pembelajaran_lain;
    this.penggunaan_peralatan_metode_pembelajaran_lain_teks = request.penggunaan_peralatan_metode_pembelajaran_lain_teks;
    this.penggunaan_peralatan_mampu_mengerti = request.penggunaan_peralatan_mampu_mengerti;
    this.penggunaan_peralatan_mampu_memahami = request.penggunaan_peralatan_mampu_memahami;
    this.penggunaan_peralatan_evaluasi_pasien_lain = request.penggunaan_peralatan_evaluasi_pasien_lain;
    this.penggunaan_peralatan_evaluasi_pasien_lain_teks = request.penggunaan_peralatan_evaluasi_pasien_lain_teks;
    this.penggunaan_peralatan_waktu_edukasi = request.penggunaan_peralatan_waktu_edukasi;
    this.penggunaan_peralatan_durasi = request.penggunaan_peralatan_durasi;
    this.penggunaan_peralatan_pasien = request.penggunaan_peralatan_pasien;
    this.penggunaan_peralatan_pasangan = request.penggunaan_peralatan_pasangan;
    this.penggunaan_peralatan_orang_tua = request.penggunaan_peralatan_orang_tua;
    this.penggunaan_peralatan_saudara_kandung = request.penggunaan_peralatan_saudara_kandung;
    this.penggunaan_peralatan_penerima_edukasi_lain = request.penggunaan_peralatan_penerima_edukasi_lain;
    this.penggunaan_peralatan_penerima_edukasi_lain_teks = request.penggunaan_peralatan_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_penggunaan_peralatan = request.ttd_penerima_edukasi_penggunaan_peralatan;
    this.ttd_edukator_penggunaan_peralatan = request.ttd_edukator_penggunaan_peralatan;
    this.id_edukator_penggunaan_peralatan = request.id_edukator_penggunaan_peralatan;
    this.hak_kewajiban_hak_pasien = request.hak_kewajiban_hak_pasien;
    this.hak_kewajiban_kewajiban_pasien = request.hak_kewajiban_kewajiban_pasien;
    this.hak_kewajiban_diskusi = request.hak_kewajiban_diskusi;
    this.hak_kewajiban_demonstrasi = request.hak_kewajiban_demonstrasi;
    this.hak_kewajiban_ceramah = request.hak_kewajiban_ceramah;
    this.hak_kewajiban_solusi = request.hak_kewajiban_solusi;
    this.hak_kewajiban_observatori = request.hak_kewajiban_observatori;
    this.hak_kewajiban_metode_pembelajaran_lain = request.hak_kewajiban_metode_pembelajaran_lain;
    this.hak_kewajiban_metode_pembelajaran_lain_teks = request.hak_kewajiban_metode_pembelajaran_lain_teks;
    this.hak_kewajiban_mampu_mengerti = request.hak_kewajiban_mampu_mengerti;
    this.hak_kewajiban_mampu_memahami = request.hak_kewajiban_mampu_memahami;
    this.hak_kewajiban_evaluasi_pasien_lain = request.hak_kewajiban_evaluasi_pasien_lain;
    this.hak_kewajiban_evaluasi_pasien_lain_teks = request.hak_kewajiban_evaluasi_pasien_lain_teks;
    this.hak_kewajiban_waktu_edukasi = request.hak_kewajiban_waktu_edukasi;
    this.hak_kewajiban_durasi = request.hak_kewajiban_durasi;
    this.hak_kewajiban_pasien = request.hak_kewajiban_pasien;
    this.hak_kewajiban_pasangan = request.hak_kewajiban_pasangan;
    this.hak_kewajiban_orang_tua = request.hak_kewajiban_orang_tua;
    this.hak_kewajiban_saudara_kandung = request.hak_kewajiban_saudara_kandung;
    this.hak_kewajiban_penerima_edukasi_lain = request.hak_kewajiban_penerima_edukasi_lain;
    this.hak_kewajiban_penerima_edukasi_lain_teks = request.hak_kewajiban_penerima_edukasi_lain_teks;
    this.ttd_penerima_edukasi_hak_kewajiban = request.ttd_penerima_edukasi_hak_kewajiban;
    this.ttd_edukator_hak_kewajiban = request.ttd_edukator_hak_kewajiban;
    this.id_edukator_hak_kewajiban = request.id_edukator_hak_kewajiban;
  }

  static schema() {
    return yup.object().shape({
      asesmen: yup.string(),
      daftar_pasien_informasi_lain: yup.string(),
      materi_edukasi: yup.string(),
      dpjp: yup.string(),
      dpjp_kondisi_pasien: yup.string(),
      dpjp_hasil_pemeriksaan: yup.string(),
      dpjp_pengobatan: yup.string(),
      dpjp_manfaat: yup.string(),
      dpjp_alternatif: yup.string(),
      dpjp_keberhasilan: yup.string(),
      dpjp_pemulihan: yup.string(),
      dpjp_diagnosa: yup.string(),
      dpjp_hasil_asuhan: yup.string(),
      dpjp_hasil_asuhan_teks: yup.string(),
      dpjp_hasil_asuhan_teks_2: yup.string(),
      dpjp_diagnosa_teks: yup.string(),
      dpjp_diagnosa_teks_1: yup.string(),
      dpjp_diagnosa_teks_2: yup.string(),
      manajemen_nyeri_farmakologi: yup.string(),
      manajemen_nyeri_non_farmakologi: yup.string(),
      rohaniawan_bimbingan: yup.string(),
      rohaniawan_konseling: yup.string(),
      keperawatan_mobilisasi: yup.string(),
      keperawatan_perawatan_luka: yup.string(),
      keperawatan_perawatan_peralatan: yup.string(),
      keperawatan_pemberian_makan: yup.string(),
      keperawatan_membuang_urine: yup.string(),
      keperawatan_lain_lain: yup.string(),
      keperawatan_lain_lain_teks: yup.string(),
      ttd_penerima_edukasi_dpjp: yup.string(),
      ttd_penerima_edukasi_manajemen_nyeri: yup.string(),
      ttd_penerima_edukasi_rohaniawan: yup.string(),
      ttd_penerima_edukasi_keperawatan: yup.string(),
      ttd_penerima_edukasi_informasi_lain: yup.string(),
      ttd_edukator_dpjp: yup.string(),
      ttd_edukator_manajemen_nyeri: yup.string(),
      ttd_edukator_rohaniawan: yup.string(),
      ttd_edukator_keperawatan: yup.string(),
      ttd_edukator_informasi_lain: yup.string(),
      id_edukator_dpjp: yup.string(),
      id_edukator_manajemen_nyeri: yup.string(),
      id_edukator_rohaniawan: yup.string(),
      id_edukator_keperawatan: yup.string(),
      id_edukator_informasi_lain: yup.string(),
      dpjp_diskusi: yup.string(),
      dpjp_demonstrasi: yup.string(),
      dpjp_ceramah: yup.string(),
      dpjp_solusi: yup.string(),
      dpjp_observatori: yup.string(),
      dpjp_metode_pembelajaran_lain: yup.string(),
      dpjp_metode_pembelajaran_lain_teks: yup.string(),
      dpjp_mampu_mengerti: yup.string(),
      dpjp_mampu_memahami: yup.string(),
      dpjp_evaluasi_pasien_lain: yup.string(),
      dpjp_evaluasi_pasien_lain_teks: yup.string(),
      dpjp_waktu_edukasi: yup.string(),
      dpjp_durasi: yup.string(),
      dpjp_pasien: yup.string(),
      dpjp_pasangan: yup.string(),
      dpjp_orang_tua: yup.string(),
      dpjp_saudara_kandung: yup.string(),
      dpjp_penerima_edukasi_lain: yup.string(),
      dpjp_penerima_edukasi_lain_teks: yup.string(),
      manajemen_nyeri_diskusi: yup.string(),
      manajemen_nyeri_demonstrasi: yup.string(),
      manajemen_nyeri_ceramah: yup.string(),
      manajemen_nyeri_solusi: yup.string(),
      manajemen_nyeri_observatori: yup.string(),
      manajemen_nyeri_metode_pembelajaran_lain: yup.string(),
      manajemen_nyeri_metode_pembelajaran_lain_teks: yup.string(),
      manajemen_nyeri_mampu_mengerti: yup.string(),
      manajemen_nyeri_mampu_memahami: yup.string(),
      manajemen_nyeri_evaluasi_pasien_lain: yup.string(),
      manajemen_nyeri_evaluasi_pasien_lain_teks: yup.string(),
      manajemen_nyeri_waktu_edukasi: yup.string(),
      manajemen_nyeri_durasi: yup.string(),
      manajemen_nyeri_pasien: yup.string(),
      manajemen_nyeri_pasangan: yup.string(),
      manajemen_nyeri_orang_tua: yup.string(),
      manajemen_nyeri_saudara_kandung: yup.string(),
      manajemen_nyeri_penerima_edukasi_lain: yup.string(),
      manajemen_nyeri_penerima_edukasi_lain_teks: yup.string(),
      rohaniawan_diskusi: yup.string(),
      rohaniawan_demonstrasi: yup.string(),
      rohaniawan_ceramah: yup.string(),
      rohaniawan_solusi: yup.string(),
      rohaniawan_observatori: yup.string(),
      rohaniawan_metode_pembelajaran_lain: yup.string(),
      rohaniawan_metode_pembelajaran_lain_teks: yup.string(),
      rohaniawan_mampu_mengerti: yup.string(),
      rohaniawan_mampu_memahami: yup.string(),
      rohaniawan_evaluasi_pasien_lain: yup.string(),
      rohaniawan_evaluasi_pasien_lain_teks: yup.string(),
      rohaniawan_waktu_edukasi: yup.string(),
      rohaniawan_durasi: yup.string(),
      rohaniawan_pasien: yup.string(),
      rohaniawan_pasangan: yup.string(),
      rohaniawan_orang_tua: yup.string(),
      rohaniawan_saudara_kandung: yup.string(),
      rohaniawan_penerima_edukasi_lain: yup.string(),
      rohaniawan_penerima_edukasi_lain_teks: yup.string(),
      keperawatan_diskusi: yup.string(),
      keperawatan_demonstrasi: yup.string(),
      keperawatan_ceramah: yup.string(),
      keperawatan_solusi: yup.string(),
      keperawatan_observatori: yup.string(),
      keperawatan_metode_pembelajaran_lain: yup.string(),
      keperawatan_metode_pembelajaran_lain_teks: yup.string(),
      keperawatan_mampu_mengerti: yup.string(),
      keperawatan_mampu_memahami: yup.string(),
      keperawatan_evaluasi_pasien_lain: yup.string(),
      keperawatan_evaluasi_pasien_lain_teks: yup.string(),
      keperawatan_waktu_edukasi: yup.string(),
      keperawatan_durasi: yup.string(),
      keperawatan_pasien: yup.string(),
      keperawatan_pasangan: yup.string(),
      keperawatan_orang_tua: yup.string(),
      keperawatan_saudara_kandung: yup.string(),
      keperawatan_penerima_edukasi_lain: yup.string(),
      keperawatan_penerima_edukasi_lain_teks: yup.string(),
      informasi_lain_diskusi: yup.string(),
      informasi_lain_demonstrasi: yup.string(),
      informasi_lain_ceramah: yup.string(),
      informasi_lain_solusi: yup.string(),
      informasi_lain_observatori: yup.string(),
      informasi_lain_metode_pembelajaran_lain: yup.string(),
      informasi_lain_metode_pembelajaran_lain_teks: yup.string(),
      informasi_lain_mampu_mengerti: yup.string(),
      informasi_lain_mampu_memahami: yup.string(),
      informasi_lain_evaluasi_pasien_lain: yup.string(),
      informasi_lain_evaluasi_pasien_lain_teks: yup.string(),
      informasi_lain_waktu_edukasi: yup.string(),
      informasi_lain_durasi: yup.string(),
      informasi_lain_pasien: yup.string(),
      informasi_lain_pasangan: yup.string(),
      informasi_lain_orang_tua: yup.string(),
      informasi_lain_saudara_kandung: yup.string(),
      informasi_lain_penerima_edukasi_lain: yup.string(),
      informasi_lain_penerima_edukasi_lain_teks: yup.string(),
      farmasi_penggunaan_obat: yup.string(),
      farmasi_efek_samping: yup.string(),
      farmasi_mencegah_interaksi: yup.string(),
      farmasi_lain_lain: yup.string(),
      farmasi_lain_lain_teks: yup.string(),
      farmasi_diskusi: yup.string(),
      farmasi_demonstrasi: yup.string(),
      farmasi_ceramah: yup.string(),
      farmasi_solusi: yup.string(),
      farmasi_observatori: yup.string(),
      farmasi_metode_pembelajaran_lain: yup.string(),
      farmasi_metode_pembelajaran_lain_teks: yup.string(),
      farmasi_mampu_memahami: yup.string(),
      farmasi_mampu_mengerti: yup.string(),
      farmasi_evaluasi_pasien_lain: yup.string(),
      farmasi_evaluasi_pasien_lain_teks: yup.string(),
      farmasi_waktu_edukasi: yup.string(),
      farmasi_durasi: yup.string(),
      farmasi_pasien: yup.string(),
      farmasi_pasangan: yup.string(),
      farmasi_orang_tua: yup.string(),
      farmasi_saudara_kandung: yup.string(),
      farmasi_penerima_edukasi_lain: yup.string(),
      farmasi_penerima_edukasi_lain_teks: yup.string(),
      ttd_penerima_edukasi_farmasi: yup.string(),
      ttd_edukator_farmasi: yup.string(),
      id_edukator_farmasi: yup.string(),
      gizi_status_gizi: yup.string(),
      gizi_selama_perawatan: yup.string(),
      gizi_untuk_dirumah: yup.string(),
      gizi_diluar_rs: yup.string(),
      gizi_lain_lain: yup.string(),
      gizi_lain_lain_teks: yup.string(),
      gizi_diskusi: yup.string(),
      gizi_demonstrasi: yup.string(),
      gizi_ceramah: yup.string(),
      gizi_solusi: yup.string(),
      gizi_observatori: yup.string(),
      gizi_metode_pembelajaran_lain: yup.string(),
      gizi_metode_pembelajaran_lain_teks: yup.string(),
      gizi_mampu_mengerti: yup.string(),
      gizi_mampu_memahami: yup.string(),
      gizi_evaluasi_pasien_lain: yup.string(),
      gizi_evaluasi_pasien_lain_teks: yup.string(),
      gizi_waktu_edukasi: yup.string(),
      gizi_durasi: yup.string(),
      gizi_pasien: yup.string(),
      gizi_pasangan: yup.string(),
      gizi_orang_tua: yup.string(),
      gizi_saudara_kandung: yup.string(),
      gizi_penerima_edukasi_lain: yup.string(),
      gizi_penerima_edukasi_lain_teks: yup.string(),
      ttd_penerima_edukasi_gizi: yup.string(),
      ttd_edukator_gizi: yup.string(),
      id_edukator_gizi: yup.string(),
      post_op_merunduk: yup.string(),
      post_op_setengah_duduk: yup.string(),
      post_op_tidak_ada: yup.string(),
      post_op_diskusi: yup.string(),
      post_op_demonstrasi: yup.string(),
      post_op_ceramah: yup.string(),
      post_op_solusi: yup.string(),
      post_op_observatori: yup.string(),
      post_op_metode_pembelajaran_lain: yup.string(),
      post_op_metode_pembelajaran_lain_teks: yup.string(),
      post_op_mampu_mengerti: yup.string(),
      post_op_mampu_memahami: yup.string(),
      post_op_evaluasi_pasien_lain: yup.string(),
      post_op_evaluasi_pasien_lain_teks: yup.string(),
      post_op_waktu_edukasi: yup.string(),
      post_op_durasi: yup.string(),
      post_op_pasien: yup.string(),
      post_op_pasangan: yup.string(),
      post_op_orang_tua: yup.string(),
      post_op_saudara_kandung: yup.string(),
      post_op_penerima_edukasi_lain: yup.string(),
      post_op_penerima_edukasi_lain_teks: yup.string(),
      ttd_penerima_edukasi_post_op: yup.string(),
      ttd_edukator_post_op: yup.string(),
      id_edukator_post_op: yup.string(),
      dokter_kondisi_pasien: yup.string(),
      dokter_hasil_pemeriksaan: yup.string(),
      dokter_teknik_anestesi: yup.string(),
      dokter_manfaat_kekurangan: yup.string(),
      dokter_nyeri_pasca: yup.string(),
      dokter_nyeri_analgesi: yup.string(),
      dokter_diskusi: yup.string(),
      dokter_demonstrasi: yup.string(),
      dokter_ceramah: yup.string(),
      dokter_solusi: yup.string(),
      dokter_observatori: yup.string(),
      dokter_metode_pembelajaran_lain: yup.string(),
      dokter_metode_pembelajaran_lain_teks: yup.string(),
      dokter_mampu_mengerti: yup.string(),
      dokter_mampu_memahami: yup.string(),
      dokter_evaluasi_pasien_lain: yup.string(),
      dokter_evaluasi_pasien_lain_teks: yup.string(),
      dokter_waktu_edukasi: yup.string(),
      dokter_durasi: yup.string(),
      dokter_pasien: yup.string(),
      dokter_pasangan: yup.string(),
      dokter_orang_tua: yup.string(),
      dokter_saudara_kandung: yup.string(),
      dokter_penerima_edukasi_lain: yup.string(),
      dokter_penerima_edukasi_lain_teks: yup.string(),
      ttd_penerima_edukasi_dokter: yup.string(),
      ttd_edukator_dokter: yup.string(),
      id_edukator_dokter: yup.string(),
      mencuci_tangan_handwash: yup.string(),
      mencuci_tangan_handrub: yup.string(),
      mencuci_tangan_diskusi: yup.string(),
      mencuci_tangan_demonstrasi: yup.string(),
      mencuci_tangan_ceramah: yup.string(),
      mencuci_tangan_solusi: yup.string(),
      mencuci_tangan_observatori: yup.string(),
      mencuci_tangan_metode_pembelajaran_lain: yup.string(),
      mencuci_tangan_metode_pembelajaran_lain_teks: yup.string(),
      mencuci_tangan_mampu_mengerti: yup.string(),
      mencuci_tangan_mampu_memahami: yup.string(),
      mencuci_tangan_evaluasi_pasien_lain: yup.string(),
      mencuci_tangan_evaluasi_pasien_lain_teks: yup.string(),
      mencuci_tangan_waktu_edukasi: yup.string(),
      mencuci_tangan_durasi: yup.string(),
      mencuci_tangan_pasien: yup.string(),
      mencuci_tangan_pasangan: yup.string(),
      mencuci_tangan_orang_tua: yup.string(),
      mencuci_tangan_saudara_kandung: yup.string(),
      mencuci_tangan_penerima_edukasi_lain: yup.string(),
      mencuci_tangan_penerima_edukasi_lain_teks: yup.string(),
      ttd_penerima_edukasi_mencuci_tangan: yup.string(),
      ttd_edukator_mencuci_tangan: yup.string(),
      id_edukator_mencuci_tangan: yup.string(),
      penggunaan_peralatan_infus: yup.string(),
      penggunaan_peralatan_oksigen: yup.string(),
      penggunaan_peralatan_nebulizer: yup.string(),
      penggunaan_peralatan_lain: yup.string(),
      penggunaan_peralatan_lain_teks: yup.string(),
      penggunaan_peralatan_diskusi: yup.string(),
      penggunaan_peralatan_demonstrasi: yup.string(),
      penggunaan_peralatan_ceramah: yup.string(),
      penggunaan_peralatan_solusi: yup.string(),
      penggunaan_peralatan_observatori: yup.string(),
      penggunaan_peralatan_metode_pembelajaran_lain: yup.string(),
      penggunaan_peralatan_metode_pembelajaran_lain_teks: yup.string(),
      penggunaan_peralatan_mampu_mengerti: yup.string(),
      penggunaan_peralatan_mampu_memahami: yup.string(),
      penggunaan_peralatan_evaluasi_pasien_lain: yup.string(),
      penggunaan_peralatan_evaluasi_pasien_lain_teks: yup.string(),
      penggunaan_peralatan_waktu_edukasi: yup.string(),
      penggunaan_peralatan_durasi: yup.string(),
      penggunaan_peralatan_pasien: yup.string(),
      penggunaan_peralatan_pasangan: yup.string(),
      penggunaan_peralatan_orang_tua: yup.string(),
      penggunaan_peralatan_saudara_kandung: yup.string(),
      penggunaan_peralatan_penerima_edukasi_lain: yup.string(),
      penggunaan_peralatan_penerima_edukasi_lain_teks: yup.string(),
      ttd_penerima_edukasi_penggunaan_peralatan: yup.string(),
      ttd_edukator_penggunaan_peralatan: yup.string(),
      id_edukator_penggunaan_peralatan: yup.string(),
      hak_kewajiban_hak_pasien: yup.string(),
      hak_kewajiban_kewajiban_pasien: yup.string(),
      hak_kewajiban_diskusi: yup.string(),
      hak_kewajiban_demonstrasi: yup.string(),
      hak_kewajiban_ceramah: yup.string(),
      hak_kewajiban_solusi: yup.string(),
      hak_kewajiban_observatori: yup.string(),
      hak_kewajiban_metode_pembelajaran_lain: yup.string(),
      hak_kewajiban_metode_pembelajaran_lain_teks: yup.string(),
      hak_kewajiban_mampu_mengerti: yup.string(),
      hak_kewajiban_mampu_memahami: yup.string(),
      hak_kewajiban_evaluasi_pasien_lain: yup.string(),
      hak_kewajiban_evaluasi_pasien_lain_teks: yup.string(),
      hak_kewajiban_waktu_edukasi: yup.string(),
      hak_kewajiban_durasi: yup.string(),
      hak_kewajiban_pasien: yup.string(),
      hak_kewajiban_pasangan: yup.string(),
      hak_kewajiban_orang_tua: yup.string(),
      hak_kewajiban_saudara_kandung: yup.string(),
      hak_kewajiban_penerima_edukasi_lain: yup.string(),
      hak_kewajiban_penerima_edukasi_lain_teks: yup.string(),
      ttd_penerima_edukasi_hak_kewajiban: yup.string(),
      ttd_edukator_hak_kewajiban: yup.string(),
      id_edukator_hak_kewajiban: yup.string(),
    });
  }

  static createFromJson(json: IUpdateIntegratedEducationRequest) {
    return new UpdateIntegratedEducationRequest(json);
  }
}
