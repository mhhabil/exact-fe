export interface IData {
  Kode_Cabang: string;
  Tipe_Pasien: string;
  No_MR: string;
  Nama: string;
  Alamat: string;
  Tgl_Lahir: string;
  J_Kelamin: string;
  No_Hp: string;
  Tgl_Berobat: string;
  Jam_Kunjungan: string;
  ID_Pelayanan: string;
  Jenis_Pelayanan: string;
  Penanganan: string;
  Created_At: string;
  rn: number;
}

export class Data {
  Kode_Cabang: string;
  Tipe_Pasien: string;
  No_MR: string;
  Nama: string;
  Alamat: string;
  Tgl_Lahir: string;
  J_Kelamin: string;
  No_Hp: string;
  Tgl_Berobat: string;
  Jam_Kunjungan: string;
  ID_Pelayanan: string;
  Jenis_Pelayanan: string;
  Penanganan: string;
  Created_At: string;
  rn: number;

  constructor(request: IData) {
    this.Kode_Cabang = request.Kode_Cabang;
    this.Tipe_Pasien = request.Tipe_Pasien;
    this.No_MR = request.No_MR;
    this.Nama = request.Nama;
    this.Alamat = request.Alamat;
    this.Tgl_Lahir = request.Tgl_Lahir;
    this.J_Kelamin = request.J_Kelamin;
    this.No_Hp = request.No_Hp;
    this.Tgl_Berobat = request.Tgl_Berobat;
    this.Jam_Kunjungan = request.Jam_Kunjungan;
    this.ID_Pelayanan = request.ID_Pelayanan;
    this.Jenis_Pelayanan = request.Jenis_Pelayanan;
    this.Penanganan = request.Penanganan;
    this.Created_At = request.Created_At;
    this.rn = request.rn;
  }
}

export interface IHistory {
  data: Array<IData>;
  currentPage: number;
  totalPage: number;
}

export class History {
  data: Array<IData> = [];
  currentPage: number;
  totalPage: number;

  constructor(request: IHistory) {
    if (request.data && Array.isArray(request.data)) {
      this.data = request.data.map(d => new Data(d));
    }
    this.currentPage = request.currentPage;
    this.totalPage = request.totalPage;
  }
}
