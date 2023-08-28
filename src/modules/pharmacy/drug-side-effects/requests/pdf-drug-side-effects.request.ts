import {
  CreatePDFRequest,
  ICreatePDFRequest,
} from "@shared/pdf/requests/create-pdf.request";
import { IAppRequest } from "@src/shared/request";
import citymapping from '@modules/outpatient/proof-of-outpatient-services/const/citymapping';
import { DateTimeConverter } from "@src/shared/datetime-converter";

/*
export interface IObatDiterima {
  nama_obat: string;
  satuan: string;
  no_bets: string;
  aturan_pakai: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  obat_yang_dicurigai: string;
}

export class ObatDiterima {
  nama_obat: string;
  satuan: string;
  no_bets: string;
  aturan_pakai: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  obat_yang_dicurigai: string;

  constructor(obatditerima: IObatDiterima) {
    this.nama_obat = obatditerima.nama_obat;
    this.satuan = obatditerima.satuan;
    this.no_bets = obatditerima.no_bets;
    this.aturan_pakai = obatditerima.aturan_pakai;
    this.tanggal_mulai = obatditerima.tanggal_mulai;
    this.tanggal_selesai = obatditerima.tanggal_selesai;
    this.obat_yang_dicurigai = obatditerima.obat_yang_dicurigai;
  }
}
*/

export interface IPdfDrugSideEffectsRequest extends ICreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  efek_samping_obat_ya : string;
  efek_samping_obat_tidak : string;
  tanggal: string;
  jam: string;
  jk_pria : string;
  jk_wanita : string;
  hamil_tidak : string;
  hamil_ya : string;
  check_suku : string;
  suku : string;
  check_bb : string;
  berat_badan : string;
  diagnosa_utama : string;
  kesudahan_penyakit_utama_sembuh : string;
  kesudahan_penyakit_utama_meninggal : string;
  kesudahan_penyakit_utama_sembuh_gejala : string;
  kesudahan_penyakit_utama_belum_sembuh : string;
  kesudahan_penyakit_utama_tidak_tahu : string;
  riw_penyakit_gangguan_hati : string;
  riw_penyakit_gangguan_ginjal : string;
  riw_penyakit_gangguan_kondisi_medis_lainnya : string;
  kondisi_medis_lain  : string;
  bentuk_manifestasi_eso :  string;
  tanggal_mula_terjadi :  string;
  tanggal_kesudahan:  string;
  kesudahan_eso_sembuh : string;
  kesudahan_eso_meninggal : string;
  kesudahaan_eso_sembuh_gejala : string;
  kesudahaan_eso_belum_sembuh : string;
  kesudahaan_eso_tidak_tahu : string;
  riwayat_eso_sebelumnya : string;
  keterangan_tambahan  : string;
  total_skor  : string;
  ttd_pelapor : string;
  nama_pelapor : string;

  naranjo_1_ya : string;
  naranjo_1_tidak : string;
  naranjo_1_tidak_diketahui : string;

  naranjo_2_ya : string;
  naranjo_2_tidak : string;
  naranjo_2_tidak_diketahui : string;

  naranjo_3_ya : string;
  naranjo_3_tidak : string;
  naranjo_3_tidak_diketahui : string;

  naranjo_4_ya : string;
  naranjo_4_tidak : string;
  naranjo_4_tidak_diketahui : string;

  naranjo_5_ya : string;
  naranjo_5_tidak : string;
  naranjo_5_tidak_diketahui : string;

  naranjo_6_ya : string;
  naranjo_6_tidak : string;
  naranjo_6_tidak_diketahui : string;

  naranjo_7_ya : string;
  naranjo_7_tidak : string;
  naranjo_7_tidak_diketahui : string;

  naranjo_8_ya : string;
  naranjo_8_tidak : string;
  naranjo_8_tidak_diketahui : string;

  naranjo_9_ya : string;
  naranjo_9_tidak : string;
  naranjo_9_tidak_diketahui : string;

  naranjo_10_ya : string;
  naranjo_10_tidak : string;
  naranjo_10_tidak_diketahui : string;

  nama_kota : string;
  tanggal_laporan : string;
  items : any;
  nik: string;
  };
}

