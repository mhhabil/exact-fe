import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfDocumentationOfFallRiskPatient extends ICreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    pemberi_informasi: string,
    'pasien.umur': string,
    penerima_informasi: string,
    mobilisasi: string,
    post_op: string,
    lain_lainya: string,
    faktor_resiko_pasien_jatuh_lainya: string,
    tanda_1_1: string,
    tanda_1_2: string,
    tanda_1_3: string,
    tanda_1_4: string,
    tanda_1_5: string,
    tanda_1_6: string,
    tanda_1_7: string,
    tanda_1_8: string,
    tanda_1_9: string,
    obat_sedatif: string,
    obat_hipnotik: string,
    obat_antidepresan: string,
    obat_laxatives: string,
    obat_diuretika: string,
    obat_narkotika: string,
    tanda_1_10: string,
    riwayat_kejang: string,
    riwayat_vertigo: string,
    riwayat_depresi: string,
    riwayat_pingsan: string,
    riwayat_pusing: string,
    riwayat_delirium: string,
    riwayat_disorientasi: string,
    tanda_1_11: string,
    risiko_rendah: string,
    risiko_sedang: string,
    risiko_tinggi: string,
    tanda_2_1: string,
    tanda_3_1: string,
    tanda_3_2: string,
    tanda_3_3: string,
    tanda_3_4: string,
    tanda_3_5: string,
    tanda_3_6: string,
    tanda_3_7: string,
    tanda_4_1: string,
    tanda_5_1: string,
    tanda_6_1: string,

    nama_pemberi_informasi: string,
    ttd_pemberi_informasi: string,
    ttd_penerima_informasi: string,
    nama_penerima_informasi: string,
    nik: string,
  }
}

export class PdfDocumentationOfFallRiskPatient extends CreatePDFRequest {
  data: {
    nomor_mr: string,
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    pemberi_informasi: string,
    'pasien.umur': string,
    penerima_informasi: string,
    mobilisasi: string,
    post_op: string,
    lain_lainya: string,
    faktor_resiko_pasien_jatuh_lainya: string,
    tanda_1_1: string,
    tanda_1_2: string,
    tanda_1_3: string,
    tanda_1_4: string,
    tanda_1_5: string,
    tanda_1_6: string,
    tanda_1_7: string,
    tanda_1_8: string,
    tanda_1_9: string,
    obat_sedatif: string,
    obat_hipnotik: string,
    obat_antidepresan: string,
    obat_laxatives: string,
    obat_diuretika: string,
    obat_narkotika: string,
    tanda_1_10: string,
    riwayat_kejang: string,
    riwayat_vertigo: string,
    riwayat_depresi: string,
    riwayat_pingsan: string,
    riwayat_pusing: string,
    riwayat_delirium: string,
    riwayat_disorientasi: string,
    tanda_1_11: string,
    risiko_rendah: string,
    risiko_sedang: string,
    risiko_tinggi: string,
    tanda_2_1: string,
    tanda_3_1: string,
    tanda_3_2: string,
    tanda_3_3: string,
    tanda_3_4: string,
    tanda_3_5: string,
    tanda_3_6: string,
    tanda_3_7: string,
    tanda_4_1: string,
    tanda_5_1: string,
    tanda_6_1: string,
    nama_pemberi_informasi: string,
    ttd_pemberi_informasi: string,
    ttd_penerima_informasi: string,
    nama_penerima_informasi: string,
    nik: string,
  }

