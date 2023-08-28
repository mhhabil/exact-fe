import {
  CreatePainMonitoringRequest,
  ICreatePainMonitoringRequest,
} from '@modules/inpatient/pain-monitoring/requests/create-pain-monitoring.request';

export interface IUpdatePainMonitoringRequest extends ICreatePainMonitoringRequest {
  ID: string;
  emr_id : string;
}

export class UpdatePainMonitoringRequest extends CreatePainMonitoringRequest {
  ID: string;
  emr_id : string;

  constructor(request: IUpdatePainMonitoringRequest) {
    super(request);
    this.ID = request.ID;
    this.emr_id = request.emr_id;
  }

  static createFromJson(json: IUpdatePainMonitoringRequest) {
    return new UpdatePainMonitoringRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, id: this.ID, emr_id : this.emr_id};
  }
}
