import { CpptRoModel, ICpptRoModel } from "@src/modules/ro/cppt/models/cppt-ro.model";

export interface ICpptPharmacyModel extends ICpptRoModel {
  Resep: any;
  Data_O_Tambahan: string;
  Masalah_Obat_Radio: string;
  Masalah_Obat_Teks: string;
  Efek_Samping_Obat: string;
  Interaksi_Obat: string;
  Monitor_Terapi: string;
  Monitor_Efek_Samping: string;
  Anjuran_Dokter: string;
  Anjuran_Perawat: string;
  Interaksi_Obat_Radio: string;
  Efek_Samping_Obat_Radio: string;
}

export class CpptpharmacyModel extends CpptRoModel {
  Resep: any;
  Data_O_Tambahan: string;
  Masalah_Obat_Radio: string;
  Masalah_Obat_Teks: string;
  Efek_Samping_Obat: string;
  Interaksi_Obat: string;
  Monitor_Terapi: string;
  Monitor_Efek_Samping: string;
  Anjuran_Dokter: string;
  Anjuran_Perawat: string;
  Interaksi_Obat_Radio: string;
  Efek_Samping_Obat_Radio: string;

  constructor(cppt: ICpptPharmacyModel) {
    super(cppt)
    this.Resep = cppt.Resep;
    this.Data_O_Tambahan = cppt.Data_O_Tambahan
    this.Masalah_Obat_Radio = cppt.Masalah_Obat_Radio;
    this.Masalah_Obat_Teks = cppt.Masalah_Obat_Teks;
    this.Efek_Samping_Obat = cppt.Efek_Samping_Obat;
    this.Interaksi_Obat = cppt.Interaksi_Obat;
    this.Monitor_Terapi = cppt.Monitor_Terapi;
    this.Monitor_Efek_Samping = cppt.Monitor_Efek_Samping;
    this.Anjuran_Dokter = cppt.Anjuran_Dokter;
    this.Anjuran_Perawat = cppt.Anjuran_Perawat;
    this.Efek_Samping_Obat_Radio = cppt.Efek_Samping_Obat_Radio;
    this.Interaksi_Obat_Radio = cppt.Interaksi_Obat_Radio;
  }
}