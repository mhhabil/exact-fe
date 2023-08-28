import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import { IPrescription } from "../../doctor-preliminary-study/models/doctor-preliminary-study.model";
import { DateTimeConverter } from "@src/shared/datetime-converter";

export interface IPdfConsultationSheetRequest extends ICreatePDFRequest {
  id: string;
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string;
    tanggal_konsultasi: string;
    dokter_konsultasi: string;
    diagnosa: string;
    terapi: string;
    ttd_dokter_dpjp: string;
    dokter_dpjp: string;
    tanggal_balasan_konsultasi: string;
    ttd_dokter_konsultasi: string;
    anjuran: string;
    status_konsul_1: string;
    status_konsul_2: string;
    status_konsul_3: string;
    isResep: boolean;
    resep: any;
    nik: string;
  }
}

export class PdfConsultationSheetRequest extends CreatePDFRequest {
  id: string;
  data: {
    nomor_mr: string;
    'pasien.Nama': string,
    'pasien.Tgl_Lahir': string,
    'pasien.Umur': string,
    'pasien.Jenis_Kelamin': string;
    tanggal_konsultasi: string;
    dokter_konsultasi: string;
    diagnosa: string;
    terapi: string;
    ttd_dokter_dpjp: string;
    dokter_dpjp: string;
    tanggal_balasan_konsultasi: string;
    anjuran: string;
    ttd_dokter_konsultasi: string;
    status_konsul_1: string;
    status_konsul_2: string;
    status_konsul_3: string;
    isResep: boolean;
    resep: any;
    nik: string;
  }

  constructor(req: IPdfConsultationSheetRequest) {
    super(req);
    this.id = req.id
    this.data = req.data;
  }

  static createFromJson(json: IPdfConsultationSheetRequest) {
    return new PdfConsultationSheetRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): PdfConsultationSheetRequest {
    const resep = val.Balas_Resep && Array.isArray(val.Balas_Resep) && val.Balas_Resep.length > 0 ? val.Balas_Resep : [];
    const newResep = resep.map((item: IPrescription, key: number) => {
      return {
        no: `${key + 1}`,
        namaObat: item.Nama_Obat,
        namaSatuan: item.Nama_Satuan,
        jumlah: item.Jumlah,
        aturanPakai: item.Kode_AturanPakai,
        catatan: item.Catatan,
      }
    });
    return new PdfConsultationSheetRequest({
      id: val.ID ?? '',
      emr_id: emrId,
      form_name: 'rawat-jalan_lembar-konsultasi',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(val?.pasien?.Umur_Lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        tanggal_konsultasi: DateTimeConverter.convertToNormalDate(val.Tanggal_Konsul),
        dokter_konsultasi: val.Rumah_Sakit_Tujuan && val.Rumah_Sakit_Tujuan === 'eksternal' ? val.Dokter_Konsul_Nama_Eksternal : val.Yth_Dokter_Konsul_Nama ? val.Yth_Dokter_Konsul_Nama : '',
        diagnosa: val.Diagnosa ?? '',
        terapi: val.Terapi ?? '',
        ttd_dokter_dpjp: val.TTD_Dokter_Konsultasi && val.TTD_Dokter_Konsultasi !== '' ? val.TTD_Dokter_Konsultasi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        dokter_dpjp: val.Nama_TTD_Dokter_Konsultasi ?? '',
        tanggal_balasan_konsultasi: DateTimeConverter.convertToNormalDate(val.Tanggal_Balas),
        anjuran: val.Anjuran ?? '',
        ttd_dokter_konsultasi: val.TTD_Dokter_Balas_Konsultasi && val.TTD_Dokter_Balas_Konsultasi !== '' ? val.TTD_Dokter_Balas_Konsultasi : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        status_konsul_1: PdfConsultationSheetRequest.getCheckImage(val?.Status_Konsultasi === '1'),
        status_konsul_2: PdfConsultationSheetRequest.getCheckImage(val?.Status_Konsultasi === '2'),
        status_konsul_3: PdfConsultationSheetRequest.getCheckImage(val?.Status_Konsultasi === '3'),
        isResep: !!(val && val.Balas_Resep && Array.isArray(val.Balas_Resep) && val.Balas_Resep.length > 0),
        resep: newResep,
        nik: val?.pasien?.NIK ?? '',
      },
    })
  }
}
