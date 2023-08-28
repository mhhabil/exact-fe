import dataTindakan from '../const/dataTindakan';
import dataLokasi from '../const/dataLokasi';
import { DateTimeConverter } from '@src/shared/datetime-converter';


export interface IPdfPainMonitoringItemRequest {
  no : string;
  tgl_jam: string;
  tensi: string;
  nadi: string;
  suhu: string;
  rr: string;
  skor_nyeri : string;
  lokasi_nyeri : string;
  tindakan : string;
  ttd_perawat : string;
  nama_perawat : string;
  unit: string;
  nik: string;
}

export class PdfPainMonitoringItemRequest {
  no : string;
  tgl_jam: string;
  tensi: string;
  nadi: string;
  suhu: string;
  rr: string;
  skor_nyeri : string;
  lokasi_nyeri : string;
  tindakan : string;
  ttd_perawat : string;
  nama_perawat : string;
  unit: string;
  nik: string;


  constructor(req: IPdfPainMonitoringItemRequest) {
    this.no = req.no;
    this.tgl_jam = req.tgl_jam;
    this.tensi = req.tensi;
    this.nadi = req.nadi;
    this.suhu = req.suhu;
    this.rr = req.rr;
    this.skor_nyeri = req.skor_nyeri;
    this.lokasi_nyeri = req.lokasi_nyeri;
    this.tindakan = req.tindakan;
    this.ttd_perawat = req.ttd_perawat;
    this.nama_perawat = req.nama_perawat;
    this.unit = req.unit;
    this.nik = req.nik;


  }

  static createFromJson(json: IPdfPainMonitoringItemRequest) {
    return new PdfPainMonitoringItemRequest(json);
  }
}

export interface IPdfPainMonitoringRequest {
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
    items: Array<IPdfPainMonitoringItemRequest>,
  };
}

export class PdfPainMonitoringRequest {
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
    items: Array<PdfPainMonitoringItemRequest>,
  };

  constructor(req: IPdfPainMonitoringRequest) {
    this.emr_id = req.emr_id;
    this.form_name = req.form_name;
    this.row_filter = req.row_filter;
    this.preview = req.preview;
    this.data = req.data;
  }

  static createFromJson(json: IPdfPainMonitoringRequest) {
    return new PdfPainMonitoringRequest(json);
  }

  static createPdfRequest(val: any, emrId: string): IPdfPainMonitoringRequest {

    const getTindakan = (tindakan: any) => {
      const selectedTindakan = dataTindakan.find((val: any) => val.id === tindakan)
      if (selectedTindakan) {
        return selectedTindakan.nama;
      } else {
        return "";
      }
    }

    const getLokasi = (lokasi: any) => {
      const selectedLokasi = dataLokasi.find((val: any) => val.id === lokasi)
      if (selectedLokasi) {
        return selectedLokasi.nama;
      } else {
        return "";
      }
    }


    const formatDateIndo = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
      return dateFormat;
    }

    return {
      emr_id: emrId,
      form_name: 'rawat-inap_formulir-monitoring-nyeri',
      row_filter: "",
      preview: false,
      data: {
        nomor_mr: val?.pasien?.No_MR ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Umur': val?.pasien?.Umur ?? '',
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        items: (Array.isArray(val?.records)) ? val?.records.map((row: any, i: number) => new PdfPainMonitoringItemRequest({
          no: `${i + 1}`,
          tgl_jam: formatDateIndo(row?.Waktu_Monitor ?? ''),
          tensi : row?.Tekanan_Darah ?? '',
          nadi : row?.Nadi ?? '',
          suhu : row?.Temperatur ?? '',
          rr : row?.RR ?? '',
          skor_nyeri : row?.Skala_Nyeri ?? '',
          lokasi_nyeri : getLokasi(row?.Lokasi_Nyeri ?? ''),
          tindakan : getTindakan(row?.Tindakan ?? ''),
          ttd_perawat : (row?.TTD_Perawat !== '') ? row?.TTD_Perawat : '',
          nama_perawat : row?.Nama_Perawat ?? '',
          unit : row?.Unit ?? '',
          nik: val?.pasien?.NIK ?? '',
        })) : [],
      },
    }
  }
}
