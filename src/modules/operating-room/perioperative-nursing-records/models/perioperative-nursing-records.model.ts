import { DataModel, IDataModel } from '@shared/model';
import { IPerioperativeNursingRecordsRajalFormModel } from '@src/modules/outpatient/perioperative-nursing-records/models/perioperative-nursing-records-rajal-model';

export interface IStatusMental {
    Koma: number;
    Agitasi:number;
    Bingung: number;
    Mengantuk: number;
    Sadar_Penuh: number;
}

export class Status_Mental {
    Koma: number;
    Agitasi:number;
    Bingung: number;
    Mengantuk: number;
    Sadar_Penuh: number;

    constructor(mental: IStatusMental) {
      this.Koma =  mental.Koma;
      this.Agitasi = mental.Agitasi;
      this.Bingung = mental.Bingung;
      this.Mengantuk = mental.Mengantuk;
      this.Sadar_Penuh = mental.Sadar_Penuh;
    }
}

export interface IRiwayatPenyakit {
    Diabetes: number;
    Hepatitis: number;
    Lain_lain: number;
    Tidak_Ada: number;
    Hipertensi: number;
}

export class Riwayat_Penyakit {
    Diabetes: number;
    Hepatitis: number;
    Lain_lain: number;
    Tidak_Ada: number;
    Hipertensi: number;

    constructor(riwayat: IRiwayatPenyakit) {
      this.Diabetes = riwayat.Diabetes;
      this.Hepatitis =  riwayat.Hepatitis;
      this.Lain_lain =  riwayat.Lain_lain;
      this.Tidak_Ada =  riwayat.Tidak_Ada;
      this.Hipertensi =  riwayat.Hipertensi;
    }
}

export interface IPemeriksaanPenunjang {
    Koma: number;
    Rongent: number;
    Biometri: number;
    USG_Mata: number;
    Lain_lain: number;
    Tidak_Ada: number;
    Foto_Fundus: number;
    Laboratorium: number;
}

export class PemeriksaanPenunjang {
    Koma: number;
    Rongent: number;
    Biometri: number;
    USG_Mata: number;
    Lain_lain: number;
    Tidak_Ada: number;
    Foto_Fundus: number;
    Laboratorium: number;

    constructor(pemeriksaan: IPemeriksaanPenunjang) {
      this.Koma = pemeriksaan.Koma;
      this.Rongent = pemeriksaan.Rongent;
      this.Biometri =  pemeriksaan.Biometri;
      this.USG_Mata = pemeriksaan.USG_Mata;
      this.Lain_lain = pemeriksaan.Lain_lain;
      this.Tidak_Ada =  pemeriksaan.Tidak_Ada;
      this.Foto_Fundus = pemeriksaan.Foto_Fundus;
      this.Laboratorium = pemeriksaan.Laboratorium;
    }
}

