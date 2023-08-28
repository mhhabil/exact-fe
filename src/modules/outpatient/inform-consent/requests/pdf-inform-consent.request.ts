import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { IDoctorsConsentFormModel, IProvisionOfInformationFormModel } from '../models/inform-consent.model';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';
import citymapping from '../../proof-of-outpatient-services/const/citymapping';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfInformConsentRequest extends ICreatePDFRequest {
  data: {
    'pasien.Umur': string;
    'pasien.Tgl_Lahir': string;
    penerima_informasi: string;
    tanggal_tindakan: string;
    tanggal_tandatangan: string;
    pasien_atau_wali: string;
    kota: string;
    jam_tindakan: string;
    jam_tandatangan: string;
    nama_pasien_wali: string;
    isPersetujuan: boolean;
    isPenolakan: boolean;
    tanda_1: string;
    tanda_2: string;
    tanda_3: string;
    tanda_4: string;
    tanda_5: string;
    tanda_5_1: string;
    tanda_5_2: string;
    tanda_6: string;
    tanda_7: string;
    tanda_8: string;
    tanda_9: string;
    tanda_10: string;
    tanda_10_1: string;
    tanda_11: string;
    tanda_11_1: string;
    tanda_11_2: string;
    ttd_dokter_pelaksana: string;
    ttd_penerima_informasi: string;
    ttd_pasien_wali: string;
    ttd_saksi_keluarga: string;
    ttd_saksi_rs: string;
    diagnosis: string;
    nama_pasien_atau_wali: string;
    ttl_pasien_atau_wali: string;
    jk_pasien_atau_wali: string;
    alamat_pasien_atau_wali: string;
    nik: string;
  }
}

export class PdfInformConsentRequest extends CreatePDFRequest {
  data: {
    'pasien.Umur': string;
    'pasien.Tgl_Lahir': string;
    penerima_informasi: string;
    tanggal_tindakan: string;
    tanggal_tandatangan: string;
    pasien_atau_wali: string;
    kota: string;
    jam_tindakan: string;
    jam_tandatangan: string;
    nama_pasien_wali: string;
    isPersetujuan: boolean;
    isPenolakan: boolean;
    tanda_1: string;
    tanda_2: string;
    tanda_3: string;
    tanda_4: string;
    tanda_5: string;
    tanda_5_1: string;
    tanda_5_2: string;
    tanda_6: string;
    tanda_7: string;
    tanda_8: string;
    tanda_9: string;
    tanda_10: string;
    tanda_10_1: string;
    tanda_11: string;
    tanda_11_1: string;
    tanda_11_2: string;
    ttd_dokter_pelaksana: string;
    ttd_penerima_informasi: string;
    ttd_pasien_wali: string;
    ttd_saksi_keluarga: string;
    ttd_saksi_rs: string;
    diagnosis: string;
    nama_pasien_atau_wali: string;
    ttl_pasien_atau_wali: string;
    jk_pasien_atau_wali: string;
    alamat_pasien_atau_wali: string;
    nik: string;
  }
  constructor(req: IPdfInformConsentRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfInformConsentRequest) {
    return new PdfInformConsentRequest(json);
  }

