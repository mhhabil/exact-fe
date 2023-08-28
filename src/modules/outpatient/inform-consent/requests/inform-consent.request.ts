import { AppRequest, IAppRequest } from "@src/shared/request";

export interface IUpdateInformConsentRequest extends IAppRequest {
  "dokter-pelaksana": string
  "pemberi-informasi": string
  "penerima-informasi": string
  diagnosis: string
  "diagnosis-custom": string
  "diagnosis-check": string
  "dasar-diagnosis": string
  "dasar-diagnosis-check": string
  "tindakan-kedokteran": string
  "tindakan-kedokteran-check": string
  "indikasi-tindakan": string
  "indikasi-tindakan-check": string
  "tata-cara-tipe-sedasi": string
  "tata-cara-uraian-singkat": string
  "tata-cara": string
  "tata-cara-check": string
  tujuan: string
  "tujuan-check": string
  risiko: string
  "risiko-check": string
  komplikasi: string
  "komplikasi-check": string
  prognosis: string
  "prognosis-check": string
  "alternatif-risiko-pilihan-pengobatan": string
  "alternatif-risiko": string
  "alternatif-resiko-check": string
  "hal-lain-perluasan-tindakan": string
  "hal-lain-konsultasi": string
  "hal-lain": string
  "hal-lain-check": string
  "ttd-pasien": string
  "ttd-dokter-pelaksana": string
  dokter_pelaksana_informasi: string
  "pasien-kota": string;
  "pasien-nomorMR": string
  "pasien-nama": string
  'pasien-alamat': string
  "pasien-tglLahir": string
  "pasien-jk": string
  "pasien-tindakanOperasi": string
  pernyataan: string
  "tandaTangan-radio": string
  "tandaTangan-nama": string
  "tandaTangan-tglLahir": string
  "tandaTangan-jk": string
  "tandaTangan-telp": string
  "tandaTangan-alamat": string
  "tandaTangan-hubungan": string
  "pasien-tanggal": string
  "nama-saksi-keluarga": string
  "tanda-tangan-pasien": string
  "tanda-tangan-saksi-2": string
  "tanda-tangan-saksi": string
  "id-saksi": string
  dokter_pelaksana: string;
  nama_wali: string;
  tanggal_ttd: string;
  nama_template: string;
}

export class UpdateInformConsentRequest extends AppRequest {
  "dokter-pelaksana": string
  "pemberi-informasi": string
  "penerima-informasi": string
  diagnosis: string
  "diagnosis-custom": string
  "diagnosis-check": string
  "dasar-diagnosis": string
  "dasar-diagnosis-check": string
  "tindakan-kedokteran": string
  "tindakan-kedokteran-check": string
  "indikasi-tindakan": string
  "indikasi-tindakan-check": string
  "tata-cara-tipe-sedasi": string
  "tata-cara-uraian-singkat": string
  "tata-cara": string
  "tata-cara-check": string
  tujuan: string
  "tujuan-check": string
  risiko: string
  "risiko-check": string
  komplikasi: string
  "komplikasi-check": string
  prognosis: string
  "prognosis-check": string
  "alternatif-risiko-pilihan-pengobatan": string
  "alternatif-risiko": string
  "alternatif-resiko-check": string
  "hal-lain-perluasan-tindakan": string
  "hal-lain-konsultasi": string
  "hal-lain": string
  "hal-lain-check": string
  "ttd-pasien": string
  "ttd-dokter-pelaksana": string
  dokter_pelaksana_informasi: string
  "pasien-kota": string;
  "pasien-nomorMR": string
  "pasien-nama": string
  'pasien-alamat': string
  "pasien-tglLahir": string
  "pasien-jk": string
  "pasien-tindakanOperasi": string
  pernyataan: string
  "tandaTangan-radio": string
  "tandaTangan-nama": string
  "tandaTangan-tglLahir": string
  "tandaTangan-jk": string
  "tandaTangan-telp": string
  "tandaTangan-alamat": string
  "tandaTangan-hubungan": string
  "pasien-tanggal": string
  "nama-saksi-keluarga": string
  "tanda-tangan-pasien": string
  "tanda-tangan-saksi-2": string
  "tanda-tangan-saksi": string
  "id-saksi": string
  dokter_pelaksana: string;
  nama_wali: string;
  tanggal_ttd: string;
  nama_template: string;

