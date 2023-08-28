import { CreatePDFRequest, ICreatePDFRequest } from '@shared/pdf/requests/create-pdf.request';
import { DateTimeConverter } from '@src/shared/datetime-converter';

export interface IPdfRetinaLaserActionRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    dokter_operator: string,
    tgl_tindakan: string,
    diagnosa: string,
    nama_perawat: string,
    nama_dokter: string,
    jenis_anetesi: string,
    obat_anestesi: string,
    spot_size: string,
    durasi: string,
    power: string,
    jumlah_tembakan: string,
    komplikasi: string,
    ya_tidak: string,

    mata_kanan: string,
    mata_kiri: string,
    pantocain_ya: string,
    pantocain_tidak: string,
    mydriatil_ya: string,
    mydriatil_tidak: string,
    laser_prp: string,
    laser_prp_1: string,
    laser_prp_2: string,
    laser_prp_3: string,
    grid: string,
    focal: string,
    barage: string,
    latice: string,

    retina_od: string,
    retina_os: string,
    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string
  }
}

export class PdfRetinaLaserActionRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string,
    dokter_operator: string,
    tgl_tindakan: string,
    diagnosa: string,
    nama_perawat: string,
    nama_dokter: string,
    jenis_anetesi: string,
    obat_anestesi: string,
    spot_size: string,
    durasi: string,
    power: string,
    jumlah_tembakan: string,
    komplikasi: string,
    ya_tidak: string,

    mata_kanan: string,
    mata_kiri: string,
    pantocain_ya: string,
    pantocain_tidak: string,
    mydriatil_ya: string,
    mydriatil_tidak: string,
    laser_prp: string,
    laser_prp_1: string,
    laser_prp_2: string,
    laser_prp_3: string,
    grid: string,
    focal: string,
    barage: string,
    latice: string,

    retina_od: string,
    retina_os: string,
    Tanda_Tangan_Perawat: string,
    Tanda_Tangan_Dokter: string,
    lampiran: any,
    nik: string,
  }

  constructor(req: IPdfRetinaLaserActionRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfRetinaLaserActionRequest) {
    return new PdfRetinaLaserActionRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfRetinaLaserActionRequest {
    return new PdfRetinaLaserActionRequest({
      emr_id: emrId,
      form_name: 'laporan-tindakan-laser-retina',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        dokter_operator: val?.form?.Nama_TTD_Dokter_Operator ?? '',
        tgl_tindakan: DateTimeConverter.convertToDateTime(val?.form?.TTD_Tanggal),
        diagnosa: val?.form?.Diagnosa_Tindakan ?? '',
        nama_perawat: val?.form?.Nama_TTD_Perawat_Rawat_Jalan ?? '',
        nama_dokter: val?.form?.Nama_TTD_Dokter_Operator ?? '',
        jenis_anetesi: val?.form?.Jenis_Id ?? '',
        obat_anestesi: val?.form?.Obat_Id ?? '',
        spot_size: val?.form?.Spot_Size ?? '',
        durasi: val?.form?.Durasi ?? '',
        power: val?.form?.Power ?? '',
        jumlah_tembakan: val?.form?.Jumlah_Tembakan ?? '',
        komplikasi: val?.form?.Komplikasi ?? '',
        ya_tidak: val?.form?.noncort_eye_drop === '1' ? 'ya' : 'tidak',

        mata_kanan: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Mata?.Kanan === 1),
        mata_kiri: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Mata?.Kiri === 1),
        pantocain_ya: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Mata_Pasien_Ditetes?.Pantocain === 1),
        pantocain_tidak: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Mata_Pasien_Ditetes?.Pantocain === 0),
        mydriatil_ya: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Mata_Pasien_Ditetes?.Mydriatil === 1),
        mydriatil_tidak: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Mata_Pasien_Ditetes?.Mydriatil === 0),
        laser_prp: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Tindakan_Laser?.Laser === 1),
        laser_prp_1: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Tindakan_Laser?.Laser_1 === 1),
        laser_prp_2: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Tindakan_Laser?.Laser_2 === 1),
        laser_prp_3: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Tindakan_Laser?.Laser_3 === 1),
        grid: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Tindakan_Laser?.Grid === 1),
        focal: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Tindakan_Laser?.Focal === 1),
        barage: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Tindakan_Laser?.Barrage === 1),
        latice: PdfRetinaLaserActionRequest.getCheckImage(val?.form?.Tindakan_Laser?.Lattice === 1),

        retina_od: val?.form?.Gambar_Retina_OD ?? undefined,
        retina_os: val?.form?.Gambar_Retina_OS ?? undefined,
        Tanda_Tangan_Perawat: val?.form?.TTD_Perawat_Rawat_Jalan ?? undefined,
        Tanda_Tangan_Dokter: val?.form?.TTD_Dokter_Operator ?? undefined,
        nik: val?.pasien?.NIK ?? '',
        lampiran: Array.isArray(val?.dicoms) ? val?.dicoms.map((dicoms: any, i: number) => {
          return {
            gambar_lampiran: (dicoms.Thumbnail !== '') ? dicoms.Thumbnail : undefined,
          }
        }) : [],
      },
    })
  }
}
