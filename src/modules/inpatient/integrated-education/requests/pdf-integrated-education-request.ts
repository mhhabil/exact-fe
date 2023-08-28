import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { IntegratedEducationModel } from '../models/integrated-education.model';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';
import { DateTimeConverter } from '@src/shared/datetime-converter';

interface IHistoryPdf {
  no: string;
  informasi_yang_didapatkan: string;
}

export interface IPdfIntegratedEducationRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    sistem_imunitas_1: string;
    sistem_imunitas_2: string;
    sistem_imunitas_3: string;
    sistem_imunitas_4: string;
    sistem_imunitas_5: string;
    sistem_imunitas_6: string;
    sistem_imunitas_7: string;
    sistem_imunitas_8: string;
    sistem_imunitas_9: string;
    sistem_imunitas_10: string;
    sistem_imunitas_11: string;
    sistem_imunitas_12: string;
    informasi_yang_didapatkan: Array<IHistoryPdf>;

    // DPJP
    penjelasan_1_a: string;
    penjelasan_1_b: string;
    penjelasan_1_c: string;
    penjelasan_1_d: string;
    penjelasan_1_e: string;
    penjelasan_1_f: string;
    penjelasan_1_g: string;
    penjelasan_1_h: string;
    d1iagnosa_saat_ini_1: string;
    d1iagnosa_saat_ini_2: string;
    d1iagnosa_saat_ini_3: string;
    penjelasan_1_i: string;
    hasil_asuhan_1: string;
    hasil_asuhan_2: string;
    metode_1_1: string;
    metode_1_2: string;
    metode_1_3: string;
    metode_1_4: string;
    metode_1_5: string;
    metode_1_6: string;
    metode_pembelajaran__lain_1: string;
    evaluasi_1_1: string;
    evaluasi_1_2: string;
    evaluasi_1_3: string;
    evaluasi_lain_1: string;
    date_1: string;
    time_1: string;
    durasi_1: string;
    penerima_1_1: string;
    penerima_1_2: string;
    penerima_1_3: string;
    penerima_1_4: string;
    penerima_1_5: string;
    keluarga_lain_1: string;
    penerima_edu_1: string;
    nama_penerima_edu_1:  string;
    ttd_edukator_1: string;
    nama_edukator_1: string;

    // Nutrisi
    penjelasan_2_a: string;
    penjelasan_2_b: string;
    penjelasan_2_c: string;
    penjelasan_2_d: string;
    metode_2_1: string;
    metode_2_2: string;
    metode_2_3: string;
    metode_2_4: string;
    metode_2_5: string;
    metode_2_6: string;
    metode_pembelajaran__lain_2: string;
    evaluasi_2_1: string;
    evaluasi_2_2: string;
    evaluasi_2_3: string;
    evaluasi_lain_2: string;
    date_2: string;
    time_2: string;
    durasi_2: string;
    penerima_2_1: string;
    penerima_2_2: string;
    penerima_2_3: string;
    penerima_2_4: string;
    penerima_2_5: string;
    keluarga_lain_2: string;
    penerima_edu_2: string;
    nama_penerima_edu_2: string;
    ttd_edukator_2: string;
    nama_edukator_2: string;

    // Manajemen Nyeri
    penjelasan_3_a: string;
    penjelasan_3_b: string;
    metode_3_1: string;
    metode_3_2: string;
    metode_3_3: string;
    metode_3_4: string;
    metode_3_5: string;
    metode_3_6: string;
    metode_pembelajaran__lain_3: string;
    evaluasi_3_1: string;
    evaluasi_3_2: string;
    evaluasi_3_3: string;
    evaluasi_lain_3: string;
    date_3: string;
    time_3: string;
    durasi_3: string;
    penerima_3_1: string;
    penerima_3_2: string;
    penerima_3_3: string;
    penerima_3_4: string;
    penerima_3_5: string;
    keluarga_lain_3: string;
    penerima_edu_3: string;
    nama_penerima_edu_3: string;
    ttd_edukator_3: string;
    nama_edukator_3: string;

    penjelasan_4_a: string;
    penjelasan_4_b: string;
    penjelasan_4_c: string;
    metode_4_1: string;
    metode_4_2: string;
    metode_4_3: string;
    metode_4_4: string;
    metode_4_5: string;
    metode_4_6: string;
    metode_pembelajaran__lain_4: string;
    evaluasi_4_1: string;
    evaluasi_4_2: string;
    evaluasi_4_3: string;
    evaluasi_lain_4: string;
    date_4: string;
    time_4: string;
    durasi_4: string;
    penerima_4_1: string;
    penerima_4_2: string;
    penerima_4_3: string;
    penerima_4_4: string;
    penerima_4_5: string;
    keluarga_lain_4: string;
    penerima_edu_4: string;
    nama_penerima_edu_4: string;
    ttd_edukator_4: string;
    nama_edukator_4: string;

    // Keperawatan
    penjelasan_5_a: string;
    penjelasan_5_b: string;
    penjelasan_5_c: string;
    penjelasan_5_d: string;
    penjelasan_5_e: string;
    metode_5_1: string;
    metode_5_2: string;
    metode_5_3: string;
    metode_5_4: string;
    metode_5_5: string;
    metode_5_6: string;
    metode_pembelajaran__lain_5: string;
    evaluasi_5_1: string;
    evaluasi_5_2: string;
    evaluasi_5_3: string;
    evaluasi_lain_5: string;
    date_5: string;
    time_5: string;
    durasi_5: string;
    penerima_5_1: string;
    penerima_5_2: string;
    penerima_5_3: string;
    penerima_5_4: string;
    penerima_5_5: string;
    keluarga_lain_5: string;
    penerima_edu_5: string;
    nama_penerima_edu_5: string;
    ttd_edukator_5: string;
    nama_edukator_5: string;

    // Farmasi
    penjelasan_6_a: string;
    penjelasan_6_b: string;
    penjelasan_6_c: string;
    penjelasan_6_d: string;
    farmasi_lain: string;
    metode_6_1: string;
    metode_6_2: string;
    metode_6_3: string;
    metode_6_4: string;
    metode_6_5: string;
    metode_6_6: string;
    metode_pembelajaran__lain_6: string;
    evaluasi_6_1: string;
    evaluasi_6_2: string;
    evaluasi_6_3: string;
    evaluasi_lain_6: string;
    date_6: string;
    time_6: string;
    durasi_6: string;
    penerima_6_1: string;
    penerima_6_2: string;
    penerima_6_3: string;
    penerima_6_4: string;
    penerima_6_5: string;
    keluarga_lain_6: string;
    penerima_edu_6: string;
    nama_penerima_edu_6: string;
    ttd_edukator_6: string;
    nama_edukator_6: string;

    // Dokter Spesialis Anestesi
    penjelasan_7_a: string;
    penjelasan_7_b: string;
    penjelasan_7_c: string;
    penjelasan_7_d: string;
    penjelasan_7_e: string;
    penjelasan_7_f: string;
    metode_7_1: string;
    metode_7_2: string;
    metode_7_3: string;
    metode_7_4: string;
    metode_7_5: string;
    metode_7_6: string;
    metode_pembelajaran__lain_7: string;
    evaluasi_7_1: string;
    evaluasi_7_2: string;
    evaluasi_7_3: string;
    evaluasi_lain_7: string;
    date_7: string;
    time_7: string;
    durasi_7: string;
    penerima_7_1: string;
    penerima_7_2: string;
    penerima_7_3: string;
    penerima_7_4: string;
    penerima_7_5: string;
    penerima_edu_7: string;
    nama_penerima_edu_7: string;
    ttd_edukator_7: string;
    nama_edukator_7: string;
    keluarga_lain_7: string;

    // Mencuci Tangan
    penjelasan_8_a: string;
    penjelasan_8_b: string;
    metode_8_1: string;
    metode_8_2: string;
    metode_8_3: string;
    metode_8_4: string;
    metode_8_5: string;
    metode_8_6: string;
    metode_pembelajaran__lain_8: string;
    evaluasi_8_1: string;
    evaluasi_8_2: string;
    evaluasi_8_3: string;
    evaluasi_lain_8: string;
    date_8: string;
    time_8: string;
    durasi_8: string;
    penerima_8_1: string;
    penerima_8_2: string;
    penerima_8_3: string;
    penerima_8_4: string;
    penerima_8_5: string;
    keluarga_lain_8: string;
    penerima_edu_8: string;
    nama_penerima_edu_8: string;
    ttd_edukator_8: string;
    nama_edukator_8: string;

    // penggunaan peralatan medis
    penjelasan_9_a: string;
    penjelasan_9_b: string;
    penjelasan_9_c: string;
    penjelasan_9_d: string;
    peralatan_medis_lain: string;
    metode_9_1: string;
    metode_9_2: string;
    metode_9_3: string;
    metode_9_4: string;
    metode_9_5: string;
    metode_9_6: string;
    metode_pembelajaran__lain_9: string;
    evaluasi_9_1: string;
    evaluasi_9_2: string;
    evaluasi_9_3: string;
    evaluasi_lain_9: string;
    date_9: string;
    time_9: string;
    durasi_9: string;
    penerima_9_1: string;
    penerima_9_2: string;
    penerima_9_3: string;
    penerima_9_4: string;
    penerima_9_5: string;
    keluarga_lain_9: string;
    penerima_edu_9: string;
    nama_penerima_edu_9: string;
    ttd_edukator_9: string;
    nama_edukator_9: string;

    // Hak dan Kewajiban Pasien
    penjelasan_10_a: string;
    penjelasan_10_b: string;
    metode_10_1: string;
    metode_10_2: string;
    metode_10_3: string;
    metode_10_4: string;
    metode_10_5: string;
    metode_10_6: string;
    metode_pembelajaran__lain_10: string;
    evaluasi_10_1: string;
    evaluasi_10_2: string;
    evaluasi_10_3: string;
    evaluasi_lain_10: string;
    date_10: string;
    time_10: string;
    durasi_10: string;
    penerima_10_1: string;
    penerima_10_2: string;
    penerima_10_3: string;
    penerima_10_4: string;
    penerima_10_5: string;
    keluarga_lain_10: string;
    penerima_edu_10: string;
    nama_penerima_edu_10: string;
    ttd_edukator_10: string;
    nama_edukator_10: string;

    // Informasi Pasien
    // penjelasan_11_a:string;
    // informasi_diingkan_1: string;
    // penjelasan_11_b: string;
    // informasi_diingkan_2: string;
    // penjelasan_11_c: string;
    // informasi_diingkan_3: string;
    // penjelasan_11_d: string;
    // informasi_diingkan_4: string;
    // penjelasan_11_e: string;
    // informasi_diingkan_5: string;
    metode_11_1: string;
    metode_11_2: string;
    metode_11_3: string;
    metode_11_4: string;
    metode_11_5: string;
    metode_11_6: string;
    metode_pembelajaran__lain_11: string;
    evaluasi_11_1: string;
    evaluasi_11_2: string;
    evaluasi_11_3: string;
    evaluasi_lain_11: string;
    date_11: string;
    time_11: string;
    durasi_11: string;
    penerima_11_1: string;
    penerima_11_2: string;
    penerima_11_3: string;
    penerima_11_4: string;
    penerima_11_5: string;
    keluarga_lain_11: string;
    penerima_edu_11: string;
    nama_penerima_edu_11: string;
    ttd_edukator_11: string;
    nama_edukator_11: string;
    nik: string;
  }
}