  constructor(req: IUpdateInformConsentRequest) {
    super(req);
    this["dokter-pelaksana"] = req["dokter-pelaksana"];
    this["pemberi-informasi"] = req["pemberi-informasi"];
    this["penerima-informasi"] = req["penerima-informasi"];
    this.diagnosis = req.diagnosis;
    this["diagnosis-custom"] = req["diagnosis-custom"];
    this["diagnosis-check"] = req["diagnosis-check"];
    this["dasar-diagnosis"] = req["dasar-diagnosis"];
    this["dasar-diagnosis-check"] = req["dasar-diagnosis-check"];
    this["tindakan-kedokteran"] = req["tindakan-kedokteran"];
    this["tindakan-kedokteran-check"] = req["tindakan-kedokteran-check"];
    this["indikasi-tindakan"] = req["indikasi-tindakan"];
    this["indikasi-tindakan-check"] = req["indikasi-tindakan-check"];
    this["tata-cara-tipe-sedasi"] = req["tata-cara-tipe-sedasi"];
    this["tata-cara-uraian-singkat"] = req["tata-cara-uraian-singkat"];
    this["tata-cara"] = req["tata-cara"];
    this["tata-cara-check"] = req["tata-cara-check"];
    this.tujuan = req.tujuan;
    this["tujuan-check"] = req["tujuan-check"];
    this.risiko = req.risiko;
    this["risiko-check"] = req["risiko-check"];
    this.komplikasi = req.komplikasi;
    this["komplikasi-check"] = req["komplikasi-check"];
    this.prognosis = req.prognosis;
    this["prognosis-check"] = req["prognosis-check"];
    this["alternatif-risiko-pilihan-pengobatan"] = req["alternatif-risiko-pilihan-pengobatan"];
    this["alternatif-risiko"] = req["alternatif-risiko"];
    this["alternatif-resiko-check"] = req["alternatif-resiko-check"];
    this["hal-lain-perluasan-tindakan"] = req["hal-lain-perluasan-tindakan"];
    this["hal-lain-konsultasi"] = req["hal-lain-konsultasi"];
    
    this["hal-lain"] = req["hal-lain"];
    this["hal-lain-check"] = req["hal-lain-check"];
    this["ttd-pasien"] = req["ttd-pasien"];
    this["ttd-dokter-pelaksana"] = req["ttd-dokter-pelaksana"];
    this.dokter_pelaksana_informasi = req.dokter_pelaksana_informasi;
    this["pasien-kota"] = req["pasien-kota"];
    this["pasien-nomorMR"] = req["pasien-nomorMR"];
    this["pasien-nama"] = req["pasien-nama"];
    this["pasien-alamat"] = req["pasien-alamat"];
    this["pasien-tglLahir"] = req["pasien-tglLahir"];
    this["pasien-jk"] = req["pasien-jk"];
    this["pasien-tindakanOperasi"] = req["pasien-tindakanOperasi"];
    this.pernyataan = req.pernyataan;
    this["tandaTangan-radio"] = req["tandaTangan-radio"];
    this["tandaTangan-nama"] = req["tandaTangan-nama"];
    this["tandaTangan-tglLahir"] = req["tandaTangan-tglLahir"];
    this["tandaTangan-jk"] = req["tandaTangan-jk"];
    this["tandaTangan-telp"] = req["tandaTangan-telp"];
    this["tandaTangan-alamat"] = req["tandaTangan-alamat"];
    this["tandaTangan-hubungan"] = req["tandaTangan-hubungan"];
    this["pasien-tanggal"] = req["pasien-tanggal"];
    this["nama-saksi-keluarga"] = req["nama-saksi-keluarga"];
    this["tanda-tangan-pasien"] = req["tanda-tangan-pasien"];
    this["tanda-tangan-saksi-2"] = req["tanda-tangan-saksi-2"];
    this["tanda-tangan-saksi"] = req["tanda-tangan-saksi"];
    this["id-saksi"] = req["id-saksi"];
    this.dokter_pelaksana = req.dokter_pelaksana;
    this.nama_wali = req.nama_wali;
    this.tanggal_ttd = req.tanggal_ttd;
    this.nama_template = req.nama_template;
  }

  static createFromJson(json: IUpdateInformConsentRequest) {
    return new UpdateInformConsentRequest(json);
  }
}
