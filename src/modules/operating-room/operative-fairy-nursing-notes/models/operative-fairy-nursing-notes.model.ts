import { IDoctorModel } from "@src/shared/doctor";
import { DoctorModel } from "@src/shared/doctor/models/doctor.model";
import { DataModel, IDataModel } from "@src/shared/model";
import { INurseModel } from "@src/shared/nurse";
import { NurseModel } from "@src/shared/nurse/models/nurse.model";

export interface IDokter {
  ID_Karyawan: string;
  Nama: string;
}

export class Dokter {
  ID_Karyawan: string;
  Nama: string;
  constructor(dokter: IDokter) {
    this.ID_Karyawan = dokter.ID_Karyawan;
    this.Nama = dokter.Nama;
  }
}

export interface IOperativeFairyNursingNotesFormModel {
  Time_Out: number;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Laser_Power: string;
  Mulai_Waktu: string;
  Posisi_Alat: number;
  Implant_Seri: string;
  Implant_Size: string;
  Implant_Type: string;
  Irigasi_Luka: number;
  Laser_Durasi: string;
  Nama_Petugas: string;
  Status_Emosi: number;
  Tipe_Operasi: number;
  Unit_Pemanas: number;
  Jenis_Operasi: string;
  Kateter_Urine: number;
  Laser_Tanggal: string;
  Posisi_Kanula: number;
  Posisi_Lengan: number;
  Selesai_Waktu: string;
  Balutan_Cairan: number;
  Implant_Pabrik: string;
  Laser_Interval: string;
  Posisi_Operasi: number;
  Time_Out_Waktu: string;
  Tipe_Pembiusan: number;
  Unit_Pendingin: number;
  Kondisi_Sebelum: any;
  Kondisi_Sebelum_1: any;
  Kondisi_Sebelum_2: any;
  Kondisi_Sebelum_3: any;
  Kondisi_Sesudah: string;
  Kondisi_Sesudah_1: string;
  Kondisi_Sesudah_2: string;
  Kondisi_Sesudah_3: string;
  Pemakaian_Laser: number;
  Persiapan_Kulit: number;
  Posisi_Kanula_1: any;
  Posisi_Kanula_2: any;
  Posisi_Kanula_3: any;
  Posisi_Kanula_4: any;
  Posisi_Kanula_5: any;
  Posisi_Kanula_6: any;
  Posisi_Kanula_7: any;
  Posisi_Kanula_8: any;
  Posisi_Lengan_1: any;
  Posisi_Lengan_2: any;
  Posisi_Lengan_3: any;
  Posisi_Lengan_4: any;
  Posisi_Lengan_5: any;
  Spesimen_Cairan: number;
  Laser_Kode_Model: string;
  Lokasi_Elektrode: any;
  Lokasi_Elektrode_1: any;
  Lokasi_Elektrode_2: any;
  Lokasi_Elektrode_3: any;
  Lokasi_Elektrode_4: any;
  Lokasi_Elektrode_5: any;
  Pemakaian_Cairan: number;
  Posisi_Operasi_1: any;
  Posisi_Operasi_2: any;
  Posisi_Operasi_3: any;
  Posisi_Operasi_4: any;
  Posisi_Operasi_5: any;
  Url_Image_Stiker: string;
  Name_Image_Stiker: any;
  Pemakaian_Implant: number;
  Pemanas_Kode_Unit: string;
  Size_Image_Stiker: string;
  Tingkat_Kesadaran: number;
  Type_Image_Stiker: string;
  ID_Laser_Diawasi_1: string;
  ID_Laser_Diawasi_2: string;
  ID_Laser_Diawasi_3: string;
  ID_Perawat_Sirkuler: string;
  Laser_Jumlah_Tembak: string;
  Pemakaian_Diathermy: number;
  Pemanas_Mulai_Waktu: string;
  Pendingin_Kode_Unit: string;
  Spesimen_Keterangan: string;
  ID_Perawat_Instrumen: string;
  Nama_Laser_Diawasi_1: string;
  Nama_Laser_Diawasi_2: string;
  Nama_Laser_Diawasi_3: string;
  TTD_Perawat_Sirkuler: string;
  Ketersediaan_Prothese: number;
  Nama_Perawat_Sirkuler: string;
  Pemakaian_Diathermy_1: any;
  Pemakaian_Diathermy_2: any;
  Pemakaian_Diathermy_3: any;
  Pemanas_Selesai_Waktu: string;
  Pendingin_Mulai_Waktu: string;
  Posisi_Alat_Lain_Teks: string;
  TTD_Perawat_Instrumen: string;
  Irigasi_Luka_Lain_Teks: string;
  Ketersediaan_Instrumen: number;
  Nama_Perawat_Instrumen: string;
  Pendingin_Selesai_Waktu: string;
  Posisi_Kanula_Lain_Teks: string;
  Posisi_Lengan_Lain_Teks: string;
  Spesimen_Jenis_Jaringan: string;
  Posisi_Operasi_Lain_Teks: string;
  Spesimen_Jumlah_Jaringan: string;
  ID_Posisi_Operasi_Diawasi: string;
  Kode_Unit_Elektrosurgikal: string;
  Kondisi_Sebelum_Lain_Teks: string;
  Kondisi_Sesudah_Lain_Teks: string;
  Pemakaian_Cairan_Air_Teks: string;
  Persiapan_Kulit_Lain_Teks: string;
  Lokasi_Elektrode_Lain_Teks: string;
  Pemakaian_Cairan_Lain_Teks: string;
  Ketersediaan_Prothese_Waktu: number;
  Nama_Posisi_Operasi_Diawasi: string;
  Spesimen_Cairan_Pemeriksaan: string;
  Tingkat_Kesadaran_Lain_Teks: string;
  Ketersediaan_Instrumen_Waktu: string;
  Pemakaian_Cairan_Kultur_Teks: string;
  Pemakaian_Cairan_Sodium_Teks: string;
  Pemanas_Pengaturan_Temperatur: string;
  Pemakaian_Cairan_Sitologi_Teks: string;
  Pemakaian_Cairan_Histologi_Teks: string;
  Pendingin_Pengaturan_Temperatur: string;
  Jenis_Balutan: string;
  Jenis_Spesimen: string;
  Lain_Spesimen: string;
  Tanggal_Kadaluarsa: string;
}

