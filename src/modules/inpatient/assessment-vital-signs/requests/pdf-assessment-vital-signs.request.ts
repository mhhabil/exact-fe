import { CreatePDFRequest } from '@src/shared/pdf/requests/create-pdf.request';
import dataLokasi from '../const/dataLokasi';
import dataKualitas from '../const/dataKualitas';
import dataTindakan from '../const/dataTindakan';
import dataFrekuensi from '../const/dataFrekuensi';
import { DateTimeConverter } from '@src/shared/datetime-converter';


export interface IPdfAssessmentVitalSignsItemRequest {
  date_time: string;
  s: string;
  n: string;
  p: string;
  td: string;
  o2sat: string;
  th : string;
  skalanyeri : string;
  lokasi : string;
  kualitas : string;
  tindakan : string;
  frekuensi : string;
  ttd_perawat : string;
  nama_perawat : string;
  nik: string;
}

export class PdfAssessmentVitalSignsItemRequest {
  date_time: string;
  s: string;
  n: string;
  p: string;
  td: string;
  o2sat: string;
  th : string;
  skalanyeri : string;
  lokasi : string;
  kualitas : string;
  frekuensi : string;
  tindakan : string;
  ttd_perawat : string;
  nama_perawat : string;
  nik: string;
  constructor(req: IPdfAssessmentVitalSignsItemRequest) {
    this.date_time = req.date_time;
    this.s = req.s;
    this.n = req.n;
    this.p = req.p;
    this.td = req.td;
    this.o2sat = req.o2sat;
    this.th = req.th;
    this.skalanyeri = req.skalanyeri;
    this.lokasi = req.lokasi;
    this.kualitas = req.kualitas;
    this.frekuensi = req.frekuensi;
    this.tindakan = req.tindakan;
    this.ttd_perawat = req.ttd_perawat;
    this.nama_perawat  = req.nama_perawat;
    this.nik = req.nik;
  }

  static createFromJson(json: IPdfAssessmentVitalSignsItemRequest) {
    return new PdfAssessmentVitalSignsItemRequest(json);
  }
}

export interface IPdfAssessmentVitalSignsRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    items: Array<IPdfAssessmentVitalSignsItemRequest>,
  };
}

export class PdfAssessmentVitalSignsRequest {
  emr_id: string;
  form_name: string;
  row_filter: string;
  preview: boolean;
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    items: Array<PdfAssessmentVitalSignsItemRequest>,
  };

  constructor(req: IPdfAssessmentVitalSignsRequest) {
    this.emr_id = req.emr_id;
    this.form_name = req.form_name;
    this.row_filter = req.row_filter;
    this.preview = req.preview;
    this.data = req.data;
  }

  static createFromJson(json: IPdfAssessmentVitalSignsRequest) {
    return new PdfAssessmentVitalSignsRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): IPdfAssessmentVitalSignsRequest {

    const getLokasi = (id: string) => {
      const selected = dataLokasi.find((item: any) => item.id === id);
      if (selected) {
        return selected.nama;
      } else {
        return '';
      }
    }

    const getKualitas = (id: string) => {
      const selected = dataKualitas.find((item: any) => item.id === id);
      if (selected) {
        return selected.nama;
      } else {
        return '';
      }
    }

    const getTindakan = (id: string) => {
      const selected = dataTindakan.find((item: any) => item.id === id);
      if (selected) {
        return selected.nama;
      } else {
        return '';
      }
    }

    const getFrekuensi = (id: string) => {
      const selected = dataFrekuensi.find((item: any) => item.id === id);
      if (selected) {
        return selected.nama;
      } else {
        return '';
      }
    }

    const formatDateIndo = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
      return dateFormat;
    }

    const formatDate = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
      return dateFormat;
    }

    return {
      emr_id: emrId,
      form_name: 'rawat-inap_asesmen-ulang-tanda-vital',
      row_filter: "",
      preview: false,
      data: {
        nomor_mr: val?.pasien?.No_MR ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': formatDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': CreatePDFRequest.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        items: (Array.isArray(val?.records)) ? val?.records.map((row: any) => new PdfAssessmentVitalSignsItemRequest({
          date_time: formatDateIndo(row?.Waktu_Asesmen ?? ''),
          s: row?.Suhu ?? '',
          n: row?.Nadi ?? '',
          p: row?.Pernafasan ?? '',
          td: row?.Tekanan_Darah ?? '',
          o2sat: row?.Oxygen_Saturation ?? '',
          th : row?.Th ?? '',
          skalanyeri  :  row?.Skala_Nyeri ?? '',
          lokasi  :  getLokasi(row.Lokasi_Id),
          kualitas  : getKualitas(row.Kualitas_Id),
          tindakan  :  getTindakan(row.Tindakan_Id),
          frekuensi  :  getFrekuensi(row.Frekuensi_Id),
          ttd_perawat  : (row?.TTD_Perawat !== '') ? row?.TTD_Perawat : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
          nama_perawat  :  row?.Nama_Perawat ?? '',
          nik: val?.pasien?.NIK ?? '',
        })) : [],
      },
    }
  }
}
