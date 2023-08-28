import { ICreateCheckSchirmerTestRequest, CreateCheckSchirmerTestRequest } from './create-check-schirmer-test.request';

export interface IUpdateCheckScirmerTestRequest extends ICreateCheckSchirmerTestRequest {
  ID: string;
}

export class UpdateCheckScirmerTestRequest extends CreateCheckSchirmerTestRequest {
  ID: string;

  constructor(request: IUpdateCheckScirmerTestRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateCheckScirmerTestRequest) {
    return new UpdateCheckScirmerTestRequest(json);
  }
}
