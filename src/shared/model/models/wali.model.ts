export interface IWaliModel {
  Alamat: string;
  Hubungan: string;
  Nama: string;
  No_Telepon_1: string;
  No_Telepon: string;
  Suku: string;
  Tempat_Lahir: string;
  Tgl_Lahir: string;
  Umur: number;
}

export class WaliModel {
  Alamat: string;
  Hubungan: string;
  Nama: string;
  No_Telepon_1: string;
  No_Telepon: string;
  Suku: string;
  Tempat_Lahir: string;
  Tgl_Lahir: string;
  Umur: number;

  constructor(wali: IWaliModel) {
    this.Alamat = wali.Alamat;
    this.Hubungan = wali.Hubungan;
    this.Nama = wali.Nama;
    this.No_Telepon_1 = wali.No_Telepon_1;
    this.No_Telepon = wali.No_Telepon;
    this.Suku = wali.Suku;
    this.Tempat_Lahir = wali.Tempat_Lahir;
    this.Tgl_Lahir = wali.Tgl_Lahir;
    this.Umur = +wali.Umur;
  }
}
