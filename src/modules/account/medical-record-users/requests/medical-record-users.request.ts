import { Data } from "@src/modules/history/models/history.model";

export interface IDataRequest {
  ID_Karyawan: string;
  Nama: string;
}

export class DataRequest {
  ID_Karyawan: string;
  Nama: string;

  constructor(req: IDataRequest) {
    this.ID_Karyawan = req.ID_Karyawan;
    this.Nama = req.Nama;
  }

  static createFromJson(json: IDataRequest) {
    return new DataRequest(json);
  }
}

export interface IUpdateMedicalRecordUsersRequest {
  branch_code: string;
  data: Array<IDataRequest>;
}

export class UpdateMedicalRecordUsersRequest {
  branch_code: string;
  data: Array<IDataRequest>;

  constructor(req: IUpdateMedicalRecordUsersRequest) {
    this.branch_code = req.branch_code;
    this.data = req.data && Array.isArray(req.data) ? req.data.map(c => new DataRequest(c)) : [];
  }

  static createFromJson(json: IUpdateMedicalRecordUsersRequest) {
    return new UpdateMedicalRecordUsersRequest(json);
  }
}
