import { DataModel, IDataModel } from '@shared/model';

export interface IAnamnesaModel {
  ID_Anamnesa: number;
  Nama: string;
  Keterangan?: string;
}

export class AnamnesaModel {
  ID_Anamnesa: number;
  Nama: string;
  Keterangan?: string;

  constructor(anamnesa: IAnamnesaModel) {
    this.ID_Anamnesa = anamnesa.ID_Anamnesa;
    this.Nama = anamnesa.Nama;
    this.Keterangan = anamnesa.Keterangan;
  }
}

export interface IPreliminaryStudyDetail {
  Va: string;
  VA: string;
  Add: string;
  Cyl: string;
  Sph: string;
  Axis: string;
  False: string;
  Jagger: string;
  Select: string;
  Pd_Jauh: string;
  Pd_Dekat: string;
  Adaptasi?: string;
  Va_Aquity?: string;
  PH: string;
}

export class PreliminaryStudyDetail {
  Va: string;
  VA: string;
  Add: string;
  Cyl: string;
  Sph: string;
  Axis: string;
  False: string;
  Jagger: string;
  Select: string;
  Pd_Jauh: string;
  Pd_Dekat: string;
  Adaptasi?: string;
  Va_Aquity?: string;
  PH: string;

  constructor(preliminaryStudyDetail: IPreliminaryStudyDetail) {
    this.Va = preliminaryStudyDetail.Va;
    this.VA = preliminaryStudyDetail.VA;
    this.Add = preliminaryStudyDetail.Add;
    this.Cyl = preliminaryStudyDetail.Cyl;
    this.Sph = preliminaryStudyDetail.Sph;
    this.Axis = preliminaryStudyDetail.Axis;
    this.False = preliminaryStudyDetail.False;
    this.Jagger = preliminaryStudyDetail.Jagger;
    this.Select = preliminaryStudyDetail.Select;
    this.Pd_Jauh = preliminaryStudyDetail.Pd_Jauh;
    this.Pd_Dekat = preliminaryStudyDetail.Pd_Dekat;
    this.Adaptasi = preliminaryStudyDetail.Adaptasi;
    this.PH = preliminaryStudyDetail.PH;
  }
}

export interface IOpticPrescriptionDetail {
  Sph: string;
  Add: string;
  False: string;
  Jagger: string;
  Va: string;
}

export class OpticPrescriptionDetail {
  Sph: string;
  Add: string;
  False: string;
  Jagger: string;
  Va: string;

  constructor(opticPrescriptionDetail: IOpticPrescriptionDetail) {
    this.Va = opticPrescriptionDetail.Va;
    this.Add = opticPrescriptionDetail.Add;
    this.Sph = opticPrescriptionDetail.Sph;
    this.False = opticPrescriptionDetail.False;
    this.Jagger = opticPrescriptionDetail.Jagger
  }
}

export interface IOpticInput {
  Visus_Awal: IOpticPrescriptionDetail;
  KML: IPreliminaryStudyDetail;
  Koreksi_1: IPreliminaryStudyDetail;
  Koreksi_2: IPreliminaryStudyDetail;
}

export class OpticInput {
  Visus_Awal: IOpticPrescriptionDetail;
  KML: IPreliminaryStudyDetail;
  Koreksi_1: IPreliminaryStudyDetail;
  Koreksi_2: IPreliminaryStudyDetail;

  constructor(opticPrescription: IOpticInput) {
    this.Visus_Awal = opticPrescription.Visus_Awal;
    this.KML = opticPrescription.KML;
    this.Koreksi_1 = opticPrescription.Koreksi_1;
    this.Koreksi_2 = opticPrescription.Koreksi_2;
  }
}

export interface IPreliminaryStudyODOS {
  PH: string;
  VA: string;
  Add: string;
  False: string;
  Jagger: string;
  Schiotz: string;
  Non_Contact: string;
  Tanam_Lensa: string;
  Keterangan_Tono: string;
  KMB?: IPreliminaryStudyDetail;
  KML?: IPreliminaryStudyDetail;
  RPL?: IPreliminaryStudyDetail;
  RPL_2?: IPreliminaryStudyDetail;
  Koreksi_1?: IPreliminaryStudyDetail;
  Koreksi_2?: IPreliminaryStudyDetail;
  RPL_Streak?: IPreliminaryStudyDetail;
  RPL_Streak_2?: IPreliminaryStudyDetail;
}

