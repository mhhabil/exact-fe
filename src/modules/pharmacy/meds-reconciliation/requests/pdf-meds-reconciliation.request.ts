import { ITreatmentModel } from "@src/modules/site/patient-list/models";
import { CreatePDFRequest, ICreatePDFRequest } from "@src/shared/pdf/requests/create-pdf.request";
import { IMedsReconciliationModel } from "../models/meds-reconciliation.model";
import { DateTimeConverter } from "@src/shared/datetime-converter";

interface IAllergyPdf {
  no: string;
  nama_obat_alergi: string;
  tingkat_r: string;
  tingkat_s: string;
  tingkat_b: string;
  reaksi_alergi: string;
}

interface IHistoryPdf {
  no: string;
  riwayat_pemakaian_obat: string;
}

interface IInMedsPdf {
  nama_obat_masuk_rs: string;
  jumlah_obat_masuk_rs: string;
  rute_obat_masuk_rs: string;
  aturan_pakai_obat_masuk_rs: string;
  tindak_lanjut_masuk_rs_1: string;
  tindak_lanjut_masuk_rs_2: string;
  tindak_lanjut_masuk_rs_3: string;
  perubahan_aturan_pakai_obat_masuk_rs: string;
  obat_milik_pasien_masuk_rs_ya: string;
  obat_milik_pasien_masuk_rs_tidak: string;
}

interface IFirstRoomPdf {
  nama_obat_ruangan1: string;
  jumlah_ruangan1: string;
  rute_ruangan1: string;
  aturan_pakai_ruangan1: string;
  tindak_lanjut_ruangan1_1: string;
  tindak_lanjut_ruangan1_2: string;
  perubahan_aturan_pakai_ruangan1: string;
}

interface ISecondRoomPdf {
  nama_obat_ruangan2: string;
  jumlah_ruangan2: string;
  rute_ruangan2: string;
  aturan_pakai_ruangan2: string;
  tindak_lanjut_ruangan2_1: string;
  tindak_lanjut_ruangan2_2: string;
  perubahan_aturan_pakai_ruangan2: string;
}

interface IOutMedsPdf {
  nama_obat_keluar_rs: string;
  jumlah_keluar_rs: string;
  rute_keluar_rs: string;
  aturan_pakai_keluar_rs: string;
  tindak_lanjut_keluar_rs_1: string;
  tindak_lanjut_keluar_rs_2: string;
  tindak_lanjut_keluar_rs_3: string;
  tindak_lanjut_keluar_rs_4: string;
  perubahan_aturan_pakai_keluar_rs: string;
  obat_milik_pasien_keluar_rs_obat_karantina: string;
  obat_milik_pasien_keluar_rs_obat_berobat_jalan: string;
}

export interface IPdfMedsReconciliationRequest extends ICreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    alergi_ya_radio: string;
    alergi_tidak_radio: string;
    alergi_ya: Array<IAllergyPdf>;
    riwayat_pemakaian_obat: Array<IHistoryPdf>;
    unit_masuk_rs: string;
    nama_ka_unit_masuk_rs: string;
    date_masuk_rs: string;
    time_masuk_rs: string;
    obat_saat_masuk_rs: Array<IInMedsPdf>;
    ttd_perawat_saat_masuk_rs: string;
    ttd_pasien_saat_masuk_rs: string;
    ttd_dokter_saat_masuk_rs: string;
    ttd_apoteker_saat_masuk_rs: string;
    nama_perawat_saat_masuk_rs: string;
    nama_pasien_saat_masuk_rs: string;
    nama_dokter_saat_masuk_rs: string;
    nama_apoteker_saat_masuk_rs: string;
    unit_ruangan1: string;
    nama_ka_unit_ruangan1: string;
    date_ruangan1: string;
    time_ruangan1: string;
    obat_ruangan1: Array<IFirstRoomPdf>;
    ttd_perawat_ruangan1: string;
    ttd_dokter_ruangan1: string;
    ttd_pasien_ruangan1: string;
    ttd_apoteker_ruangan1: string;
    nama_perawat_ruangan1: string;
    nama_dokter_ruangan1: string;
    nama_pasien_ruangan1: string;
    nama_apoteker_ruangan1: string;
    unit_ruangan2: string;
    nama_ka_unit_ruangan2: string;
    date_ruangan2: string;
    time_ruangan2: string;
    obat_ruangan2: Array<ISecondRoomPdf>;
    ttd_perawat_ruangan2: string;
    ttd_dokter_ruangan2: string;
    ttd_pasien_ruangan2: string;
    ttd_apoteker_ruangan2: string;
    nama_perawat_ruangan2: string;
    nama_dokter_ruangan2: string;
    nama_pasien_ruangan2: string;
    nama_apoteker_ruangan2: string;
    unit_keluar_rs: string;
    date_keluar_rs: string;
    time_keluar_rs: string;
    obat_keluar_rs: Array<IOutMedsPdf>;
    ttd_perawat_keluar_rs: string;
    ttd_dokter_keluar_rs: string;
    ttd_pasien_keluar_rs: string;
    ttd_apoteker_keluar_rs: string;
    nama_perawat_keluar_rs: string;
    nama_dokter_keluar_rs: string;
    nama_pasien_keluar_rs: string;
    nama_apoteker_keluar_rs: string;
    date: string;
    time: string;
    nik:  string;
  }
}