export class PdfDrugSideEffectsRequest extends CreatePDFRequest {
  data: {
  nomor_mr: string;
  'pasien.Nama': string;
  'pasien.Tgl_Lahir': string;
  'pasien.Alamat': string;
  'pasien.Umur': string;
  'pasien.Jenis_Kelamin': string;
  efek_samping_obat_ya : string;
  efek_samping_obat_tidak : string;
  tanggal: string;
  jam: string;
  jk_pria : string;
  jk_wanita : string;
  hamil_tidak : string;
  hamil_ya : string;
  check_suku : string;
  suku : string;
  check_bb : string;
  berat_badan : string;
  diagnosa_utama : string;
  kesudahan_penyakit_utama_sembuh : string;
  kesudahan_penyakit_utama_meninggal : string;
  kesudahan_penyakit_utama_sembuh_gejala : string;
  kesudahan_penyakit_utama_belum_sembuh : string;
  kesudahan_penyakit_utama_tidak_tahu : string;
  riw_penyakit_gangguan_hati : string;
  riw_penyakit_gangguan_ginjal : string;
  riw_penyakit_gangguan_kondisi_medis_lainnya : string;
  kondisi_medis_lain  : string;
  bentuk_manifestasi_eso :  string;
  tanggal_mula_terjadi :  string;
  tanggal_kesudahan:  string;
  kesudahan_eso_sembuh : string;
  kesudahan_eso_meninggal : string;
  kesudahaan_eso_sembuh_gejala : string;
  kesudahaan_eso_belum_sembuh : string;
  kesudahaan_eso_tidak_tahu : string;
  riwayat_eso_sebelumnya : string;
  keterangan_tambahan  : string;
  total_skor  : string;
  ttd_pelapor : string;
  nama_pelapor : string;

  naranjo_1_ya : string;
  naranjo_1_tidak : string;
  naranjo_1_tidak_diketahui : string;

  naranjo_2_ya : string;
  naranjo_2_tidak : string;
  naranjo_2_tidak_diketahui : string;

  naranjo_3_ya : string;
  naranjo_3_tidak : string;
  naranjo_3_tidak_diketahui : string;

  naranjo_4_ya : string;
  naranjo_4_tidak : string;
  naranjo_4_tidak_diketahui : string;

  naranjo_5_ya : string;
  naranjo_5_tidak : string;
  naranjo_5_tidak_diketahui : string;

  naranjo_6_ya : string;
  naranjo_6_tidak : string;
  naranjo_6_tidak_diketahui : string;

  naranjo_7_ya : string;
  naranjo_7_tidak : string;
  naranjo_7_tidak_diketahui : string;

  naranjo_8_ya : string;
  naranjo_8_tidak : string;
  naranjo_8_tidak_diketahui : string;

  naranjo_9_ya : string;
  naranjo_9_tidak : string;
  naranjo_9_tidak_diketahui : string;

  naranjo_10_ya : string;
  naranjo_10_tidak : string;
  naranjo_10_tidak_diketahui : string;

  nama_kota : string;
  tanggal_laporan : string;
  items : any;
  nik: string;
  };

  constructor(req: IPdfDrugSideEffectsRequest) {
    super(req);
    this.data = req.data;
  }

  static createFromJson(json: IPdfDrugSideEffectsRequest) {
    return new PdfDrugSideEffectsRequest(json);
  }

  static createPdfRequest(val: any, appReq: IAppRequest): PdfDrugSideEffectsRequest {

    const getCity = (companyCode: string) => {
      const selected = citymapping.find((item: any) => item.company_code === companyCode);
      if (selected) {
        return selected.city;
      } else {
        return '';
      }
    }

    const formatTime = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
      return dateFormat;
    }

