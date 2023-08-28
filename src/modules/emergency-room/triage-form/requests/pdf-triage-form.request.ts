import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import triageColor from '../consts/triageColor';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfTriageFormRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    tanggal_ttd: string,
    tanggal_masuk: string,
    respon_time: string,
    label_warna: string,
    nama_petugas: string,

    cara_datang_1: string,
    cara_datang_2: string,
    cara_datang_3: string,
    cara_datang_4: string,

    kasus_1: string,
    kasus_2: string,
    kasus_3: string,
    kasus_4: string,
    kasus_5: string,
    kasus_6: string,

    sadar_kat1_1: string,
    sadar_kat1_2: string,
    sadar_kat1_3: string,
    sadar_kat2_1: string,
    sadar_kat2_2: string,
    sadar_kat2_3: string,
    sadar_kat2_4: string,
    sadar_kat3_1: string,
    sadar_kat3_2: string,
    sadar_kat3_3: string,
    sadar_kat3_4: string,
    sadar_kat4_1: string,
    sadar_kat5_1: string,
    sadar_kat6_1: string,
    sadar_kat6_2: string,

    jalan_kat1_1: string,
    jalan_kat2_1: string,
    jalan_kat2_2: string,
    jalan_kat3_1: string,
    jalan_kat4_1: string,
    jalan_kat5_1: string,
    jalan_kat6_1: string,

    nafas_kat1_1: string,
    nafas_kat1_2: string,
    nafas_kat1_3: string,
    nafas_kat2_1: string,
    nafas_kat2_2: string,
    nafas_kat3_1: string,
    nafas_kat3_2: string,
    nafas_kat3_3: string,
    nafas_kat4_1: string,
    nafas_kat5_1: string,
    nafas_kat6_1: string,

    sirkulasi_kat1_1: string,
    sirkulasi_kat1_2: string,
    sirkulasi_kat1_3: string,
    sirkulasi_kat2_1: string,
    sirkulasi_kat2_2: string,
    sirkulasi_kat2_3: string,
    sirkulasi_kat2_4: string,
    sirkulasi_kat2_5: string,
    sirkulasi_kat2_6: string,
    sirkulasi_kat3_1: string,
    sirkulasi_kat3_2: string,
    sirkulasi_kat3_3: string,
    sirkulasi_kat3_4: string,
    sirkulasi_kat4_1: string,
    sirkulasi_kat4_2: string,
    sirkulasi_kat4_3: string,
    sirkulasi_kat4_4: string,
    sirkulasi_kat5_1: string,
    sirkulasi_kat5_2: string,
    sirkulasi_kat5_3: string,
    sirkulasi_kat5_4: string,
    sirkulasi_kat6_1: string,
    sirkulasi_kat6_2: string,
    sirkulasi_kat6_3: string,

    lain_kat1_1: string,
    lain_kat2_1: string,
    lain_kat2_2: string,
    lain_kat2_3: string,
    lain_kat2_4: string,
    lain_kat3_1: string,
    lain_kat3_2: string,
    lain_kat4_1: string,
    lain_kat4_2: string,
    lain_kat5_1: string,
    lain_kat5_2: string,
    lain_kat6_1: string,

    true_eme: string,
    false_eme: string,

    ttd_petugas?: string,
    nik: string,
  }
}

