import { DateTimeConverter } from "@src/shared/datetime-converter";
import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";

export interface IPdfCheckSchirmerTestRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    tanggal: string;
    od_test: string;
    os_test: string;
    kesimpulan: string;
    Tanda_Tangan_Perawat: string;
    Tanda_Tangan_Dokter: string;
    nama_perawat: string;
    nama_dokter: string;
    lampiran: any;
    nik: string;
  }
}

export class PdfCheckSchirmerTestRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    tanggal: string;
    od_test: string;
    os_test: string;
    kesimpulan: string;
    Tanda_Tangan_Perawat: string;
    nama_perawat: string;
    Tanda_Tangan_Dokter: string;
    nama_dokter: string;
    lampiran: any;
    nik: string;
  }

  constructor(req: IPdfCheckSchirmerTestRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfCheckSchirmerTestRequest) {
    return new PdfCheckSchirmerTestRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfCheckSchirmerTestRequest {
    return new PdfCheckSchirmerTestRequest({
      emr_id: emrId,
      form_name: 'laporan-schirmer-test',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        tanggal: DateTimeConverter.convertToNormalDate(val?.form?.Tanggal),
        od_test: val?.form?.OD ?? '',
        os_test: val?.form?.OS ?? '',
        kesimpulan: val?.form?.Kesimpulan ?? '',
        Tanda_Tangan_Perawat: val?.form?.TTD_Perawat ?? undefined,
        nama_perawat: val?.form?.Nama_Perawat ?? '',
        Tanda_Tangan_Dokter: val?.form?.TTD_Dokter_Pemeriksa ?? undefined,
        nama_dokter: val?.form?.Nama_Dokter_Pemeriksa ?? '',
        nik: val?.pasien?.NIK ?? '',
        lampiran: Array.isArray(val?.dicoms) ? val?.dicoms.map((dicoms: any, i: number) => {
          return {
            gambar_lampiran: (dicoms.Thumbnail !== '') ? dicoms.Thumbnail : undefined,
          }
        }) : [],
      },
    })
  }
}
