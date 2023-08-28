import { DataModel, IDataModel } from "@src/shared/model";
import { IPrescription } from "../../doctor-preliminary-study/models/doctor-preliminary-study.model";
import { CpptRecord } from "@src/modules/ro/cppt/models/cppt-ro.model";

export interface IMedicalSummaryFormModel {
  Tanggal: string;
  Nama_Dokter: string;
  Diagnosa: string;
  Terapi: string;
  Resep: Array<IPrescription>;
  Anjuran: string;
}

export class MedicalSummaryFormModel {
  Tanggal: string;
  Nama_Dokter: string;
  Diagnosa: string;
  Terapi: string;
  Resep: Array<IPrescription>;
  Anjuran: string;

  constructor(request: IMedicalSummaryFormModel) {
    this.Tanggal = request.Tanggal;
    this.Nama_Dokter = request.Nama_Dokter;
    this.Diagnosa = request.Diagnosa;
    this.Terapi = request.Terapi;
    this.Resep = request.Resep;
    this.Anjuran = request.Anjuran;
  }
}

export interface IEncounters {
  Nama_Dokter: string;
  Nama_Paket_Operasi: string;
  Tgl_Berobat: string;
}

export class Encounters {
  Nama_Dokter: string;
  Nama_Paket_Operasi: string;
  Tgl_Berobat: string;

  constructor(form: IEncounters) {
    this.Nama_Dokter = form.Nama_Dokter;
    this.Nama_Paket_Operasi = form.Nama_Paket_Operasi;
    this.Tgl_Berobat = form.Tgl_Berobat;
  }
}

export interface IMedicalSummaryModel {
  records: MedicalSummaryFormModel[],
  encounters: Encounters[],
}

export class MedicalSummaryModel {
  records: MedicalSummaryFormModel[];
  encounters: Encounters[];

  constructor(req: IMedicalSummaryModel) {
    this.records = (req.records && Array.isArray(req.records)) ? req.records.map((c) => new MedicalSummaryFormModel(c)) : [];
    this.encounters = req.encounters && Array.isArray(req.encounters) ? req.encounters.map(c => new Encounters(c)) : [];
  }
}
