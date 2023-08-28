import { ICreateResultUsgRequest, CreateResultUsgRequest } from "./create-result-usg-request";

export interface IUpdateResultUsgRequest extends ICreateResultUsgRequest {
  ID: string;
}

export class UpdateResultUsgRequest extends CreateResultUsgRequest {
  ID: string;

  constructor(request: IUpdateResultUsgRequest) {
    super(request);
    this.ID = request.ID;
  }

  static createFromJson(json: IUpdateResultUsgRequest) {
    return new UpdateResultUsgRequest(json);
  }
}