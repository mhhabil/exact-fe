import { DataModel, IDataModel } from "@src/shared/model";
import { DoctorPreliminaryStudyFormModel, IDoctorPreliminaryStudyFormModel } from "../../doctor-preliminary-study/models/doctor-preliminary-study.model";
import { IPreliminaryStudyForm, PreliminaryStudyForm } from "@src/modules/ro/preliminary-study/models/preliminary-study.model";
import { IGlassesPrescriptionFormModel } from "@src/modules/optic/glasses-prescription/models/glasses-prescription.model";
import { ISurgeryReportForm } from "@src/modules/operating-room/surgery-report/models/surgery-report.model";
export interface IKMB_OD {
  Select: string;
}

export class KMB {
  Select: string;
  constructor(form: IKMB_OD) {
    this.Select = form.Select;
  }
}

export interface IKML_OD {
  Select: string;
}

export class KML {
  Select: string;
  constructor(form: IKML_OD) {
    this.Select = form.Select;
  }
}

export interface IRPL_OD {
  Select: string;
}

export class RPL {
  Select: string;
  constructor(form: IRPL_OD) {
    this.Select = form.Select;
  }
}

export interface IRPL_2_OD {
  Select: string;
}

export class RPL_2 {
  Select: string;
  constructor(form: IRPL_2_OD) {
    this.Select = form.Select;
  }
}

export interface I_OD_Koreksi_1 {
  Select: string;
}

export class Koreksi_1 {
  Select: string;
  constructor(form: I_OD_Koreksi_1) {
    this.Select = form.Select;
  }
}

export interface I_OD_Koreksi_2 {
  Select: string;
}

export class Koreksi_2 {
  Select: string;
  constructor(form: I_OD_Koreksi_2) {
    this.Select = form.Select;
  }
}

export interface I_OD_RPL_Streak {
  Select: string;
}

export class RPL_Streak {
  Select: string;
  constructor(form: I_OD_RPL_Streak) {
    this.Select = form.Select;
  }
}

export interface I_OD_RPL_Streak_2 {
  Select: string;
}

export class RPL_Streak_2 {
  Select: string;
  constructor(form: I_OD_RPL_Streak_2) {
    this.Select = form.Select;
  }
}

export interface IOD {
  KMB: IKMB_OD;
  KML: IKML_OD;
  RPL: IRPL_OD;
  RPL2: IRPL_2_OD;
  Koreksi_1: I_OD_Koreksi_1;
  Koreksi_2: I_OD_Koreksi_2;
  RPL_Streak: I_OD_RPL_Streak;
  RPL_Streak_2: I_OD_RPL_Streak_2;
}

export interface IOS {
  KMB: IKMB_OS;
  KML: IKML_OS;
  RPL: IRPL_OS;
  RPL2: IRPL_2_OS;
  Koreksi_1: I_OS_Koreksi_1;
  Koreksi_2: I_OS_Koreksi_2;
  RPL_Streak: I_OS_RPL_Streak;
  RPL_Streak_2: I_OS_RPL_2_Streak;
}

export interface IKMB_OS {
  Select: string;
}

export class KMB_OS {
  Select: string;
  constructor(form: IKMB_OS) {
    this.Select = form.Select;
  }
}

export interface IKML_OS {
  Select: string;
}

export class KML_OS {
  Select: string;
  constructor(form: IKML_OS) {
    this.Select = form.Select;
  }
}

export interface IRPL_OS {
  Select: string;
}

export class RPL_OS {
  Select: string;
  constructor(form: IRPL_OS) {
    this.Select = form.Select;
  }
}

export interface IRPL_2_OS {
  Select: string;
}

export class RPL_2_OS {
  Select: string;
  constructor(form: IRPL_2_OS) {
    this.Select = form.Select;
  }
}

export interface I_OS_Koreksi_1 {
  Select: string;
}

export class OS_Koreksi_1 {
  Select: string;
  constructor(form: OS_Koreksi_1) {
    this.Select = form.Select;
  }
}

export interface I_OS_Koreksi_2 {
  Select: string;
}

export class OS_Koreksi_2 {
  Select: string;
  constructor(form: OS_Koreksi_2) {
    this.Select = form.Select;
  }
}

export interface I_OS_RPL_Streak {
  Select: string;
}

