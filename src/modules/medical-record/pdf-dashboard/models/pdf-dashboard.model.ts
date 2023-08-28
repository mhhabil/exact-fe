import { IPatientModel } from "@src/shared/model";

export interface IRecord {
  Version: number;
  URL: string;
  Form_Name: string;
  Visit_Date: string;
  Created_At: string;
  Created_By: string;
  Created_By_Name: string;
  EMR_ID: string;
  SignURL: string;
}

export class Record {
  Version: number;
  URL: string;
  Form_Name: string;
  Visit_Date: string;
  Created_At: string;
  Created_By: string;
  Created_By_Name: string;
  EMR_ID: string;
  SignURL: string;

  constructor(req: IRecord) {
    this.Version = req.Version;
    this.URL = req.URL;
    this.Form_Name = req.Form_Name;
    this.Visit_Date = req.Visit_Date;
    this.Created_At = req.Created_At;
    this.Created_By = req.Created_By;
    this.Created_By_Name = req.Created_By_Name;
    this.EMR_ID = req.EMR_ID;
    this.SignURL = req.SignURL;
  }
}

export interface IPDFDashboard {
  total: number;
  totalFiltered: number;
  EMR_ID: string;
  pasien: IPatientModel;
  records: IRecord[];
  currentPage: number;
  totalPage: number;
}

export class PDFDashboard {
  total: number;
  totalFiltered: number;
  EMR_ID: string;
  pasien: IPatientModel;
  records: Record[];
  currentPage: number;
  totalPage: number;

  constructor(req: IPDFDashboard) {
    this.total = req.total;
    this.totalFiltered = req.totalFiltered;
    this.EMR_ID = req.EMR_ID;
    this.pasien = req.pasien;
    this.records = (req.records && Array.isArray(req.records)) ? req.records : [];
    this.currentPage = req.currentPage;
    this.totalPage = req.totalPage;
  }
}

export interface IPDFSep {
  url: string;
}

export class PDFSep {
  url: string;

  constructor(req: IPDFSep) {
    this.url = req.url;
  }
}
