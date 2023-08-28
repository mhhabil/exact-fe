export interface INurseModel {
  ID_Karyawan: string;
  Nama: string;
}

export class NurseModel {
  ID_Karyawan: string;
  Nama: string;
  constructor(nurse: INurseModel) {
    this.ID_Karyawan = nurse.ID_Karyawan;
    this.Nama = nurse.Nama;
  }
}
