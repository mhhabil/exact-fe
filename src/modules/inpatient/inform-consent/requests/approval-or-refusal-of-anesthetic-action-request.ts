import * as yup from 'yup';

import { AppRequest, IAppRequest } from "@src/shared/request";

export interface IUpdateApprovalOrRefusalOfAnestheticActionRequest extends IAppRequest {
  id_dokter_pelaksana: string;
  id_pemberi_informasi: string;
  penerima_informasi: string;
  diagnosis_check: string;
  dasar_diagnosis_check: string;
  dasar_klinis: string;
  dasar_radiologi: string;
  dasar_ekg: string;
  dasar_laboratorium: string;
  tindakan_kedokteran_check: string;
  anestesi_umum_intubasi_check: string;
  anestesi_umum_lma_check: string;
  anestesi_umum_fm_check: string;
  anestesi_umum_tiva_check: string;
  anestesi_regional_spinal_check: string;
  anestesi_regional_epidural_check: string;
  anestesi_regional_perifer_check: string;
  indikasi_tindakan_tujuan_check: string;
  tata_cara_tindakan_check: string;
  tata_cara_tindakan: string;
  risiko_check: string;
  shock_check: string;
  henti_jantung_check: string;
  meninggal_check: string;
  tujuan_check: string;
  tujuan: string;
  komplikasi_check: string;
  komplikasi_umum_1: string;
  komplikasi_umum_2: string;
  komplikasi_umum_3: string;
  komplikasi_umum_4: string;
  komplikasi_umum_5: string;
  komplikasi_umum_6: string;
  komplikasi_umum_7: string;
  komplikasi_umum_8: string;
  komplikasi_umum_9: string;
  komplikasi_umum_10: string;
  komplikasi_regional_1: string;
  komplikasi_regional_2: string;
  komplikasi_regional_3: string;
  komplikasi_regional_4: string;
  komplikasi_regional_5: string;
  komplikasi_regional_6: string;
  komplikasi_regional_7: string;
  komplikasi_regional_8: string;
  komplikasi_regional_9: string;
  komplikasi_regional_10: string;
  komplikasi_regional_11: string;
  komplikasi_regional_12: string;
  prognosis_check: string;
  prognosis: string;
  alternatif_tindakan_check: string;
  alternatif_tindakan: string;
  lain_lain_check: string;
  lain_lain: string;
  id_dokter_pelaksana_ttd: string;
  ttd_dokter_pelaksana: string;
  ttd_penerima_informasi: string;
  pasien_nomor_mr: string;
  pasien_nama: string;
  pasien_tgl_lahir: string;
  pasien_jk: string;
  tindakan_operasi: string;
  pernyataan: string;
  tanda_tangan_radio: string;
  tanda_tangan_nama: string;
  tanda_tangan_tgl_lahir: string;
  tanda_tangan_jk: string;
  tanda_tangan_telp: string;
  tanda_tangan_alamat: string;
  pasien_kota: string;
  pasien_tanggal: string;
  tanda_tangan_pasien: string;
  tanda_tangan_saksi: string;
  id_saksi: string;
  tanda_tangan_hubungan: string;
  nama_saksi_keluarga: string;
  tanda_tangan_saksi_2: string;
}

