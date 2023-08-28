import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";
import { ISurgicalAreaMarkingModel } from "../models/surgical-area-marking.model";
import citymapping from "../../proof-of-outpatient-services/const/citymapping";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface IPdfSurgicalAreaMarkingRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    tanggal_operasi: string,
    prosedur_operasi: string,
    operator: string,
    gambar1: string,
    gambar2: string,
    nama_kota: string,
    ttd_dokter_operator: string,
    ttd_pasien_wali: string,
    ttd_perawat: string,
    nama_dokter_operator: string,
    nama_perawat: string,
    nik: string,
  }
}

export class PdfSurgicalAreaMarkingRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    tanggal_operasi: string,
    prosedur_operasi: string,
    operator: string,
    gambar1: string,
    gambar2: string,
    nama_kota: string,
    ttd_dokter_operator: string,
    ttd_pasien_wali: string,
    ttd_perawat: string,
    nama_dokter_operator: string,
    nama_perawat: string,
    nik: string,
  }

  constructor(req: IPdfSurgicalAreaMarkingRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfSurgicalAreaMarkingRequest) {
    return new PdfSurgicalAreaMarkingRequest(json);
  }

  static createPdfRequest(value: any, appReq: IAppRequest) {
    const getCity = () => {
      if (appReq.kode_cabang) {
        const selected = citymapping.find((c) => c.company_code === appReq.kode_cabang);
        if (selected) {
          return selected.city;
        } else {
          return '';
        }
      } else {
        return '';
      }
    }
    return new PdfSurgicalAreaMarkingRequest({
      emr_id: appReq.emr_id,
      form_name: 'rawat-jalan_penandaan-area-pembedahan',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: value?.nomor_mr ?? '',
        'pasien.Nama': value?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(value?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(value?.umur_lengkap),
        'pasien.Jenis_Kelamin': value?.pasien?.Jenis_Kelamin ?? '',
        tanggal_operasi: DateTimeConverter.convertToNormalDate(value.form && value.form.Tanggal_Operasi ? value.form.Tanggal_Operasi.substring(0, 10) : ''),
        prosedur_operasi: value?.form?.Prosedur_Operasi ?? '',
        operator: value?.form?.Dokter_Operasi_Nama ?? '',
        gambar1: value.form && value.form.Gambar_Body && value.form.Gambar_Body !== '' ? value.form.Gambar_Body : 'https://bucket.rsmatasmec.com/body.jpg',
        gambar2: value.form && value.form.Gambar_Head && value.form.Gambar_Head !== '' ? value.form.Gambar_Head : 'https://bucket.rsmatasmec.com/head.jpg',
        nama_kota: getCity(),
        ttd_dokter_operator: value.form && value.form.TTD_Dokter_Pelaksana && value.form.TTD_Dokter_Pelaksana !== '' ? value.form.TTD_Dokter_Pelaksana : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_pasien_wali: value.form && value.form.Tanda_Tangan_Pasien && value.form.Tanda_Tangan_Pasien !== '' ? value.form.Tanda_Tangan_Pasien : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_perawat: value.form && value.form.Tanda_Tangan_Perawat && value.form.Tanda_Tangan_Perawat !== '' ? value.form.Tanda_Tangan_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_dokter_operator: value?.form?.Nama_Dokter_Pelaksana ?? '',
        nama_perawat: value?.form?.Nama_Perawat ?? '',
        nik: value?.pasien?.NIK ?? '',
      },
    })
  }
}
