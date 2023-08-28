import { IPatientModel } from "@src/shared/model";

export interface IRequestMRHistoryRequestModel {
  id: string;
  MR_List: Array<string>;
  Purpose: string;
  Created_At: string;
  Created_By: string;
  Request_ID: string;
  Requested_By?: string;
  Updated_At: string;
  Updated_By: string;
  Approved_At?: string;
  Approved_By?: string;
  Branch_Code: string;
  Created_By_Name: string;
  Requested_By_Name?: string;
  Updated_By_Name: string;
  Approved_By_Name?: string;
  Approval_Status: string;
  Expired_At?: string;
  Requested_At?: string;
};

export class RequestMRHistoryRequestModel {
  id: string;
  MR_List: Array<string>;
  Purpose: string;
  Created_At: string;
  Created_By: string;
  Request_ID: string;
  Requested_By?: string;
  Updated_At: string;
  Updated_By: string;
  Approved_At?: string;
  Approved_By?: string;
  Branch_Code: string;
  Created_By_Name: string;
  Requested_By_Name?: string;
  Updated_By_Name: string;
  Approved_By_Name?: string;
  Approval_Status: string;
  Expired_At?: string;
  Requested_At?: string;

  constructor(model: IRequestMRHistoryRequestModel) {
    this.id = model.id;
    this.MR_List = model.MR_List && Array.isArray(model.MR_List) ? model.MR_List : [];
    this.Purpose = model.Purpose;
    this.Created_At = model.Created_At;
    this.Created_By = model.Created_By;
    this.Request_ID = model.Request_ID;
    this.Requested_By = model.Requested_By;
    this.Updated_At = model.Updated_At;
    this.Updated_By = model.Updated_By;
    this.Approved_At = model.Approved_At;
    this.Approved_By = model.Approved_By;
    this.Branch_Code = model.Branch_Code;
    this.Created_By_Name = model.Created_By_Name;
    this.Requested_By_Name = model.Requested_By_Name;
    this.Updated_By_Name = model.Updated_By_Name;
    this.Approved_By_Name = model.Approved_By_Name;
    this.Approval_Status = model.Approval_Status;
    this.Expired_At = model.Expired_At;
    this.Requested_At = model.Requested_At;
  }
}

export interface IRequestMRHistoryModel {
  total: number;
  totalFiltered: number;
  records: Array<IRequestMRHistoryRequestModel>;
  currentPage: number;
  totalPage: number;
}

export class RequestMRHistoryModel {
  total: number;
  totalFiltered: number;
  records: Array<IRequestMRHistoryRequestModel>;
  currentPage: number;
  totalPage: number;

  constructor(model: IRequestMRHistoryModel) {
    this.total = model.total;
    this.totalFiltered = model.totalFiltered;
    this.records = model.records && Array.isArray(model.records) ? model.records.map(c => new RequestMRHistoryRequestModel(c)) : [];
    this.currentPage = model.currentPage;
    this.totalPage = model.totalPage;
  }
}

export interface IRecordMR {
  No_MR: string;
  Pasien: IPatientModel;
}

export class RecordMR {
  No_MR: string;
  Pasien: IPatientModel;

  constructor(model: IRecordMR) {
    this.No_MR = model.No_MR;
    this.Pasien = model.Pasien;
  }
}

export interface IListMR {
  total: number;
  totalFiltered: number;
  records: Array<IRecordMR>;
  currentPage: number;
  totalPage: number;
}

export class ListMR {
  total: number;
  totalFiltered: number;
  records: Array<IRecordMR>;
  currentPage: number;
  totalPage: number;

  constructor(model: IListMR) {
    this.total = model.total;
    this.totalFiltered = model.totalFiltered;
    this.records = model.records && Array.isArray(model.records) ? model.records.map(c => new RecordMR(c)) : [];
    this.currentPage = model.currentPage;
    this.totalPage = model.totalPage;
  }
}
