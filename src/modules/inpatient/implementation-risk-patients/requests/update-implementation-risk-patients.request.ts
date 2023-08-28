import {
  CreateImplementationRiskPatientsRequest,
  ICreateImplementationRiskPatientsRequest,
} from '@modules/inpatient/implementation-risk-patients/requests/create-implementation-risk-patients.request';

export interface IUpdateImplementationRiskPatientsRequest extends ICreateImplementationRiskPatientsRequest {
  ID: string;
  emr_id : string;
}

export class UpdateImplementationRiskPatientsRequest extends CreateImplementationRiskPatientsRequest {
  ID: string;
  emr_id : string;

  constructor(request: IUpdateImplementationRiskPatientsRequest) {
    super(request);
    this.ID = request.ID;
    this.emr_id = request.emr_id;
  }

  static createFromJson(json: IUpdateImplementationRiskPatientsRequest) {
    return new UpdateImplementationRiskPatientsRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, id: this.ID, emr_id : this.emr_id};
  }
}