export class PreliminaryStudyODOS {
  PH: string;
  VA: string;
  Add: string;
  False: string;
  Jagger: string;
  Schiotz: string;
  Non_Contact: string;
  Tanam_Lensa: string;
  Keterangan_Tono: string;
  KMB?: PreliminaryStudyDetail;
  KML?: PreliminaryStudyDetail;
  RPL?: PreliminaryStudyDetail;
  RPL_2?: PreliminaryStudyDetail;
  Koreksi_1?: PreliminaryStudyDetail;
  Koreksi_2?: PreliminaryStudyDetail;
  RPL_Streak?: PreliminaryStudyDetail;
  RPL_Streak_2?: PreliminaryStudyDetail;

  constructor(preliminaryStudyODOS: IPreliminaryStudyODOS) {
    this.PH = preliminaryStudyODOS.PH;
    this.VA = preliminaryStudyODOS.VA;
    this.Add = preliminaryStudyODOS.Add;
    this.False = preliminaryStudyODOS.False;
    this.Jagger = preliminaryStudyODOS.Jagger;
    this.Schiotz = preliminaryStudyODOS.Schiotz;
    this.Non_Contact = preliminaryStudyODOS.Non_Contact;
    this.Tanam_Lensa = preliminaryStudyODOS.Tanam_Lensa;
    this.Keterangan_Tono = preliminaryStudyODOS.Keterangan_Tono;
    if (preliminaryStudyODOS.KMB) {
      this.KMB = new PreliminaryStudyDetail(preliminaryStudyODOS.KMB);
    }
    if (preliminaryStudyODOS.KML) {
      this.KML = new PreliminaryStudyDetail(preliminaryStudyODOS.KML);
    }
    if (preliminaryStudyODOS.RPL) {
      this.RPL = new PreliminaryStudyDetail(preliminaryStudyODOS.RPL);
    }
    if (preliminaryStudyODOS.RPL_2) {
      this.RPL_2 = new PreliminaryStudyDetail(preliminaryStudyODOS.RPL_2);
    }
    if (preliminaryStudyODOS.Koreksi_1) {
      this.Koreksi_1 = new PreliminaryStudyDetail(preliminaryStudyODOS.Koreksi_1);
    }
    if (preliminaryStudyODOS.Koreksi_2) {
      this.Koreksi_2 = new PreliminaryStudyDetail(preliminaryStudyODOS.Koreksi_2);
    }
    if (preliminaryStudyODOS.RPL_Streak) {
      this.RPL_Streak = new PreliminaryStudyDetail(preliminaryStudyODOS.RPL_Streak);
    }
    if (preliminaryStudyODOS.RPL_Streak_2) {
      this.RPL_Streak_2 = new PreliminaryStudyDetail(preliminaryStudyODOS.RPL_Streak_2);
    }
  }
}

export interface IPreliminaryStudyForm {
  Keluhan: string;
  ID_Keluhan: string;
  Keluhan_Lain: string;
  Catatan_Lain: string;
  ID_Petugas: string;
  ID_Petugas_RO: string;
  Nama_Petugas: string;
  Nama_Petugas_RO: string;
  TTD_Petugas_RO: string;
  Updated_At: string;
  Updated_By: string;
  Waktu: string;
  OD?: IPreliminaryStudyODOS;
  OS?: IPreliminaryStudyODOS;
}

export class PreliminaryStudyForm {
  Keluhan: string;
  ID_Keluhan: string;
  Keluhan_Lain: string;
  Catatan_Lain: string;
  ID_Petugas: string;
  ID_Petugas_RO: string;
  Nama_Petugas: string;
  Nama_Petugas_RO: string;
  TTD_Petugas_RO: string;
  Updated_At: string;
  Updated_By: string;
  Waktu: string;
  OD?: PreliminaryStudyODOS;
  OS?: PreliminaryStudyODOS;

  constructor(preliminaryStudyForm: PreliminaryStudyForm) {
    this.Catatan_Lain = preliminaryStudyForm.Catatan_Lain;
    this.ID_Petugas = preliminaryStudyForm.ID_Petugas;
    this.ID_Petugas_RO = preliminaryStudyForm.ID_Petugas_RO;
    this.ID_Keluhan = preliminaryStudyForm.ID_Keluhan;
    this.Keluhan = preliminaryStudyForm.Keluhan;
    this.Keluhan_Lain = preliminaryStudyForm.Keluhan_Lain;
    this.Nama_Petugas = preliminaryStudyForm.Nama_Petugas;
    this.Nama_Petugas_RO = preliminaryStudyForm.Nama_Petugas_RO;
    this.TTD_Petugas_RO = preliminaryStudyForm.TTD_Petugas_RO;
    this.Updated_At = preliminaryStudyForm.Updated_At;
    this.Updated_By = preliminaryStudyForm.Updated_By;
    this.Waktu = preliminaryStudyForm.Waktu;
    if (preliminaryStudyForm.OD) {
      this.OD = new PreliminaryStudyODOS(preliminaryStudyForm.OD);
    }
    if (preliminaryStudyForm.OS) {
      this.OS = new PreliminaryStudyODOS(preliminaryStudyForm.OS);
    }
  }
}

