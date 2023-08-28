import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfGeneralConsentRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Alamat': string,
    'wali.Nama': string,
    Nama_Pasien_Wali: string,
    Alamat_Pasien_Wali: string,
    Telepon_Pasien_Wali: string,
    doctor_treatment: string,
    doctor_on_duty: string,
    payment: string,
    other: string,
    Nama_Petugas: string,
    signature_date: string,
    array_forbidden_name: string,
    visitable: string,

    Tanda_Tangan_Pasien_Wali: string,
    Tanda_Tangan_Petugas: string,
    nik: string,
  }
}

export class PdfGeneralConsentRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string,
    'pasien.Alamat': string,
    'wali.Nama': string,
    Nama_Pasien_Wali: string,
    Alamat_Pasien_Wali: string,
    Telepon_Pasien_Wali: string,
    doctor_treatment: string,
    doctor_on_duty: string,
    payment: string,
    other: string,
    Nama_Petugas: string,
    signature_date: string,
    array_forbidden_name: string,
    visitable: string,

    Tanda_Tangan_Pasien_Wali: string,
    Tanda_Tangan_Petugas: string,
    nik: string,
  }

  constructor(req: IPdfGeneralConsentRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfGeneralConsentRequest) {
    return new PdfGeneralConsentRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfGeneralConsentRequest {
    return new PdfGeneralConsentRequest({
      emr_id: emrId,
      form_name: 'informasi_general-consent_v3',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Alamat': val?.pasien?.Alamat ?? '',
        'wali.Nama': val?.wali?.Nama ?? '',
        Nama_Pasien_Wali: val?.form?.Tanda_Tangan_Nama ?? '',
        Alamat_Pasien_Wali: val?.form?.Tanda_Tangan_Alamat ?? '',
        Telepon_Pasien_Wali: val?.form?.Tanda_Tangan_Telepon ?? '',
        doctor_treatment: val?.form?.Nama_Dokter_Rawat ?? '',
        doctor_on_duty: val?.form?.Nama_Dokter_Jaga ?? '',
        payment: val?.form?.Tipe_Pembayaran ?? '',
        other: val?.form?.Pelepasan_Lain ?? '',
        Nama_Petugas: val?.form?.Nama_Saksi ?? '',
        signature_date: DateTimeConverter.convertToNormalDate(val?.form?.Tanggal_TTD),
        array_forbidden_name: Array.isArray(val?.form?.Nama_Tidak_Diizinkan) ? val?.form?.Nama_Tidak_Diizinkan.toString() : '',
        visitable: val && val.form && val.form.Bersedia_Dikunjung && val.form.Bersedia_Dikunjung === 1 ? 'mengizinkan' : 'tidak mengizinkan',

        Tanda_Tangan_Pasien_Wali: (val?.form?.TTD_Pasien !== '') ? val?.form?.TTD_Pasien : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        Tanda_Tangan_Petugas: (val?.form?.TTD_Saksi !== '') ? val?.form?.TTD_Saksi : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
