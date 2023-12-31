import { DataModel, IDataModel } from '@shared/model';
import { DoctorVisit, IDoctorVisit } from '../../cppt/models/cppt-inpatient.model';
import { IDaftarTebus, IHowToUse, IImage, IMedicine, IPediatric, IPrescription, Prescription } from '@src/modules/outpatient/doctor-preliminary-study/models/doctor-preliminary-study.model';
import { IAssessmentUgdFormModel } from '@src/modules/emergency-room/assessment/models/assessment-ugd-models';
import { IMedsPackage } from '@src/shared/meds-package/models/meds-package.model';
import { INursingEarlyWarning } from '../../nursing-early-warning-scoring-table/models/nursing-early-warning-scoring.model';
import { IProvisionOfInformationFormModel } from '@src/modules/outpatient/inform-consent/models/inform-consent.model';

export interface IInpatientMedsRedeem {
  ID: string;
  ID_Berobat: string;
  Waktu_Tebus: string;
  Daftar_Tebus: Array<IDaftarTebus>;
  Keterangan: string;
  Status_Tebus: string;
  Updated_At: string;
}

export class InpatientMedsRedeem {
  ID: string;
  ID_Berobat: string;
  Waktu_Tebus: string;
  Daftar_Tebus: Array<IDaftarTebus>;
  Keterangan: string;
  Status_Tebus: string;
  Updated_At: string;

  constructor(model: IInpatientMedsRedeem) {
    this.ID = model.ID;
    this.ID_Berobat = model.ID_Berobat;
    this.Waktu_Tebus = model.Waktu_Tebus;
    this.Daftar_Tebus = model.Daftar_Tebus
    this.Keterangan = model.Keterangan;
    this.Status_Tebus = model.Status_Tebus;
    this.Updated_At = model.Updated_At;
  }
}

export interface IInpatientMedicalNoteForm {
  CPPT_ID?: string;
  Submit_Retina: string;
  Keluhan_Utama: string;
  Anamnesa: string;
  Riwayat_Penyakit_Terdahulu: string;
  Riwayat_Pemakaian_Obat: string;
  Riwayat_Penyakit_Keluarga: string;
  Riwayat_Pekerjaan: string;
  Pekerjaan_Zat_Berbahaya: string;
  Pekerjaan_Zat_Berbahaya_Keterangan: string;
  Riwayat_Alergi: string;
  Kesadaran: string;
  Pernafasan: string;
  Tekanan_Darah: string;
  Skala_Nyeri: string;
  Nadi: string;
  Berat_Badan: string;
  Suhu: string;
  Tinggi_Badan: string;
  Keadaan_Gizi: string;
  Keadaan_Umum: string;
  Oedem: string;
  Ikterus: string;
  Cyanosis: string;
  Pengkajian_Kepala: string;
  Pengkajian_Kepala_Keterangan: string;
  Pengkajian_Mata: string;
  Pengkajian_Mata_Keterangan: string;
  Pengkajian_Tht: string;
  Pengkajian_Tht_Keterangan: string;
  Pengkajian_Oedem: string;
  Pengkajian_Oedem_Keterangan: string;
  Pengkajian_Mulut: string;
  Pengkajian_Mulut_Keterangan: string;
  Pengkajian_Leher: string;
  Pengkajian_Leher_Keterangan: string;
  Pengkajian_Jantung: string;
  Pengkajian_Jantung_Keterangan: string;
  Pengkajian_Paru: string;
  Pengkajian_Paru_Keterangan: string;
  Pengkajian_Dada: string;
  Pengkajian_Dada_Keterangan: string;
  Pengkajian_Perut: string;
  Pengkajian_Perut_Keterangan: string;
  Pengkajian_Urogenital: string;
  Pengkajian_Urogenital_Keterangan: string;
  Pengkajian_Anggota_Gerak: string;
  Pengkajian_Anggota_Gerak_Keterangan: string;
  Pengkajian_Status_Neurologis: string;
  Pengkajian_Status_Neurologis_Keterangan: string;
  Pengkajian_Muskulos_Keletal: string;
  Pengkajian_Muskulos_Keletal_Keterangan: string;
  Pengkajian_Palpebra_Inferior: string;
  Pengkajian_Palpebra_Inferior_Keterangan: string;
  Pengkajian_Palpebra_Superior: string;
  Pengkajian_Palpebra_Superior_Keterangan: string;
  Pengkajian_Conj_Tarsal_Inferior: string;
  Pengkajian_Conj_Tarsal_Inferior_Keterangan: string;
  Pengkajian_Conj_Tarsal_Superior: string;
  Pengkajian_Conj_Tarsal_Superior_Keterangan: string;
  Pengkajian_Conj_Bulbi: string;
  Pengkajian_Conj_Bulbi_Keterangan: string;
  Pengkajian_Posisi: string;
  Pengkajian_Posisi_Keterangan: string;
  Pengkajian_Pergerakan: string;
  Pengkajian_Pergerakan_Keterangan: string;
  Pengkajian_Funduscopy: string;
  Pengkajian_Funduscopy_Keterangan: string;
  Pengkajian_Canthal_Medial: string;
  Pengkajian_Canthal_Medial_Keterangan: string;
  Pengkajian_Canthal_Lateral: string;
  Pengkajian_Canthal_Lateral_Keterangan: string;
  Pengkajian_Sclera: string;
  Pengkajian_Sclera_Keterangan: string;
  Data_Objektif_Lain: string;
  Pengkajian_Cornea: string;
  Pengkajian_Cornea_Keterangan: string;
  Pengkajian_Coa: string;
  Pengkajian_Coa_Keterangan: string;
  Pengkajian_Pupil: string;
  Pengkajian_Pupil_Keterangan: string;
  Pengkajian_Iris: string;
  Pengkajian_Iris_Keterangan: string;
  Pengkajian_Vitreous: string;
  Pengkajian_Vitreous_Keterangan: string;
  Pengkajian_Lensa: string;
  Pengkajian_Lensa_Keterangan: string;
  Pengkajian_Retina: string;
  Pengkajian_Retina_Keterangan: string;
  Pemeriksaan_Penunjang: string;
  Diagnosa: string;
  Rencana_Pengobatan: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  Pediatrik: IPediatric;
  Submit_Pediatrik: string;
  Image_1: IImage;
  Image_2: IImage;
  Resep: Array<IPrescription>;
  Tanggal: string;
  TTD_Dokter: string;
  ID_Dokter: string;
  Nama_Dokter: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  No_Berobat: string;
  Updated_At: string;
  Updated_By: string;
}

