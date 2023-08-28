import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';
import { get } from 'sortablejs';

export interface IPdfPupilOctResultRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'ttd-tanggal': string,
    'pasien.Jenis_Kelamin': string;
    rnfl_normal_od: string,
    rnfl_menipis_od: string,
    rnfl_menebal_od: string,
    cd_normal_od: string,
    cd_darinormal_od: string,
    rnfl_normal_os: string,
    rnfl_menipis_os: string,
    rnfl_menebal_os: string,
    cd_normal_os: string,
    cd_darinormal_os: string,
    kesimpulan: string,
    nama_dokter: string,
    nama_perawat: string,

    rnfl_normal_OD: string,
    rnfl_menipis_OD: string,
    rnfl_menebal_OD: string,
    cd_normal_OD: string,
    cd_darinormal_OD: string,
    rnfl_normal_OS: string,
    rnfl_menipis_OS: string,
    rnfl_menebal_OS: string,
    cd_normal_OS: string,
    cd_darinormal_OS: string,
    Tanda_Tangan_Dokter: string,
    Tanda_Tangan_Perawat: string,
    lampiran: any,
    nik: string,
  }
}

export class PdfPupilOctResultRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'ttd-tanggal': string,
    'pasien.Jenis_Kelamin': string;
    rnfl_normal_od: string,
    rnfl_menipis_od: string,
    rnfl_menebal_od: string,
    cd_normal_od: string,
    cd_darinormal_od: string,
    rnfl_normal_os: string,
    rnfl_menipis_os: string,
    rnfl_menebal_os: string,
    cd_normal_os: string,
    cd_darinormal_os: string,
    kesimpulan: string,
    nama_dokter: string,
    nama_perawat: string,

    rnfl_normal_OD: string,
    rnfl_menipis_OD: string,
    rnfl_menebal_OD: string,
    cd_normal_OD: string,
    cd_darinormal_OD: string,
    rnfl_normal_OS: string,
    rnfl_menipis_OS: string,
    rnfl_menebal_OS: string,
    cd_normal_OS: string,
    cd_darinormal_OS: string,
    Tanda_Tangan_Dokter: string,
    Tanda_Tangan_Perawat: string,
    lampiran: any,
    nik: string,
  }

  constructor(req: IPdfPupilOctResultRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfPupilOctResultRequest) {
    return new PdfPupilOctResultRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfPupilOctResultRequest {

    const getKesimpulan = (kesimpulanOpt: string, kesimpulanText: string) => {
      if (kesimpulanOpt === 'Lain-lain') {
        return kesimpulanText;
      } else {
        return kesimpulanOpt;
      }
    }

    return new PdfPupilOctResultRequest({
      emr_id: emrId,
      form_name: 'laporan-hasil-oct-glaukoma',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'ttd-tanggal': DateTimeConverter.convertToNormalDate(val?.form?.TTD_Tanggal),
        'pasien.Jenis_Kelamin': val?.form?.Jenis_Kelamin ?? '',
        rnfl_normal_od: val?.form?.Od_Rnfl_Normal_Text ?? '',
        rnfl_menipis_od: val?.form?.Od_Rnfl_Menipis_Text ?? '',
        rnfl_menebal_od: val?.form?.Od_Rnfl_Menebal_Text ?? '',
        cd_normal_od: val?.form?.Od_Cd_Vertical_Normal_Text ?? '',
        cd_darinormal_od: val?.form?.Od_Cd_Vertical_Upnormal_Text ?? '',
        rnfl_normal_os: val?.form?.Os_Rnfl_Normal_Text ?? '',
        rnfl_menipis_os: val?.form?.Os_Rnfl_Menipis_Text ?? '',
        rnfl_menebal_os: val?.form?.Os_Rnfl_Menebal_Text ?? '',
        cd_normal_os: val?.form?.Os_Cd_Vertical_Normal_Text ?? '',
        cd_darinormal_os: val?.form?.Os_Cd_Vertical_Upnormal_Text ?? '',
        kesimpulan: getKesimpulan(val?.form?.Kesimpulan_Opt, val?.form?.Kesimpulan),
        nama_dokter: val?.form?.Dokter_Pemeriksa_Nama ?? '',
        nama_perawat: val?.form?.Perawat_Pemeriksa_Nama ?? '',

        rnfl_normal_OD: PdfPupilOctResultRequest.getCheckImage(val?.form?.Od_Rnfl === '1'),
        rnfl_menipis_OD: PdfPupilOctResultRequest.getCheckImage(val?.form?.Od_Rnfl === '2'),
        rnfl_menebal_OD: PdfPupilOctResultRequest.getCheckImage(val?.form?.Od_Rnfl === '3'),
        cd_normal_OD: PdfPupilOctResultRequest.getCheckImage(val?.form?.Od_Rnfl === '1'),
        cd_darinormal_OD: PdfPupilOctResultRequest.getCheckImage(val?.form?.Od_Rnfl === '2'),
        rnfl_normal_OS: PdfPupilOctResultRequest.getCheckImage(val?.form?.Os_Rnfl === '1'),
        rnfl_menipis_OS: PdfPupilOctResultRequest.getCheckImage(val?.form?.Os_Rnfl === '2'),
        rnfl_menebal_OS: PdfPupilOctResultRequest.getCheckImage(val?.form?.Os_Rnfl === '3'),
        cd_normal_OS: PdfPupilOctResultRequest.getCheckImage(val?.form?.Os_Rnfl === '1'),
        cd_darinormal_OS: PdfPupilOctResultRequest.getCheckImage(val?.form?.Os_Rnfl === '2'),

        Tanda_Tangan_Dokter: val?.form?.TTD_Dokter_Pemeriksa ?? undefined,
        Tanda_Tangan_Perawat: val?.form?.TTD_Perawat_Pemeriksa ?? undefined,
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
