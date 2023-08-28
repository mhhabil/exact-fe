import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfFallRiskAssessmentRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    preliminary_date: string,
    action_date: string,
    result_text_tidak_berisiko: string,
    result_text_risiko_rendah: string,
    result_text_risiko_tinggi: string,

    unbalanced_radio_true: string,
    unbalanced_radio_false: string,
    auxiliary_radio_true: string,
    auxiliary_radio_false: string,
    support_radio_true: string,
    support_radio_false: string,
    no_risk_radio_true: string,
    no_risk_radio_false: string,
    low_education_radio_true: string,
    low_education_radio_false: string,
    high_yellow_radio_true: string,
    high_yellow_radio_false: string,
    high_education_radio_true: string,
    high_education_radio_false: string,
    Tanda_Tangan_Petugas: string,
    nama_petugas: string,
    nik: string,
  }
}

export class PdfFallRiskAssessmentRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    preliminary_date: string,
    action_date: string,
    result_text_tidak_berisiko: string,
    result_text_risiko_rendah: string,
    result_text_risiko_tinggi: string,

    unbalanced_radio_true: string,
    unbalanced_radio_false: string,
    auxiliary_radio_true: string,
    auxiliary_radio_false: string,
    support_radio_true: string,
    support_radio_false: string,
    no_risk_radio_true: string,
    no_risk_radio_false: string,
    low_education_radio_true: string,
    low_education_radio_false: string,
    high_yellow_radio_true: string,
    high_yellow_radio_false: string,
    high_education_radio_true: string,
    high_education_radio_false: string,
    Tanda_Tangan_Petugas: string,
    nama_petugas: string,
    nik: string,
  }

  constructor(req: IPdfFallRiskAssessmentRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfFallRiskAssessmentRequest) {
    return new PdfFallRiskAssessmentRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfFallRiskAssessmentRequest {
    return new PdfFallRiskAssessmentRequest({
      emr_id: emrId,
      form_name: 'informasi_risiko-jatuh_v3',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        preliminary_date: DateTimeConverter.convertToDateTime(val?.form?.Tanggal_Pengkaji),
        action_date: DateTimeConverter.convertToDateTime(val?.form?.Tanggal_Tindakan),
        result_text_tidak_berisiko: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Hasil_Teks === 'Tidak Berisiko'),
        result_text_risiko_rendah: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Hasil_Teks === 'Risiko Rendah'),
        result_text_risiko_tinggi: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Hasil_Teks === 'Risiko Tinggi'),

        unbalanced_radio_true: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Berjalan_Tidak_Seimbang === 1),
        unbalanced_radio_false: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Berjalan_Tidak_Seimbang === 0),
        auxiliary_radio_true: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Berjalan_Alat_Bantu === 1),
        auxiliary_radio_false: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Berjalan_Alat_Bantu === 0),
        support_radio_true: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Menopang === 1),
        support_radio_false: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Menopang === 0),
        no_risk_radio_true: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Tindakan_Tidak_Ada_Berisiko === 1),
        no_risk_radio_false: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Tindakan_Tidak_Ada_Berisiko === 0),
        low_education_radio_true: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Tindakan_Rendah_Edukasi === 1),
        low_education_radio_false: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Tindakan_Rendah_Edukasi === 0),
        high_yellow_radio_true: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Tindakan_Tinggi_Pasang_Stiker === 1),
        high_yellow_radio_false: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Tindakan_Tinggi_Pasang_Stiker === 0),
        high_education_radio_true: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Tindakan_Tinggi_Edukasi === 1),
        high_education_radio_false: PdfFallRiskAssessmentRequest.getCheckImage(val?.form?.Tindakan_Tinggi_Edukasi === 0),
        Tanda_Tangan_Petugas: (val?.form?.Tanda_Tangan !== '') ? val?.form?.Tanda_Tangan : undefined,
        nama_petugas: val?.form?.Nama_Tanda_Tangan ?? '',
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
