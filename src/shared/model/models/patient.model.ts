export interface IPatientModel {
  Agama: string;
  Alamat: string;
  Global_No_MR: string;
  Jenis_Kelamin: string;
  Kabupaten: string;
  Nama: string;
  No_BPJS: string;
  No_HP: string;
  No_MR: string;
  No_Telepon: string;
  Pekerjaan: string;
  Pendidikan: string;
  Provinsi: string;
  Status_Nikah: string;
  Suku: string;
  Tempat_Lahir: string;
  Tgl_Daftar: string;
  Tgl_Lahir: string;
  Umur: number;
  NIK: string;
}

export class PatientModel {
  Agama: string;
  Alamat: string;
  Global_No_MR: string;
  Jenis_Kelamin: string;
  Kabupaten: string;
  Nama: string;
  No_BPJS: string;
  No_HP: string;
  No_MR: string;
  No_Telepon: string;
  Pekerjaan: string;
  Pendidikan: string;
  Provinsi: string;
  Status_Nikah: string;
  Suku: string;
  Tempat_Lahir: string;
  Tgl_Daftar: string;
  Tgl_Lahir: string;
  Umur: number;
  NIK: string;

  constructor(patient: IPatientModel) {
    this.Agama = patient.Agama;
    this.Alamat = patient.Alamat;
    this.Global_No_MR = patient.Global_No_MR;
    this.Jenis_Kelamin = patient.Jenis_Kelamin;
    this.Kabupaten = patient.Kabupaten;
    this.Nama = patient.Nama;
    this.No_BPJS = patient.No_BPJS;
    this.No_HP = patient.No_HP;
    this.No_MR = patient.No_MR;
    this.No_Telepon = patient.No_Telepon;
    this.Pekerjaan = patient.Pekerjaan;
    this.Pendidikan = patient.Pendidikan;
    this.Provinsi = patient.Provinsi;
    this.Status_Nikah = patient.Status_Nikah;
    this.Suku = patient.Suku;
    this.Tempat_Lahir = patient.Tempat_Lahir;
    this.Tgl_Daftar = patient.Tgl_Daftar;
    this.Tgl_Lahir = patient.Tgl_Lahir;
    this.Umur = +patient.Umur;
    this.NIK = patient.NIK;
  }
}