export class InpatientMedicalNoteForm {
  CPPT_ID?: string;
  Submit_Retina: string;
  Keluhan_Utama: string;
  Anamnesa: string;
  Riwayat_Penyakit_Terdahulu: string;
  Riwayat_Pemakaian_Obat: string;
  Riwayat_Penyakit_Keluarga: string;
  Riwayat_Pekerjaan: string;
  Pekerjaan_Zat_Berbahaya: string;
  Pekerjaan_Zat_Berbahaya_Keterangan: string;
  Riwayat_Alergi: string;
  Kesadaran: string;
  Pernafasan: string;
  Tekanan_Darah: string;
  Skala_Nyeri: string;
  Nadi: string;
  Berat_Badan: string;
  Suhu: string;
  Tinggi_Badan: string;
  Keadaan_Gizi: string;
  Keadaan_Umum: string;
  Oedem: string;
  Ikterus: string;
  Cyanosis: string;
  Pengkajian_Kepala: string;
  Pengkajian_Kepala_Keterangan: string;
  Pengkajian_Mata: string;
  Pengkajian_Mata_Keterangan: string;
  Pengkajian_Tht: string;
  Pengkajian_Tht_Keterangan: string;
  Pengkajian_Oedem: string;
  Pengkajian_Oedem_Keterangan: string;
  Pengkajian_Mulut: string;
  Pengkajian_Mulut_Keterangan: string;
  Pengkajian_Leher: string;
  Pengkajian_Leher_Keterangan: string;
  Pengkajian_Jantung: string;
  Pengkajian_Jantung_Keterangan: string;
  Pengkajian_Paru: string;
  Pengkajian_Paru_Keterangan: string;
  Pengkajian_Dada: string;
  Pengkajian_Dada_Keterangan: string;
  Pengkajian_Perut: string;
  Pengkajian_Perut_Keterangan: string;
  Pengkajian_Urogenital: string;
  Pengkajian_Urogenital_Keterangan: string;
  Pengkajian_Anggota_Gerak: string;
  Pengkajian_Anggota_Gerak_Keterangan: string;
  Pengkajian_Status_Neurologis: string;
  Pengkajian_Status_Neurologis_Keterangan: string;
  Pengkajian_Muskulos_Keletal: string;
  Pengkajian_Muskulos_Keletal_Keterangan: string;
  Pengkajian_Palpebra_Inferior: string;
  Pengkajian_Palpebra_Inferior_Keterangan: string;
  Pengkajian_Palpebra_Superior: string;
  Pengkajian_Palpebra_Superior_Keterangan: string;
  Pengkajian_Conj_Tarsal_Inferior: string;
  Pengkajian_Conj_Tarsal_Inferior_Keterangan: string;
  Pengkajian_Conj_Tarsal_Superior: string;
  Pengkajian_Conj_Tarsal_Superior_Keterangan: string;
  Pengkajian_Conj_Bulbi: string;
  Pengkajian_Conj_Bulbi_Keterangan: string;
  Pengkajian_Posisi: string;
  Pengkajian_Posisi_Keterangan: string;
  Pengkajian_Pergerakan: string;
  Pengkajian_Pergerakan_Keterangan: string;
  Pengkajian_Funduscopy: string;
  Pengkajian_Funduscopy_Keterangan: string;
  Pengkajian_Canthal_Medial: string;
  Pengkajian_Canthal_Medial_Keterangan: string;
  Pengkajian_Canthal_Lateral: string;
  Pengkajian_Canthal_Lateral_Keterangan: string;
  Pengkajian_Sclera: string;
  Pengkajian_Sclera_Keterangan: string;
  Data_Objektif_Lain: string;
  Pengkajian_Cornea: string;
  Pengkajian_Cornea_Keterangan: string;
  Pengkajian_Coa: string;
  Pengkajian_Coa_Keterangan: string;
  Pengkajian_Pupil: string;
  Pengkajian_Pupil_Keterangan: string;
  Pengkajian_Iris: string;
  Pengkajian_Iris_Keterangan: string;
  Pengkajian_Vitreous: string;
  Pengkajian_Vitreous_Keterangan: string;
  Pengkajian_Lensa: string;
  Pengkajian_Lensa_Keterangan: string;
  Pengkajian_Retina: string;
  Pengkajian_Retina_Keterangan: string;
  Pemeriksaan_Penunjang: string;
  Diagnosa: string;
  Gambar_Mata_OD: string;
  Gambar_Mata_OS: string;
  Gambar_Retina_OD: string;
  Gambar_Retina_OS: string;
  Pediatrik: IPediatric;
  Submit_Pediatrik: string;
  Image_1: IImage;
  Image_2: IImage;
  Resep: Array<Prescription>;
  Rencana_Pengobatan: string;
  Tanggal: string;
  TTD_Dokter: string;
  ID_Dokter: string;
  Nama_Dokter: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  No_Berobat: string;
  Updated_At: string;
  Updated_By: string;
  constructor(form: IInpatientMedicalNoteForm) {
    this.CPPT_ID = form.CPPT_ID ?? '';
    this.Submit_Retina = form.Submit_Retina;
    this.Keluhan_Utama = form.Keluhan_Utama;
    this.Anamnesa = form.Anamnesa;
    this.Riwayat_Penyakit_Terdahulu = form.Riwayat_Penyakit_Terdahulu;
    this.Riwayat_Pemakaian_Obat = form.Riwayat_Pemakaian_Obat;
    this.Riwayat_Penyakit_Keluarga = form.Riwayat_Penyakit_Keluarga;
    this.Riwayat_Pekerjaan = form.Riwayat_Pekerjaan;
    this.Pekerjaan_Zat_Berbahaya = form.Pekerjaan_Zat_Berbahaya;
    this.Pekerjaan_Zat_Berbahaya_Keterangan = form.Pekerjaan_Zat_Berbahaya_Keterangan;
    this.Riwayat_Alergi = form.Riwayat_Alergi;
    this.Kesadaran = form.Kesadaran;
    this.Pernafasan = form.Pernafasan;
    this.Tekanan_Darah = form.Tekanan_Darah;
    this.Skala_Nyeri = form.Skala_Nyeri;
    this.Nadi = form.Nadi;
    this.Berat_Badan = form.Berat_Badan;
    this.Suhu = form.Suhu;
    this.Tinggi_Badan = form.Tinggi_Badan;
    this.Keadaan_Gizi = form.Keadaan_Gizi;
    this.Keadaan_Umum = form.Keadaan_Umum;
    this.Oedem = form.Oedem;
    this.Ikterus = form.Ikterus;
    this.Cyanosis = form.Cyanosis;
    this.Pengkajian_Kepala = form.Pengkajian_Kepala;
    this.Pengkajian_Kepala_Keterangan = form.Pengkajian_Kepala_Keterangan;
    this.Pengkajian_Mata = form.Pengkajian_Mata;
    this.Pengkajian_Mata_Keterangan = form.Pengkajian_Mata_Keterangan;
    this.Pengkajian_Tht = form.Pengkajian_Tht;
    this.Pengkajian_Tht_Keterangan = form.Pengkajian_Tht_Keterangan;
    this.Pengkajian_Oedem = form.Pengkajian_Oedem;
    this.Pengkajian_Oedem_Keterangan = form.Pengkajian_Oedem_Keterangan;
    this.Pengkajian_Mulut = form.Pengkajian_Mulut;
    this.Pengkajian_Mulut_Keterangan = form.Pengkajian_Mulut_Keterangan;
    this.Pengkajian_Leher = form.Pengkajian_Leher;
    this.Pengkajian_Leher_Keterangan = form.Pengkajian_Leher_Keterangan;
    this.Pengkajian_Jantung = form.Pengkajian_Jantung;
    this.Pengkajian_Jantung_Keterangan = form.Pengkajian_Jantung_Keterangan;
    this.Pengkajian_Paru = form.Pengkajian_Paru;
    this.Pengkajian_Paru_Keterangan = form.Pengkajian_Paru_Keterangan;
    this.Pengkajian_Dada = form.Pengkajian_Dada;
    this.Pengkajian_Dada_Keterangan = form.Pengkajian_Dada_Keterangan;
    this.Pengkajian_Perut = form.Pengkajian_Perut;
    this.Pengkajian_Perut_Keterangan = form.Pengkajian_Perut_Keterangan;
    this.Pengkajian_Urogenital = form.Pengkajian_Urogenital;
    this.Pengkajian_Urogenital_Keterangan = form.Pengkajian_Urogenital_Keterangan;
    this.Pengkajian_Anggota_Gerak = form.Pengkajian_Anggota_Gerak;
    this.Pengkajian_Anggota_Gerak_Keterangan = form.Pengkajian_Anggota_Gerak_Keterangan;
    this.Pengkajian_Status_Neurologis = form.Pengkajian_Status_Neurologis;
    this.Pengkajian_Status_Neurologis_Keterangan = form.Pengkajian_Status_Neurologis_Keterangan;
    this.Pengkajian_Muskulos_Keletal = form.Pengkajian_Muskulos_Keletal;
    this.Pengkajian_Muskulos_Keletal_Keterangan = form.Pengkajian_Muskulos_Keletal_Keterangan;
    this.Pengkajian_Palpebra_Inferior = form.Pengkajian_Palpebra_Inferior;
    this.Pengkajian_Palpebra_Inferior_Keterangan = form.Pengkajian_Palpebra_Inferior_Keterangan;
    this.Pengkajian_Palpebra_Superior = form.Pengkajian_Palpebra_Superior;
    this.Pengkajian_Palpebra_Superior_Keterangan = form.Pengkajian_Palpebra_Superior_Keterangan;
    this.Pengkajian_Conj_Tarsal_Inferior = form.Pengkajian_Conj_Tarsal_Inferior;
    this.Pengkajian_Conj_Tarsal_Inferior_Keterangan = form.Pengkajian_Conj_Tarsal_Inferior_Keterangan;
    this.Pengkajian_Conj_Tarsal_Superior = form.Pengkajian_Conj_Tarsal_Superior;
    this.Pengkajian_Conj_Tarsal_Superior_Keterangan = form.Pengkajian_Conj_Tarsal_Superior_Keterangan;
    this.Pengkajian_Conj_Bulbi = form.Pengkajian_Conj_Bulbi;
    this.Pengkajian_Conj_Bulbi_Keterangan = form.Pengkajian_Conj_Bulbi_Keterangan;
    this.Pengkajian_Posisi = form.Pengkajian_Posisi;
    this.Pengkajian_Posisi_Keterangan = form.Pengkajian_Posisi_Keterangan;
    this.Pengkajian_Pergerakan = form.Pengkajian_Pergerakan;
    this.Pengkajian_Pergerakan_Keterangan = form.Pengkajian_Pergerakan_Keterangan;
    this.Pengkajian_Funduscopy = form.Pengkajian_Funduscopy;
    this.Pengkajian_Funduscopy_Keterangan = form.Pengkajian_Funduscopy_Keterangan;
    this.Pengkajian_Canthal_Lateral = form.Pengkajian_Canthal_Lateral;
    this.Pengkajian_Canthal_Lateral_Keterangan = form.Pengkajian_Canthal_Lateral_Keterangan;
    this.Pengkajian_Canthal_Medial = form.Pengkajian_Canthal_Medial;
    this.Pengkajian_Canthal_Medial_Keterangan = form.Pengkajian_Canthal_Medial_Keterangan;
    this.Pengkajian_Sclera = form.Pengkajian_Sclera;
    this.Pengkajian_Sclera_Keterangan = form.Pengkajian_Sclera_Keterangan;
    this.Data_Objektif_Lain = form.Data_Objektif_Lain;
    this.Pengkajian_Cornea = form.Pengkajian_Cornea;
    this.Pengkajian_Cornea_Keterangan = form.Pengkajian_Cornea_Keterangan;
    this.Pengkajian_Coa = form.Pengkajian_Coa;
    this.Pengkajian_Coa_Keterangan = form.Pengkajian_Coa_Keterangan;
    this.Pengkajian_Pupil = form.Pengkajian_Pupil;
    this.Pengkajian_Pupil_Keterangan = form.Pengkajian_Pupil_Keterangan;
    this.Pengkajian_Iris = form.Pengkajian_Iris;
    this.Pengkajian_Iris_Keterangan = form.Pengkajian_Iris_Keterangan;
    this.Pengkajian_Vitreous = form.Pengkajian_Vitreous;
    this.Pengkajian_Vitreous_Keterangan = form.Pengkajian_Vitreous_Keterangan;
    this.Pengkajian_Lensa = form.Pengkajian_Lensa;
    this.Pengkajian_Lensa_Keterangan = form.Pengkajian_Lensa_Keterangan;
    this.Pengkajian_Retina = form.Pengkajian_Retina;
    this.Pengkajian_Retina_Keterangan = form.Pengkajian_Retina_Keterangan;
    this.Pemeriksaan_Penunjang = form.Pemeriksaan_Penunjang;
    this.Diagnosa = form.Diagnosa;
    this.Rencana_Pengobatan = form.Rencana_Pengobatan;
    this.Gambar_Mata_OD = form.Gambar_Mata_OD;
    this.Gambar_Mata_OS = form.Gambar_Mata_OS;
    this.Gambar_Retina_OD = form.Gambar_Retina_OD;
    this.Gambar_Retina_OS = form.Gambar_Retina_OS;
    this.Pediatrik = form.Pediatrik;
    this.Submit_Pediatrik = form.Submit_Pediatrik;
    this.Image_1 = form.Image_1;
    this.Image_2 = form.Image_2;
    this.Resep = form.Resep && Array.isArray(form.Resep) ? form.Resep.map(c => new Prescription(c)) : [];
    this.Tanggal = form.Tanggal;
    this.TTD_Dokter = form.TTD_Dokter;
    this.ID_Dokter = form.ID_Dokter;
    this.Nama_Dokter = form.Nama_Dokter;
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Petugas = form.Nama_Petugas;
    this.No_Berobat = form.No_Berobat;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
  }
}

