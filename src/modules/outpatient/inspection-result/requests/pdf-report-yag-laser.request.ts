import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfReportYagLaserRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    keterangan: string;
    dokter_operator: string,
    tgl_tindakan: string,
    diagnosa: string,
    lama_tindakan: string,
    tanggal_fako: string,
    power_laser: string,
    jumlah_laser: string,
    lain_lain: string,
    tetes_1: string,
    tetes_2: string,
    tetes_3: string,
    tetes_4: string,
    tetes_5: string,
    nama_perawat: string,
    nama_dokter: string,

    mata_kanan: string,
    mata_kiri: string,
    pantocain_ya: string,
    pantocain_tidak: string,
    mydriatil_ya: string,
    mydriatil_tidak: string,

    MataOD: string,
    MataOS: string,
    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }
}

export class PdfReportYagLaserRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    keterangan: string;
    dokter_operator: string,
    tgl_tindakan: string,
    diagnosa: string,
    lama_tindakan: string,
    tanggal_fako: string,
    power_laser: string,
    jumlah_laser: string,
    lain_lain: string,
    tetes_1: string,
    tetes_2: string,
    tetes_3: string,
    tetes_4: string,
    tetes_5: string,
    nama_perawat: string,
    nama_dokter: string,

    mata_kanan: string,
    mata_kiri: string,
    pantocain_ya: string,
    pantocain_tidak: string,
    mydriatil_ya: string,
    mydriatil_tidak: string,

    MataOD: string,
    MataOS: string,
    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }

  constructor(req: IPdfReportYagLaserRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfReportYagLaserRequest) {
    return new PdfReportYagLaserRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfReportYagLaserRequest {
    return new PdfReportYagLaserRequest({
      emr_id: emrId,
      form_name: 'laporan-tindakan-yag-laser',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        dokter_operator: val?.form?.Dokter_Nama ?? '',
        tgl_tindakan: DateTimeConverter.convertToDateTime(val?.form?.Tanggal_Tindakan),
        diagnosa: val?.form?.Diagnosa_Pra_Tindakan ?? '',
        lama_tindakan: val?.form?.Lama_Tindakan ?? '',
        tanggal_fako: DateTimeConverter.convertToDateTime(val?.form?.Tanggal_Fakoemulsifikasi),
        power_laser: val?.form?.Power_Laser ?? '',
        jumlah_laser: val?.form?.Jumlah_Laser ?? '',
        lain_lain: val?.form?.Lain_Lain ?? '',
        tetes_1: PdfReportYagLaserRequest.getCheckImage(val?.form?.Pasien_Ditetes?.Lfx === 1),
        tetes_2: PdfReportYagLaserRequest.getCheckImage(val?.form?.Pasien_Ditetes?.Floxa === 1),
        tetes_3: PdfReportYagLaserRequest.getCheckImage(val?.form?.Pasien_Ditetes?.Noncort_Eye_Drop === 1),
        tetes_4: PdfReportYagLaserRequest.getCheckImage(val?.form?.Pasien_Ditetes?.Timol === 1),
        tetes_5: PdfReportYagLaserRequest.getCheckImage(val?.form?.Pasien_Ditetes?.Tonor === 1),
        nama_perawat: val?.form?.Nama_TTD_Perawat_Rawat_Jalan ?? '',
        nama_dokter: val?.form?.Nama_TTD_Dokter_Operator ?? '',
        keterangan: val?.form?.Keterangan ?? '',

        mata_kanan: PdfReportYagLaserRequest.getCheckImage(val?.form?.Mata?.Kanan === 1),
        mata_kiri: PdfReportYagLaserRequest.getCheckImage(val?.form?.Mata?.Kiri === 1),
        pantocain_ya: PdfReportYagLaserRequest.getCheckImage(val?.form?.Mata_Pasien_Ditetes?.Pantocain === 1),
        pantocain_tidak: PdfReportYagLaserRequest.getCheckImage(val?.form?.Mata_Pasien_Ditetes?.Pantocain === 0),
        mydriatil_ya: PdfReportYagLaserRequest.getCheckImage(val?.form?.Mata_Pasien_Ditetes?.Mydriatil === 1),
        mydriatil_tidak: PdfReportYagLaserRequest.getCheckImage(val?.form?.Mata_Pasien_Ditetes?.Mydriatil === 0),

        MataOD: val.form && val.form.Gambar_Mata_OD && val.form.Gambar_Mata_OD !== '' ? val.form.Gambar_Mata_OD : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
        MataOS: val.form && val.form.Gambar_Mata_OS && val.form.Gambar_Mata_OS !== '' ? val.form.Gambar_Mata_OS : 'https://bucket.rsmatasmec.com/eye-clean.jpeg',
        Tanda_Tangan_Perawat: val?.form?.TTD_Perawat_Rawat_Jalan ?? undefined,
        Tanda_Tangan_Dokter: val?.form?.TTD_Dokter_Operator ?? undefined,
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
