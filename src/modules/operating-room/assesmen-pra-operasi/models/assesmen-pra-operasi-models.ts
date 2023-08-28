import { DoctorModel, IDoctorModel } from "@src/shared/doctor/models/doctor.model";
import { DataModel, IDataModel } from '@shared/model';
import { IAssessmentUgdFormModel } from "@src/modules/emergency-room/assessment/models/assessment-ugd-models";
import { INursingEarlyWarning } from "@src/modules/inpatient/nursing-early-warning-scoring-table/models/nursing-early-warning-scoring.model";
import { IPerioperativeNursingRecordsFormModel } from "../../perioperative-nursing-records/models/perioperative-nursing-records.model";
import { IProvisionOfInformationFormModel } from "@src/modules/outpatient/inform-consent/models/inform-consent.model";

export interface IPenyakitPeserta {
    Hepar: number;
    Ginjal: number;
    Jantung: number;
    Koroner: number;
    Lain_lain: number;
    Hipertensi: number;
    Dekompensasi: number;
    Pembekuan_Darah: number;
    Diabetes_Melitus: number;
}

export class Penyakit_Peserta {
    Hepar: number;
    Ginjal: number;
    Jantung: number;
    Koroner: number;
    Lain_lain: number;
    Hipertensi: number;
    Dekompensasi: number;
    Pembekuan_Darah: number;
    Diabetes_Melitus: number;
    constructor(res: IPenyakitPeserta) {
      this.Hepar =  res.Hepar;
      this.Ginjal = res.Ginjal;
      this.Jantung = res.Koroner;
      this.Koroner = res.Koroner;
      this.Lain_lain = res.Lain_lain;
      this.Hipertensi = res.Hipertensi;
      this.Dekompensasi = res.Dekompensasi;
      this.Pembekuan_Darah = res.Pembekuan_Darah;
      this.Diabetes_Melitus = res.Diabetes_Melitus;
    }
}

export interface IPengobatanSaatIni {
    Obat_Dm: number;
    Sedatine: number;
    Lain_lain: number;
    Tidak_Ada: number;
    Corticosteroid: number;
    Obat_Hipertensi: number;
}

export class Pengobatan_Saat_Ini {
    Obat_Dm: number;
    Sedatine: number;
    Lain_lain: number;
    Tidak_Ada: number;
    Corticosteroid: number;
    Obat_Hipertensi: number;
    constructor(pengobatan: IPengobatanSaatIni) {
      this.Obat_Dm = pengobatan.Obat_Dm;
      this.Sedatine = pengobatan.Sedatine;
      this.Lain_lain = pengobatan.Lain_lain;
      this.Tidak_Ada = pengobatan.Tidak_Ada;
      this.Corticosteroid = pengobatan.Corticosteroid;
      this.Obat_Hipertensi = pengobatan.Obat_Hipertensi;
    }
}

export interface IAssesmenPraOperasiFormModel {
    Rr: string;
    Td: string;
    Dll: string;
    Nadi: string;
    Suhu: string;
    Alergi: string;
    Tanggal: string;
    Anestesi: string;
    Biometri: string;
    Diagnosa: string;
    Usg_Mata: string;
    ID_Dokter: string;
    Tonometri: string;
    Ahli_Bedah: string;
    ID_Petugas: string;
    Oct_Makula: string;
    TTD_Dokter: string;
    Updated_At: string;
    Updated_By: string;
    Foto_Fundus: string;
    Jenis_Kasus: string;
    Nama_Dokter: string;
    Persetujuan: string;
    Skala_Nyeri: string;
    Nama_Petugas: string;
    Rencana_Operasi: string;
    Tanggal_Operasi: string;
    Hasil_Konsultasi: string;
    Penyakit_Peserta: IPenyakitPeserta;
    Persediaan_Darah: string;
    Alergi_Keterangan: string;
    Pengobatan_Saat_Ini: IPengobatanSaatIni;
    Pengobatan_Saat_Ini_Lain: string;
    Penyakit_Peserta_Keterangan: string;
}

