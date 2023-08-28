import {
  CreatePainMonitoringRequest,
  ICreatePainMonitoringRequest,
} from '@modules/inpatient/pain-monitoring/requests/create-pain-monitoring.request';

export interface IDeletePainMonitoringRequest extends ICreatePainMonitoringRequest {
  ID: string;
}

export class DeletePainMonitoringRequest extends CreatePainMonitoringRequest {
  ID: string;

  constructor(request: IDeletePainMonitoringRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IDeletePainMonitoringRequest) {
    return new DeletePainMonitoringRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
