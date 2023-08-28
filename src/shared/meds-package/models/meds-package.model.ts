export interface IDetails {
  Jumlah: number;
  Kode_Obat: string;
  Aturan_Pakai: string;
}

export class Details {
  Jumlah: number;
  Kode_Obat: string;
  Aturan_Pakai: string;

  constructor(req: IDetails) {
    this.Jumlah = req.Jumlah;
    this.Kode_Obat = req.Kode_Obat;
    this.Aturan_Pakai = req.Aturan_Pakai;
  }
}

export interface IMedsPackage {
  Kode_Cabang: string;
  Tipe_Pelayanan: string;
  ID_Paket: string;
  Nama_Paket: string;
  Status_Aktif: string;
  Keterangan: string;
  Detil: Array<IDetails>;
}

export class MedsPackage {
  Kode_Cabang: string;
  Tipe_Pelayanan: string;
  ID_Paket: string;
  Nama_Paket: string;
  Status_Aktif: string;
  Keterangan: string;
  Detil: Array<IDetails>;

  constructor(req: IMedsPackage) {
    this.Kode_Cabang = req.Kode_Cabang;
    this.Tipe_Pelayanan = req.Tipe_Pelayanan;
    this.ID_Paket = req.ID_Paket;
    this.Nama_Paket = req.Nama_Paket;
    this.Status_Aktif = req.Status_Aktif;
    this.Keterangan = req.Keterangan;
    this.Detil = req.Detil;
  }
}
