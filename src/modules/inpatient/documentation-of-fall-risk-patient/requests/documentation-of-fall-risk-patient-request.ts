import * as yup from 'yup';
import { AppRequest, IAppRequest } from '@shared/request';

export interface  IUpdateDocumentationOfFallRiskPatientRequest extends IAppRequest {
    id_pemberi_informasi: string;
    penerima_informasi: string;
    faktor_usia_check: string;
    faktor_riwayat_jatuh_check: string;
    faktor_penyakit_check: string;
    faktor_penggunaan_alat_check: string;
    faktor_terpasang_infus_check: string;
    faktor_kondisi_mental_check: string;
    faktor_mobilisasi_check: string;
    faktor_mobilisasi_text: string;
    faktor_post_operasi_check: string;
    faktor_post_operasi_text: string;
    faktor_respon_obat_check : string;
    respon_obat_sedatif: string;
    respon_obat_hipnotik: string;
    respon_obat_antidepresan: string;
    respon_obat_laxatives: string;
    respon_obat_diuretika: string;
    respon_obat_narkotika: string;
    faktor_riwayat_check: string;
    riwayat_kejang: string;
    riwayat_vertigo: string;
    riwayat_depresi: string;
    riwayat_pingsan: string;
    riwayat_pusing: string;
    riwayat_delirium: string;
    riwayat_disorientasi: string;
    faktor_lain_check: string;
    faktor_lain_text: string;
    tingkatan_check: string;
    tingkatan_rendah: string;
    tingkatan_sedang: string;
    tingkatan_tinggi: string;
    tindakan_rem_tempat_tidur_check: string;
    tindakan_kebutuhan_pasien_check: string;
    tindakan_tempatkan_meja_check: string;
    tindakan_pasang_palang_check: string;
    tindakan_pasang_penanda_check: string;
    tindakan_libatkan_keluarga_check: string;
    tindakan_cepat_menanggapi_check: string;
    tujuan_pasien_aman_check: string;
    akibat_timbulnya_cedera_check: string;
    lainnya_check: string;
    lainnya_text: string;
    id_ttd_pemberi_informasi: string;
    ttd_pemberi_informasi: string;
    id_ttd_penerima_informasi: string;
    ttd_penerima_informasi: string;
    nama_wali: string;
}

export class UpdateDocumentationOfFallRiskPatientRequest extends AppRequest {
  id_pemberi_informasi: string;
  penerima_informasi: string;
  faktor_usia_check: string;
  faktor_riwayat_jatuh_check: string;
  faktor_penyakit_check: string;
  faktor_penggunaan_alat_check: string;
  faktor_terpasang_infus_check: string;
  faktor_kondisi_mental_check: string;
  faktor_mobilisasi_check: string;
  faktor_mobilisasi_text: string;
  faktor_post_operasi_check: string;
  faktor_post_operasi_text: string;
  faktor_respon_obat_check : string;
  respon_obat_sedatif: string;
  respon_obat_hipnotik: string;
  respon_obat_antidepresan: string;
  respon_obat_laxatives: string;
  respon_obat_diuretika: string;
  respon_obat_narkotika: string;
  faktor_riwayat_check: string;
  riwayat_kejang: string;
  riwayat_vertigo: string;
  riwayat_depresi: string;
  riwayat_pingsan: string;
  riwayat_pusing: string;
  riwayat_delirium: string;
  riwayat_disorientasi: string;
  faktor_lain_check: string;
  faktor_lain_text: string;
  tingkatan_check: string;
  tingkatan_rendah: string;
  tingkatan_sedang: string;
  tingkatan_tinggi: string;
  tindakan_rem_tempat_tidur_check: string;
  tindakan_kebutuhan_pasien_check: string;
  tindakan_tempatkan_meja_check: string;
  tindakan_pasang_palang_check: string;
  tindakan_pasang_penanda_check: string;
  tindakan_libatkan_keluarga_check: string;
  tindakan_cepat_menanggapi_check: string;
  tujuan_pasien_aman_check: string;
  akibat_timbulnya_cedera_check: string;
  lainnya_check: string;
  lainnya_text: string;
  id_ttd_pemberi_informasi: string;
  ttd_pemberi_informasi: string;
  id_ttd_penerima_informasi: string;
  ttd_penerima_informasi: string;
  nama_wali: string;

