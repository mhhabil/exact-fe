import { ITreatmentModel } from "@src/modules/site/patient-list/models";
import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import citymapping from "@src/modules/outpatient/proof-of-outpatient-services/const/citymapping";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface IPdfPatientBpjsStatementRequest extends ICreatePDFRequest {
  data: {
    nama_pasien_wali: string;
    umur_pasien_wali: string;
    kelamin_pasien_wali: string;
    alamat_pasien_wali: string;
    hubungan_dengan_pasien: string;
    'pasien.Nama': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    'pasien.Alamat': string;
    'pasien.no_bpjs': string;
    nama_perawat_bertugas: string;
    nama_pembuat_pernyataan: string;
    nama_saksi_rs: string;
    nama_saksi_pasien: string;
    kota: string;
    tanggal: string;
    ttd_perawat_bertugas: string;
    ttd_pembuat_pernyataan: string;
    ttd_saksi_rs: string;
    ttd_saksi_pasien: string;
    nik: string;
  }
}

export class PdfPatientBpjsStatementRequest extends CreatePDFRequest {
  data: {
    nama_pasien_wali: string;
    umur_pasien_wali: string;
    kelamin_pasien_wali: string;
    alamat_pasien_wali: string;
    hubungan_dengan_pasien: string;
    'pasien.Nama': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    'pasien.Alamat': string;
    'pasien.no_bpjs': string;
    nama_perawat_bertugas: string;
    nama_pembuat_pernyataan: string;
    nama_saksi_rs: string;
    nama_saksi_pasien: string;
    kota: string;
    tanggal: string;
    ttd_perawat_bertugas: string;
    ttd_pembuat_pernyataan: string;
    ttd_saksi_rs: string;
    ttd_saksi_pasien: string;
    nik: string;
  }

  constructor(req: IPdfPatientBpjsStatementRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfPatientBpjsStatementRequest) {
    return new PdfPatientBpjsStatementRequest(json);
  }

  static createPdfRequest(val: any, treatment: ITreatmentModel): PdfPatientBpjsStatementRequest {
    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }
    return new PdfPatientBpjsStatementRequest({
      emr_id: treatment.EMR_ID,
      form_name: 'informasi_surat-pernyataan-bpjs',
      row_filter: '',
      preview: false,
      data: {
        nama_pasien_wali: val.form.Penanggung_Jawab === '1' ? treatment?.Pasien?.Nama : val?.form?.Nama_Wali,
        umur_pasien_wali: val.form.Penanggung_Jawab === '1' ? treatment?.Pasien?.Umur : val?.form?.Umur_Wali,
        kelamin_pasien_wali: val.form.Penanggung_Jawab === '1' ? treatment?.Pasien?.Jenis_Kelamin : val?.form?.Jenis_Kelamin_Wali,
        alamat_pasien_wali: val.form.Penanggung_Jawab === '1' ? treatment?.Pasien?.Alamat : val?.form?.Alamat_Wali,
        hubungan_dengan_pasien: val.form.Penanggung_Jawab === '1' ? "Pasien Sendiri" : val?.form?.Hubungan_Wali,
        'pasien.Nama': treatment.Pasien.Nama,
        'pasien.Umur': treatment?.Pasien?.Umur,
        'pasien.Jenis_Kelamin':  treatment.Pasien.Jenis_Kelamin,
        'pasien.Alamat': treatment.Pasien.Alamat,
        'pasien.no_bpjs': treatment.Pasien.No_BPJS,
        nik:  val?.pasien?.NIK ?? '',
        kota: getCity(treatment.Kode_Cabang),
        tanggal: DateTimeConverter.convertToNormalDate(val?.form?.Tanggal_TTD),
        nama_perawat_bertugas: (val?.form?.Nama_TTD_Petugas !== '') ? val?.form?.Nama_TTD_Petugas : undefined,
        nama_pembuat_pernyataan: val.form?.Penanggung_Jawab === '1' ? treatment?.Pasien?.Nama : val?.form?.Nama_Wali,
        nama_saksi_rs: (val?.form?.Nama_TTD_Saksi !== '') ? val?.form?.Nama_TTD_Saksi : undefined,
        nama_saksi_pasien: treatment.Wali.Nama,
        ttd_perawat_bertugas: val.form && val.form.TTD_Petugas && val.form.TTD_Petugas !== '' ? val.form.TTD_Petugas : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ttd_pembuat_pernyataan: val.form && val.form.TTD_Pasien && val.form.TTD_Pasien !== '' ? val.form.TTD_Pasien : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ttd_saksi_rs: val.form && val.form.TTD_Saksi && val.form.TTD_Saksi !== '' ? val.form.TTD_Saksi : 'https://bucket.rsmatasmec.com/blank.jpeg',
        ttd_saksi_pasien: val.form && val.form.TTD_Wali && val.form.TTD_Wali !== '' ? val.form.TTD_Wali : 'https://bucket.rsmatasmec.com/blank.jpeg',
      },
    })
  }
}
