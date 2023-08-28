import {
  CreatePDFRequest,
  ICreatePDFRequest,
} from "@shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";
import citymapping from '@modules/outpatient/proof-of-outpatient-services/const/citymapping';
import dataTimeAssessement from '../const/dataTimeAssessement';

export interface IPdfFallRiskAssessementAdultRequest extends ICreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  'ruangan' : string;
  'lembar_ke' : string;

  'tgl1A'  : string;
  'jam1A'  : string;
  'skor_1_IA'   : string;
  'skor_2_IA'   : string;
  'skor_3_IA': string;
  'skor_4_IA'   : string;
  'skor_5_IA'   : string;
  'skor_6_IA'   : string;
  'sum_IA'  : string;
  'ket_IA'  : string;
  'risk_IA' : string;
  'ttd_IA'  : string;

  'tgl1'  : string;
  'jam1'  : string;
  'skor_1_1' : string;
  'skor_2_1' : string;
  'skor_3_1': string;
  'skor_4_1' : string;
  'skor_5_1' : string;
  'skor_6_1' : string;
  'sum_1'  : string;
  'ket_1'  : string;
  'risk_1' : string;
  'ttd_1'  : string;

  'tgl2'  : string;
  'jam2'  : string;
  'skor_1_2' : string;
  'skor_2_2' : string;
  'skor_3_2': string;
  'skor_4_2' : string;
  'skor_5_2' : string;
  'skor_6_2' : string;
  'sum_2'  : string;
  'ket_2'  : string;
  'risk_2' : string;
  'ttd_2'  : string;

  'tgl3'  : string;
  'jam3'  : string;
  'skor_1_3' : string;
  'skor_2_3' : string;
  'skor_3_3': string;
  'skor_4_3' : string;
  'skor_5_3' : string;
  'skor_6_3' : string;
  'sum_3'  : string;
  'ket_3'  : string;
  'risk_3' : string;
  'ttd_3'  : string;

  'tgl4'  : string;
  'jam4'  : string;
  'skor_1_4' : string;
  'skor_2_4' : string;
  'skor_3_4': string;
  'skor_4_4' : string;
  'skor_5_4' : string;
  'skor_6_4' : string;
  'sum_4'  : string;
  'ket_4'  : string;
  'risk_4' : string;
  'ttd_4'  : string;

  'tgl5'  : string;
  'jam5'  : string;
  'skor_1_5' : string;
  'skor_2_5' : string;
  'skor_3_5': string;
  'skor_4_5' : string;
  'skor_5_5' : string;
  'skor_6_5' : string;
  'sum_5'  : string;
  'ket_5'  : string;
  'risk_5' : string;
  'ttd_5'  : string;

  'tgl6'  : string;
  'jam6'  : string;
  'skor_1_6' : string;
  'skor_2_6' : string;
  'skor_3_6': string;
  'skor_4_6' : string;
  'skor_5_6' : string;
  'skor_6_6' : string;
  'sum_6'  : string;
  'ket_6'  : string;
  'risk_6' : string;
  'ttd_6'  : string;

  'tgl7'  : string;
  'jam7'  : string;
  'skor_1_7' : string;
  'skor_2_7' : string;
  'skor_3_7': string;
  'skor_4_7' : string;
  'skor_5_7' : string;
  'skor_6_7' : string;
  'sum_7'  : string;
  'ket_7'  : string;
  'risk_7' : string;
  'ttd_7'  : string;

  'tgl8'  : string;
  'jam8'  : string;
  'skor_1_8' : string;
  'skor_2_8' : string;
  'skor_3_8': string;
  'skor_4_8' : string;
  'skor_5_8' : string;
  'skor_6_8' : string;
  'sum_8'  : string;
  'ket_8'  : string;
  'risk_8' : string;
  'ttd_8'  : string;

  'tgl9'  : string;
  'jam9'  : string;
  'skor_1_9' : string;
  'skor_2_9' : string;
  'skor_3_9': string;
  'skor_4_9' : string;
  'skor_5_9' : string;
  'skor_6_9' : string;
  'sum_9'  : string;
  'ket_9'  : string;
  'risk_9' : string;
  'ttd_9'  : string;

  'tgl10'  : string;
  'jam10'  : string;
  'skor_1_10' : string;
  'skor_2_10' : string;
  'skor_3_10': string;
  'skor_4_10' : string;
  'skor_5_10' : string;
  'skor_6_10' : string;
  'sum_10'  : string;
  'ket_10'  : string;
  'risk_10' : string;
  'ttd_10'  : string;

  'tgl11'  : string;
  'jam11'  : string;
  'skor_1_11' : string;
  'skor_2_11' : string;
  'skor_3_11': string;
  'skor_4_11' : string;
  'skor_5_11' : string;
  'skor_6_11' : string;
  'sum_11'  : string;
  'ket_11'  : string;
  'risk_11' : string;
  'ttd_11'  : string;
  nik: string;

  };
}

