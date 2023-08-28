import {
  IPdfSurgeryReportRequest,
  PdfSurgeryReportRequest,
} from '@modules/operating-room/surgery-report/requests/pdf-surgery-report.request';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfSurgeryReportUmumPhacoRequest extends IPdfSurgeryReportRequest {
  data: {
    'pasien.Umur': string,
    'pasien.Tgl_Lahir': string,
    tanggal_pembedahan: string,
    us_ab_1: string,
    us_ab_2: string,
    us_ab_3: string,
    us_ab_4: string,
    us_ab_5: string,
    us_ab_6: string,
    us_el_1: string,
    us_el_2: string,
    us_el_3: string,
    us_el_4: string,
    us_el_5: string,
    us_el_6: string,

    pembedahan_opsi_kanan: string,
    pembedahan_opsi_kiri: string,
    pembedahan_opsi_emergency: string,
    pembedahan_opsi_elektif: string,

    pemakaian_implant_ya: string,
    pemakaian_implant_tidak: string,

    stiker_lensa: string,

    jenis_pembedahan_1: string,
    jenis_pembedahan_2: string,
    jenis_pembedahan_3: string,
    jenis_pembedahan_4: string,

    operasi_ke_1: string,
    operasi_ke_2: string,
    profilaksis_ya: string,
    profilaksis_tidak: string,

    grafik: string,

    ga: string;
    sadasi: string;
    hipersensitivitas_ya: string;
    hipersensitivitas_tidak: string;
    toksikasi_ya: string;
    toksikasi_tidak: string;

    lokasi_phaco_0: string,
    lokasi_phaco_1: string,
    lokasi_phaco_2: string,
    lokasi_phaco_3: string,
    lokasi_phaco_4: string,
    lokasi_phaco_5: string,
    lokasi_phaco_6: string,
    lokasi_phaco_7: string,
    lokasi_phaco_8: string,
    lokasi_phaco_9: string,
    lokasi_phaco_10: string,

    lokal_phaco_knife_22: string,
    lokal_phaco_knife_275: string,

    lokasi_phaco_11: string,
    lokasi_phaco_12: string,
    lokasi_phaco_13: string,
    lokasi_phaco_14: string,
    lokasi_phaco_15: string,
    lokasi_phaco_16: string,
    lokasi_phaco_17: string,
    lokasi_phaco_18: string,
    lokasi_phaco_19: string,
    lokasi_phaco_20: string,

    gambar_phaco: string,

    penyakit_komplikasi_1: string,
    penyakit_komplikasi_2: string,

    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    nik: string,
  }
}

export class PdfSurgeryReportUmumPhacoRequest extends PdfSurgeryReportRequest {
  constructor(request: IPdfSurgeryReportUmumPhacoRequest) {
    super(request);
  }

