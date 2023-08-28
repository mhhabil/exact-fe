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

export interface IRetinaOCTResultForm {
  Od_Rpe: string;
  Os_Rpe: string;
  Od_Foveal: string;
  Os_Foveal: string;
  ID_Petugas: string;
  Kesimpulan: string;
  Od_Choroid: string;
  Os_Choroid: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Od_Lain_Lain: string;
  Os_Lain_Lain: string;
  Od_Intraretinal: string;
  Os_Intraretinal: string;
  Od_Vitreoretinal: string;
  Os_Vitreoretinal: string;
  Od_Central_Macular: string;
  Os_Central_Macular: string;
  Dokter_Pemeriksa_Id: string;
  Od_Intraretinal_Text: string;
  Os_Intraretinal_Text: string;
  Perawat_Pemeriksa_Id: string;
  TTD_Dokter_Pemeriksa: string;
  Dokter_Pemeriksa_Nama: string;
  TTD_Perawat_Pemeriksa: string;
  Perawat_Pemeriksa_Nama: string;
  Kesimpulan_Opt: string;
}

export class RetinaOCTResultForm {
  Od_Rpe: string;
  Os_Rpe: string;
  Od_Foveal: string;
  Os_Foveal: string;
  ID_Petugas: string;
  Kesimpulan: string;
  Od_Choroid: string;
  Os_Choroid: string;
  Updated_At: string;
  Updated_By: string;
  TTD_Tanggal: string;
  Nama_Petugas: string;
  Od_Lain_Lain: string;
  Os_Lain_Lain: string;
  Od_Intraretinal: string;
  Os_Intraretinal: string;
  Od_Vitreoretinal: string;
  Os_Vitreoretinal: string;
  Od_Central_Macular: string;
  Os_Central_Macular: string;
  Dokter_Pemeriksa_Id: string;
  Od_Intraretinal_Text: string;
  Os_Intraretinal_Text: string;
  Perawat_Pemeriksa_Id: string;
  TTD_Dokter_Pemeriksa: string;
  Dokter_Pemeriksa_Nama: string;
  TTD_Perawat_Pemeriksa: string;
  Perawat_Pemeriksa_Nama: string;
  Kesimpulan_Opt: string;

  constructor(retina: IRetinaOCTResultForm) {
    this.Od_Rpe = retina.Od_Rpe;
    this.Os_Rpe = retina.Os_Rpe;
    this.Od_Foveal = retina.Od_Foveal;
    this.Os_Foveal = retina.Os_Foveal;
    this.ID_Petugas = retina.ID_Petugas;
    this.Kesimpulan = retina.Kesimpulan;
    this.Od_Choroid = retina.Od_Choroid;
    this.Os_Choroid = retina.Os_Choroid;
    this.Updated_At = retina.Updated_At;
    this.Updated_By = retina.Updated_By;
    this.TTD_Tanggal = retina.TTD_Tanggal;
    this.Nama_Petugas = retina.Nama_Petugas;
    this.Od_Lain_Lain = retina.Od_Lain_Lain;
    this.Os_Lain_Lain = retina.Os_Lain_Lain;
    this.Od_Intraretinal = retina.Od_Intraretinal;
    this.Os_Intraretinal = retina.Os_Intraretinal;
    this.Od_Vitreoretinal = retina.Od_Vitreoretinal;
    this.Os_Vitreoretinal = retina.Os_Vitreoretinal;
    this.Od_Central_Macular = retina.Od_Central_Macular;
    this.Os_Central_Macular = retina.Os_Central_Macular;
    this.Dokter_Pemeriksa_Id = retina.Dokter_Pemeriksa_Id;
    this.Od_Intraretinal_Text = retina.Od_Intraretinal_Text;
    this.Os_Intraretinal_Text = retina.Os_Intraretinal_Text;
    this.Perawat_Pemeriksa_Id = retina.Perawat_Pemeriksa_Id;
    this.TTD_Dokter_Pemeriksa = retina.TTD_Dokter_Pemeriksa;
    this.Dokter_Pemeriksa_Nama = retina.Dokter_Pemeriksa_Nama;
    this.TTD_Perawat_Pemeriksa = retina.TTD_Perawat_Pemeriksa;
    this.Perawat_Pemeriksa_Nama = retina.Perawat_Pemeriksa_Nama;
    this.Kesimpulan_Opt = retina.Kesimpulan_Opt;
  }
}

export interface IRetinaOCTResultModel extends IDataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;
}

export class IRetinaOCTResultModel extends DataModel {
  no_berobat: Array<ITreatmentNumber>;
  form: any;

  constructor(retina: IRetinaOCTResultModel) {
    super(retina);
    this.no_berobat = (Array.isArray(retina.no_berobat)) ? retina.no_berobat.map((a) => new TreatmentNumber(a)) : [];
    this.form = retina.form;
  }
}