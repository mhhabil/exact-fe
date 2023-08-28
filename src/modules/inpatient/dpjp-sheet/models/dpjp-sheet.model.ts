import { DataModel, IDataModel } from '@shared/model';
import { ProvisionOfInformationFormModel } from '@src/modules/outpatient/inform-consent/models/inform-consent.model';


export interface ICpptForm {
  Data_S: string;
  }

export class CpptForm {
    Data_S: string;
    constructor(cppt: ICpptForm) {
      this.Data_S = cppt.Data_S;
    }
}

export interface ITipeTagihanForm {
  id : string;
  name : string;
  }

export class TipeTagihanForm {
    id : string;
    name : string;
    constructor(data : ITipeTagihanForm) {
      this.id = data.id;
      this.name = data.name;
    }
}

export interface IDpjpSheetForm {
  Pasien_Kategori: string;
  Pasien_Diagnosis: string;
  TTD_Dokter_Utama: string;
  Dokter_Utama: string;
  TTD_Dokter_Ppds: string;
  Ppds: string;
  Sip: string;
  TTD_Dokter_Ruangan: string;
  Dokter_Ruangan: string;
  Tanggal_Rawat_1: string;
  TTD_Dokter_Dpjp_1: string;
  Dokter_Dpjp_1: string;
  Tanggal_Rawat_2: string;
  TTD_Dokter_Dpjp_2: string;
  Dokter_Dpjp_2: string;
  Tanggal_Rawat_3: string;
  TTD_Dokter_Dpjp_3: string;
  Dokter_Dpjp_3: string;
  Tanggal_Rawat_4: string;
  TTD_Dokter_Dpjp_4: string;
  Dokter_Dpjp_4: string;
  Tanggal_Peralihan: string;
  Alasan_Peralihan: string;
  Peralihan_Dpjp: string;
  TTD_Dokter_Peralihan: string;
  Dokter_Peralihan: string;
  Dokter_Dpjp_1_Nama: string;
  Dokter_Dpjp_2_Nama: string;
  Dokter_Dpjp_3_Nama: string;
  Dokter_Dpjp_4_Nama: string;
  Dokter_Dpjp_Utama_Nama : string;
  Dokter_Dpjp_Peralihan_Nama: string;
  Dokter_Ruangan_Nama: string;
  Dokter_Ppds_Nama: string;
  Dokter_Dpjp_1_Id: string;
  Dokter_Dpjp_2_Id: string;
  Dokter_Dpjp_3_Id: string;
  Dokter_Dpjp_4_Id: string;
  Dokter_Dpjp_Utama_Id : string;
  Dokter_Dpjp_Peralihan_Id: string;
  Dokter_Ruangan_Id: string;
  Dokter_Ppds_Id: string;
  Waktu: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
}