    const formatDate = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')}`
      return dateFormat;
    }

    const formatDateIndo = (dateNow: any) => {
      const d = new Date(dateNow);
      const dateFormat = `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear().toString().padStart(4, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
      return dateFormat;
    }

    return new PdfDrugSideEffectsRequest({
      emr_id: appReq.emr_id,
      form_name: 'farmasi_pelaporan-efek-samping-obat',
      row_filter: '',
      preview: false,
      data: {
        nomor_mr: val?.nomor_mr ?? '',
        'pasien.Nama': val?.pasien?.Nama ?? '',
        'pasien.Tgl_Lahir': DateTimeConverter.convertToNormalDate(val?.pasien?.Tgl_Lahir),
        'pasien.Alamat': val?.pasien?.Alamat ?? '',
        'pasien.Umur': this.normalizeAge(val?.umur_lengkap),
        'pasien.Jenis_Kelamin': val?.pasien?.Jenis_Kelamin ?? '',
        efek_samping_obat_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Terjadi_Efek_Samping_Obat === '1'),
        efek_samping_obat_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Terjadi_Efek_Samping_Obat === '1'),
        tanggal: formatDate(val?.form?.Waktu ?? ''),
        jam: formatTime(val?.form?.Waktu ?? ''),
        jk_pria : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Jenis_Kelamin === 'Laki-Laki'),
        jk_wanita : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Jenis_Kelamin === 'Perempuan'),
        hamil_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Status_Hamil === '0'),
        hamil_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Status_Hamil === '1'),
        check_suku : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Suku_Check === '1'),
        suku : val?.form?.Nama_Suku ?? '',
        check_bb : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Berat_Badan_Check === '1'),
        berat_badan : val?.form?.Berat_Badan ?? '',
        diagnosa_utama : val?.form?.Diagnosa_Utama ?? '',
        kesudahan_penyakit_utama_sembuh : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_Penyakit_Utama === '1'),
        kesudahan_penyakit_utama_meninggal : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_Penyakit_Utama === '2'),
        kesudahan_penyakit_utama_sembuh_gejala : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_Penyakit_Utama === '3'),
        kesudahan_penyakit_utama_belum_sembuh : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_Penyakit_Utama === '4'),
        kesudahan_penyakit_utama_tidak_tahu : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_Penyakit_Utama === '5'),
        riw_penyakit_gangguan_hati : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Riwayat_Hati_Check === '1'),
        riw_penyakit_gangguan_ginjal : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Riwayat_Ginjal_Check === '1'),
        riw_penyakit_gangguan_kondisi_medis_lainnya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Riwayat_Lain_Check === '1'),
        kondisi_medis_lain : val?.form?.Riwayat_Lain_Text ?? '',
        bentuk_manifestasi_eso :  val?.form?.Bentuk_Manifestasi_ESO ?? '',
        tanggal_mula_terjadi :   formatDateIndo(val?.form?.Tanggal_Mula_Terjadi ?? ''),
        tanggal_kesudahan:   formatDateIndo(val?.form?.Tanggal_Kesudahan ?? ''),
        kesudahan_eso_sembuh : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_ESO === '1'),
        kesudahan_eso_meninggal : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_ESO === '2'),
        kesudahaan_eso_sembuh_gejala : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_ESO === '3'),
        kesudahaan_eso_belum_sembuh : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_ESO === '4'),
        kesudahaan_eso_tidak_tahu : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Kesudahan_ESO === '5'),
        riwayat_eso_sebelumnya : val?.form?.Riwayat_ESO_Sebelum ?? '',
        keterangan_tambahan  : val?.form?.Keterangan_Tambahan ?? '',
        total_skor  : val?.form?.Total_Skor ?? '',
        ttd_pelapor : (val?.form?.TTD_Pelapor !== '') ? val?.form?.TTD_Pelapor : 'https://bucket.rsmatasmec.com/gambar_putih_ttd.jpeg',
        nama_pelapor : val?.form?.Nama_Pelapor ?? '',

        naranjo_1_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_1 === 'ya'),
        naranjo_1_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_1 === 'tidak'),
        naranjo_1_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_1 === 'tidak_diketahui'),

        naranjo_2_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_2 === 'ya'),
        naranjo_2_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_2 === 'tidak'),
        naranjo_2_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo2 === 'tidak_diketahui'),

        naranjo_3_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_3 === 'ya'),
        naranjo_3_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_3 === 'tidak'),
        naranjo_3_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_3 === 'tidak_diketahui'),

        naranjo_4_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_4 === 'ya'),
        naranjo_4_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_4 === 'tidak'),
        naranjo_4_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_4 === 'tidak_diketahui'),

        naranjo_5_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_5 === 'ya'),
        naranjo_5_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_5 === 'tidak'),
        naranjo_5_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_5 === 'tidak_diketahui'),

        naranjo_6_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_6 === 'ya'),
        naranjo_6_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_6 === 'tidak'),
        naranjo_6_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_6 === 'tidak_diketahui'),

        naranjo_7_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_7 === 'ya'),
        naranjo_7_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_7 === 'tidak'),
        naranjo_7_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_7 === 'tidak_diketahui'),

        naranjo_8_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_8 === 'ya'),
        naranjo_8_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_8 === 'tidak'),
        naranjo_8_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_8 === 'tidak_diketahui'),

        naranjo_9_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_9 === 'ya'),
        naranjo_9_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_9 === 'tidak'),
        naranjo_9_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_9 === 'tidak_diketahui'),

        naranjo_10_ya : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_10 === 'ya'),
        naranjo_10_tidak : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_10 === 'tidak'),
        naranjo_10_tidak_diketahui : PdfDrugSideEffectsRequest.getCheckImage(val?.form?.Algoritma_Naranjo_10 === 'tidak_diketahui'),

        nama_kota : getCity(appReq.kode_cabang),
        tanggal_laporan : formatDate(val?.form?.Waktu ?? ''),
        nik: val?.pasien?.NIK ?? '',

        items : Array.isArray(val?.form?.Obat_Diterima) ? val.form?.Obat_Diterima.map((obatDiterima: any, i: number) => {
          return {
            no: `${i + 1}`,
            nama_obat: obatDiterima.Nama_Obat,
            satuan: obatDiterima.Satuan,
            no_bets: obatDiterima.No_Bets,
            aturan_pakai: obatDiterima.Aturan_Pakai,
            tanggal_mulai: formatDate(obatDiterima.Tanggal_Mulai),
            tanggal_selesai: formatDate(obatDiterima.Tanggal_Selesai),
            obat_yang_dicurigai: PdfDrugSideEffectsRequest.getCheckImage(obatDiterima.Obat_Dicurigai_Check === '1'),
          }
        }) : [],

      },
    })
  }
}
