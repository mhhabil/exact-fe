import { DataModel, IDataModel } from '@shared/model';
import { IAssessmentUgdFormModel } from '@src/modules/emergency-room/assessment/models/assessment-ugd-models';
import { IPatientIdentityFormModel, PatientIdentityFormModel } from '@src/modules/information/patient-identity/models/patient-identity.model';
import { INursingEarlyWarning } from '@src/modules/inpatient/nursing-early-warning-scoring-table/models/nursing-early-warning-scoring.model';
import { IPreliminaryStudyForm, PreliminaryStudyForm } from '@src/modules/ro/preliminary-study/models/preliminary-study.model';
import { IProvisionOfInformationFormModel } from '../../inform-consent/models/inform-consent.model';

export interface IRecord {
  ID: string;
  Diet: string;
  Unit: string;
  Puasa: string;
  Nama: string;
  Waktu:  string;
  Terapi: string;
  Keluhan: string;
  Rencana: string;
  Steward: string;
  Vital_N: string;
  Vital_P: string;
  Vital_T: string;
  Diagnosa: string;
  Filename: string;
  Penerima: string;
  Visus_OD: string;
  Visus_OS: string;
  Vital_TD: string;
  Alderette: string;
  Kesadaran: string;
  Pengantar: string;
  Sort_Path: string;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Skala_Nyeri: string;
  Waktu_Puasa: string;
  ID_Pelayanan: string;
  Nama_Petugas: string;
  Tonometer_OD: string;
  Tonometer_OS: string;
  Vital_Sat_O2: string;
  Steward_Score: string;
  ID_Dokter_Dpjp: string;
  Alderette_Score: string;
  Steward_Motorik: string;
  Nama_Dokter_Dpjp: string;
  Tanggal_Masuk_Rs: string;
  Tanggal_Transfer: string;
  Indikasi_Transfer: string;
  Steward_Kesadaran: string;
  ID_Dokter_Operator: string;
  Steward_Pernafasan: string;
  Alderette_Aktivitas: string;
  Alderette_Kesadaran: string;
  Alderette_Sirkulasi: string;
  Alderette_Pernafasan: string;
  Nama_Dokter_Operator:  string;
  Pemeriksaan_Alat_Ekg: string;
  Pemeriksaan_Alat_Usg: string;
  Alderette_Warna_Kulit: string;
  Nama_Perawat_Penerima: string;
  Nama_Perawat_Pengantar: string;
  Pemeriksaan_Alat_Ct_Scan: string;
  Pemeriksaan_Alat_Biometri: string;
  Pemeriksaan_Alat_Lain_Lain: string;
  Pemeriksaan_Alat_Lain_Text: string;
  Pemeriksaan_Alat_Oct_Papil: string;
  Pemeriksaan_Alat_Oct_Macula: string;
  Pemeriksaan_Alat_Foto_Fundus: string;
  Pemeriksaan_Alat_Thorax_Foto: string;
  Pemeriksaan_Alat_Laboratorium: string;
  Tanda_Tangan_Perawat_Penerima: string;
  Tanda_Tangan_Perawat_Pengantar: string;
  Id_Tanda_Tangan_Perawat_Penerima: string;
  Id_Tanda_Tangan_Perawat_Pengantar: string;
  Pemeriksaan_Alat_Laboratorium_Text: string;
}