export class DpjpSheetForm {
  Pasien_Kategori: string;
  Pasien_Diagnosis: string;
  TTD_Dokter_Utama: string;
  Dokter_Utama: string;
  TTD_Dokter_Ppds: string;
  Ppds: string;
  Sip:  string;
  TTD_Dokter_Ruangan: string;
  Dokter_Ruangan : string;
  Tanggal_Rawat_1: string;
  TTD_Dokter_Dpjp_1 : string;
  Dokter_Dpjp_1: string;
  Tanggal_Rawat_2: string;
  TTD_Dokter_Dpjp_2 : string;
  Dokter_Dpjp_2 : string;
  Tanggal_Rawat_3 : string;
  TTD_Dokter_Dpjp_3 : string;
  Dokter_Dpjp_3 : string;
  Tanggal_Rawat_4 : string;
  TTD_Dokter_Dpjp_4 : string;
  Dokter_Dpjp_4: string;
  Tanggal_Peralihan: string;
  Alasan_Peralihan: string;
  Peralihan_Dpjp: string;
  TTD_Dokter_Peralihan : string;
  Dokter_Peralihan : string;
  Dokter_Dpjp_1_Nama: string;
  Dokter_Dpjp_2_Nama: string;
  Dokter_Dpjp_3_Nama: string;
  Dokter_Dpjp_4_Nama: string;
  Dokter_Dpjp_Utama_Nama : string;
  Dokter_Dpjp_Peralihan_Nama: string;
  Dokter_Ruangan_Nama: string;
  Dokter_Ppds_Nama: string;
  Dokter_Dpjp_1_Id: string;
  Dokter_Dpjp_2_Id: string;
  Dokter_Dpjp_3_Id: string;
  Dokter_Dpjp_4_Id: string;
  Dokter_Dpjp_Utama_Id : string;
  Dokter_Dpjp_Peralihan_Id: string;
  Dokter_Ruangan_Id: string;
  Dokter_Ppds_Id: string;
  Waktu: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  constructor(form: IDpjpSheetForm) {
    this.Pasien_Kategori = form.Pasien_Kategori;
    this.Pasien_Diagnosis = form.Pasien_Diagnosis;
    this.TTD_Dokter_Utama = form.TTD_Dokter_Utama;
    this.Dokter_Utama = form.Dokter_Utama;
    this.TTD_Dokter_Ppds = form.TTD_Dokter_Ppds;
    this.Ppds = form.Ppds;
    this.Sip = form.Sip;
    this.TTD_Dokter_Ruangan = form.TTD_Dokter_Ruangan;
    this.Dokter_Ruangan  = form.Dokter_Ruangan;
    this.Tanggal_Rawat_1 = form.Tanggal_Rawat_1;
    this.TTD_Dokter_Dpjp_1  = form.TTD_Dokter_Dpjp_1;
    this.Dokter_Dpjp_1 = form.Dokter_Dpjp_1;
    this.Tanggal_Rawat_2 = form.Tanggal_Rawat_2;
    this.TTD_Dokter_Dpjp_2  = form.TTD_Dokter_Dpjp_2;
    this.Dokter_Dpjp_2  = form.Dokter_Dpjp_2;
    this.Tanggal_Rawat_3  = form.Tanggal_Rawat_3;
    this.TTD_Dokter_Dpjp_3  = form.TTD_Dokter_Dpjp_3;
    this.Dokter_Dpjp_3  = form.Dokter_Dpjp_3;
    this.Tanggal_Rawat_4  = form.Tanggal_Rawat_4;
    this.TTD_Dokter_Dpjp_4  = form.TTD_Dokter_Dpjp_4;
    this.Dokter_Dpjp_4 = form.Dokter_Dpjp_4;
    this.Tanggal_Peralihan = form.Tanggal_Peralihan;
    this.Alasan_Peralihan = form.Alasan_Peralihan;
    this.Peralihan_Dpjp = form.Peralihan_Dpjp;
    this.TTD_Dokter_Peralihan  = form.TTD_Dokter_Peralihan;
    this.Dokter_Peralihan  = form.Dokter_Peralihan;
    this.Dokter_Dpjp_1_Nama = form.Dokter_Dpjp_1_Nama;
    this.Dokter_Dpjp_2_Nama = form.Dokter_Dpjp_2_Nama;
    this.Dokter_Dpjp_3_Nama = form.Dokter_Dpjp_3_Nama;
    this.Dokter_Dpjp_4_Nama = form.Dokter_Dpjp_4_Nama;
    this.Dokter_Dpjp_Utama_Nama = form.Dokter_Dpjp_Utama_Nama;
    this.Dokter_Dpjp_Peralihan_Nama = form.Dokter_Dpjp_Peralihan_Nama;
    this.Dokter_Ruangan_Nama = form.Dokter_Ruangan_Nama;
    this.Dokter_Ppds_Nama = form.Dokter_Ppds_Nama;
    this.Dokter_Dpjp_1_Id = form.Dokter_Dpjp_1_Id;
    this.Dokter_Dpjp_2_Id = form.Dokter_Dpjp_2_Id;
    this.Dokter_Dpjp_3_Id = form.Dokter_Dpjp_3_Id;
    this.Dokter_Dpjp_4_Id = form.Dokter_Dpjp_4_Id;
    this.Dokter_Dpjp_Utama_Id = form.Dokter_Dpjp_Utama_Id;
    this.Dokter_Dpjp_Peralihan_Id = form.Dokter_Dpjp_Peralihan_Id;
    this.Dokter_Ruangan_Id = form.Dokter_Ruangan_Id;
    this.Dokter_Ppds_Id = form.Dokter_Ppds_Id;
    this.Waktu = form.Waktu;
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
  }
}

export interface IDpjpSheetForm extends IDataModel {
  form: IDpjpSheetForm;
  cppt: CpptForm;
  tipe_tagihan: TipeTagihanForm;
  inform_consent: ProvisionOfInformationFormModel;
}

export class DpjpSheet extends DataModel {
  form?: DpjpSheetForm;
  cppt?: CpptForm;
  tipe_tagihan?: TipeTagihanForm;
  inform_consent?: ProvisionOfInformationFormModel;

  constructor(model: IDpjpSheetForm) {
    super(model);
    if (model.form) {
      this.form = new DpjpSheetForm(model.form);
      this.cppt = new CpptForm(model.cppt);
      this.tipe_tagihan = new TipeTagihanForm(model.tipe_tagihan);
      this.inform_consent = new ProvisionOfInformationFormModel(model.inform_consent);
    }
  }
}
