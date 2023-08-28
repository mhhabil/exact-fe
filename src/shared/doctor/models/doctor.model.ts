export interface IDoctorModel {
  ID_Karyawan: string;
  Nama: string;
  SIP: string;
}

export class DoctorModel {
  ID_Karyawan: string;
  Nama: string;
  SIP: string;
  constructor(doctor: IDoctorModel) {
    this.ID_Karyawan = doctor.ID_Karyawan;
    this.Nama = doctor.Nama;
    this.SIP = doctor.SIP;
  }
}