export class PdfTriageFormRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    tanggal_masuk: string,
    respon_time: string,
    label_warna: string,
    tanggal_ttd: string,
    nama_petugas: string,

    cara_datang_1: string,
    cara_datang_2: string,
    cara_datang_3: string,
    cara_datang_4: string,

    kasus_1: string,
    kasus_2: string,
    kasus_3: string,
    kasus_4: string,
    kasus_5: string,
    kasus_6: string,

    sadar_kat1_1: string,
    sadar_kat1_2: string,
    sadar_kat1_3: string,
    sadar_kat2_1: string,
    sadar_kat2_2: string,
    sadar_kat2_3: string,
    sadar_kat2_4: string,
    sadar_kat3_1: string,
    sadar_kat3_2: string,
    sadar_kat3_3: string,
    sadar_kat3_4: string,
    sadar_kat4_1: string,
    sadar_kat5_1: string,
    sadar_kat6_1: string,
    sadar_kat6_2: string,

    jalan_kat1_1: string,
    jalan_kat2_1: string,
    jalan_kat2_2: string,
    jalan_kat3_1: string,
    jalan_kat4_1: string,
    jalan_kat5_1: string,
    jalan_kat6_1: string,

    nafas_kat1_1: string,
    nafas_kat1_2: string,
    nafas_kat1_3: string,
    nafas_kat2_1: string,
    nafas_kat2_2: string,
    nafas_kat3_1: string,
    nafas_kat3_2: string,
    nafas_kat3_3: string,
    nafas_kat4_1: string,
    nafas_kat5_1: string,
    nafas_kat6_1: string,

    sirkulasi_kat1_1: string,
    sirkulasi_kat1_2: string,
    sirkulasi_kat1_3: string,
    sirkulasi_kat2_1: string,
    sirkulasi_kat2_2: string,
    sirkulasi_kat2_3: string,
    sirkulasi_kat2_4: string,
    sirkulasi_kat2_5: string,
    sirkulasi_kat2_6: string,
    sirkulasi_kat3_1: string,
    sirkulasi_kat3_2: string,
    sirkulasi_kat3_3: string,
    sirkulasi_kat3_4: string,
    sirkulasi_kat4_1: string,
    sirkulasi_kat4_2: string,
    sirkulasi_kat4_3: string,
    sirkulasi_kat4_4: string,
    sirkulasi_kat5_1: string,
    sirkulasi_kat5_2: string,
    sirkulasi_kat5_3: string,
    sirkulasi_kat5_4: string,
    sirkulasi_kat6_1: string,
    sirkulasi_kat6_2: string,
    sirkulasi_kat6_3: string,

    lain_kat1_1: string,
    lain_kat2_1: string,
    lain_kat2_2: string,
    lain_kat2_3: string,
    lain_kat2_4: string,
    lain_kat3_1: string,
    lain_kat3_2: string,
    lain_kat4_1: string,
    lain_kat4_2: string,
    lain_kat5_1: string,
    lain_kat5_2: string,
    lain_kat6_1: string,

    true_eme: string,
    false_eme: string,

    ttd_petugas?: string,
    nik: string,
  }

  constructor(req: IPdfTriageFormRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfTriageFormRequest) {
    return new PdfTriageFormRequest(json);
  }

  static getTriageColor(color: string) {
    const selectedColor = triageColor.find((item: { id: string, image: string }) => item.id === color);
    if (selectedColor) {
      return selectedColor.image;
    } else {
      return 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg';
    }
  }

  static createPdfRequest(val: any, emrId: string): PdfTriageFormRequest {

    return new PdfTriageFormRequest({
      emr_id: emrId,
      form_name: 'formulir-triase',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        tanggal_masuk: DateTimeConverter.convertToNormalDate(val?.form?.Waktu_Kedatangan),
        respon_time: val?.form?.Respon_Time ?? '',
        label_warna: this.getTriageColor(val?.form?.Warna_Triase),
        // tanggal_ttd: val?.form?.Updated_At ?? '',
        tanggal_ttd: DateTimeConverter.convertToNormalDate(val?.form?.Updated_At),

        cara_datang_1: PdfTriageFormRequest.getCheckImage(val?.form?.Cara_Datang === 'Sendiri'),
        cara_datang_2: PdfTriageFormRequest.getCheckImage(val?.form?.Cara_Datang === 'Diantar keluarga / teman'),
        cara_datang_3: PdfTriageFormRequest.getCheckImage(val?.form?.Cara_Datang === 'Diantar polisi'),
        cara_datang_4: PdfTriageFormRequest.getCheckImage(val?.form?.Cara_Datang === 'Diantar masyarakat'),

        kasus_1: PdfTriageFormRequest.getCheckImage(val?.form?.Jenis_Kasus_Trauma === 'Non Trauma'),
        kasus_2: PdfTriageFormRequest.getCheckImage(val?.form?.Jenis_Kasus_Trauma === 'Trauma'),
        kasus_3: PdfTriageFormRequest.getCheckImage(val?.form?.Jenis_Kasus_Kecelakaan === 'Kecelakaan Air'),
        kasus_4: PdfTriageFormRequest.getCheckImage(val?.form?.Jenis_Kasus_Kecelakaan === 'Kecelakaan Kerja'),
        kasus_5: PdfTriageFormRequest.getCheckImage(val?.form?.Jenis_Kasus_Kecelakaan === 'Kecelakaan Lalu Lintas'),
        kasus_6: PdfTriageFormRequest.getCheckImage(val?.form?.Jenis_Kasus_Kecelakaan === 'Kecelakaan Rumah Tangga'),

        sadar_kat1_1: PdfTriageFormRequest.getCheckImage(val?.form?.Kesadaran_1_GCS_9 === 1),
        sadar_kat1_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_1_Kejang),
        sadar_kat1_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_1_Tidak_Ada_Respon),
        sadar_kat2_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_2_GCS_9_12),
        sadar_kat2_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_2_Hemiparesis),
        sadar_kat2_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_2_Gelisah),
        sadar_kat2_4: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_2_Nyeri_Dada),
        sadar_kat3_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_3_GCS_12_15),
        sadar_kat3_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_3_Apatis),
        sadar_kat3_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_3_Samnolen),
        sadar_kat3_4: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_3_Bebas),
        sadar_kat4_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_4_GCS_15),
        sadar_kat5_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_5_GCS_15),
        sadar_kat6_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_6_GCS_0),
        sadar_kat6_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Kesadaran_6_Tanda_Kehidupan),

        jalan_kat1_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Jalan_Nafas_1_Sumbatan),
        jalan_kat2_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Jalan_Nafas_2_Bebas),
        jalan_kat2_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Jalan_Nafas_2_Ancaman),
        jalan_kat3_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Jalan_Nafas_3_Bebas),
        jalan_kat4_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Jalan_Nafas_4_Bebas),
        jalan_kat5_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Jalan_Nafas_5_Bebas),
        jalan_kat6_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Jalan_Nafas_6_Tidak_Ada),

        nafas_kat1_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_1_Hipoventilasi),
        nafas_kat1_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_1_Bradipnoe),
        nafas_kat1_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_1_Sianosis),
        nafas_kat2_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_2_Takipnoe),
        nafas_kat2_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_2_Mengi),
        nafas_kat3_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_3_Normal),
        nafas_kat3_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_3_Mengi),
        nafas_kat3_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_3_Sesak),
        nafas_kat4_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_4_Normal),
        nafas_kat5_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_5_Normal),
        nafas_kat6_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Pernafasan_6_Minus),

        sirkulasi_kat1_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_1_Henti_Jantung),
        sirkulasi_kat1_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_1_Nadi_Tidak_Teraba),
        sirkulasi_kat1_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_1_Akral_Dingin),
        sirkulasi_kat2_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_2_Nadi_Teraba_Lemah),
        sirkulasi_kat2_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_2_Bradikardi),
        sirkulasi_kat2_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_2_Takikardi),
        sirkulasi_kat2_4: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_2_Pucat),
        sirkulasi_kat2_5: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_2_Akral_Dingin),
        sirkulasi_kat2_6: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_2_CRT_2_Detik),
        sirkulasi_kat3_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_3_Nadi_Kuat),
        sirkulasi_kat3_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_3_Takikardia),
        sirkulasi_kat3_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_3_TDS_160),
        sirkulasi_kat3_4: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_3_TDD_100),
        sirkulasi_kat4_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_4_Nadi_Kuat),
        sirkulasi_kat4_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_4_Nadi_Normal),
        sirkulasi_kat4_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_4_TDS_100_120),
        sirkulasi_kat4_4: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_4_TDD_70_90),
        sirkulasi_kat5_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_5_Nadi_Kuat),
        sirkulasi_kat5_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_5_Nadi_Normal),
        sirkulasi_kat5_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_5_TDS_100_120),
        sirkulasi_kat5_4: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_5_TDD_70_90),
        sirkulasi_kat6_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_6_Nadi_Minus),
        sirkulasi_kat6_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_6_Frekuensi_Nadi_Minus),
        sirkulasi_kat6_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Sirkulasi_6_TDS_Minus),

        lain_kat1_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_1_Threatening),
        lain_kat2_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_2_Trauma_Tembus),
        lain_kat2_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_2_Trauma_Kimia),
        lain_kat2_3: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_2_Penurunan_Visus),
        lain_kat2_4: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_2_Nyeri_Mendadak),
        lain_kat3_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_3_Visus_Abnormal),
        lain_kat3_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_3_Nyeri_Sedang),
        lain_kat4_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_4_Visus_Normal),
        lain_kat4_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_4_Nyeri_Mata),
        lain_kat5_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_5_Visus_Normal),
        lain_kat5_2: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_5_Tidak_Ada_Nyeri),
        lain_kat6_1: PdfTriageFormRequest.getCheckImage(!!val?.form?.Tanda_Lain_6_Visus_Minus),

        true_eme: PdfTriageFormRequest.getCheckImage(val?.form?.Jenis_Emergency === 'True Emergency'),
        false_eme: PdfTriageFormRequest.getCheckImage(val?.form?.Jenis_Emergency === 'False Emergency'),

        ttd_petugas: (val?.form?.TTD_Perawat !== '') ? val?.form?.TTD_Perawat : undefined,
        nama_petugas: (val?.form?.Nama_Perawat !== '') ? val?.form?.Nama_Perawat : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}