export class PdfMedsReconciliationRequest extends CreatePDFRequest {
  data: {
    nomor_mr: string;
    'pasien.Nama': string;
    'pasien.Tgl_Lahir': string;
    'pasien.Umur': string;
    'pasien.Jenis_Kelamin': string;
    alergi_ya_radio: string;
    alergi_tidak_radio: string;
    alergi_ya: Array<IAllergyPdf>;
    riwayat_pemakaian_obat: Array<IHistoryPdf>;
    unit_masuk_rs: string;
    nama_ka_unit_masuk_rs: string;
    date_masuk_rs: string;
    time_masuk_rs: string;
    obat_saat_masuk_rs: Array<IInMedsPdf>;
    ttd_perawat_saat_masuk_rs: string;
    ttd_pasien_saat_masuk_rs: string;
    ttd_dokter_saat_masuk_rs: string;
    ttd_apoteker_saat_masuk_rs: string;
    nama_perawat_saat_masuk_rs: string;
    nama_pasien_saat_masuk_rs: string;
    nama_dokter_saat_masuk_rs: string;
    nama_apoteker_saat_masuk_rs: string;
    unit_ruangan1: string;
    nama_ka_unit_ruangan1: string;
    date_ruangan1: string;
    time_ruangan1: string;
    obat_ruangan1: Array<IFirstRoomPdf>;
    ttd_perawat_ruangan1: string;
    ttd_dokter_ruangan1: string;
    ttd_pasien_ruangan1: string;
    ttd_apoteker_ruangan1: string;
    nama_perawat_ruangan1: string;
    nama_dokter_ruangan1: string;
    nama_pasien_ruangan1: string;
    nama_apoteker_ruangan1: string;
    unit_ruangan2: string;
    nama_ka_unit_ruangan2: string;
    date_ruangan2: string;
    time_ruangan2: string;
    obat_ruangan2: Array<ISecondRoomPdf>;
    ttd_perawat_ruangan2: string;
    ttd_dokter_ruangan2: string;
    ttd_pasien_ruangan2: string;
    ttd_apoteker_ruangan2: string;
    nama_perawat_ruangan2: string;
    nama_dokter_ruangan2: string;
    nama_pasien_ruangan2: string;
    nama_apoteker_ruangan2: string;
    unit_keluar_rs: string;
    date_keluar_rs: string;
    time_keluar_rs: string;
    obat_keluar_rs: Array<IOutMedsPdf>;
    ttd_perawat_keluar_rs: string;
    ttd_dokter_keluar_rs: string;
    ttd_pasien_keluar_rs: string;
    ttd_apoteker_keluar_rs: string;
    nama_perawat_keluar_rs: string;
    nama_dokter_keluar_rs: string;
    nama_pasien_keluar_rs: string;
    nama_apoteker_keluar_rs: string;
    date: string;
    time: string;
    nik: string;
  }

  constructor(req: IPdfMedsReconciliationRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfMedsReconciliationRequest) {
    return new PdfMedsReconciliationRequest(json);
  }

