import { SurgeryReportModel } from "@src/modules/operating-room/surgery-report/models/surgery-report.model";
import { HowToUse, IHowToUse, IMedicine, IPrescription, Medicine } from "@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model";
import { IPreliminaryStudyForm } from "@src/modules/ro/preliminary-study/models/preliminary-study.model";
import { IDataModel, DataModel } from "@src/shared/model";

export interface ISummaryOfHospitalizedPatientFormModel {
  Unit: string;
  Pasien_Dirawat: string;
  Komorbiditas_1: string;
  Komorbiditas_2: string;
  Komorbiditas_3: string;
  Komorbiditas_4: string;
  Komorbiditas_5: string;
  Mata: string;
  Posisi_Khusus: string;
  Anjuran: string;
  Obat_Rs: string;
  Tanggal: string;
  Anamnesa: string;
  Tindakan: string;
  ID_Petugas: string;
  Obat_Rumah: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Petugas: string;
  Tanggal_Masuk: string;
  Diagnosa_Masuk: string;
  Diagnosa_Utama: string;
  ID_TTD_Petugas: string;
  Tanggal_Keluar: string;
  Nama_TTD_Petugas: string;
  Diagnosa_Sekunder_1: string;
  Resep: string;
  Diagnosa_Sekunder_2: string;
  Diagnosa_Sekunder_3: string;
  Diagnosa_Sekunder_4: string;
  Diagnosa_Sekunder_5: string;
  Pemeriksaan_Fisik: string;
  Tanda_Tangan_Pasien: string;
  Tanda_Tangan_Petugas: string;
  Pemeriksaan_Penunjang: string;
  Kondisi_Pulang: string;
  Ruang_Rawat: string;
}

export class SummaryOfHospitalizedPatientFormModel {
  Uniit: string;
  Pasien_Dirawat: string;
  Komorbiditas_1: string;
  Komorbiditas_2: string;
  Komorbiditas_3: string;
  Komorbiditas_4: string;
  Komorbiditas_5: string;
  Mata: string;
  Posisi_Khusus: string;
  Anjuran: string;
  Obat_Rs: string;
  Tanggal: string;
  Anamnesa: string;
  Tindakan: string;
  ID_Petugas: string;
  Obat_Rumah: string;
  Updated_At: string;
  Updated_By: string;
  Nama_Petugas: string;
  Tanggal_Masuk: string;
  Diagnosa_Masuk: string;
  Diagnosa_Utama: string;
  ID_TTD_Petugas: string;
  Tanggal_Keluar: string;
  Nama_TTD_Petugas: string;
  Diagnosa_Sekunder_1: string;
  Diagnosa_Sekunder_2: string;
  Diagnosa_Sekunder_3: string;
  Diagnosa_Sekunder_4: string;
  Diagnosa_Sekunder_5: string;
  Pemeriksaan_Fisik: string;
  Tanda_Tangan_Pasien: string;
  Tanda_Tangan_Petugas: string;
  Pemeriksaan_Penunjang: string;
  Kondisi_Pulang: string;
  Ruang_Rawat: string;
  constructor(req: ISummaryOfHospitalizedPatientFormModel) {
    this.Uniit = req.Unit;
    this.Pasien_Dirawat = req.Pasien_Dirawat;
    this.Komorbiditas_1 = req.Komorbiditas_1;
    this.Komorbiditas_2 = req.Komorbiditas_2;
    this.Komorbiditas_3 = req.Komorbiditas_3;
    this.Komorbiditas_4 = req.Komorbiditas_4;
    this.Komorbiditas_5 = req.Komorbiditas_5;
    this.Mata = req.Mata;
    this.Posisi_Khusus = req.Posisi_Khusus;
    this.Anjuran = req.Anjuran;
    this.Obat_Rs = req.Obat_Rs;
    this.Tanggal = req.Tanggal;
    this.Anamnesa = req.Anamnesa;
    this.Tindakan = req.Tindakan;
    this.ID_Petugas = req.ID_Petugas;
    this.Obat_Rumah = req.Obat_Rumah;
    this.Updated_At = req.Updated_At;
    this.Updated_By = req.Updated_By;
    this.Nama_Petugas = req.Nama_Petugas;
    this.Tanggal_Masuk = req.Tanggal_Masuk;
    this.Diagnosa_Masuk = req.Diagnosa_Masuk;
    this.Diagnosa_Utama = req.Diagnosa_Utama;
    this.ID_TTD_Petugas = req.ID_TTD_Petugas;
    this.Tanggal_Keluar = req.Tanggal_Keluar;
    this.Nama_TTD_Petugas = req.Nama_TTD_Petugas;
    this.Diagnosa_Sekunder_1 = req.Diagnosa_Sekunder_1;
    this.Diagnosa_Sekunder_2 = req.Diagnosa_Sekunder_2;
    this.Diagnosa_Sekunder_3 = req.Diagnosa_Sekunder_3;
    this.Diagnosa_Sekunder_4 = req.Diagnosa_Sekunder_4;
    this.Diagnosa_Sekunder_5 = req.Diagnosa_Sekunder_5;
    this.Pemeriksaan_Fisik = req.Pemeriksaan_Fisik;
    this.Tanda_Tangan_Pasien = req.Tanda_Tangan_Pasien;
    this.Tanda_Tangan_Petugas = req.Tanda_Tangan_Petugas;
    this.Pemeriksaan_Penunjang = req.Pemeriksaan_Penunjang;
    this.Kondisi_Pulang = req.Kondisi_Pulang;
    this.Ruang_Rawat = req.Ruang_Rawat;
  }
}

export interface ISummaryOfHospitalizedPatientModel extends IDataModel {
  form: ISummaryOfHospitalizedPatientFormModel;
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>;
  cppt_perawat: any;
  cppt_dokter: any;
  ro: IPreliminaryStudyForm;
  ok: any;
}

export class SummaryOfHospitalizedPatientModel extends DataModel {
  form: ISummaryOfHospitalizedPatientFormModel;
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>;
  cppt_perawat: any;
  cppt_dokter: any;
  ro: IPreliminaryStudyForm;
  ok: any;
  constructor(request: ISummaryOfHospitalizedPatientModel) {
    super(request);
    this.form = request.form;
    this.obat = (Array.isArray(request.obat)) ? request.obat.map((a) => new Medicine(a)) : [];
    this.aturan_pakai = (Array.isArray(request.aturan_pakai)) ? request.aturan_pakai.map((a) => new HowToUse(a)) : [];
    this.cppt_dokter = request.cppt_dokter;
    this.cppt_perawat = request.cppt_perawat;
    this.ro = request.ro;
    this.ok = request.ok;
  }
}
