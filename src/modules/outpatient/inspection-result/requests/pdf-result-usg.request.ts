import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfResultUsgRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    'ttd-tanggal': string,
    od_gain:string,
    od_axl: string,
    od_struktur_bola_mata: string,
    od_lain_lain: string,
    os_gain:string,
    os_axl: string,
    os_struktur_bola_mata: string,
    os_lain_lain: string,
    kesimpulan: string,
    Nama_Perawat: string,
    Nama_Dokter: string,

    od_bentuk_kelainan_1: string,
    od_bentuk_kelainan_2: string,
    od_bentuk_kelainan: string,
    od_lokasi: string,
    od_lokasi_2: string,
    od_perlekatan_1: string,
    od_perlekatan_2: string,
    od_after_movement: string,
    od_after_movement_2: string,
    od_spike_1: string,
    od_spike_2: string,
    od_spike_3: string,
    od_spike_4: string,

    os_bentuk_kelainan_1: string,
    os_bentuk_kelainan_2: string,
    os_bentuk_kelainan: string,
    os_lokasi: string,
    os_lokasi_2: string,
    os_perlekatan_1: string,
    os_perlekatan_2: string,
    os_after_movement: string,
    os_after_movement_2: string,
    os_spike_1: string,
    os_spike_2: string,
    os_spike_3: string,
    os_spike_4: string,

    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }
}

export class PdfResultUsgRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    'ttd-tanggal': string,
    od_gain:string,
    od_axl: string,
    od_struktur_bola_mata: string,
    od_lain_lain: string,
    os_gain:string,
    os_axl: string,
    os_struktur_bola_mata: string,
    os_lain_lain: string,
    kesimpulan: string,
    Nama_Perawat: string,
    Nama_Dokter: string,

    od_bentuk_kelainan_1: string,
    od_bentuk_kelainan_2: string,
    od_bentuk_kelainan: string,
    od_lokasi: string,
    od_lokasi_2: string,
    od_perlekatan_1: string,
    od_perlekatan_2: string,
    od_after_movement: string,
    od_after_movement_2: string,
    od_spike_1: string,
    od_spike_2: string,
    od_spike_3: string,
    od_spike_4: string,

    os_bentuk_kelainan_1: string,
    os_bentuk_kelainan_2: string,
    os_bentuk_kelainan: string,
    os_lokasi: string,
    os_lokasi_2: string,
    os_perlekatan_1: string,
    os_perlekatan_2: string,
    os_after_movement: string,
    os_after_movement_2: string,
    os_spike_1: string,
    os_spike_2: string,
    os_spike_3: string,
    os_spike_4: string,

    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }

  constructor(req: IPdfResultUsgRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfResultUsgRequest) {
    return new PdfResultUsgRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfResultUsgRequest {
    return new PdfResultUsgRequest({
      emr_id: emrId,
      form_name: 'laporan-hasil-usg',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'ttd-tanggal': DateTimeConverter.convertToNormalDate(val?.form?.TTD_Tanggal),
        od_gain:val?.form?.Od_Gain ?? '',
        od_axl: val?.form?.Od_Axl ?? '',
        od_struktur_bola_mata: val?.form?.Od_Struktur_Bola_Mata ?? '',
        od_lain_lain: val?.form?.Od_Lain_Lain ?? '',
        os_gain:val?.form?.Os_Gain ?? '',
        os_axl: val?.form?.Os_Axl ?? '',
        os_struktur_bola_mata: val?.form?.Os_Struktur_Bola_Mata ?? '',
        os_lain_lain: val?.form?.Os_Lain_Lain ?? '',
        kesimpulan: val?.form?.Kesimpulan_Opt === 'ODS DBN' ? val?.form?.Kesimpulan_Opt : val?.form?.Kesimpulan,
        Nama_Perawat: val?.form?.Perawat_Pemeriksa_Nama ?? '',
        Nama_Dokter: val?.form?.Dokter_Pemeriksa_Nama ?? '',

        od_bentuk_kelainan_1: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Bentuk_Kelainan === '1'),
        od_bentuk_kelainan_2: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Bentuk_Kelainan === '2'),
        od_bentuk_kelainan: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Bentuk_Kelainan === '3'),
        od_lokasi: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Lokasi === '1'),
        od_lokasi_2: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Lokasi === '2'),
        od_perlekatan_1: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Perlekatan === '1'),
        od_perlekatan_2: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Perlekatan === '2'),
        od_after_movement: PdfResultUsgRequest.getCheckImage(val?.form?.Od_After_Movement === '1'),
        od_after_movement_2: PdfResultUsgRequest.getCheckImage(val?.form?.Od_After_Movement === '2'),
        od_spike_1: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Spike === '1'),
        od_spike_2: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Spike === '2'),
        od_spike_3: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Spike === '3'),
        od_spike_4: PdfResultUsgRequest.getCheckImage(val?.form?.Od_Spike === '4'),

        os_bentuk_kelainan_1: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Bentuk_Kelainan === '1'),
        os_bentuk_kelainan_2: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Bentuk_Kelainan === '2'),
        os_bentuk_kelainan: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Bentuk_Kelainan === '3'),
        os_lokasi: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Lokasi === '1'),
        os_lokasi_2: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Lokasi === '2'),
        os_perlekatan_1: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Perlekatan === '1'),
        os_perlekatan_2: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Perlekatan === '2'),
        os_after_movement: PdfResultUsgRequest.getCheckImage(val?.form?.Os_After_Movement === '1'),
        os_after_movement_2: PdfResultUsgRequest.getCheckImage(val?.form?.Os_After_Movement === '2'),
        os_spike_1: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Spike === '1'),
        os_spike_2: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Spike === '2'),
        os_spike_3: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Spike === '3'),
        os_spike_4: PdfResultUsgRequest.getCheckImage(val?.form?.Os_Spike === '4'),

        Tanda_Tangan_Perawat: val?.form?.TTD_Perawat_Pemeriksa ?? undefined,
        Tanda_Tangan_Dokter: val?.form?.TTD_Dokter_Pemeriksa ?? undefined,
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