export interface IPreliminaryStudyOptic {
  OD?: IOpticInput;
  OS?: IOpticInput;
}

export class PreliminaryStudyOptic {
  OD?: IOpticInput;
  OS?: IOpticInput;
  constructor(opticPreliminary: IPreliminaryStudyOptic) {
    this.OD = opticPreliminary.OD;
    this.OS = opticPreliminary.OS;
  }
}
export interface IPreliminaryStudyModel extends IDataModel {
  anamnesa: Array<IAnamnesaModel>;
  form: IPreliminaryStudyForm;
}

export class PreliminaryStudyModel extends DataModel {
  anamnesa: Array<AnamnesaModel>;
  form: PreliminaryStudyForm;

  constructor(preliminaryStudy: IPreliminaryStudyModel) {
    super(preliminaryStudy);
    this.anamnesa = (Array.isArray(preliminaryStudy.anamnesa)) ? preliminaryStudy.anamnesa.map(a => new AnamnesaModel(a)) : [];
    this.form = preliminaryStudy.form;
  }

  toForm() {
    return {
      OD: {
        Visus_Awal: {
          Sph: '',
          Add: (this.form.OD && this.form.OD.Add) ? this.form.OD.Add : '-',
          False: (this.form.OD && this.form.OD.False) ? this.form.OD.False : '-',
          Jagger: (this.form.OD && this.form.OD.Jagger) ? this.form.OD.Jagger : '',
          Va: (this.form.OD && this.form.OD.VA) ? this.form.OD.VA : '',
        },
        KML: (this.form && this.form.OD && this.form.OD.KML) ? this.form.OD.KML : {},
        Koreksi_1: (this.form && this.form.OD && this.form.OD.Koreksi_1) ? this.form.OD.Koreksi_1 : {},
        Koreksi_2: (this.form && this.form.OD && this.form.OD.Koreksi_2) ? this.form.OD.Koreksi_2 : {},
        RPL_Ref_Subjektif: (this.form && this.form.OD && this.form.OD.RPL) ? this.form.OD.RPL : {},
        RPL_Ref_Subjektif_2: (this.form && this.form.OD && this.form.OD.RPL_2) ? this.form.OD.RPL_2 : {},
        RPL_Streak_Retinoscopy: (this.form && this.form.OD && this.form.OD.RPL_Streak) ? this.form.OD.RPL_Streak : {},
        RPL_Streak_Retinoscopy_2: (this.form && this.form.OD && this.form.OD.RPL_Streak_2) ? this.form.OD.RPL_Streak_2 : {},
      },
      OS: {
        Visus_Awal: {
          Sph: '',
          Add: (this.form.OS && this.form.OS.Add) ? this.form.OS.Add : '-',
          False: (this.form.OS && this.form.OS.False) ? this.form.OS.False : '-',
          Jagger: (this.form.OS && this.form.OS.Jagger) ? this.form.OS.Jagger : '',
          Va: (this.form.OS && this.form.OS.VA) ? this.form.OS.VA : '',
        },
        KML: (this.form && this.form.OS && this.form.OS.KML) ? this.form.OS.KML : {},
        Koreksi_1: (this.form && this.form.OS && this.form.OS.Koreksi_1) ? this.form.OS.Koreksi_1 : {},
        Koreksi_2: (this.form && this.form.OS && this.form.OS.Koreksi_2) ? this.form.OS.Koreksi_2 : {},
        RPL_Ref_Subjektif: (this.form && this.form.OS && this.form.OS.RPL) ? this.form.OS.RPL : {},
        RPL_Ref_Subjektif_2: (this.form && this.form.OS && this.form.OS.RPL_2) ? this.form.OS.RPL_2 : {},
        RPL_Streak_Retinoscopy: (this.form && this.form.OS && this.form.OS.RPL_Streak) ? this.form.OS.RPL_Streak : {},
        RPL_Streak_Retinoscopy_2: (this.form && this.form.OS && this.form.OS.RPL_Streak_2) ? this.form.OS.RPL_Streak_2 : {},
      },
    }
  }

  static createFromJson(json: IPreliminaryStudyModel) {
    return new PreliminaryStudyModel(json);
  }
}
