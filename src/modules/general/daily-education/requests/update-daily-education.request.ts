import {
  CreateDailyEducationRequest,
  ICreateDailyEducationRequest,
} from '@modules/general/daily-education/requests/create-daily-education.request';

export interface IUpdateDailyEducationRequest extends ICreateDailyEducationRequest {
  ID: string;
}

export class UpdateDailyEducationRequest extends CreateDailyEducationRequest {
  ID: string;

  constructor(request: IUpdateDailyEducationRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateDailyEducationRequest) {
    return new UpdateDailyEducationRequest(json);
  }

  normalize() {
    const request = super.normalize();
    return {...request, ID: this.ID};
  }
}
