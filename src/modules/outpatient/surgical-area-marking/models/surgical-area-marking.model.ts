import { DataModel, IDataModel } from "@src/shared/model"

export interface ISurgicalAreaMarkingForm {
  ID_Perawat: string
  ID_Petugas: string
  Updated_At: string
  Updated_By: string
  Gambar_Body: string
  Gambar_Head: string
  Nama_Perawat: string
  Nama_Petugas: string
  Tanggal_Operasi: string
  Dokter_Pelaksana: string
  Prosedur_Operasi: string
  Dokter_Operasi_Id: string
  Dokter_Operasi_Nama: string
  Tanda_Tangan_Pasien: string
  TTD_Dokter_Pelaksana: string
  Tanda_Tangan_Perawat: string
  Nama_Dokter_Pelaksana: string
}

export class SurgicalAreaMarkingForm {
  ID_Perawat: string
  ID_Petugas: string
  Updated_At: string
  Updated_By: string
  Gambar_Body: string
  Gambar_Head: string
  Nama_Perawat: string
  Nama_Petugas: string
  Tanggal_Operasi: string
  Dokter_Pelaksana: string
  Prosedur_Operasi: string
  Dokter_Operasi_Id: string
  Dokter_Operasi_Nama: string
  Tanda_Tangan_Pasien: string
  TTD_Dokter_Pelaksana: string
  Tanda_Tangan_Perawat: string
  Nama_Dokter_Pelaksana: string

  constructor(req: ISurgicalAreaMarkingForm) {
    this.ID_Perawat = req.ID_Perawat;
    this.ID_Petugas = req.ID_Petugas;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Gambar_Body = req.Gambar_Body;
    this.Gambar_Head = req.Gambar_Head;
    this.Nama_Perawat = req.Nama_Perawat;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Tanggal_Operasi = req.Tanggal_Operasi;
    this.Dokter_Pelaksana = req.Dokter_Pelaksana;
    this.Prosedur_Operasi = req.Prosedur_Operasi;
    this.Dokter_Operasi_Id = req.Dokter_Operasi_Id;
    this.Dokter_Operasi_Nama = req.Dokter_Operasi_Nama;
    this.Tanda_Tangan_Pasien = req.Tanda_Tangan_Pasien;
    this.TTD_Dokter_Pelaksana = req.TTD_Dokter_Pelaksana;
    this.Tanda_Tangan_Perawat = req.Tanda_Tangan_Perawat;
    this.Nama_Dokter_Pelaksana = req.Nama_Dokter_Pelaksana;
  }

  static createFromJson(json: ISurgicalAreaMarkingForm) {
    return new SurgicalAreaMarkingForm(json);
  }
}


export interface ISurgicalAreaMarkingData {
  paket_operasi: string
}

export class SurgicalAreaMarkingData {
  paket_operasi: string
  
  constructor(req: ISurgicalAreaMarkingData) {
    this.paket_operasi = req.paket_operasi;
  }

  static createFromJson(json: ISurgicalAreaMarkingData) {
    return new SurgicalAreaMarkingData(json);
  }
}

export interface ISurgicalAreaMarkingModel extends IDataModel {
  form: ISurgicalAreaMarkingForm;
  paket_operasi: ISurgicalAreaMarkingData;
}

export class SurgicalAreaMarkingModel extends DataModel {
  form?: ISurgicalAreaMarkingForm;
  paket_operasi?: ISurgicalAreaMarkingData;

  constructor(req: ISurgicalAreaMarkingModel) {
    super(req);
    if (req.form) {
      this.form = new SurgicalAreaMarkingForm(req.form);
      this.paket_operasi = req.paket_operasi;
    }
  }
}

