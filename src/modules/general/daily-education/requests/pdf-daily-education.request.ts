import { CreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface IPdfDailyEducationItemRequest {
  tanggal: string,
  uraian: string,
  namaPetugas: string,
  namaPasienWali: string,
  ttdPetugas?: string,
  ttdPasienWali?: string,
}

export class PdfDailyEducationItemRequest {
  tanggal: string;
  uraian: string;
  namaPetugas: string;
  namaPasienWali: string;
  ttdPetugas?: string;
  ttdPasienWali?: string;

  constructor(req: IPdfDailyEducationItemRequest) {
    this.tanggal = req.tanggal;
    this.uraian = req.uraian;
    this.namaPetugas = req.namaPetugas;
    this.namaPasienWali = req.namaPasienWali;
    this.ttdPetugas = req.ttdPetugas;
    this.ttdPasienWali = req.ttdPasienWali;
  }

  static createFromJson(json: IPdfDailyEducationItemRequest) {
    return new PdfDailyEducationItemRequest(json);
  }
}

export interface IPdfDailyEducationRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    nik: string;
    items: Array<IPdfDailyEducationItemRequest>,
  };
}

export class PdfDailyEducationRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    nik: string;
    items: Array<PdfDailyEducationItemRequest>,
  };

  constructor(req: IPdfDailyEducationRequest) {
    this.emr_id = req.emr_id;
    this.form_name = req.form_name;
    this.row_filter = req.row_filter;
    this.preview = req.preview;
    this.data = req.data;
  }

  static createFromJson(json: IPdfDailyEducationRequest) {
    return new PdfDailyEducationRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): IPdfDailyEducationRequest {
    return {
      emr_id: emrId,
      form_name: 'informasi_edukasi-harian_v3',
      row_filter: "",
      preview: false,
      data: {
        nomor_mr: val?.pasien?.No_MR ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': CreatePDFRequest.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        nik: val?.pasien?.NIK ?? '',
        items: (Array.isArray(val?.records)) ? val?.records.map((row: any) => new PdfDailyEducationItemRequest({
          tanggal: DateTimeConverter.convertToDateTime(row?.Waktu),
          uraian: row?.Uraian ?? '',
          namaPetugas: row?.Nama_Pemberi_Edukasi ?? '',
          namaPasienWali: row?.Nama ?? '',
          ttdPetugas: (row?.TTD_Pemberi_Edukasi && row?.TTD_Pemberi_Edukasi !== '') ? row?.TTD_Pemberi_Edukasi : undefined,
          ttdPasienWali: (row?.Tanda_Tangan && row?.Tanda_Tangan !== '') ? row?.Tanda_Tangan : undefined,
        })) : [],
      },
    }
  }
}