export class AssesmenPraOperasiFormModel {
    Rr: string;
    Td: string;
    Dll: string;
    Nadi: string;
    Suhu: string;
    Alergi: string;
    Tanggal: string;
    Anestesi: string;
    Biometri: string;
    Diagnosa: string;
    Usg_Mata: string;
    ID_Dokter: string;
    Tonometri: string;
    Ahli_Bedah: string;
    ID_Petugas: string;
    Oct_Makula: string;
    TTD_Dokter: string;
    Updated_At: string;
    Updated_By: string;
    Foto_Fundus: string;
    Jenis_Kasus: string;
    Nama_Dokter: string;
    Persetujuan: string;
    Skala_Nyeri: string;
    Nama_Petugas: string;
    Rencana_Operasi: string;
    Tanggal_Operasi: string;
    Hasil_Konsultasi: string;
    Penyakit_Peserta: IPenyakitPeserta;
    Persediaan_Darah: string;
    Alergi_Keterangan: string;
    Pengobatan_Saat_Ini: IPengobatanSaatIni;
    Pengobatan_Saat_Ini_Lain: string;
    Penyakit_Peserta_Keterangan: string;
    constructor(request: IAssesmenPraOperasiFormModel) {
      this.Rr = request.Rr;
      this.Td = request.Td;
      this.Dll = request.Dll;
      this.Nadi = request.Nadi;
      this.Suhu = request.Suhu;
      this.Alergi = request.Alergi;
      this.Tanggal = request.Tanggal;
      this.Anestesi = request.Anestesi;
      this.Biometri = request.Biometri;
      this.Diagnosa = request.Diagnosa;
      this.Usg_Mata = request.Usg_Mata;
      this.ID_Dokter = request.ID_Dokter;
      this.Tonometri = request.Tonometri;
      this.Ahli_Bedah = request.Ahli_Bedah;
      this.ID_Petugas = request.ID_Petugas;
      this.Oct_Makula = request.Oct_Makula;
      this.TTD_Dokter = request.TTD_Dokter;
      this.Updated_At = request.Updated_At;
      this.Updated_By = request.Updated_By;
      this.Foto_Fundus = request.Foto_Fundus;
      this.Jenis_Kasus = request.Jenis_Kasus;
      this.Nama_Dokter = request.Nama_Dokter;
      this.Persetujuan = request.Persetujuan;
      this.Skala_Nyeri = request.Skala_Nyeri;
      this.Nama_Petugas = request.Nama_Petugas;
      this.Rencana_Operasi = request.Rencana_Operasi;
      this.Tanggal_Operasi = request.Tanggal_Operasi;
      this.Hasil_Konsultasi = request.Hasil_Konsultasi;
      this.Penyakit_Peserta = request.Penyakit_Peserta;
      this.Persediaan_Darah = request.Persediaan_Darah;
      this.Alergi_Keterangan = request.Alergi_Keterangan;
      this.Pengobatan_Saat_Ini = request.Pengobatan_Saat_Ini;
      this.Pengobatan_Saat_Ini_Lain = request.Pengobatan_Saat_Ini_Lain;
      this.Penyakit_Peserta_Keterangan = request.Penyakit_Peserta_Keterangan;
    }
}

export interface IAssesmenPraOperasiModel extends IDataModel {
    form: IAssesmenPraOperasiFormModel;
    dokter: Array<IDoctorModel>;
    asesmen: IAssessmentUgdFormModel;
    ews: INursingEarlyWarning;
    tanda_vital: IPerioperativeNursingRecordsFormModel;
    inform_consent: IProvisionOfInformationFormModel;
  }

export class AssesmenPraOperasiModel extends DataModel {
    form: IAssesmenPraOperasiFormModel;
    dokter: Array<IDoctorModel>;
    asesmen: IAssessmentUgdFormModel;
    ews: INursingEarlyWarning;
    tanda_vital: IPerioperativeNursingRecordsFormModel;
    inform_consent: IProvisionOfInformationFormModel;
    constructor(req: IAssesmenPraOperasiModel) {
      super(req)
      this.form = req.form;
      this.dokter = (Array.isArray(req.dokter)) ? req.dokter.map((a) => new DoctorModel(a)) : [];
      this.asesmen = req.asesmen;
      this.ews = req.ews;
      this.tanda_vital = req.tanda_vital;
      this.inform_consent = req.inform_consent;
    }
}
