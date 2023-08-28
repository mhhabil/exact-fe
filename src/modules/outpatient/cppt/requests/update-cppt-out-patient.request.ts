import {
  CreateCpptOutPatientRequest,
  ICreateCpptOutPatientRequest,
} from '@modules/outpatient/cppt/requests/create-cppt-out-patient.request';

export interface IUpdateCpptOutPatientRequest extends ICreateCpptOutPatientRequest {
  ID: string;
}

export class UpdateCpptOutPatientRequest extends CreateCpptOutPatientRequest {
  ID: string;

  constructor(request: IUpdateCpptOutPatientRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCpptOutPatientRequest) {
    return new UpdateCpptOutPatientRequest(json);
  }

  normalize(): any {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
