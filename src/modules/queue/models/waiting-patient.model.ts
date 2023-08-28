export interface IWaitingPatientModel {
  CallQueueNo: string;
  Code: number;
  CreatedDate: string;
  IdDokter: string;
  LastQueueStatus: string;
  MedicalRecordNo: string;
  PatientName: string;
  Priority: number;
  QueuePlaceId: string;
  QueuePlaceName: string;
  QueueType: string;
  StartDate: string;
  Visit: number;
}

export class WaitingPatientModel {
  CallQueueNo: string;
  Code: number;
  CreatedDate: string;
  IdDokter: string;
  LastQueueStatus: string;
  MedicalRecordNo: string;
  PatientName: string;
  Priority: number;
  QueuePlaceId: string;
  QueuePlaceName: string;
  QueueType: string;
  StartDate: string;
  Visit: number;

  constructor(waitingPatient: IWaitingPatientModel) {
    this.CallQueueNo = waitingPatient.CallQueueNo;
    this.Code = waitingPatient.Code;
    this.CreatedDate = waitingPatient.CreatedDate;
    this.IdDokter = waitingPatient.IdDokter;
    this.LastQueueStatus = waitingPatient.LastQueueStatus;
    this.MedicalRecordNo = waitingPatient.MedicalRecordNo;
    this.PatientName = waitingPatient.PatientName;
    this.Priority = waitingPatient.Priority;
    this.QueuePlaceId = waitingPatient.QueuePlaceId;
    this.QueuePlaceName = waitingPatient.QueuePlaceName;
    this.QueueType = waitingPatient.QueueType;
    this.StartDate = waitingPatient.StartDate;
    this.Visit = waitingPatient.Visit;
  }

  isCallAble() {
    return this.LastQueueStatus !== 'CALL';
  }

  isRecallAble() {
    return this.LastQueueStatus === 'CALL' || this.LastQueueStatus?.substring(0, 6) === 'RECALL';
  }

  isFreeToCall() {
    return this.LastQueueStatus !== 'CALL' && this.LastQueueStatus?.substring(0, 6) !== 'RECALL';
  }

  isCallableInAnotherStation(stationId: string) {
    return (this.LastQueueStatus === 'CALL' || this.LastQueueStatus?.substring(0, 6) === 'RECALL') && this.QueuePlaceId !== stationId;
  }

  static createFromJson(json: IWaitingPatientModel): WaitingPatientModel {
    return new WaitingPatientModel(json);
  }
}