export class PdfIntegratedEducationRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    sistem_imunitas_1: string;
    sistem_imunitas_2: string;
    sistem_imunitas_3: string;
    sistem_imunitas_4: string;
    sistem_imunitas_5: string;
    sistem_imunitas_6: string;
    sistem_imunitas_7: string;
    sistem_imunitas_8: string;
    sistem_imunitas_9: string;
    sistem_imunitas_10: string;
    sistem_imunitas_11: string;
    sistem_imunitas_12: string;
    informasi_yang_didapatkan: Array<IHistoryPdf>;

    // DPJP
    penjelasan_1_a: string;
    penjelasan_1_b: string;
    penjelasan_1_c: string;
    penjelasan_1_d: string;
    penjelasan_1_e: string;
    penjelasan_1_f: string;
    penjelasan_1_g: string;
    penjelasan_1_h: string;
    d1iagnosa_saat_ini_1: string;
    d1iagnosa_saat_ini_2: string;
    d1iagnosa_saat_ini_3: string;
    penjelasan_1_i: string;
    hasil_asuhan_1: string;
    hasil_asuhan_2: string;
    metode_1_1: string;
    metode_1_2: string;
    metode_1_3: string;
    metode_1_4: string;
    metode_1_5: string;
    metode_1_6: string;
    metode_pembelajaran__lain_1: string;
    evaluasi_1_1: string;
    evaluasi_1_2: string;
    evaluasi_1_3: string;
    evaluasi_lain_1: string;
    date_1: string;
    time_1: string;
    durasi_1: string;
    penerima_1_1: string;
    penerima_1_2: string;
    penerima_1_3: string;
    penerima_1_4: string;
    penerima_1_5: string;
    keluarga_lain_1: string;
    penerima_edu_1: string;
    nama_penerima_edu_1:  string;
    ttd_edukator_1: string;
    nama_edukator_1: string;

    // Nutrisi
    penjelasan_2_a: string;
    penjelasan_2_b: string;
    penjelasan_2_c: string;
    penjelasan_2_d: string;
    metode_2_1: string;
    metode_2_2: string;
    metode_2_3: string;
    metode_2_4: string;
    metode_2_5: string;
    metode_2_6: string;
    metode_pembelajaran__lain_2: string;
    evaluasi_2_1: string;
    evaluasi_2_2: string;
    evaluasi_2_3: string;
    evaluasi_lain_2: string;
    date_2: string;
    time_2: string;
    durasi_2: string;
    penerima_2_1: string;
    penerima_2_2: string;
    penerima_2_3: string;
    penerima_2_4: string;
    penerima_2_5: string;
    keluarga_lain_2: string;
    penerima_edu_2: string;
    nama_penerima_edu_2: string;
    ttd_edukator_2: string;
    nama_edukator_2: string;

    // Manajemen Nyeri
    penjelasan_3_a: string;
    penjelasan_3_b: string;
    metode_3_1: string;
    metode_3_2: string;
    metode_3_3: string;
    metode_3_4: string;
    metode_3_5: string;
    metode_3_6: string;
    metode_pembelajaran__lain_3: string;
    evaluasi_3_1: string;
    evaluasi_3_2: string;
    evaluasi_3_3: string;
    evaluasi_lain_3: string;
    date_3: string;
    time_3: string;
    durasi_3: string;
    penerima_3_1: string;
    penerima_3_2: string;
    penerima_3_3: string;
    penerima_3_4: string;
    penerima_3_5: string;
    keluarga_lain_3: string;
    penerima_edu_3: string;
    nama_penerima_edu_3: string;
    ttd_edukator_3: string;
    nama_edukator_3: string;

    penjelasan_4_a: string;
    penjelasan_4_b: string;
    penjelasan_4_c: string;
    metode_4_1: string;
    metode_4_2: string;
    metode_4_3: string;
    metode_4_4: string;
    metode_4_5: string;
    metode_4_6: string;
    metode_pembelajaran__lain_4: string;
    evaluasi_4_1: string;
    evaluasi_4_2: string;
    evaluasi_4_3: string;
    evaluasi_lain_4: string;
    date_4: string;
    time_4: string;
    durasi_4: string;
    penerima_4_1: string;
    penerima_4_2: string;
    penerima_4_3: string;
    penerima_4_4: string;
    penerima_4_5: string;
    keluarga_lain_4: string;
    penerima_edu_4: string;
    nama_penerima_edu_4: string;
    ttd_edukator_4: string;
    nama_edukator_4: string;

    // Keperawatan
    penjelasan_5_a: string;
    penjelasan_5_b: string;
    penjelasan_5_c: string;
    penjelasan_5_d: string;
    penjelasan_5_e: string;
    metode_5_1: string;
    metode_5_2: string;
    metode_5_3: string;
    metode_5_4: string;
    metode_5_5: string;
    metode_5_6: string;
    metode_pembelajaran__lain_5: string;
    evaluasi_5_1: string;
    evaluasi_5_2: string;
    evaluasi_5_3: string;
    evaluasi_lain_5: string;
    date_5: string;
    time_5: string;
    durasi_5: string;
    penerima_5_1: string;
    penerima_5_2: string;
    penerima_5_3: string;
    penerima_5_4: string;
    penerima_5_5: string;
    keluarga_lain_5: string;
    penerima_edu_5: string;
    nama_penerima_edu_5: string;
    ttd_edukator_5: string;
    nama_edukator_5: string;

    // Farmasi
    penjelasan_6_a: string;
    penjelasan_6_b: string;
    penjelasan_6_c: string;
    penjelasan_6_d: string;
    farmasi_lain: string;
    metode_6_1: string;
    metode_6_2: string;
    metode_6_3: string;
    metode_6_4: string;
    metode_6_5: string;
    metode_6_6: string;
    metode_pembelajaran__lain_6: string;
    evaluasi_6_1: string;
    evaluasi_6_2: string;
    evaluasi_6_3: string;
    evaluasi_lain_6: string;
    date_6: string;
    time_6: string;
    durasi_6: string;
    penerima_6_1: string;
    penerima_6_2: string;
    penerima_6_3: string;
    penerima_6_4: string;
    penerima_6_5: string;
    keluarga_lain_6: string;
    penerima_edu_6: string;
    nama_penerima_edu_6: string;
    ttd_edukator_6: string;
    nama_edukator_6: string;

    // Dokter Spesialis Anestesi
    penjelasan_7_a: string;
    penjelasan_7_b: string;
    penjelasan_7_c: string;
    penjelasan_7_d: string;
    penjelasan_7_e: string;
    penjelasan_7_f: string;
    metode_7_1: string;
    metode_7_2: string;
    metode_7_3: string;
    metode_7_4: string;
    metode_7_5: string;
    metode_7_6: string;
    metode_pembelajaran__lain_7: string;
    evaluasi_7_1: string;
    evaluasi_7_2: string;
    evaluasi_7_3: string;
    evaluasi_lain_7: string;
    date_7: string;
    time_7: string;
    durasi_7: string;
    penerima_7_1: string;
    penerima_7_2: string;
    penerima_7_3: string;
    penerima_7_4: string;
    penerima_7_5: string;
    penerima_edu_7: string;
    nama_penerima_edu_7: string;
    ttd_edukator_7: string;
    nama_edukator_7: string;
    keluarga_lain_7: string;

    // Mencuci Tangan
    penjelasan_8_a: string;
    penjelasan_8_b: string;
    metode_8_1: string;
    metode_8_2: string;
    metode_8_3: string;
    metode_8_4: string;
    metode_8_5: string;
    metode_8_6: string;
    metode_pembelajaran__lain_8: string;
    evaluasi_8_1: string;
    evaluasi_8_2: string;
    evaluasi_8_3: string;
    evaluasi_lain_8: string;
    date_8: string;
    time_8: string;
    durasi_8: string;
    penerima_8_1: string;
    penerima_8_2: string;
    penerima_8_3: string;
    penerima_8_4: string;
    penerima_8_5: string;
    keluarga_lain_8: string;
    penerima_edu_8: string;
    nama_penerima_edu_8: string;
    ttd_edukator_8: string;
    nama_edukator_8: string;

    // penggunaan peralatan medis
    penjelasan_9_a: string;
    penjelasan_9_b: string;
    penjelasan_9_c: string;
    penjelasan_9_d: string;
    peralatan_medis_lain: string;
    metode_9_1: string;
    metode_9_2: string;
    metode_9_3: string;
    metode_9_4: string;
    metode_9_5: string;
    metode_9_6: string;
    metode_pembelajaran__lain_9: string;
    evaluasi_9_1: string;
    evaluasi_9_2: string;
    evaluasi_9_3: string;
    evaluasi_lain_9: string;
    date_9: string;
    time_9: string;
    durasi_9: string;
    penerima_9_1: string;
    penerima_9_2: string;
    penerima_9_3: string;
    penerima_9_4: string;
    penerima_9_5: string;
    keluarga_lain_9: string;
    penerima_edu_9: string;
    nama_penerima_edu_9: string;
    ttd_edukator_9: string;
    nama_edukator_9: string;

    // Hak dan Kewajiban Pasien
    penjelasan_10_a: string;
    penjelasan_10_b: string;
    metode_10_1: string;
    metode_10_2: string;
    metode_10_3: string;
    metode_10_4: string;
    metode_10_5: string;
    metode_10_6: string;
    metode_pembelajaran__lain_10: string;
    evaluasi_10_1: string;
    evaluasi_10_2: string;
    evaluasi_10_3: string;
    evaluasi_lain_10: string;
    date_10: string;
    time_10: string;
    durasi_10: string;
    penerima_10_1: string;
    penerima_10_2: string;
    penerima_10_3: string;
    penerima_10_4: string;
    penerima_10_5: string;
    keluarga_lain_10: string;
    penerima_edu_10: string;
    nama_penerima_edu_10: string;
    ttd_edukator_10: string;
    nama_edukator_10: string;

    // Informasi Pasien
    // penjelasan_11_a:string;
    // informasi_diingkan_1: string;
    // penjelasan_11_b: string;
    // informasi_diingkan_2: string;
    // penjelasan_11_c: string;
    // informasi_diingkan_3: string;
    // penjelasan_11_d: string;
    // informasi_diingkan_4: string;
    // penjelasan_11_e: string;
    // informasi_diingkan_5: string;
    metode_11_1: string;
    metode_11_2: string;
    metode_11_3: string;
    metode_11_4: string;
    metode_11_5: string;
    metode_11_6: string;
    metode_pembelajaran__lain_11: string;
    evaluasi_11_1: string;
    evaluasi_11_2: string;
    evaluasi_11_3: string;
    evaluasi_lain_11: string;
    date_11: string;
    time_11: string;
    durasi_11: string;
    penerima_11_1: string;
    penerima_11_2: string;
    penerima_11_3: string;
    penerima_11_4: string;
    penerima_11_5: string;
    keluarga_lain_11: string;
    penerima_edu_11: string;
    nama_penerima_edu_11: string;
    ttd_edukator_11: string;
    nama_edukator_11: string;
    nik: string;
  }
  constructor(req: IPdfIntegratedEducationRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfIntegratedEducationRequest) {
    return new PdfIntegratedEducationRequest(json);
  }

  static createPdfRequest(val: IntegratedEducationModel, treatment: ITreatmentModel): PdfIntegratedEducationRequest {
    const history = val.form && val.form.Informasi_Lain_Pasien && Array.isArray(val.form.Informasi_Lain_Pasien) && val.form.Informasi_Lain_Pasien.length > 0 ? val.form.Informasi_Lain_Pasien : [];

    const informasi_yang_didapatkan: Array<IHistoryPdf> = history.map((item, key) => {
      return {
        no: `${key + 1}`,
        informasi_yang_didapatkan: item ?? '',
      }
    });
    return new PdfIntegratedEducationRequest({
      emr_id: treatment.EMR_ID,
      form_name: 'edukasi-terintegrasi',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(treatment?.Pasien?.Umur_Lengkap) ?? '',
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        sistem_imunitas_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen.Tidak_Ada === 1),
        sistem_imunitas_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Penglihatan_Terganggu === 1),
        sistem_imunitas_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Pendengaran_Kurang === 1),
        sistem_imunitas_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Tidak_Berbahasa_Indonesia === 1),
        sistem_imunitas_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Agama === 1),
        sistem_imunitas_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Keyakinan === 1),
        sistem_imunitas_7: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Nilai_Nilai === 1),
        sistem_imunitas_8: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Kongnisi_Terbatas === 1),
        sistem_imunitas_9: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Hambatan_Emosi === 1),
        sistem_imunitas_10: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Pertimbangan_Budaya === 1),
        sistem_imunitas_11: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Tingkat_Pendidikan === 1),
        sistem_imunitas_12: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Asesmen?.Tingkat_Pendidikan === 1),
        informasi_yang_didapatkan,
        penjelasan_1_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Kondisi_Pasien === 1),
        penjelasan_1_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Pemeriksaan === 1),
        penjelasan_1_c: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Pengobatan === 1),
        penjelasan_1_d: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Manfaat === 1),
        penjelasan_1_e: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Alternatif === 1),
        penjelasan_1_f: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Keberhasilan === 1),
        penjelasan_1_g: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Pemulihan === 1),
        penjelasan_1_h: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa === 1),
        d1iagnosa_saat_ini_1: val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa_Teks ?? '',
        d1iagnosa_saat_ini_2: val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa_Teks_1 ?? '',
        d1iagnosa_saat_ini_3: val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Diagnosa_Teks_2 ?? '',
        penjelasan_1_i: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Asuhan === 1),
        hasil_asuhan_1: val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Asuhan_Teks ?? '',
        hasil_asuhan_2: val?.form?.Materi_Edukasi_Penjelasan?.DPJP?.Hasil_Asuhan_Teks_2 ?? '',
        metode_1_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Metode_Pembelajaran?.Diskusi === 1),
        metode_1_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_1_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Metode_Pembelajaran?.Ceramah === 1),
        metode_1_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Metode_Pembelajaran?.Solusi === 1),
        metode_1_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Metode_Pembelajaran?.Observatori === 1),
        metode_1_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_1: val?.form?.DPJP?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_1_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_1_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_1_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_1: val?.form?.DPJP?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_1: DateTimeConverter.convertToNormalDate(val?.form?.DPJP?.Waktu_Edukasi && val?.form?.DPJP?.Waktu_Edukasi !== '' ? val?.form?.DPJP?.Waktu_Edukasi.substring(0, 10) : ''),
        time_1: val?.form?.DPJP?.Waktu_Edukasi && val?.form?.DPJP?.Waktu_Edukasi !== '' ? val?.form?.DPJP?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_1: val?.form?.DPJP?.Durasi ?? '',
        penerima_1_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Penerima_Edukasi?.Pasien === 1),
        penerima_1_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Penerima_Edukasi?.Pasangan === 1),
        penerima_1_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_1_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_1_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.DPJP?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_1: val?.form?.DPJP?.Evaluasi_Pasien?.Lain_Teks ?? '',
        // nama_saksi_rs: (val?.form?.Nama_Saksi !== '') ? val?.form?.Nama_Saksi : undefined,
        penerima_edu_1: val?.form && val?.form?.TTD_Penerima_Edukasi_DPJP && val?.form?.TTD_Penerima_Edukasi_DPJP !== '' ? val?.form?.TTD_Penerima_Edukasi_DPJP : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_1: val?.pasien?.Nama ?? '',
        ttd_edukator_1: val?.form && val?.form?.TTD_Edukator_DPJP && val?.form?.TTD_Edukator_DPJP !== '' ? val?.form?.TTD_Edukator_DPJP : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_1: val?.form?.Nama_Edukator_DPJP ?? '',

        // Gizi/Nutrisi
        penjelasan_2_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Status_Gizi === 1),
        penjelasan_2_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Selama_Perawatan === 1),
        penjelasan_2_c: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Untuk_Dirumah === 1),
        penjelasan_2_d: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Gizi?.Lain_Lain === 1),
        metode_2_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Metode_Pembelajaran?.Diskusi === 1),
        metode_2_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_2_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Metode_Pembelajaran?.Ceramah === 1),
        metode_2_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Metode_Pembelajaran?.Solusi === 1),
        metode_2_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Metode_Pembelajaran?.Observatori === 1),
        metode_2_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_2: val?.form?.Gizi?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_2_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_2_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_2_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_2: val?.form?.Gizi?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_2: DateTimeConverter.convertToNormalDate(val?.form?.Gizi?.Waktu_Edukasi && val?.form?.Gizi?.Waktu_Edukasi !== '' ? val?.form?.Gizi?.Waktu_Edukasi.substring(0, 10) : ''),
        time_2: val?.form?.Gizi?.Waktu_Edukasi && val?.form?.Gizi?.Waktu_Edukasi !== '' ? val?.form?.Gizi?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_2: val?.form?.Gizi?.Durasi ?? '',
        penerima_2_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Penerima_Edukasi?.Pasien === 1),
        penerima_2_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Penerima_Edukasi?.Pasangan === 1),
        penerima_2_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_2_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_2_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Gizi?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_2: val?.form?.Gizi?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_2: val?.form && val?.form?.TTD_Penerima_Edukasi_Gizi && val?.form?.TTD_Penerima_Edukasi_Gizi !== '' ? val?.form?.TTD_Penerima_Edukasi_Gizi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_2: val?.pasien?.Nama ?? '',
        ttd_edukator_2: val?.form && val?.form?.TTD_Edukator_Gizi && val?.form?.TTD_Edukator_Gizi !== '' ? val?.form?.TTD_Edukator_Gizi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_2: val?.form?.Nama_Edukator_Gizi ?? '',

        // Manajemen Nyeri
        penjelasan_3_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Manajemen_Nyeri?.Farmakologi === 1),
        penjelasan_3_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Manajemen_Nyeri?.Non_Farmakologi === 1),
        metode_3_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Diskusi === 1),
        metode_3_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_3_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Ceramah === 1),
        metode_3_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Solusi === 1),
        metode_3_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Observatori === 1),
        metode_3_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_3: val?.form?.Manajemen_Nyeri?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_3_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_3_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_3_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_3: val?.form?.Manajemen_Nyeri?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_3: DateTimeConverter.convertToNormalDate(val?.form?.Manajemen_Nyeri?.Waktu_Edukasi && val?.form?.Manajemen_Nyeri?.Waktu_Edukasi !== '' ? val?.form?.Manajemen_Nyeri?.Waktu_Edukasi.substring(0, 10) : ''),
        time_3: val?.form?.Manajemen_Nyeri?.Waktu_Edukasi && val?.form?.Manajemen_Nyeri?.Waktu_Edukasi !== '' ? val?.form?.Manajemen_Nyeri?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_3: val?.form?.Manajemen_Nyeri?.Durasi ?? '',
        penerima_3_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Pasien === 1),
        penerima_3_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Pasangan === 1),
        penerima_3_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_3_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_3_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_3: val?.form?.Manajemen_Nyeri?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_3: val?.form && val?.form?.TTD_Penerima_Edukasi_Manajemen_Nyeri && val?.form?.TTD_Penerima_Edukasi_Manajemen_Nyeri !== '' ? val?.form?.TTD_Penerima_Edukasi_Manajemen_Nyeri : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_3: val?.pasien?.Nama ?? '',
        ttd_edukator_3: val?.form && val?.form?.TTD_Edukator_Manajemen_Nyeri && val?.form?.TTD_Edukator_Manajemen_Nyeri !== '' ? val?.form?.TTD_Edukator_Manajemen_Nyeri : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_3: val?.form?.Nama_Edukator_Manajemen_Nyeri ?? '',

        // Post Operasi
        penjelasan_4_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Merunduk === 1),
        penjelasan_4_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Setengah_Duduk === 1),
        penjelasan_4_c: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Post_Operasi?.Tidak_Ada === 1),
        metode_4_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Metode_Pembelajaran?.Diskusi === 1),
        metode_4_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_4_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Metode_Pembelajaran?.Ceramah === 1),
        metode_4_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Metode_Pembelajaran?.Solusi === 1),
        metode_4_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Metode_Pembelajaran?.Observatori === 1),
        metode_4_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_4: val?.form?.Post_Operasi?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_4_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_4_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_4_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_4: val?.form?.Post_Operasi?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_4: DateTimeConverter.convertToNormalDate(val?.form?.Post_Operasi?.Waktu_Edukasi && val?.form?.Post_Operasi?.Waktu_Edukasi !== '' ? val?.form?.Post_Operasi?.Waktu_Edukasi.substring(0, 10) : ''),
        time_4: val?.form?.Post_Operasi?.Waktu_Edukasi && val?.form?.Post_Operasi?.Waktu_Edukasi !== '' ? val?.form?.Post_Operasi?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_4: val?.form?.Post_Operasi?.Durasi ?? '',
        penerima_4_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Penerima_Edukasi?.Pasien === 1),
        penerima_4_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Penerima_Edukasi?.Pasangan === 1),
        penerima_4_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_4_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_4_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Post_Operasi?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_4: val?.form?.Post_Operasi?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_4: val?.form && val?.form?.TTD_Penerima_Edukasi_Post_Operasi && val?.form?.TTD_Penerima_Edukasi_Post_Operasi !== '' ? val?.form?.TTD_Penerima_Edukasi_Post_Operasi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_4: val?.pasien?.Nama ?? '',
        ttd_edukator_4: val?.form && val?.form?.TTD_Edukator_Post_Operasi && val?.form?.TTD_Edukator_Post_Operasi !== '' ? val?.form?.TTD_Edukator_Post_Operasi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_4: val?.form?.ID_Edukator_Penggunaan_Peralatan ?? '',

        // keperawatan
        penjelasan_5_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Mobilisasi === 1),
        penjelasan_5_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Perawatan_Luka === 1),
        penjelasan_5_c: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Perawatan_Peralatan_Medis === 1),
        penjelasan_5_d: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Pemberian_Makan === 1),
        penjelasan_5_e: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Keperawatan?.Membuang_Urine === 1),
        metode_5_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Metode_Pembelajaran?.Diskusi  === 1),
        metode_5_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Metode_Pembelajaran?.Demonstrasi  === 1),
        metode_5_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Metode_Pembelajaran?.Ceramah  === 1),
        metode_5_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Metode_Pembelajaran?.Solusi  === 1),
        metode_5_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Metode_Pembelajaran?.Observatori  === 1),
        metode_5_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Metode_Pembelajaran?.Lain  === 1),
        metode_pembelajaran__lain_5: val?.form?.Keperawatan?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_5_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_5_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_5_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_5: val?.form?.Keperawatan?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_5: DateTimeConverter.convertToNormalDate(val?.form?.Keperawatan?.Waktu_Edukasi && val?.form?.Keperawatan?.Waktu_Edukasi !== '' ? val?.form?.Keperawatan?.Waktu_Edukasi.substring(0, 10) : ''),
        time_5: val?.form?.Keperawatan?.Waktu_Edukasi && val?.form?.Keperawatan?.Waktu_Edukasi !== '' ? val?.form?.Keperawatan?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_5: val?.form?.Keperawatan?.Durasi ?? '',
        penerima_5_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Penerima_Edukasi?.Pasien === 1),
        penerima_5_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Penerima_Edukasi?.Pasangan === 1),
        penerima_5_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_5_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_5_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Keperawatan?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_5: val?.form?.Keperawatan?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_5: val?.form && val?.form?.TTD_Penerima_Edukasi_Keperawatan && val?.form?.TTD_Penerima_Edukasi_Keperawatan !== '' ? val?.form?.TTD_Penerima_Edukasi_Keperawatan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_5: val?.pasien?.Nama ?? '',
        ttd_edukator_5: val?.form && val?.form?.TTD_Edukator_Keperawatan && val?.form?.TTD_Edukator_Keperawatan !== '' ? val?.form?.TTD_Edukator_Keperawatan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_5: val?.form?.Nama_Edukator_Keperawatan ?? '',

        // FARMASI
        penjelasan_6_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Penggunaan_Obat === 1),
        penjelasan_6_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Efek_Samping === 1),
        penjelasan_6_c: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Mencegah_Interaksi === 1),
        penjelasan_6_d: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Lain_Lain === 1),
        farmasi_lain: val?.form?.Materi_Edukasi_Penjelasan?.Farmasi?.Lain_Lain_Teks ?? '',
        metode_6_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Metode_Pembelajaran?.Diskusi === 1),
        metode_6_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_6_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Metode_Pembelajaran?.Ceramah === 1),
        metode_6_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Metode_Pembelajaran?.Solusi === 1),
        metode_6_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Metode_Pembelajaran?.Observatori === 1),
        metode_6_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_6: val?.form?.Farmasi?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_6_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_6_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_6_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_6: val?.form?.Farmasi?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_6: DateTimeConverter.convertToNormalDate(val?.form?.Farmasi?.Waktu_Edukasi && val?.form?.Farmasi?.Waktu_Edukasi !== '' ? val?.form?.Farmasi?.Waktu_Edukasi.substring(0, 10) : ''),
        time_6: val?.form?.Farmasi?.Waktu_Edukasi && val?.form?.Farmasi?.Waktu_Edukasi !== '' ? val?.form?.Farmasi?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_6:  val?.form?.Farmasi?.Durasi ?? '',
        penerima_6_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Penerima_Edukasi?.Pasien === 1),
        penerima_6_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Penerima_Edukasi?.Pasangan === 1),
        penerima_6_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_6_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_6_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Farmasi?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_6: val?.form?.Farmasi?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_6: val?.form && val?.form?.TTD_Penerima_Edukasi_Farmasi && val?.form?.TTD_Penerima_Edukasi_Farmasi !== '' ? val?.form?.TTD_Penerima_Edukasi_Farmasi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_6: val?.pasien?.Nama ?? '',
        ttd_edukator_6: val?.form && val?.form?.TTD_Edukator_Farmasi && val?.form?.TTD_Edukator_Farmasi !== '' ? val?.form?.TTD_Edukator_Farmasi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_6: val?.form?.Nama_Edukator_Farmasi ?? '',

        // Dokter Spesialis Anestesi
        penjelasan_7_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Kondisi_Pasien === 1),
        penjelasan_7_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Hasil_Pemeriksaan === 1),
        penjelasan_7_c: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Teknik_Anestesi === 1),
        penjelasan_7_d: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Manfaat === 1),
        penjelasan_7_e: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Nyeri_Pasca === 1),
        penjelasan_7_f: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Dokter?.Analgesi_Pasca === 1),
        metode_7_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Metode_Pembelajaran?.Diskusi === 1),
        metode_7_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_7_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Metode_Pembelajaran?.Ceramah === 1),
        metode_7_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Metode_Pembelajaran?.Solusi === 1),
        metode_7_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Metode_Pembelajaran?.Observatori === 1),
        metode_7_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_7: val?.form?.Dokter?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_7_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_7_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_7_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_7: val?.form?.Dokter?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_7: DateTimeConverter.convertToNormalDate(val?.form?.Dokter?.Waktu_Edukasi && val?.form?.Dokter?.Waktu_Edukasi !== '' ? val?.form?.Dokter?.Waktu_Edukasi.substring(0, 10) : ''),
        time_7: val?.form?.Dokter?.Waktu_Edukasi && val?.form?.Dokter?.Waktu_Edukasi !== '' ? val?.form?.Dokter?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_7: val?.form?.Dokter?.Durasi ?? '',
        penerima_7_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Penerima_Edukasi?.Pasien === 1),
        penerima_7_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Penerima_Edukasi?.Pasangan === 1),
        penerima_7_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_7_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_7_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Dokter?.Penerima_Edukasi?.Lain === 1),
        penerima_edu_7: val?.form && val?.form?.TTD_Penerima_Edukasi_Dokter && val?.form?.TTD_Penerima_Edukasi_Dokter !== '' ? val?.form?.TTD_Penerima_Edukasi_Dokter : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_7: val?.pasien?.Nama ?? '',
        ttd_edukator_7: val?.form && val?.form?.TTD_Edukator_Dokter && val?.form?.TTD_Edukator_Dokter !== '' ? val?.form?.TTD_Edukator_Dokter : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_7: val?.form?.Nama_Edukator_Dokter ?? '',
        keluarga_lain_7: val?.form?.Dokter?.Penerima_Edukasi?.Lain_Teks ?? '',

        // Mencuci Tangan
        penjelasan_8_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Mencuci_Tangan?.Handwash_4060 === 1),
        penjelasan_8_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Mencuci_Tangan?.Handrub_2030 === 1),
        metode_8_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Diskusi === 1),
        metode_8_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_8_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Ceramah === 1),
        metode_8_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Solusi === 1),
        metode_8_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Observatori === 1),
        metode_8_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_8: val?.form?.Mencuci_Tangan?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_8_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_8_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_8_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_8: val?.form?.Mencuci_Tangan?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_8: DateTimeConverter.convertToNormalDate(val?.form?.Mencuci_Tangan?.Waktu_Edukasi && val?.form?.Mencuci_Tangan?.Waktu_Edukasi !== '' ? val?.form?.Mencuci_Tangan?.Waktu_Edukasi.substring(0, 10) : ''),
        time_8: val?.form?.Mencuci_Tangan?.Waktu_Edukasi && val?.form?.Mencuci_Tangan?.Waktu_Edukasi !== '' ? val?.form?.Mencuci_Tangan?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_8: val?.form?.Mencuci_Tangan?.Durasi ?? '',
        penerima_8_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Pasien === 1),
        penerima_8_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Pasangan === 1),
        penerima_8_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_8_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_8_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_8: val?.form?.Mencuci_Tangan?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_8: val?.form && val?.form?.TTD_Penerima_Edukasi_Mencuci_Tangan && val?.form?.TTD_Penerima_Edukasi_Mencuci_Tangan !== '' ? val?.form?.TTD_Penerima_Edukasi_Mencuci_Tangan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_8: val?.pasien?.Nama ?? '',
        ttd_edukator_8: val?.form && val?.form?.TTD_Edukator_Mencuci_Tangan && val?.form?.TTD_Edukator_Mencuci_Tangan !== '' ? val?.form?.TTD_Edukator_Mencuci_Tangan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_8: val?.form?.Nama_Edukator_Mencuci_Tangan ?? '',

        // Penggunaan Peralatan Medis
        penjelasan_9_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Infus === 1),
        penjelasan_9_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Oksigen === 1),
        penjelasan_9_c: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Nebulizer === 1),
        penjelasan_9_d: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Lain_Lain === 1),
        peralatan_medis_lain: val?.form?.Materi_Edukasi_Penjelasan?.Penggunaan_Peralatan?.Lain_Lain_Teks ?? '',
        metode_9_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Diskusi === 1),
        metode_9_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_9_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Ceramah === 1),
        metode_9_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Solusi === 1),
        metode_9_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Observatori === 1),
        metode_9_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_9: val?.form?.Penggunaan_Peralatan?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_9_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_9_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_9_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_9: val?.form?.Penggunaan_Peralatan?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_9: DateTimeConverter.convertToNormalDate(val?.form?.Penggunaan_Peralatan?.Waktu_Edukasi && val?.form?.Penggunaan_Peralatan?.Waktu_Edukasi !== '' ? val?.form?.Penggunaan_Peralatan?.Waktu_Edukasi.substring(0, 10) : ''),
        time_9: val?.form?.Penggunaan_Peralatan?.Waktu_Edukasi && val?.form?.Penggunaan_Peralatan?.Waktu_Edukasi !== '' ? val?.form?.Penggunaan_Peralatan?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_9: val?.form?.Penggunaan_Peralatan?.Durasi ?? '',
        penerima_9_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Pasien === 1),
        penerima_9_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Pasangan === 1),
        penerima_9_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_9_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_9_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_9: val?.form?.Penggunaan_Peralatan?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_9: val?.form && val?.form?.TTD_Penerima_Edukasi_Penggunaan_Peralatan && val?.form?.TTD_Penerima_Edukasi_Penggunaan_Peralatan !== '' ? val?.form?.TTD_Penerima_Edukasi_Penggunaan_Peralatan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_9: val?.pasien?.Nama ?? '',
        ttd_edukator_9: val?.form && val?.form?.TTD_Edukator_Penggunaan_Peralatan && val?.form?.TTD_Edukator_Penggunaan_Peralatan !== '' ? val?.form?.TTD_Edukator_Penggunaan_Peralatan : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_9: val?.form?.Nama_Edukator_Mencuci_Tangan ?? '',

        // Hak dan Kewajiban Pasien
        penjelasan_10_a: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Hak_Kewajiban?.Hak_Pasien === 1),
        penjelasan_10_b: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Materi_Edukasi_Penjelasan?.Hak_Kewajiban?.Kewajiban_Pasien === 1),
        metode_10_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Diskusi === 1),
        metode_10_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Demonstrasi === 1),
        metode_10_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Ceramah === 1),
        metode_10_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Solusi === 1),
        metode_10_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Observatori === 1),
        metode_10_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Lain === 1),
        metode_pembelajaran__lain_10: val?.form?.Hak_Kewajiban?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_10_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_10_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_10_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_10: val?.form?.Hak_Kewajiban?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_10: DateTimeConverter.convertToNormalDate(val?.form?.Hak_Kewajiban?.Waktu_Edukasi && val?.form?.Hak_Kewajiban?.Waktu_Edukasi !== '' ? val?.form?.Hak_Kewajiban?.Waktu_Edukasi.substring(0, 10) : ''),
        time_10: val?.form?.Hak_Kewajiban?.Waktu_Edukasi && val?.form?.Hak_Kewajiban?.Waktu_Edukasi !== '' ? val?.form?.Hak_Kewajiban?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_10: val?.form?.Hak_Kewajiban?.Durasi ?? '',
        penerima_10_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Pasien === 1),
        penerima_10_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Pasangan === 1),
        penerima_10_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_10_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_10_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_10: val?.form?.Hak_Kewajiban?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_10: val?.form && val?.form?.TTD_Penerima_Edukasi_Hak_Kewajiban && val?.form?.TTD_Penerima_Edukasi_Hak_Kewajiban !== '' ? val?.form?.TTD_Penerima_Edukasi_Hak_Kewajiban : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_10: val?.pasien?.Nama ?? '',
        ttd_edukator_10: val?.form && val?.form?.TTD_Edukator_Hak_Kewajiban && val?.form?.TTD_Edukator_Hak_Kewajiban !== '' ? val?.form?.TTD_Edukator_Hak_Kewajiban : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_10: val?.form?.Nama_Edukator_Hak_Kewajiban ?? '',

        // Informasi Pasien
        metode_11_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Metode_Pembelajaran?.Diskusi  === 1),
        metode_11_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Metode_Pembelajaran?.Demonstrasi  === 1),
        metode_11_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Metode_Pembelajaran?.Ceramah  === 1),
        metode_11_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Metode_Pembelajaran?.Solusi  === 1),
        metode_11_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Metode_Pembelajaran?.Observatori  === 1),
        metode_11_6: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Metode_Pembelajaran?.Lain  === 1),
        metode_pembelajaran__lain_11: val?.form?.Informasi_Lain?.Metode_Pembelajaran?.Lain_Teks ?? '',
        evaluasi_11_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Evaluasi_Pasien?.Mampu_Mengerti === 1),
        evaluasi_11_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Evaluasi_Pasien?.Mampu_Memahami === 1),
        evaluasi_11_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Evaluasi_Pasien?.Lain === 1),
        evaluasi_lain_11: val?.form?.Informasi_Lain?.Evaluasi_Pasien?.Lain_Teks ?? '',
        date_11: DateTimeConverter.convertToNormalDate(val?.form?.Informasi_Lain?.Waktu_Edukasi && val?.form?.Informasi_Lain?.Waktu_Edukasi !== '' ? val?.form?.Informasi_Lain?.Waktu_Edukasi.substring(0, 10) : ''),
        time_11: val?.form?.Informasi_Lain?.Waktu_Edukasi && val?.form?.Informasi_Lain?.Waktu_Edukasi !== '' ? val?.form?.Informasi_Lain?.Waktu_Edukasi.substring(11, 16) : '',
        durasi_11: val?.form?.Informasi_Lain?.Durasi ?? '',
        penerima_11_1: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Penerima_Edukasi?.Pasien === 1),
        penerima_11_2: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Penerima_Edukasi?.Pasangan === 1),
        penerima_11_3: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Penerima_Edukasi?.Orang_Tua === 1),
        penerima_11_4: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Penerima_Edukasi?.Saudara_Kandung === 1),
        penerima_11_5: PdfIntegratedEducationRequest.getCheckImage(val?.form?.Informasi_Lain?.Penerima_Edukasi?.Lain === 1),
        keluarga_lain_11: val?.form?.Informasi_Lain?.Penerima_Edukasi?.Lain_Teks ?? '',
        penerima_edu_11: val?.form && val?.form?.TTD_Penerima_Edukasi_Informasi_Lain && val?.form?.TTD_Penerima_Edukasi_Informasi_Lain !== '' ? val?.form?.TTD_Penerima_Edukasi_Informasi_Lain : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_penerima_edu_11: val?.pasien?.Nama ?? '',
        ttd_edukator_11: val?.form && val?.form?.TTD_Edukator_Informasi_Lain && val?.form?.TTD_Edukator_Informasi_Lain !== '' ? val?.form?.TTD_Edukator_Informasi_Lain : 'https://bucket.rsmatasmec.com/blank.jpeg',
        nama_edukator_11: val?.form?.Nama_Edukator_Informasi_Lain ?? '',
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