export interface IPerioperativeNursingRecordsFormModel {
    Bb: string;
    Rr: string;
    Tb: string;
    Td: string;
    Nadi: string;
    Suhu: string;
    Alergi: string;
    Tanggal: string;
    Alat_Bantu: string;
    ID_Petugas: string;
    Updated_At: string;
    Updated_By: string;
    Skala_Nyeri: string;
    Nama_Petugas: string;
    Status_Mental: IStatusMental;
    Persiapan_Kulit: number;
    Persiapan_Puasa: number;
    Riwayat_Penyakit: IRiwayatPenyakit;
    Alergi_Keterangan: string;
    Lain_Site_Marking: number;
    ID_Perawat_Ruangan: string;
    Operasi_Sebelumnya: string;
    ID_Perawat_Penerima: string;
    Pengobatan_Saat_Ini: string;
    TTD_Perawat_Ruangan: string;
    Nama_Perawat_Ruangan: string;
    Persiapan_Alat_Bantu: number;
    TTD_Perawat_Penerima: string;
    Alat_Bantu_Keterangan: string;
    Nama_Perawat_Penerima: string;
    Operasi_Sebelumnya_Di: string;
    Pemeriksaan_Penunjang: IPemeriksaanPenunjang;
    Lain_Penjelasan_Singkat: number;
    Persiapan_Prothese_Luar: number;
    Persiapan_Prothese_Dalam: number;
    Persiapan_Vaskuler_Akses: number;
    Persiapan_Obat_Disertakan: number;
    Persiapan_Penjepit_Rambut: number;
    Verifikasi_Periksa_Gelang: number;
    Operasi_Sebelumnya_Tanggal: number;
    Persiapan_Kulit_Keterangan: string;
    Persiapan_Puasa_Keterangan: string;
    Riwayat_Penyakit_Keterangan: string;
    Verifikasi_Kelengkapan_X_Ray: number;
    Verifikasi_Periksa_Identitas: number;
    Operasi_Sebelumnya_Keterangan: string;
    Verifikasi_Surat_Izin_Operasi: number,
    Pengobatan_Saat_Ini_Keterangan: string;
    Persiapan_Alat_Bantu_Keterangan: string;
    Verifikasi_Jenis_Lokasi_Operasi: number;
    Verifikasi_Persetujuan_Anestesi: number;
    Pemeriksaan_Penunjang_Keterangan: string;
    Persiapan_Obat_Terakhir_Diberikan: number;
    Persiapan_Prothese_Luar_Keterangan: string;
    Verifikasi_Surat_Pengantar_Operasi: number;
    Persiapan_Prothese_Dalam_Keterangan: string;
    Persiapan_Vaskuler_Akses_Keterangan: string;
    Verifikasi_Kelengkapan_Resume_Medis: number;
    Persiapan_Obat_Disertakan_Keterangan: string;
    Persiapan_Penjepit_Rambut_Keterangan: string;
    Verifikasi_Masalah_Bahasa_Komunikasi: number;
    Verifikasi_Periksa_Gelang_Keterangan: string;
    Verifikasi_Kelengkapan_X_Ray_Keterangan: string;
    Verifikasi_Periksa_Identitas_Keterangan: string;
    Verifikasi_Surat_Izin_Operasi_Keterangan: string;
    Verifikasi_Jenis_Lokasi_Operasi_Keterangan: string;
    Verifikasi_Persetujuan_Anestesi_Keterangan: string;
    Persiapan_Obat_Terakhir_Diberikan_Keterangan: string;
    Verifikasi_Surat_Pengantar_Operasi_Keterangan: string;
    Verifikasi_Kelengkapan_Resume_Medis_Keterangan: string;
    Verifikasi_Masalah_Bahasa_Komunikasi_Keterangan: string;
}

export class PerioperativeNursingRecordsFormModel {
    Bb: string;
    Rr: string;
    Tb: string;
    Td: string;
    Nadi: string;
    Suhu: string;
    Alergi: string;
    Tanggal: string;
    Alat_Bantu: string;
    ID_Petugas: string;
    Updated_At: string;
    Updated_By: string;
    Skala_Nyeri: string;
    Nama_Petugas: string;
    Status_Mental: IStatusMental;
    Persiapan_Kulit: number;
    Persiapan_Puasa: number;
    Riwayat_Penyakit: IRiwayatPenyakit;
    Alergi_Keterangan: string;
    Lain_Site_Marking: number;
    ID_Perawat_Ruangan: string;
    Operasi_Sebelumnya: string;
    ID_Perawat_Penerima: string;
    Pengobatan_Saat_Ini: string;
    TTD_Perawat_Ruangan: string;
    Nama_Perawat_Ruangan: string;
    Persiapan_Alat_Bantu: number;
    TTD_Perawat_Penerima: string;
    Alat_Bantu_Keterangan: string;
    Nama_Perawat_Penerima: string;
    Operasi_Sebelumnya_Di: string;
    Pemeriksaan_Penunjang: IPemeriksaanPenunjang;
    Lain_Penjelasan_Singkat: number;
    Persiapan_Prothese_Luar: number;
    Persiapan_Prothese_Dalam: number;
    Persiapan_Vaskuler_Akses: number;
    Persiapan_Obat_Disertakan: number;
    Persiapan_Penjepit_Rambut: number;
    Verifikasi_Periksa_Gelang: number;
    Operasi_Sebelumnya_Tanggal: number;
    Persiapan_Kulit_Keterangan: string;
    Persiapan_Puasa_Keterangan: string;
    Riwayat_Penyakit_Keterangan: string;
    Verifikasi_Kelengkapan_X_Ray: number;
    Verifikasi_Periksa_Identitas: number;
    Operasi_Sebelumnya_Keterangan: string;
    Verifikasi_Surat_Izin_Operasi: number;
    Pengobatan_Saat_Ini_Keterangan: string;
    Persiapan_Alat_Bantu_Keterangan: string;
    Verifikasi_Jenis_Lokasi_Operasi: number;
    Verifikasi_Persetujuan_Anestesi: number;
    Pemeriksaan_Penunjang_Keterangan: string;
    Persiapan_Obat_Terakhir_Diberikan: number;
    Persiapan_Prothese_Luar_Keterangan: string;
    Verifikasi_Surat_Pengantar_Operasi: number;
    Persiapan_Prothese_Dalam_Keterangan: string;
    Persiapan_Vaskuler_Akses_Keterangan: string;
    Verifikasi_Kelengkapan_Resume_Medis: number;
    Persiapan_Obat_Disertakan_Keterangan: string;
    Persiapan_Penjepit_Rambut_Keterangan: string;
    Verifikasi_Masalah_Bahasa_Komunikasi: number;
    Verifikasi_Periksa_Gelang_Keterangan: string;
    Verifikasi_Kelengkapan_X_Ray_Keterangan: string;
    Verifikasi_Periksa_Identitas_Keterangan: string;
    Verifikasi_Surat_Izin_Operasi_Keterangan: string;
    Verifikasi_Jenis_Lokasi_Operasi_Keterangan: string;
    Verifikasi_Persetujuan_Anestesi_Keterangan: string;
    Persiapan_Obat_Terakhir_Diberikan_Keterangan: string;
    Verifikasi_Surat_Pengantar_Operasi_Keterangan: string;
    Verifikasi_Kelengkapan_Resume_Medis_Keterangan: string;
    Verifikasi_Masalah_Bahasa_Komunikasi_Keterangan: string;

