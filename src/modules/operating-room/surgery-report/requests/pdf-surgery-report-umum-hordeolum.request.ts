import {
  IPdfSurgeryReportRequest,
  PdfSurgeryReportRequest,
} from '@modules/operating-room/surgery-report/requests/pdf-surgery-report.request';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfSurgeryReportUmumHordeolumRequest extends IPdfSurgeryReportRequest {
  data: {
    'pasien.Umur': string,
    'pasien.Tgl_Lahir': string,
    tanggal_pembedahan: string,
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

    lokal_hor_0: string,
    lokal_hor_1: string,
    lokal_hor_2: string,
    lokal_hor_3: string,
    lokal_hor_4: string,
    lokal_hor_5: string,
    lokal_hor_6: string,
    lokal_hor_7: string,
    lokal_hor_8: string,

    injeksi1: string;
    injeksi2: string;
    internal: string;
    eksternal: string;

    tetes1: string;
    tetes2: string;
    tetes3: string;

    penyakit_komplikasi_1: string,
    penyakit_komplikasi_2: string,

    jaringan_ya: string;
    jaringan_tidak: string;

    pra_hor: string;
    pasca_hor: string;

    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    nik: string,
  }
}

export class PdfSurgeryReportUmumHordeolumRequest extends PdfSurgeryReportRequest {
  constructor(request: IPdfSurgeryReportUmumHordeolumRequest) {
    super(request);
  }

  static createPdfRequest(val: any, emrId: string, treatment: ITreatmentModel): PdfSurgeryReportUmumHordeolumRequest {
    return new PdfSurgeryReportUmumHordeolumRequest({
      emr_id: emrId,
      form_name: 'ok_laporan-pembedahan-umum-hordeolum_v3',
      row_filter: '',
      preview: false,
      data: {
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
        tanggal_pembedahan: DateTimeConverter.convertToNormalDate(val?.Tanggal_Pembedahan),
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

        lokal_hor_0: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_0 && val.Lokal_Hordeolum_0 === 1),
        lokal_hor_1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_1 && val.Lokal_Hordeolum_1 === 1),
        lokal_hor_2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_2 && val.Lokal_Hordeolum_2 === 1),
        lokal_hor_3: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_3 && val.Lokal_Hordeolum_3 === 1),
        lokal_hor_4: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_4 && val.Lokal_Hordeolum_4 === 1),
        lokal_hor_5: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_5 && val.Lokal_Hordeolum_5 === 1),
        lokal_hor_6: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_6 && val.Lokal_Hordeolum_6 === 1),
        lokal_hor_7: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_7 && val.Lokal_Hordeolum_7 === 1),
        lokal_hor_8: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_8 && val.Lokal_Hordeolum_8 === 1),

        injeksi1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_Injeksi && val.Lokal_Hordeolum_Injeksi === '1'),
        injeksi2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_Injeksi && val.Lokal_Hordeolum_Injeksi === '2'),
        internal: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_Bagian && val.Lokal_Hordeolum_Bagian === '1'),
        eksternal: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_Bagian && val.Lokal_Hordeolum_Bagian === '2'),

        tetes1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_Diteteskan_1 && val.Lokal_Hordeolum_Diteteskan_1 === 1),
        tetes2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_Diteteskan_2 && val.Lokal_Hordeolum_Diteteskan_2 === 1),
        tetes3: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Hordeolum_Diteteskan_3 && val.Lokal_Hordeolum_Diteteskan_3 === 1),

        penyakit_komplikasi_1: PdfSurgeryReportRequest.getCheckImage(val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '1'),
        penyakit_komplikasi_2: PdfSurgeryReportRequest.getCheckImage(val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '2'),

        jaringan_ya: PdfSurgeryReportRequest.getCheckImage(val.Jaringan_Pendarahan && val.Jaringan_Pendarahan === '1'),
        jaringan_tidak: PdfSurgeryReportRequest.getCheckImage(val.Jaringan_Pendarahan && val.Jaringan_Pendarahan === '0'),

        pra_hor: (val.Lokal_Hordeolum_Gambar_Pra && val.Lokal_Hordeolum_Gambar_Pra !== '') ? val.Lokal_Hordeolum_Gambar_Pra : undefined,
        pasca_hor: (val.Lokal_Hordeolum_Gambar_Pasca && val.Lokal_Hordeolum_Gambar_Pasca !== '') ? val.Lokal_Hordeolum_Gambar_Pasca : undefined,

        Tanda_Tangan_Perawat: val.TTD_Perawat && val.TTD_Perawat !== '' ? val.TTD_Perawat : undefined,
        Tanda_Tangan_Dokter: val.TTD_Dokter && val.TTD_Dokter !== '' ? val.TTD_Dokter : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    });
  }
}
