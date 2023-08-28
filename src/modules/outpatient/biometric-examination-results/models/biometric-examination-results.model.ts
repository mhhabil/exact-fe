import { DataModel, IDataModel } from "@src/shared/model";

export interface INoBerobat {
  ID: string;
  ID_Dokter: string;
  ID_Berobat: string;
  Penanganan: string;
  Dokter_Nama: string;
  Waktu_Visit: string;
}

export class NoBerobat {
  ID: string;
  ID_Dokter: string;
  ID_Berobat: string;
  Penanganan: string;
  Dokter_Nama: string;
  Waktu_Visit: string;

  constructor(req: INoBerobat) {
    this.ID = req.ID;
    this.ID_Dokter = req.ID_Dokter;
    this.ID_Berobat = req.ID_Berobat;
    this.Penanganan = req.Penanganan;
    this.Dokter_Nama = req.Dokter_Nama;
    this.Waktu_Visit = req.Waktu_Visit;
  }
}

export interface IBiometricExaminationResultsModel extends IDataModel {
  no_berobat: Array<INoBerobat>;
  form: any;
}

export class BiometricExaminationResultsModel extends DataModel {
  no_berobat: Array<INoBerobat>;
  form: any;
  constructor(req: IBiometricExaminationResultsModel) {
    super(req);
    this.no_berobat = (Array.isArray(req.no_berobat)) ? req.no_berobat.map((a) => new NoBerobat(a)) : [];
    this.form = req.form;
  }
}
