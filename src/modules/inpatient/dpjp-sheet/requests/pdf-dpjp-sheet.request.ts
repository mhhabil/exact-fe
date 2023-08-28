import {
  CreatePDFRequest,
  ICreatePDFRequest,
} from "@shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";

export interface IPdfDpjpSheetRequest extends ICreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  diagnosa_medis: string;
  kategori_pasien: string;
  dpjp_utama : string;
  dokter_ppds : string;
  dokter_ruangan: string;
  dpjp1: string;
  dpjp2: string;
  dpjp3: string;
  dpjp4: string;
  tanggal_rawat_1: string;
  tanggal_rawat_2: string;
  tanggal_rawat_3: string;
  tanggal_rawat_4: string;
  tanggal_berobat: string;
  dpjp_peralihan: string;
  tanggal_peralihan: string;
  alasan_peralihan: string;
  peralihan_dpjp_utama: string;
  ttd_dokter_ppds: string;
  ttd_dpjp_utama: string;
  ttd_dpjp_peralihan: string;
  ttd_dokter_ruangan: string;
  nik: string;
  };
}

export class PdfDpjpSheetRequest extends CreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  diagnosa_medis: string;
  kategori_pasien: string;
  dpjp_utama : string;
  dokter_ppds : string;
  dokter_ruangan: string;
  dpjp1: string;
  dpjp2: string;
  dpjp3: string;
  dpjp4: string;
  tanggal_rawat_1: string;
  tanggal_rawat_2: string;
  tanggal_rawat_3: string;
  tanggal_rawat_4: string;
  tanggal_berobat: string;
  dpjp_peralihan: string;
  tanggal_peralihan: string;
  alasan_peralihan: string;
  peralihan_dpjp_utama: string;
  ttd_dokter_ppds: string;
  ttd_dpjp_utama: string;
  ttd_dpjp_peralihan: string;
  ttd_dokter_ruangan: string;
  nik: string,
  };

  constructor(req: IPdfDpjpSheetRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfDpjpSheetRequest) {
    return new PdfDpjpSheetRequest(json);
  }

  static createPdfRequest(val: any, appReq: IAppRequest): PdfDpjpSheetRequest {

    const formatDate = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
      return dateFormat;
    }

    const formatDateIndo = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
      return dateFormat;
    }


    return new PdfDpjpSheetRequest({
      emr_id: appReq.emr_id,
      form_name: 'rawat-inap_lembar-dpjp',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': formatDateIndo(val?.pasien?.Tgl_Lahir),
        'pasien.Alamat': val?.pasien?.Alamat ?? '',
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        diagnosa_medis: val?.form?.Pasien_Diagnosis ?? '',
        kategori_pasien: val?.form?.Pasien_Kategori ?? '',
        dpjp_utama : val?.form?.Dokter_Dpjp_Utama_Nama ?? '',
        dokter_ppds : val?.form?.Dokter_Ppds_Nama ?? '',
        dokter_ruangan: val?.form?.Dokter_Ruangan_Nama ?? '',
        dpjp1: val?.form?.Dokter_Dpjp_1_Nama ?? '',
        dpjp2: val?.form?.Dokter_Dpjp_2_Nama ?? '',
        dpjp3: val?.form?.Dokter_Dpjp_3_Nama ?? '',
        dpjp4: val?.form?.Dokter_Dpjp_4_Nama ?? '',
        tanggal_rawat_1: formatDateIndo(val?.form?.Tanggal_Rawat_1 ?? ''),
        tanggal_rawat_2: formatDateIndo(val?.form?.Tanggal_Rawat_2 ?? ''),
        tanggal_rawat_3: formatDateIndo(val?.form?.Tanggal_Rawat_3 ?? ''),
        tanggal_rawat_4: formatDateIndo(val?.form?.Tanggal_Rawat_4 ?? ''),
        tanggal_berobat: formatDate(appReq.tanggal_berobat ?? ''),
        dpjp_peralihan: val?.form?.Dokter_Dpjp_Peralihan_Nama ?? '',
        tanggal_peralihan: formatDateIndo(val?.form?.Tanggal_Peralihan ?? ''),
        alasan_peralihan: val?.form?.Alasan_Peralihan ?? '',
        peralihan_dpjp_utama: val?.form?.Peralihan_Dpjp ?? '',
        ttd_dokter_ppds: (val?.form?.TTD_Dokter_Ppds !== '') ? val?.form?.TTD_Dokter_Ppds : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dpjp_utama: (val?.form?.TTD_Dokter_Utama !== '') ? val?.form?.TTD_Dokter_Utama : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dpjp_peralihan: (val?.form?.TTD_Dokter_Peralihan !== '') ? val?.form?.TTD_Dokter_Peralihan : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dokter_ruangan: (val?.form?.TTD_Dokter_Ruangan !== '') ? val?.form?.TTD_Dokter_Ruangan : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