  constructor(request: IUpdateDocumentationOfFallRiskPatientRequest) {
    super(request);
    this.id_pemberi_informasi = request.id_pemberi_informasi;
    this.penerima_informasi = request.penerima_informasi;
    this.faktor_usia_check = request.faktor_usia_check;
    this.faktor_riwayat_jatuh_check = request.faktor_riwayat_jatuh_check;
    this.faktor_penyakit_check = request.faktor_penyakit_check;
    this.faktor_penggunaan_alat_check = request.faktor_penggunaan_alat_check;
    this.faktor_terpasang_infus_check = request.faktor_terpasang_infus_check;
    this.faktor_kondisi_mental_check = request.faktor_kondisi_mental_check;
    this.faktor_mobilisasi_check = request.faktor_mobilisasi_check;
    this.faktor_mobilisasi_text = request.faktor_mobilisasi_text;
    this.faktor_post_operasi_check = request.faktor_post_operasi_check;
    this.faktor_post_operasi_text = request.faktor_post_operasi_text;
    this.faktor_respon_obat_check = request.faktor_respon_obat_check;
    this.respon_obat_sedatif = request.respon_obat_sedatif;
    this.respon_obat_hipnotik = request.respon_obat_hipnotik;
    this.respon_obat_antidepresan = request.respon_obat_antidepresan;
    this.respon_obat_laxatives = request.respon_obat_laxatives;
    this.respon_obat_diuretika = request.respon_obat_diuretika;
    this.respon_obat_narkotika = request.respon_obat_narkotika;
    this.faktor_riwayat_check = request.faktor_riwayat_check;
    this.riwayat_kejang = request.riwayat_kejang;
    this.riwayat_vertigo = request.riwayat_vertigo;
    this.riwayat_depresi = request.riwayat_depresi;
    this.riwayat_pingsan = request.riwayat_pingsan;
    this.riwayat_pusing = request.riwayat_pusing;
    this.riwayat_delirium = request.riwayat_delirium;
    this.riwayat_disorientasi = request.riwayat_disorientasi;
    this.faktor_lain_check = request.faktor_lain_check;
    this.faktor_lain_text = request.faktor_lain_text;
    this.tingkatan_check = request.tingkatan_check;
    this.tingkatan_rendah = request.tingkatan_rendah;
    this.tingkatan_sedang = request.tingkatan_sedang;
    this.tingkatan_tinggi = request.tingkatan_tinggi;
    this.tindakan_rem_tempat_tidur_check = request.tindakan_rem_tempat_tidur_check;
    this.tindakan_kebutuhan_pasien_check = request.tindakan_kebutuhan_pasien_check;
    this.tindakan_tempatkan_meja_check = request.tindakan_tempatkan_meja_check;
    this.tindakan_pasang_palang_check = request.tindakan_pasang_palang_check;
    this.tindakan_pasang_penanda_check = request.tindakan_pasang_penanda_check;
    this.tindakan_libatkan_keluarga_check = request.tindakan_libatkan_keluarga_check;
    this.tindakan_cepat_menanggapi_check = request.tindakan_cepat_menanggapi_check;
    this.tujuan_pasien_aman_check = request.tujuan_pasien_aman_check;
    this.akibat_timbulnya_cedera_check = request.akibat_timbulnya_cedera_check;
    this.lainnya_check = request.lainnya_check;
    this.lainnya_text = request.lainnya_text;
    this.id_ttd_pemberi_informasi = request.id_ttd_pemberi_informasi;
    this.ttd_pemberi_informasi = request.ttd_pemberi_informasi;
    this.id_ttd_penerima_informasi = request.id_ttd_penerima_informasi;
    this.ttd_penerima_informasi = request.ttd_penerima_informasi;
    this.nama_wali = request.nama_wali;
  }

  static schema() {
    return yup.object().shape({
      id_pemberi_informasi: yup.string(),
      penerima_informasi: yup.string(),
      faktor_usia_check: yup.string(),
      faktor_riwayat_jatuh_check:  yup.string(),
      faktor_penyakit_check: yup.string(),
      faktor_penggunaan_alat_check: yup.string(),
      faktor_terpasang_infus_check: yup.string(),
      faktor_kondisi_mental_check: yup.string(),
      faktor_mobilisasi_check: yup.string(),
      faktor_mobilisasi_text: yup.string(),
      faktor_post_operasi_check: yup.string(),
      faktor_post_operasi_text: yup.string(),
      faktor_respon_obat_check : yup.string(),
      respon_obat_sedatif: yup.string(),
      respon_obat_hipnotik: yup.string(),
      respon_obat_antidepresan: yup.string(),
      respon_obat_laxatives: yup.string(),
      respon_obat_diuretika: yup.string(),
      respon_obat_narkotika: yup.string(),
      faktor_riwayat_check: yup.string(),
      riwayat_kejang: yup.string(),
      riwayat_vertigo: yup.string(),
      riwayat_depresi:yup.string(),
      riwayat_pingsan: yup.string(),
      riwayat_pusing: yup.string(),
      riwayat_delirium: yup.string(),
      riwayat_disorientasi: yup.string(),
      faktor_lain_check: yup.string(),
      faktor_lain_text: yup.string(),
      tingkatan_check: yup.string(),
      tingkatan_rendah: yup.string(),
      tingkatan_sedang: yup.string(),
      tingkatan_tinggi: yup.string(),
      tindakan_rem_tempat_tidur_check: yup.string(),
      tindakan_kebutuhan_pasien_check: yup.string(),
      tindakan_tempatkan_meja_check: yup.string(),
      tindakan_pasang_palang_check: yup.string(),
      tindakan_pasang_penanda_check: yup.string(),
      tindakan_libatkan_keluarga_check: yup.string(),
      tindakan_cepat_menanggapi_check: yup.string(),
      tujuan_pasien_aman_check: yup.string(),
      akibat_timbulnya_cedera_check: yup.string(),
      lainnya_check: yup.string(),
      lainnya_text: yup.string(),
      id_ttd_pemberi_informasi: yup.string(),
      ttd_pemberi_informasi: yup.string(),
      id_ttd_penerima_informasi: yup.string(),
      ttd_penerima_informasi: yup.string(),
      nama_wali: yup.string(),
    });
  }

  static createFromJson(json: IUpdateDocumentationOfFallRiskPatientRequest) {
    return new UpdateDocumentationOfFallRiskPatientRequest(json);
  }
}
