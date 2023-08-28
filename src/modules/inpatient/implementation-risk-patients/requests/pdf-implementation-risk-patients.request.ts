import {
  CreatePDFRequest,
  ICreatePDFRequest,
} from "@shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";
import citymapping from '@modules/outpatient/proof-of-outpatient-services/const/citymapping';
import { ITreatmentModel } from "@src/modules/site/patient-list/models";
import { DateTimeConverter } from "@src/shared/datetime-converter";


export interface IPdfImplementationRiskPatientsRequest extends ICreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  'dokter_berobat' : string;

  'tgl_1' : string;
  'tgl_2' : string;
  'tgl_3' : string;
  'tgl_4' : string;
  'tgl_5' : string;
  'tgl_6' : string;
  'tgl_7' : string;
  'tgl_8' : string;
  'tgl_9' : string;
  'tgl_10' : string;
  'tgl_11' : string;
  'tgl_12' : string;
  'tgl_13' : string;

  'paraf1_1' : string;
  'paraf2_1' : string;
  'paraf3_1': string;
  'paraf4_1' : string;
  'paraf5_1' : string;
  'paraf6_1' : string;
  'paraf7_1' : string;
  'paraf8_1': string;
  'paraf9_1' : string;
  'paraf10_1' : string;
  'paraf11_1': string;
  'paraf12_1' : string;
  'paraf13_1' : string;

  'paraf1_2' : string;
  'paraf2_2' : string;
  'paraf3_2': string;
  'paraf4_2' : string;
  'paraf5_2' : string;
  'paraf6_2' : string;
  'paraf7_2' : string;
  'paraf8_2': string;
  'paraf9_2' : string;
  'paraf10_2' : string;
  'paraf11_2': string;
  'paraf12_2' : string;
  'paraf13_2' : string;

  'paraf1_3' : string;
  'paraf2_3' : string;
  'paraf3_3': string;
  'paraf4_3' : string;
  'paraf5_3' : string;
  'paraf6_3' : string;
  'paraf7_3' : string;
  'paraf8_3': string;
  'paraf9_3' : string;
  'paraf10_3' : string;
  'paraf11_3': string;
  'paraf12_3' : string;
  'paraf13_3' : string;

  'paraf1_4' : string;
  'paraf2_4' : string;
  'paraf3_4': string;
  'paraf4_4' : string;
  'paraf5_4' : string;
  'paraf6_4' : string;
  'paraf7_4' : string;
  'paraf8_4': string;
  'paraf9_4' : string;
  'paraf10_4' : string;
  'paraf11_4': string;
  'paraf12_4' : string;
  'paraf13_4' : string;

  'paraf1_5' : string;
  'paraf2_5' : string;
  'paraf3_5': string;
  'paraf4_5' : string;
  'paraf5_5' : string;
  'paraf6_5' : string;
  'paraf7_5' : string;
  'paraf8_5': string;
  'paraf9_5' : string;
  'paraf10_5' : string;
  'paraf11_5': string;
  'paraf12_5' : string;
  'paraf13_5' : string;

  'paraf1_6' : string;
  'paraf2_6' : string;
  'paraf3_6': string;
  'paraf4_6' : string;
  'paraf5_6' : string;
  'paraf6_6' : string;
  'paraf7_6' : string;
  'paraf8_6': string;
  'paraf9_6' : string;
  'paraf10_6' : string;
  'paraf11_6': string;
  'paraf12_6' : string;
  'paraf13_6' : string;

  'paraf1_7' : string;
  'paraf2_7' : string;
  'paraf3_7': string;
  'paraf4_7' : string;
  'paraf5_7' : string;
  'paraf6_7' : string;
  'paraf7_7' : string;
  'paraf8_7': string;
  'paraf9_7' : string;
  'paraf10_7' : string;
  'paraf11_7': string;
  'paraf12_7' : string;
  'paraf13_7' : string;

  'paraf1_8' : string;
  'paraf2_8' : string;
  'paraf3_8': string;
  'paraf4_8' : string;
  'paraf5_8' : string;
  'paraf6_8' : string;
  'paraf7_8' : string;
  'paraf8_8': string;
  'paraf9_8' : string;
  'paraf10_8' : string;
  'paraf11_8': string;
  'paraf12_8' : string;
  'paraf13_8' : string;

  'paraf1_9' : string;
  'paraf2_9' : string;
  'paraf3_9': string;
  'paraf4_9' : string;
  'paraf5_9' : string;
  'paraf6_9' : string;
  'paraf7_9' : string;
  'paraf8_9': string;
  'paraf9_9' : string;
  'paraf10_9' : string;
  'paraf11_9': string;
  'paraf12_9' : string;
  'paraf13_9' : string;

  'paraf1_10' : string;
  'paraf2_10' : string;
  'paraf3_10': string;
  'paraf4_10' : string;
  'paraf5_10' : string;
  'paraf6_10' : string;
  'paraf7_10' : string;
  'paraf8_10': string;
  'paraf9_10' : string;
  'paraf10_10' : string;
  'paraf11_10': string;
  'paraf12_10' : string;
  'paraf13_10' : string;
  nik: string;
  };
}

