import {
  CreateImplementationRiskPatientsRequest,
  ICreateImplementationRiskPatientsRequest,
} from '@modules/inpatient/implementation-risk-patients/requests/create-implementation-risk-patients.request';

export interface IDeleteImplementationRiskPatientsRequest extends ICreateImplementationRiskPatientsRequest {
  ID: string;
}

export class DeleteImplementationRiskPatientsRequest extends CreateImplementationRiskPatientsRequest {
  ID: string;

  constructor(request: IDeleteImplementationRiskPatientsRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IDeleteImplementationRiskPatientsRequest) {
    return new DeleteImplementationRiskPatientsRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
