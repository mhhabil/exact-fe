import {
  CreatePDFRequest,
  ICreatePDFRequest,
} from "@shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";
import citymapping from '@modules/outpatient/proof-of-outpatient-services/const/citymapping';

export interface IPdfHospitalizationLetterRequest extends ICreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  diagnosa : string;
  lama_opname : string;
  satuan_lama_opname : string;
  indikasi_opname : string;
  tanggal_perintah : string;
  kota : string;
  nama_dokter : string;
  ttd_dokter : string;
  sirkulasi_2: string;
  sirkulasi_3: string;
  sirkulasi_4: string;
  sirkulasi_5: string;
  nik: string;
  };
}

export class PdfHospitalizationLetterRequest extends CreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  diagnosa : string;
  lama_opname : string;
  satuan_lama_opname : string;
  indikasi_opname : string;
  tanggal_perintah : string;
  kota : string;
  nama_dokter : string;
  ttd_dokter : string;
  sirkulasi_2: string;
  sirkulasi_3: string;
  sirkulasi_4: string;
  sirkulasi_5: string;
  nik: string;
  };

  constructor(req: IPdfHospitalizationLetterRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfHospitalizationLetterRequest) {
    return new PdfHospitalizationLetterRequest(json);
  }

  static createPdfRequest(val: any, appReq: IAppRequest): PdfHospitalizationLetterRequest {

    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }

    const formatDateIndo = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
      return dateFormat;
    }


    return new PdfHospitalizationLetterRequest({
      emr_id: appReq.emr_id,
      form_name: 'rawat-inap_surat-perintah-rawat-inap',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': val?.pasien?.Tgl_Lahir ?? '',
        'pasien.Alamat': val?.pasien?.Alamat ?? '',
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        diagnosa : val?.form?.Diagnosa ?? '',
        lama_opname : val?.form?.Lama_Opname ?? '',
        satuan_lama_opname : val?.form?.Lama_Satuan ?? '',
        indikasi_opname : val?.form?.Indikasi_Opname ?? '',
        tanggal_perintah : formatDateIndo(val?.form?.Tanggal_Tanda_Tangan ?? ''),
        kota : getCity(appReq.kode_cabang),
        nama_dokter : val?.form?.Nama_Dokter_Rawat_Inap ?? '',
        ttd_dokter : (val?.form?.TTD_Dokter !== '') ? val?.form?.TTD_Dokter : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        sirkulasi_2: PdfHospitalizationLetterRequest.getCheckImage(val?.form?.Preventif_Check === '1'),
        sirkulasi_3: PdfHospitalizationLetterRequest.getCheckImage(val?.form?.Paliatif_Check === '1'),
        sirkulasi_4: PdfHospitalizationLetterRequest.getCheckImage(val?.form?.Kuratif_Check === '1'),
        sirkulasi_5: PdfHospitalizationLetterRequest.getCheckImage(val?.form?.Rehabilitatif_Check === '1'),
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