export class Record {
  ID: string;
  Diet: string;
  Unit: string;
  Nama: string;
  Puasa: string;
  Waktu:  string;
  Terapi: string;
  Keluhan: string;
  Rencana: string;
  Steward: string;
  Vital_N: string;
  Vital_P: string;
  Vital_T: string;
  Diagnosa: string;
  Filename: string;
  Penerima: string;
  Visus_OD: string;
  Visus_OS: string;
  Vital_TD: string;
  Alderette: string;
  Kesadaran: string;
  Pengantar: string;
  Sort_Path: string;
  ID_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Skala_Nyeri: string;
  Waktu_Puasa: string;
  ID_Pelayanan: string;
  Nama_Petugas: string;
  Tonometer_OD: string;
  Tonometer_OS: string;
  Vital_Sat_O2: string;
  Steward_Score: string;
  ID_Dokter_Dpjp: string;
  Alderette_Score: string;
  Steward_Motorik: string;
  Nama_Dokter_Dpjp: string;
  Tanggal_Masuk_Rs: string;
  Tanggal_Transfer: string;
  Indikasi_Transfer: string;
  Steward_Kesadaran: string;
  ID_Dokter_Operator: string;
  Steward_Pernafasan: string;
  Alderette_Aktivitas: string;
  Alderette_Kesadaran: string;
  Alderette_Sirkulasi: string;
  Alderette_Pernafasan: string;
  Nama_Dokter_Operator:  string;
  Pemeriksaan_Alat_Ekg: string;
  Pemeriksaan_Alat_Usg: string;
  Alderette_Warna_Kulit: string;
  Nama_Perawat_Penerima: string;
  Nama_Perawat_Pengantar: string;
  Pemeriksaan_Alat_Ct_Scan: string;
  Pemeriksaan_Alat_Biometri: string;
  Pemeriksaan_Alat_Lain_Lain: string;
  Pemeriksaan_Alat_Lain_Text: string;
  Pemeriksaan_Alat_Oct_Papil: string;
  Pemeriksaan_Alat_Oct_Macula: string;
  Pemeriksaan_Alat_Foto_Fundus: string;
  Pemeriksaan_Alat_Thorax_Foto: string;
  Pemeriksaan_Alat_Laboratorium: string;
  Tanda_Tangan_Perawat_Penerima: string;
  Tanda_Tangan_Perawat_Pengantar: string;
  Id_Tanda_Tangan_Perawat_Penerima: string;
  Id_Tanda_Tangan_Perawat_Pengantar: string;
  Pemeriksaan_Alat_Laboratorium_Text: string;
  constructor(req: IRecord) {
    this.ID = req.ID;
    this.Nama = req.Nama;
    this.Steward_Motorik = req.Steward_Motorik;
    this.Steward_Kesadaran = req.Steward_Kesadaran;
    this.Steward_Pernafasan = req.Steward_Pernafasan;
    this.Alderette_Aktivitas = req.Alderette_Aktivitas;
    this.Alderette_Kesadaran = req.Alderette_Kesadaran;
    this.Alderette_Sirkulasi = req.Alderette_Sirkulasi;
    this.Alderette_Pernafasan = req.Alderette_Pernafasan;
    this.Alderette_Warna_Kulit = req.Alderette_Warna_Kulit;
    this.Diet = req.Diet;
    this.Unit = req.Unit;
    this.Puasa = req.Puasa;
    this.Waktu = req.Waktu;
    this.Terapi = req.Terapi;
    this.Keluhan = req.Keluhan;
    this.Rencana = req.Rencana;
    this.Steward = req.Steward;
    this.Vital_N = req.Vital_N;
    this.Vital_P = req.Vital_P;
    this.Vital_T = req.Vital_T;
    this.Diagnosa = req.Diagnosa;
    this.Filename = req.Filename;
    this.Penerima = req.Penerima;
    this.Visus_OD = req.Visus_OD;
    this.Visus_OS = req.Visus_OS;
    this.Vital_TD = req.Vital_TD;
    this.Alderette = req.Alderette;
    this.Kesadaran = req.Kesadaran;
    this.Pengantar = req.Pengantar;
    this.Sort_Path = req.Sort_Path;
    this.ID_Petugas = req.ID_Petugas;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Skala_Nyeri = req.Skala_Nyeri;
    this.Waktu_Puasa = req.Waktu_Puasa;
    this.ID_Pelayanan = req.ID_Pelayanan;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Tonometer_OD = req.Tonometer_OD;
    this.Tonometer_OS = req.Tonometer_OS;
    this.Vital_Sat_O2 = req.Vital_Sat_O2;
    this.Steward_Score = req.Steward_Score;
    this.ID_Dokter_Dpjp = req.ID_Dokter_Dpjp;
    this.Alderette_Score = req.Alderette_Score;
    this.Nama_Dokter_Dpjp = req.Nama_Dokter_Dpjp;
    this.Tanggal_Masuk_Rs = req.Tanggal_Masuk_Rs;
    this.Tanggal_Transfer = req.Tanggal_Transfer;
    this.Indikasi_Transfer = req.Indikasi_Transfer;
    this.ID_Dokter_Operator = req.ID_Dokter_Operator;
    this.Nama_Dokter_Operator = req.Nama_Dokter_Operator;
    this.Pemeriksaan_Alat_Ekg = req.Pemeriksaan_Alat_Ekg;
    this.Pemeriksaan_Alat_Usg = req.Pemeriksaan_Alat_Usg;
    this.Nama_Perawat_Penerima = req.Nama_Perawat_Penerima;
    this.Nama_Perawat_Pengantar = req.Nama_Perawat_Pengantar;
    this.Pemeriksaan_Alat_Ct_Scan = req.Pemeriksaan_Alat_Ct_Scan;
    this.Pemeriksaan_Alat_Biometri = req.Pemeriksaan_Alat_Biometri;
    this.Pemeriksaan_Alat_Lain_Lain = req.Pemeriksaan_Alat_Lain_Lain;
    this.Pemeriksaan_Alat_Lain_Text = req.Pemeriksaan_Alat_Lain_Text;
    this.Pemeriksaan_Alat_Oct_Papil = req.Pemeriksaan_Alat_Oct_Papil;
    this.Pemeriksaan_Alat_Oct_Macula = req.Pemeriksaan_Alat_Oct_Macula;
    this.Pemeriksaan_Alat_Foto_Fundus = req.Pemeriksaan_Alat_Foto_Fundus;
    this.Pemeriksaan_Alat_Thorax_Foto = req.Pemeriksaan_Alat_Thorax_Foto;
    this.Pemeriksaan_Alat_Laboratorium = req.Pemeriksaan_Alat_Laboratorium;
    this.Tanda_Tangan_Perawat_Penerima = req.Tanda_Tangan_Perawat_Penerima;
    this.Tanda_Tangan_Perawat_Pengantar = req.Tanda_Tangan_Perawat_Pengantar;
    this.Id_Tanda_Tangan_Perawat_Penerima = req.Id_Tanda_Tangan_Perawat_Penerima;
    this.Id_Tanda_Tangan_Perawat_Pengantar = req.Id_Tanda_Tangan_Perawat_Pengantar;
    this.Pemeriksaan_Alat_Laboratorium_Text = req.Pemeriksaan_Alat_Laboratorium_Text;
  }
}

