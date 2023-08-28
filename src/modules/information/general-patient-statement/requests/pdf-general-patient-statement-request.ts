import { ITreatmentModel } from "@src/modules/site/patient-list/models";
import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import citymapping from "@src/modules/outpatient/proof-of-outpatient-services/const/citymapping";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface IPdfGeneralPatientStatementRequest extends ICreatePDFRequest {
  data: {
    'pasien.Nama': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    'pasien.Identitas': string;
    'pasien.Alamat': string;
    kota: string;
    tanggal: string;
    nama_perawat_bertugas: string;
    nama_pembuat_pernyataan: string;
    nama_saksi_rs: string;
    nama_saksi_pasien: string;
    ttd_perawat_bertugas: string;
    ttd_pembuat_pernyataan: string;
    ttd_saksi_rs: string;
    ttd_saksi_pasien: string;
    nik: string;
  }
}

export class PdfGeneralPatientStatementRequest extends CreatePDFRequest {
  data: {
    'pasien.Nama': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    'pasien.Identitas': string;
    'pasien.Alamat': string;
    kota: string;
    tanggal: string;
    nama_perawat_bertugas: string;
    nama_pembuat_pernyataan: string;
    nama_saksi_rs: string;
    nama_saksi_pasien: string;
    ttd_perawat_bertugas: string;
    ttd_pembuat_pernyataan: string;
    ttd_saksi_rs: string;
    ttd_saksi_pasien: string;
    nik: string;
  }

  constructor(req: IPdfGeneralPatientStatementRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfGeneralPatientStatementRequest) {
    return new PdfGeneralPatientStatementRequest(json);
  }

  static createPdfRequest(val: any, treatment: ITreatmentModel): PdfGeneralPatientStatementRequest {
    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }
    return new PdfGeneralPatientStatementRequest({
      emr_id: treatment.EMR_ID,
      form_name: 'informasi_surat-pernyataan-umum',
      row_filter: '',
      preview: false,
      data: {
        'pasien.Nama': treatment.Pasien.Nama,
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin':  treatment.Pasien.Jenis_Kelamin,
        'pasien.Identitas': val?.form?.NIK,
        'pasien.Alamat': treatment.Pasien.Alamat,
        kota: getCity(treatment.Kode_Cabang),
        tanggal: DateTimeConverter.convertToNormalDate(val?.form?.Tanggal_TTD),
        nama_perawat_bertugas: (val?.form?.Nama_TTD_Petugas !== '') ? val?.form?.Nama_TTD_Petugas : undefined,
        nama_pembuat_pernyataan: treatment.Pasien.Nama,
        nama_saksi_rs: (val?.form?.Nama_TTD_Saksi !== '') ? val?.form?.Nama_TTD_Saksi : undefined,
        nama_saksi_pasien: treatment.Wali.Nama,
        nik: val?.pasien?.NIK ?? '',
        ttd_perawat_bertugas: val.form && val.form.TTD_Petugas && val.form.TTD_Petugas !== '' ? val.form.TTD_Petugas : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ttd_pembuat_pernyataan: val.form && val.form.TTD_Pasien && val.form.TTD_Pasien !== '' ? val.form.TTD_Pasien : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ttd_saksi_rs: val.form && val.form.TTD_Saksi && val.form.TTD_Saksi !== '' ? val.form.TTD_Saksi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ttd_saksi_pasien: val.form && val.form.TTD_Wali && val.form.TTD_Wali !== '' ? val.form.TTD_Wali : 'https://bucket.rsmatasmec.com/blank.jpeg',
      },
    })
  }
}
