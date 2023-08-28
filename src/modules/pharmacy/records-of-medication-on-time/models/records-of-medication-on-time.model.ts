import { DataModel, IDataModel } from "@src/shared/model";
import { IHowToUse, IMedicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { Information } from "@src/shared/header/models/detail-information.model";

export interface IGivenMedsFormModel {
  ID: string;
  ID_Obat: string;
  Nama_Obat: string;
  ID_Satuan: string;
  Nama_Satuan: string;
  ID_AturanPakai: string;
  Nama_AturanPakai: string;
  Kode_AturanPakai: string;
  Rute: string;
  Catatan: string;
  ID_Dokter: string;
  Nama_Dokter: string;
  TTD_Dokter: string;
}

export class GivenMedsFormModel {
  ID: string;
  ID_Obat: string;
  Nama_Obat: string;
  ID_Satuan: string;
  Nama_Satuan: string;
  ID_AturanPakai: string;
  Nama_AturanPakai: string;
  Kode_AturanPakai: string;
  Rute: string;
  Catatan: string;
  ID_Dokter: string;
  Nama_Dokter: string;
  TTD_Dokter: string;

  constructor(model: IGivenMedsFormModel) {
    this.ID = model.ID;
    this.ID_Obat = model.ID_Obat;
    this.Nama_Obat = model.Nama_Obat;
    this.ID_Satuan = model.ID_Satuan;
    this.Nama_Satuan = model.Nama_Satuan;
    this.ID_AturanPakai = model.ID_AturanPakai;
    this.Nama_AturanPakai = model.Nama_AturanPakai;
    this.Kode_AturanPakai = model.Kode_AturanPakai;
    this.Rute = model.Rute;
    this.Catatan = model.Catatan;
    this.ID_Dokter = model.ID_Dokter;
    this.Nama_Dokter = model.Nama_Dokter;
    this.TTD_Dokter = model.TTD_Dokter;
  }
}

export interface IGivenMedsModel extends IDataModel {
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>;
  records: Array<IGivenMedsFormModel>;
}

export class GivenMedsModel extends DataModel {
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>;
  records: Array<IGivenMedsFormModel>;

  constructor(model: IGivenMedsModel) {
    super(model);
    this.obat = model.obat;
    this.aturan_pakai = model.aturan_pakai;
    this.records = model.records && Array.isArray(model.records) ? model.records.map(c => new GivenMedsFormModel(c)) : [];
  }
}

export interface IDrugAdmin {
  Kode: string;
  Nama: string;
  Satuan: string;
  Aturan_Pakai: string;
  Rute: string;
}

export class DrugAdmin {
  Kode: string;
  Nama: string;
  Satuan: string;
  Aturan_Pakai: string;
  Rute: string;

  constructor(model: IDrugAdmin) {
    this.Kode = model.Kode;
    this.Nama = model.Nama;
    this.Satuan = model.Satuan;
    this.Aturan_Pakai = model.Aturan_Pakai;
    this.Rute = model.Rute;
  }
}

export interface IRecordsOfMedicationOnTimeFormModel {
  ID: string;
  Waktu_Pemberian: string;
  Waktu: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Tanda_Tangan_Pasien: string;
  Tanda_Tangan_Perawat: string;
  ID_Perawat: string;
  Nama_Perawat: string;
  Tanda_Tangan_Dokter: string;
  ID_Dokter: string;
  Nama_Dokter: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Apoteker?: string;
  ID_Apoteker?: string;
  Nama_Apoteker?: string;
  Validated?: boolean;
  Obat: Array<IDrugAdmin>;
}

export class RecordsOfMedicationOnTimeFormModel {
  ID: string;
  Waktu_Pemberian: string;
  Waktu: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Tanda_Tangan_Pasien: string;
  Tanda_Tangan_Perawat: string;
  ID_Perawat: string;
  Nama_Perawat: string;
  Tanda_Tangan_Dokter: string;
  ID_Dokter: string;
  Nama_Dokter: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Apoteker?: string;
  ID_Apoteker?: string;
  Nama_Apoteker?: string;
  Validated?: boolean;
  Obat: Array<IDrugAdmin>;

  constructor(model: IRecordsOfMedicationOnTimeFormModel) {
    this.ID = model.ID;
    this.Waktu_Pemberian = model.Waktu_Pemberian;
    this.Waktu = model.Waktu;
    this.ID_Petugas = model.ID_Petugas;
    this.Nama_Petugas = model.Nama_Petugas;
    this.Tanda_Tangan_Pasien = model.Tanda_Tangan_Pasien;
    this.Tanda_Tangan_Perawat = model.Tanda_Tangan_Perawat;
    this.ID_Perawat = model.ID_Perawat;
    this.Nama_Perawat = model.Nama_Perawat;
    this.Tanda_Tangan_Dokter = model.Tanda_Tangan_Dokter;
    this.ID_Dokter = model.ID_Dokter;
    this.Nama_Dokter = model.Nama_Dokter;
    this.Updated_At = model.Updated_At;
    this.Updated_By = model.Updated_By;
    if (model.TTD_Apoteker) {
      this.TTD_Apoteker = model.TTD_Apoteker;
    }
    if (model.ID_Apoteker) {
      this.ID_Apoteker = model.ID_Apoteker;
    }
    if (model.Nama_Apoteker) {
      this.Nama_Apoteker = model.Nama_Apoteker;
    }
    this.Validated = model.Validated;
    this.Obat = model.Obat && Array.isArray(model.Obat) ? model.Obat.map(c => new DrugAdmin(c)) : [];
  }
}

export interface IRecordsGrouped {
  date: string;
  objects: Array<IRecordsOfMedicationOnTimeFormModel>;
  isValidated: boolean;
  signature: string;
  pharmacist: string;
}

export interface IRecordsOfMedicationOnTimeModel extends IDataModel {
  form: Array<IRecordsOfMedicationOnTimeFormModel>;
  rawat_inap: any;
  form_ttd: any;
  form_grouped: Array<IRecordsGrouped>;
  obat_tebus: any;
  pengkajian_keperawatan: Information;
}

export class RecordsOfMedicationOnTimeModel extends DataModel {
  form?: Array<IRecordsOfMedicationOnTimeFormModel>;
  rawat_inap: any;
  form_ttd: any;
  form_grouped: Array<IRecordsGrouped>;
  obat_tebus: any;
  pengkajian_keperawatan: Information;

  constructor(model: IRecordsOfMedicationOnTimeModel) {
    super(model);
    if (model.form) {
      this.form = model.form && Array.isArray(model.form) ? model.form.map(c => new RecordsOfMedicationOnTimeFormModel(c)) : [];
    }
    this.form_grouped = model.form_grouped;
    this.rawat_inap = model.rawat_inap;
    this.form_ttd = model.form_ttd;
    this.obat_tebus = model.obat_tebus;
    this.pengkajian_keperawatan = model.pengkajian_keperawatan;
  }
}

