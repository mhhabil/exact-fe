import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfRetinaOctResultRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Jenis_Kelamin': string,
    'pasien.Umur': string,
    tanggal: string,
    od_intraretinal_text: string,
    os_intraretinal_text: string,
    od_choroid: string,
    os_choroid: string,
    od_central_macular: string,
    os_central_macular: string,
    od_lain_lain: string,
    os_lain_lain: string,
    kesimpulan: string,
    nama_perawat: string,
    nama_dokter: string,

    od_vitreoretinal_1: string,
    od_vitreoretinal_2: string,
    od_foveal_1: string,
    od_foveal_2: string,
    od_intraretinal_1: string,
    od_intraretinal_2: string,
    od_intraretinal_3: string,
    od_intraretinal_4: string,
    od_intraretinal_5: string,
    od_rpe_1: string,
    od_rpe_2: string,
    od_rpe_3: string,
    os_vitreoretinal_1: string,
    os_vitreoretinal_2: string,
    os_foveal_1: string,
    os_foveal_2: string,
    os_intraretinal_1: string,
    os_intraretinal_2: string,
    os_intraretinal_3: string,
    os_intraretinal_4: string,
    os_intraretinal_5: string,
    os_rpe_1: string,
    os_rpe_2: string,
    os_rpe_3: string,
    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }
}

export class PdfRetinaOctResultRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Jenis_Kelamin': string,
    'pasien.Umur': string,
    tanggal: string,
    od_intraretinal_text: string,
    os_intraretinal_text: string,
    od_choroid: string,
    os_choroid: string,
    od_central_macular: string,
    os_central_macular: string,
    od_lain_lain: string,
    os_lain_lain: string,
    kesimpulan: string,
    nama_perawat: string,
    nama_dokter: string,

    od_vitreoretinal_1: string,
    od_vitreoretinal_2: string,
    od_foveal_1: string,
    od_foveal_2: string,
    od_intraretinal_1: string,
    od_intraretinal_2: string,
    od_intraretinal_3: string,
    od_intraretinal_4: string,
    od_intraretinal_5: string,
    od_rpe_1: string,
    od_rpe_2: string,
    od_rpe_3: string,
    os_vitreoretinal_1: string,
    os_vitreoretinal_2: string,
    os_foveal_1: string,
    os_foveal_2: string,
    os_intraretinal_1: string,
    os_intraretinal_2: string,
    os_intraretinal_3: string,
    os_intraretinal_4: string,
    os_intraretinal_5: string,
    os_rpe_1: string,
    os_rpe_2: string,
    os_rpe_3: string,
    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }

  constructor(req: IPdfRetinaOctResultRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfRetinaOctResultRequest) {
    return new PdfRetinaOctResultRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfRetinaOctResultRequest {
    return new PdfRetinaOctResultRequest({
      emr_id: emrId,
      form_name: 'laporan-hasil-oct-retina',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        tanggal: DateTimeConverter.convertToNormalDate(val?.form?.TTD_Tanggal ?? '   ').split(' ')[0],
        od_intraretinal_text: val?.form?.Od_Intraretinal_Text ?? '',
        os_intraretinal_text: val?.form?.Os_Intraretinal_Text ?? '',
        od_choroid: val?.form?.Od_Choroid ?? '',
        os_choroid: val?.form?.Os_Choroid ?? '',
        od_central_macular: val?.form?.Od_Central_Macular ?? '',
        os_central_macular: val?.form?.Os_Central_Macular ?? '',
        od_lain_lain: val?.form?.Od_Lain_Lain ?? '',
        os_lain_lain: val?.form?.Os_Lain_Lain ?? '',
        kesimpulan: val?.form?.Kesimpulan_Opt === 'ODS DBN' ? val?.form?.Kesimpulan_Opt : val?.form?.Kesimpulan,
        nama_perawat: val?.form?.Perawat_Pemeriksa_Nama ?? '',
        nama_dokter: val?.form?.Dokter_Pemeriksa_Nama ?? '',

        od_vitreoretinal_1: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Vitreoretinal === '1'),
        od_vitreoretinal_2: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Vitreoretinal === '2'),
        od_foveal_1: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Foveal === '1'),
        od_foveal_2: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Foveal === '2'),
        od_intraretinal_1: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Intraretinal === '1'),
        od_intraretinal_2: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Intraretinal === '2'),
        od_intraretinal_3: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Intraretinal === '3'),
        od_intraretinal_4: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Intraretinal === '4'),
        od_intraretinal_5: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Intraretinal === '5'),
        od_rpe_1: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Rpe === '1'),
        od_rpe_2: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Rpe === '2'),
        od_rpe_3: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Od_Rpe === '3'),
        os_vitreoretinal_1: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Vitreoretinal === '1'),
        os_vitreoretinal_2: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Vitreoretinal === '2'),
        os_foveal_1: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Foveal === '1'),
        os_foveal_2: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Foveal === '2'),
        os_intraretinal_1: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Intraretinal === '1'),
        os_intraretinal_2: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Intraretinal === '2'),
        os_intraretinal_3: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Intraretinal === '3'),
        os_intraretinal_4: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Intraretinal === '4'),
        os_intraretinal_5: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Intraretinal === '5'),
        os_rpe_1: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Rpe === '1'),
        os_rpe_2: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Rpe === '2'),
        os_rpe_3: PdfRetinaOctResultRequest.getCheckImage(val?.form?.Os_Rpe === '3'),

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