export class UpdateApprovalOrRefusalOfAnestheticActionRequest extends AppRequest {
  id_dokter_pelaksana: string;
  id_pemberi_informasi: string;
  penerima_informasi: string;
  diagnosis_check: string;
  dasar_diagnosis_check: string;
  dasar_klinis: string;
  dasar_radiologi: string;
  dasar_ekg: string;
  dasar_laboratorium: string;
  tindakan_kedokteran_check: string;
  anestesi_umum_intubasi_check: string;
  anestesi_umum_lma_check: string;
  anestesi_umum_fm_check: string;
  anestesi_umum_tiva_check: string;
  anestesi_regional_spinal_check: string;
  anestesi_regional_epidural_check: string;
  anestesi_regional_perifer_check: string;
  indikasi_tindakan_tujuan_check: string;
  tata_cara_tindakan_check: string;
  tata_cara_tindakan: string;
  risiko_check: string;
  shock_check: string;
  henti_jantung_check: string;
  meninggal_check: string;
  tujuan_check: string;
  tujuan: string;
  komplikasi_check: string;
  komplikasi_umum_1: string;
  komplikasi_umum_2: string;
  komplikasi_umum_3: string;
  komplikasi_umum_4: string;
  komplikasi_umum_5: string;
  komplikasi_umum_6: string;
  komplikasi_umum_7: string;
  komplikasi_umum_8: string;
  komplikasi_umum_9: string;
  komplikasi_umum_10: string;
  komplikasi_regional_1: string;
  komplikasi_regional_2: string;
  komplikasi_regional_3: string;
  komplikasi_regional_4: string;
  komplikasi_regional_5: string;
  komplikasi_regional_6: string;
  komplikasi_regional_7: string;
  komplikasi_regional_8: string;
  komplikasi_regional_9: string;
  komplikasi_regional_10: string;
  komplikasi_regional_11: string;
  komplikasi_regional_12: string;
  prognosis_check: string;
  prognosis: string;
  alternatif_tindakan_check: string;
  alternatif_tindakan: string;
  lain_lain_check: string;
  lain_lain: string;
  id_dokter_pelaksana_ttd: string;
  ttd_dokter_pelaksana: string;
  ttd_penerima_informasi: string;
  pasien_nomor_mr: string;
  pasien_nama: string;
  pasien_tgl_lahir: string;
  pasien_jk: string;
  tindakan_operasi: string;
  pernyataan: string;
  tanda_tangan_radio: string;
  tanda_tangan_nama: string;
  tanda_tangan_tgl_lahir: string;
  tanda_tangan_jk: string;
  tanda_tangan_telp: string;
  tanda_tangan_alamat: string;
  pasien_kota: string;
  pasien_tanggal: string;
  tanda_tangan_pasien: string;
  tanda_tangan_saksi: string;
  id_saksi: string;
  tanda_tangan_hubungan: string;
  nama_saksi_keluarga: string;
  tanda_tangan_saksi_2: string;
  constructor(req: IUpdateApprovalOrRefusalOfAnestheticActionRequest) {
    super(req);
    this.id_dokter_pelaksana = req.id_dokter_pelaksana;
    this.id_pemberi_informasi = req.id_pemberi_informasi;
    this.penerima_informasi = req.penerima_informasi;
    this.diagnosis_check = req.diagnosis_check;
    this.dasar_diagnosis_check = req.dasar_diagnosis_check;
    this.dasar_klinis = req.dasar_klinis;
    this.dasar_radiologi = req.dasar_radiologi;
    this.dasar_ekg = req.dasar_ekg;
    this.dasar_laboratorium = req.dasar_laboratorium;
    this.tindakan_kedokteran_check = req.tindakan_kedokteran_check;
    this.anestesi_umum_intubasi_check = req.anestesi_umum_intubasi_check;
    this.anestesi_umum_lma_check = req.anestesi_umum_lma_check;
    this.anestesi_umum_fm_check = req.anestesi_umum_fm_check;
    this.anestesi_umum_tiva_check = req.anestesi_umum_tiva_check;
    this.anestesi_regional_spinal_check = req.anestesi_regional_spinal_check;
    this.anestesi_regional_epidural_check = req.anestesi_regional_epidural_check;
    this.anestesi_regional_perifer_check = req.anestesi_regional_perifer_check;
    this.indikasi_tindakan_tujuan_check = req.indikasi_tindakan_tujuan_check;
    this.tata_cara_tindakan_check = req.tata_cara_tindakan_check;
    this.tata_cara_tindakan = req.tata_cara_tindakan;
    this.risiko_check = req.risiko_check;
    this.shock_check = req.shock_check;
    this.henti_jantung_check = req.henti_jantung_check;
    this.meninggal_check = req.meninggal_check;
    this.tujuan_check = req.tujuan_check;
    this.tujuan = req.tujuan;
    this.komplikasi_check = req.komplikasi_check;
    this.komplikasi_umum_1 = req.komplikasi_umum_1;
    this.komplikasi_umum_2 = req.komplikasi_umum_2;
    this.komplikasi_umum_3 = req.komplikasi_umum_3;
    this.komplikasi_umum_4 = req.komplikasi_umum_4;
    this.komplikasi_umum_5 = req.komplikasi_umum_5;
    this.komplikasi_umum_6 = req.komplikasi_umum_6;
    this.komplikasi_umum_7 = req.komplikasi_umum_7;
    this.komplikasi_umum_8 = req.komplikasi_umum_8;
    this.komplikasi_umum_9 = req.komplikasi_umum_9;
    this.komplikasi_umum_10 = req.komplikasi_umum_10;
    this.komplikasi_regional_1 = req.komplikasi_regional_1;
    this.komplikasi_regional_2 = req.komplikasi_regional_2;
    this.komplikasi_regional_3 = req.komplikasi_regional_3;
    this.komplikasi_regional_4 = req.komplikasi_regional_4;
    this.komplikasi_regional_5 = req.komplikasi_regional_5;
    this.komplikasi_regional_6 = req.komplikasi_regional_6;
    this.komplikasi_regional_7 = req.komplikasi_regional_7;
    this.komplikasi_regional_8 = req.komplikasi_regional_8;
    this.komplikasi_regional_9 = req.komplikasi_regional_9;
    this.komplikasi_regional_10 = req.komplikasi_regional_10;
    this.komplikasi_regional_11 = req.komplikasi_regional_11;
    this.komplikasi_regional_12 = req.komplikasi_regional_12;
    this.prognosis_check = req.prognosis_check;
    this.prognosis = req.prognosis;
    this.alternatif_tindakan_check = req.alternatif_tindakan_check;
    this.alternatif_tindakan = req.alternatif_tindakan;
    this.lain_lain_check = req.lain_lain_check;
    this.lain_lain = req.lain_lain;
    this.id_dokter_pelaksana_ttd = req.id_dokter_pelaksana_ttd;
    this.ttd_dokter_pelaksana = req.ttd_dokter_pelaksana;
    this.ttd_penerima_informasi = req.ttd_penerima_informasi;
    this.pasien_nomor_mr = req.pasien_nomor_mr;
    this.pasien_nama = req.pasien_nama;
    this.pasien_tgl_lahir = req.pasien_tgl_lahir;
    this.pasien_jk = req.pasien_jk;
    this.tindakan_operasi = req.tindakan_operasi;
    this.pernyataan = req.pernyataan;
    this.tanda_tangan_radio = req.tanda_tangan_radio;
    this.tanda_tangan_nama = req.tanda_tangan_nama;
    this.tanda_tangan_tgl_lahir = req.tanda_tangan_tgl_lahir;
    this.tanda_tangan_jk = req.tanda_tangan_jk;
    this.tanda_tangan_telp = req.tanda_tangan_telp;
    this.tanda_tangan_alamat = req.tanda_tangan_alamat;
    this.pasien_kota = req.pasien_kota;
    this.pasien_tanggal = req.pasien_tanggal;
    this.tanda_tangan_pasien = req.tanda_tangan_pasien;
    this.tanda_tangan_saksi = req.tanda_tangan_saksi;
    this.id_saksi = req.id_saksi;
    this.tanda_tangan_hubungan = req.tanda_tangan_hubungan;
    this.nama_saksi_keluarga = req.nama_saksi_keluarga;
    this.tanda_tangan_saksi_2 = req.tanda_tangan_saksi_2;
  }

