import { DataModel, IDataModel } from "@src/shared/model";

export interface ICheckSchirmerTestFormModel {
    Nama: string;
    Tanggal: string;
    OD: string;
    OS: string;
    Kesimpulan: string;
    ID_Perawat: string;
    ID_Dokter_Pemeriksa: string;
    TTD_Perawat: string;
    TTD_Dokter_Pemeriksa: string;
    Nama_Perawat: string;
    Nama_Dokter_Pemeriksa: string;
    ID_Petugas: string;
    Nama_Petugas: string;
    Updated_At: string;
    Updated_By: string;
}

export class CheckSchirmerTestFormModel {
    Nama: string;
    Tanggal: string;
    OD: string;
    OS: string;
    Kesimpulan: string;
    ID_Perawat: string;
    ID_Dokter_Pemeriksa: string;
    TTD_Perawat: string;
    TTD_Dokter_Pemeriksa: string;
    Nama_Perawat: string;
    Nama_Dokter_Pemeriksa: string;
    ID_Petugas: string;
    Nama_Petugas: string;
    Updated_At: string;
    Updated_By: string;
    constructor(request: ICheckSchirmerTestFormModel) {
      this.Nama = request.Nama;
      this.Tanggal = request.Tanggal;
      this.OD = request.OD;
      this.OS = request.OS;
      this.Kesimpulan = request.Kesimpulan;
      this.ID_Perawat = request.ID_Perawat;
      this.ID_Dokter_Pemeriksa = request.ID_Dokter_Pemeriksa;
      this.TTD_Perawat = request.TTD_Perawat;
      this.TTD_Dokter_Pemeriksa = request.TTD_Dokter_Pemeriksa;
      this.Nama_Perawat = request.Nama_Perawat;
      this.Nama_Dokter_Pemeriksa = request.Nama_Dokter_Pemeriksa;
      this.ID_Petugas = request.ID_Petugas;
      this.Nama_Petugas = request.Nama_Petugas;
      this.Updated_At = request.Updated_At;
      this.Updated_By = request.Updated_By;
    }
}

export interface ICheckSchirmerTestModel extends IDataModel {
    form: any;
}

export class CheckSchirmerTestModel extends DataModel {
    form: any;

    constructor(req: ICheckSchirmerTestModel) {
      super(req);
      this.form = req.form;
    }

    static createFromJson(json: ICheckSchirmerTestModel) {
      return new CheckSchirmerTestModel(json);
    }
}
