import { DataModel, IDataModel } from '@shared/model';
// import { IPrescription } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';

export interface ITemplateODS {
  Eye_Image: string;
  VA: string;
  False: string;
  PH: string;
  Add: string;
  Jagger: string;
  Non_Contact: string;
  Schiotz: string;
  Tanam_Lensa: string;
  Keterangan_Tono: string;
}

export interface IPrescription {
  key: string;
  Jumlah?: string;
  Catatan?: string;
  ID_Obat: string;
  ID_Satuan?: string;
  Nama_Obat?: string;
  Nama_Satuan: string;
  ID_AturanPakai?: number;
  Kode_AturanPakai: string;
  Nama_AturanPakai?: string;
}

export class Prescription {
  key: any;
  Jumlah: string;
  Catatan: string;
  ID_Obat: string;
  ID_Satuan: string;
  Nama_Obat: string;
  Nama_Satuan: string;
  ID_AturanPakai: number | undefined;
  Kode_AturanPakai: string;
  Nama_AturanPakai: string;

  constructor(prescription: IPrescription) {
    this.key = prescription.key;
    this.Jumlah = (prescription.Jumlah) ? prescription.Jumlah : '';
    this.Catatan = (prescription.Catatan) ? prescription.Catatan : '';
    this.ID_Obat = prescription.ID_Obat;
    this.ID_Satuan = (prescription.ID_Satuan) ? prescription.ID_Satuan : '';
    this.Nama_Obat = (prescription.Nama_Obat) ? prescription.Nama_Obat : '';
    this.Nama_Satuan = prescription.Nama_Satuan;
    this.ID_AturanPakai = (prescription.ID_AturanPakai) ? prescription.ID_AturanPakai : undefined;
    this.Kode_AturanPakai = prescription.Kode_AturanPakai;
    this.Nama_AturanPakai = (prescription.Nama_AturanPakai) ? prescription.Nama_AturanPakai : '';
  }
}

export interface IProofOfOutpatientServicesEmergencyRoomFormModel {
  OD: ITemplateODS;
  OS: ITemplateODS;
  Keluhan: string;
  KGD: string;
  TD: string;
  Diagnosa: string;
  Terapi: string;
  Anjuran: string;
  Resep: Array<IPrescription>;
  Tanggal_TTD: string;
  Tanda_Tangan_Radio: string;
  Tanda_Tangan_Pasien: string;
  Tanda_Tangan_Wali: string;
  TTD_Dokter: string;
  ID_Dokter: string;
  Nama_Dokter: string;
  SIP_Dokter: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
}

export class ProofOfOutpatientServicesEmergencyRoomFormModel {
  OD: ITemplateODS;
  OS: ITemplateODS;
  Keluhan: string;
  KGD: string;
  TD: string;
  Diagnosa: string;
  Terapi: string;
  Anjuran: string;
  Resep: Array<IPrescription>;
  Tanggal_TTD: string;
  Tanda_Tangan_Radio: string;
  Tanda_Tangan_Pasien: string;
  Tanda_Tangan_Wali: string;
  TTD_Dokter: string;
  ID_Dokter: string;
  Nama_Dokter: string;
  SIP_Dokter: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;

  constructor(request: IProofOfOutpatientServicesEmergencyRoomFormModel) {
    this.OD = request.OD;
    this.OS = request.OS;
    this.Keluhan = request.Keluhan;
    this.KGD = request.KGD;
    this.Diagnosa = request.Diagnosa;
    this.Terapi = request.Terapi;
    this.TD = request.TD;
    this.Anjuran = request.Anjuran;
    this.Resep = request.Resep;
    this.Tanggal_TTD = request.Tanggal_TTD;
    this.Tanda_Tangan_Radio = request.Tanda_Tangan_Radio;
    this.Tanda_Tangan_Pasien = request.Tanda_Tangan_Pasien;
    this.Tanda_Tangan_Wali = request.Tanda_Tangan_Wali;
    this.TTD_Dokter = request.TTD_Dokter;
    this.ID_Dokter = request.ID_Dokter;
    this.Nama_Dokter = request.Nama_Dokter;
    this.SIP_Dokter = request.SIP_Dokter;
    this.ID_Petugas = request.ID_Petugas;
    this.Nama_Petugas = request.Nama_Petugas;
    this.Updated_At = request.Updated_At;
    this.Updated_By = request.Updated_By;
  }
}

export interface IDaftarTebus {
  Catatan: string;
  ID_AturanPakai: string;
  ID_Satuan: string;
  Jumlah: string;
  Kode_AturanPakai: string;
  Kode_Obat: string;
  Nama_AturanPakai: string;
  Nama_Obat: string;
  Nama_Satuan: string;
}