export class OperativeFairyNursingNotesFormModel {
  Time_Out: number;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Laser_Power: string;
  Mulai_Waktu: string;
  Posisi_Alat: number;
  Implant_Seri: string;
  Implant_Size: string;
  Implant_Type: string;
  Irigasi_Luka: number;
  Laser_Durasi: string;
  Nama_Petugas: string;
  Status_Emosi: number;
  Tipe_Operasi: number;
  Unit_Pemanas: number;
  Jenis_Operasi: string;
  Kateter_Urine: number;
  Laser_Tanggal: string;
  Posisi_Kanula: number;
  Posisi_Lengan: number;
  Selesai_Waktu: string;
  Balutan_Cairan: number;
  Implant_Pabrik: string;
  Laser_Interval: string;
  Posisi_Operasi: number;
  Time_Out_Waktu: string;
  Tipe_Pembiusan: number;
  Unit_Pendingin: number;
  Kondisi_Sebelum: any;
  Kondisi_Sebelum_1: any;
  Kondisi_Sebelum_2: any;
  Kondisi_Sebelum_3: any;
  Kondisi_Sesudah: string;
  Kondisi_Sesudah_1: string;
  Kondisi_Sesudah_2: string;
  Kondisi_Sesudah_3: string;
  Pemakaian_Laser: number;
  Persiapan_Kulit: number;
  Posisi_Kanula_1: any;
  Posisi_Kanula_2: any;
  Posisi_Kanula_3: any;
  Posisi_Kanula_4: any;
  Posisi_Kanula_5: any;
  Posisi_Kanula_6: any;
  Posisi_Kanula_7: any;
  Posisi_Kanula_8: any;
  Posisi_Lengan_1: any;
  Posisi_Lengan_2: any;
  Posisi_Lengan_3: any;
  Posisi_Lengan_4: any;
  Posisi_Lengan_5: any;
  Spesimen_Cairan: number;
  Laser_Kode_Model: string;
  Lokasi_Elektrode: any;
  Lokasi_Elektrode_1: any;
  Lokasi_Elektrode_2: any;
  Lokasi_Elektrode_3: any;
  Lokasi_Elektrode_4: any;
  Lokasi_Elektrode_5: any;
  Pemakaian_Cairan: number;
  Posisi_Operasi_1: any;
  Posisi_Operasi_2: any;
  Posisi_Operasi_3: any;
  Posisi_Operasi_4: any;
  Posisi_Operasi_5: any;
  Url_Image_Stiker: string;
  Name_Image_Stiker: any;
  Pemakaian_Implant: number;
  Pemanas_Kode_Unit: string;
  Size_Image_Stiker: string;
  Tingkat_Kesadaran: number;
  Type_Image_Stiker: string;
  ID_Laser_Diawasi_1: string;
  ID_Laser_Diawasi_2: string;
  ID_Laser_Diawasi_3: string;
  ID_Perawat_Sirkuler: string;
  Laser_Jumlah_Tembak: string;
  Pemakaian_Diathermy: number;
  Pemanas_Mulai_Waktu: string;
  Pendingin_Kode_Unit: string;
  Spesimen_Keterangan: string;
  ID_Perawat_Instrumen: string;
  Nama_Laser_Diawasi_1: string;
  Nama_Laser_Diawasi_2: string;
  Nama_Laser_Diawasi_3: string;
  TTD_Perawat_Sirkuler: string;
  Ketersediaan_Prothese: number;
  Nama_Perawat_Sirkuler: string;
  Pemakaian_Diathermy_1: any;
  Pemakaian_Diathermy_2: any;
  Pemakaian_Diathermy_3: any;
  Pemanas_Selesai_Waktu: string;
  Pendingin_Mulai_Waktu: string;
  Posisi_Alat_Lain_Teks: string;
  TTD_Perawat_Instrumen: string;
  Irigasi_Luka_Lain_Teks: string;
  Ketersediaan_Instrumen: number;
  Nama_Perawat_Instrumen: string;
  Pendingin_Selesai_Waktu: string;
  Posisi_Kanula_Lain_Teks: string;
  Posisi_Lengan_Lain_Teks: string;
  Spesimen_Jenis_Jaringan: string;
  Posisi_Operasi_Lain_Teks: string;
  Spesimen_Jumlah_Jaringan: string;
  ID_Posisi_Operasi_Diawasi: string;
  Kode_Unit_Elektrosurgikal: string;
  Kondisi_Sebelum_Lain_Teks: string;
  Kondisi_Sesudah_Lain_Teks: string;
  Pemakaian_Cairan_Air_Teks: string;
  Persiapan_Kulit_Lain_Teks: string;
  Lokasi_Elektrode_Lain_Teks: string;
  Pemakaian_Cairan_Lain_Teks: string;
  Ketersediaan_Prothese_Waktu: number;
  Nama_Posisi_Operasi_Diawasi: string;
  Spesimen_Cairan_Pemeriksaan: string;
  Tingkat_Kesadaran_Lain_Teks: string;
  Ketersediaan_Instrumen_Waktu: string;
  Pemakaian_Cairan_Kultur_Teks: string;
  Pemakaian_Cairan_Sodium_Teks: string;
  Pemanas_Pengaturan_Temperatur: string;
  Pemakaian_Cairan_Sitologi_Teks: string;
  Pemakaian_Cairan_Histologi_Teks: string;
  Pendingin_Pengaturan_Temperatur: string;
  Jenis_Balutan: string;
  Jenis_Spesimen: string;
  Lain_Spesimen: string;
  Tanggal_Kadaluarsa: string;
  constructor(form: IOperativeFairyNursingNotesFormModel) {
    this.Time_Out = form.Time_Out;
    this.ID_Petugas = form.ID_Petugas;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
    this.Laser_Power = form.Laser_Power;
    this.Mulai_Waktu = form.Mulai_Waktu;
    this.Posisi_Alat = form.Posisi_Alat;
    this.Implant_Seri = form.Implant_Seri;
    this.Implant_Size = form.Implant_Size;
    this.Implant_Type = form.Implant_Type;
    this.Irigasi_Luka = form.Irigasi_Luka;
    this.Laser_Durasi = form.Laser_Durasi;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Status_Emosi = form.Status_Emosi;
    this.Tipe_Operasi = form.Tipe_Operasi;
    this.Unit_Pemanas = form.Unit_Pemanas;
    this.Jenis_Operasi = form.Jenis_Operasi;
    this.Kateter_Urine = form.Kateter_Urine;
    this.Laser_Tanggal = form.Laser_Tanggal;
    this.Posisi_Kanula = form.Posisi_Kanula;
    this.Posisi_Lengan = form.Posisi_Lengan;
    this.Selesai_Waktu = form.Selesai_Waktu;
    this.Balutan_Cairan = form.Balutan_Cairan;
    this.Implant_Pabrik = form.Implant_Pabrik;
    this.Laser_Interval = form.Laser_Interval;
    this.Posisi_Operasi = form.Posisi_Operasi;
    this.Time_Out_Waktu = form.Time_Out_Waktu;
    this.Tipe_Pembiusan = form.Tipe_Pembiusan;
    this.Unit_Pendingin = form.Unit_Pendingin;
    this.Kondisi_Sebelum = form.Kondisi_Sebelum;
    this.Kondisi_Sebelum_1 = form.Kondisi_Sebelum_1;
    this.Kondisi_Sebelum_2 = form.Kondisi_Sebelum_2;
    this.Kondisi_Sebelum_3 = form.Kondisi_Sebelum_3;
    this.Kondisi_Sesudah = form.Kondisi_Sesudah;
    this.Kondisi_Sesudah_1 = form.Kondisi_Sesudah_1;
    this.Kondisi_Sesudah_2 = form.Kondisi_Sesudah_2;
    this.Kondisi_Sesudah_3 = form.Kondisi_Sesudah_3;
    this.Pemakaian_Laser = form.Pemakaian_Laser;
    this.Persiapan_Kulit = form.Persiapan_Kulit;
    this.Posisi_Kanula_1 = form.Posisi_Kanula_1;
    this.Posisi_Kanula_2 = form.Posisi_Kanula_2;
    this.Posisi_Kanula_3 = form.Posisi_Kanula_3;
    this.Posisi_Kanula_4 = form.Posisi_Kanula_4;
    this.Posisi_Kanula_5 = form.Posisi_Kanula_5;
    this.Posisi_Kanula_6 = form.Posisi_Kanula_6;
    this.Posisi_Kanula_7 = form.Posisi_Kanula_7;
    this.Posisi_Kanula_8 = form.Posisi_Kanula_8;
    this.Posisi_Lengan_1 = form.Posisi_Lengan_1;
    this.Posisi_Lengan_2 = form.Posisi_Lengan_2;
    this.Posisi_Lengan_3 = form.Posisi_Lengan_3;
    this.Posisi_Lengan_4 = form.Posisi_Lengan_4;
    this.Posisi_Lengan_5 = form.Posisi_Lengan_5;
    this.Spesimen_Cairan = form.Spesimen_Cairan;
    this.Laser_Kode_Model = form.Laser_Kode_Model;
    this.Lokasi_Elektrode = form.Lokasi_Elektrode;
    this.Lokasi_Elektrode_1 = form.Lokasi_Elektrode_1;
    this.Lokasi_Elektrode_2 = form.Lokasi_Elektrode_2;
    this.Lokasi_Elektrode_3 = form.Lokasi_Elektrode_3;
    this.Lokasi_Elektrode_4 = form.Lokasi_Elektrode_4;
    this.Lokasi_Elektrode_5 = form.Lokasi_Elektrode_5;
    this.Pemakaian_Cairan = form.Pemakaian_Cairan;
    this.Posisi_Operasi_1 = form.Posisi_Operasi_1;
    this.Posisi_Operasi_2 = form.Posisi_Operasi_2;
    this.Posisi_Operasi_3 = form.Posisi_Operasi_3;
    this.Posisi_Operasi_4 = form.Posisi_Operasi_4;
    this.Posisi_Operasi_5 = form.Posisi_Operasi_5;
    this.Url_Image_Stiker = form.Url_Image_Stiker;
    this.Name_Image_Stiker = form.Name_Image_Stiker;
    this.Pemakaian_Implant = form.Pemakaian_Implant;
    this.Pemanas_Kode_Unit = form.Pemanas_Kode_Unit;
    this.Size_Image_Stiker = form.Size_Image_Stiker;
    this.Tingkat_Kesadaran = form.Tingkat_Kesadaran;
    this.Type_Image_Stiker = form.Type_Image_Stiker;
    this.ID_Laser_Diawasi_1 = form.ID_Laser_Diawasi_1;
    this.ID_Laser_Diawasi_2 = form.ID_Laser_Diawasi_2;
    this.ID_Laser_Diawasi_3 = form.ID_Laser_Diawasi_3;
    this.ID_Perawat_Sirkuler = form.ID_Perawat_Sirkuler;
    this.Laser_Jumlah_Tembak = form.Laser_Jumlah_Tembak;
    this.Pemakaian_Diathermy = form.Pemakaian_Diathermy;
    this.Pemanas_Mulai_Waktu = form.Pemanas_Mulai_Waktu;
    this.Pendingin_Kode_Unit = form.Pendingin_Kode_Unit;
    this.Spesimen_Keterangan = form.Spesimen_Keterangan;
    this.ID_Perawat_Instrumen = form.ID_Perawat_Instrumen;
    this.Nama_Laser_Diawasi_1 = form.Nama_Laser_Diawasi_1;
    this.Nama_Laser_Diawasi_2 = form.Nama_Laser_Diawasi_2;
    this.Nama_Laser_Diawasi_3 = form.Nama_Laser_Diawasi_3;
    this.TTD_Perawat_Sirkuler = form.TTD_Perawat_Sirkuler;
    this.Ketersediaan_Prothese = form.Ketersediaan_Prothese;
    this.Nama_Perawat_Sirkuler = form.Nama_Perawat_Sirkuler;
    this.Pemakaian_Diathermy_1 = form.Pemakaian_Diathermy_1;
    this.Pemakaian_Diathermy_2 = form.Pemakaian_Diathermy_2;
    this.Pemakaian_Diathermy_3 = form.Pemakaian_Diathermy_3;
    this.Pemanas_Selesai_Waktu = form.Pemanas_Selesai_Waktu;
    this.Pendingin_Mulai_Waktu = form.Pendingin_Mulai_Waktu;
    this.Posisi_Alat_Lain_Teks = form.Posisi_Alat_Lain_Teks;
    this.TTD_Perawat_Instrumen = form.TTD_Perawat_Instrumen;
    this.Irigasi_Luka_Lain_Teks = form.Irigasi_Luka_Lain_Teks;
    this.Ketersediaan_Instrumen = form.Ketersediaan_Instrumen;
    this.Nama_Perawat_Instrumen = form.Nama_Perawat_Instrumen;
    this.Pendingin_Selesai_Waktu = form.Pendingin_Selesai_Waktu;
    this.Posisi_Kanula_Lain_Teks = form.Posisi_Kanula_Lain_Teks;
    this.Posisi_Lengan_Lain_Teks = form.Posisi_Lengan_Lain_Teks;
    this.Spesimen_Jenis_Jaringan = form.Spesimen_Jenis_Jaringan;
    this.Posisi_Operasi_Lain_Teks = form.Posisi_Operasi_Lain_Teks;
    this.Spesimen_Jumlah_Jaringan = form.Spesimen_Jumlah_Jaringan;
    this.ID_Posisi_Operasi_Diawasi = form.ID_Posisi_Operasi_Diawasi;
    this.Kode_Unit_Elektrosurgikal = form.Kode_Unit_Elektrosurgikal;
    this.Kondisi_Sebelum_Lain_Teks = form.Kondisi_Sebelum_Lain_Teks;
    this.Kondisi_Sesudah_Lain_Teks = form.Kondisi_Sesudah_Lain_Teks;
    this.Pemakaian_Cairan_Air_Teks = form.Pemakaian_Cairan_Air_Teks;
    this.Persiapan_Kulit_Lain_Teks = form.Persiapan_Kulit_Lain_Teks;
    this.Lokasi_Elektrode_Lain_Teks = form.Lokasi_Elektrode_Lain_Teks;
    this.Pemakaian_Cairan_Lain_Teks = form.Pemakaian_Cairan_Lain_Teks;
    this.Ketersediaan_Prothese_Waktu = form.Ketersediaan_Prothese_Waktu;
    this.Nama_Posisi_Operasi_Diawasi = form.Nama_Posisi_Operasi_Diawasi;
    this.Spesimen_Cairan_Pemeriksaan = form.Spesimen_Cairan_Pemeriksaan;
    this.Tingkat_Kesadaran_Lain_Teks = form.Tingkat_Kesadaran_Lain_Teks;
    this.Ketersediaan_Instrumen_Waktu = form.Ketersediaan_Instrumen_Waktu;
    this.Pemakaian_Cairan_Kultur_Teks = form.Pemakaian_Cairan_Kultur_Teks;
    this.Pemakaian_Cairan_Sodium_Teks = form.Pemakaian_Cairan_Sodium_Teks;
    this.Pemanas_Pengaturan_Temperatur = form.Pemanas_Pengaturan_Temperatur;
    this.Pemakaian_Cairan_Sitologi_Teks = form.Pemakaian_Cairan_Sitologi_Teks;
    this.Pemakaian_Cairan_Histologi_Teks = form.Pemakaian_Cairan_Histologi_Teks;
    this.Pendingin_Pengaturan_Temperatur = form.Pendingin_Pengaturan_Temperatur;
    this.Jenis_Balutan = form.Jenis_Balutan;
    this.Jenis_Spesimen = form.Jenis_Spesimen;
    this.Lain_Spesimen = form.Lain_Spesimen;
    this.Tanggal_Kadaluarsa = form.Tanggal_Kadaluarsa;
  }
}

// export interface IOperativeFairyNursingNotesModel extends IDataModel{
//   perawat: Array<INurseModel>;
//   dokter: Array<IDoctorModel>;
//   form: IOperativeFairyNursingNotesFormModel;
// }

// export class OperativeFairyNursingNotesModel extends DataModel {
//   perawat: Array<INurseModel>;
//   dokter: Array<IDoctorModel>;
//   form: OperativeFairyNursingNotesFormModel;

//   constructor(request: IOperativeFairyNursingNotesModel) {
//     super(request);
//     this.perawat = (Array.isArray(request.perawat)) ? request.perawat.map((a) => new NurseModel(a)) : [];
//     this.dokter = (Array.isArray(request.dokter)) ? request.dokter.map((a) => new DoctorModel(a)) : [];
//     this.form = request.form;
//   }
// }