import { IDataModel, DataModel } from "@src/shared/model";

export interface IPostoperativeInstructionsForm {
    Waktu: string;
    ID_DPJP: string;
    TTD_DPJP: string;
    Lain_Lain: string;
    Nama_DPJP: string;
    ID_Petugas: string;
    Mobilisasi: string;
    TTD_Pasien: string;
    Updated_At: string;
    Updated_By: string;
    Anjuran_Lain: number;
    Anjuran_Obat: number;
    Nama_Petugas: string;
    Keluhan_Rumah: string;
    Terjadi_Rumah: string;
    Jadwal_Kontrol: string;
    Anjuran_Alkohol: number;
    Anjuran_Terkena: number;
    Nomor_Dihubungi: number;
    Pendamping_Lain: number;
    Pendamping_Medis: number;
    Anjuran_Kendaraan: number;
    Anjuran_Lain_Teks: string;
    Anjuran_Tidur_Dll: number;
    Anjuran_Tidur_Eyeshield: number;
    Anjuran_Alat_Berat: number;
    Anjuran_Ekstremitas: number;
    Pendamping_Keluarga: number;
    Pendamping_Lain_Teks: string;
    Anjuran_Tidur_Lain_Teks: string;
    Anjuran_Tidur_Telentang: number;
    Anjuran_Tidur_Telungkup: number;
    Anjuran_Tidur_Membungkuk: number;
    Pendamping_Keluarga_Teks: string;
}

export class PostoperativeInstructionsForm {
    Waktu: string;
    ID_DPJP: string;
    TTD_DPJP: string;
    Lain_Lain: string;
    Nama_DPJP: string;
    ID_Petugas: string;
    Mobilisasi: string;
    TTD_Pasien: string;
    Updated_At: string;
    Updated_By: string;
    Anjuran_Lain: number;
    Anjuran_Obat: number;
    Nama_Petugas: string;
    Keluhan_Rumah: string;
    Terjadi_Rumah: string;
    Jadwal_Kontrol: string;
    Anjuran_Alkohol: number;
    Anjuran_Terkena: number;
    Nomor_Dihubungi: number;
    Pendamping_Lain: number;
    Pendamping_Medis: number;
    Anjuran_Kendaraan: number;
    Anjuran_Lain_Teks: string;
    Anjuran_Tidur_Dll: number;
    Anjuran_Tidur_Eyeshield: number;
    Anjuran_Alat_Berat: number;
    Anjuran_Ekstremitas: number;
    Pendamping_Keluarga: number;
    Pendamping_Lain_Teks: string;
    Anjuran_Tidur_Lain_Teks: string;
    Anjuran_Tidur_Telentang: number;
    Anjuran_Tidur_Telungkup: number;
    Anjuran_Tidur_Membungkuk: number;
    Pendamping_Keluarga_Teks: string;
    constructor(request:  IPostoperativeInstructionsForm) {
      this.Waktu = request.Waktu;
      this.ID_DPJP =  request.ID_DPJP;
      this.TTD_DPJP = request.TTD_DPJP;
      this.Lain_Lain = request.Lain_Lain;
      this.Nama_DPJP = request.Nama_DPJP;
      this.ID_Petugas = request.ID_Petugas;
      this.Mobilisasi = request.Mobilisasi;
      this.TTD_Pasien = request.TTD_Pasien;
      this.Updated_At =  request.Updated_At;
      this.Updated_By = request.Updated_By;
      this.Anjuran_Lain = request.Anjuran_Lain;
      this.Anjuran_Obat = request.Anjuran_Obat;
      this.Nama_Petugas = request.Nama_Petugas;
      this.Keluhan_Rumah = request.Keluhan_Rumah;
      this.Terjadi_Rumah = request.Terjadi_Rumah;
      this.Jadwal_Kontrol = request.Jadwal_Kontrol;
      this.Anjuran_Alkohol = request.Anjuran_Alkohol;
      this.Anjuran_Terkena = request.Anjuran_Terkena;
      this.Nomor_Dihubungi = request.Nomor_Dihubungi;
      this.Pendamping_Lain = request.Pendamping_Lain;
      this.Pendamping_Medis = request.Pendamping_Medis;
      this.Anjuran_Kendaraan = request.Anjuran_Kendaraan;
      this.Anjuran_Lain_Teks = request.Anjuran_Lain_Teks;
      this.Anjuran_Tidur_Dll = request.Anjuran_Tidur_Dll;
      this.Anjuran_Tidur_Eyeshield = request.Anjuran_Tidur_Eyeshield;
      this.Anjuran_Alat_Berat = request.Anjuran_Alat_Berat;
      this.Anjuran_Ekstremitas = request.Anjuran_Ekstremitas;
      this.Pendamping_Keluarga = request.Pendamping_Keluarga;
      this.Pendamping_Lain_Teks =  request.Pendamping_Lain_Teks;
      this.Anjuran_Tidur_Lain_Teks = request.Anjuran_Tidur_Lain_Teks;
      this.Anjuran_Tidur_Telentang = request.Anjuran_Tidur_Telentang;
      this.Anjuran_Tidur_Telungkup = request.Anjuran_Tidur_Telungkup;
      this.Anjuran_Tidur_Membungkuk = request.Anjuran_Tidur_Membungkuk;
      this.Pendamping_Keluarga_Teks = request.Pendamping_Keluarga_Teks;
    }
}

export interface IPostoperativeInstructionsModel extends IDataModel{
    form: IPostoperativeInstructionsForm;
  }

export class PostoperativeInstructionsModel extends DataModel {
    form: IPostoperativeInstructionsForm;

    constructor(request: IPostoperativeInstructionsModel) {
      super(request);
      this.form = request.form;
    }
}
