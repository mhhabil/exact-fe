import { DataModel, IDataModel } from '@shared/model';


export interface IDicomsModel {
  StudyInstanceUID:       string;
  SeriesInstanceUID:      string;
  SOPInstanceUID:         string;
  SOPClassUID:            string;
  PatientName:            string;
  PatientBirthDate:       string;
  PatientSex:             string;
  IssuerOfPatientID:      string;
  InstitutionName:        string;
  StudyID:                string;
  StudyDate:              string;
  StudyTime:              string;
  SeriesDate:             string;
  SeriesTime:             string;
  SeriesDescription:      string;
  Modality:               string;
  ModalityID:             string;
  ModalityName:           string;
  OperatorsName:          string;
  ReferringPhysicianName: string;
  Created_At?:            string;
  Created_By?:            string;
  Created_By_Name?:       string;
  Thumbnail:              string;
  Viewer:                 string;
  PDF?:                   string;
  Original?:              string;
}

export class DicomsModel {
  StudyInstanceUID:       string;
  SeriesInstanceUID:      string;
  SOPInstanceUID:         string;
  SOPClassUID:            string;
  PatientName:            string;
  PatientBirthDate:       string;
  PatientSex:             string;
  IssuerOfPatientID:      string;
  InstitutionName:        string;
  StudyID:                string;
  StudyDate:              string;
  StudyTime:              string;
  SeriesDate:             string;
  SeriesTime:             string;
  SeriesDescription:      string;
  Modality:               string;
  ModalityID:             string;
  ModalityName:           string;
  OperatorsName:          string;
  ReferringPhysicianName: string;
  Created_At?:            string;
  Created_By?:            string;
  Created_By_Name?:       string;
  Thumbnail:              string;
  Viewer:                 string;
  PDF?:                   string;
  Original?:              string;

  constructor(req: IDicomsModel) {
    this.StudyInstanceUID = req.StudyInstanceUID;
    this.SeriesInstanceUID = req.SeriesInstanceUID;
    this.SOPInstanceUID = req.SOPInstanceUID;
    this.SOPClassUID = req.SOPClassUID;
    this.PatientName = req.PatientName;
    this.PatientBirthDate = req.PatientBirthDate;
    this.PatientSex = req.PatientSex;
    this.IssuerOfPatientID = req.IssuerOfPatientID;
    this.InstitutionName = req.InstitutionName;
    this.StudyID = req.StudyID;
    this.StudyDate = req.StudyDate;
    this.StudyTime = req.StudyTime;
    this.SeriesDate = req.SeriesDate;
    this.SeriesTime = req.SeriesTime;
    this.SeriesDescription = req.SeriesDescription;
    this.Modality = req.Modality;
    this.ModalityID = req.ModalityID;
    this.ModalityName = req.ModalityName;
    this.OperatorsName = req.OperatorsName;
    this.ReferringPhysicianName = req.ReferringPhysicianName;
    this.Created_At = req.Created_At;
    this.Created_By = req.Created_By;
    this.Created_By_Name = req.Created_By_Name;
    this.Thumbnail = req.Thumbnail;
    this.Viewer = req.Viewer;
    this.PDF = req.PDF;
    this.Original = req.Original;
  }
}
