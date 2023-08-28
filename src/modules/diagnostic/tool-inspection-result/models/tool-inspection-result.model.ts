
export interface IInstance {
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

export class Instance {
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

  constructor(req: IInstance) {
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

export interface IDicomObject {
  EMR_ID:           string;
  MRNumber: string;
  DoctorName: string;
  TreatmentDate: string;
  StudyInstanceUID: string;
  PatientName:      string;
  TreatmentNumber: number;
  Instance:         Array<Instance>;
}

export class DicomObject {
  EMR_ID:           string;
  MRNumber: string;
  DoctorName: string;
  TreatmentDate: string;
  StudyInstanceUID: string;
  PatientName:      string;
  TreatmentNumber: number;
  Instance:         Array<Instance>;

  constructor(req: IDicomObject) {
    this.EMR_ID = req.EMR_ID;
    this.MRNumber = req.MRNumber;
    this.DoctorName = req.DoctorName;
    this.TreatmentDate = req.TreatmentDate;
    this.StudyInstanceUID = req.EMR_ID;
    this.PatientName = req.PatientName;
    this.TreatmentNumber = req.TreatmentNumber;
    this.Instance = req.Instance && Array.isArray(req.Instance) ? req.Instance : [];
  }
}

export interface IDicomSearch {
  No_MR: string;
  Treatment_Episode: Array<IDicomObject>
}

export class DicomSearch {
  No_MR: string;
  Treatment_Episode: Array<IDicomObject>

  constructor(req: IDicomSearch) {
    this.No_MR = req.No_MR;
    this.Treatment_Episode = req.Treatment_Episode && Array.isArray(req.Treatment_Episode) ? req.Treatment_Episode : [];
  }
}

export interface IModalityDetail {
  modality_id: string;
  modality_code: string;
  modality_name: string;
}

export interface IModality {
  modality: Array<IModalityDetail>
}

export class Modality {
  modality: Array<IModalityDetail>

  constructor(req: IModality) {
    this.modality = req.modality && Array.isArray(req.modality) ? req.modality : [];
  }
}

export const listAlat = [
  {
    id: '1',
    name: 'Biometri',
    code: 'BIO',
  },
  {
    id: '2',
    name: 'USG',
    code: 'USG',
  },
  {
    id: '3',
    name: 'ARK',
    code: 'ARK',
  },
  {
    id: '4',
    name: 'ARK Portable',
    code: 'ARKP',
  },
  {
    id: '5',
    name: 'Foto Fundus',
    code: 'FF',
  },
  {
    id: '6',
    name: 'Lapang Pandang',
    code: 'LP',
  },
  {
    id: '7',
    name: 'OCT PUPIL',
    code: 'OCTP',
  },
  {
    id: '8',
    name: 'OCT RETINA',
    code: 'OCTR',
  },
  {
    id: '9',
    name: 'Spekular',
    code: 'LP',
  },
  {
    id: '10',
    name: 'Orb Scan',
    code: 'OS',
  },
]