  static createPdfRequest(data: IMedsReconciliationModel, treatment: ITreatmentModel): IPdfMedsReconciliationRequest {
    const history = data.form && data.form.Riwayat_Pemakaian_Obat && Array.isArray(data.form.Riwayat_Pemakaian_Obat) && data.form.Riwayat_Pemakaian_Obat.length > 0 ? data.form.Riwayat_Pemakaian_Obat : [];
    const allergies = data.form && data.form.Alergi_Obat && Array.isArray(data.form.Alergi_Obat) && data.form.Alergi_Obat.length > 0 ? data.form.Alergi_Obat : [];
    const inMeds = data.form && data.form.Obat_Saat_Masuk_RS && Array.isArray(data.form.Obat_Saat_Masuk_RS) && data.form.Obat_Saat_Masuk_RS.length > 0 ? data.form.Obat_Saat_Masuk_RS : [];
    const room1 = data.form && data.form.Obat_Ruangan_1 && Array.isArray(data.form.Obat_Ruangan_1) && data.form.Obat_Ruangan_1.length > 0 ? data.form.Obat_Ruangan_1 : [];
    const room2 = data.form && data.form.Obat_Ruangan_2 && Array.isArray(data.form.Obat_Ruangan_2) && data.form.Obat_Ruangan_2.length > 0 ? data.form.Obat_Ruangan_2 : [];
    const outMeds = data.form && data.form.Obat_Keluar && Array.isArray(data.form.Obat_Keluar) && data.form.Obat_Keluar.length > 0 ? data.form.Obat_Keluar : [];

    const alergi_ya: Array<IAllergyPdf> = allergies.map((item, key) => {
      return {
        no: `${key + 1}`,
        nama_obat_alergi: item.Nama_Obat_Alergi ?? '',
        tingkat_r: this.getCheckImage(!!(item.Tingkat && item.Tingkat === 'R')),
        tingkat_s: this.getCheckImage(!!(item.Tingkat && item.Tingkat === 'S')),
        tingkat_b: this.getCheckImage(!!(item.Tingkat && item.Tingkat === 'B')),
        reaksi_alergi: item.Reaksi_Alergi ?? '',
      }
    });

    const riwayat_pemakaian_obat: Array<IHistoryPdf> = history.map((item, key) => {
      return {
        no: `${key + 1}`,
        riwayat_pemakaian_obat: item ?? '',
      }
    });

    const obat_saat_masuk_rs: Array<IInMedsPdf> = inMeds.map((item, key) => {
      return {
        nama_obat_masuk_rs: item.Nama_Obat ?? '',
        jumlah_obat_masuk_rs: item.Jumlah ?? '',
        rute_obat_masuk_rs: item.Rute ?? '',
        aturan_pakai_obat_masuk_rs: item.Aturan_Pakai ?? '',
        tindak_lanjut_masuk_rs_1: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '1')),
        tindak_lanjut_masuk_rs_2: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '2')),
        tindak_lanjut_masuk_rs_3: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '3')),
        perubahan_aturan_pakai_obat_masuk_rs: item.Perubahan_Aturan_Pakai ?? '',
        obat_milik_pasien_masuk_rs_ya: this.getCheckImage(!!(item.Obat_Milik_Pasien && item.Obat_Milik_Pasien === '1')),
        obat_milik_pasien_masuk_rs_tidak: this.getCheckImage(!!(item.Obat_Milik_Pasien && item.Obat_Milik_Pasien === '0')),
      }
    })

    const obat_ruangan1: Array<IFirstRoomPdf> = room1.map((item, key) => {
      return {
        nama_obat_ruangan1: item.Nama_Obat ?? '',
        jumlah_ruangan1: item.Jumlah ?? '',
        rute_ruangan1: item.Rute ?? '',
        aturan_pakai_ruangan1: item.Aturan_Pakai ?? '',
        tindak_lanjut_ruangan1_1: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '1')),
        tindak_lanjut_ruangan1_2: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '2')),
        perubahan_aturan_pakai_ruangan1: item.Perubahan_Aturan_Pakai ?? '',
      }
    });

    const obat_ruangan2: Array<ISecondRoomPdf> = room2.map((item, key) => {
      return {
        nama_obat_ruangan2: item.Nama_Obat ?? '',
        jumlah_ruangan2: item.Jumlah ?? '',
        rute_ruangan2: item.Rute ?? '',
        aturan_pakai_ruangan2: item.Aturan_Pakai ?? '',
        tindak_lanjut_ruangan2_1: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '1')),
        tindak_lanjut_ruangan2_2: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '2')),
        perubahan_aturan_pakai_ruangan2: item.Perubahan_Aturan_Pakai ?? '',
      }
    });

    const obat_keluar_rs: Array<IOutMedsPdf> = outMeds.map((item, key) => {
      return {
        nama_obat_keluar_rs: item.Nama_Obat ?? '',
        jumlah_keluar_rs: item.Jumlah ?? '',
        rute_keluar_rs: item.Rute ?? '',
        aturan_pakai_keluar_rs: item.Aturan_Pakai ?? '',
        tindak_lanjut_keluar_rs_1: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '1')),
        tindak_lanjut_keluar_rs_2: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '2')),
        tindak_lanjut_keluar_rs_3: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '3')),
        tindak_lanjut_keluar_rs_4: this.getCheckImage(!!(item.Tindak_Lanjut && item.Tindak_Lanjut === '4')),
        perubahan_aturan_pakai_keluar_rs: item.Perubahan_Aturan_Pakai ?? '',
        obat_milik_pasien_keluar_rs_obat_karantina: this.getCheckImage(!!(item.Kategori && item.Kategori === '1')),
        obat_milik_pasien_keluar_rs_obat_berobat_jalan: this.getCheckImage(!!(item.Kategori && item.Kategori === '2')),
      }
    })

    return new PdfMedsReconciliationRequest({
      emr_id: treatment.EMR_ID,
      form_name: 'farmasi_rekonsiliasi-obat',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: treatment.No_MR ?? '',
        'pasien.Nama': treatment?.Pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(treatment?.Pasien?.Tgl_Lahir),
        'pasien.Umur': this.normalizeAge(treatment?.Pasien?.Umur_Lengkap) ?? '',
        'pasien.Jenis_Kelamin': treatment?.Pasien?.Jenis_Kelamin ?? '',
        nama_pasien_saat_masuk_rs: treatment?.Pasien?.Nama ?? '',
        nama_pasien_keluar_rs: treatment?.Pasien?.Nama ?? '',
        nama_pasien_ruangan1: treatment?.Pasien?.Nama ?? '',
        nama_pasien_ruangan2: treatment?.Pasien?.Nama ?? '',
        alergi_ya_radio: this.getCheckImage(!!(data.form && data.form.Alergi_Obat_Radio && data.form.Alergi_Obat_Radio === '1')),
        alergi_tidak_radio: this.getCheckImage(!!(data.form && data.form.Alergi_Obat_Radio && data.form.Alergi_Obat_Radio === '0')),
        alergi_ya,
        riwayat_pemakaian_obat,
        unit_masuk_rs: data?.form?.Unit_Masuk_RS ?? '',
        nama_ka_unit_masuk_rs: data?.form?.Nama_Ka_Unit_Masuk_RS ?? '',
        date_masuk_rs: DateTimeConverter.convertToNormalDate(data.form && data.form.Waktu_Masuk_RS ? data.form.Waktu_Masuk_RS.substring(0, 10) : ''),
        time_masuk_rs: data.form && data.form.Waktu_Masuk_RS ? data.form.Waktu_Masuk_RS.substring(11, 16) : '',
        obat_saat_masuk_rs,
        ttd_perawat_saat_masuk_rs: data.form && data.form.TTD_Perawat_Masuk_RS && data.form.TTD_Perawat_Masuk_RS !== '' ? data.form.TTD_Perawat_Masuk_RS : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_perawat_saat_masuk_rs: data?.form?.Nama_Perawat_Masuk_RS ?? '',
        ttd_pasien_saat_masuk_rs: data.form && data.form.TTD_Pasien_Masuk_RS && data.form.TTD_Pasien_Masuk_RS !== '' ? data.form.TTD_Pasien_Masuk_RS : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dokter_saat_masuk_rs: data.form && data.form.TTD_Dokter_Masuk_RS && data.form.TTD_Dokter_Masuk_RS !== '' ? data.form.TTD_Dokter_Masuk_RS : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_dokter_saat_masuk_rs: data?.form?.Nama_Dokter_Masuk_RS ?? '',
        ttd_apoteker_saat_masuk_rs: data.form && data.form.TTD_Apoteker_Masuk_RS && data.form.TTD_Apoteker_Masuk_RS !== '' ? data.form.TTD_Apoteker_Masuk_RS : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_apoteker_saat_masuk_rs: data?.form?.Nama_Apoteker_Masuk_RS ?? '',
        unit_ruangan1: data?.form?.Unit_Ruangan_1 ?? '',
        nama_ka_unit_ruangan1: data?.form?.Nama_Ka_Unit_Ruangan_1 ?? '',
        date_ruangan1: DateTimeConverter.convertToNormalDate(data.form && data.form.Waktu_Ruangan_1 ? data.form.Waktu_Ruangan_1.substring(0, 10) : ''),
        time_ruangan1: data.form && data.form.Waktu_Ruangan_1 ? data.form.Waktu_Ruangan_1.substring(11, 16) : '',
        obat_ruangan1,
        ttd_perawat_ruangan1: data.form && data.form.TTD_Perawat_Ruangan_1 && data.form.TTD_Perawat_Ruangan_1 !== '' ? data.form.TTD_Perawat_Ruangan_1 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_perawat_ruangan1: data?.form?.Nama_Perawat_Ruangan_1 ?? '',
        ttd_pasien_ruangan1: data.form && data.form.TTD_Pasien_Ruangan_1 && data.form.TTD_Pasien_Ruangan_1 !== '' ? data.form.TTD_Pasien_Ruangan_1 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dokter_ruangan1: data.form && data.form.TTD_Dokter_Ruangan_1 && data.form.TTD_Dokter_Ruangan_1 !== '' ? data.form.TTD_Dokter_Ruangan_1 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_dokter_ruangan1: data?.form?.Nama_Dokter_Ruangan_1 ?? '',
        ttd_apoteker_ruangan1: data.form && data.form.TTD_Apoteker_Ruangan_1 && data.form.TTD_Apoteker_Ruangan_1 !== '' ? data.form.TTD_Apoteker_Ruangan_1 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_apoteker_ruangan1: data?.form?.Nama_Apoteker_Ruangan_1 ?? '',
        unit_ruangan2: data?.form?.Unit_Ruangan_2 ?? '',
        nama_ka_unit_ruangan2: data?.form?.Nama_Ka_Unit_Ruangan_2 ?? '',
        date: DateTimeConverter.convertToNormalDate(data.form && data.form.Waktu_Ruangan_2 ? data.form.Waktu_Ruangan_2.substring(0, 10) : ''),
        time: data.form && data.form.Waktu_Ruangan_2 ? data.form.Waktu_Ruangan_2.substring(11, 16) : '',
        date_ruangan2: data.form && data.form.Waktu_Ruangan_2 ? data.form.Waktu_Ruangan_2.substring(0, 10) : '',
        time_ruangan2: data.form && data.form.Waktu_Ruangan_2 ? data.form.Waktu_Ruangan_2.substring(11, 16) : '',
        obat_ruangan2,
        ttd_perawat_ruangan2: data.form && data.form.TTD_Perawat_Ruangan_2 && data.form.TTD_Perawat_Ruangan_2 !== '' ? data.form.TTD_Perawat_Ruangan_2 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_perawat_ruangan2: data?.form?.Nama_Perawat_Ruangan_2 ?? '',
        ttd_pasien_ruangan2: data.form && data.form.TTD_Pasien_Ruangan_2 && data.form.TTD_Pasien_Ruangan_2 !== '' ? data.form.TTD_Pasien_Ruangan_2 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dokter_ruangan2: data.form && data.form.TTD_Dokter_Ruangan_2 && data.form.TTD_Dokter_Ruangan_2 !== '' ? data.form.TTD_Dokter_Ruangan_2 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_dokter_ruangan2: data?.form?.Nama_Dokter_Ruangan_2 ?? '',
        ttd_apoteker_ruangan2: data.form && data.form.TTD_Apoteker_Ruangan_2 && data.form.TTD_Apoteker_Ruangan_2 !== '' ? data.form.TTD_Apoteker_Ruangan_2 : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_apoteker_ruangan2: data?.form?.Nama_Apoteker_Ruangan_2 ?? '',
        unit_keluar_rs: data?.form?.Unit_Keluar ?? '',
        date_keluar_rs: DateTimeConverter.convertToNormalDate(data.form && data.form.Waktu_Keluar ? data.form.Waktu_Keluar.substring(0, 10) : ''),
        time_keluar_rs: data.form && data.form.Waktu_Keluar ? data.form.Waktu_Keluar.substring(11, 16) : '',
        obat_keluar_rs,
        ttd_perawat_keluar_rs: data.form && data.form.TTD_Perawat_Keluar && data.form.TTD_Perawat_Keluar !== '' ? data.form.TTD_Perawat_Keluar : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_perawat_keluar_rs: data?.form?.Nama_Perawat_Keluar ?? '',
        ttd_pasien_keluar_rs: data.form && data.form.TTD_Pasien_Keluar && data.form.TTD_Pasien_Keluar !== '' ? data.form.TTD_Pasien_Keluar : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        ttd_dokter_keluar_rs: data.form && data.form.TTD_Dokter_Keluar && data.form.TTD_Dokter_Keluar !== '' ? data.form.TTD_Dokter_Keluar : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_dokter_keluar_rs: data?.form?.Nama_Dokter_Keluar ?? '',
        ttd_apoteker_keluar_rs: data.form && data.form.TTD_Apoteker_Keluar && data.form.TTD_Apoteker_Keluar !== '' ? data.form.TTD_Apoteker_Keluar : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_apoteker_keluar_rs: data?.form?.Nama_Apoteker_Keluar ?? '',
        nik: treatment?.Pasien?.NIK ?? '',
      },
    })
  }
}