  static schema() {
    return yup.object().shape({
      pasien_nomor_mr: yup.object(),
      pasien_nama: yup.object(),
      pasien_tgl_lahir: yup.object(),
      pasien_jk: yup.string(),
      tindakan_operasi: yup.string(),
      pernyataan: yup.string(),
      tanda_tangan_radio: yup.string(),
      tanda_tangan_nama: yup.string(),
      tanda_tangan_tgl_lahir: yup.string(),
      tanda_tangan_jk: yup.string(),
      tanda_tangan_telp: yup.string(),
      tanda_tangan_alamat: yup.string(),
      pasien_kota: yup.string(),
      pasien_tanggal: yup.string(),
      tanda_tangan_pasien: yup.string(),
      tanda_tangan_saksi: yup.string(),
      id_saksi: yup.string(),
      id_dokter_pelaksana: yup.string(),
      id_pemberi_informasi: yup.string(),
      penerima_informasi: yup.string(),
      diagnosis_check: yup.string(),
      dasar_diagnosis_check: yup.string(),
      dasar_klinis: yup.string(),
      dasar_radiologi: yup.string(),
      dasar_ekg: yup.string(),
      dasar_laboratorium: yup.string(),
      tindakan_kedokteran_check: yup.string(),
      anestesi_umum_intubasi_check: yup.string(),
      anestesi_umum_lma_check: yup.string(),
      anestesi_umum_fm_check: yup.string(),
      anestesi_umum_tiva_check: yup.string(),
      anestesi_regional_spinal_check: yup.string(),
      anestesi_regional_epidural_check: yup.string(),
      anestesi_regional_perifer_check: yup.string(),
      indikasi_tindakan_tujuan_check: yup.string(),
      tata_cara_tindakan_check: yup.string(),
      tata_cara_tindakan: yup.string(),
      risiko_check: yup.string(),
      shock_check: yup.string(),
      henti_jantung_check: yup.string(),
      meninggal_check: yup.string(),
      tujuan_check: yup.string(),
      tujuan: yup.string(),
      komplikasi_check: yup.string(),
      komplikasi_umum_1: yup.string(),
      komplikasi_umum_2: yup.string(),
      komplikasi_umum_3: yup.string(),
      komplikasi_umum_4: yup.string(),
      komplikasi_umum_5: yup.string(),
      komplikasi_umum_6: yup.string(),
      komplikasi_umum_7: yup.string(),
      komplikasi_umum_8: yup.string(),
      komplikasi_umum_9: yup.string(),
      komplikasi_umum_10: yup.string(),
      komplikasi_regional_1: yup.string(),
      komplikasi_regional_2: yup.string(),
      komplikasi_regional_3: yup.string(),
      komplikasi_regional_4: yup.string(),
      komplikasi_regional_5: yup.string(),
      komplikasi_regional_6: yup.string(),
      komplikasi_regional_7: yup.string(),
      komplikasi_regional_8: yup.string(),
      komplikasi_regional_9: yup.string(),
      komplikasi_regional_10: yup.string(),
      komplikasi_regional_11: yup.string(),
      komplikasi_regional_12: yup.string(),
      prognosis_check: yup.string(),
      prognosis: yup.string(),
      alternatif_tindakan_check: yup.string(),
      alternatif_tindakan: yup.string(),
      lain_lain_check: yup.string(),
      lain_lain: yup.string(),
      id_dokter_pelaksana_ttd: yup.string(),
      ttd_dokter_pelaksana: yup.string(),
      ttd_penerima_informasi: yup.string(),
      tanda_tangan_hubungan: yup.string(),
      nama_saksi_keluarga: yup.string(),
      tanda_tangan_saksi_2:  yup.string(),
    });
  }

  static createFromJson(json: IUpdateApprovalOrRefusalOfAnestheticActionRequest) {
    return new UpdateApprovalOrRefusalOfAnestheticActionRequest(json);
  }
}
