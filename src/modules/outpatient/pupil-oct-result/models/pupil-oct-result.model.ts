import { DataModel, IDataModel } from '@shared/model';

export interface ITreatmentNumber {
  ID: string;
  ID_Dokter: string;
  ID_Berobat: string;
  Penanganan: string;
  Dokter_Nama: string;
  Waktu_Visit: string;
}

export class TreatmentNumber {
  ID: string;
  ID_Dokter: string;
  ID_Berobat: string;
  Penanganan: string;
  Dokter_Nama: string;
  Waktu_Visit: string;

  constructor(treatment: ITreatmentNumber) {
    this.ID = treatment.ID;
    this.ID_Dokter = treatment.ID_Dokter;
    this.ID_Berobat = treatment.ID_Berobat;
    this.Penanganan = treatment.Penanganan;
    this.Dokter_Nama = treatment.Dokter_Nama;
    this.Waktu_Visit = treatment.Waktu_Visit;
  }
}

export interface IPupilOCTResultForm {
  Od_Rnfl: string;
  Os_Rnfl: string;
  ID_Petugas: string;
  Kesimpulan: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Od_Cd_Vertical: string;
  Os_Cd_Vertical: string;
  Od_Rnfl_Normal_Text: string;
  Os_Rnfl_Normal_Text: string;
  Od_Rnfl_Menebal_Text: string;
  Od_Rnfl_Menipis_Text: string;
  Os_Rnfl_Menebal_Text: string;
  Os_Rnfl_Menipis_Text: string;
  Od_Cd_Vertical_Normal_Text: string;
  Os_Cd_Vertical_Normal_Text: string;
  Od_Cd_Vertical_Upnormal_Text: string;
  Os_Cd_Vertical_Upnormal_Text: string;
}

export class PupilOCTResultForm {
  Od_Rnfl: string;
  Os_Rnfl: string;
  ID_Petugas: string;
  Kesimpulan: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Od_Cd_Vertical: string;
  Os_Cd_Vertical: string;
  Od_Rnfl_Normal_Text: string;
  Os_Rnfl_Normal_Text: string;
  Od_Rnfl_Menebal_Text: string;
  Od_Rnfl_Menipis_Text: string;
  Os_Rnfl_Menebal_Text: string;
  Os_Rnfl_Menipis_Text: string;
  Od_Cd_Vertical_Normal_Text: string;
  Os_Cd_Vertical_Normal_Text: string;
  Od_Cd_Vertical_Upnormal_Text: string;
  Os_Cd_Vertical_Upnormal_Text: string;

  constructor(pupil: IPupilOCTResultForm) {
    this.Od_Rnfl = pupil.Od_Rnfl;
    this.Os_Rnfl = pupil.Os_Rnfl;
    this.ID_Petugas = pupil.ID_Petugas;
    this.Kesimpulan = pupil.Kesimpulan;
    this.Updated_At = pupil.Updated_At;
    this.Updated_By = pupil.Updated_By;
    this.TTD_Tanggal = pupil.TTD_Tanggal;
    this.Nama_Petugas = pupil.Nama_Petugas;
    this.Od_Cd_Vertical = pupil.Od_Cd_Vertical;
    this.Os_Cd_Vertical = pupil.Os_Cd_Vertical;
    this.Od_Rnfl_Normal_Text = pupil.Od_Rnfl_Normal_Text;
    this.Os_Rnfl_Normal_Text = pupil.Os_Rnfl_Normal_Text;
    this.Od_Rnfl_Menebal_Text = pupil.Od_Rnfl_Menebal_Text;
    this.Od_Rnfl_Menipis_Text = pupil.Od_Rnfl_Menipis_Text;
    this.Os_Rnfl_Menebal_Text = pupil.Os_Rnfl_Menebal_Text;
    this.Os_Rnfl_Menipis_Text = pupil.Os_Rnfl_Menipis_Text;
    this.Od_Cd_Vertical_Normal_Text = pupil.Od_Cd_Vertical_Normal_Text;
    this.Os_Cd_Vertical_Normal_Text = pupil.Os_Cd_Vertical_Normal_Text;
    this.Od_Cd_Vertical_Upnormal_Text = pupil.Od_Cd_Vertical_Upnormal_Text;
    this.Os_Cd_Vertical_Upnormal_Text = pupil.Os_Cd_Vertical_Upnormal_Text;
  }
}

export interface IPupilOCTResultModel extends IDataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;
}

export class PupilOCTResultModel extends DataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;

  constructor(pupil: IPupilOCTResultModel) {
    super(pupil);
    this.no_berobat = (Array.isArray(pupil.no_berobat)) ? pupil.no_berobat.map((a) => new TreatmentNumber(a)) : [];
    this.form = pupil.form;

  }

  static createFromJson(json: IPupilOCTResultModel) {
    return new PupilOCTResultModel(json);
  }
}

