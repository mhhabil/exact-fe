import {
  CreateCpptOutPatientNurseRequest,
  ICreateCpptOutPatientNurseRequest,
} from '@modules/outpatient/cppt/requests/create-cppt-out-patient-nurse.request';

export interface IUpdateCpptOutPatientNurseRequest extends ICreateCpptOutPatientNurseRequest {
  ID: string;
}

export class UpdateCpptOutPatientNurseRequest extends CreateCpptOutPatientNurseRequest {
  ID: string;

  constructor(request: IUpdateCpptOutPatientNurseRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCpptOutPatientNurseRequest) {
    return new UpdateCpptOutPatientNurseRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
