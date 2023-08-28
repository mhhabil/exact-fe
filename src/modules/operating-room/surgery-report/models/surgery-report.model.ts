import * as yup from 'yup';
import { DataModel, IDataModel } from '@shared/model';
import { DoctorModel, IDoctorModel } from "@src/shared/doctor/models/doctor.model";
import { IMedicine, Medicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { INurseModel, NurseModel } from "@src/shared/nurse/models/nurse.model";

export interface ISurgeryReportForm {
  ID_Dokter: string;
  Sedasi: number;
  Kejadiantoksikasi: string;
  Lokasi_OD: number;
  Lokasi_OS: number;
  Pemakaian_Implant: any;
  Lokal_Pterygium_Clg: number;
  Lokal_Injeksi_Intravitreal_Pengukuran: any;
  Lokal_Pterygium_Bara_Sclera: number;
  Lokal_Pterygium_Injeksi: any;
  Lokal_Pterygium_Diteteskan: any;
  Lokal_Pterygium_Conjungtiva: number;
  Lokal_Pterygium_Check_Injeksi: number;
  Umum_Chalazion_Diteteskan_1: any;
  Umum_Chalazion_Diteteskan_2: any;
  Umum_Chalazion_Diteteskan_4: any;
  Umum_Chalazion_Bagian: any
  Umum_Chalazion_Injeksi: any;
  Umum_Chalazion_0: any;
  Umum_Chalazion_1: any;
  Umum_Chalazion_2: any;
  Umum_Chalazion_3: any;
  Umum_Chalazion_4: any;
  Umum_Chalazion_5: any;
  Umum_Chalazion_6: any;
  Umum_Chalazion_7: any;
  Umum_Chalazion_8: any;
  Nama_Dokter: string;
  Nama_Perawat: string;
  Obat_Obat: string;
  ID_Perawat: string;
  ID_Petugas: string;
  TTD_Dokter: string;
  Updated_At: string;
  Id_Dokter_Anestesi: string;
  Anestesi_Field_Block_Tipe: string;
  Operasi_Ke: string;
  Updated_By: string;
  Profilaksis: string;
  TTD_Perawat: string;
  General_Anestesi: number;
  Responhipersensitivitas: string;
  Lokal_Pterygium_Exicisi: any;
  Nama_Petugas: string;
  Umum_Phaco_0: number;
  Umum_Phaco_1: number;
  Umum_Phaco_2: number;
  Umum_Phaco_3: number;
  Umum_Phaco_4: number;
  Umum_Phaco_5: number;
  Umum_Phaco_6: number;
  Umum_Phaco_7: number;
  Umum_Phaco_8: number;
  Umum_Phaco_9: number;
  Us_Elapsed_1: string;
  Us_Elapsed_2: string;
  Us_Elapsed_3: string;
  Us_Elapsed_4: string;
  Us_Elapsed_5: string;
  Us_Elapsed_6: string;
  Kejadiantoksikasi_Ya_Teks: string;
  Jenis_Pembedahan: string;
  Anestesi_Infiltrasi_Tipe: string;
  Jaringan_Pendarahan: string;
  Jumlah_Darah_Hilang: string;
  Jumlah_Darah_Masuk: string;
  Jumlah_Pendarahan: string;
  Jenis_Operasi: string;
  Lokal_Injeksi_Intravitreal_Tipe: string;
  Lokal_Injeksi_Intravitreal_Tipe_1: string;
  Lokal_Injeksi_Intravitreal_Tipe_2: string;
  Lokal_Injeksi_Intravitreal_Tipe_3: string;
  Lokal_Injeksi_Intravitreal_Tipe_4: string;
  Lokal_Injeksi_Intravitreal_Tipe_5: string;
  Lokal_Injeksi_Intravitreal_Tipe_6: string;
  Lokal_Injeksi_Intravitreal_Tipe_7: string;
  Lokal_Injeksi_Intravitreal_Diteteskan_1: any;
  Lokal_Injeksi_Intravitreal_Diteteskan_2: any;
  Lokal_Injeksi_Intravitreal_Diteteskan_3: any;
  Lokal_Phaco_0: number;
  Lokal_Phaco_1: number;
  Lokal_Phaco_2: number;
  Lokal_Phaco_3: number;
  Lokal_Phaco_4: number;
  Lokal_Phaco_5: number;
  Lokal_Phaco_6: number;
  Lokal_Phaco_7: number;
  Lokal_Phaco_8: number;
  Lokal_Phaco_9: number;
  Umum_Phaco_10: number;
  Umum_Phaco_11: number;
  Umum_Phaco_12: number;
  Umum_Phaco_13: number;
  Umum_Phaco_14: number;
  Umum_Phaco_15: number;
  Umum_Phaco_16: number;
  Umum_Phaco_17: number;
  Umum_Phaco_18: number;
  Umum_Phaco_19: number;
  Umum_Phaco_20: number;
  Us_Absolute_1: string;
  Us_Absolute_2: string;
  Us_Absolute_3: string;
  Us_Absolute_4: string;
  Us_Absolute_5: string;
  Us_Absolute_6: string;
  Detail_Implant: any;
  Lokal_Chalazion_Bagian: any;
  Lokal_Chalazion_Injeksi: any;
  Grid_Chart_Img: string;
  Kode_Inventory: string;
  Lokal_Phaco_10: number;
  Lokal_Phaco_Knife: string;
  Lokal_Phaco_11: number;
  Lokal_Phaco_12: number;
  Lokal_Phaco_13: number;
  Lokal_Phaco_14: number;
  Lokal_Phaco_15: number;
  Lokal_Phaco_16: number;
  Lokal_Phaco_17: number;
  Lokal_Phaco_18: number;
  Lokal_Phaco_19: number;
  Lokal_Phaco_20: number;
  Macam_Jaringan: string;
  Skala_Anestesi: string;
  Grid_Chart_Data: string;
  Waktu_Start_Lama_Pembedahan: string;
  Waktu_End_Lama_Pembedahan: string;
  Lama_Pembedahan: string;
  Responhipersensitivitas_Ya_Teks: string;
  Cmb_Tindakan_Bedah: string;
  Us_Elapsed_UP_1: string;
  Us_Elapsed_UP_2: string;
  Us_Elapsed_UP_3: string;
  Us_Elapsed_UP_4: string;
  Us_Elapsed_UP_5: string;
  Us_Elapsed_UP_6: string;
  Anestesi_Topikal: number;
  Antibiotik_Jenis: string;
  Antibiotik_Waktu: string;
  Url_Image_Stiker: string;
  Us_Absolute_UP_1: string;
  Us_Absolute_UP_2: string;
  Us_Absolute_UP_3: string;
  Us_Absolute_UP_4: string;
  Us_Absolute_UP_5: string;
  Us_Absolute_UP_6: string;
  ID_Perawat_Dokter: string;
  Lokal_Chalazion_0: number;
  Lokal_Chalazion_1: number;
  Lokal_Chalazion_2: number;
  Lokal_Chalazion_3: number;
  Lokal_Chalazion_4: number;
  Lokal_Chalazion_5: number;
  Lokal_Chalazion_6: number;
  Lokal_Chalazion_7: number;
  Lokal_Chalazion_8: number;
  Lokal_Chalazion_Diteteskan_1: any;
  Lokal_Chalazion_Diteteskan_2: any;
  Lokal_Chalazion_Diteteskan_4: any;
  Lokal_Hordeolum_0: number;
  Lokal_Hordeolum_1: number;
  Lokal_Hordeolum_2: number;
  Lokal_Hordeolum_3: number;
  Lokal_Hordeolum_4: number;
  Lokal_Hordeolum_5: number;
  Lokal_Hordeolum_6: number;
  Lokal_Hordeolum_7: number;
  Lokal_Hordeolum_8: number;
  Lokal_Hordeolum_Diteteskan_1: any;
  Lokal_Hordeolum_Diteteskan_2: any;
  Lokal_Hordeolum_Diteteskan_3: any;
  Lokal_Hordeolum_Diteteskan_4: any;
  Lokal_Pterygium_0: number;
  Lokal_Pterygium_1: number;
  Lokal_Pterygium_2: number;
  Lokal_Pterygium_3: number;
  Lokal_Pterygium_4: number;
  Lokal_Pterygium_5: number;
  Lokal_Pterygium_6: number;
  Lokal_Pterygium_7: number;
  Lokal_Pterygium_8: number;
  Lokal_Pterygium_9: number;
  Lokal_Injeksi_Intravitreal_Injeksi_1: string;
  Lokal_Injeksi_Intravitreal_Injeksi_2: string;
  Lokal_Injeksi_Intravitreal_Injeksi_3: string;
  Lokal_Injeksi_Intravitreal_Injeksi_4: string;
  Lokal_Injeksi_Intravitreal_Injeksi_5: string;
  Lokal_Injeksi_Intravitreal_Injeksi_6: string;
  Name_Image_Stiker: string;
  Size_Image_Stiker: string;
  Type_Image_Stiker: string;
  Diagnosa_Pra_Bedah: string;
  ID_Dokter_Operator: string;
  Tanggal_Pembedahan: string;
  Anestesi_Infiltrasi: number;
  Id_Perawat_Sirkular: string;
  Profilaksis_Ya_Teks: string;
  Tindakan_Pembedahan: string;
  Anestesi_Field_Block: number;
  Diagnosa_Pasca_Bedah: string;
  Pembedahan_Opsi_Kiri: number;
  Keterangan_Pembedahan: string;
  Nama_Perawat_Sirkular: string;
  Pembedahan_Opsi_Kanan: number;
  Umum_Custom_Keterangan: string;
  Umum_Phaco_Gambar_Mata: string;
  Lokal_Custom_Keterangan: string;
  Lokal_Phaco_Gambar_Mata: string;
  Pembedahan_Opsi_Elektif: number;
  Cmb_Diagnosa_Pasca_Bedah: string;
  Penyakit_Komplikasi: string;
  Penyakit_Komplikasi_Teks: string;
  Konsultasi_Intra_Operatif: string;
  Pembedahan_Opsi_Emergency: number;
  Tanggal_Jaringan_Patologi: string;
  Lokal_Chalazion_Gambar_Pra: string;
  Lokal_Hordeolum_Gambar_Pra: string;
  Lokal_Pterygium_Gambar_Pra: string;
  Lokal_Chalazion_Gambar_Pasca: string;
  Lokal_Hordeolum_Gambar_Pasca: string;
  Lokal_Injeksi_Intravitreal_0: number;
  Lokal_Injeksi_Intravitreal_1: number;
  Lokal_Injeksi_Intravitreal_2: number;
  Lokal_Injeksi_Intravitreal_3: number;
  Lokal_Injeksi_Intravitreal_4: number;
  Lokal_Injeksi_Intravitreal_5: number;
  Lokal_Injeksi_Intravitreal_6: number;
  Lokal_Injeksi_Intravitreal_7: number;
  Lokal_Injeksi_Intravitreal_8: number;
  Lokal_Pterygium_Gambar_Pasca: string;
  Id_Perawat_Dokter_Asisten_Operator: string;
  Nama_Perawat_Dokter_Asisten_Operator: string;
  Lokal_Injeksi_Intravitreal_Injeksi_Lain_Teks: string;
  Umum_Phaco_Knife?: string;
  Lokal_Hordeolum_Injeksi?: string;
  Lokal_Hordeolum_Bagian?: string;
}

export class SurgeryReportForm {
  ID_Dokter: string;
  Lokasi_OD: number;
  Kejadiantoksikasi: string;
  Lokal_Pterygium_Exicisi: any;
  Lokasi_OS: number;
  Sedasi: number;
  Obat_Obat: string;
  ID_Perawat: string;
  ID_Petugas: string;
  TTD_Dokter: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Perawat: string;
  Operasi_Ke: string;
  Pemakaian_Implant: any;
  Nama_Dokter: string;
  Nama_Perawat: string;
  Lokal_Pterygium_Conjungtiva: number
  Lokal_Pterygium_Bara_Sclera: number;
  Lokal_Pterygium_Clg: number;
  Lokal_Pterygium_Check_Injeksi: number;
  Umum_Chalazion_Diteteskan_1: any;
  Umum_Chalazion_Diteteskan_2: any;
  Umum_Chalazion_Diteteskan_4: any;
  Umum_Chalazion_Bagian: any
  Umum_Chalazion_Injeksi: any;
  Umum_Chalazion_0: any;
  Umum_Chalazion_1: any;
  Umum_Chalazion_2: any;
  Umum_Chalazion_3: any;
  Umum_Chalazion_4: any;
  Umum_Chalazion_5: any;
  Umum_Chalazion_6: any;
  Umum_Chalazion_7: any;
  Umum_Chalazion_8: any;
  Lokal_Hordeolum_Diteteskan_1: any;
  Lokal_Hordeolum_Diteteskan_2: any;
  Lokal_Hordeolum_Diteteskan_3: any;
  Lokal_Hordeolum_Diteteskan_4: any;
  Id_Dokter_Anestesi: string;
  Anestesi_Field_Block_Tipe: string;
  Nama_Petugas: string;
  Kejadiantoksikasi_Ya_Teks: string;
  Lokal_Injeksi_Intravitreal_Pengukuran: any;
  Anestesi_Infiltrasi_Tipe: string;
  Jaringan_Pendarahan: string;
  Jumlah_Darah_Hilang: string;
  Jumlah_Darah_Masuk: string;
  Jumlah_Pendarahan: string;
  Lokal_Pterygium_Diteteskan: any;
  Lokal_Chalazion_Diteteskan_1: any;
  Lokal_Chalazion_Diteteskan_2: any;
  Lokal_Chalazion_Diteteskan_4: any;
  Lokal_Chalazion_Bagian: any;
  Lokal_Chalazion_Injeksi: any;
  Lokal_Injeksi_Intravitreal_Injeksi_1: string;
  Lokal_Injeksi_Intravitreal_Injeksi_2: string;
  Lokal_Injeksi_Intravitreal_Injeksi_3: string;
  Lokal_Injeksi_Intravitreal_Injeksi_4: string;
  Lokal_Injeksi_Intravitreal_Injeksi_5: string;
  Lokal_Injeksi_Intravitreal_Injeksi_6: string;
  Lokal_Injeksi_Intravitreal_Diteteskan_1: any;
  Lokal_Injeksi_Intravitreal_Diteteskan_2: any;
  Lokal_Injeksi_Intravitreal_Diteteskan_3: any;
  Umum_Phaco_0: number;
  Umum_Phaco_1: number;
  Umum_Phaco_2: number;
  Umum_Phaco_3: number;
  Umum_Phaco_4: number;
  Umum_Phaco_5: number;
  Umum_Phaco_6: number;
  Umum_Phaco_7: number;
  Umum_Phaco_8: number;
  Umum_Phaco_9: number;
  Lokal_Injeksi_Intravitreal_Tipe: string;
  Lokal_Injeksi_Intravitreal_Tipe_1: string;
  Lokal_Injeksi_Intravitreal_Tipe_2: string;
  Lokal_Injeksi_Intravitreal_Tipe_3: string;
  Lokal_Injeksi_Intravitreal_Tipe_4: string;
  Lokal_Injeksi_Intravitreal_Tipe_5: string;
  Lokal_Injeksi_Intravitreal_Tipe_6: string;
  Lokal_Injeksi_Intravitreal_Tipe_7: string;
  Jenis_Pembedahan: string;
  General_Anestesi: number;
  Us_Elapsed_1: string;
  Profilaksis: string;
  Us_Elapsed_2: string;
  Us_Elapsed_3: string;
  Us_Elapsed_4: string;
  Us_Elapsed_5: string;
  Us_Elapsed_6: string;
  Jenis_Operasi: string;
  Cmb_Tindakan_Bedah: string;
  Lokal_Phaco_0: number;
  Lokal_Phaco_1: number;
  Lokal_Phaco_2: number;
  Lokal_Phaco_3: number;
  Lokal_Phaco_4: number;
  Lokal_Phaco_5: number;
  Lokal_Phaco_6: number;
  Lokal_Phaco_7: number;
  Lokal_Phaco_8: number;
  Lokal_Phaco_9: number;
  Umum_Phaco_10: number;
  Umum_Phaco_11: number;
  Umum_Phaco_12: number;
  Umum_Phaco_13: number;
  Umum_Phaco_14: number;
  Umum_Phaco_15: number;
  Umum_Phaco_16: number;
  Umum_Phaco_17: number;
  Umum_Phaco_18: number;
  Umum_Phaco_19: number;
  Umum_Phaco_20: number;
  Us_Absolute_1: string;
  Us_Absolute_2: string;
  Us_Absolute_3: string;
  Us_Absolute_4: string;
  Us_Absolute_5: string;
  Us_Absolute_6: string;
  Detail_Implant: any;
  Grid_Chart_Img: string;
  Kode_Inventory: string;
  Lokal_Phaco_10: number;
  Lokal_Phaco_Knife: string;
  Lokal_Phaco_11: number;
  Lokal_Phaco_12: number;
  Lokal_Phaco_13: number;
  Lokal_Phaco_14: number;
  Lokal_Phaco_15: number;
  Lokal_Phaco_16: number;
  Lokal_Phaco_17: number;
  Lokal_Phaco_18: number;
  Lokal_Phaco_19: number;
  Lokal_Phaco_20: number;
  Macam_Jaringan: string;
  Skala_Anestesi: string;
  Grid_Chart_Data: string;
  Waktu_Start_Lama_Pembedahan: string;
  Waktu_End_Lama_Pembedahan: string;
  Lama_Pembedahan: string;
  Us_Elapsed_UP_1: string;
  Us_Elapsed_UP_2: string;
  Us_Elapsed_UP_3: string;
  Us_Elapsed_UP_4: string;
  Us_Elapsed_UP_5: string;
  Us_Elapsed_UP_6: string;
  Anestesi_Topikal: number;
  Antibiotik_Jenis: string;
  Antibiotik_Waktu: string;
  Url_Image_Stiker: string;
  Us_Absolute_UP_1: string;
  Us_Absolute_UP_2: string;
  Us_Absolute_UP_3: string;
  Us_Absolute_UP_4: string;
  Us_Absolute_UP_5: string;
  Us_Absolute_UP_6: string;
  ID_Perawat_Dokter: string;
  Lokal_Chalazion_0: number;
  Lokal_Chalazion_1: number;
  Lokal_Chalazion_2: number;
  Lokal_Chalazion_3: number;
  Lokal_Chalazion_4: number;
  Lokal_Chalazion_5: number;
  Lokal_Chalazion_6: number;
  Lokal_Chalazion_7: number;
  Lokal_Chalazion_8: number;
  Lokal_Hordeolum_0: number;
  Lokal_Hordeolum_1: number;
  Lokal_Hordeolum_2: number;
  Lokal_Hordeolum_3: number;
  Lokal_Hordeolum_4: number;
  Lokal_Hordeolum_5: number;
  Lokal_Hordeolum_6: number;
  Lokal_Hordeolum_7: number;
  Lokal_Hordeolum_8: number;
  Lokal_Pterygium_0: number;
  Lokal_Pterygium_1: number;
  Lokal_Pterygium_2: number;
  Lokal_Pterygium_3: number;
  Lokal_Pterygium_4: number;
  Lokal_Pterygium_5: number;
  Lokal_Pterygium_6: number;
  Lokal_Pterygium_7: number;
  Lokal_Pterygium_8: number;
  Lokal_Pterygium_9: number;
  Responhipersensitivitas_Ya_Teks: string;
  Name_Image_Stiker: string;
  Size_Image_Stiker: string;
  Type_Image_Stiker: string;
  Diagnosa_Pra_Bedah: string;
  ID_Dokter_Operator: string;
  Tanggal_Pembedahan: string;
  Anestesi_Infiltrasi: number;
  Penyakit_Komplikasi: string;
  Id_Perawat_Sirkular: string;
  Profilaksis_Ya_Teks: string;
  Tindakan_Pembedahan: string;
  Anestesi_Field_Block: number;
  Diagnosa_Pasca_Bedah: string;
  Pembedahan_Opsi_Kiri: number;
  Responhipersensitivitas: string;
  Keterangan_Pembedahan: string;
  Nama_Perawat_Sirkular: string;
  Pembedahan_Opsi_Kanan: number;
  Umum_Custom_Keterangan: string;
  Umum_Phaco_Gambar_Mata: string;
  Lokal_Custom_Keterangan: string;
  Lokal_Phaco_Gambar_Mata: string;
  Pembedahan_Opsi_Elektif: number;
  Cmb_Diagnosa_Pasca_Bedah: string;
  Penyakit_Komplikasi_Teks: string;
  Konsultasi_Intra_Operatif: string;
  Pembedahan_Opsi_Emergency: number;
  Tanggal_Jaringan_Patologi: string;
  Lokal_Chalazion_Gambar_Pra: string;
  Lokal_Hordeolum_Gambar_Pra: string;
  Lokal_Pterygium_Gambar_Pra: string;
  Lokal_Chalazion_Gambar_Pasca: string;
  Lokal_Hordeolum_Gambar_Pasca: string;
  Lokal_Injeksi_Intravitreal_0: number;
  Lokal_Injeksi_Intravitreal_1: number;
  Lokal_Injeksi_Intravitreal_2: number;
  Lokal_Injeksi_Intravitreal_3: number;
  Lokal_Injeksi_Intravitreal_4: number;
  Lokal_Injeksi_Intravitreal_5: number;
  Lokal_Injeksi_Intravitreal_6: number;
  Lokal_Injeksi_Intravitreal_7: number;
  Lokal_Injeksi_Intravitreal_8: number;
  Lokal_Pterygium_Gambar_Pasca: string;
  Id_Perawat_Dokter_Asisten_Operator: string;
  Nama_Perawat_Dokter_Asisten_Operator: string;
  Lokal_Injeksi_Intravitreal_Injeksi_Lain_Teks: string;
  Lokal_Pterygium_Injeksi: string;
  Umum_Phaco_Knife?: string;
  Lokal_Hordeolum_Injeksi?: string;
  Lokal_Hordeolum_Bagian?: string;

  constructor(request: ISurgeryReportForm) {
    this.ID_Dokter = request.ID_Dokter;
    this.Lokasi_OD = request.Lokasi_OD;
    this.Lokasi_OS = request.Lokasi_OS;
    this.Kejadiantoksikasi = request.Kejadiantoksikasi;
    this.Obat_Obat = request.Obat_Obat;
    this.ID_Perawat = request.ID_Perawat;
    this.ID_Petugas = request.ID_Petugas;
    this.TTD_Dokter = request.TTD_Dokter;
    this.Updated_At = request.Updated_At;
    this.Updated_By = request.Updated_By;
    this.TTD_Perawat = request.TTD_Perawat;
    this.Lokal_Pterygium_Clg = request.Lokal_Pterygium_Clg;
    this.Lokal_Pterygium_Diteteskan = request.Lokal_Pterygium_Diteteskan;
    this.Id_Dokter_Anestesi = request.Id_Dokter_Anestesi;
    this.Kejadiantoksikasi_Ya_Teks = request.Kejadiantoksikasi_Ya_Teks;
    this.Jenis_Pembedahan = request.Jenis_Pembedahan;
    this.Operasi_Ke = request.Operasi_Ke;
    this.Jaringan_Pendarahan = request.Jaringan_Pendarahan;
    this.Jumlah_Darah_Hilang = request.Jumlah_Darah_Hilang;
    this.Jumlah_Darah_Masuk = request.Jumlah_Darah_Masuk;
    this.Jumlah_Pendarahan = request.Jumlah_Pendarahan;
    this.Nama_Petugas = request.Nama_Petugas;
    this.Lokal_Pterygium_Injeksi = request.Lokal_Pterygium_Injeksi
    this.Lokal_Pterygium_Exicisi = request.Lokal_Pterygium_Exicisi;
    this.Lokal_Pterygium_Check_Injeksi = request.Lokal_Pterygium_Check_Injeksi;
    this.Nama_Dokter = request.Nama_Dokter;
    this.Nama_Perawat = request.Nama_Perawat;
    this.Umum_Phaco_0 = request.Umum_Phaco_0;
    this.Umum_Phaco_1 = request.Umum_Phaco_1;
    this.Umum_Phaco_2 = request.Umum_Phaco_2;
    this.Umum_Phaco_3 = request.Umum_Phaco_3;
    this.Umum_Phaco_4 = request.Umum_Phaco_4;
    this.Umum_Phaco_5 = request.Umum_Phaco_5;
    this.Umum_Phaco_6 = request.Umum_Phaco_6;
    this.Umum_Phaco_7 = request.Umum_Phaco_7;
    this.Umum_Phaco_8 = request.Umum_Phaco_8;
    this.Umum_Phaco_9 = request.Umum_Phaco_9;
    this.Us_Elapsed_1 = request.Us_Elapsed_1;
    this.Us_Elapsed_2 = request.Us_Elapsed_2;
    this.Us_Elapsed_3 = request.Us_Elapsed_3;
    this.Us_Elapsed_4 = request.Us_Elapsed_4;
    this.Us_Elapsed_5 = request.Us_Elapsed_5;
    this.Us_Elapsed_6 = request.Us_Elapsed_6;
    this.Lokal_Pterygium_Conjungtiva = request.Lokal_Pterygium_Conjungtiva;
    this.Lokal_Pterygium_Bara_Sclera = request.Lokal_Pterygium_Bara_Sclera;
    this.Lokal_Injeksi_Intravitreal_Diteteskan_1 = request.Lokal_Injeksi_Intravitreal_Diteteskan_1;
    this.Lokal_Injeksi_Intravitreal_Diteteskan_2 = request.Lokal_Injeksi_Intravitreal_Diteteskan_2;
    this.Lokal_Injeksi_Intravitreal_Diteteskan_3 = request.Lokal_Injeksi_Intravitreal_Diteteskan_3;
    this.Lokal_Hordeolum_Diteteskan_1 = request.Lokal_Hordeolum_Diteteskan_1;
    this.Lokal_Hordeolum_Diteteskan_2 = request.Lokal_Hordeolum_Diteteskan_2;
    this.Lokal_Hordeolum_Diteteskan_3 = request.Lokal_Hordeolum_Diteteskan_3;
    this.Lokal_Hordeolum_Diteteskan_4 = request.Lokal_Hordeolum_Diteteskan_4;
    this.Lokal_Injeksi_Intravitreal_Pengukuran = request.Lokal_Injeksi_Intravitreal_Pengukuran;
    this.Pemakaian_Implant = request.Pemakaian_Implant;
    this.Lokal_Chalazion_Bagian = request.Lokal_Chalazion_Bagian;
    this.Lokal_Chalazion_Injeksi = request.Lokal_Chalazion_Injeksi;
    this.Lokal_Chalazion_Diteteskan_1 = request.Lokal_Chalazion_Diteteskan_1;
    this.Lokal_Chalazion_Diteteskan_2 = request.Lokal_Chalazion_Diteteskan_2;
    this.Lokal_Chalazion_Diteteskan_4 = request.Lokal_Chalazion_Diteteskan_4;
    this.Lokal_Injeksi_Intravitreal_Tipe = request.Lokal_Injeksi_Intravitreal_Tipe;
    this.Lokal_Injeksi_Intravitreal_Tipe_1 = request.Lokal_Injeksi_Intravitreal_Tipe_1;
    this.Lokal_Injeksi_Intravitreal_Tipe_2 = request.Lokal_Injeksi_Intravitreal_Tipe_2;
    this.Lokal_Injeksi_Intravitreal_Tipe_3 = request.Lokal_Injeksi_Intravitreal_Tipe_3;
    this.Lokal_Injeksi_Intravitreal_Tipe_4 = request.Lokal_Injeksi_Intravitreal_Tipe_4;
    this.Lokal_Injeksi_Intravitreal_Tipe_5 = request.Lokal_Injeksi_Intravitreal_Tipe_5;
    this.Lokal_Injeksi_Intravitreal_Tipe_6 = request.Lokal_Injeksi_Intravitreal_Tipe_6;
    this.Lokal_Injeksi_Intravitreal_Tipe_7 = request.Lokal_Injeksi_Intravitreal_Tipe_7;
    this.Lokal_Injeksi_Intravitreal_Injeksi_1 = request.Lokal_Injeksi_Intravitreal_Injeksi_1;
    this.Lokal_Injeksi_Intravitreal_Injeksi_2 = request.Lokal_Injeksi_Intravitreal_Injeksi_2;
    this.Lokal_Injeksi_Intravitreal_Injeksi_3 = request.Lokal_Injeksi_Intravitreal_Injeksi_3;
    this.Lokal_Injeksi_Intravitreal_Injeksi_4 = request.Lokal_Injeksi_Intravitreal_Injeksi_4;
    this.Lokal_Injeksi_Intravitreal_Injeksi_5 = request.Lokal_Injeksi_Intravitreal_Injeksi_5;
    this.Lokal_Injeksi_Intravitreal_Injeksi_6 = request.Lokal_Injeksi_Intravitreal_Injeksi_6;
    this.Anestesi_Field_Block_Tipe = request.Anestesi_Field_Block_Tipe;
    this.Anestesi_Infiltrasi_Tipe = request.Anestesi_Infiltrasi_Tipe;
    this.General_Anestesi = request.General_Anestesi;
    this.Umum_Chalazion_Diteteskan_1 = request.Umum_Chalazion_Diteteskan_1;
    this.Umum_Chalazion_Diteteskan_2 = request.Umum_Chalazion_Diteteskan_2;
    this.Umum_Chalazion_Diteteskan_4 = request.Umum_Chalazion_Diteteskan_4;
    this.Umum_Chalazion_Bagian = request.Umum_Chalazion_Bagian;
    this.Umum_Chalazion_Injeksi = request.Umum_Chalazion_Injeksi;
    this.Umum_Chalazion_0 = request.Umum_Chalazion_0;
    this.Umum_Chalazion_1 = request.Umum_Chalazion_1;
    this.Umum_Chalazion_2 = request.Umum_Chalazion_2;
    this.Umum_Chalazion_3 = request.Umum_Chalazion_3;
    this.Umum_Chalazion_4 = request.Umum_Chalazion_4;
    this.Umum_Chalazion_5 = request.Umum_Chalazion_5;
    this.Umum_Chalazion_6 = request.Umum_Chalazion_6;
    this.Umum_Chalazion_7 = request.Umum_Chalazion_7;
    this.Umum_Chalazion_8 = request.Umum_Chalazion_8;
    this.Jenis_Operasi = request.Jenis_Operasi;
    this.Lokal_Phaco_0 = request.Lokal_Phaco_0;
    this.Lokal_Phaco_1 = request.Lokal_Phaco_1;
    this.Lokal_Phaco_2 = request.Lokal_Phaco_2;
    this.Lokal_Phaco_3 = request.Lokal_Phaco_3;
    this.Lokal_Phaco_4 = request.Lokal_Phaco_4;
    this.Lokal_Phaco_5 = request.Lokal_Phaco_5;
    this.Lokal_Phaco_6 = request.Lokal_Phaco_6;
    this.Lokal_Phaco_7 = request.Lokal_Phaco_7;
    this.Lokal_Phaco_8 = request.Lokal_Phaco_8;
    this.Lokal_Phaco_9 = request.Lokal_Phaco_9;
    this.Umum_Phaco_10 = request.Umum_Phaco_10;
    this.Umum_Phaco_11 = request.Umum_Phaco_11;
    this.Umum_Phaco_12 = request.Umum_Phaco_12;
    this.Umum_Phaco_13 = request.Umum_Phaco_13;
    this.Umum_Phaco_14 = request.Umum_Phaco_14;
    this.Umum_Phaco_15 = request.Umum_Phaco_15;
    this.Umum_Phaco_16 = request.Umum_Phaco_16;
    this.Umum_Phaco_17 = request.Umum_Phaco_17;
    this.Umum_Phaco_18 = request.Umum_Phaco_18;
    this.Umum_Phaco_19 = request.Umum_Phaco_19;
    this.Umum_Phaco_20 = request.Umum_Phaco_20;
    this.Us_Absolute_1 = request.Us_Absolute_1;
    this.Us_Absolute_2 = request.Us_Absolute_2;
    this.Us_Absolute_3 = request.Us_Absolute_3;
    this.Us_Absolute_4 = request.Us_Absolute_4;
    this.Us_Absolute_5 = request.Us_Absolute_5;
    this.Us_Absolute_6 = request.Us_Absolute_6;
    this.Profilaksis = request.Profilaksis;
    this.Penyakit_Komplikasi = request.Penyakit_Komplikasi;
    this.Responhipersensitivitas_Ya_Teks = request.Responhipersensitivitas_Ya_Teks;
    this.Detail_Implant = request.Detail_Implant;
    this.Grid_Chart_Img = request.Grid_Chart_Img;
    this.Cmb_Tindakan_Bedah = request.Cmb_Tindakan_Bedah;
    this.Kode_Inventory = request.Kode_Inventory;
    this.Lokal_Phaco_10 = request.Lokal_Phaco_10;
    this.Lokal_Phaco_Knife = request.Lokal_Phaco_Knife;
    this.Lokal_Phaco_11 = request.Lokal_Phaco_11;
    this.Lokal_Phaco_12 = request.Lokal_Phaco_12;
    this.Lokal_Phaco_13 = request.Lokal_Phaco_13;
    this.Lokal_Phaco_14 = request.Lokal_Phaco_14;
    this.Lokal_Phaco_15 = request.Lokal_Phaco_15;
    this.Lokal_Phaco_16 = request.Lokal_Phaco_16;
    this.Lokal_Phaco_17 = request.Lokal_Phaco_17;
    this.Lokal_Phaco_18 = request.Lokal_Phaco_18;
    this.Lokal_Phaco_19 = request.Lokal_Phaco_19;
    this.Lokal_Phaco_20 = request.Lokal_Phaco_20;
    this.Macam_Jaringan = request.Macam_Jaringan;
    this.Skala_Anestesi = request.Skala_Anestesi;
    this.Grid_Chart_Data = request.Grid_Chart_Data;
    this.Waktu_Start_Lama_Pembedahan = request.Waktu_Start_Lama_Pembedahan;
    this.Waktu_End_Lama_Pembedahan = request.Waktu_End_Lama_Pembedahan;
    this.Lama_Pembedahan = request.Lama_Pembedahan;
    this.Sedasi = request.Sedasi;
    this.Us_Elapsed_UP_1 = request.Us_Elapsed_UP_1;
    this.Us_Elapsed_UP_2 = request.Us_Elapsed_UP_2;
    this.Us_Elapsed_UP_3 = request.Us_Elapsed_UP_3;
    this.Us_Elapsed_UP_4 = request.Us_Elapsed_UP_4;
    this.Us_Elapsed_UP_5 = request.Us_Elapsed_UP_5;
    this.Us_Elapsed_UP_6 = request.Us_Elapsed_UP_6;
    this.Anestesi_Topikal = request.Anestesi_Topikal;
    this.Antibiotik_Jenis = request.Antibiotik_Jenis;
    this.Antibiotik_Waktu = request.Antibiotik_Waktu;
    this.Url_Image_Stiker = request.Url_Image_Stiker;
    this.Us_Absolute_UP_1 = request.Us_Absolute_UP_1;
    this.Us_Absolute_UP_2 = request.Us_Absolute_UP_2;
    this.Us_Absolute_UP_3 = request.Us_Absolute_UP_3;
    this.Us_Absolute_UP_4 = request.Us_Absolute_UP_4;
    this.Us_Absolute_UP_5 = request.Us_Absolute_UP_5;
    this.Us_Absolute_UP_6 = request.Us_Absolute_UP_6;
    this.Responhipersensitivitas = request.Responhipersensitivitas;
    this.ID_Perawat_Dokter = request.ID_Perawat_Dokter;
    this.Lokal_Chalazion_0 = request.Lokal_Chalazion_0;
    this.Lokal_Chalazion_1 = request.Lokal_Chalazion_1;
    this.Lokal_Chalazion_2 = request.Lokal_Chalazion_2;
    this.Lokal_Chalazion_3 = request.Lokal_Chalazion_3;
    this.Lokal_Chalazion_4 = request.Lokal_Chalazion_4;
    this.Lokal_Chalazion_5 = request.Lokal_Chalazion_5;
    this.Lokal_Chalazion_6 = request.Lokal_Chalazion_6;
    this.Lokal_Chalazion_7 = request.Lokal_Chalazion_7;
    this.Lokal_Chalazion_8 = request.Lokal_Chalazion_8;
    this.Lokal_Hordeolum_0 = request.Lokal_Hordeolum_0;
    this.Lokal_Hordeolum_1 = request.Lokal_Hordeolum_1;
    this.Lokal_Hordeolum_2 = request.Lokal_Hordeolum_2;
    this.Lokal_Hordeolum_3 = request.Lokal_Hordeolum_3;
    this.Lokal_Hordeolum_4 = request.Lokal_Hordeolum_4;
    this.Lokal_Hordeolum_5 = request.Lokal_Hordeolum_5;
    this.Lokal_Hordeolum_6 = request.Lokal_Hordeolum_6;
    this.Lokal_Hordeolum_7 = request.Lokal_Hordeolum_7;
    this.Lokal_Hordeolum_8 = request.Lokal_Hordeolum_8;
    this.Lokal_Pterygium_0 = request.Lokal_Pterygium_0;
    this.Lokal_Pterygium_1 = request.Lokal_Pterygium_1;
    this.Lokal_Pterygium_2 = request.Lokal_Pterygium_2;
    this.Lokal_Pterygium_3 = request.Lokal_Pterygium_3;
    this.Lokal_Pterygium_4 = request.Lokal_Pterygium_4;
    this.Lokal_Pterygium_5 = request.Lokal_Pterygium_5;
    this.Lokal_Pterygium_6 = request.Lokal_Pterygium_6;
    this.Lokal_Pterygium_7 = request.Lokal_Pterygium_7;
    this.Lokal_Pterygium_8 = request.Lokal_Pterygium_8;
    this.Lokal_Pterygium_9 = request.Lokal_Pterygium_9;
    this.Name_Image_Stiker = request.Name_Image_Stiker;
    this.Size_Image_Stiker = request.Size_Image_Stiker;
    this.Type_Image_Stiker = request.Type_Image_Stiker;
    this.Diagnosa_Pra_Bedah = request.Diagnosa_Pra_Bedah;
    this.ID_Dokter_Operator = request.ID_Dokter_Operator;
    this.Tanggal_Pembedahan = request.Tanggal_Pembedahan;
    this.Anestesi_Infiltrasi = request.Anestesi_Infiltrasi;
    this.Id_Perawat_Sirkular = request.Id_Perawat_Sirkular;
    this.Profilaksis_Ya_Teks = request.Profilaksis_Ya_Teks;
    this.Tindakan_Pembedahan = request.Tindakan_Pembedahan;
    this.Anestesi_Field_Block = request.Anestesi_Field_Block;
    this.Diagnosa_Pasca_Bedah = request.Diagnosa_Pasca_Bedah;
    this.Pembedahan_Opsi_Kiri = request.Pembedahan_Opsi_Kiri;
    this.Keterangan_Pembedahan = request.Keterangan_Pembedahan;
    this.Nama_Perawat_Sirkular = request.Nama_Perawat_Sirkular;
    this.Pembedahan_Opsi_Kanan = request.Pembedahan_Opsi_Kanan;
    this.Umum_Custom_Keterangan = request.Umum_Custom_Keterangan
    this.Umum_Phaco_Gambar_Mata = request.Umum_Phaco_Gambar_Mata
    this.Lokal_Custom_Keterangan = request.Lokal_Custom_Keterangan;
    this.Lokal_Phaco_Gambar_Mata = request.Lokal_Phaco_Gambar_Mata;
    this.Pembedahan_Opsi_Elektif = request.Pembedahan_Opsi_Elektif;
    this.Cmb_Diagnosa_Pasca_Bedah = request.Cmb_Diagnosa_Pasca_Bedah;
    this.Penyakit_Komplikasi_Teks = request.Penyakit_Komplikasi_Teks;
    this.Konsultasi_Intra_Operatif = request.Konsultasi_Intra_Operatif;
    this.Pembedahan_Opsi_Emergency = request.Pembedahan_Opsi_Emergency;
    this.Tanggal_Jaringan_Patologi = request.Tanggal_Jaringan_Patologi;
    this.Lokal_Chalazion_Gambar_Pra = request.Lokal_Chalazion_Gambar_Pra;
    this.Lokal_Hordeolum_Gambar_Pra = request.Lokal_Hordeolum_Gambar_Pra;
    this.Lokal_Pterygium_Gambar_Pra = request.Lokal_Pterygium_Gambar_Pra;
    this.Lokal_Chalazion_Gambar_Pasca = request.Lokal_Chalazion_Gambar_Pasca;
    this.Lokal_Hordeolum_Gambar_Pasca = request.Lokal_Hordeolum_Gambar_Pasca;
    this.Lokal_Injeksi_Intravitreal_0 = request.Lokal_Injeksi_Intravitreal_0;
    this.Lokal_Injeksi_Intravitreal_1 = request.Lokal_Injeksi_Intravitreal_1;
    this.Lokal_Injeksi_Intravitreal_2 = request.Lokal_Injeksi_Intravitreal_2;
    this.Lokal_Injeksi_Intravitreal_3 = request.Lokal_Injeksi_Intravitreal_3;
    this.Lokal_Injeksi_Intravitreal_4 = request.Lokal_Injeksi_Intravitreal_4;
    this.Lokal_Injeksi_Intravitreal_5 = request.Lokal_Injeksi_Intravitreal_5;
    this.Lokal_Injeksi_Intravitreal_6 = request.Lokal_Injeksi_Intravitreal_6;
    this.Lokal_Injeksi_Intravitreal_7 = request.Lokal_Injeksi_Intravitreal_7;
    this.Lokal_Injeksi_Intravitreal_8 = request.Lokal_Injeksi_Intravitreal_8;
    this.Lokal_Pterygium_Gambar_Pasca = request.Lokal_Pterygium_Gambar_Pasca;
    this.Id_Perawat_Dokter_Asisten_Operator = request.Id_Perawat_Dokter_Asisten_Operator;
    this.Nama_Perawat_Dokter_Asisten_Operator = request.Nama_Perawat_Dokter_Asisten_Operator;
    this.Lokal_Injeksi_Intravitreal_Injeksi_Lain_Teks = request.Lokal_Injeksi_Intravitreal_Injeksi_Lain_Teks;
    this.Umum_Phaco_Knife = request.Umum_Phaco_Knife;
    this.Lokal_Hordeolum_Injeksi = request.Lokal_Hordeolum_Injeksi;
    this.Lokal_Hordeolum_Bagian = request.Lokal_Hordeolum_Bagian;
  }
}

export interface ISurgeryReportModel extends IDataModel{
  perawat: Array<INurseModel>;
  dokter: Array<IDoctorModel>;
  daftar_lensa: Array<IMedicine>;
  form: ISurgeryReportForm;
}

export class SurgeryReportModel extends DataModel {
  perawat: Array<INurseModel>;
  dokter: Array<IDoctorModel>;
  daftar_lensa: Array<IMedicine>;
  form: SurgeryReportForm;

  constructor(request: ISurgeryReportModel) {
    super(request);
    this.perawat = (Array.isArray(request.perawat)) ? request.perawat.map((a) => new NurseModel(a)) : [];
    this.dokter = (Array.isArray(request.dokter)) ? request.dokter.map((a) => new DoctorModel(a)) : [];
    this.daftar_lensa = (Array.isArray(request.daftar_lensa)) ? request.daftar_lensa.map((a) => new Medicine(a)) : [];
    this.form = request.form;
  }

  static createFromJson(json: ISurgeryReportModel) {
    return new SurgeryReportModel(json);
  }
}
