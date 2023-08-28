import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfVisualFieldResultRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'ttd-tanggal': string,
    'pasien.Jenis_Kelamin': string,
    kesimpulan: string,
    anjuran: string,
    Nama_Dokter: string,
    nama_perawat: string,

    od_parameter_1: string,
    od_parameter_2: string,
    od_reliabilitas: string,
    od_reliabilitas_2: string,
    od_defek: string,
    od_defek_1: string,
    od_defek_2: string,
    od_defek_3: string,
    od_tendensi_defek: string,
    od_tendensi_defek_1: string,
    od_severitas_defek: string,
    od_severitas_defek_1: string,
    od_severitas_defek_2: string,
    os_parameter_1: string,
    os_parameter_2: string,
    os_reliabilitas: string,
    os_reliabilitas_2: string,
    os_defek: string,
    os_defek_1: string,
    os_defek_2: string,
    os_defek_3: string,
    os_tendensi_defek: string,
    os_tendensi_defek_1: string,
    os_severitas_defek: string,
    os_severitas_defek_1: string,
    os_severitas_defek_2: string,

    pemeriksaan_rutin_1: string,
    pemeriksaan_rutin_2: string,
    pemeriksaan_rutin_3: string,
    Tanda_Tangan_Dokter: string,
    Tanda_Tangan_Perawat: string,
    lampiran: any,
    nik: string,
  }
}

export class PdfVisualFieldResultRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'ttd-tanggal': string,
    'pasien.Jenis_Kelamin': string,
    kesimpulan: string,
    anjuran: string,
    Nama_Dokter: string,
    nama_perawat: string,

    od_parameter_1: string,
    od_parameter_2: string,
    od_reliabilitas: string,
    od_reliabilitas_2: string,
    od_defek: string,
    od_defek_1: string,
    od_defek_2: string,
    od_defek_3: string,
    od_tendensi_defek: string,
    od_tendensi_defek_1: string,
    od_severitas_defek: string,
    od_severitas_defek_1: string,
    od_severitas_defek_2: string,
    os_parameter_1: string,
    os_parameter_2: string,
    os_reliabilitas: string,
    os_reliabilitas_2: string,
    os_defek: string,
    os_defek_1: string,
    os_defek_2: string,
    os_defek_3: string,
    os_tendensi_defek: string,
    os_tendensi_defek_1: string,
    os_severitas_defek: string,
    os_severitas_defek_1: string,
    os_severitas_defek_2: string,

    pemeriksaan_rutin_1: string,
    pemeriksaan_rutin_2: string,
    pemeriksaan_rutin_3: string,
    Tanda_Tangan_Dokter: string,
    Tanda_Tangan_Perawat: string,
    lampiran: any,
    nik: string,
  }

  constructor(req: IPdfVisualFieldResultRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfVisualFieldResultRequest) {
    return new PdfVisualFieldResultRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfVisualFieldResultRequest {
    return new PdfVisualFieldResultRequest({
      emr_id: emrId,
      form_name: 'laporan-hasil-lapangan-pandang',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'ttd-tanggal': DateTimeConverter.convertToNormalDate(val?.form?.TTD_Tanggal),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        kesimpulan: val?.form?.Kesimpulan ?? '',
        anjuran: val?.form?.Anjuran ?? '',
        Nama_Dokter: val?.form?.Dokter_Pemeriksa_Nama ?? '',
        nama_perawat: val?.form?.Perawat_Pemeriksa_Nama ?? '',

        od_parameter_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Parameter === '1'),
        od_parameter_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Parameter === '2'),
        od_reliabilitas: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Reliabilitas === '1'),
        od_reliabilitas_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Reliabilitas === '2'),
        od_defek: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Defek === '1'),
        od_defek_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Defek === '2'),
        od_defek_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Defek === '3'),
        od_defek_3: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Defek === '4'),
        od_tendensi_defek: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Tendensi_Defek === '1'),
        od_tendensi_defek_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Tendensi_Defek === '2'),
        od_severitas_defek: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Severitas_Defek === '1'),
        od_severitas_defek_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Severitas_Defek === '2'),
        od_severitas_defek_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Od_Severitas_Defek === '3'),
        os_parameter_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Parameter === '1'),
        os_parameter_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Parameter === '2'),
        os_reliabilitas: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Reliabilitas === '1'),
        os_reliabilitas_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Reliabilitas === '2'),
        os_defek: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Defek === '1'),
        os_defek_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Defek === '2'),
        os_defek_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Defek === '3'),
        os_defek_3: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Defek === '4'),
        os_tendensi_defek: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Tendensi_Defek === '1'),
        os_tendensi_defek_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Tendensi_Defek === '2'),
        os_severitas_defek: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Severitas_Defek === '1'),
        os_severitas_defek_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Severitas_Defek === '2'),
        os_severitas_defek_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Os_Severitas_Defek === '3'),

        pemeriksaan_rutin_1: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Pemeriksaan_Rutin === '1'),
        pemeriksaan_rutin_2: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Pemeriksaan_Rutin === '2'),
        pemeriksaan_rutin_3: PdfVisualFieldResultRequest.getCheckImage(val?.form?.Pemeriksaan_Rutin === '3'),

        Tanda_Tangan_Dokter: val?.form?.TTD_Dokter_Pemeriksa ?? undefined,
        Tanda_Tangan_Perawat: val?.form?.TTD_Perawat_Pemeriksa ?? undefined,
        nik:  val?.pasien?.NIK ?? '',
        lampiran: Array.isArray(val?.dicoms) ? val?.dicoms.map((dicoms: any, i: number) => {
          return {
            gambar_lampiran: (dicoms.Thumbnail !== '') ? dicoms.Thumbnail : undefined,
          }
        }) : [],
      },
    })
  }
}
