import {
  IPdfSurgeryReportRequest,
  PdfSurgeryReportRequest,
} from '@modules/operating-room/surgery-report/requests/pdf-surgery-report.request';
import { ITreatmentModel } from '@src/modules/site/patient-list/models';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfSurgeryReportLocalPterygiumRequest extends IPdfSurgeryReportRequest {
  data: {
    'pasien.Umur': string,
    'pasien.Tgl_Lahir': string,
    tanggal_pembedahan: string;
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

    lokal_pt_0: string;
    lokal_pt_1: string;
    lokal_pt_2: string;
    lokal_pt_3: string;
    lokal_pt_4: string;
    lokal_pt_5: string;
    lokal_pt_6: string;
    lokal_pt_7: string;
    lokal_pt_8: string;
    lokal_pt_9: string;

    lokal_pt_check_injeksi: string;
    injeksi1: string;
    injeksi2: string;

    lokal_pt_bare: string;
    bare1: string;
    bare2: string;

    lokal_pt_conjungtiva: string;
    clg1: string;
    clg2: string;

    tetes1: string;
    tetes2: string;
    tetes3: string;

    penyakit_komplikasi_1: string,
    penyakit_komplikasi_2: string,

    pra_pt: string;
    pasca_pt: string;

    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    nik: string,
  }
}

export class PdfSurgeryReportLocalPterygiumRequest extends PdfSurgeryReportRequest {
  constructor(request: IPdfSurgeryReportLocalPterygiumRequest) {
    super(request);
  }

  static createPdfRequest(val: any, emrId: string, treatment: ITreatmentModel): PdfSurgeryReportLocalPterygiumRequest {
    return new PdfSurgeryReportLocalPterygiumRequest({
      emr_id: emrId,
      form_name: 'ok_laporan-pembedahan-lokal-pterygium_v3',
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

        lokal_pt_0: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_0 && val.Lokal_Pterygium_0 === 1),
        lokal_pt_1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_1 && val.Lokal_Pterygium_1 === 1),
        lokal_pt_2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_2 && val.Lokal_Pterygium_2 === 1),
        lokal_pt_3: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_3 && val.Lokal_Pterygium_3 === 1),
        lokal_pt_4: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_4 && val.Lokal_Pterygium_4 === 1),
        lokal_pt_5: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_5 && val.Lokal_Pterygium_5 === 1),
        lokal_pt_6: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_6 && val.Lokal_Pterygium_6 === 1),
        lokal_pt_7: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_7 && val.Lokal_Pterygium_7 === 1),
        lokal_pt_8: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_8 && val.Lokal_Pterygium_8 === 1),
        lokal_pt_9: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_9 && val.Lokal_Pterygium_9 === 1),

        lokal_pt_check_injeksi: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Check_Injeksi && val.Lokal_Pterygium_Check_Injeksi === 1),
        injeksi1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Injeksi && val.Lokal_Pterygium_Injeksi === 1),
        injeksi2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Injeksi && val.Lokal_Pterygium_Injeksi === 2),

        lokal_pt_bare: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Bara_Sclera && val.Lokal_Pterygium_Bara_Sclera === 1),
        bare1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Exicisi && val.Lokal_Pterygium_Exicisi === 1),
        bare2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Exicisi && val.Lokal_Pterygium_Exicisi === 2),

        lokal_pt_conjungtiva: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Conjungtiva && val.Lokal_Pterygium_Conjungtiva === 1),
        clg1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Clg && val.Lokal_Pterygium_Clg === 1),
        clg2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Clg && val.Lokal_Pterygium_Clg === 2),

        tetes1: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Diteteskan_1 && val.Lokal_Pterygium_Diteteskan_1 === 1),
        tetes2: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Diteteskan_2 && val.Lokal_Pterygium_Diteteskan_2 === 1),
        tetes3: PdfSurgeryReportRequest.getCheckImage(val.Lokal_Pterygium_Diteteskan_3 && val.Lokal_Pterygium_Diteteskan_3 === 1),

        penyakit_komplikasi_1: PdfSurgeryReportRequest.getCheckImage(val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '1'),
        penyakit_komplikasi_2: PdfSurgeryReportRequest.getCheckImage(val.Penyakit_Komplikasi && val.Penyakit_Komplikasi === '2'),

        pra_pt: (val.Lokal_Pterygium_Gambar_Pra && val.Lokal_Pterygium_Gambar_Pra !== '') ? val.Lokal_Pterygium_Gambar_Pra : undefined,
        pasca_pt: (val.Lokal_Pterygium_Gambar_Pasca && val.Lokal_Pterygium_Gambar_Pasca !== '') ? val.Lokal_Pterygium_Gambar_Pasca : undefined,
        Tanda_Tangan_Perawat: val.TTD_Perawat && val.TTD_Perawat !== '' ? val.TTD_Perawat : undefined,
        Tanda_Tangan_Dokter: val.TTD_Dokter && val.TTD_Dokter !== '' ? val.TTD_Dokter : undefined,
        nik: val?.pasien?.NIK ?? '',
      },
    });
  }
}