  static createPdfRequest(val: any, emrId: string, treatment: ITreatmentModel): IPdfSurgeryReportUmumPhacoRequest {
    return new PdfSurgeryReportUmumPhacoRequest({
      emr_id: emrId,
      form_name: 'ok_laporan-pembedahan-umum-phaco_v3',
      row_filter: '',
      preview: false,
      data: {
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
        tanggal_pembedahan: DateTimeConverter.convertToNormalDate(val?.Tanggal_Pembedahan),
        us_ab_1: (val.Us_Absolute_UP_1 !== '') ? (val.Us_Absolute_UP_1 ?? ' ') : ' ',
        us_ab_2: (val.Us_Absolute_UP_2 !== '') ? (val.Us_Absolute_UP_2 ?? ' ') : ' ',
        us_ab_3: (val.Us_Absolute_UP_3 !== '') ? (val.Us_Absolute_UP_3 ?? ' ') : ' ',
        us_ab_4: (val.Us_Absolute_UP_4 !== '') ? (val.Us_Absolute_UP_4 ?? ' ') : ' ',
        us_ab_5: (val.Us_Absolute_UP_5 !== '') ? (val.Us_Absolute_UP_5 ?? ' ') : ' ',
        us_ab_6: (val.Us_Absolute_UP_6 !== '') ? (val.Us_Absolute_UP_6 ?? ' ') : ' ',
        us_el_1: (val.Us_Elapsed_UP_1 !== '') ? (val.Us_Elapsed_UP_1 ?? ' ') : ' ',
        us_el_2: (val.Us_Elapsed_UP_2 !== '') ? (val.Us_Elapsed_UP_2 ?? ' ') : ' ',
        us_el_3: (val.Us_Elapsed_UP_3 !== '') ? (val.Us_Elapsed_UP_3 ?? ' ') : ' ',
        us_el_4: (val.Us_Elapsed_UP_4 !== '') ? (val.Us_Elapsed_UP_4 ?? ' ') : ' ',
        us_el_5: (val.Us_Elapsed_UP_5 !== '') ? (val.Us_Elapsed_UP_5 ?? ' ') : ' ',
        us_el_6: (val.Us_Elapsed_UP_6 !== '') ? (val.Us_Elapsed_UP_6 ?? ' ') : ' ',

        pembedahan_opsi_kanan: PdfSurgeryReportRequest.getCheckImage(val.Pembedahan_Opsi_Kanan && val.Pembedahan_Opsi_Kanan === 1),
        pembedahan_opsi_kiri: PdfSurgeryReportRequest.getCheckImage(val.Pembedahan_Opsi_Kiri && val.Pembedahan_Opsi_Kiri === 1),
        pembedahan_opsi_emergency: PdfSurgeryReportRequest.getCheckImage(val.Pembedahan_Opsi_Emergency && val.Pembedahan_Opsi_Emergency === 1),
        pembedahan_opsi_elektif: PdfSurgeryReportRequest.getCheckImage(val.Pembedahan_Opsi_Elektif && val.Pembedahan_Opsi_Elektif === 1),

        pemakaian_implant_ya: PdfSurgeryReportRequest.getCheckImage(val.Pemakaian_Implant && val.Pemakaian_Implant === '1'),
        pemakaian_implant_tidak: PdfSurgeryReportRequest.getCheckImage(val.Pemakaian_Implant && val.Pemakaian_Implant === '0'),

        stiker_lensa: val.Url_Image_Stiker && val.Url_Image_Stiker !== '' ? val.Url_Image_Stiker : null,

        jenis_pembedahan_1: PdfSurgeryReportRequest.getCheckImage(val.Jenis_Pembedahan && val.Jenis_Pembedahan === '1'),
        jenis_pembedahan_2: PdfSurgeryReportRequest.getCheckImage(val.Jenis_Pembedahan && val.Jenis_Pembedahan === '2'),
        jenis_pembedahan_3: PdfSurgeryReportRequest.getCheckImage(val.Jenis_Pembedahan && val.Jenis_Pembedahan === '3'),
        jenis_pembedahan_4: PdfSurgeryReportRequest.getCheckImage(val.Jenis_Pembedahan && val.Jenis_Pembedahan === '4'),

        operasi_ke_1: PdfSurgeryReportRequest.getCheckImage(val.Operasi_Ke && val.Operasi_Ke === '1'),
        operasi_ke_2: PdfSurgeryReportRequest.getCheckImage(val.Operasi_Ke && val.Operasi_Ke === '2'),
        profilaksis_ya: PdfSurgeryReportRequest.getCheckImage(val.Profilaksis && val.Profilaksis === '1'),
        profilaksis_tidak: PdfSurgeryReportRequest.getCheckImage(val.Profilaksis && val.Profilaksis === '0'),

        grafik: val.Grid_Chart_Img && val.Grid_Chart_Img !== '' ? val.Grid_Chart_Img : 'https://bucket.rsmatasmec.com/grafik-anestesi.jpeg',

        ga: PdfSurgeryReportRequest.getCheckImage(val.General_Anestesi && val.General_Anestesi === 1),
        sadasi: PdfSurgeryReportRequest.getCheckImage(val.Sedasi && val.Sedasi === 1),
        hipersensitivitas_ya: PdfSurgeryReportRequest.getCheckImage(val.Responhipersensitivitas && val.Responhipersensitivitas === '1'),
        hipersensitivitas_tidak: PdfSurgeryReportRequest.getCheckImage(val.Responhipersensitivitas && val.Responhipersensitivitas === '0'),
        toksikasi_ya: PdfSurgeryReportRequest.getCheckImage(val.Kejadiantoksikasi && val.Kejadiantoksikasi === '1'),
        toksikasi_tidak: PdfSurgeryReportRequest.getCheckImage(val.Kejadiantoksikasi && val.Kejadiantoksikasi === '0'),

        lokasi_phaco_0: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_0 && val.Umum_Phaco_0 === 1),
        lokasi_phaco_1: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_1 && val.Umum_Phaco_1 === 1),
        lokasi_phaco_2: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_2 && val.Umum_Phaco_2 === 1),
        lokasi_phaco_3: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_3 && val.Umum_Phaco_3 === 1),
        lokasi_phaco_4: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_4 && val.Umum_Phaco_4 === 1),
        lokasi_phaco_5: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_5 && val.Umum_Phaco_5 === 1),
        lokasi_phaco_6: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_6 && val.Umum_Phaco_6 === 1),
        lokasi_phaco_7: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_7 && val.Umum_Phaco_7 === 1),
        lokasi_phaco_8: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_8 && val.Umum_Phaco_8 === 1),
        lokasi_phaco_9: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_9 && val.Umum_Phaco_9 === 1),
        lokasi_phaco_10: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_10 && val.Umum_Phaco_10 === 1),

        lokal_phaco_knife_22: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_Knife && val.Umum_Phaco_Knife === '1'),
        lokal_phaco_knife_275: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_Knife && val.Umum_Phaco_Knife === '2'),

        lokasi_phaco_11: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_11 && val.Umum_Phaco_11 === 1),
        lokasi_phaco_12: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_12 && val.Umum_Phaco_12 === 1),
        lokasi_phaco_13: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_13 && val.Umum_Phaco_13 === 1),
        lokasi_phaco_14: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_14 && val.Umum_Phaco_14 === 1),
        lokasi_phaco_15: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_15 && val.Umum_Phaco_15 === 1),
        lokasi_phaco_16: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_16 && val.Umum_Phaco_16 === 1),
        lokasi_phaco_17: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_17 && val.Umum_Phaco_17 === 1),
        lokasi_phaco_18: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_18 && val.Umum_Phaco_18 === 1),
        lokasi_phaco_19: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_19 && val.Umum_Phaco_19 === 1),
        lokasi_phaco_20: PdfSurgeryReportRequest.getCheckImage(val.Umum_Phaco_20 && val.Umum_Phaco_20 === 1),

        gambar_phaco: val.Umum_Phaco_Gambar_Mata && val.Umum_Phaco_Gambar_Mata !== '' ? val.Umum_Phaco_Gambar_Mata : undefined,

        penyakit_komplikasi_1: PdfSurgeryReportRequest.getCheckImage(val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '1'),
        penyakit_komplikasi_2: PdfSurgeryReportRequest.getCheckImage(val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '2'),

        Tanda_Tangan_Perawat: val.TTD_Perawat && val.TTD_Perawat !== '' ? val.TTD_Perawat : undefined,
        Tanda_Tangan_Dokter: val.TTD_Dokter && val.TTD_Dokter !== '' ? val.TTD_Dokter : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    });
  }
}
