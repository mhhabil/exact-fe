import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfGlassesPrescriptionRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    sph_right_distance: string,
    cyl_right_distance: string,
    ax_right_distance: string,
    va_right_distance: string,
    sph_left_distance: string,
    cyl_left_distance: string,
    ax_left_distance: string,
    va_left_distance: string,
    pd_distance: string,
    sph_right_reading: string,
    cyl_right_reading: string,
    ax_right_reading: string,
    va_right_reading: string,
    sph_left_reading: string,
    cyl_left_reading: string,
    ax_left_reading: string,
    va_left_reading: string,
    pd_reading: string,
    jenis_pelayanan: string,
    note: string,
    prescription_date: string,
    doctor_name: string,

    signature_doctor: string,
    nik: string,
  }
}

export class PdfGlassesPrescriptionRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    sph_right_distance: string,
    cyl_right_distance: string,
    ax_right_distance: string,
    va_right_distance: string,
    sph_left_distance: string,
    cyl_left_distance: string,
    ax_left_distance: string,
    va_left_distance: string,
    pd_distance: string,
    sph_right_reading: string,
    cyl_right_reading: string,
    ax_right_reading: string,
    va_right_reading: string,
    sph_left_reading: string,
    cyl_left_reading: string,
    ax_left_reading: string,
    va_left_reading: string,
    pd_reading: string,
    jenis_pelayanan: string,
    note: string,
    prescription_date: string,
    doctor_name: string,

    signature_doctor: string,
    nik: string,
  }

  constructor(req: IPdfGlassesPrescriptionRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfGlassesPrescriptionRequest) {
    return new PdfGlassesPrescriptionRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfGlassesPrescriptionRequest {
    return new PdfGlassesPrescriptionRequest({
      emr_id: emrId,
      form_name: 'optik_resep-kacamata_v3',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        sph_right_distance: val?.form?.Right?.Sph?.Distance ?? '',
        cyl_right_distance: val?.form?.Right?.Cyl?.Distance ?? '',
        ax_right_distance: val?.form?.Right?.Ax?.Distance ?? '',
        va_right_distance: val?.form?.Right?.Va?.Distance ?? '',
        sph_left_distance: val?.form?.Left?.Sph?.Distance ?? '',
        cyl_left_distance: val?.form?.Left?.Cyl?.Distance ?? '',
        ax_left_distance: val?.form?.Left?.Ax?.Distance ?? '',
        va_left_distance: val?.form?.Left?.Va?.Distance ?? '',
        pd_distance: val?.form?.PD?.Distance ?? '',
        sph_right_reading: val?.form?.Right?.Sph?.Reading ?? '',
        cyl_right_reading: val?.form?.Right?.Cyl?.Reading ?? '',
        ax_right_reading: val?.form?.Right?.Ax?.Reading ?? '',
        va_right_reading: val?.form?.Right?.Va?.Reading ?? '',
        sph_left_reading: val?.form?.Left?.Sph?.Reading ?? '',
        cyl_left_reading: val?.form?.Left?.Cyl?.Reading ?? '',
        ax_left_reading: val?.form?.Left?.Ax?.Reading ?? '',
        va_left_reading: val?.form?.Left?.Va?.Reading ?? '',
        pd_reading: val?.form?.PD?.Reading ?? '',
        jenis_pelayanan: val?.tipe_pasien === 'UMUM' ? '*' : '',
        note: val?.form?.Catatan_Lain ?? '',
        prescription_date: DateTimeConverter.convertToDateTime(val?.form?.Tanggal_Resep),
        doctor_name: val?.form?.Dokter_Nama ?? '',

        signature_doctor: (val?.form?.TTD_Dokter && val?.form?.TTD_Dokter !== '') ? val?.form?.TTD_Dokter : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
