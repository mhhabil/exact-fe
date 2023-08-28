import { DateTimeConverter } from "@src/shared/datetime-converter";
import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";

export interface IPdfNursingEarlyWarning extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    isDewasa: boolean;
    isAnak: boolean;
    issembilan: boolean;
    d_waktu_1: string;
    d_n_1_1: string;
    d_n_2_1: string;
    d_n_3_1: string;
    d_n_4_1: string;
    d_n_5_1: string;
    d_s_1_1: string;
    d_s_2_1: string;
    d_s_3_1: string;
    d_s_4_1: string;
    d_s_5_1: string;
    d_total_1: string
    d_ttd_perawat_1: string;
    d_waktu_2: string;
    d_n_1_2: string;
    d_n_2_2: string;
    d_n_3_2: string;
    d_n_4_2: string;
    d_n_5_2: string;
    d_s_1_2: string;
    d_s_2_2: string;
    d_s_3_2: string;
    d_s_4_2: string;
    d_s_5_2: string;
    d_total_2: string
    d_ttd_perawat_2: string;
    d_waktu_3: string;
    d_n_1_3: string;
    d_n_2_3: string;
    d_n_3_3: string;
    d_n_4_3: string;
    d_n_5_3: string;
    d_s_1_3: string;
    d_s_2_3: string;
    d_s_3_3: string;
    d_s_4_3: string;
    d_s_5_3: string;
    d_total_3: string
    d_ttd_perawat_3: string;
    d_waktu_4: string;
    d_n_1_4: string;
    d_n_2_4: string;
    d_n_3_4: string;
    d_n_4_4: string;
    d_n_5_4: string;
    d_s_1_4: string;
    d_s_2_4: string;
    d_s_3_4: string;
    d_s_4_4: string;
    d_s_5_4: string;
    d_total_4: string
    d_ttd_perawat_4: string;
    d_waktu_5: string;
    d_n_1_5: string;
    d_n_2_5: string;
    d_n_3_5: string;
    d_n_4_5: string;
    d_n_5_5: string;
    d_s_1_5: string;
    d_s_2_5: string;
    d_s_3_5: string;
    d_s_4_5: string;
    d_s_5_5: string;
    d_total_5: string
    d_ttd_perawat_5: string;
    d_waktu_6: string;
    d_n_1_6: string;
    d_n_2_6: string;
    d_n_3_6: string;
    d_n_4_6: string;
    d_n_5_6: string;
    d_s_1_6: string;
    d_s_2_6: string;
    d_s_3_6: string;
    d_s_4_6: string;
    d_s_5_6: string;
    d_total_6: string
    d_ttd_perawat_6: string;
    d_waktu_7: string;
    d_n_1_7: string;
    d_n_2_7: string;
    d_n_3_7: string;
    d_n_4_7: string;
    d_n_5_7: string;
    d_s_1_7: string;
    d_s_2_7: string;
    d_s_3_7: string;
    d_s_4_7: string;
    d_s_5_7: string;
    d_total_7: string
    d_ttd_perawat_7: string;
    d_waktu_8: string;
    d_n_1_8: string;
    d_n_2_8: string;
    d_n_3_8: string;
    d_n_4_8: string;
    d_n_5_8: string;
    d_s_1_8: string;
    d_s_2_8: string;
    d_s_3_8: string;
    d_s_4_8: string;
    d_s_5_8: string;
    d_total_8: string
    d_ttd_perawat_8: string;
    d_waktu_9: string;
    d_n_1_9: string;
    d_n_2_9: string;
    d_n_3_9: string;
    d_n_4_9: string;
    d_n_5_9: string;
    d_s_1_9: string;
    d_s_2_9: string;
    d_s_3_9: string;
    d_s_4_9: string;
    d_s_5_9: string;
    d_total_9: string
    d_ttd_perawat_9: string;
    d_waktu_10: string;
    d_n_1_10: string;
    d_n_2_10: string;
    d_n_3_10: string;
    d_n_4_10: string;
    d_n_5_10: string;
    d_s_1_10: string;
    d_s_2_10: string;
    d_s_3_10: string;
    d_s_4_10: string;
    d_s_5_10: string;
    d_total_10: string
    d_ttd_perawat_10: string;
    d_waktu_11: string;
    d_n_1_11: string;
    d_n_2_11: string;
    d_n_3_11: string;
    d_n_4_11: string;
    d_n_5_11: string;
    d_s_1_11: string;
    d_s_2_11: string;
    d_s_3_11: string;
    d_s_4_11: string;
    d_s_5_11: string;
    d_total_11: string
    d_ttd_perawat_11: string;
    d_waktu_12: string;
    d_n_1_12: string;
    d_n_2_12: string;
    d_n_3_12: string;
    d_n_4_12: string;
    d_n_5_12: string;
    d_s_1_12: string;
    d_s_2_12: string;
    d_s_3_12: string;
    d_s_4_12: string;
    d_s_5_12: string;
    d_total_12: string
    d_ttd_perawat_12: string;
    d_waktu_13: string;
    d_n_1_13: string;
    d_n_2_13: string;
    d_n_3_13: string;
    d_n_4_13: string;
    d_n_5_13: string;
    d_s_1_13: string;
    d_s_2_13: string;
    d_s_3_13: string;
    d_s_4_13: string;
    d_s_5_13: string;
    d_total_13: string
    d_ttd_perawat_13: string;
    d_waktu_14: string;
    d_n_1_14: string;
    d_n_2_14: string;
    d_n_3_14: string;
    d_n_4_14: string;
    d_n_5_14: string;
    d_s_1_14: string;
    d_s_2_14: string;
    d_s_3_14: string;
    d_s_4_14: string;
    d_s_5_14: string;
    d_total_14: string
    d_ttd_perawat_14: string;
    d_waktu_15: string;
    d_n_1_15: string;
    d_n_2_15: string;
    d_n_3_15: string;
    d_n_4_15: string;
    d_n_5_15: string;
    d_s_1_15: string;
    d_s_2_15: string;
    d_s_3_15: string;
    d_s_4_15: string;
    d_s_5_15: string;
    d_total_15: string
    d_ttd_perawat_15: string;
    d_waktu_16: string;
    d_n_1_16: string;
    d_n_2_16: string;
    d_n_3_16: string;
    d_n_4_16: string;
    d_n_5_16: string;
    d_s_1_16: string;
    d_s_2_16: string;
    d_s_3_16: string;
    d_s_4_16: string;
    d_s_5_16: string;
    d_total_16: string
    d_ttd_perawat_16: string;

    a_waktu_1: string;
    a_n_1_1: string;
    a_n_2_1: string;
    a_n_3_1: string;
    a_s_1_1: string;
    a_s_2_1: string;
    a_s_3_1: string;
    a_total_1: string
    a_ttd_perawat_1: string;
    a_waktu_2: string;
    a_n_1_2: string;
    a_n_2_2: string;
    a_n_3_2: string;
    a_s_1_2: string;
    a_s_2_2: string;
    a_s_3_2: string;
    a_total_2: string
    a_ttd_perawat_2: string;
    a_waktu_3: string;
    a_n_1_3: string;
    a_n_2_3: string;
    a_n_3_3: string;
    a_s_1_3: string;
    a_s_2_3: string;
    a_s_3_3: string;
    a_total_3: string
    a_ttd_perawat_3: string;
    a_waktu_4: string;
    a_n_1_4: string;
    a_n_2_4: string;
    a_n_3_4: string;
    a_s_1_4: string;
    a_s_2_4: string;
    a_s_3_4: string;
    a_total_4: string
    a_ttd_perawat_4: string;
    a_waktu_5: string;
    a_n_1_5: string;
    a_n_2_5: string;
    a_n_3_5: string;
    a_s_1_5: string;
    a_s_2_5: string;
    a_s_3_5: string;
    a_total_5: string
    a_ttd_perawat_5: string;
    a_waktu_6: string;
    a_n_1_6: string;
    a_n_2_6: string;
    a_n_3_6: string;
    a_s_1_6: string;
    a_s_2_6: string;
    a_s_3_6: string;
    a_total_6: string
    a_ttd_perawat_6: string;
    a_waktu_7: string;
    a_n_1_7: string;
    a_n_2_7: string;
    a_n_3_7: string;
    a_s_1_7: string;
    a_s_2_7: string;
    a_s_3_7: string;
    a_total_7: string
    a_ttd_perawat_7: string;
    a_waktu_8: string;
    a_n_1_8: string;
    a_n_2_8: string;
    a_n_3_8: string;
    a_s_1_8: string;
    a_s_2_8: string;
    a_s_3_8: string;
    a_total_8: string
    a_ttd_perawat_8: string;
    a_waktu_9: string;
    a_n_1_9: string;
    a_n_2_9: string;
    a_n_3_9: string;
    a_s_1_9: string;
    a_s_2_9: string;
    a_s_3_9: string;
    a_total_9: string
    a_ttd_perawat_9: string;
    a_waktu_10: string;
    a_n_1_10: string;
    a_n_2_10: string;
    a_n_3_10: string;
    a_s_1_10: string;
    a_s_2_10: string;
    a_s_3_10: string;
    a_total_10: string
    a_ttd_perawat_10: string;
    a_waktu_11: string;
    a_n_1_11: string;
    a_n_2_11: string;
    a_n_3_11: string;
    a_s_1_11: string;
    a_s_2_11: string;
    a_s_3_11: string;
    a_total_11: string
    a_ttd_perawat_11: string;
    a_waktu_12: string;
    a_n_1_12: string;
    a_n_2_12: string;
    a_n_3_12: string;
    a_s_1_12: string;
    a_s_2_12: string;
    a_s_3_12: string;
    a_total_12: string
    a_ttd_perawat_12: string;
    a_waktu_13: string;
    a_n_1_13: string;
    a_n_2_13: string;
    a_n_3_13: string;
    a_s_1_13: string;
    a_s_2_13: string;
    a_s_3_13: string;
    a_total_13: string
    a_ttd_perawat_13: string;
    a_waktu_14: string;
    a_n_1_14: string;
    a_n_2_14: string;
    a_n_3_14: string;
    a_s_1_14: string;
    a_s_2_14: string;
    a_s_3_14: string;
    a_total_14: string
    a_ttd_perawat_14: string;
    a_waktu_15: string;
    a_n_1_15: string;
    a_n_2_15: string;
    a_n_3_15: string;
    a_s_1_15: string;
    a_s_2_15: string;
    a_s_3_15: string;
    a_total_15: string
    a_ttd_perawat_15: string;
    a_waktu_16: string;
    a_n_1_16: string;
    a_n_2_16: string;
    a_n_3_16: string;
    a_s_1_16: string;
    a_s_2_16: string;
    a_s_3_16: string;
    a_total_16: string;
    a_ttd_perawat_16: string;
    nik: string;
  }
}

export class PdfNursingEarlyWarningRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    isDewasa: boolean;
    isAnak: boolean;
    issembilan: boolean;
    d_waktu_1: string;
    d_n_1_1: string;
    d_n_2_1: string;
    d_n_3_1: string;
    d_n_4_1: string;
    d_n_5_1: string;
    d_s_1_1: string;
    d_s_2_1: string;
    d_s_3_1: string;
    d_s_4_1: string;
    d_s_5_1: string;
    d_total_1: string
    d_ttd_perawat_1: string;
    d_waktu_2: string;
    d_n_1_2: string;
    d_n_2_2: string;
    d_n_3_2: string;
    d_n_4_2: string;
    d_n_5_2: string;
    d_s_1_2: string;
    d_s_2_2: string;
    d_s_3_2: string;
    d_s_4_2: string;
    d_s_5_2: string;
    d_total_2: string
    d_ttd_perawat_2: string;
    d_waktu_3: string;
    d_n_1_3: string;
    d_n_2_3: string;
    d_n_3_3: string;
    d_n_4_3: string;
    d_n_5_3: string;
    d_s_1_3: string;
    d_s_2_3: string;
    d_s_3_3: string;
    d_s_4_3: string;
    d_s_5_3: string;
    d_total_3: string
    d_ttd_perawat_3: string;
    d_waktu_4: string;
    d_n_1_4: string;
    d_n_2_4: string;
    d_n_3_4: string;
    d_n_4_4: string;
    d_n_5_4: string;
    d_s_1_4: string;
    d_s_2_4: string;
    d_s_3_4: string;
    d_s_4_4: string;
    d_s_5_4: string;
    d_total_4: string
    d_ttd_perawat_4: string;
    d_waktu_5: string;
    d_n_1_5: string;
    d_n_2_5: string;
    d_n_3_5: string;
    d_n_4_5: string;
    d_n_5_5: string;
    d_s_1_5: string;
    d_s_2_5: string;
    d_s_3_5: string;
    d_s_4_5: string;
    d_s_5_5: string;
    d_total_5: string
    d_ttd_perawat_5: string;
    d_waktu_6: string;
    d_n_1_6: string;
    d_n_2_6: string;
    d_n_3_6: string;
    d_n_4_6: string;
    d_n_5_6: string;
    d_s_1_6: string;
    d_s_2_6: string;
    d_s_3_6: string;
    d_s_4_6: string;
    d_s_5_6: string;
    d_total_6: string
    d_ttd_perawat_6: string;
    d_waktu_7: string;
    d_n_1_7: string;
    d_n_2_7: string;
    d_n_3_7: string;
    d_n_4_7: string;
    d_n_5_7: string;
    d_s_1_7: string;
    d_s_2_7: string;
    d_s_3_7: string;
    d_s_4_7: string;
    d_s_5_7: string;
    d_total_7: string
    d_ttd_perawat_7: string;
    d_waktu_8: string;
    d_n_1_8: string;
    d_n_2_8: string;
    d_n_3_8: string;
    d_n_4_8: string;
    d_n_5_8: string;
    d_s_1_8: string;
    d_s_2_8: string;
    d_s_3_8: string;
    d_s_4_8: string;
    d_s_5_8: string;
    d_total_8: string
    d_ttd_perawat_8: string;
    d_waktu_9: string;
    d_n_1_9: string;
    d_n_2_9: string;
    d_n_3_9: string;
    d_n_4_9: string;
    d_n_5_9: string;
    d_s_1_9: string;
    d_s_2_9: string;
    d_s_3_9: string;
    d_s_4_9: string;
    d_s_5_9: string;
    d_total_9: string
    d_ttd_perawat_9: string;
    d_waktu_10: string;
    d_n_1_10: string;
    d_n_2_10: string;
    d_n_3_10: string;
    d_n_4_10: string;
    d_n_5_10: string;
    d_s_1_10: string;
    d_s_2_10: string;
    d_s_3_10: string;
    d_s_4_10: string;
    d_s_5_10: string;
    d_total_10: string
    d_ttd_perawat_10: string;
    d_waktu_11: string;
    d_n_1_11: string;
    d_n_2_11: string;
    d_n_3_11: string;
    d_n_4_11: string;
    d_n_5_11: string;
    d_s_1_11: string;
    d_s_2_11: string;
    d_s_3_11: string;
    d_s_4_11: string;
    d_s_5_11: string;
    d_total_11: string
    d_ttd_perawat_11: string;
    d_waktu_12: string;
    d_n_1_12: string;
    d_n_2_12: string;
    d_n_3_12: string;
    d_n_4_12: string;
    d_n_5_12: string;
    d_s_1_12: string;
    d_s_2_12: string;
    d_s_3_12: string;
    d_s_4_12: string;
    d_s_5_12: string;
    d_total_12: string
    d_ttd_perawat_12: string;
    d_waktu_13: string;
    d_n_1_13: string;
    d_n_2_13: string;
    d_n_3_13: string;
    d_n_4_13: string;
    d_n_5_13: string;
    d_s_1_13: string;
    d_s_2_13: string;
    d_s_3_13: string;
    d_s_4_13: string;
    d_s_5_13: string;
    d_total_13: string
    d_ttd_perawat_13: string;
    d_waktu_14: string;
    d_n_1_14: string;
    d_n_2_14: string;
    d_n_3_14: string;
    d_n_4_14: string;
    d_n_5_14: string;
    d_s_1_14: string;
    d_s_2_14: string;
    d_s_3_14: string;
    d_s_4_14: string;
    d_s_5_14: string;
    d_total_14: string
    d_ttd_perawat_14: string;
    d_waktu_15: string;
    d_n_1_15: string;
    d_n_2_15: string;
    d_n_3_15: string;
    d_n_4_15: string;
    d_n_5_15: string;
    d_s_1_15: string;
    d_s_2_15: string;
    d_s_3_15: string;
    d_s_4_15: string;
    d_s_5_15: string;
    d_total_15: string
    d_ttd_perawat_15: string;
    d_waktu_16: string;
    d_n_1_16: string;
    d_n_2_16: string;
    d_n_3_16: string;
    d_n_4_16: string;
    d_n_5_16: string;
    d_s_1_16: string;
    d_s_2_16: string;
    d_s_3_16: string;
    d_s_4_16: string;
    d_s_5_16: string;
    d_total_16: string
    d_ttd_perawat_16: string;

    a_waktu_1: string;
    a_n_1_1: string;
    a_n_2_1: string;
    a_n_3_1: string;
    a_s_1_1: string;
    a_s_2_1: string;
    a_s_3_1: string;
    a_total_1: string
    a_ttd_perawat_1: string;
    a_waktu_2: string;
    a_n_1_2: string;
    a_n_2_2: string;
    a_n_3_2: string;
    a_s_1_2: string;
    a_s_2_2: string;
    a_s_3_2: string;
    a_total_2: string
    a_ttd_perawat_2: string;
    a_waktu_3: string;
    a_n_1_3: string;
    a_n_2_3: string;
    a_n_3_3: string;
    a_s_1_3: string;
    a_s_2_3: string;
    a_s_3_3: string;
    a_total_3: string
    a_ttd_perawat_3: string;
    a_waktu_4: string;
    a_n_1_4: string;
    a_n_2_4: string;
    a_n_3_4: string;
    a_s_1_4: string;
    a_s_2_4: string;
    a_s_3_4: string;
    a_total_4: string
    a_ttd_perawat_4: string;
    a_waktu_5: string;
    a_n_1_5: string;
    a_n_2_5: string;
    a_n_3_5: string;
    a_s_1_5: string;
    a_s_2_5: string;
    a_s_3_5: string;
    a_total_5: string
    a_ttd_perawat_5: string;
    a_waktu_6: string;
    a_n_1_6: string;
    a_n_2_6: string;
    a_n_3_6: string;
    a_s_1_6: string;
    a_s_2_6: string;
    a_s_3_6: string;
    a_total_6: string
    a_ttd_perawat_6: string;
    a_waktu_7: string;
    a_n_1_7: string;
    a_n_2_7: string;
    a_n_3_7: string;
    a_s_1_7: string;
    a_s_2_7: string;
    a_s_3_7: string;
    a_total_7: string
    a_ttd_perawat_7: string;
    a_waktu_8: string;
    a_n_1_8: string;
    a_n_2_8: string;
    a_n_3_8: string;
    a_s_1_8: string;
    a_s_2_8: string;
    a_s_3_8: string;
    a_total_8: string
    a_ttd_perawat_8: string;
    a_waktu_9: string;
    a_n_1_9: string;
    a_n_2_9: string;
    a_n_3_9: string;
    a_s_1_9: string;
    a_s_2_9: string;
    a_s_3_9: string;
    a_total_9: string
    a_ttd_perawat_9: string;
    a_waktu_10: string;
    a_n_1_10: string;
    a_n_2_10: string;
    a_n_3_10: string;
    a_s_1_10: string;
    a_s_2_10: string;
    a_s_3_10: string;
    a_total_10: string
    a_ttd_perawat_10: string;
    a_waktu_11: string;
    a_n_1_11: string;
    a_n_2_11: string;
    a_n_3_11: string;
    a_s_1_11: string;
    a_s_2_11: string;
    a_s_3_11: string;
    a_total_11: string
    a_ttd_perawat_11: string;
    a_waktu_12: string;
    a_n_1_12: string;
    a_n_2_12: string;
    a_n_3_12: string;
    a_s_1_12: string;
    a_s_2_12: string;
    a_s_3_12: string;
    a_total_12: string
    a_ttd_perawat_12: string;
    a_waktu_13: string;
    a_n_1_13: string;
    a_n_2_13: string;
    a_n_3_13: string;
    a_s_1_13: string;
    a_s_2_13: string;
    a_s_3_13: string;
    a_total_13: string
    a_ttd_perawat_13: string;
    a_waktu_14: string;
    a_n_1_14: string;
    a_n_2_14: string;
    a_n_3_14: string;
    a_s_1_14: string;
    a_s_2_14: string;
    a_s_3_14: string;
    a_total_14: string
    a_ttd_perawat_14: string;
    a_waktu_15: string;
    a_n_1_15: string;
    a_n_2_15: string;
    a_n_3_15: string;
    a_s_1_15: string;
    a_s_2_15: string;
    a_s_3_15: string;
    a_total_15: string
    a_ttd_perawat_15: string;
    a_waktu_16: string;
    a_n_1_16: string;
    a_n_2_16: string;
    a_n_3_16: string;
    a_s_1_16: string;
    a_s_2_16: string;
    a_s_3_16: string;
    a_total_16: string
    a_ttd_perawat_16: string;
    nik: string;
  }

  constructor(req: IPdfNursingEarlyWarning) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfNursingEarlyWarning) {
    return new PdfNursingEarlyWarningRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfNursingEarlyWarningRequest {
    return new PdfNursingEarlyWarningRequest({
      emr_id: emrId,
      form_name: 'rawat-inap_pengkajian-newss',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val.pasien.No_MR,
        'pasien.Nama': val.pasien.Nama,
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val.pasien.Jenis_Kelamin,
        isDewasa: !!(val && val.records && val.records[0] && val.records[0].Tipe_Ews && val.records[0].Tipe_Ews === '1'),
        isAnak: !!(val && val.records && val.records[0] && val.records[0].Tipe_Ews && val.records[0].Tipe_Ews === '2'),
        issembilan: !!(val && val.records && Array.isArray(val.records) && val.records.length > 8),
        d_waktu_1: DateTimeConverter.convertToDateTime(val.records[0]?.Waktu_Pengkajian ||  ""),
        d_n_1_1: val.records[0]?.Rr ||  "",
        d_n_2_1: val.records[0]?.Nadi ||  "",
        d_n_3_1: val.records && val.records[0] && val.records[0].Td && val.records[0].Td.includes('/') ? val.records[0].Td : val.records && val.records[0] && val.records[0].Td && val.records[0].Td_1 ? `${val.records[0].Td}/${val.records[0].Td_1}` : '',
        d_n_4_1: val.records[0]?.Suhu_Tubuh ||  "",
        d_n_5_1: val.records[0]?.Tingkat_Kesadaran ||  "",
        d_s_1_1: val.records[0]?.Rr_Skor ||  "",
        d_s_2_1: val.records[0]?.Nadi_Skor ||  "",
        d_s_3_1: val.records[0]?.Td_Skor ||  "",
        d_s_4_1: val.records[0]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_1: val.records[0]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_1: val.records[0]?.Total_Skor ||  "",
        d_ttd_perawat_1: val.records[0]?.TTD_Perawat && val.records[0]?.TTD_Perawat !== '' ? val.records[0]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_2: DateTimeConverter.convertToDateTime(val.records[1]?.Waktu_Pengkajian ||  ""),
        d_n_1_2: val.records[1]?.Rr ||  "",
        d_n_2_2: val.records[1]?.Nadi ||  "",
        d_n_3_2: val.records && val.records[1] && val.records[1].Td && val.records[1].Td.includes('/') ? val.records[1].Td : val.records && val.records[1] && val.records[1].Td && val.records[1].Td_1 ? `${val.records[1].Td}/${val.records[1].Td_1}` : '',
        d_n_4_2: val.records[1]?.Suhu_Tubuh ||  "",
        d_n_5_2: val.records[1]?.Tingkat_Kesadaran ||  "",
        d_s_1_2: val.records[1]?.Rr_Skor ||  "",
        d_s_2_2: val.records[1]?.Nadi_Skor ||  "",
        d_s_3_2: val.records[1]?.Td_Skor ||  "",
        d_s_4_2: val.records[1]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_2: val.records[1]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_2: val.records[1]?.Total_Skor ||  "",
        d_ttd_perawat_2: val.records[1]?.TTD_Perawat && val.records[1]?.TTD_Perawat !== '' ? val.records[1]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_3: DateTimeConverter.convertToDateTime(val.records[2]?.Waktu_Pengkajian ||  ""),
        d_n_1_3: val.records[2]?.Rr ||  "",
        d_n_2_3: val.records[2]?.Nadi ||  "",
        d_n_3_3: val.records && val.records[2] && val.records[2].Td && val.records[2].Td.includes('/') ? val.records[2].Td : val.records && val.records[2] && val.records[2].Td && val.records[2].Td_1 ? `${val.records[2].Td}/${val.records[2].Td_1}` : '',
        d_n_4_3: val.records[2]?.Suhu_Tubuh ||  "",
        d_n_5_3: val.records[2]?.Tingkat_Kesadaran ||  "",
        d_s_1_3: val.records[2]?.Rr_Skor ||  "",
        d_s_2_3: val.records[2]?.Nadi_Skor ||  "",
        d_s_3_3: val.records[2]?.Td_Skor ||  "",
        d_s_4_3: val.records[2]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_3: val.records[2]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_3: val.records[2]?.Total_Skor ||  "",
        d_ttd_perawat_3: val.records[2]?.TTD_Perawat && val.records[2]?.TTD_Perawat !== '' ? val.records[2]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_4: DateTimeConverter.convertToDateTime(val.records[3]?.Waktu_Pengkajian ||  ""),
        d_n_1_4: val.records[3]?.Rr ||  "",
        d_n_2_4: val.records[3]?.Nadi ||  "",
        d_n_3_4: val.records && val.records[3] && val.records[3].Td && val.records[3].Td.includes('/') ? val.records[3].Td : val.records && val.records[3] && val.records[3].Td && val.records[3].Td_1 ? `${val.records[3].Td}/${val.records[3].Td_1}` : '',
        d_n_4_4: val.records[3]?.Suhu_Tubuh ||  "",
        d_n_5_4: val.records[3]?.Tingkat_Kesadaran ||  "",
        d_s_1_4: val.records[3]?.Rr_Skor ||  "",
        d_s_2_4: val.records[3]?.Nadi_Skor ||  "",
        d_s_3_4: val.records[3]?.Td_Skor ||  "",
        d_s_4_4: val.records[3]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_4: val.records[3]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_4: val.records[3]?.Total_Skor ||  "",
        d_ttd_perawat_4: val.records[3]?.TTD_Perawat && val.records[3]?.TTD_Perawat !== '' ? val.records[3]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_5: DateTimeConverter.convertToDateTime(val.records[4]?.Waktu_Pengkajian ||  ""),
        d_n_1_5: val.records[4]?.Rr ||  "",
        d_n_2_5: val.records[4]?.Nadi ||  "",
        d_n_3_5: val.records && val.records[4] && val.records[4].Td && val.records[4].Td.includes('/') ? val.records[4].Td : val.records && val.records[4] && val.records[4].Td && val.records[4].Td_1 ? `${val.records[4].Td}/${val.records[4].Td_1}` : '',
        d_n_4_5: val.records[4]?.Suhu_Tubuh ||  "",
        d_n_5_5: val.records[4]?.Tingkat_Kesadaran ||  "",
        d_s_1_5: val.records[4]?.Rr_Skor ||  "",
        d_s_2_5: val.records[4]?.Nadi_Skor ||  "",
        d_s_3_5: val.records[4]?.Td_Skor ||  "",
        d_s_4_5: val.records[4]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_5: val.records[4]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_5: val.records[4]?.Total_Skor ||  "",
        d_ttd_perawat_5: val.records[4]?.TTD_Perawat && val.records[4]?.TTD_Perawat !== '' ? val.records[4]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_6: DateTimeConverter.convertToDateTime(val.records[5]?.Waktu_Pengkajian ||  ""),
        d_n_1_6: val.records[5]?.Rr ||  "",
        d_n_2_6: val.records[5]?.Nadi ||  "",
        d_n_3_6: val.records && val.records[5] && val.records[5].Td && val.records[5].Td.includes('/') ? val.records[5].Td : val.records && val.records[5] && val.records[5].Td && val.records[5].Td_1 ? `${val.records[5].Td}/${val.records[5].Td_1}` : '',
        d_n_4_6: val.records[5]?.Suhu_Tubuh ||  "",
        d_n_5_6: val.records[5]?.Tingkat_Kesadaran ||  "",
        d_s_1_6: val.records[5]?.Rr_Skor ||  "",
        d_s_2_6: val.records[5]?.Nadi_Skor ||  "",
        d_s_3_6: val.records[5]?.Td_Skor ||  "",
        d_s_4_6: val.records[5]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_6: val.records[5]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_6: val.records[5]?.Total_Skor ||  "",
        d_ttd_perawat_6: val.records[5]?.TTD_Perawat && val.records[5]?.TTD_Perawat !== '' ? val.records[5]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_7: DateTimeConverter.convertToDateTime(val.records[6]?.Waktu_Pengkajian ||  ""),
        d_n_1_7: val.records[6]?.Rr ||  "",
        d_n_2_7: val.records[6]?.Nadi ||  "",
        d_n_3_7: val.records && val.records[6] && val.records[6].Td && val.records[6].Td.includes('/') ? val.records[6].Td : val.records && val.records[6] && val.records[6].Td && val.records[6].Td_1 ? `${val.records[6].Td}/${val.records[6].Td_1}` : '',
        d_n_4_7: val.records[6]?.Suhu_Tubuh ||  "",
        d_n_5_7: val.records[6]?.Tingkat_Kesadaran ||  "",
        d_s_1_7: val.records[6]?.Rr_Skor ||  "",
        d_s_2_7: val.records[6]?.Nadi_Skor ||  "",
        d_s_3_7: val.records[6]?.Td_Skor ||  "",
        d_s_4_7: val.records[6]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_7: val.records[6]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_7:  val.records[6]?.Total_Skor ||  "",
        d_ttd_perawat_7:  val.records[6]?.TTD_Perawat && val.records[6]?.TTD_Perawat !== '' ? val.records[6]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_8: DateTimeConverter.convertToDateTime(val.records[7]?.Waktu_Pengkajian ||  ""),
        d_n_1_8: val.records[7]?.Rr ||  "",
        d_n_2_8: val.records[7]?.Nadi ||  "",
        d_n_3_8: val.records && val.records[7] && val.records[7].Td && val.records[7].Td.includes('/') ? val.records[7].Td : val.records && val.records[7] && val.records[7].Td && val.records[7].Td_1 ? `${val.records[7].Td}/${val.records[7].Td_1}` : '',
        d_n_4_8: val.records[7]?.Suhu_Tubuh ||  "",
        d_n_5_8: val.records[7]?.Tingkat_Kesadaran ||  "",
        d_s_1_8: val.records[7]?.Rr_Skor ||  "",
        d_s_2_8: val.records[7]?.Nadi_Skor ||  "",
        d_s_3_8: val.records[7]?.Td_Skor ||  "",
        d_s_4_8: val.records[7]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_8: val.records[7]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_8:  val.records[7]?.Total_Skor ||  "",
        d_ttd_perawat_8:  val.records[7]?.TTD_Perawat && val.records[7]?.TTD_Perawat !== '' ? val.records[7]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_9: DateTimeConverter.convertToDateTime(val.records[8]?.Waktu_Pengkajian ||  ""),
        d_n_1_9: val.records[8]?.Rr ||  "",
        d_n_2_9: val.records[8]?.Nadi ||  "",
        d_n_3_9: val.records && val.records[8] && val.records[8].Td && val.records[8].Td.includes('/') ? val.records[8].Td : val.records && val.records[8] && val.records[8].Td && val.records[8].Td_1 ? `${val.records[8].Td}/${val.records[8].Td_1}` : '',
        d_n_4_9: val.records[8]?.Suhu_Tubuh ||  "",
        d_n_5_9: val.records[8]?.Tingkat_Kesadaran ||  "",
        d_s_1_9: val.records[8]?.Rr_Skor ||  "",
        d_s_2_9: val.records[8]?.Nadi_Skor ||  "",
        d_s_3_9: val.records[8]?.Td_Skor ||  "",
        d_s_4_9: val.records[8]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_9: val.records[8]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_9: val.records[8]?.Total_Skor ||  "",
        d_ttd_perawat_9: val.records[8]?.TTD_Perawat && val.records[8]?.TTD_Perawat !== '' ? val.records[8]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_10: DateTimeConverter.convertToDateTime(val.records[9]?.Waktu_Pengkajian ||  ""),
        d_n_1_10: val.records[9]?.Rr ||  "",
        d_n_2_10: val.records[9]?.Nadi ||  "",
        d_n_3_10: val.records && val.records[9] && val.records[9].Td && val.records[9].Td.includes('/') ? val.records[9].Td : val.records && val.records[9] && val.records[9].Td && val.records[9].Td_1 ? `${val.records[9].Td}/${val.records[9].Td_1}` : '',
        d_n_4_10: val.records[9]?.Suhu_Tubuh ||  "",
        d_n_5_10: val.records[9]?.Tingkat_Kesadaran ||  "",
        d_s_1_10: val.records[9]?.Rr_Skor ||  "",
        d_s_2_10: val.records[9]?.Nadi_Skor ||  "",
        d_s_3_10: val.records[9]?.Td_Skor ||  "",
        d_s_4_10: val.records[9]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_10: val.records[9]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_10: val.records[9]?.Total_Skor ||  "",
        d_ttd_perawat_10: val.records[9]?.TTD_Perawat && val.records[9]?.TTD_Perawat !== '' ? val.records[9]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_11: DateTimeConverter.convertToDateTime(val.records[10]?.Waktu_Pengkajian ||  ""),
        d_n_1_11: val.records[10]?.Rr ||  "",
        d_n_2_11: val.records[10]?.Nadi ||  "",
        d_n_3_11: val.records && val.records[10] && val.records[10].Td && val.records[10].Td.includes('/') ? val.records[10].Td : val.records && val.records[10] && val.records[10].Td && val.records[10].Td_1 ? `${val.records[10].Td}/${val.records[10].Td_1}` : '',
        d_n_4_11: val.records[10]?.Suhu_Tubuh ||  "",
        d_n_5_11: val.records[10]?.Tingkat_Kesadaran ||  "",
        d_s_1_11: val.records[10]?.Rr_Skor ||  "",
        d_s_2_11: val.records[10]?.Nadi_Skor ||  "",
        d_s_3_11: val.records[10]?.Td_Skor ||  "",
        d_s_4_11: val.records[10]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_11: val.records[10]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_11: val.records[10]?.Total_Skor ||  "",
        d_ttd_perawat_11: val.records[10]?.TTD_Perawat && val.records[10]?.TTD_Perawat !== '' ? val.records[10]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_12: DateTimeConverter.convertToDateTime(val.records[11]?.Waktu_Pengkajian ||  ""),
        d_n_1_12: val.records[11]?.Rr ||  "",
        d_n_2_12: val.records[11]?.Nadi ||  "",
        d_n_3_12: val.records && val.records[11] && val.records[11].Td && val.records[11].Td.includes('/') ? val.records[11].Td : val.records && val.records[11] && val.records[11].Td && val.records[11].Td_1 ? `${val.records[11].Td}/${val.records[11].Td_1}` : '',
        d_n_4_12: val.records[11]?.Suhu_Tubuh ||  "",
        d_n_5_12: val.records[11]?.Tingkat_Kesadaran ||  "",
        d_s_1_12: val.records[11]?.Rr_Skor ||  "",
        d_s_2_12: val.records[11]?.Nadi_Skor ||  "",
        d_s_3_12: val.records[11]?.Td_Skor ||  "",
        d_s_4_12: val.records[11]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_12: val.records[11]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_12: val.records[11]?.Total_Skor ||  "",
        d_ttd_perawat_12: val.records[11]?.TTD_Perawat && val.records[11]?.TTD_Perawat !== '' ? val.records[11]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_13: DateTimeConverter.convertToDateTime(val.records[12]?.Waktu_Pengkajian ||  ""),
        d_n_1_13: val.records[12]?.Rr ||  "",
        d_n_2_13: val.records[12]?.Nadi ||  "",
        d_n_3_13: val.records && val.records[12] && val.records[12].Td && val.records[12].Td.includes('/') ? val.records[12].Td : val.records && val.records[12] && val.records[12].Td && val.records[12].Td_1 ? `${val.records[12].Td}/${val.records[12].Td_1}` : '',
        d_n_4_13: val.records[12]?.Suhu_Tubuh ||  "",
        d_n_5_13: val.records[12]?.Tingkat_Kesadaran ||  "",
        d_s_1_13: val.records[12]?.Rr_Skor ||  "",
        d_s_2_13: val.records[12]?.Nadi_Skor ||  "",
        d_s_3_13: val.records[12]?.Td_Skor ||  "",
        d_s_4_13: val.records[12]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_13: val.records[12]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_13: val.records[12]?.Total_Skor ||  "",
        d_ttd_perawat_13: val.records[12]?.TTD_Perawat && val.records[12]?.TTD_Perawat !== '' ? val.records[12]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_14: DateTimeConverter.convertToDateTime(val.records[13]?.Waktu_Pengkajian ||  ""),
        d_n_1_14: val.records[13]?.Rr ||  "",
        d_n_2_14: val.records[13]?.Nadi ||  "",
        d_n_3_14: val.records && val.records[13] && val.records[13].Td && val.records[13].Td.includes('/') ? val.records[13].Td : val.records && val.records[13] && val.records[13].Td && val.records[13].Td_1 ? `${val.records[13].Td}/${val.records[13].Td_1}` : '',
        d_n_4_14: val.records[13]?.Suhu_Tubuh ||  "",
        d_n_5_14: val.records[13]?.Tingkat_Kesadaran ||  "",
        d_s_1_14: val.records[13]?.Rr_Skor ||  "",
        d_s_2_14: val.records[13]?.Nadi_Skor ||  "",
        d_s_3_14: val.records[13]?.Td_Skor ||  "",
        d_s_4_14: val.records[13]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_14: val.records[13]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_14: val.records[13]?.Total_Skor ||  "",
        d_ttd_perawat_14: val.records[13]?.TTD_Perawat && val.records[13]?.TTD_Perawat !== '' ? val.records[13]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_15: DateTimeConverter.convertToDateTime(val.records[14]?.Waktu_Pengkajian ||  ""),
        d_n_1_15: val.records[14]?.Rr ||  "",
        d_n_2_15: val.records[14]?.Nadi ||  "",
        d_n_3_15: val.records && val.records[14] && val.records[14].Td && val.records[14].Td.includes('/') ? val.records[14].Td : val.records && val.records[14] && val.records[14].Td && val.records[14].Td_1 ? `${val.records[14].Td}/${val.records[14].Td_1}` : '',
        d_n_4_15: val.records[14]?.Suhu_Tubuh ||  "",
        d_n_5_15: val.records[14]?.Tingkat_Kesadaran ||  "",
        d_s_1_15: val.records[14]?.Rr_Skor ||  "",
        d_s_2_15: val.records[14]?.Nadi_Skor ||  "",
        d_s_3_15: val.records[14]?.Td_Skor ||  "",
        d_s_4_15: val.records[14]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_15: val.records[14]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_15: val.records[14]?.Total_Skor ||  "",
        d_ttd_perawat_15: val.records[14]?.TTD_Perawat && val.records[14]?.TTD_Perawat !== '' ? val.records[14]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        d_waktu_16: DateTimeConverter.convertToDateTime(val.records[15]?.Waktu_Pengkajian ||  ""),
        d_n_1_16: val.records[15]?.Rr ||  "",
        d_n_2_16: val.records[15]?.Nadi ||  "",
        d_n_3_16: val.records && val.records[15] && val.records[15].Td && val.records[15].Td.includes('/') ? val.records[15].Td : val.records && val.records[15] && val.records[15].Td && val.records[15].Td_1 ? `${val.records[15].Td}/${val.records[15].Td_1}` : '',
        d_n_4_16: val.records[15]?.Suhu_Tubuh ||  "",
        d_n_5_16: val.records[15]?.Tingkat_Kesadaran ||  "",
        d_s_1_16: val.records[15]?.Rr_Skor ||  "",
        d_s_2_16: val.records[15]?.Nadi_Skor ||  "",
        d_s_3_16: val.records[15]?.Td_Skor ||  "",
        d_s_4_16: val.records[15]?.Suhu_Tubuh_Skor ||  "",
        d_s_5_16: val.records[15]?.Tingkat_Kesadaran_Skor ||  "",
        d_total_16: val.records[15]?.Total_Skor ||  "",
        d_ttd_perawat_16: val.records[15]?.TTD_Perawat && val.records[15]?.TTD_Perawat !== '' ? val.records[15]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',

        a_waktu_1: DateTimeConverter.convertToDateTime(val.records[0]?.Waktu_Pengkajian ||  ""),
        a_n_1_1: val.records[0]?.Perilaku ?? '',
        a_n_2_1: val.records[0]?.Kardiovaskular ?? '',
        a_n_3_1: val.records[0]?.Rr ?? '',
        a_s_1_1: val.records[0]?.Perilaku_Skor ?? '',
        a_s_2_1: val.records[0]?.Kardiovaskular_Skor ?? '',
        a_s_3_1: val.records[0]?.Rr_Skor ?? '',
        a_total_1: val.records[0]?.Total_Skor ?? '',
        a_ttd_perawat_1: val.records[0]?.TTD_Perawat && val.records[0]?.TTD_Perawat !== '' ? val.records[0]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_2: DateTimeConverter.convertToDateTime(val.records[1]?.Waktu_Pengkajian ||  ""),
        a_n_1_2: val.records[1]?.Perilaku ?? '',
        a_n_2_2: val.records[1]?.Kardiovaskular ?? '',
        a_n_3_2: val.records[1]?.Rr ?? '',
        a_s_1_2: val.records[1]?.Perilaku_Skor ?? '',
        a_s_2_2: val.records[1]?.Kardiovaskular_Skor ?? '',
        a_s_3_2: val.records[1]?.Rr_Skor ?? '',
        a_total_2: val.records[1]?.Total_Skor ?? '',
        a_ttd_perawat_2: val.records[1]?.TTD_Perawat && val.records[1]?.TTD_Perawat !== '' ? val.records[1]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_3: DateTimeConverter.convertToDateTime(val.records[2]?.Waktu_Pengkajian ||  ""),
        a_n_1_3: val.records[2]?.Perilaku ?? '',
        a_n_2_3: val.records[2]?.Kardiovaskular ?? '',
        a_n_3_3: val.records[2]?.Rr ?? '',
        a_s_1_3: val.records[2]?.Perilaku_Skor ?? '',
        a_s_2_3: val.records[2]?.Kardiovaskular_Skor ?? '',
        a_s_3_3: val.records[2]?.Rr_Skor ?? '',
        a_total_3: val.records[2]?.Total_Skor ?? '',
        a_ttd_perawat_3: val.records[2]?.TTD_Perawat && val.records[2]?.TTD_Perawat !== '' ? val.records[2]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_4: DateTimeConverter.convertToDateTime(val.records[3]?.Waktu_Pengkajian ||  ""),
        a_n_1_4: val.records[3]?.Perilaku ?? '',
        a_n_2_4: val.records[3]?.Kardiovaskular ?? '',
        a_n_3_4: val.records[3]?.Rr ?? '',
        a_s_1_4: val.records[3]?.Perilaku_Skor ?? '',
        a_s_2_4: val.records[3]?.Kardiovaskular_Skor ?? '',
        a_s_3_4: val.records[3]?.Rr_Skor ?? '',
        a_total_4: val.records[3]?.Total_Skor ?? '',
        a_ttd_perawat_4: val.records[3]?.TTD_Perawat && val.records[3]?.TTD_Perawat !== '' ? val.records[3]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_5: DateTimeConverter.convertToDateTime(val.records[4]?.Waktu_Pengkajian ||  ""),
        a_n_1_5: val.records[4]?.Perilaku ?? '',
        a_n_2_5: val.records[4]?.Kardiovaskular ?? '',
        a_n_3_5: val.records[4]?.Rr ?? '',
        a_s_1_5: val.records[4]?.Perilaku_Skor ?? '',
        a_s_2_5: val.records[4]?.Kardiovaskular_Skor ?? '',
        a_s_3_5: val.records[4]?.Rr_Skor ?? '',
        a_total_5: val.records[4]?.Total_Skor ?? '',
        a_ttd_perawat_5: val.records[4]?.TTD_Perawat && val.records[4]?.TTD_Perawat !== '' ? val.records[4]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_6: DateTimeConverter.convertToDateTime(val.records[5]?.Waktu_Pengkajian ||  ""),
        a_n_1_6: val.records[5]?.Perilaku ?? '',
        a_n_2_6: val.records[5]?.Kardiovaskular ?? '',
        a_n_3_6: val.records[5]?.Rr ?? '',
        a_s_1_6: val.records[5]?.Perilaku_Skor ?? '',
        a_s_2_6: val.records[5]?.Kardiovaskular_Skor ?? '',
        a_s_3_6: val.records[5]?.Rr_Skor ?? '',
        a_total_6: val.records[5]?.Total_Skor ?? '',
        a_ttd_perawat_6: val.records[5]?.TTD_Perawat && val.records[5]?.TTD_Perawat !== '' ? val.records[5]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_7: DateTimeConverter.convertToDateTime(val.records[6]?.Waktu_Pengkajian ||  ""),
        a_n_1_7: val.records[6]?.Perilaku ?? '',
        a_n_2_7: val.records[6]?.Kardiovaskular ?? '',
        a_n_3_7: val.records[6]?.Rr ?? '',
        a_s_1_7: val.records[6]?.Perilaku_Skor ?? '',
        a_s_2_7: val.records[6]?.Kardiovaskular_Skor ?? '',
        a_s_3_7: val.records[6]?.Rr_Skor ?? '',
        a_total_7: val.records[6]?.Total_Skor ?? '',
        a_ttd_perawat_7: val.records[6]?.TTD_Perawat && val.records[6]?.TTD_Perawat !== '' ? val.records[6]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_8: DateTimeConverter.convertToDateTime(val.records[7]?.Waktu_Pengkajian ||  ""),
        a_n_1_8: val.records[7]?.Perilaku ?? '',
        a_n_2_8: val.records[7]?.Kardiovaskular ?? '',
        a_n_3_8: val.records[7]?.Rr ?? '',
        a_s_1_8: val.records[7]?.Perilaku_Skor ?? '',
        a_s_2_8: val.records[7]?.Kardiovaskular_Skor ?? '',
        a_s_3_8: val.records[7]?.Rr_Skor ?? '',
        a_total_8: val.records[7]?.Total_Skor ?? '',
        a_ttd_perawat_8: val.records[7]?.TTD_Perawat && val.records[7]?.TTD_Perawat !== '' ? val.records[7]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_9: DateTimeConverter.convertToDateTime(val.records[8]?.Waktu_Pengkajian ||  ""),
        a_n_1_9: val.records[8]?.Perilaku ?? '',
        a_n_2_9: val.records[8]?.Kardiovaskular ?? '',
        a_n_3_9: val.records[8]?.Rr ?? '',
        a_s_1_9: val.records[8]?.Perilaku_Skor ?? '',
        a_s_2_9: val.records[8]?.Kardiovaskular_Skor ?? '',
        a_s_3_9: val.records[8]?.Rr_Skor ?? '',
        a_total_9: val.records[8]?.Total_Skor ?? '',
        a_ttd_perawat_9: val.records[8]?.TTD_Perawat && val.records[8]?.TTD_Perawat !== '' ? val.records[8]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_10: DateTimeConverter.convertToDateTime(val.records[9]?.Waktu_Pengkajian ||  ""),
        a_n_1_10: val.records[9]?.Perilaku ?? '',
        a_n_2_10: val.records[9]?.Kardiovaskular ?? '',
        a_n_3_10: val.records[9]?.Rr ?? '',
        a_s_1_10: val.records[9]?.Perilaku_Skor ?? '',
        a_s_2_10: val.records[9]?.Kardiovaskular_Skor ?? '',
        a_s_3_10: val.records[9]?.Rr_Skor ?? '',
        a_total_10: val.records[9]?.Total_Skor ?? '',
        a_ttd_perawat_10: val.records[9]?.TTD_Perawat && val.records[9]?.TTD_Perawat !== '' ? val.records[9]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_11: DateTimeConverter.convertToDateTime(val.records[10]?.Waktu_Pengkajian ||  ""),
        a_n_1_11: val.records[10]?.Perilaku ?? '',
        a_n_2_11: val.records[10]?.Kardiovaskular ?? '',
        a_n_3_11: val.records[10]?.Rr ?? '',
        a_s_1_11: val.records[10]?.Perilaku_Skor ?? '',
        a_s_2_11: val.records[10]?.Kardiovaskular_Skor ?? '',
        a_s_3_11: val.records[10]?.Rr_Skor ?? '',
        a_total_11: val.records[10]?.Total_Skor ?? '',
        a_ttd_perawat_11: val.records[10]?.TTD_Perawat && val.records[10]?.TTD_Perawat !== '' ? val.records[10]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_12: DateTimeConverter.convertToDateTime(val.records[11]?.Waktu_Pengkajian ||  ""),
        a_n_1_12: val.records[11]?.Perilaku ?? '',
        a_n_2_12: val.records[11]?.Kardiovaskular ?? '',
        a_n_3_12: val.records[11]?.Rr ?? '',
        a_s_1_12: val.records[11]?.Perilaku_Skor ?? '',
        a_s_2_12: val.records[11]?.Kardiovaskular_Skor ?? '',
        a_s_3_12: val.records[11]?.Rr_Skor ?? '',
        a_total_12: val.records[11]?.Total_Skor ?? '',
        a_ttd_perawat_12: val.records[11]?.TTD_Perawat && val.records[11]?.TTD_Perawat !== '' ? val.records[11]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_13: DateTimeConverter.convertToDateTime(val.records[12]?.Waktu_Pengkajian ||  ""),
        a_n_1_13: val.records[12]?.Perilaku ?? '',
        a_n_2_13: val.records[12]?.Kardiovaskular ?? '',
        a_n_3_13: val.records[12]?.Rr ?? '',
        a_s_1_13: val.records[12]?.Perilaku_Skor ?? '',
        a_s_2_13: val.records[12]?.Kardiovaskular_Skor ?? '',
        a_s_3_13: val.records[12]?.Rr_Skor ?? '',
        a_total_13: val.records[12]?.Total_Skor ?? '',
        a_ttd_perawat_13: val.records[12]?.TTD_Perawat && val.records[12]?.TTD_Perawat !== '' ? val.records[12]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_14: DateTimeConverter.convertToDateTime(val.records[13]?.Waktu_Pengkajian ||  ""),
        a_n_1_14: val.records[13]?.Perilaku ?? '',
        a_n_2_14: val.records[13]?.Kardiovaskular ?? '',
        a_n_3_14: val.records[13]?.Rr ?? '',
        a_s_1_14: val.records[13]?.Perilaku_Skor ?? '',
        a_s_2_14: val.records[13]?.Kardiovaskular_Skor ?? '',
        a_s_3_14: val.records[13]?.Rr_Skor ?? '',
        a_total_14: val.records[13]?.Total_Skor ?? '',
        a_ttd_perawat_14: val.records[13]?.TTD_Perawat && val.records[13]?.TTD_Perawat !== '' ? val.records[13]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_15: DateTimeConverter.convertToDateTime(val.records[14]?.Waktu_Pengkajian ||  ""),
        a_n_1_15: val.records[14]?.Perilaku ?? '',
        a_n_2_15: val.records[14]?.Kardiovaskular ?? '',
        a_n_3_15: val.records[14]?.Rr ?? '',
        a_s_1_15: val.records[14]?.Perilaku_Skor ?? '',
        a_s_2_15: val.records[14]?.Kardiovaskular_Skor ?? '',
        a_s_3_15: val.records[14]?.Rr_Skor ?? '',
        a_total_15: val.records[14]?.Total_Skor ?? '',
        a_ttd_perawat_15: val.records[14]?.TTD_Perawat && val.records[14]?.TTD_Perawat !== '' ? val.records[14]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        a_waktu_16: DateTimeConverter.convertToDateTime(val.records[15]?.Waktu_Pengkajian ||  ""),
        a_n_1_16: val.records[15]?.Perilaku ?? '',
        a_n_2_16: val.records[15]?.Kardiovaskular ?? '',
        a_n_3_16: val.records[15]?.Rr ?? '',
        a_s_1_16: val.records[15]?.Perilaku_Skor ?? '',
        a_s_2_16: val.records[15]?.Kardiovaskular_Skor ?? '',
        a_s_3_16: val.records[15]?.Rr_Skor ?? '',
        a_total_16: val.records[15]?.Total_Skor ?? '',
        nik: val?.pasien?.NIK ?? '',
        a_ttd_perawat_16: val.records[15]?.TTD_Perawat && val.records[15]?.TTD_Perawat !== '' ? val.records[15]?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
      },
    })
  }

}
