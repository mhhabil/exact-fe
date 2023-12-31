import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfFundusPhotoExaminationRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    'ttd-tanggal': string,
    kesimpulan: string,
    Nama_Perawat: string,
    Nama_Dokter: string,

    od_batas_1: string,
    od_batas_2: string,
    od_warna_1: string,
    od_warna_2: string,
    od_warna_3: string,
    od_cupping_1: string,
    od_cupping_2: string,
    od_attach: string,
    od_detach: string,
    od_break_1: string,
    od_break_2: string,
    od_perdarahan_1: string,
    od_perdarahan_2: string,
    od_av_1: string,
    od_av_2: string,
    od_tortov_1: string,
    od_tortov_2: string,
    od_obstruksi_1: string,
    od_obstruksi_2: string,
    od_keruh: string,
    od_jernih: string,
    od_vitreous_1: string,
    od_vitreous_2: string,
    od_pvd_1: string,
    od_pvd_2: string,

    os_batas_1: string,
    os_batas_2: string,
    os_warna_1: string,
    os_warna_2: string,
    os_warna_3: string,
    os_cupping_1: string,
    os_cupping_2: string,
    os_attach: string,
    os_detach: string,
    os_break_1: string,
    os_break_2: string,
    os_perdarahan_1: string,
    os_perdarahan_2: string,
    os_av_1: string,
    os_av_2: string,
    os_tortov_1: string,
    os_tortov_2: string,
    os_obstruksi_1: string,
    os_obstruksi_2: string,
    os_keruh: string,
    os_jernih: string,
    os_vitreous_1: string,
    os_vitreous_2: string,
    os_pvd_1: string,
    os_pvd_2: string,

    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }
}

export class PdfFundusPhotoExaminationRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    'ttd-tanggal': string,
    kesimpulan: string,
    Nama_Perawat: string,
    Nama_Dokter: string,

    od_batas_1: string,
    od_batas_2: string,
    od_warna_1: string,
    od_warna_2: string,
    od_warna_3: string,
    od_cupping_1: string,
    od_cupping_2: string,
    od_attach: string,
    od_detach: string,
    od_break_1: string,
    od_break_2: string,
    od_perdarahan_1: string,
    od_perdarahan_2: string,
    od_av_1: string,
    od_av_2: string,
    od_tortov_1: string,
    od_tortov_2: string,
    od_obstruksi_1: string,
    od_obstruksi_2: string,
    od_keruh: string,
    od_jernih: string,
    od_vitreous_1: string,
    od_vitreous_2: string,
    od_pvd_1: string,
    od_pvd_2: string,

    os_batas_1: string,
    os_batas_2: string,
    os_warna_1: string,
    os_warna_2: string,
    os_warna_3: string,
    os_cupping_1: string,
    os_cupping_2: string,
    os_attach: string,
    os_detach: string,
    os_break_1: string,
    os_break_2: string,
    os_perdarahan_1: string,
    os_perdarahan_2: string,
    os_av_1: string,
    os_av_2: string,
    os_tortov_1: string,
    os_tortov_2: string,
    os_obstruksi_1: string,
    os_obstruksi_2: string,
    os_keruh: string,
    os_jernih: string,
    os_vitreous_1: string,
    os_vitreous_2: string,
    os_pvd_1: string,
    os_pvd_2: string,

    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }

  constructor(req: IPdfFundusPhotoExaminationRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfFundusPhotoExaminationRequest) {
    return new PdfFundusPhotoExaminationRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfFundusPhotoExaminationRequest {
    return new PdfFundusPhotoExaminationRequest({
      emr_id: emrId,
      form_name: 'laporan-hasil-foto-fundus',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        'ttd-tanggal': DateTimeConverter.convertToNormalDate(val?.form?.TTD_Tanggal),
        // nama_pasien_wali: val.form.Penanggung_Jawab === '1' ? treatment?.Pasien?.Nama : val?.form?.Nama_Wali,
        kesimpulan: val?.form?.Kesimpulan_Opt === 'ODS DBN' ? val?.form?.Kesimpulan_Opt : val?.form?.Kesimpulan,
        Nama_Perawat: val?.form?.Perawat_Pemeriksa_Nama ?? '',
        Nama_Dokter: val?.form?.Dokter_Pemeriksa_Nama ?? '',

        od_batas_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Batas === '1'),
        od_batas_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Batas === '2'),
        od_warna_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Warna === '1'),
        od_warna_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Warna === '2'),
        od_warna_3: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Warna === '3'),
        od_cupping_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Cupping === '1'),
        od_cupping_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Cupping === '2'),
        od_attach: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Retina === '1'),
        od_detach: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Retina === '2'),
        od_break_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Break === '1'),
        od_break_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Break === '2'),
        od_perdarahan_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Pendarahan === '1'),
        od_perdarahan_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Pendarahan === '2'),
        od_av_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Av_Crossing === '1'),
        od_av_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Av_Crossing === '2'),
        od_tortov_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Tortovsity === '1'),
        od_tortov_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Tortovsity === '2'),
        od_obstruksi_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Obstruksi === '1'),
        od_obstruksi_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Obstruksi === '2'),
        od_keruh: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Vitreous === '1'),
        od_jernih: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Vitreous === '2'),
        od_vitreous_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Vitreous_Pendarahan === '1'),
        od_vitreous_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Vitreous_Pendarahan === '2'),
        od_pvd_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Pvd === '1'),
        od_pvd_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Od_Pvd === '2'),

        os_batas_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Batas === '1'),
        os_batas_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Batas === '2'),
        os_warna_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Warna === '1'),
        os_warna_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Warna === '2'),
        os_warna_3: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Warna === '3'),
        os_cupping_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Cupping === '1'),
        os_cupping_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Cupping === '2'),
        os_attach: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Retina === '1'),
        os_detach: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Retina === '2'),
        os_break_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Break === '1'),
        os_break_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Break === '2'),
        os_perdarahan_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Pendarahan === '1'),
        os_perdarahan_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Pendarahan === '2'),
        os_av_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Av_Crossing === '1'),
        os_av_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Av_Crossing === '2'),
        os_tortov_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Tortovsity === '1'),
        os_tortov_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Tortovsity === '2'),
        os_obstruksi_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Obstruksi === '1'),
        os_obstruksi_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Obstruksi === '2'),
        os_keruh: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Vitreous === '1'),
        os_jernih: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Vitreous === '2'),
        os_vitreous_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Vitreous_Pendarahan === '1'),
        os_vitreous_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Vitreous_Pendarahan === '2'),
        os_pvd_1: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Pvd === '1'),
        os_pvd_2: PdfFundusPhotoExaminationRequest.getCheckImage(val?.form?.Os_Pvd === '2'),

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
