import { CreateCpptRoRequest, ICreateCpptRoRequest } from '@modules/ro/cppt/requests/create-cppt-ro.request';

export interface IUpdateCpptRoRequest extends ICreateCpptRoRequest {
  ID: string;
}

export class UpdateCpptRoRequest extends CreateCpptRoRequest {
  ID: string;

  constructor(request: IUpdateCpptRoRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCpptRoRequest) {
    return new UpdateCpptRoRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