export class OS_RPL_Streak {
  Select: string;
  constructor(form: I_OS_RPL_Streak) {
    this.Select = form.Select;
  }
}

export interface I_OS_RPL_2_Streak {
  Select: string;
}

export class OS_RPL_2_Streak {
  Select: string;
  constructor(form: I_OS_RPL_2_Streak) {
    this.Select = form.Select;
  }
}

export interface IProofOfOutpatientServicesFormModel {
  OD: IOD;
  OS: IOS;
  TD: string;
  KGD: string;
  Waktu: string;
  ID_Dokter: string;
  TTD_Dokter: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Dokter: string;
  Sip_Dokter: string;
  Tanggal_TTD: string;
  Tanda_Tangan_Wali: string;
  Tanda_Tangan_Radio: string;
  Tanda_Tangan_Pasien: string;
};

export class ProofOfOutpatientServicesFormModel {
  OD: IOD;
  OS: IOS;
  TD: string;
  KGD: string;
  Waktu: string;
  ID_Dokter: string;
  TTD_Dokter: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Dokter: string;
  Sip_Dokter: string;
  Tanggal_TTD: string;
  Tanda_Tangan_Wali: string;
  Tanda_Tangan_Radio: string;
  Tanda_Tangan_Pasien: string;
  constructor(req: IProofOfOutpatientServicesFormModel) {
    this.OD = req.OD;
    this.OS = req.OS;
    this.TD = req.TD;
    this.KGD = req.KGD;
    this.Waktu = req.Waktu;
    this.ID_Dokter = req.ID_Dokter;
    this.TTD_Dokter = req.TTD_Dokter;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Nama_Dokter = req.Nama_Dokter;
    this.Sip_Dokter = req.Sip_Dokter;
    this.Tanggal_TTD = req.Tanggal_TTD;
    this.Tanda_Tangan_Wali = req.Tanda_Tangan_Wali;
    this.Tanda_Tangan_Radio = req.Tanda_Tangan_Radio;
    this.Tanda_Tangan_Pasien = req.Tanda_Tangan_Pasien;
  }
}

export interface IBPRJPreliminary extends IDoctorPreliminaryStudyFormModel {
  Data_A: string;
  Data_P: string;
}

export class BPRJPreliminary extends DoctorPreliminaryStudyFormModel {
  Data_A: string;
  Data_P: string;

  constructor(req: IBPRJPreliminary) {
    super(req);
    this.Data_A = req.Data_A;
    this.Data_P = req.Data_P;
  }
}

export interface IResepObat {
  Kode_Obat: string
  Nama_Obat: string
  ID_Satuan: string
  Nama_Satuan: string
  ID_AturanPakai: string
  Nama_AturanPakai: string
  Kode_AturanPakai: String
  Jumlah: string
  Catatan: string
}

interface ITebusObat {
  Waktu_Tebus: string
  Daftar_Tebus: Array<IResepObat>
  Keterangan: string
  Status_Tebus: string
}

export interface IProofOfOutpatientServicesModel extends IDataModel {
  form: IProofOfOutpatientServicesFormModel;
  pengkajian_awal: IBPRJPreliminary;
  cppt_perawat: any;
  resep_kacamata: IGlassesPrescriptionFormModel
  laporan_pembedahan: ISurgeryReportForm;
  ro: IPreliminaryStudyForm;
  tebus_obat: ITebusObat;
}

export class ProofOfOutpatientServicesModel extends DataModel {
  form: ProofOfOutpatientServicesFormModel;
  pengkajian_awal: BPRJPreliminary;
  cppt_perawat: any;
  resep_kacamata: IGlassesPrescriptionFormModel
  laporan_pembedahan: ISurgeryReportForm;
  ro: PreliminaryStudyForm;
  tebus_obat: ITebusObat;

  constructor(req: IProofOfOutpatientServicesModel) {
    super(req)
    this.form = req.form;
    this.pengkajian_awal = req.pengkajian_awal;
    this.cppt_perawat = req.cppt_perawat;
    this.ro = req.ro;
    this.laporan_pembedahan = req.laporan_pembedahan;
    this.resep_kacamata = req.resep_kacamata;
    this.tebus_obat = req.tebus_obat
  }
}
