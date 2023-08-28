export interface IDisplayModel {
  CallQueueNo: string;
  Code: number;
  CreatedDate: string;
  IdDokter: string;
  IsNamePlay?: number;
  IsNumberPlay?: number;
  MedicalRecordNo: string;
  PatientName: string;
  QueuePlaceName: string;
  QueuePlaceSound?: string;
  QueueStatus?: string;
  TipePelayanan?: string;
  Visit: number;
}

export class DisplayModel {
  CallQueueNo: string;
  Code: number;
  CreatedDate: string;
  IdDokter: string;
  IsNamePlay?: number;
  IsNumberPlay?: number;
  MedicalRecordNo: string;
  PatientName: string;
  QueuePlaceName: string;
  QueuePlaceSound?: string;
  QueueStatus?: string;
  TipePelayanan?: string;
  Visit: number;

  constructor(waitingPatient: IDisplayModel) {
    this.CallQueueNo = waitingPatient.CallQueueNo;
    this.Code = waitingPatient.Code;
    this.CreatedDate = waitingPatient.CreatedDate;
    this.IdDokter = waitingPatient.IdDokter;
    this.IsNamePlay = waitingPatient.IsNamePlay;
    this.IsNumberPlay = waitingPatient.IsNumberPlay;
    this.MedicalRecordNo = waitingPatient.MedicalRecordNo;
    this.PatientName = waitingPatient.PatientName;
    this.QueuePlaceName = waitingPatient.QueuePlaceName;
    this.QueuePlaceSound = waitingPatient.QueuePlaceSound;
    this.QueueStatus = waitingPatient.QueueStatus;
    this.TipePelayanan = waitingPatient.TipePelayanan;
    this.Visit = waitingPatient.Visit;
  }

  isCallAble() {
    return this.QueueStatus !== 'CALL';
  }

  isRecallAble() {
    return this.QueueStatus === 'CALL' || this.QueueStatus?.substring(0, 6) === 'RECALL';
  }

  // isOnCall() {
  //   return this.QueueStatus === 'CALL' || this.QueueStatus?.substring(0, 6) === 'RECALL';
  // }

  isSkipAble() {
    return this.QueueStatus !== 'SKIP';
  }

  isFinishAble() {
    return this.QueueStatus !== 'FINISH';
  }

  isTemporaryDisplay() {
    return this.IsNamePlay === undefined && this.QueueStatus === 'START';
  }
  static createFromJson(json: IDisplayModel): DisplayModel {
    return new DisplayModel(json);
  }
}