  constructor(req: IPdfDocumentationOfFallRiskPatient) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfDocumentationOfFallRiskPatient) {
    return new PdfDocumentationOfFallRiskPatient(json);
  }

  static createPdfRequest(val: any, treatment: ITreatmentModel): PdfDocumentationOfFallRiskPatient {
    return new PdfDocumentationOfFallRiskPatient({
      emr_id: treatment.EMR_ID,
      form_name: 'rawat-inap_pemberian-informasi-resiko-pasien-jatuh',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        'pasien.umur': val?.pasien?.Umur ?? '',
        pemberi_informasi: val?.form?.Nama_Pemberi_Informasi ?? '',
        penerima_informasi: val?.form?.Penerima_Informasi && val?.form?.Penerima_Informasi === 'Pasien' ? treatment.Pasien.Nama : val?.form?.Penerima_Informasi && val?.form?.Penerima_Informasi === 'Wali' ? val?.form?.Nama_Wali : '',
        mobilisasi: val?.form?.Faktor_Mobilisasi_Text ?? '',
        post_op: val?.form?.Faktor_Post_Operasi_Text ?? '',
        lain_lainya: val?.form?.Lainnya_Text ?? '',
        faktor_resiko_pasien_jatuh_lainya: val?.form?.Faktor_Lain_Text ?? '',
        tanda_1_1: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Usia_Check === '1'),
        tanda_1_2: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Riwayat_Jatuh_Check === '1'),
        tanda_1_3: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Penyakit_Check === '1'),
        tanda_1_4: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Penggunaan_Alat_Check === '1'),
        tanda_1_5: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Terpasang_Infus_Check === '1'),
        tanda_1_6: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Kondisi_Mental_Check === '1'),
        tanda_1_7: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Mobilisasi_Check === '1'),
        tanda_1_8: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Post_Operasi_Check === '1'),
        tanda_1_9: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Respon_Obat_Check === '1'),
        obat_sedatif: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Respon_Obat_Sedatif === '1'),
        obat_hipnotik: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Respon_Obat_Hipnotik === '1'),
        obat_antidepresan: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Respon_Obat_Antidepresan === '1'),
        obat_laxatives: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Respon_Obat_Laxatives === '1'),
        obat_diuretika: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Respon_Obat_Diuretika === '1'),
        obat_narkotika: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Respon_Obat_Narkotika === '1'),
        tanda_1_10: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Riwayat_Check === '1'),
        riwayat_kejang: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Riwayat_Kejang === '1'),
        riwayat_vertigo: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Riwayat_Vertigo === '1'),
        riwayat_depresi: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Riwayat_Depresi === '1'),
        riwayat_pingsan: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Riwayat_Pingsan === '1'),
        riwayat_pusing: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Riwayat_Pusing === '1'),
        riwayat_delirium: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Riwayat_Delirium === '1'),
        riwayat_disorientasi: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Riwayat_Disorientasi === '1'),
        tanda_1_11: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Faktor_Lain_Check === '1'),
        risiko_rendah: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tingkatan_Rendah === '1'),
        risiko_sedang: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tingkatan_Sedang === '1'),
        risiko_tinggi: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tingkatan_Tinggi === '1'),
        tanda_2_1: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tingkatan_Check === '1'),
        tanda_3_1: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tindakan_Rem_Tempat_Tidur_Check === '1'),
        tanda_3_2: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tindakan_Kebutuhan_Pasien_Check === '1'),
        tanda_3_3: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tindakan_Tempatkan_Meja_Check === '1'),
        tanda_3_4: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tindakan_Pasang_Palang_Check === '1'),
        tanda_3_5: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tindakan_Pasang_Penanda_Check === '1'),
        tanda_3_6: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tindakan_Libatkan_Keluarga_Check === '1'),
        tanda_3_7: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tindakan_Cepat_Menanggapi_Check === '1'),
        tanda_4_1: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Tujuan_Pasien_Aman_Check === '1'),
        tanda_5_1: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Akibat_Timbulnya_Cedera_Check === '1'),
        tanda_6_1: PdfDocumentationOfFallRiskPatient.getCheckImage(val?.form?.Lainnya_Check === '1'),
        nama_pemberi_informasi: (val?.form?.Nama_TTD_Pemberi_Informasi !== '') ? val?.form?.Nama_TTD_Pemberi_Informasi : undefined,
        // Tanda_Tangan_Petugas: (val?.form?.Tanda_Tangan !== '') ? val?.form?.Tanda_Tangan : undefined,
        ttd_pemberi_informasi: (val?.form?.TTD_Pemberi_Informasi !== '') ? val?.form?.TTD_Pemberi_Informasi : undefined,
        ttd_penerima_informasi: (val?.form?.TTD_Penerima_Informasi !== '') ? val?.form?.TTD_Penerima_Informasi : undefined,
        nama_penerima_informasi: (val?.form?.Nama_TTD_Penerima_Informasi !== '') ? val?.form?.Nama_TTD_Penerima_Informasi : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}