    constructor(request: IPerioperativeNursingRecordsFormModel) {
      this.Bb = request.Bb;
      this.Rr = request.Rr;
      this.Tb = request.Tb;
      this.Td = request.Td;
      this.Nadi = request.Nadi;
      this.Suhu = request.Suhu;
      this.Alergi = request.Alergi;
      this.Tanggal = request.Tanggal;
      this.Alat_Bantu = request.Alat_Bantu;
      this.ID_Petugas = request.ID_Petugas;
      this.Updated_At = request.Updated_At;
      this.Updated_By = request.Updated_By;
      this.Skala_Nyeri = request.Skala_Nyeri;
      this.Nama_Petugas = request.Nama_Petugas;
      this.Status_Mental = request.Status_Mental;
      this.Persiapan_Kulit = request.Persiapan_Kulit;
      this.Persiapan_Puasa = request.Persiapan_Puasa;
      this.Riwayat_Penyakit = request.Riwayat_Penyakit;
      this.Alergi_Keterangan = request.Alergi_Keterangan;
      this.Lain_Site_Marking = request.Lain_Site_Marking;
      this.ID_Perawat_Ruangan = request.ID_Perawat_Ruangan;
      this.Operasi_Sebelumnya = request.Operasi_Sebelumnya;
      this.ID_Perawat_Penerima = request.ID_Perawat_Penerima;
      this.Pengobatan_Saat_Ini = request.Pengobatan_Saat_Ini;
      this.TTD_Perawat_Ruangan = request.TTD_Perawat_Ruangan;
      this.Nama_Perawat_Ruangan = request.Nama_Perawat_Ruangan;
      this.Persiapan_Alat_Bantu = request.Persiapan_Alat_Bantu;
      this.TTD_Perawat_Penerima = request.TTD_Perawat_Penerima;
      this.Alat_Bantu_Keterangan = request.Alat_Bantu_Keterangan;
      this.Nama_Perawat_Penerima = request.Nama_Perawat_Penerima;
      this.Operasi_Sebelumnya_Di = request.Operasi_Sebelumnya_Di;
      this.Pemeriksaan_Penunjang = request.Pemeriksaan_Penunjang;
      this.Lain_Penjelasan_Singkat = request.Lain_Penjelasan_Singkat;
      this.Persiapan_Prothese_Luar = request.Persiapan_Prothese_Luar;
      this.Persiapan_Prothese_Dalam = request.Persiapan_Prothese_Dalam;
      this.Persiapan_Vaskuler_Akses = request.Persiapan_Vaskuler_Akses;
      this.Persiapan_Obat_Disertakan = request.Persiapan_Obat_Disertakan;
      this.Persiapan_Penjepit_Rambut = request.Persiapan_Penjepit_Rambut;
      this.Verifikasi_Periksa_Gelang = request.Verifikasi_Periksa_Gelang;
      this.Operasi_Sebelumnya_Tanggal = request.Operasi_Sebelumnya_Tanggal;
      this.Persiapan_Kulit_Keterangan = request.Persiapan_Kulit_Keterangan;
      this.Persiapan_Puasa_Keterangan = request.Persiapan_Puasa_Keterangan;
      this.Riwayat_Penyakit_Keterangan = request.Riwayat_Penyakit_Keterangan;
      this.Verifikasi_Kelengkapan_X_Ray = request.Verifikasi_Kelengkapan_X_Ray;
      this.Verifikasi_Periksa_Identitas = request.Verifikasi_Periksa_Identitas;
      this.Operasi_Sebelumnya_Keterangan = request.Operasi_Sebelumnya_Keterangan;
      this.Verifikasi_Surat_Izin_Operasi = request.Verifikasi_Surat_Izin_Operasi;
      this.Pengobatan_Saat_Ini_Keterangan = request.Pengobatan_Saat_Ini_Keterangan;
      this.Persiapan_Alat_Bantu_Keterangan = request.Persiapan_Alat_Bantu_Keterangan;
      this.Verifikasi_Jenis_Lokasi_Operasi = request.Verifikasi_Jenis_Lokasi_Operasi;
      this.Verifikasi_Persetujuan_Anestesi = request.Verifikasi_Persetujuan_Anestesi;
      this.Pemeriksaan_Penunjang_Keterangan = request.Pemeriksaan_Penunjang_Keterangan;
      this.Persiapan_Obat_Terakhir_Diberikan = request.Persiapan_Obat_Terakhir_Diberikan;
      this.Persiapan_Prothese_Luar_Keterangan = request.Persiapan_Prothese_Luar_Keterangan;
      this.Verifikasi_Surat_Pengantar_Operasi = request.Verifikasi_Surat_Pengantar_Operasi;
      this.Persiapan_Prothese_Dalam_Keterangan = request.Persiapan_Prothese_Dalam_Keterangan;
      this.Persiapan_Vaskuler_Akses_Keterangan = request.Persiapan_Vaskuler_Akses_Keterangan;
      this.Verifikasi_Kelengkapan_Resume_Medis = request.Verifikasi_Kelengkapan_Resume_Medis;
      this.Persiapan_Obat_Disertakan_Keterangan = request.Persiapan_Obat_Disertakan_Keterangan;
      this.Persiapan_Penjepit_Rambut_Keterangan = request.Persiapan_Penjepit_Rambut_Keterangan;
      this.Verifikasi_Masalah_Bahasa_Komunikasi = request.Verifikasi_Masalah_Bahasa_Komunikasi;
      this.Verifikasi_Periksa_Gelang_Keterangan = request.Verifikasi_Periksa_Gelang_Keterangan;
      this.Verifikasi_Kelengkapan_X_Ray_Keterangan = request.Verifikasi_Kelengkapan_X_Ray_Keterangan;
      this.Verifikasi_Periksa_Identitas_Keterangan = request.Verifikasi_Periksa_Identitas_Keterangan;
      this.Verifikasi_Surat_Izin_Operasi_Keterangan = request.Verifikasi_Surat_Izin_Operasi_Keterangan;
      this.Verifikasi_Jenis_Lokasi_Operasi_Keterangan = request.Verifikasi_Jenis_Lokasi_Operasi_Keterangan;
      this.Verifikasi_Persetujuan_Anestesi_Keterangan = request.Verifikasi_Persetujuan_Anestesi_Keterangan;
      this.Persiapan_Obat_Terakhir_Diberikan_Keterangan = request.Persiapan_Obat_Terakhir_Diberikan_Keterangan;
      this.Verifikasi_Surat_Pengantar_Operasi_Keterangan = request.Verifikasi_Surat_Pengantar_Operasi_Keterangan;
      this.Verifikasi_Kelengkapan_Resume_Medis_Keterangan = request.Verifikasi_Kelengkapan_Resume_Medis_Keterangan;
      this.Verifikasi_Masalah_Bahasa_Komunikasi_Keterangan = request.Verifikasi_Masalah_Bahasa_Komunikasi_Keterangan;
    }
}

export interface IPerioperativeNursingRecordsModel extends IDataModel {
    form:  IPerioperativeNursingRecordsFormModel;
    rajal: IPerioperativeNursingRecordsRajalFormModel;
}

export class PerioperativeNursingRecordsModel extends DataModel {
    form:  IPerioperativeNursingRecordsFormModel;
    rajal: IPerioperativeNursingRecordsRajalFormModel;

    constructor(peri: IPerioperativeNursingRecordsModel) {
      super(peri);
      this.form = peri.form;
      this.rajal = peri.rajal;
    }
}