export interface IPatientTransferFormModel{
    Waktu: string;
    Pengantar: string;
    Penerima: string;
    ID: string;
    ID_Pelayanan: string;
    Filename: string;
    Sort_Path: string;
    encrypt: string;
    Unit: string;
    record: Record[];
    Updated_At: string;
    PDF?: string;
}

export class PatientTransferFormModel {
    Waktu: string;
    Pengantar: string;
    Penerima: string;
    ID: string;
    ID_Pelayanan: string;
    Filename: string;
    Sort_Path: string;
    encrypt: string;
    Unit: string;
    record: Record[];
    Updated_At: string;
    PDF?: string;
    constructor(request: IPatientTransferFormModel) {
      this.Waktu = request.Waktu;
      this.Pengantar = request.Pengantar;
      this.Penerima = request.Penerima;
      this.ID = request.ID;
      this.ID_Pelayanan = request.ID_Pelayanan;
      this.Filename = request.Filename;
      this.Sort_Path = request.Sort_Path;
      this.encrypt = request.encrypt;
      this.Unit = request.Unit;
      this.record = request.record;
      this.Updated_At = request.Updated_At;
      this.PDF = request.PDF;
    }
}

export interface IPatientTransferModel extends IDataModel {
    form: any;
    records: any[];
    ro: IPreliminaryStudyForm;
    ews: INursingEarlyWarning;
    asesmen: IAssessmentUgdFormModel;
    inform_consent: IProvisionOfInformationFormModel;
  }

export class PatientTransferModel extends DataModel {
    form: any;
    records: PatientTransferFormModel[] = [];
    ro: PreliminaryStudyForm;
    ews: INursingEarlyWarning;
    asesmen: IAssessmentUgdFormModel;
    inform_consent: IProvisionOfInformationFormModel;

    constructor(pasien: IPatientTransferModel) {
      super(pasien);
      this.form = pasien.form;
      this.records = pasien.records && Array.isArray(pasien.records) ? pasien.records : [];
      this.ro = pasien.ro;
      this.ews = pasien.ews;
      this.asesmen = pasien.asesmen;
      this.inform_consent = pasien.inform_consent;
    }

    static createFromJson(json: IPatientTransferModel) {
      return new PatientTransferModel(json);
    }
}