export class PdfImplementationRiskPatientsRequest extends CreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  'dokter_berobat' : string;
  'tgl_1' : string;
  'tgl_2' : string;
  'tgl_3' : string;
  'tgl_4' : string;
  'tgl_5' : string;
  'tgl_6' : string;
  'tgl_7' : string;
  'tgl_8' : string;
  'tgl_9' : string;
  'tgl_10' : string;
  'tgl_11' : string;
  'tgl_12' : string;
  'tgl_13' : string;

  'paraf1_1' : string;
  'paraf2_1' : string;
  'paraf3_1': string;
  'paraf4_1' : string;
  'paraf5_1' : string;
  'paraf6_1' : string;
  'paraf7_1' : string;
  'paraf8_1': string;
  'paraf9_1' : string;
  'paraf10_1' : string;
  'paraf11_1': string;
  'paraf12_1' : string;
  'paraf13_1' : string;

  'paraf1_2' : string;
  'paraf2_2' : string;
  'paraf3_2': string;
  'paraf4_2' : string;
  'paraf5_2' : string;
  'paraf6_2' : string;
  'paraf7_2' : string;
  'paraf8_2': string;
  'paraf9_2' : string;
  'paraf10_2' : string;
  'paraf11_2': string;
  'paraf12_2' : string;
  'paraf13_2' : string;

  'paraf1_3' : string;
  'paraf2_3' : string;
  'paraf3_3': string;
  'paraf4_3' : string;
  'paraf5_3' : string;
  'paraf6_3' : string;
  'paraf7_3' : string;
  'paraf8_3': string;
  'paraf9_3' : string;
  'paraf10_3' : string;
  'paraf11_3': string;
  'paraf12_3' : string;
  'paraf13_3' : string;

  'paraf1_4' : string;
  'paraf2_4' : string;
  'paraf3_4': string;
  'paraf4_4' : string;
  'paraf5_4' : string;
  'paraf6_4' : string;
  'paraf7_4' : string;
  'paraf8_4': string;
  'paraf9_4' : string;
  'paraf10_4' : string;
  'paraf11_4': string;
  'paraf12_4' : string;
  'paraf13_4' : string;

  'paraf1_5' : string;
  'paraf2_5' : string;
  'paraf3_5': string;
  'paraf4_5' : string;
  'paraf5_5' : string;
  'paraf6_5' : string;
  'paraf7_5' : string;
  'paraf8_5': string;
  'paraf9_5' : string;
  'paraf10_5' : string;
  'paraf11_5': string;
  'paraf12_5' : string;
  'paraf13_5' : string;

  'paraf1_6' : string;
  'paraf2_6' : string;
  'paraf3_6': string;
  'paraf4_6' : string;
  'paraf5_6' : string;
  'paraf6_6' : string;
  'paraf7_6' : string;
  'paraf8_6': string;
  'paraf9_6' : string;
  'paraf10_6' : string;
  'paraf11_6': string;
  'paraf12_6' : string;
  'paraf13_6' : string;
  'paraf1_7' : string;
  'paraf2_7' : string;
  'paraf3_7': string;
  'paraf4_7' : string;
  'paraf5_7' : string;
  'paraf6_7' : string;
  'paraf7_7' : string;
  'paraf8_7': string;
  'paraf9_7' : string;
  'paraf10_7' : string;
  'paraf11_7': string;
  'paraf12_7' : string;
  'paraf13_7' : string;

  'paraf1_8' : string;
  'paraf2_8' : string;
  'paraf3_8': string;
  'paraf4_8' : string;
  'paraf5_8' : string;
  'paraf6_8' : string;
  'paraf7_8' : string;
  'paraf8_8': string;
  'paraf9_8' : string;
  'paraf10_8' : string;
  'paraf11_8': string;
  'paraf12_8' : string;
  'paraf13_8' : string;

  'paraf1_9' : string;
  'paraf2_9' : string;
  'paraf3_9': string;
  'paraf4_9' : string;
  'paraf5_9' : string;
  'paraf6_9' : string;
  'paraf7_9' : string;
  'paraf8_9': string;
  'paraf9_9' : string;
  'paraf10_9' : string;
  'paraf11_9': string;
  'paraf12_9' : string;
  'paraf13_9' : string;

  'paraf1_10' : string;
  'paraf2_10' : string;
  'paraf3_10': string;
  'paraf4_10' : string;
  'paraf5_10' : string;
  'paraf6_10' : string;
  'paraf7_10' : string;
  'paraf8_10': string;
  'paraf9_10' : string;
  'paraf10_10' : string;
  'paraf11_10': string;
  'paraf12_10' : string;
  'paraf13_10' : string;
  nik: string;
  };

  constructor(req: IPdfImplementationRiskPatientsRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfImplementationRiskPatientsRequest) {
    return new PdfImplementationRiskPatientsRequest(json);
  }

  static createPdfRequest(val: any, emrID: string, treatment: ITreatmentModel): PdfImplementationRiskPatientsRequest {

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

    const getCheckTTD = (validity: boolean, imageTTD: string) => {
      if (imageTTD) {
        return (validity) ? imageTTD : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg';
      } else {
        return 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg';
      }
    }

    return new PdfImplementationRiskPatientsRequest({
      emr_id: treatment.EMR_ID,
      form_name: 'rawat-inap_implementasi-pasien-risiko-jatuh',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: treatment.No_MR ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Alamat': val?.pasien?.Alamat ?? '',
        'pasien.Umur': this.normalizeAge(treatment?.Pasien?.Umur_Lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        dokter_berobat : treatment.Nama_Dokter ?? '',
        tgl_1 : formatDateIndo(val?.records[0]?.Waktu_Implementasi ?? ''),
        tgl_2 : formatDateIndo(val?.records[1]?.Waktu_Implementasi ?? ''),
        tgl_3 : formatDateIndo(val?.records[2]?.Waktu_Implementasi ?? ''),
        tgl_4 : formatDateIndo(val?.records[3]?.Waktu_Implementasi ?? ''),
        tgl_5 : formatDateIndo(val?.records[4]?.Waktu_Implementasi ?? ''),
        tgl_6 : formatDateIndo(val?.records[5]?.Waktu_Implementasi ?? ''),
        tgl_7 : formatDateIndo(val?.records[6]?.Waktu_Implementasi ?? ''),
        tgl_8 : formatDateIndo(val?.records[7]?.Waktu_Implementasi ?? ''),
        tgl_9 : formatDateIndo(val?.records[8]?.aktu_Implementasi ?? ''),
        tgl_10 : formatDateIndo(val?.records[9]?.Waktu_Implementasi ?? ''),
        tgl_11 : formatDateIndo(val?.records[10]?.Waktu_Implementasi ?? ''),
        tgl_12 : formatDateIndo(val?.records[11]?.Waktu_Implementasi ?? ''),
        tgl_13 : formatDateIndo(val?.records[12]?.Waktu_Implementasi ?? ''),

        paraf1_1 : getCheckTTD(val?.records[0]?.Pengkajian_Awal_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_1 : getCheckTTD(val?.records[1]?.Pengkajian_Awal_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_1 : getCheckTTD(val?.records[2]?.Pengkajian_Awal_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_1 : getCheckTTD(val?.records[3]?.Pengkajian_Awal_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_1 : getCheckTTD(val?.records[4]?.Pengkajian_Awal_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_1 : getCheckTTD(val?.records[5]?.Pengkajian_Awal_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_1 : getCheckTTD(val?.records[6]?.Pengkajian_Awal_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_1 : getCheckTTD(val?.records[7]?.Pengkajian_Awal_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_1 : getCheckTTD(val?.records[8]?.Pengkajian_Awal_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_1 : getCheckTTD(val?.records[9]?.Pengkajian_Awal_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_1 : getCheckTTD(val?.records[10]?.Pengkajian_Awal_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_1 : getCheckTTD(val?.records[11]?.Pengkajian_Awal_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_1 : getCheckTTD(val?.records[12]?.Pengkajian_Awal_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_2 : getCheckTTD(val?.records[0]?.Rem_Tempat_Tidur_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_2 : getCheckTTD(val?.records[1]?.Rem_Tempat_Tidur_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_2 : getCheckTTD(val?.records[2]?.Rem_Tempat_Tidur_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_2 : getCheckTTD(val?.records[3]?.Rem_Tempat_Tidur_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_2 : getCheckTTD(val?.records[4]?.Rem_Tempat_Tidur_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_2 : getCheckTTD(val?.records[5]?.Rem_Tempat_Tidur_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_2 : getCheckTTD(val?.records[6]?.Rem_Tempat_Tidur_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_2 : getCheckTTD(val?.records[7]?.Rem_Tempat_Tidur_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_2 : getCheckTTD(val?.records[8]?.Rem_Tempat_Tidur_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_2 : getCheckTTD(val?.records[9]?.Rem_Tempat_Tidur_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_2 : getCheckTTD(val?.records[10]?.Rem_Tempat_Tidur_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_2 : getCheckTTD(val?.records[11]?.Rem_Tempat_Tidur_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_2 : getCheckTTD(val?.records[12]?.Rem_Tempat_Tidur_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_3 : getCheckTTD(val?.records[0]?.Dalam_Jangkauan_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_3 : getCheckTTD(val?.records[1]?.Dalam_Jangkauan_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_3 : getCheckTTD(val?.records[2]?.Dalam_Jangkauan_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_3 : getCheckTTD(val?.records[3]?.Dalam_Jangkauan_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_3 : getCheckTTD(val?.records[4]?.Dalam_Jangkauan_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_3 : getCheckTTD(val?.records[5]?.Dalam_Jangkauan_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_3 : getCheckTTD(val?.records[6]?.Dalam_Jangkauan_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_3 : getCheckTTD(val?.records[7]?.Dalam_Jangkauan_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_3 : getCheckTTD(val?.records[8]?.Dalam_Jangkauan_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_3 : getCheckTTD(val?.records[9]?.Dalam_Jangkauan_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_3 : getCheckTTD(val?.records[10]?.Dalam_Jangkauan_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_3 : getCheckTTD(val?.records[11]?.Dalam_Jangkauan_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_3 : getCheckTTD(val?.records[12]?.Dalam_Jangkauan_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_4 : getCheckTTD(val?.records[0]?.Tidak_Menghalangi_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_4 : getCheckTTD(val?.records[1]?.Tidak_Menghalangi_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_4 : getCheckTTD(val?.records[2]?.Tidak_Menghalangi_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_4 : getCheckTTD(val?.records[3]?.Tidak_Menghalangi_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_4 : getCheckTTD(val?.records[4]?.Tidak_Menghalangi_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_4 : getCheckTTD(val?.records[5]?.Tidak_Menghalangi_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_4 : getCheckTTD(val?.records[6]?.Tidak_Menghalangi_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_4 : getCheckTTD(val?.records[7]?.Tidak_Menghalangi_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_4 : getCheckTTD(val?.records[8]?.Tidak_Menghalangi_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_4 : getCheckTTD(val?.records[9]?.Tidak_Menghalangi_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_4 : getCheckTTD(val?.records[10]?.Tidak_Menghalangi_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_4 : getCheckTTD(val?.records[11]?.Tidak_Menghalangi_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_4 : getCheckTTD(val?.records[12]?.Tidak_Menghalangi_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_5 : getCheckTTD(val?.records[0]?.Palang_Tempat_Tidur_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_5 : getCheckTTD(val?.records[1]?.Palang_Tempat_Tidur_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_5 : getCheckTTD(val?.records[2]?.Palang_Tempat_Tidur_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_5 : getCheckTTD(val?.records[3]?.Palang_Tempat_Tidur_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_5 : getCheckTTD(val?.records[4]?.Palang_Tempat_Tidur_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_5 : getCheckTTD(val?.records[5]?.Palang_Tempat_Tidur_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_5 : getCheckTTD(val?.records[6]?.Palang_Tempat_Tidur_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_5 : getCheckTTD(val?.records[7]?.Palang_Tempat_Tidur_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_5 : getCheckTTD(val?.records[8]?.Palang_Tempat_Tidur_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_5 : getCheckTTD(val?.records[9]?.Palang_Tempat_Tidur_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_5 : getCheckTTD(val?.records[10]?.Palang_Tempat_Tidur_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_5 : getCheckTTD(val?.records[11]?.Palang_Tempat_Tidur_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_5 : getCheckTTD(val?.records[12]?.Palang_Tempat_Tidur_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_6 : getCheckTTD(val?.records[0]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_6 : getCheckTTD(val?.records[1]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_6 : getCheckTTD(val?.records[2]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_6 : getCheckTTD(val?.records[3]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_6 : getCheckTTD(val?.records[4]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_6 : getCheckTTD(val?.records[5]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_6 : getCheckTTD(val?.records[6]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_6 : getCheckTTD(val?.records[7]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_6 : getCheckTTD(val?.records[8]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_6 : getCheckTTD(val?.records[9]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_6 : getCheckTTD(val?.records[10]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_6 : getCheckTTD(val?.records[11]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_6 : getCheckTTD(val?.records[12]?.Penanda_Resiko_Jatuh_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_7 : getCheckTTD(val?.records[0]?.Libatkan_Keluarga_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_7 : getCheckTTD(val?.records[1]?.Libatkan_Keluarga_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_7 : getCheckTTD(val?.records[2]?.Libatkan_Keluarga_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_7 : getCheckTTD(val?.records[3]?.Libatkan_Keluarga_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_7 : getCheckTTD(val?.records[4]?.Libatkan_Keluarga_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_7 : getCheckTTD(val?.records[5]?.Libatkan_Keluarga_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_7 : getCheckTTD(val?.records[6]?.Libatkan_Keluarga_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_7 : getCheckTTD(val?.records[7]?.Libatkan_Keluarga_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_7 : getCheckTTD(val?.records[8]?.Libatkan_Keluarga_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_7 : getCheckTTD(val?.records[9]?.Libatkan_Keluarga_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_7 : getCheckTTD(val?.records[10]?.Libatkan_Keluarga_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_7 : getCheckTTD(val?.records[11]?.Libatkan_Keluarga_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_7 : getCheckTTD(val?.records[12]?.Libatkan_Keluarga_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_8 : getCheckTTD(val?.records[0]?.Cepat_Menanggapi_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_8 : getCheckTTD(val?.records[1]?.Cepat_Menanggapi_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_8 : getCheckTTD(val?.records[2]?.Cepat_Menanggapi_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_8 : getCheckTTD(val?.records[3]?.Cepat_Menanggapi_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_8 : getCheckTTD(val?.records[4]?.Cepat_Menanggapi_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_8 : getCheckTTD(val?.records[5]?.Cepat_Menanggapi_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_8 : getCheckTTD(val?.records[6]?.Cepat_Menanggapi_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_8 : getCheckTTD(val?.records[7]?.Cepat_Menanggapi_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_8 : getCheckTTD(val?.records[8]?.Cepat_Menanggapi_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_8 : getCheckTTD(val?.records[9]?.Cepat_Menanggapi_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_8 : getCheckTTD(val?.records[10]?.Cepat_Menanggapi_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_8 : getCheckTTD(val?.records[11]?.Cepat_Menanggapi_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_8 : getCheckTTD(val?.records[12]?.Cepat_Menanggapi_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_9 : getCheckTTD(val?.records[0]?.Memantau_Respon_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_9 : getCheckTTD(val?.records[1]?.Memantau_Respon_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_9 : getCheckTTD(val?.records[2]?.Memantau_Respon_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_9 : getCheckTTD(val?.records[3]?.Memantau_Respon_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_9 : getCheckTTD(val?.records[4]?.Memantau_Respon_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_9 : getCheckTTD(val?.records[5]?.Memantau_Respon_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_9 : getCheckTTD(val?.records[6]?.Memantau_Respon_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_9 : getCheckTTD(val?.records[7]?.Memantau_Respon_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_9 : getCheckTTD(val?.records[8]?.Memantau_Respon_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_9 : getCheckTTD(val?.records[9]?.Memantau_Respon_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_9 : getCheckTTD(val?.records[10]?.Memantau_Respon_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_9 : getCheckTTD(val?.records[11]?.Memantau_Respon_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_9 : getCheckTTD(val?.records[12]?.Memantau_Respon_Check === '1', val?.records[12]?.TTD_Perawat),

        paraf1_10 : getCheckTTD(val?.records[0]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[0]?.TTD_Perawat),
        paraf2_10 : getCheckTTD(val?.records[1]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[1]?.TTD_Perawat),
        paraf3_10 : getCheckTTD(val?.records[2]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[2]?.TTD_Perawat),
        paraf4_10 : getCheckTTD(val?.records[3]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[3]?.TTD_Perawat),
        paraf5_10 : getCheckTTD(val?.records[4]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[4]?.TTD_Perawat),
        paraf6_10 : getCheckTTD(val?.records[5]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[5]?.TTD_Perawat),
        paraf7_10 : getCheckTTD(val?.records[6]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[6]?.TTD_Perawat),
        paraf8_10 : getCheckTTD(val?.records[7]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[7]?.TTD_Perawat),
        paraf9_10 : getCheckTTD(val?.records[8]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[8]?.TTD_Perawat),
        paraf10_10 : getCheckTTD(val?.records[9]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[9]?.TTD_Perawat),
        paraf11_10 : getCheckTTD(val?.records[10]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[10]?.TTD_Perawat),
        paraf12_10 : getCheckTTD(val?.records[11]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[11]?.TTD_Perawat),
        paraf13_10 : getCheckTTD(val?.records[12]?.Lakukan_Pengkajian_Ulang_Check === '1', val?.records[12]?.TTD_Perawat),
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
