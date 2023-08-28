import {
  IPdfSurgeryReportRequest,
  PdfSurgeryReportRequest,
} from '@modules/operating-room/surgery-report/requests/pdf-surgery-report.request';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfSurgeryReportLocalChalazionRequest extends IPdfSurgeryReportRequest {
  data: {
    'pasien.Umur': string,
    'pasien.Tgl_Lahir': string,
    tanggal_pembedahan: string,
    pembedahan_opsi_kanan: string,
    pembedahan_opsi_kiri: string,
    pembedahan_opsi_emergency: string,
    pembedahan_opsi_elektif: string,

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

    anestesi_topikal: string,
    anestesi_infiltrasi: string,
    anestesi_field_block: string,
    anestesi_infiltrasi_tipe_1: string,
    anestesi_infiltrasi_tipe_2: string,
    anestesi_infiltrasi_tipe_3: string,
    anestesi_field_block_tipe_1: string,
    anestesi_field_block_tipe_2: string,

    lokasi_od: string,
    lokasi_os: string,

    lokal_chal_0: string;
    lokal_chal_1: string;
    lokal_chal_2: string;
    lokal_chal_3: string;
    lokal_chal_4: string;
    lokal_chal_5: string;
    lokal_chal_6: string;
    lokal_chal_7: string;
    lokal_chal_8: string;

    injeksi1: string;
    injeksi2: string;
    internal: string;
    eksternal: string;

    tetes1: string;
    tetes2: string;
    tetes3: string;

    penyakit_komplikasi_1: string,
    penyakit_komplikasi_2: string,

    pra_chal: string;
    pasca_chal: string;

    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    nik: string,
  }
}

export class PdfSurgeryReportLocalChalazionRequest extends PdfSurgeryReportRequest {
  constructor(request: IPdfSurgeryReportLocalChalazionRequest) {
    super(request);
  }

  static createPdfRequest(val: any, emrId: string, treatment: ITreatmentModel): PdfSurgeryReportLocalChalazionRequest {
    return new PdfSurgeryReportLocalChalazionRequest({
      emr_id: emrId,
      form_name: 'ok_laporan-pembedahan-lokal-chalazion_v3',
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

        anestesi_topikal: PdfSurgeryReportRequest.getCheckImage(val.Anestesi_Topikal && val.Anestesi_Topikal === 1),
        anestesi_infiltrasi: PdfSurgeryReportRequest.getCheckImage(val.Anestesi_Infiltrasi && val.Anestesi_Infiltrasi === 1),
        anestesi_field_block: PdfSurgeryReportRequest.getCheckImage(val.Anestesi_Field_Block && val.Anestesi_Field_Block === 1),
        anestesi_infiltrasi_tipe_1: PdfSurgeryReportRequest.getCheckImage((val?.Anestesi_Infiltrasi === 1) && val.Anestesi_Infiltrasi_Tipe && val.Anestesi_Infiltrasi_Tipe === '1'),
        anestesi_infiltrasi_tipe_2: PdfSurgeryReportRequest.getCheckImage((val?.Anestesi_Infiltrasi === 1) && val.Anestesi_Infiltrasi_Tipe && val.Anestesi_Infiltrasi_Tipe === '2'),
        anestesi_infiltrasi_tipe_3: PdfSurgeryReportRequest.getCheckImage((val?.Anestesi_Infiltrasi === 1) && val.Anestesi_Infiltrasi_Tipe && val.Anestesi_Infiltrasi_Tipe === '3'),
        anestesi_field_block_tipe_1: PdfSurgeryReportRequest.getCheckImage((val?.Anestesi_Field_Block === 1) && val.Anestesi_Field_Block_Tipe && val.Anestesi_Field_Block_Tipe === '1'),
        anestesi_field_block_tipe_2: PdfSurgeryReportRequest.getCheckImage((val?.Anestesi_Field_Block === 1) && val.Anestesi_Field_Block_Tipe && val.Anestesi_Field_Block_Tipe === '2'),

        lokasi_od: PdfSurgeryReportRequest.getCheckImage(val.Lokasi_OD && val.Lokasi_OD === 1),
        lokasi_os: PdfSurgeryReportRequest.getCheckImage(val.Lokasi_OS && val.Lokasi_OS === 1),

        lokal_chal_0: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_0 && val.Lokal_Chalazion_0 === 1),
        lokal_chal_1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_1 && val.Lokal_Chalazion_1 === 1),
        lokal_chal_2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_2 && val.Lokal_Chalazion_2 === 1),
        lokal_chal_3: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_3 && val.Lokal_Chalazion_3 === 1),
        lokal_chal_4: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_4 && val.Lokal_Chalazion_4 === 1),
        lokal_chal_5: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_5 && val.Lokal_Chalazion_5 === 1),
        lokal_chal_6: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_6 && val.Lokal_Chalazion_6 === 1),
        lokal_chal_7: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_7 && val.Lokal_Chalazion_7 === 1),
        lokal_chal_8: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_8 && val.Lokal_Chalazion_8 === 1),

        injeksi1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_Injeksi && val.Lokal_Chalazion_Injeksi === '1'),
        injeksi2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_Injeksi && val.Lokal_Chalazion_Injeksi === '2'),
        internal: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_Bagian && val.Lokal_Chalazion_Bagian === '1'),
        eksternal: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_Bagian && val.Lokal_Chalazion_Bagian === '2'),

        tetes1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_Diteteskan_1 && val.Lokal_Chalazion_Diteteskan_1 === 1),
        tetes2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_Diteteskan_2 && val.Lokal_Chalazion_Diteteskan_2 === 1),
        tetes3: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Chalazion_Diteteskan_4 && val.Lokal_Chalazion_Diteteskan_4 === 1),

        penyakit_komplikasi_1: PdfSurgeryReportRequest.getCheckImage(val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '1'),
        penyakit_komplikasi_2: PdfSurgeryReportRequest.getCheckImage(val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '2'),

        pra_chal: (val.Lokal_Chalazion_Gambar_Pra && val.Lokal_Chalazion_Gambar_Pra !== '') ? val.Lokal_Chalazion_Gambar_Pra : undefined,
        pasca_chal: (val.Lokal_Chalazion_Gambar_Pasca && val.Lokal_Chalazion_Gambar_Pasca !== '') ? val.Lokal_Chalazion_Gambar_Pasca : undefined,
        Tanda_Tangan_Perawat: val.TTD_Perawat && val.TTD_Perawat !== '' ? val.TTD_Perawat : undefined,
        Tanda_Tangan_Dokter: val.TTD_Dokter && val.TTD_Dokter !== '' ? val.TTD_Dokter : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    });
  }
}