export class PdfFallRiskAssessementAdultRequest extends CreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  'ruangan' : string;
  'lembar_ke' : string;

  'tgl1A'  : string;
  'jam1A'  : string;
  'skor_1_IA'   : string;
  'skor_2_IA'   : string;
  'skor_3_IA': string;
  'skor_4_IA'   : string;
  'skor_5_IA'   : string;
  'skor_6_IA'   : string;
  'sum_IA'  : string;
  'ket_IA'  : string;
  'risk_IA' : string;
  'ttd_IA'  : string;

  'tgl1'  : string;
  'jam1'  : string;
  'skor_1_1' : string;
  'skor_2_1' : string;
  'skor_3_1': string;
  'skor_4_1' : string;
  'skor_5_1' : string;
  'skor_6_1' : string;
  'sum_1'  : string;
  'ket_1'  : string;
  'risk_1' : string;
  'ttd_1'  : string;

  'tgl2'  : string;
  'jam2'  : string;
  'skor_1_2' : string;
  'skor_2_2' : string;
  'skor_3_2': string;
  'skor_4_2' : string;
  'skor_5_2' : string;
  'skor_6_2' : string;
  'sum_2'  : string;
  'ket_2'  : string;
  'risk_2' : string;
  'ttd_2'  : string;

  'tgl3'  : string;
  'jam3'  : string;
  'skor_1_3' : string;
  'skor_2_3' : string;
  'skor_3_3': string;
  'skor_4_3' : string;
  'skor_5_3' : string;
  'skor_6_3' : string;
  'sum_3'  : string;
  'ket_3'  : string;
  'risk_3' : string;
  'ttd_3'  : string;

  'tgl4'  : string;
  'jam4'  : string;
  'skor_1_4' : string;
  'skor_2_4' : string;
  'skor_3_4': string;
  'skor_4_4' : string;
  'skor_5_4' : string;
  'skor_6_4' : string;
  'sum_4'  : string;
  'ket_4'  : string;
  'risk_4' : string;
  'ttd_4'  : string;

  'tgl5'  : string;
  'jam5'  : string;
  'skor_1_5' : string;
  'skor_2_5' : string;
  'skor_3_5': string;
  'skor_4_5' : string;
  'skor_5_5' : string;
  'skor_6_5' : string;
  'sum_5'  : string;
  'ket_5'  : string;
  'risk_5' : string;
  'ttd_5'  : string;

  'tgl6'  : string;
  'jam6'  : string;
  'skor_1_6' : string;
  'skor_2_6' : string;
  'skor_3_6': string;
  'skor_4_6' : string;
  'skor_5_6' : string;
  'skor_6_6' : string;
  'sum_6'  : string;
  'ket_6'  : string;
  'risk_6' : string;
  'ttd_6'  : string;

  'tgl7'  : string;
  'jam7'  : string;
  'skor_1_7' : string;
  'skor_2_7' : string;
  'skor_3_7': string;
  'skor_4_7' : string;
  'skor_5_7' : string;
  'skor_6_7' : string;
  'sum_7'  : string;
  'ket_7'  : string;
  'risk_7' : string;
  'ttd_7'  : string;

  'tgl8'  : string;
  'jam8'  : string;
  'skor_1_8' : string;
  'skor_2_8' : string;
  'skor_3_8': string;
  'skor_4_8' : string;
  'skor_5_8' : string;
  'skor_6_8' : string;
  'sum_8'  : string;
  'ket_8'  : string;
  'risk_8' : string;
  'ttd_8'  : string;

  'tgl9'  : string;
  'jam9'  : string;
  'skor_1_9' : string;
  'skor_2_9' : string;
  'skor_3_9': string;
  'skor_4_9' : string;
  'skor_5_9' : string;
  'skor_6_9' : string;
  'sum_9'  : string;
  'ket_9'  : string;
  'risk_9' : string;
  'ttd_9'  : string;

  'tgl10'  : string;
  'jam10'  : string;
  'skor_1_10' : string;
  'skor_2_10' : string;
  'skor_3_10': string;
  'skor_4_10' : string;
  'skor_5_10' : string;
  'skor_6_10' : string;
  'sum_10'  : string;
  'ket_10'  : string;
  'risk_10' : string;
  'ttd_10'  : string;

  'tgl11'  : string;
  'jam11'  : string;
  'skor_1_11' : string;
  'skor_2_11' : string;
  'skor_3_11': string;
  'skor_4_11' : string;
  'skor_5_11' : string;
  'skor_6_11' : string;
  'sum_11'  : string;
  'ket_11'  : string;
  'risk_11' : string;
  'ttd_11'  : string;
  nik: string;

  };

  constructor(req: IPdfFallRiskAssessementAdultRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfFallRiskAssessementAdultRequest) {
    return new PdfFallRiskAssessementAdultRequest(json);
  }

  static createPdfRequest(val: any, emrID: string, treatment: any): PdfFallRiskAssessementAdultRequest {

    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }

    const formatTime = (dateNow: any) => {
      if (dateNow !== "") {
        const d = new Date(dateNow);
        const dateFormat = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
        return dateFormat;
      } else {
        return '';
      }
    }

    const formatDate = (dateNow: any) => {
      if (dateNow !== "") {
        const d = new Date(dateNow);
        const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
        return dateFormat;
      } else {
        return '';
      }
    }

    const formatDateIndo = (dateNow: any) => {
      if (dateNow !== "") {
        const d = new Date(dateNow);
        const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
        return dateFormat;
      } else {
        return '';
      }
    }

    const getCheckTTD = (imageTTD: string) => {
      if (imageTTD !== "") {
        return  imageTTD;
      } else {
        return 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg';
      }
    }

    const getTimes = (times: any) => {
      const selectedTimes = dataTimeAssessement.find((val: any) => val.id === times)
      if (selectedTimes) {
        return selectedTimes.id;
      } else {
        return "";
      }
    }


    return new PdfFallRiskAssessementAdultRequest({
      emr_id: treatment.EMR_ID,
      form_name: 'rawat-inap_pengkajian-risiko-jatuh-dewasa',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: treatment.No_MR ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': formatDate(val?.pasien?.Tgl_Lahir ?? ''),
        'pasien.Alamat': val?.pasien?.Alamat ?? '',
        'pasien.Umur': val?.pasien?.Umur ?? '',
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',

        ruangan : val?.records[0]?.Ruangan ?? '',
        lembar_ke : val?.records[0]?.Lembar ?? '',

        tgl1A  : formatDate(val?.records[0]?.Waktu_Pengkajian ?? ''),
        jam1A  : formatTime(val?.records[0]?.Waktu_Pengkajian ?? ''),
        skor_1_IA   : val?.records[0]?.Riwayat_Jatuh ?? '',
        skor_2_IA   : val?.records[0]?.Diagnosa_Sekunder ?? '',
        skor_3_IA : val?.records[0]?.Alat_Bantu_Jalan ?? '',
        skor_4_IA   : val?.records[0]?.Pasien_Diinfus ?? '',
        skor_5_IA   : val?.records[0]?.Cara_Berjalan ?? '',
        skor_6_IA   : val?.records[0]?.Kondisi_Mental ?? '',
        sum_IA  : val?.records[0]?.Total_Skor ?? '',
        ket_IA  : getTimes(val?.records[0]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_IA : val?.records[0]?.Resiko_Jatuh ?? '',
        ttd_IA  : getCheckTTD(val?.records[0]?.TTD_Perawat),

        tgl1  : formatDate(val?.records[1]?.Waktu_Pengkajian ?? ''),
        jam1  : formatTime(val?.records[1]?.Waktu_Pengkajian ?? ''),
        skor_1_1 : val?.records[1]?.Riwayat_Jatuh ?? '',
        skor_2_1 : val?.records[1]?.Diagnosa_Sekunder ?? '',
        skor_3_1 : val?.records[1]?.Alat_Bantu_Jalan ?? '',
        skor_4_1 : val?.records[1]?.Pasien_Diinfus ?? '',
        skor_5_1 : val?.records[1]?.Cara_Berjalan ?? '',
        skor_6_1 : val?.records[1]?.Kondisi_Mental ?? '',
        sum_1  : val?.records[1]?.Total_Skor ?? '',
        ket_1  :  getTimes(val?.records[1]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_1 : val?.records[1]?.Resiko_Jatuh ?? '',
        ttd_1  : getCheckTTD(val?.records[1]?.TTD_Perawat),

        tgl2  : formatDate(val?.records[2]?.Waktu_Pengkajian ?? ''),
        jam2  : formatTime(val?.records[2]?.Waktu_Pengkajian ?? ''),
        skor_1_2 : val?.records[2]?.Riwayat_Jatuh ?? '',
        skor_2_2 : val?.records[2]?.Diagnosa_Sekunder ?? '',
        skor_3_2 : val?.records[2]?.Alat_Bantu_Jalan ?? '',
        skor_4_2 : val?.records[2]?.Pasien_Diinfus ?? '',
        skor_5_2 : val?.records[2]?.Cara_Berjalan ?? '',
        skor_6_2 : val?.records[2]?.Kondisi_Mental ?? '',
        sum_2  : val?.records[2]?.Total_Skor ?? '',
        ket_2  :  getTimes(val?.records[2]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_2 : val?.records[2]?.Resiko_Jatuh ?? '',
        ttd_2  : getCheckTTD(val?.records[2]?.TTD_Perawat),

        tgl3  : formatDate(val?.records[3]?.Waktu_Pengkajian ?? ''),
        jam3  : formatTime(val?.records[3]?.Waktu_Pengkajian ?? ''),
        skor_1_3 : val?.records[3]?.Riwayat_Jatuh ?? '',
        skor_2_3 : val?.records[3]?.Diagnosa_Sekunder ?? '',
        skor_3_3 : val?.records[3]?.Alat_Bantu_Jalan ?? '',
        skor_4_3 : val?.records[3]?.Pasien_Diinfus ?? '',
        skor_5_3 : val?.records[3]?.Cara_Berjalan ?? '',
        skor_6_3 : val?.records[3]?.Kondisi_Mental ?? '',
        sum_3  : val?.records[3]?.Total_Skor ?? '',
        ket_3  :  getTimes(val?.records[3]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_3 : val?.records[3]?.Resiko_Jatuh ?? '',
        ttd_3  : getCheckTTD(val?.records[3]?.TTD_Perawat),

        tgl4  : formatDate(val?.records[4]?.Waktu_Pengkajian ?? ''),
        jam4  : formatTime(val?.records[4]?.Waktu_Pengkajian ?? ''),
        skor_1_4 : val?.records[4]?.Riwayat_Jatuh ?? '',
        skor_2_4 : val?.records[4]?.Diagnosa_Sekunder ?? '',
        skor_3_4 : val?.records[4]?.Alat_Bantu_Jalan ?? '',
        skor_4_4 : val?.records[4]?.Pasien_Diinfus ?? '',
        skor_5_4 : val?.records[4]?.Cara_Berjalan ?? '',
        skor_6_4 : val?.records[4]?.Kondisi_Mental ?? '',
        sum_4  : val?.records[4]?.Total_Skor ?? '',
        ket_4  :  getTimes(val?.records[4]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_4 : val?.records[4]?.Resiko_Jatuh ?? '',
        ttd_4  : getCheckTTD(val?.records[3]?.TTD_Perawat),

        tgl5  : formatDate(val?.records[5]?.Waktu_Pengkajian ?? ''),
        jam5  : formatTime(val?.records[5]?.Waktu_Pengkajian ?? ''),
        skor_1_5 : val?.records[5]?.Riwayat_Jatuh ?? '',
        skor_2_5 : val?.records[5]?.Diagnosa_Sekunder ?? '',
        skor_3_5 : val?.records[5]?.Alat_Bantu_Jalan ?? '',
        skor_4_5 : val?.records[5]?.Pasien_Diinfus ?? '',
        skor_5_5 : val?.records[5]?.Cara_Berjalan ?? '',
        skor_6_5 : val?.records[5]?.Kondisi_Mental ?? '',
        sum_5  : val?.records[5]?.Total_Skor ?? '',
        ket_5  :  getTimes(val?.records[5]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_5 : val?.records[5]?.Resiko_Jatuh ?? '',
        ttd_5  : getCheckTTD(val?.records[5]?.TTD_Perawat),

        tgl6  : formatDate(val?.records[6]?.Waktu_Pengkajian ?? ''),
        jam6  : formatTime(val?.records[6]?.Waktu_Pengkajian ?? ''),
        skor_1_6 : val?.records[6]?.Riwayat_Jatuh ?? '',
        skor_2_6 : val?.records[6]?.Diagnosa_Sekunder ?? '',
        skor_3_6 : val?.records[6]?.Alat_Bantu_Jalan ?? '',
        skor_4_6 : val?.records[6]?.Pasien_Diinfus ?? '',
        skor_5_6 : val?.records[6]?.Cara_Berjalan ?? '',
        skor_6_6 : val?.records[6]?.Kondisi_Mental ?? '',
        sum_6  : val?.records[6]?.Total_Skor ?? '',
        ket_6  :  getTimes(val?.records[6]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_6 : val?.records[6]?.Resiko_Jatuh ?? '',
        ttd_6  : getCheckTTD(val?.records[6]?.TTD_Perawat),

        tgl7  : formatDate(val?.records[7]?.Waktu_Pengkajian ?? ''),
        jam7  : formatTime(val?.records[7]?.Waktu_Pengkajian ?? ''),
        skor_1_7 : val?.records[7]?.Riwayat_Jatuh ?? '',
        skor_2_7 : val?.records[7]?.Diagnosa_Sekunder ?? '',
        skor_3_7 : val?.records[7]?.Alat_Bantu_Jalan ?? '',
        skor_4_7 : val?.records[7]?.Pasien_Diinfus ?? '',
        skor_5_7 : val?.records[7]?.Cara_Berjalan ?? '',
        skor_6_7 : val?.records[7]?.Kondisi_Mental ?? '',
        sum_7  : val?.records[7]?.Total_Skor ?? '',
        ket_7  :  getTimes(val?.records[7]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_7 : val?.records[7]?.Resiko_Jatuh ?? '',
        ttd_7  : getCheckTTD(val?.records[7]?.TTD_Perawat),

        tgl8  : formatDate(val?.records[8]?.Waktu_Pengkajian ?? ''),
        jam8  : formatTime(val?.records[8]?.Waktu_Pengkajian ?? ''),
        skor_1_8 : val?.records[8]?.Riwayat_Jatuh ?? '',
        skor_2_8 : val?.records[8]?.Diagnosa_Sekunder ?? '',
        skor_3_8 : val?.records[8]?.Alat_Bantu_Jalan ?? '',
        skor_4_8 : val?.records[8]?.Pasien_Diinfus ?? '',
        skor_5_8 : val?.records[8]?.Cara_Berjalan ?? '',
        skor_6_8 : val?.records[8]?.Kondisi_Mental ?? '',
        sum_8  : val?.records[8]?.Total_Skor ?? '',
        ket_8  :  getTimes(val?.records[8]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_8 : val?.records[8]?.Resiko_Jatuh ?? '',
        ttd_8  : getCheckTTD(val?.records[8]?.TTD_Perawat),

        tgl9  : formatDate(val?.records[9]?.Waktu_Pengkajian ?? ''),
        jam9  : formatTime(val?.records[9]?.Waktu_Pengkajian ?? ''),
        skor_1_9 : val?.records[9]?.Riwayat_Jatuh ?? '',
        skor_2_9 : val?.records[9]?.Diagnosa_Sekunder ?? '',
        skor_3_9 : val?.records[9]?.Alat_Bantu_Jalan ?? '',
        skor_4_9 : val?.records[9]?.Pasien_Diinfus ?? '',
        skor_5_9 : val?.records[9]?.Cara_Berjalan ?? '',
        skor_6_9 : val?.records[9]?.Kondisi_Mental ?? '',
        sum_9  : val?.records[9]?.Total_Skor ?? '',
        ket_9  :  getTimes(val?.records[9]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_9 : val?.records[9]?.Resiko_Jatuh ?? '',
        ttd_9  : getCheckTTD(val?.records[9]?.TTD_Perawat),

        tgl10  : formatDate(val?.records[10]?.Waktu_Pengkajian ?? ''),
        jam10  : formatTime(val?.records[10]?.Waktu_Pengkajian ?? ''),
        skor_1_10 : val?.records[10]?.Riwayat_Jatuh ?? '',
        skor_2_10 : val?.records[10]?.Diagnosa_Sekunder ?? '',
        skor_3_10 : val?.records[10]?.Alat_Bantu_Jalan ?? '',
        skor_4_10 : val?.records[10]?.Pasien_Diinfus ?? '',
        skor_5_10 : val?.records[10]?.Cara_Berjalan ?? '',
        skor_6_10 : val?.records[10]?.Kondisi_Mental ?? '',
        sum_10  : val?.records[10]?.Total_Skor ?? '',
        ket_10  :  getTimes(val?.records[10]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_10 : val?.records[10]?.Resiko_Jatuh ?? '',
        ttd_10  : getCheckTTD(val?.records[10]?.TTD_Perawat),

        tgl11  : formatDate(val?.records[11]?.Waktu_Pengkajian ?? ''),
        jam11  : formatTime(val?.records[11]?.Waktu_Pengkajian ?? ''),
        skor_1_11 : val?.records[11]?.Riwayat_Jatuh ?? '',
        skor_2_11 : val?.records[11]?.Diagnosa_Sekunder ?? '',
        skor_3_11 : val?.records[11]?.Alat_Bantu_Jalan ?? '',
        skor_4_11 : val?.records[11]?.Pasien_Diinfus ?? '',
        skor_5_11 : val?.records[11]?.Cara_Berjalan ?? '',
        skor_6_11 : val?.records[11]?.Kondisi_Mental ?? '',
        sum_11  : val?.records[11]?.Total_Skor ?? '',
        ket_11  :  getTimes(val?.records[11]?.Keterangan_Waktu_Pengkajian_Id ?? ''),
        risk_11 : val?.records[11]?.Resiko_Jatuh ?? '',
        ttd_11  : getCheckTTD(val?.records[11]?.TTD_Perawat),
        nik: val?.pasien?.NIK ?? '',

      },
    })
  }
}