  static createPdfRequest(val: IProvisionOfInformationFormModel, consent: IDoctorsConsentFormModel, treatment: ITreatmentModel): PdfInformConsentRequest {
    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }
    return new PdfInformConsentRequest({
      emr_id: treatment.EMR_ID,
      form_name: 'inform-consent',
      row_filter: '',
      preview: false,
      data: {
        'pasien.Umur': this.normalizeAge(treatment?.Pasien?.Umur_Lengkap),
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
        diagnosis: val.Diagnosis && val.Diagnosis === 'custom' ? val.Diagnosis_Custom : val.Diagnosis ? val.Diagnosis : '',
        penerima_informasi: val.Penerima_Informasi && val.Penerima_Informasi === 'Pasien' ? treatment.Pasien.Nama : val.Penerima_Informasi && val.Penerima_Informasi === 'Wali' ? val.Nama_Wali : '',
        tanda_1: PdfInformConsentRequest.getCheckImage(val?.Diagnosis_Check === '1'),
        tanda_2: PdfInformConsentRequest.getCheckImage(val?.Dasar_Diagnosis_Check === '1'),
        tanda_3: PdfInformConsentRequest.getCheckImage(val?.Tindakan_Kedokteran_Check === '1'),
        tanda_4: PdfInformConsentRequest.getCheckImage(val?.Indikasi_Tindakan_Check === '1'),
        tanda_5: PdfInformConsentRequest.getCheckImage(val?.Tata_Cara_Check === '1'),
        tanda_5_1: PdfInformConsentRequest.getCheckImage(val?.Tata_Cara_Tipe_Sedasi === 1),
        tanda_5_2: PdfInformConsentRequest.getCheckImage(val?.Tata_Cara_Uraian_Singkat === 1),
        tanda_6: PdfInformConsentRequest.getCheckImage(val?.Tujuan_Check === '1'),
        tanda_7: PdfInformConsentRequest.getCheckImage(val?.Risiko_Check === '1'),
        tanda_8: PdfInformConsentRequest.getCheckImage(val?.Komplikasi_Check === '1'),
        tanda_9: PdfInformConsentRequest.getCheckImage(val?.Prognosis_Check === '1'),
        tanda_10: PdfInformConsentRequest.getCheckImage(val?.Alternatif_Resiko_Check === '1'),
        tanda_10_1: PdfInformConsentRequest.getCheckImage(val?.Alternatif_Risiko_Pilihan_Pengobatan === 1),
        tanda_11: PdfInformConsentRequest.getCheckImage(val?.Hal_Lain_Check === '1'),
        tanda_11_1: PdfInformConsentRequest.getCheckImage(val?.Hal_Lain_Perluasan_Tindakan === 1),
        tanda_11_2: PdfInformConsentRequest.getCheckImage(val?.Hal_Lain_Konsultasi === 1),
        ttd_dokter_pelaksana: val.TTD_Dokter_Pelaksana && val.TTD_Dokter_Pelaksana !== '' ? val.TTD_Dokter_Pelaksana : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_penerima_informasi: val.TTD_Pasien && val.TTD_Pasien !== '' ? val.TTD_Pasien : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        isPersetujuan: !!(consent.Pernyataan_Id && consent.Pernyataan_Id === '1'),
        isPenolakan: !!(consent.Pernyataan_Id && consent.Pernyataan_Id === '0'),
        nama_pasien_atau_wali: consent.Tanda_Tangan_Nama ? consent.Tanda_Tangan_Nama.toUpperCase() : '',
        ttl_pasien_atau_wali: DateTimeConverter.convertToNormalDate(consent.Tanda_Tangan_TglLahir),
        jk_pasien_atau_wali: consent.Tanda_Tangan_JK ?? '',
        alamat_pasien_atau_wali: consent.Tanda_Tangan_Alamat ?? '',
        tanggal_tindakan: DateTimeConverter.convertToNormalDate(consent.Pasien_Tanggal && consent.Pasien_Tanggal !== '' ? consent.Pasien_Tanggal.substring(0, 10) : ''),
        tanggal_tandatangan: DateTimeConverter.convertToNormalDate(consent.Tanggal_TTD && consent.Tanggal_TTD !== '' ? consent.Tanggal_TTD.substring(0, 10) : ''),
        pasien_atau_wali: consent.Tanda_Tangan && consent.Tanda_Tangan === 'Pasien' ? 'saya' : consent.Tanda_Tangan && consent.Tanda_Tangan === 'Wali' && consent.Tanda_Tangan_Hubungan ? `${consent.Tanda_Tangan_Hubungan} saya` : '',
        kota: getCity(treatment.Kode_Cabang),
        jam_tindakan: consent.Pasien_Tanggal && consent.Pasien_Tanggal !== '' ? consent.Pasien_Tanggal.substring(11, 16) : '',
        jam_tandatangan: consent.Tanggal_TTD && consent.Tanggal_TTD !== '' ? consent.Tanggal_TTD.substring(11, 16) : '',
        nama_pasien_wali: consent.Tanda_Tangan && consent.Tanda_Tangan === 'Pasien' ? 'Pasien' : consent.Tanda_Tangan && consent.Tanda_Tangan === 'Wali' ? 'Keluarga/Wali' : '',
        ttd_pasien_wali: consent.Tanda_Tangan_Pasien && consent.Tanda_Tangan_Pasien !== '' ? consent.Tanda_Tangan_Pasien : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_saksi_keluarga: consent.Tanda_Tangan_Saksi_2 && consent.Tanda_Tangan_Saksi_2 !== '' ? consent.Tanda_Tangan_Saksi_2 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_saksi_rs: consent.Tanda_Tangan_Saksi && consent.Tanda_Tangan_Saksi !== '' ? consent.Tanda_Tangan_Saksi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nik: treatment?.Pasien?.NIK ?? '',
      },
    })
  }
}