export interface IInpatientMedicalNoteForm extends IDataModel {
  form: IInpatientMedicalNoteForm;
  ews: INursingEarlyWarning;
  asesmen: IAssessmentUgdFormModel;
  inform_consent: IProvisionOfInformationFormModel;
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>
  paket_obat: Array<IMedsPackage>
  pharmacy: IInpatientMedsRedeem;
  visits: Array<IDoctorVisit>;
}

export class InpatientMedicalNote extends DataModel {
  form?: InpatientMedicalNoteForm;
  ews?: INursingEarlyWarning;
  asesmen?: IAssessmentUgdFormModel;
  inform_consent?: IProvisionOfInformationFormModel;
  obat: Array<IMedicine>;
  aturan_pakai: Array<IHowToUse>
  paket_obat: Array<IMedsPackage>
  pharmacy: IInpatientMedsRedeem;
  visits: Array<IDoctorVisit>;
  constructor(model: IInpatientMedicalNoteForm) {
    super(model);
    if (model.form) {
      this.form = new InpatientMedicalNoteForm(model.form);
    }
    if (model.ews) {
      this.ews = model.ews;
    }
    if (model.asesmen) {
      this.asesmen = model.asesmen;
    }
    if (model.inform_consent) {
      this.inform_consent = model.inform_consent;
    }
    this.obat = model.obat;
    this.aturan_pakai = model.aturan_pakai;
    this.paket_obat = model.paket_obat;
    this.pharmacy = model.pharmacy;
    this.visits = model.visits && Array.isArray(model.visits) ? model.visits.map(c => new DoctorVisit(c)) : [];
  }
}