export interface IFormFarmasi {
  Daftar_Tebus: Array<IDaftarTebus>;
  Keterangan: string;
  Status_Tebus: string;
  Waktu_Tebus: string;
}

export class FormFarmasi {
  Daftar_Tebus: Array<IDaftarTebus>;
  Keterangan: string;
  Status_Tebus: string;
  Waktu_Tebus: string;

  constructor(req: IFormFarmasi) {
    this.Daftar_Tebus = req.Daftar_Tebus;
    this.Keterangan = req.Keterangan;
    this.Status_Tebus = req.Status_Tebus;
    this.Waktu_Tebus = req.Waktu_Tebus;
  }
}

export interface IHowToUse {
  ID_AturanPakai: number;
  Kode_Cabang: string;
  Tipe_Pelayanan: string;
  Nama: string;
  Keterangan?: string;
  Upd_User: string;
  Upd_Waktu: string;
  Status_Aktif: boolean;
  Kode: string;
  RowNum: string;
  TotalItems: number;
  TotalPage: number;
}

export class HowToUse {
  ID_AturanPakai: number;
  Kode_Cabang: string;
  Tipe_Pelayanan: string;
  Nama: string;
  Keterangan?: string;
  Upd_User: string;
  Upd_Waktu: string;
  Status_Aktif: boolean;
  Kode: string;
  RowNum: string;
  TotalItems: number;
  TotalPage: number;

  constructor(howToUse: IHowToUse) {
    this.ID_AturanPakai = howToUse.ID_AturanPakai;
    this.Kode_Cabang = howToUse.Kode_Cabang;
    this.Tipe_Pelayanan = howToUse.Tipe_Pelayanan;
    this.Nama = howToUse.Nama;
    this.Keterangan = howToUse.Keterangan;
    this.Upd_User = howToUse.Upd_User;
    this.Upd_Waktu = howToUse.Upd_Waktu;
    this.Status_Aktif = howToUse.Status_Aktif;
    this.Kode = howToUse.Kode;
    this.RowNum = howToUse.RowNum;
    this.TotalItems = howToUse.TotalItems;
    this.TotalPage = howToUse.TotalPage;
  }
}

export interface IMedicine {
  Kode_Inventory: string;
  Nama_Inventory: string;
  ID_Satuan: string;
  Nama_Satuan: string;
  Stok: string;
  Harga_Beli: number;
  Harga_Jual: number;
  Nama_Kategori: string;
  Fornas: string;
  Forkit: string;
  Status: number;
}

export class Medicine {
  Kode_Inventory: string;
  Nama_Inventory: string;
  ID_Satuan: string;
  Nama_Satuan: string;
  Stok: string;
  Harga_Beli: number;
  Harga_Jual: number;
  Nama_Kategori: string;
  Fornas: string;
  Forkit: string;
  Status: number;

  constructor(medicine: IMedicine) {
    this.Kode_Inventory = medicine.Kode_Inventory;
    this.Nama_Inventory = medicine.Nama_Inventory;
    this.ID_Satuan = medicine.ID_Satuan;
    this.Nama_Satuan = medicine.Nama_Satuan;
    this.Stok = medicine.Stok;
    this.Harga_Beli = medicine.Harga_Beli;
    this.Harga_Jual = medicine.Harga_Jual;
    this.Nama_Kategori = medicine.Nama_Kategori;
    this.Fornas = medicine.Fornas;
    this.Forkit = medicine.Forkit;
    this.Status = medicine.Status;
  }
}

export interface IProofOfOutpatientServicesEmergencyRoomModel extends IDataModel {
  form: IProofOfOutpatientServicesEmergencyRoomFormModel;
  formFarmasi: IFormFarmasi;
  aturan_pakai: Array<IHowToUse>;
  obat: Array<IMedicine>;
  prescription: Array<IPrescription>;
}

export class ProofOfOutpatientServicesEmergencyRoomModel extends DataModel {
  form: IProofOfOutpatientServicesEmergencyRoomFormModel;
  formFarmasi: FormFarmasi;
  aturan_pakai: Array<IHowToUse>;
  obat: Array<IMedicine>;
  prescription: Array<IPrescription>;

  constructor(req: IProofOfOutpatientServicesEmergencyRoomModel) {
    super(req)
    this.form = req.form;
    this.formFarmasi = req.formFarmasi;
    this.aturan_pakai = (Array.isArray(req.aturan_pakai)) ? req.aturan_pakai.map((a) => new HowToUse(a)) : [];
    this.obat = (Array.isArray(req.obat)) ? req.obat.map((a) => new Medicine(a)) : [];
    this.prescription = req.prescription;
  }
}
