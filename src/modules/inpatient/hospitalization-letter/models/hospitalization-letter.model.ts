import { DataModel, IDataModel } from '@shared/model';
import { IProvisionOfInformationFormModel, ProvisionOfInformationFormModel } from '@src/modules/outpatient/inform-consent/models/inform-consent.model';

export interface IHospitalizationLetterForm {
  Id_Dokter: string;
  ID_Dokter_Rawat_Inap: string;
  Tanggal_Tanda_Tangan: string;
  Indikasi_Opname: string;
  Anjuran_Opname: string;
  Diagnosa: string;
  Lama_Opname: string;
  Lama_Satuan: string;
  TTD_Dokter: string;
  Nama_Dokter : string;
  Nama_Dokter_Rawat_Inap : string;
  Waktu: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Preventif_Check: string;
  Paliatif_Check: string;
  Kuratif_Check: string;
  Rehabilitatif_Check: string;
}

export class HospitalizationLetterForm {
  Id_Dokter: string;
  ID_Dokter_Rawat_Inap: string;
  Tanggal_Tanda_Tangan: string;
  Indikasi_Opname: string;
  Anjuran_Opname: string;
  Diagnosa: string;
  Lama_Opname: string;
  Lama_Satuan: string;
  TTD_Dokter: string;
  Nama_Dokter : string;
  Nama_Dokter_Rawat_Inap : string;
  Waktu: string;
  ID_Petugas: string;
  Nama_Petugas: string;
  Updated_At: string;
  Updated_By: string;
  Preventif_Check: string;
  Paliatif_Check: string;
  Kuratif_Check: string;
  Rehabilitatif_Check: string;
  constructor(form: IHospitalizationLetterForm) {
    this.Id_Dokter = form.Id_Dokter;
    this.ID_Dokter_Rawat_Inap = form.ID_Dokter_Rawat_Inap;
    this.Tanggal_Tanda_Tangan = form.Tanggal_Tanda_Tangan;
    this.Indikasi_Opname = form.Indikasi_Opname;
    this.Anjuran_Opname = form.Anjuran_Opname;
    this.Diagnosa = form.Diagnosa;
    this.Lama_Opname = form.Lama_Opname;
    this.Lama_Satuan = form.Lama_Satuan;
    this.TTD_Dokter = form.TTD_Dokter;
    this.Nama_Dokter = form.Nama_Dokter;
    this.Nama_Dokter_Rawat_Inap = form.Nama_Dokter_Rawat_Inap;
    this.Waktu = form.Waktu;
    this.ID_Petugas = form.ID_Petugas;
    this.Nama_Petugas = form.Nama_Petugas;
    this.Updated_At = form.Updated_At;
    this.Updated_By = form.Updated_By;
    this.Preventif_Check = form.Preventif_Check;
    this.Paliatif_Check = form.Paliatif_Check;
    this.Kuratif_Check = form.Kuratif_Check;
    this.Rehabilitatif_Check = form.Rehabilitatif_Check;
  }
}

export interface IHospitalizationLetterForm extends IDataModel {
  form: IHospitalizationLetterForm;
  inform_consent: IProvisionOfInformationFormModel;
}

export class HospitalizationLetter extends DataModel {
  form?: HospitalizationLetterForm;
  inform_consent?: IProvisionOfInformationFormModel;
  constructor(getForm: IHospitalizationLetterForm) {
    super(getForm);
    if (getForm) {
      this.form = new HospitalizationLetterForm(getForm.form);
      this.inform_consent = new ProvisionOfInformationFormModel(getForm.inform_consent);
    }
  }
}

