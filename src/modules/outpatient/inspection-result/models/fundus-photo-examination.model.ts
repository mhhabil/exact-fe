import { DataModel, IDataModel } from '@shared/model';

export interface IFundusPhotoExaminationFormModel {
    Od_Pvd: string;
    Os_Pvd: string;
    Od_Batas: string;
    Od_Break: string;
    Od_Warna: string;
    Os_Batas: string;
    Os_Break: string;
    Os_Warna: string;
    Od_Retina: string;
    Os_Retina: string;
    ID_Petugas: string;
    Kesimpulan: string;
    Kesimpulan_Opt: string;
    Od_Cupping: string;
    Os_Cupping: string;
    Updated_At: string;
    Updated_By: string;
    Od_Vitreous: string;
    Os_Vitreous: string;
    TTD_Tanggal: string;
    Nama_Petugas: string;
    Od_Obstruksi: string;
    Os_Obstruksi: string;
    Od_Pendarahan: string;
    Od_Tortovsity: string;
    Os_Pendarahan: string;
    Os_Tortovsity: string;
    Od_Av_Crossing: string;
    Os_Av_Crossing: string;
    Dokter_Pemeriksa_Id: string;
    Perawat_Pemeriksa_Id: string;
    TTD_Dokter_Pemeriksa: string;
    Dokter_Pemeriksa_Nama: string;
    TTD_Perawat_Pemeriksa: string;
    Od_Vitreous_Pendarahan: string;
    Os_Vitreous_Pendarahan: string;
    Perawat_Pemeriksa_Nama: string;
}

export class FundusPhotoExaminationFormModel {
    Od_Pvd: string;
    Os_Pvd: string;
    Od_Batas: string;
    Od_Break: string;
    Od_Warna: string;
    Os_Batas: string;
    Os_Break: string;
    Os_Warna: string;
    Od_Retina: string;
    Os_Retina: string;
    ID_Petugas: string;
    Kesimpulan: string;
    Kesimpulan_Opt: string;
    Od_Cupping: string;
    Os_Cupping: string;
    Updated_At: string;
    Updated_By: string;
    Od_Vitreous: string;
    Os_Vitreous: string;
    TTD_Tanggal: string;
    Nama_Petugas: string;
    Od_Obstruksi: string;
    Os_Obstruksi: string;
    Od_Pendarahan: string;
    Od_Tortovsity: string;
    Os_Pendarahan: string;
    Os_Tortovsity: string;
    Od_Av_Crossing: string;
    Os_Av_Crossing: string;
    Dokter_Pemeriksa_Id: string;
    Perawat_Pemeriksa_Id: string;
    TTD_Dokter_Pemeriksa: string;
    Dokter_Pemeriksa_Nama: string;
    TTD_Perawat_Pemeriksa: string;
    Od_Vitreous_Pendarahan: string;
    Os_Vitreous_Pendarahan: string;
    Perawat_Pemeriksa_Nama: string;

    constructor(request: IFundusPhotoExaminationFormModel) {
      this.Od_Pvd = request.Od_Pvd;
      this.Os_Pvd = request.Os_Pvd;
      this.Od_Batas = request.Od_Batas;
      this.Od_Break = request.Od_Break;
      this.Od_Warna = request.Od_Warna;
      this.Os_Batas = request.Os_Batas;
      this.Os_Break = request.Os_Break;
      this.Os_Warna = request.Os_Warna;
      this.Od_Retina = request.Od_Retina;
      this.Os_Retina = request.Os_Retina;
      this.ID_Petugas = request.ID_Petugas;
      this.Kesimpulan = request.Kesimpulan;
      this.Kesimpulan_Opt = request.Kesimpulan_Opt;
      this.Od_Cupping = request.Od_Cupping;
      this.Os_Cupping = request.Os_Cupping;
      this.Updated_At = request.Updated_At;
      this.Updated_By = request.Updated_By;
      this.Od_Vitreous = request.Od_Vitreous;
      this.Os_Vitreous = request.Os_Vitreous;
      this.TTD_Tanggal = request.TTD_Tanggal;
      this.Nama_Petugas = request.Nama_Petugas;
      this.Od_Obstruksi = request.Od_Obstruksi;
      this.Os_Obstruksi = request.Os_Obstruksi;
      this.Od_Pendarahan = request.Od_Pendarahan;
      this.Od_Tortovsity = request.Od_Tortovsity;
      this.Os_Pendarahan = request.Os_Pendarahan;
      this.Os_Tortovsity = request.Os_Tortovsity;
      this.Od_Av_Crossing = request.Od_Av_Crossing;
      this.Os_Av_Crossing = request.Os_Av_Crossing;
      this.Dokter_Pemeriksa_Id = request.Dokter_Pemeriksa_Id;
      this.Perawat_Pemeriksa_Id = request.Perawat_Pemeriksa_Id;
      this.TTD_Dokter_Pemeriksa = request.TTD_Dokter_Pemeriksa;
      this.Dokter_Pemeriksa_Nama = request.Dokter_Pemeriksa_Nama;
      this.TTD_Perawat_Pemeriksa = request.TTD_Perawat_Pemeriksa;
      this.Od_Vitreous_Pendarahan = request.Od_Vitreous_Pendarahan;
      this.Os_Vitreous_Pendarahan = request.Os_Vitreous_Pendarahan;
      this.Perawat_Pemeriksa_Nama = request.Perawat_Pemeriksa_Nama;
    }
}

export interface IFundusPhotoExaminationModel extends IDataModel {
    form: any;
  }

export class FundusPhotoExaminationModel extends DataModel {
    form: any;

    constructor(usg: IFundusPhotoExaminationModel) {
      super(usg);
      this.form = usg.form;
    }

    static createFromJson(json: IFundusPhotoExaminationModel) {
      return new FundusPhotoExaminationModel(json);
    }
}