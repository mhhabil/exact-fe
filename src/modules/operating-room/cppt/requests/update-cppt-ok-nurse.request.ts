import {
  CreateCpptOkNurseRequest,
  ICreateCpptOkNurseRequest,
} from '@modules/operating-room/cppt/requests/create-cppt-ok-nurse.request';

export interface IUpdateCpptOkNurseRequest extends ICreateCpptOkNurseRequest {
  ID: string;
}

export class UpdateCpptOkNurseRequest extends CreateCpptOkNurseRequest {
  ID: string;

  constructor(request: IUpdateCpptOkNurseRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCpptOkNurseRequest) {
    return new UpdateCpptOkNurseRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
