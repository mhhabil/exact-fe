import {CreateCpptOkRequest, ICreateCpptOkRequest} from '@modules/operating-room/cppt/requests/create-cppt-ok.request';

export interface IUpdateCpptOkRequest extends ICreateCpptOkRequest {
  ID: string;
}

export class UpdateCpptOkRequest extends CreateCpptOkRequest {
  ID: string;

  constructor(request: IUpdateCpptOkRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCpptOkRequest) {
    return new UpdateCpptOkRequest(json);
  }

  normalize(): any {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
